
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Load .env manually
const envPath = path.resolve(process.cwd(), '.env');
let envConfig: Record<string, string> = {};

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim().replace(/^["']|["']$/g, ''); // Remove quotes if present
            envConfig[key] = value;
        }
    });
} catch (e) {
    console.error('⚠️ Could not read .env file');
}

const supabaseUrl = envConfig.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = envConfig.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase credentials. Checked .env file.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
    console.log('🔍 Verifying COA Setup...');

    // 1. Check Table
    console.log('\n--- Checking Database Table [coa_reports] ---');
    const { data: tableData, error: tableError } = await supabase
        .from('coa_reports')
        .select('count', { count: 'exact', head: true });

    if (tableError) {
        if (tableError.code === '42P01') {
            console.error('❌ Table "coa_reports" DOES NOT EXIST.');
            console.log('   👉 Please run the SQL in CREATE_COA_TABLE.sql');
        } else {
            console.error('❌ Error checking table:', tableError.message);
        }
    } else {
        console.log('✅ Table "coa_reports" exists.');
    }

    // 2. Check Storage Bucket
    console.log('\n--- Checking Storage Bucket [coa-images] ---');
    const { data: buckets, error: bucketError } = await supabase
        .storage
        .listBuckets();

    if (bucketError) {
        console.error('❌ Error listing buckets:', bucketError.message);
    } else {
        const bucket = buckets.find(b => b.id === 'coa-images');
        if (bucket) {
            console.log('✅ Bucket "coa-images" exists.');
            if (bucket.public) {
                console.log('✅ Bucket is public.');
            } else {
                console.warn('⚠️ Bucket exists but is NOT public. Images might not load.');
            }
        } else {
            console.error('❌ Bucket "coa-images" DOES NOT EXIST.');
            console.log('   👉 Please run the SQL in CREATE_STORAGE_BUCKET.sql');
            console.log('   Available buckets:', buckets ? buckets.map(b => b.id).join(', ') : 'None');
        }
    }

    console.log('\n--- Test Completed ---');
}

verify().catch(console.error);
