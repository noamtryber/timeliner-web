import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tbvszyxrrtqorwnionfv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRidnN6eXhycnRxb3J3bmlvbmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjI0MDAsImV4cCI6MjAyNTM5ODQwMH0.JbOQeGxUXsHQRPtxvGwXGBMwXD8RnGHpXOHBVMz5GXE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});