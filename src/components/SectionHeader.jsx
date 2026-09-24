import React from "react";
import "./SectionHeader.css";

/**
 * SectionHeader Component
 * -----------------------------------------------------------------------------
 * Editorial section header inspired by:
 * - Porsche Poster: Architectural typography & minimalist divider lines
 * - "RUTH" Book Cover: Tactile 3D paper-carved number badge
 */
function SectionHeader({
  number = "01",
  badge = "",
  title,
  highlight = "",
  subtitle = "",
  align = "left",
}) {
  return (
    <div className={`section-header-wrap align-${align}`}>
      {/* Top Meta Line: Number + Pill Badge + Architectural Line */}
      <div className="section-meta-row">
        <span className="section-number-pill">{number}</span>
        {badge && <span className="section-badge-text">{badge}</span>}
        <div className="section-divider-line" aria-hidden="true" />
      </div>

      {/* Main Title with Accent Highlight */}
      <h2 className="section-main-title">
        {title}
        {highlight && (
          <span className="title-accent-span"> {highlight}</span>
        )}
      </h2>

      {/* Subtitle description */}
      {subtitle && <p className="section-sub-desc">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
