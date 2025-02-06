import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  if (session) {
    localStorage.setItem("supabase_session", JSON.stringify(session));
  } else {
    localStorage.removeItem("supabase_session");
  }
});