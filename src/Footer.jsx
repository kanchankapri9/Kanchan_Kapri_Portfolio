import "./Footer.css";

/**
 * Footer Component
 * -----------------------------------------------------------------------------
 * Clean, minimal footer featuring social links and personal signature.
 */
function Footer() {
  return (
    <footer id="footer">
      <div className="footer-wrap paper-carve">
        <div className="footer-bottom">
          <div className="social-row">
            <a
              className="social-icon social-icon-instagram"
              href="https://www.instagram.com/kanchan_kapri_1/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect>
                <circle cx="12" cy="12" r="4.2"></circle>
                <circle cx="17.2" cy="6.8" r="1.1"></circle>
              </svg>
            </a>
            <a
              className="social-icon social-icon-facebook"
              href="https://www.facebook.com/share/1CPEAcokhG/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.4 8.2h2.2V5h-2.6c-3 0-4.6 1.9-4.6 4.7v2.1H7.4v3.2h2V20h3.2v-5h2.6l.4-3.2h-3V9.9c0-.9.4-1.7 1.8-1.7Z"></path>
              </svg>
            </a>
            <a
              className="social-icon social-icon-youtube"
              href="https://www.youtube.com/@Codinggirl-no1"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              title="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="6.5" width="18" height="11" rx="3"></rect>
                <path d="m11 10 4 2-4 2z"></path>
              </svg>
            </a>
          </div>
          <p className="footer-sign">Made with Kanchan&apos;s love.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
