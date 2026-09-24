import React from "react";
import "./ServiceCard.css";

/**
 * ServiceCard Component
 * -----------------------------------------------------------------------------
 * Reusable, tactile papercraft card designed for presenting professional services.
 * Features:
 * - Tactile 3D paper-carve number accent (inspired by "RUTH" editorial carve)
 * - Clear title and concise description
 * - Feature highlights list for scannability
 * - Smooth elevation and border transition on hover
 * 
 * @param {string} number - Sequential service indicator (e.g. "01")
 * @param {string} title - Name of the service offering
 * @param {string} description - Brief summary of what is delivered
 * @param {Array<string>} features - Bullet points of key highlights
 */
function ServiceCard({ number, title, description, features = [] }) {
  return (
    <div className="service-card paper-carve">
      {/* Top Header: Carved Number Badge */}
      <div className="service-card-top">
        <span className="service-number">{number}</span>
      </div>

      {/* Main Content */}
      <div className="service-card-body">
        <h3 className="service-title">{title}</h3>
        <p className="service-desc">{description}</p>

        {/* Feature List */}
        {features.length > 0 && (
          <ul className="service-feature-list">
            {features.map((item, idx) => (
              <li key={idx} className="service-feature-item">
                <span className="feature-check" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ServiceCard;
