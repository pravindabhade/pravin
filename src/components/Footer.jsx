import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left: Logo/Name */}
        <div className="mb-6 md:mb-0 text-white text-xl font-bold">
          PRAVIN DABHADE
        </div>

        {/* Center: Navigation */}
        <nav className="flex space-x-6 mb-6 md:mb-0">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#service" className="hover:text-white transition">
            Services
          </a>
          <a href="#project" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        {/* Right: Social Icons */}
        <div className="flex space-x-6 text-white text-2xl">
          <a
            href="https://github.com/YouafKhan1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-green-400 transition"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297a12 12 0 00-3.79 23.4c.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.34.725-4.042-1.61-4.042-1.61a3.17 3.17 0 00-1.335-1.75c-1.09-.745.084-.73.084-.73a2.51 2.51 0 011.83 1.234 2.54 2.54 0 003.474.99 2.54 2.54 0 01.76-1.596c-2.665-.305-5.466-1.332-5.466-5.931a4.63 4.63 0 011.235-3.214 4.3 4.3 0 01.117-3.17s1.005-.322 3.3 1.23a11.4 11.4 0 016 0c2.292-1.552 3.295-1.23 3.295-1.23a4.3 4.3 0 01.118 3.17 4.62 4.62 0 011.235 3.214c0 4.61-2.807 5.624-5.48 5.92a2.85 2.85 0 01.816 2.21c0 1.6-.015 2.89-.015 3.287 0 .32.217.698.824.58A12.01 12.01 0 0012 .297" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm.02 4.5H2V21h3v-13zm7.5 0h-2.75v13h3v-7.4c0-3.55 4.75-3.82 4.75 0V21h3v-7.8c0-6.57-7.25-6.34-8.99-3.12V8z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.85A4.48 4.48 0 0022.43.36a9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12 12.85 12.85 0 01-9.34-4.73 4.52 4.52 0 001.4 6.05A4.41 4.41 0 012 9.7v.06a4.5 4.5 0 003.6 4.42 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.13 9.06 9.06 0 01-5.61 1.95A9.43 9.43 0 011 19.4a12.73 12.73 0 006.92 2.03c8.3 0 12.84-6.87 12.84-12.84 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()}  PRAVIN DABHADE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
