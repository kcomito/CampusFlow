import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../lib/supabase";

function DashboardPage(){
    
    const navigate = useNavigate();

    async function handleLogOut(){
        const { error } = await supabase.auth.signOut();

        if (error){
            console.log("Logout error: ", error.message);
            return;
        }
        navigate("/login");
    }

    // useEffect measn run some code after the component appears on the page
    useEffect(() =>{
        //session check
        async function checkSession(){
            // asks supabasae whether the browser currently has an authenticated session
            // const data pulls the return data object out of the response
            const { data } = await supabase.auth.getSession();

            console.log("current session::", data.session);

            if (!data.session){
                navigate("/login");
            }
        }
        checkSession();
    }, [navigate]);
    
    return (
        <main className="dashboard-page"> {/* Outermost JSX element */}
            
            <h1>Dashboard Page</h1> {/* Displays text Dashboard Page */}

            <button type="button" onClick={handleLogOut}>Logout</button>

        </main>
    );
}

export default DashboardPage