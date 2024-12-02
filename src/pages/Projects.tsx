import ProjectCard from "../components/ProjectsCard";

const projectData = [
  {
    title: "Portfolio Website",
    description: "A sleek and responsive portfolio showcasing my work.",
    imageUrl: "/portfolio-thumbnail.jpg",
    demoLink: "#",
  },
  {
    title: "E-Commerce App",
    description: "An intuitive e-commerce app with seamless UX.",
    imageUrl: "/ecommerce-thumbnail.jpg",
    demoLink: "#",
  },
  // Add more projects as needed
];

const ProjectsGrid = () => {
  return (
    <section className="py-16 bg-[hsl(0,0%,80%)] ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[hsl(0,0%,0%)]  text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
