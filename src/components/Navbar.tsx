const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgba(245,245,247,0.8)] bg-opacity-90 backdrop-blur-md shadow-sm z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="text-[1.125rem/1em] text-[hsl(0,0%,20%)]">
          Portfolio
        </span>
        <ul className="flex space-x-6 text-[1.125rem/1em] text-[hsl(0,0%,10%)]  transition-colors">
          <li>
            <a href="/about" className="hover:text-[hsl(0,0%,0%)]">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-[hsl(0,0%,0%)]">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-[hsl(0,0%,0%)]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
