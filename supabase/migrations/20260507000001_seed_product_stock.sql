-- Bulk-set stock quantity to 10 for all products and variations.
-- Run this in the Supabase SQL Editor.

BEGIN;

UPDATE public.products
SET stock_quantity = 10,
    available = true,
    updated_at = NOW();

UPDATE public.product_variations
SET stock_quantity = 10
WHERE TRUE;

COMMIT;

-- Verify
SELECT id, name, stock_quantity, available FROM public.products ORDER BY name;
SELECT id, product_id, name, stock_quantity FROM public.product_variations ORDER BY product_id;
