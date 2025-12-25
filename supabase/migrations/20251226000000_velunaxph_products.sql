-- ============================================
-- VELUNAXPH - NEW PRODUCT CATALOG
-- Run this in your Supabase SQL Editor
-- Created: 2025-12-26
-- ============================================

-- ============================================
-- 1. DELETE EXISTING DATA
-- ============================================

-- First, delete product variations (due to foreign key constraint)
DELETE FROM public.product_variations;

-- Then delete all products
DELETE FROM public.products;

-- Delete existing categories
DELETE FROM public.categories;

-- ============================================
-- 2. CREATE NEW CATEGORIES
-- ============================================

INSERT INTO public.categories (id, name, sort_order, icon, active) VALUES
-- Main Categories
('c0a80121-0001-4e78-94f8-585d77059001', 'Peptides', 1, 'FlaskConical', true),
('c0a80121-0002-4e78-94f8-585d77059002', 'Promos & Bundles', 2, 'Gift', true),
('c0a80121-0003-4e78-94f8-585d77059003', 'Accessories', 3, 'Package', true),
('c0a80121-0004-4e78-94f8-585d77059004', 'Topicals', 4, 'Droplet', true),
('c0a80121-0005-4e78-94f8-585d77059005', 'Skin Care', 5, 'Sparkles', true),
('c0a80121-0006-4e78-94f8-585d77059006', 'Pens & Cartridges', 6, 'Syringe', true);

-- ============================================
-- 3. INSERT PEPTIDE PRODUCTS
-- ============================================

INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions) VALUES

