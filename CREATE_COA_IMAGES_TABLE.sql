-- ============================================
-- CREATE COA IMAGES TABLE (Alternative to Storage Bucket)
-- ============================================
-- Run this in Supabase SQL Editor if you prefer storing images directly in the database

CREATE TABLE IF NOT EXISTS coa_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id UUID REFERENCES coa_reports(id) ON DELETE CASCADE,
  image_data TEXT NOT NULL, -- Stores the Base64 image string
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE coa_images ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public read access" ON coa_images FOR SELECT TO public USING (true);
CREATE POLICY "Public write access" ON coa_images FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Public update access" ON coa_images FOR UPDATE TO public USING (true);
CREATE POLICY "Public delete access" ON coa_images FOR DELETE TO public USING (true);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_coa_images_report_id ON coa_images(report_id);

DO $$
BEGIN
  RAISE NOTICE '✅ Table "coa_images" created successfully ready for Base64 storage';
END $$;
