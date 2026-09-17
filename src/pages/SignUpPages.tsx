import { Link } from "react-router";
import { useState, type FormEvent} from "react";
import { supabase } from "../lib/supabase";

function SignUpPages(){
    /* All functions go before the return */
    /* 
        a state value named email
        a setter named setEmail
        an initlaied value of an empty screen */
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [passwordConfirm, setPasswordConfirm] = useState("");
        const [error, setError] = useState("");

        const [success, setSuccess] = useState("");

        /* the function is async because app sends a request to server and waits for response
        async lets us pause for that response without freezing the app */
        async function handleSubmit(event: FormEvent<HTMLFormElement>){
            event.preventDefault(); /* by defaul, submitting an HTML form tires to send the form somewhere, in React we dont want that */
            setSuccess("");
            setError("");

            /* Check password length */
            if (password.length < 8){
                setError("Password must be at least 8 characters");
                            return;
            }
            
            /* Check password match */
            if (password !== passwordConfirm){
                setError("Passwords do not match");
                return;
            }

            setError("");
            
            const { data, error: signupError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name,
                    },
                },
            });

            /* if supabase finds a problem it puts message into React error  */
            if (signupError){
                setError(signupError.message);
                return;
            }

            setSuccess("Account created successfully.");

        }
    
    
    return(
        <main className="signup-page">
            <div>
            <h1>Signup Page</h1>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">First and Last Name:</label>
                <input 
                type="text"
                id="name"
                name="name"
                value={name}
                required

                onChange = {(event) => { {/* when the user changes the input save the new input into email */}
                        setName(event.target.value);
                    }}
                />

                <br/>
                

                <label htmlFor="email">Email:</label>
                <input 
                type="email"
                id="email"
                name="email"
                value={email}
                required

                onChange = {(event) => { {/* when the user changes the input save the new input into email */}
                        setEmail(event.target.value);
                    }}
                />

                <br/>

                <label htmlFor="password">Password:</label>
                <input
                id="password"
                type="password"
                name="password"
                value={password}
                required

                onChange = {(event) => {
                    setPassword(event.target.value);
                }}
                />

               <label htmlFor="passwordConfirm">Confirm Password:</label>
                <input
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                required

                onChange = {(event) => {
                    setPasswordConfirm(event.target.value);
                }}
                />

                {error && <p>{error}</p>}    
                {success && <p>{success}</p>}

                <br/>

                <button type="submit">Submit</button>
            </form>
    
                <Link to="/login">Already have an account?</Link>

            </div>
        </main>
        

    );
}


export default SignUpPages;