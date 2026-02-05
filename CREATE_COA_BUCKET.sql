-- ============================================
-- CREATE COA IMAGES BUCKET
-- ============================================
-- Run this in Supabase SQL Editor to create the bucket for Lab Reports

-- 1. Create the bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'coa-images',
  'coa-images',
  true,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/bmp', 'image/tiff', 'image/svg+xml', 'image/heic', 'image/heif', 'application/pdf']
) ON CONFLICT (id) DO UPDATE
SET 
  public = true,
  file_size_limit = 10485760,
  allowed_mime_types = ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/bmp', 'image/tiff', 'image/svg+xml', 'image/heic', 'image/heif', 'application/pdf'];

-- 2. Enable RLS (just in case)
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 3. Create Policies

-- Allow public to VIEW images
DROP POLICY IF EXISTS "Public read access for coa images" ON storage.objects;
CREATE POLICY "Public read access for coa images"
ON storage.objects FOR SELECT TO public
USING (bucket_id = 'coa-images');

-- Allow public to UPLOAD images (for admin usage)
DROP POLICY IF EXISTS "Anyone can upload coa images" ON storage.objects;
CREATE POLICY "Anyone can upload coa images"
ON storage.objects FOR INSERT TO public
WITH CHECK (bucket_id = 'coa-images');

-- Allow public to UPDATE images
DROP POLICY IF EXISTS "Anyone can update coa images" ON storage.objects;
CREATE POLICY "Anyone can update coa images"
ON storage.objects FOR UPDATE TO public
USING (bucket_id = 'coa-images')
WITH CHECK (bucket_id = 'coa-images');

-- Allow public to DELETE images
DROP POLICY IF EXISTS "Anyone can delete coa images" ON storage.objects;
CREATE POLICY "Anyone can delete coa images"
ON storage.objects FOR DELETE TO public
USING (bucket_id = 'coa-images');

-- 4. Verification
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'coa-images') THEN
    RAISE NOTICE '✅ Bucket "coa-images" created successfully!';
  ELSE
    RAISE EXCEPTION '❌ Failed to create bucket';
  END IF;
END $$;
