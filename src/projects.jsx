import "./project.css";
import Card from "./Card";

const projectsData = [
  {
    imgSrc: "/Ai_Notes_Assistant.jpeg",
    title: "AI Notes Assistant",
    description:
      "Built an AI-powered notes assistant for summarization, concept explanation, and quick revision workflows for students.",
    demoLink: "",
    codeLink: "",
  },
  {
    imgSrc: "/Kautik_Bazar_Ecommerce.png",
    title: "KautikBazar",
    description:
      "Developed a full stack ecommerce platform with product catalog, cart, authentication, and order management.",
    demoLink: "",
    codeLink: "",
  },
  {
    imgSrc: "/Dl_Project.png",
    title: "ML & DL Projects",
    description:
      "Implemented machine learning and deep learning projects including prediction, classification, and model evaluation tasks.",
    demoLink: "",
    codeLink: "",
  },
  {
    imgSrc: "/DSA_Project.png",
    title: "DSA Problem Tracker",
    description:
      "Built a problem-tracking app to organize coding practice by topic, difficulty, and interview preparation progress.",
    demoLink: "",
    codeLink: "",
  },
];

function Projects() {
  return (
    <div id="project">
      <h1>Projects</h1>
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
