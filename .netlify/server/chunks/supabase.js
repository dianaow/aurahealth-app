import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://epizwxvigvjdafptdmxe.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwaXp3eHZpZ3ZqZGFmcHRkbXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5NDY3NDEsImV4cCI6MjAzNjUyMjc0MX0.vRtoJkwOT6RnzMx6lNVfOiZDCnrBjTQfleLJZRzLlMM";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export {
  supabase as s
};
