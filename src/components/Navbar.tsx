import { NavLink } from "react-router";

function NavBar(){
    return (
        <nav>
            {/*  */}
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>

    );
}

export default NavBar;