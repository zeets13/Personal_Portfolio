import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu after navigating on mobile
  };

  const navLinks = ["home", "about", "skills", "projects"];

  return (
   <nav className="fixed top-0 border border-[#432f2e] left-0 w-full bg-[#F2EFE7] py-5 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6">
        {/* Name */}
        <div className="text-lg font-bold text-[#432f2e]">
          Jarifa Tasnim
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 text-[#432f2e] font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="hover:text-black/80 transition-colors duration-200 cursor-pointer capitalize"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-6 text-[#432f2e]">
          <a
            href="https://www.linkedin.com/in/jarifa-tasnim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-black transition-colors duration-200"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/zeets13"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-black transition-colors duration-200"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:jarifatasnim13@gmail.com"
            aria-label="Email"
            className="hover:text-black transition-colors duration-200"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Hamburger button - mobile only */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#432f2e] text-2xl cursor-pointer"
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}

      {/* Side drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#f6fafd] 
          shadow-xl z-50 transform transition-transform 
          duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#432f2e] text-xl hover:text-black/80 
            transition-colors duration-200 cursor-pointer"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          
        </div>
        
        

        <ul className="flex flex-col items-start gap-6 px-8 text-[#432f2e] font-medium text-md">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="hover:text-black/80 transition-colors duration-200 cursor-pointer capitalize"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 text-[#432f2e] px-8 mt-10">
          <a
            href="https://www.linkedin.com/in/jarifa-tasnim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-slate-700 transition-colors duration-200"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/zeets13"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-slate-700 transition-colors duration-200"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:jarifatasnim13@gmail.com"
            aria-label="Email"
            className="hover:text-slate-700 transition-colors duration-200"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;