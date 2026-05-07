-- Migration: Replace all categories with the final 6
-- Run this in the Supabase SQL Editor.
-- Final categories: GLP, Peps, Bundles, Extras, Skin care, Pens and Cartridges

BEGIN;

-- 1. Drop the FK constraint check by clearing products' category references
--    that point to categories we are about to remove. We keep the products,
--    just unset their category so the deletion below succeeds.
UPDATE public.products
SET category = 'Uncategorized'
WHERE category NOT IN ('glp', 'peps', 'bundles', 'extras', 'skincare', 'pens-cartridges');

-- 2. Remove every existing category row
DELETE FROM public.categories;

-- 3. Insert the final 6 categories
INSERT INTO public.categories (id, name, sort_order, icon, active) VALUES
  ('glp',             'GLP',                 1, 'Pill',         true),
  ('peps',            'Peps',                2, 'FlaskConical', true),
  ('bundles',         'Bundles',             3, 'Gift',         true),
  ('extras',          'Extras',              4, 'Package',      true),
  ('skincare',        'Skin care',           5, 'Sparkles',     true),
  ('pens-cartridges', 'Pens and Cartridges', 6, 'Syringe',      true);

COMMIT;

-- Verify
SELECT id, name, sort_order, icon, active FROM public.categories ORDER BY sort_order;
