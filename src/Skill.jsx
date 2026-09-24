import "./Skill.css";

const skillCategories = [
  {
    category: "Languages & Core",
    skills: [
      "Data Structures & Algorithms",
      "Problem Solving",
      "Java",
      "Python",
      "JavaScript",
      "SQL",
    ],
  },
  {
    category: "Full Stack & Web",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Modern CSS",
    ],
  },
  {
    category: "AI & Data Science",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Model Evaluation",
    ],
  },
];

function Skill() {
  return (
    <section id="skill">
      <div className="skill-container">
        <h2 className="lemon-title">Skills</h2>

        <div className="skill-categories-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skill-category-card paper-carve">
              <h3 className="category-title">{cat.category}</h3>
              <div className="skill-chips-row">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
