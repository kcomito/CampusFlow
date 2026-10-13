import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../lib/supabase";
import CreateGroupForm from "../components/CreateGroupForm";

type Group = {
        id: string;
        name: string;
        description: string | null;
        created_at: string;
    };


function DashboardPage(){
    
    const navigate = useNavigate();
    const [groups, setGroups] = useState<Group[]>([]);

    async function handleLogOut(){
        const { error } = await supabase.auth.signOut();

        if (error){
            console.log("Logout error: ", error.message);
            return;
        }
        navigate("/login");
    }

    async function fetchGroups() {
        const { data, error } = await supabase
            .from("groups")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.log("Error fetching groups:", error.message);
            return;
        }
        console.log("Fetched groups:", data);
        setGroups(data);
    }

    // useEffect measn run some code after the component appears on the page
    useEffect(() =>{
        //session check
        async function checkSession(){
            // asks supabasae whether the browser currently has an authenticated session
            // const data pulls the return data object out of the response
            const { data } = await supabase.auth.getSession();

            //console.log("current session::", data.session);

            if (!data.session){
                navigate("/login");
                return;
            }
            fetchGroups();
        }
        checkSession();
    }, [navigate]);
    
    return (
        <main className="dashboard-page"> {/* Outermost JSX element */}
            
            <h1>Dashboard Page</h1> {/* Displays text Dashboard Page */}

            <CreateGroupForm onGroupCreated={fetchGroups} />

            {groups.map((group) => (
                <div key={group.id}>
                    <h3>{group.name}</h3>
                    <p>{group.description}</p>
                </div>
            ))}


            <button type="button" onClick={handleLogOut}>
                Logout
            </button>
        </main>
    );
}

export default DashboardPage