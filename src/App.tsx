import "./App.css"; // Stylesheet connected

function App() {
  return ( // return statment, tells React what should appear on the page
    <main className="landing-page"> {/* Outermost JSX element */}
      <section className="hero"> {/* Child JSX element*/}
        <p className="eyebrow">Campus event planning made easier</p> {/* JSX element*/}

        <h1>CampusFlow</h1> {/**JSX (Javascript XML) write code similar to HTML inside JS */}

        <p className="hero-description">
          Plan events, organize tasks, and build stronger campus communities. Built by RAs for RAs
        </p>

         {/* type=button is a regular button not form-submission button*/}
        <button type="button">Get Started</button> {/**Everything between paratheses is JSX */}
      </section>
    </main>
  );
}

export default App; // makes App component available for another file to export
// Notes: