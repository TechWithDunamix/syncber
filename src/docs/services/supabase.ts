import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

function createSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      "Missing PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY in .env — Supabase calls will fail."
    );
    return null;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  const client = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      fetch: (url, options) => {
        const opts = { ...options };
        if (!opts.signal) {
          const ctrl = new AbortController();
          const t = setTimeout(() => ctrl.abort(), 10000);
          opts.signal = ctrl.signal;
          return fetch(url, opts).finally(() => clearTimeout(t));
        }
        return fetch(url, opts);
      },
    },
  });

  clearTimeout(timeout);
  return client;
}

export const supabase = createSupabaseClient();

export function requireSupabase() {
  if (!supabase) {
    throw new Error("Supabase client not initialized. Check your .env file.");
  }
  return supabase;
}
