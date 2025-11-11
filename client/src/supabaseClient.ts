import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl: string = "https://cxmzlycrqyuqvzqkgtfn.supabase.co"
const supabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4bXpseWNycXl1cXZ6cWtndGZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNDU4ODcsImV4cCI6MjA3NzkyMTg4N30.izqp2LJF-ScEqy7ptiApfy1zcisLeIG6kJ9Fh1sftxA"

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)
