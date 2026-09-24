import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

/**
 * Navbar Component
 * -----------------------------------------------------------------------------
 * Responsive navigation bar with mobile toggle menu and backdrop blur.
 * Nav items: Skills, Projects, Services, Contact.
 */
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
        <a href="#hero" className="brand" onClick={closeMenu} aria-label="Go to home">
          <p>Kanchan Kapri</p>
        </a>

        {/* Mobile Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menu Items */}
        <div className={`listcount ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#skill" onClick={closeMenu}>Skills</a>
            </li>
            <li>
              <a href="#project" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>Services</a>
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
