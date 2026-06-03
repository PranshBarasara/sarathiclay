import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://hlmtyhgniofgznonynnb.supabase.co";
// Fallback to a dummy key to prevent build-time crashes if environment variables aren't injected yet
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "dummy-anon-key-for-build";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

