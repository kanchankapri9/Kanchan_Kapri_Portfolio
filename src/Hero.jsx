import "./Hero.css";
import Button from "./button";

function Hero() {
  const heroLinks = {
    resume: "/Kanchan_Kapri_Resume.pdf",
    projects: "#project",
    github: "https://github.com/kanchankapri9",
  };

  return (
    <section id="hero">
      <div className="hero-container">
        <div className="sec1">
          <div className="intro">
            <h1 className="hero-main-title">
              Hey, I am <span className="name-highlight">Kanchan </span>
            </h1>
            <div className="hero-divider-line" aria-hidden="true"></div>
            <h3 className="hero-subtitle">
              BCA (DS & AI) Student | Full-Stack Developer
            </h3>
            <p className="hero-description">
              Passionate about building clean web applications, solving algorithmic problems, and developing machine learning solutions.
            </p>
          </div>

          <div className="hero-actions">
            <Button
              name="Hire Me"
              classN="hero-btn btn-primary"
              href={heroLinks.resume}
              target="_blank"
              rel="noreferrer"
            />
            <Button
              name="Projects"
              classN="hero-btn btn-secondary"
              href={heroLinks.projects}
            />
          </div>
        </div>

        <div className="sec2">
          <div className="circle">
            <div className="hero-img">
              <img src="/Suit_Pick_facing_front.jpeg" alt="Kanchan Kapri" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
