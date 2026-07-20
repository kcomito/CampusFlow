import { Link, NavLink } from "react-router";
import { useState } from "react";

function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar__container">
                
                <Link to="/" className="navbar__brand" onClick={closeMenu}>
                    CampusFlow
                </Link>

                <button type="button" 
                            className={isMenuOpen ? "navbar__toggle is-active" : "navbar__toggle"} 
                            onClick={() => setIsMenuOpen((previousState) => !previousState)}
                            aria-label="Toggle navigation"
                            aria-expanded={isMenuOpen}
                            aria-controls="navbar-menu">

                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>

                            </button>

                

                <nav id="navbar-menu" className={isMenuOpen ? "navbar__menu is-active" : "navbar__menu"}>
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <NavLink to="/dashboard" 
                            className={({ isActive }) => (isActive ? "navbar__link active-link" : "navbar__link")} onClick={closeMenu}>Dashboard</NavLink>
                        </li>

                        <li className="navbar__item">
                            <NavLink to="/login" 
                            className={({ isActive }) => (isActive ? "navbar__link active-link" : "navbar__link")} onClick={closeMenu}>Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    );
}

export default NavBar;
// Notes: 