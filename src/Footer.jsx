import "./Footer.css";

const GOOGLE_PAY_ID = "kanchankapri@nyes";

function Footer() {
  const handleCopyUpi = async () => {
    try {
      await navigator.clipboard.writeText(GOOGLE_PAY_ID);
      alert("UPI ID copied: " + GOOGLE_PAY_ID);
    } catch {
      alert("UPI ID: " + GOOGLE_PAY_ID);
    }
  };

  return (
    <footer id="footer">
      <div className="footer-wrap">
        <div className="tea-badge" aria-hidden="true">
          <svg viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="30" className="tea-bg" />
            <ellipse cx="30" cy="34" rx="14" ry="10" className="tea-lemon" />
            <path d="M22 34h16" className="tea-cut" />
            <path d="M24 24c4-7 12-8 18-3" className="tea-steam" />
            <path d="M18 43h26" className="tea-line" />
          </svg>
        </div>

        <p className="footer-note">Buy me a lemon tea</p>

        <div className="payment-box">
          <p className="pay-motivation">
            Support my journey, fuel more creative builds.
          </p>
          <div className="payment-actions">
            <button
              type="button"
              className="pay-btn"
              onClick={handleCopyUpi}
            >
              Copy UPI ID
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-row">
            <a
              className="social-icon"
              href="https://instagram.com"
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
              className="social-icon"
              href="https://facebook.com"
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
              className="social-icon"
              href="https://youtube.com"
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
          <p>Made with Kanchan&apos;s love.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
