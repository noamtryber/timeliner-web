import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tbvszyxrrtqorwnionfv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRidnN6eXhycnRxb3J3bmlvbmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjIwMjYsImV4cCI6MjA1MjA5ODAyNn0.WnzWIMESNQvFxiApgD-qUUzo3L2BUfbPGtmJZ0Dca_Q";

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);