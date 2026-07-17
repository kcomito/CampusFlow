import { NavLink } from "react-router";

function NavBar(){
    return (
        <nav>
            {/* className={({ isActive }) => {
                if (isActive) {
                    return "active-link";
                }

                return "";
                }} */}
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>

            <NavLink to="/login" className={({ isActive}) => (isActive ? "active-link" : "")}>Login</NavLink>
            <NavLink to="/dashboard" className={({ isActive}) => (isActive ? "active-link" : "")}>Dashboard</NavLink>
        </nav>

    );
}

export default NavBar;