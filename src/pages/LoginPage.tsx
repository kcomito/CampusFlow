import { Link, useNavigate } from "react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "../lib/supabase";

function LoginPage (){
    /* 
    a state value named email
    a setter named setEmail
    an initlaied value of an empty string
    
    */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault(); /* by defaul, submitting an HTML form tires to send the form somewhere, in React we dont want that */
        if (password.length < 8){
            setError("Password must be at least 8 characters");
                        return;

        }
        setError("");
        
        /* sends data (email and pw) to supabase and waits for a response, data then has success auth information
        or loginError if occured */
        const { data, error: loginError} = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (loginError){
            setError(loginError.message);
            return;
        }

        navigate("/dashboard")
    }


    return (
        <main className="login-page">
            <div>
                <h1>Login Page</h1>

            <form onSubmit={handleSubmit}> {/* handleSubmit give React the funct and run later when form submitted */}
                <label htmlFor="email">Email:</label>
                    {/* User changes the input
                    React gives the function an event
                    event.target is the input
                    event.target.value is the current text
                    setEmail saves that text in state */}
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    required

                    onChange = {(event) => { 
                        // when the user changes the input save the new input into email */}
                        setEmail(event.target.value);
                    }} 
                    />
                    

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
                    

                    {error && <p>{error}</p>}
                    

                <button type="submit">Submit</button>
            </form>

            Don't have an account?<Link to="/signup"> Sign up</Link>
            </div>
        </main>
            
            
        
        
    );
}

export default LoginPage;