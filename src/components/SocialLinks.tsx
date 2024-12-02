import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-gray-700 hover:text-accent text-2xl" />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="text-gray-700 hover:text-accent text-2xl" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter className="text-gray-700 hover:text-accent text-2xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
