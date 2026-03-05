import "./about.css";
import { useForm, ValidationError } from "@formspree/react";

function About() {
  const [state, handleSubmit] = useForm("mbdanqdq");
  const profileLinks = {
    youtube: "https://www.youtube.com/@Codinggirl-no1",
    github: "https://github.com/kanchankapri9",
    linkedin: "https://www.linkedin.com/in/kanchan-kapri/",
    location:
      "https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh/@26.848692,80.9425127,12z/data=!3m1!4b1!4m6!3m5!1s0x399bfd991f32b16b:0x93ccba8909978be7!8m2!3d26.8466937!4d80.946166!16zL20vMDIydHE0?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D",
  };

  return (
    <section className="information" id="about">
      <div className="about">
        <h2>About Me</h2>

        <div className="profile">
          <div className="imgCircle">
            <img src="/Pink_shirt_casual_pik.jpeg" alt="Kanchan Kapri" />
          </div>

          <div className="bio">
            <p>
              Hi I'm <strong>Kanchan Kapri</strong>
            </p>
            <p>
              I am a BCA student specializing in Data Science and Artificial
              Intelligence, and a Sigma 8.0 student. I am currently learning
              full stack web development, DSA, machine learning, data science,
              and deep learning while building practical projects.
            </p>
          </div>

          <div className="status">
            <div className="status-item">
              <img src="/education.png" alt="Education" />
              <span>BCA (DS & AI)</span>
            </div>
            <div className="status-item">
              <img src="/email.png" alt="Email" />
              <span>kaprikanchan09@gmail.com</span>
            </div>
            <a
              className="status-item"
              href={profileLinks.youtube}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/youtube.svg" alt="YouTube" />
              <span>YouTube Channel</span>
            </a>
            <a
              className="status-item"
              href={profileLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/github.png" alt="GitHub" />
              <span>GitHub Profile</span>
            </a>
            <a
              className="status-item"
              href={profileLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              className="status-item"
              href={profileLinks.location}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/loc.png" alt="Location" />
              <span>Open Location on Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <h2>Contact Me</h2>

        {state.succeeded ? (
          <p className="form-success">
            Thanks for your message. I will get back to you soon.
          </p>
        ) : (
          <form
            action="https://formspree.io/f/mbdanqdq"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="form-error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="form-error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Let's build something amazing together!"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="form-error"
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default About;

