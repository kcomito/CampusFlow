import { createClient } from "@supabase/supabase-js";

/* import.meta.env allows frontend to read variables that start with VITE */
const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const subabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

/*Supabase client
create makes the connection to supabase
export const means other files can import and use that connection */
export const supabase = createClient(supabaseURL, subabaseKey);
/* 
User enters name/email/password
DB recieves email + pw
DB creates account
DB returns success or error
*/


/* 
user enters email + pw
DB recieves packet
DB verifies 
*/

