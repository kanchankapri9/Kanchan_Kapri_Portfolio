import "./about.css";
import { useForm, ValidationError } from "@formspree/react";

function About() {
  const [state, handleSubmit] = useForm("mbdanqdq");
  const profileLinks = {
    email: "mailto:kaprikanchan09@gmail.com",
    youtube: "https://www.youtube.com/@Codinggirl-no1",
    github: "https://github.com/kanchankapri9",
    linkedin: "https://www.linkedin.com/in/kanchan-kapri/",
    location:
      "https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh/@26.848692,80.9425127,12z/data=!3m1!4b1!4m6!3m5!1s0x399bfd991f32b16b:0x93ccba8909978be7!8m2!3d26.8466937!4d80.946166!16zL20vMDIydHE0?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D",
  };

  return (
    <section className="information" id="about">
      <div className="about-container">
        <div className="about-contact-grid">
          {/* Left Column: About Me */}
          <div className="about-profile-card paper-carve">
            <h2 className="card-section-title">About Me</h2>

            <div className="profile-header-row">
              <div className="imgCircle">
                <img src="/Pink_shirt_casual_pik.jpeg" alt="Kanchan Kapri" />
              </div>
              <div className="profile-titles">
                <h3 className="profile-name">Kanchan Kapri</h3>
                <p className="profile-spec">BCA (DS & AI) Student | Sigma 8.0</p>
              </div>
            </div>

            <div className="bio-text">
              <p>
                Hi, I&apos;m <strong>Kanchan Kapri</strong>. I am a BCA student specializing in <strong>Data Science &amp; Artificial Intelligence</strong>, and a Sigma 8.0 student.
              </p>
              <p>
                I actively build full-stack web applications, practice data structures and algorithms, and develop machine learning models to solve practical problems.
              </p>
            </div>

            <div className="status-grid">
              <div className="status-item">
                <div className="status-icon-wrap">
                  <img src="/education.png" alt="Education" />
                </div>
                <div className="status-info">
                  <span className="status-label">Education</span>
                  <span className="status-val">BCA (DS & AI)</span>
                </div>
              </div>

              <a className="status-item is-link" href={profileLinks.email}>
                <div className="status-icon-wrap">
                  <img src="/email.png" alt="Email" />
                </div>
                <div className="status-info">
                  <span className="status-label">Email</span>
                  <span className="status-val">kaprikanchan09@gmail.com</span>
                </div>
              </a>

              <a
                className="status-item is-link"
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <div className="status-icon-wrap">
                  <img src="/linkedin.png" alt="LinkedIn" />
                </div>
                <div className="status-info">
                  <span className="status-label">LinkedIn</span>
                  <span className="status-val">kanchan-kapri</span>
                </div>
              </a>

              <a
                className="status-item is-link"
                href={profileLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                <div className="status-icon-wrap">
                  <img src="/github.png" alt="GitHub" />
                </div>
                <div className="status-info">
                  <span className="status-label">GitHub</span>
                  <span className="status-val">kanchankapri9</span>
                </div>
              </a>

              <a
                className="status-item is-link"
                href={profileLinks.youtube}
                target="_blank"
                rel="noreferrer"
              >
                <div className="status-icon-wrap">
                  <img src="/youtube.svg" alt="YouTube" />
                </div>
                <div className="status-info">
                  <span className="status-label">YouTube</span>
                  <span className="status-val">Codinggirl-no1</span>
                </div>
              </a>

              <a
                className="status-item is-link"
                href={profileLinks.location}
                target="_blank"
                rel="noreferrer"
              >
                <div className="status-icon-wrap">
                  <img src="/loc.png" alt="Location" />
                </div>
                <div className="status-info">
                  <span className="status-label">Location</span>
                  <span className="status-val">Lucknow, India</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Me Form */}
          <div className="contact-form-card paper-carve" id="contact">
            <h2 className="card-section-title">Contact Me</h2>

            {state.succeeded ? (
              <div className="form-success-card">
                <span className="success-icon">✓</span>
                <p className="form-success-title">Message Received</p>
                <p className="form-success-desc">
                  Thanks for reaching out! I will get back to you soon.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/mbdanqdq"
                method="POST"
                onSubmit={handleSubmit}
                className="editorial-form"
              >
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
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
                  <label htmlFor="email">Your Email</label>
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
                  className="editorial-submit-btn"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
