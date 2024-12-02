const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgba(245,245,247,0.8)] bg-opacity-90 backdrop-blur-md shadow-sm z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="text-2xl font-bold text-primary">Portfolio</span>
        <ul className="flex space-x-6">
          <li>
            <a href="/about" className="text-primary hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="text-primary hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="text-primary hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
