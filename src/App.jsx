import "./App.css";
import Hero from "./Hero";
import Skill from "./Skill";
import Projects from "./projects";
import Services from "./Services";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* Fixed top navigation bar */}
      <div className="navBox">
        <Navbar />
      </div>

      {/* Main content flow */}
      <div className="heroBox">
        <Hero />
        <Skill />
        <Projects />
        <Services />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
