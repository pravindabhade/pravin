import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Navigation items with custom labels
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "service", label: "Services" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Handle smooth scroll on click
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // smooth scrolling effect
        block: "start", // scroll to the start of the element
      });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-4 fixed top-0 w-full z-50 shadow-lg border-b border-purple-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-widest cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          PRAVIN DABHADE
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 items-center text-base font-medium">
          {navItems.map(({ id, label }, index) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(id); // Smooth scroll on click
              }}
              className="relative group hover:text-green-400 transition-colors duration-300
                        before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                        before:bg-green-400 before:transition-all before:duration-300
                        group-hover:before:w-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-6 space-y-6 border-t border-purple-700">
          {navItems.map(({ id, label }, index) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(id); // Smooth scroll on click
                setIsOpen(false); // Close menu after click
              }}
              className="block text-lg font-medium hover:text-green-400 transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
