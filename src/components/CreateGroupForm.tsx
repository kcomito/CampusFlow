import { useState, type FormEvent } from "react";
import { supabase } from "../lib/supabase";

// Prop type
type CreateGroupFormProps = {
  onGroupCreated: () => void;
};

function CreateGroupForm({ onGroupCreated }: CreateGroupFormProps){
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        // clear old messages at the start of submissions
        setSuccess("");
        setError("");

        // get authenticated user, get logged-in user
        const { data: userData } = await supabase.auth.getUser();

        // verify user exists
         if (!userData.user){
            setError("You must be logged in to create a group.");
            return;
        }

        // insert into groups table
        const { error: insertError } = await supabase
        .from("groups") // use the "groups" table
        .insert({ // insert a new row, which contains al below
            name,
            description,
            created_by: userData.user.id,
        });

        // if insert fails, show error
        if (insertError) {
            setError(insertError.message);
            return;
        }

        // if there is no error, set success
        setSuccess("Group created successfully.");

        //clear inputs
        setName("")
        setDescription("")

        onGroupCreated();
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="groupName">Group Name:</label>
            <input
                id="groupName"
                type="text"
                value={name}
                //onChange is what updates React state when the user types
                onChange={(event) => setName(event.target.value)}
                required
            />

            <label htmlFor="groupDescription">Description:</label>
            <textarea
                id="groupDescription"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
        

            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            <button type="submit">Create Group</button>
        </form>

    )
}

export default CreateGroupForm;