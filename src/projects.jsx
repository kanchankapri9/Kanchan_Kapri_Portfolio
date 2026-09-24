import "./project.css";
import Card from "./Card";

const projectsData = [
  {
    imgSrc: "/Android_Lucknow.png",
    title: "Android Lucknow",
    tag: "Community-Website",
    description:
      "Community website for Android Lucknow which is a community of android developers and enthusiasts <b> led by students for students </b>.",
    demoLink: "https://android-lucknow-sage.vercel.app/",
    codeLink: "https://github.com/kanchankapri9/Android-Lucknow",
  },
  {
    imgSrc: "/theWomaniaStore.png",
    title: "TheWomaniaStore",
    tag: "Full-Stack Ecommerce",
    description:
      "Women's ecommerce web application featuring product discovery, cart state management, and a responsive checkout experience.",
    demoLink: "https://the-womania-store-k12n.onrender.com/",
    codeLink: "https://github.com/kanchankapri9/TheWomaniaStore",
  },
  {
    imgSrc: "/Mini_Kashmir_Dairies.png",
    title: "MiniKashmirDairies",
    tag: "Hotel Booking",
    description:
      "Hotel listing and booking platform for Uttarakhand destinations with location filtering, room pricing, and intuitive navigation.",
    demoLink: "",
    codeLink: "https://github.com/kanchankapri9/Mini-Kashmir-Dairies",
  },
  {
    imgSrc: "/Kautik_Bazar_Ecommerce.png",
    title: "KautikBazar",
    tag: "Full-Stack Ecommerce",
    description:
      "Full stack ecommerce platform equipped with product catalogs, user authentication, cart management, and order processing.",
    demoLink: "",
    codeLink: "https://github.com/kanchankapri9",
  },
];

function Projects() {
  return (
    <section id="project">
      <div className="projects-container">
        <h2 className="lemon-title">Projects</h2>

        <div className="cardcontainer">
          {projectsData.map((project) => (
            <Card
              key={project.title}
              imgSrc={project.imgSrc}
              title={project.title}
              tag={project.tag}
              description={project.description}
              DemoLink={project.demoLink}
              CodeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
