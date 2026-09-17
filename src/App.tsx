import "./App.css"; // Stylesheet connected
import {Route, Routes} from "react-router"; // named exports, not default exports, so need curly braces
import LandingPage from "./pages/LandingPage"; 
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NavBar from "./components/Navbar";
import SignUpPages from "./pages/SignUpPages";

function App() {
  return ( // return statment, tells React what should appear on the page
    <> {/* the fragment <> makes NavBa and Routes silings under one shared paret */}
      <NavBar /> {/* Navbar outside Routes stays visbile regardless of which page route is active */}
        <Routes>
          {/* Route elements
          LandingPage
          LoginPage
          DashboardPage */}

          <Route path ="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/signup" element={<SignUpPages />} />

        </Routes> {/*refers to component rahter than a build in HTML element
                      // a componen t is used like a custom JSX element */} 
    </>
  );
}

export default App; // makes App component available for another file to export
// Notes: 
  //NavLink versus Link: boht navigate without reloading whole page. NavLink knows what is currently active