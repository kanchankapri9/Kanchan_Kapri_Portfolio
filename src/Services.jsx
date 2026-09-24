import "./Services.css";
import ServiceCard from "./components/ServiceCard";
import SwipeableCards from "./components/SwipeableCards";

/**
 * Services Component
 * -----------------------------------------------------------------------------
 * Displays offerings in a swipable carousel of tactile papercraft cards.
 * Engineered for smooth touch gestures on mobile and mouse drag/arrow controls
 * on desktop and laptops.
 *
 * Services included:
 * 1. Full Stack Web Application Creation
 * 2. Mentorship in Code
 * 3. UI/UX Design
 * 4. Call Me for Any Event Organizing
 */
const servicesData = [
  {
    number: "01",
    title: "Full Stack Web Application Creation",
    description:
      "End-to-end web application development from modern, responsive frontends in React to secure, scalable backend architectures with Node.js, Express, and databases.",
    features: [
      "Responsive React UI development",
      "RESTful APIs & database integration",
      "Robust full-stack architecture",
    ],
  },
  {
    number: "02",
    title: "Mentorship in Code",
    description:
      "Personalized mentorship in Data Structures & Algorithms, programming fundamentals (Java, Python, JS), code reviews, and structured problem-solving techniques.",
    features: [
      "DSA & algorithmic problem solving",
      "Clean code & architecture reviews",
      "Practical project guidance",
    ],
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Crafting clean, intuitive, and visually refined digital interfaces with bespoke design systems, tactile papercraft aesthetics, and smooth micro-interactions.",
    features: [
      "User-centered UI layout design",
      "Consistent design systems & typography",
      "Smooth interactive transitions",
    ],
  },
  {
    number: "04",
    title: "Call Me for Any Event Organizing",
    description:
      "Available to coordinate, organize, or host tech festivals, coding hackathons, technical workshops, and developer community events.",
    features: [
      "Hackathons & coding competitions",
      "Tech bootcamps & practical workshops",
      "Community event coordination",
    ],
  },
];

function Services() {
  return (
    <section id="services">
      <div className="services-container">
        {/* Clean, unified section title */}
        <h2 className="lemon-title">Services</h2>

        {/* Reusable, tactile swipable cards carousel */}
        <SwipeableCards ariaLabel="Services offerings carousel">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </SwipeableCards>
      </div>
    </section>
  );
}

export default Services;
