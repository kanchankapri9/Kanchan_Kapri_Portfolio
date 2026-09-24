import React, { useRef, useState, useEffect, useCallback } from "react";
import "./SwipeableCards.css";

/**
 * SwipeableCards Component
 * -----------------------------------------------------------------------------
 * Reusable, high-performance swipable carousel component engineered for:
 * 1. Mobile & Tablet: Native touch-based momentum swipe with CSS Scroll Snap.
 * 2. Desktop & Laptop: Mouse drag-to-scroll, tactile Prev/Next arrow buttons,
 *    smooth keyboard arrow navigation, and interactive pagination indicators.
 *
 * @param {React.ReactNode} children - Card components to be rendered inside the track.
 * @param {string} ariaLabel - Accessibility description.
 */
function SwipeableCards({ children, ariaLabel = "Swipeable services carousel" }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0, isMoved: false });

  const childrenArray = React.Children.toArray(children);
  const totalCards = childrenArray.length;

  // Calculates active card and button disabled states
  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    // Identify which card is closest to the track center
    const cardElements = track.querySelectorAll(".swipeable-card-item");
    if (cardElements.length > 0) {
      const trackCenter = scrollLeft + clientWidth / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      cardElements.forEach((el, idx) => {
        const elCenter = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(trackCenter - elCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });
      setActiveIndex(closestIdx);
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    const handleScroll = () => {
      requestAnimationFrame(updateScrollState);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateScrollState]);

  // Smoothly centers a card by index
  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const cardElements = track.querySelectorAll(".swipeable-card-item");
    if (cardElements[index]) {
      const el = cardElements[index];
      const targetScroll = el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2;
      track.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const targetIdx = Math.max(0, activeIndex - 1);
    scrollToIndex(targetIdx);
  };

  const handleNext = () => {
    const targetIdx = Math.min(totalCards - 1, activeIndex + 1);
    scrollToIndex(targetIdx);
  };

  // Mouse drag-to-scroll handlers (for desktop & laptops)
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;

    setIsDragging(true);
    dragStartRef.current = {
      x: e.pageX,
      scrollLeft: track.scrollLeft,
      isMoved: false,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const track = trackRef.current;
    if (!track) return;

    e.preventDefault();
    const dx = e.pageX - dragStartRef.current.x;
    if (Math.abs(dx) > 5) {
      dragStartRef.current.isMoved = true;
    }
    track.scrollLeft = dragStartRef.current.scrollLeft - dx;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };

  // Keyboard navigation support
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div
      className="swipeable-cards-wrapper"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={ariaLabel}
    >
      {/* Scrollable / Touch-Swipe Track */}
      <div
        ref={trackRef}
        className={`swipeable-cards-track ${isDragging ? "is-dragging" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className={`swipeable-card-item ${activeIndex === index ? "is-active" : ""}`}
            onClick={(e) => {
              if (dragStartRef.current.isMoved) {
                e.stopPropagation();
              }
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Tactile Navigation Controls */}
      <div className="swipeable-controls-row">
        {/* Previous Button */}
        <button
          type="button"
          className="swipe-nav-btn prev-btn"
          onClick={handlePrev}
          disabled={!canScrollLeft}
          aria-label="Previous card"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Tactile Pagination Dots */}
        <div className="swipe-dots-container" role="tablist">
          {childrenArray.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={activeIndex === idx}
              aria-label={`Go to slide ${idx + 1}`}
              className={`swipe-dot ${activeIndex === idx ? "active" : ""}`}
              onClick={() => scrollToIndex(idx)}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          type="button"
          className="swipe-nav-btn next-btn"
          onClick={handleNext}
          disabled={!canScrollRight}
          aria-label="Next card"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Counter Badge */}
        <div className="swipe-counter" aria-hidden="true">
          <span className="counter-current">0{activeIndex + 1}</span>
          <span className="counter-divider">/</span>
          <span className="counter-total">0{totalCards}</span>
        </div>
      </div>
    </div>
  );
}

export default SwipeableCards;