-- Tirzepatide 10mg
('a0a80001-0001-4e78-94f8-585d77059001', 
 'Tirzepatide 10mg', 
 'Tirzepatide is a novel GIP and GLP-1 receptor agonist. This dual-action peptide has shown remarkable efficacy in clinical trials for weight management and metabolic health. Laboratory tested for 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 true, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- Retatrutide 10mg
('a0a80002-0002-4e78-94f8-585d77059002', 
 'Retatrutide 10mg', 
 'Retatrutide (LY3437943) is a triple-agonist peptide targeting GIP, GLP-1, and glucagon receptors. Advanced research peptide for metabolic studies. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 true, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- Cagrilintide 5mg
('a0a80003-0003-4e78-94f8-585d77059003', 
 'Cagrilintide 5mg', 
 'Cagrilintide is a long-acting amylin analog being studied for weight management. When combined with semaglutide, it shows enhanced efficacy. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 true, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- CJC/IPA 10mg
('a0a80004-0004-4e78-94f8-585d77059004', 
 'CJC-1295/Ipamorelin 10mg', 
 'CJC-1295 with Ipamorelin is a powerful combination for growth hormone release. This blend supports muscle development, recovery, and overall vitality. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- Tesamorelin 10mg
('a0a80005-0005-4e78-94f8-585d77059005', 
 'Tesamorelin 10mg', 
 'Tesamorelin is a growth hormone-releasing hormone (GHRH) analog. FDA-approved for reducing excess abdominal fat. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- GHK-Cu 50mg
('a0a80006-0006-4e78-94f8-585d77059006', 
 'GHK-Cu 50mg', 
 'GHK-Cu (Copper Peptide) is a naturally occurring tripeptide with powerful regenerative properties. Promotes skin healing, collagen synthesis, and anti-aging benefits. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 true, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- NAD+ 500mg
('a0a80007-0007-4e78-94f8-585d77059007', 
 'NAD+ 500mg', 
 'NAD+ (Nicotinamide Adenine Dinucleotide) is a critical coenzyme for cellular energy production and DNA repair. Supports healthy aging and metabolic function. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 true, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- Epitalon 10mg
('a0a80008-0008-4e78-94f8-585d77059008', 
 'Epitalon 10mg', 
 'Epitalon is a tetrapeptide that stimulates telomerase production for cellular rejuvenation. Studied for longevity and anti-aging research. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- Snap-8 10mg
('a0a80009-0009-4e78-94f8-585d77059009', 
 'Snap-8 10mg', 
 'Snap-8 (Acetyl Octapeptide-3) is an anti-wrinkle peptide that reduces muscle contractions, smoothing expression lines. Topical and injectable applications for skin research.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- Thymosin Alpha-1 10mg
('a0a80010-0010-4e78-94f8-585d77059010', 
 'Thymosin Alpha-1 10mg', 
 'Thymosin Alpha-1 is an immune-modulating peptide that enhances T-cell function. Used in research for immune support and infectious disease studies. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- VIP 5mg
('a0a80011-0011-4e78-94f8-585d77059011', 
 'VIP 5mg', 
 'VIP (Vasoactive Intestinal Peptide) is a neuropeptide with anti-inflammatory and vasodilatory properties. Used in neurological and autoimmune research. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- Vilon 20mg
('a0a80012-0012-4e78-94f8-585d77059012', 
 'Vilon 20mg', 
 'Vilon (Lys-Glu dipeptide) is a bioregulatory peptide studied for immune system modulation and tissue regeneration. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- KLOW 80mg
('a0a80013-0013-4e78-94f8-585d77059013', 
 'KLOW 80mg', 
 'KLOW is a specialized peptide blend for advanced research applications. High concentration formula for extended protocols. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- GHKcu + KPV 60mg
('a0a80014-0014-4e78-94f8-585d77059014', 
 'GHK-Cu + KPV 60mg', 
 'A powerful combination of GHK-Cu (copper peptide) and KPV (anti-inflammatory tripeptide). Synergistic formula for skin healing and rejuvenation research. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- KPV 10mg
('a0a80015-0015-4e78-94f8-585d77059015', 
 'KPV 10mg', 
 'KPV is a tripeptide derived from alpha-MSH with potent anti-inflammatory properties. Used in gut health and autoimmune research. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- SS31 10mg
('a0a80016-0016-4e78-94f8-585d77059016', 
 'SS-31 10mg', 
 'SS-31 (Elamipretide) is a mitochondria-targeted peptide that protects cellular energy production. Used in aging and metabolic disease research. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- Mots-C 10mg
('a0a80017-0017-4e78-94f8-585d77059017', 
 'MOTS-c 10mg', 
 'MOTS-c is a mitochondrial-derived peptide that regulates metabolic homeostasis. Studied for its effects on exercise performance and metabolic health. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- AOD-9604 5mg
('a0a80018-0018-4e78-94f8-585d77059018', 
 'AOD-9604 5mg', 
 'AOD-9604 is a modified fragment of human growth hormone known for fat metabolism research. Does not affect blood sugar or tissue growth. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- Lipo-C with B12 10ml
('a0a80019-0019-4e78-94f8-585d77059019', 
 'Lipo-C with B12 10ml', 
 'Lipotropic injection blend with Vitamin B12. Contains methionine, inositol, choline, and cyanocobalamin. Supports fat metabolism and energy production.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at 2-8°C. Protect from light.'),

-- Lemon Bottle 10ml
('a0a80020-0020-4e78-94f8-585d77059020', 
 'Lemon Bottle 10ml', 
 'Lemon Bottle is a fat-dissolving solution for body contouring applications. Contains natural extracts and compounds for localized fat reduction research.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at room temperature. Protect from light.'),

-- DSIP 5mg
('a0a80021-0021-4e78-94f8-585d77059021', 
 'DSIP 5mg', 
 'DSIP (Delta Sleep-Inducing Peptide) is a neuropeptide studied for sleep regulation and stress reduction. Also researched for pain management. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- Semax 10mg
('a0a80022-0022-4e78-94f8-585d77059022', 
 'Semax 10mg', 
 'Semax is a synthetic peptide derived from ACTH. Studied for cognitive enhancement, neuroprotection, and mood support. Popular nootropic peptide. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.'),

-- Selank 10mg
('a0a80023-0023-4e78-94f8-585d77059023', 
 'Selank 10mg', 
 'Selank is an anxiolytic peptide derived from tuftsin. Studied for anti-anxiety effects without sedation. Supports cognitive function and stress resilience. Lab tested 99%+ purity.',
 0, 
 'c0a80121-0001-4e78-94f8-585d77059001',
 false, true, 100, 99.5, 'Store at -20°C. Protect from light.');

-- ============================================
-- 4. INSERT PROMO BUNDLES
-- ============================================

INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, storage_conditions) VALUES

-- Promo: Active Slim Set
('a0a80024-0024-4e78-94f8-585d77059024', 
 'Active Slim Set', 
 'Complete bundle for active lifestyle: Tirzepatide 15mg + NAD+ 500mg. Perfect combination for metabolic support and cellular energy.',
 0, 
 'c0a80121-0002-4e78-94f8-585d77059002',
 true, true, 50, 'Store at -20°C. Protect from light.'),

-- Promo: Slim & Glow Duo
('a0a80025-0025-4e78-94f8-585d77059025', 
 'Slim & Glow Duo', 
 'Beauty and wellness bundle: Tirzepatide 15mg + GHK-Cu 50mg. Supports weight management and skin rejuvenation.',
 0, 
 'c0a80121-0002-4e78-94f8-585d77059002',
 true, true, 50, 'Store at -20°C. Protect from light.'),

-- Promo: Power Trio
('a0a80026-0026-4e78-94f8-585d77059026', 
 'Power Trio', 
 'Ultimate wellness package: Tirzepatide 15mg + GHK-Cu 50mg + NAD+ 500mg. Comprehensive metabolic, anti-aging, and energy support.',
 0, 
 'c0a80121-0002-4e78-94f8-585d77059002',
 true, true, 50, 'Store at -20°C. Protect from light.'),

-- Promo: Heal and Glow Duo
('a0a80027-0027-4e78-94f8-585d77059027', 
 'Heal & Glow Duo', 
 'Skin rejuvenation bundle: GHK-Cu 50mg + KPV 10mg. Powerful combination for healing, anti-inflammation, and skin health.',
 0, 
 'c0a80121-0002-4e78-94f8-585d77059002',
 false, true, 50, 'Store at -20°C. Protect from light.'),

-- Promo: Calm and Focus Duo
('a0a80028-0028-4e78-94f8-585d77059028', 
 'Calm & Focus Duo', 
 'Cognitive wellness bundle: Semax 10mg + Selank 10mg. Supports mental clarity, focus, and stress resilience.',
 0, 
 'c0a80121-0002-4e78-94f8-585d77059002',
 false, true, 50, 'Store at -20°C. Protect from light.');

-- ============================================
-- 5. INSERT ACCESSORIES
-- ============================================

INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, storage_conditions) VALUES

-- Bacteriostatic Water
('a0a80029-0029-4e78-94f8-585d77059029', 
 'Bacteriostatic Water 3ml', 
 'Sterile water with 0.9% benzyl alcohol for reconstituting peptides. Essential for proper peptide preparation. Multi-use vial.',
 0, 
 'c0a80121-0003-4e78-94f8-585d77059003',
 false, true, 200, 'Store at room temperature.'),

-- Insulin Syringe Set
('a0a80030-0030-4e78-94f8-585d77059030', 
 'Insulin Syringe Set (10pcs)', 
 '10-piece set of 31G 8mm 1ml insulin syringes. Ultra-fine gauge for comfortable injection. Sterile and individually packaged.',
 0, 
 'c0a80121-0003-4e78-94f8-585d77059003',
 false, true, 200, 'Store in a cool, dry place.');

-- ============================================
-- 6. INSERT TOPICALS
-- ============================================

INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, storage_conditions) VALUES

-- GHK Topical
('a0a80031-0031-4e78-94f8-585d77059031', 
 'GHK Topical', 
 'Topical GHK-Cu (Copper Peptide) formula for skin application. Promotes skin healing, collagen production, and anti-aging benefits.',
 0, 
 'c0a80121-0004-4e78-94f8-585d77059004',
 false, true, 100, 'Store at room temperature. Protect from light.');

-- ============================================
-- 7. INSERT SKIN CARE
-- ============================================

INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, storage_conditions) VALUES

-- Toner 30ml
('a0a80032-0032-4e78-94f8-585d77059032', 
 'Peptide Toner 30ml', 
 'Hydrating toner enriched with peptides for daily skincare. Preps skin for better absorption of serums and treatments. Suitable for all skin types.',
 0, 
 'c0a80121-0005-4e78-94f8-585d77059005',
 false, true, 100, 'Store at room temperature.');

-- ============================================
-- 8. INSERT PENS & CARTRIDGES
-- ============================================

INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, storage_conditions) VALUES

-- Pen V1
('a0a80033-0033-4e78-94f8-585d77059033', 
 'Injection Pen V1', 
 'Reusable injection pen for precise dosing. Compatible with standard 3ml cartridges. Adjustable dose settings for accurate administration.',
 0, 
 'c0a80121-0006-4e78-94f8-585d77059006',
 false, true, 50, 'Store at room temperature.'),

-- Cartridge 3ml Set
('a0a80034-0034-4e78-94f8-585d77059034', 
 'Cartridge 3ml (10pc Set)', 
 '10-piece set of 3ml cartridges for injection pens. Sterile and ready to fill. Compatible with V1 pen and similar devices.',
 0, 
 'c0a80121-0006-4e78-94f8-585d77059006',
 false, true, 100, 'Store at room temperature.');

-- ============================================
-- 9. VERIFY INSERTION
-- ============================================

SELECT 'Categories:' as info, COUNT(*) as count FROM public.categories
UNION ALL
SELECT 'Products:', COUNT(*) FROM public.products;
