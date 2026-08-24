import { useEffect, useRef, useState } from "react";
import "./Navbar.css";



// the logic for the hamburger menu is implemented in this component. It uses useState to manage the open/close state of the menu, and useEffect to handle clicks outside the menu and the Escape key to close it. The menu items are rendered as a list, and clicking on any item will close the menu.
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <nav id="nav" ref={navRef}>
      <div className="navMain">
        <div className="brand">
          <p>Kanchan Kapri</p>
        </div>
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menu Items */}
        <div className={`listcount ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#skill" onClick={closeMenu}>Skills</a>
            </li>
            <li>
              <a href="#project" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
