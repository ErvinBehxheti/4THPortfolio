interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  demoLink,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-opacity-80"
        >
          View Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
