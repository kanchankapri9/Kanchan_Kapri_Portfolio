import "./project.css";
import Card from "./Card";

const projectsData = [
  // Replace these with per-project repository URLs when available.
  {
    imgSrc: "/Ai_Notes_Assistant.jpeg",
    title: "AI Notes Assistant",
    description:
      "Built an AI-powered notes assistant for summarization, concept explanation, and quick revision workflows for students.",
    demoLink: "https://ai-notes-assistant-i47e.onrender.com/",
    codeLink: "https://github.com/kanchankapri9",
  },
  {
    imgSrc: "/Kautik_Bazar_Ecommerce.png",
    title: "KautikBazar",
    description:
      "Developed a full stack ecommerce platform with product catalog, cart, authentication, and order management.",
    demoLink: "",
    codeLink: "https://github.com/kanchankapri9",
  },
  {
    imgSrc: "/Dl_Project.png",
    title: "ML & DL Projects",
    description:
      "Implemented machine learning and deep learning projects including prediction, classification, and model evaluation tasks.",
    demoLink: "",
    codeLink: "https://github.com/kanchankapri9",
  },
  {
    imgSrc: "/DSA_Project.png",
    title: "DSA Problem Tracker",
    description:
      "Built a problem-tracking app to organize coding practice by topic, difficulty, and interview preparation progress.",
    demoLink: "",
    codeLink: "https://github.com/kanchankapri9",
  },
];

function Projects() {
  return (
    <div id="project">
      <h1 className="lemon-title">Projects</h1>
      <div className="cardcontainer">
        {/* Data-driven rendering keeps cards easy to maintain */}
        {projectsData.map((project) => (
          <Card
            key={project.title}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            DemoLink={project.demoLink}
            CodeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
