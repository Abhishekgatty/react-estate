// import { createClient, SupabaseClient } from '@supabase/supabase-js'

// const supabaseUrl: string = "https://cxmzlycrqyuqvzqkgtfn.supabase.co"
// const supabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4bXpseWNycXl1cXZ6cWtndGZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNDU4ODcsImV4cCI6MjA3NzkyMTg4N30.izqp2LJF-ScEqy7ptiApfy1zcisLeIG6kJ9Fh1sftxA"

// export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

 // path relative to your page



// // src/supabaseClient.ts
// import { createClient } from '@supabase/supabase-js';

// // TEMPORARY: Check if env variables are loaded
// console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
// console.log('Supabase Key:', import.meta.env.VITE_SUPABASE_KEY);

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error('Supabase environment variables are not defined!');
// }

// export const supabase = createClient(supabaseUrl, supabaseKey);


// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Directly pass your Supabase URL and anon key
const supabaseUrl =  "https://cxmzlycrqyuqvzqkgtfn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4bXpseWNycXl1cXZ6cWtndGZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNDU4ODcsImV4cCI6MjA3NzkyMTg4N30.izqp2LJF-ScEqy7ptiApfy1zcisLeIG6kJ9Fh1sftxA"

export const supabase = createClient(supabaseUrl, supabaseKey);
