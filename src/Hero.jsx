// whole component in a Functional Component style
import "./Hero.css";
import Button from "./button"; //html tag
function Hero() {
  return (
    <div id="hero">
      <div className="sec1">
        <div className="intro">
          <h1>Hey, I am Kanchan Kapri</h1>
          <h3>BCA (DS & AI) Student | Sigma 8.0 </h3>
        </div>

        <div className="buttons">
          <Button name="Hire Me"  classN="hero-btn" />
          <Button name="Projects" classN="hero-btn" />
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

