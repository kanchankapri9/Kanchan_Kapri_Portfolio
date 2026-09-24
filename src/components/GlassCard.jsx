import React from "react";
import "./GlassCard.css";

/**
 * GlassCard Component
 * -----------------------------------------------------------------------------
 * A versatile, reusable frosted glass & tactile paper container.
 * 
 * PROPS:
 * @param {React.ReactNode} children - Inner content
 * @param {"rounded" | "arched" | "pill"} shape - Card geometry (default: "rounded")
 * @param {"glass" | "paper" | "elevated" | "forest"} variant - Material aesthetic
 * @param {boolean} hoverEffect - Enables subtle 3D lift & border sheen
 * @param {string} className - Additional CSS class names
 */
function GlassCard({
  children,
  shape = "rounded",
  variant = "glass",
  hoverEffect = true,
  className = "",
  style = {},
  ...props
}) {
  const cardClasses = [
    "glass-card-base",
    `shape-${shape}`,
    `variant-${variant}`,
    hoverEffect ? "has-hover-effect" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses} style={style} {...props}>
      <div className="glass-sheen-highlight" aria-hidden="true" />
      {children}
    </div>
  );
}

export default GlassCard;
