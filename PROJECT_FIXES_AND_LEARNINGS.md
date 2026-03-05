# Portfolio Fixes and Learnings

This file documents what was fixed, why it was fixed, where it was changed, and what was learned during the full portfolio update process.

## 1) Profile and Identity Updates

### What was fixed
- Name changed to **Kanchan Kapri**.
- Intro/title text updated for BCA (DS & AI), Sigma 8.0, full-stack + DSA + ML/DL direction.
- About bio rewritten for current student profile.

### Why
- To align the portfolio with your real identity, education, and current career direction.

### Where
- `src/Hero.jsx`
- `src/About.jsx`
- `src/Navbar.jsx`

## 2) Profile Photo and Fit Adjustments

### What was fixed
- Updated profile images to your uploaded photos from `public/`.
- Set About image to `Pink_shirt_casual_pik.jpeg`.
- Repeatedly tuned crop/position/ring thickness for Hero and About circles based on your feedback:
  - ring thinner
  - less side gaps
  - more chest/lower-body visible
  - cleaner fit

### Why
- To make the image framing natural and visually balanced in circular containers.

### Where
- `src/Hero.jsx`
- `src/About.jsx`
- `src/Hero.css`
- `src/about.css`

## 3) Skills Upgrade (FAANG-fit direction)

### What was fixed
- Replaced old BI/commerce-centric skill chips with stronger interview-focused stack:
  - DSA, Problem Solving, Java, Python, JavaScript, React, Node, Express, MongoDB, SQL, ML, Deep Learning

### Why
- To better represent software-engineering and ML pathways suitable for top product companies.

### Where
- `src/Skill.jsx`

## 4) Projects Data and Project Media Mapping

### What was fixed
- Project list updated to relevant target projects:
  - AI Notes Assistant
  - KautikBazar (Full Stack Ecommerce)
  - ML & DL Projects
  - DSA Problem Tracker
- Project images mapped to uploaded assets:
  - `/Ai_Notes_Assistant.jpeg`
  - `/Kautik_Bazar_Ecommerce.png`
  - `/Dl_Project.png`
  - `/DSA_Project.png`
- Also created a minimal optional DL visual asset:
  - `public/Dl_Project_Minimal.svg`

### Why
- To ensure each project card shows real and relevant visuals.
- To keep portfolio content aligned with your current work.

### Where
- `src/projects.jsx`
- `public/Dl_Project_Minimal.svg`

## 5) Project Card Behavior and Placeholders

### What was fixed
- Removed active Demo/Code links (kept placeholders visible for layout consistency).
- Card actions now render:
  - clickable button if URL exists
  - non-click placeholder if URL is empty
- Card image fit updated to avoid awkward side gaps and improve clarity.

### Why
- You wanted to add links later but keep the section design complete now.

### Where
- `src/Card.jsx`
- `src/card.css`
- `src/projects.jsx`

## 6) About Section Contact/Status Icons

### What was fixed
- Replaced plain 4-line status with icon-based clickable rows:
  - education
  - email
  - github
  - linkedin
  - location
- Styled icons for dark background visibility (chip + contrast/invert handling).
- Later tuned icon sizing for visual impact.

### Why
- To improve readability, quick-access actions, and visual personality.

### Where
- `src/About.jsx`
- `src/about.css`

## 7) Hero Buttons and CTA Linking

### What was fixed
- `Hire Me` now opens resume in public:
  - `/Kanchan_Kapri_Resume.pdf`
- `Projects` button now opens your GitHub profile:
  - `https://github.com/kanchankapri9`
- Reusable button component upgraded to support both `<button>` and `<a>` behavior.

### Why
- To make top-level CTA actions functional and useful for recruiters.

### Where
- `src/Hero.jsx`
- `src/button.jsx`
- `src/button.css`
- `public/Kanchan_Kapri_Resume.pdf` (asset usage)

## 8) Footer Creation, Redesign, and Payment Simplification

### What was fixed
- Added full footer section with:
  - social icons
  - lemon tea theme
  - motivational support area
- Added custom lemon-tea logo as inline SVG.
- Added professional bottom line:
  - “Made with Kanchan’s love.”
- Social icon placement adjusted per request:
  - moved from top-right corner to bottom strip
  - removed “All rights reserved”
- Payment flow evolved, then simplified to final requested UX:
  - removed Google Pay direct button
  - removed visible GPay ID text
  - removed “UPI app not opening” line
  - kept only clean “Copy UPI ID” button

### Why
- To create an attractive, clean footer while matching your exact final preference.

### Where
- `src/Footer.jsx`
- `src/Footer.css`
- `src/App.jsx` (footer placement at end)

## 9) Section Fit and Screen Balance Improvements

### What was fixed
- Reduced excessive spacing and improved width usage for better screen fit.
- Footer card widened and compacted to avoid looking disconnected.
- About/Contact layout tightened for cleaner section flow.
- Added content top padding to account for fixed navbar overlap.

### Why
- To make UI feel polished, proportional, and easier to scan on desktop/mobile.

### Where
- `src/about.css`
- `src/Footer.css`
- `src/App.css`
- `src/project.css`

## 10) Step-by-Step Workflow Used

1. Collected current file structure and existing text/components.
2. Updated profile identity content first (name/title/about).
3. Replaced skills and projects data.
4. Mapped uploaded images from `public/` to relevant components.
5. Refined photo framing iteratively with your visual feedback.
6. Improved project card consistency and spacing.
7. Added functional CTA links (resume/GitHub).
8. Added and redesigned footer with tea theme.
9. Added payment support, then simplified as per your final preference.
10. Adjusted screen-fit spacing and final visual polish.

## 11) Key Learnings

- Small CSS changes (`object-fit`, `object-position`, padding) create major visual differences in circular profile images.
- Placeholder-first UX is useful when final project links are not ready.
- For dark themes, icon contrast must be intentionally managed (chip background, border, filter, hover).
- A reusable `Button` component should support both navigation and actions to avoid duplicate UI code.
- Footer design should prioritize hierarchy:
  - identity motif (lemon tea)
  - action (copy UPI)
  - social proof/social links
  - ownership line
- Real user feedback loop (micro-adjustments) is the fastest way to reach a visually “perfect-fit” result.

## 12) Final Notes

- Replace remaining placeholder links in `src/About.jsx` if not already set:
  - email
  - github
  - linkedin
  - location
- Add project Demo/Code URLs in `src/projects.jsx` when ready.
