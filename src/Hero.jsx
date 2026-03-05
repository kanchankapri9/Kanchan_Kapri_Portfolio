// whole component in a Functional Component style
import "./Hero.css";
import Button from "./button"; //html tag
function Hero() {
  const heroLinks = {
    resume: "/Kanchan_Kapri_Resume.pdf",
    github: "https://github.com/kanchankapri9",
  };

  return (
    <div id="hero">
      <div className="sec1">
        <div className="intro">
          <h1 className="lemon-title">Hey, I am Kanchan Kapri</h1>
          <h3>BCA (DS & AI) Student | Sigma 8.0 </h3>
        </div>

        <div className="buttons">
          <Button
            name="Hire Me"
            classN="hero-btn"
            href={heroLinks.resume}
            target="_blank"
            rel="noreferrer"
          />
          <Button
            name="Projects"
            classN="hero-btn"
            href={heroLinks.github}
            target="_blank"
            rel="noreferrer"
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
  );
}

export default Hero; // export the component to use in other files
