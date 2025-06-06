import React from "react";
import HeroImage from "../assets/PRAVIN-DAHADE.jpeg";

const Hero = () => {
  return (
    <section
      className="bg-black text-white text-center py-24 px-6 sm:px-12 md:px-24 flex flex-col items-center justify-center min-h-screen"
      id="home"
    >
      {/* Profile Image */}
      <img
        src={HeroImage}
        alt="Pravin Dabhade"
        className="w-64 h-64 rounded-full object-cover mb-8 shadow-2xl transform transition-transform duration-500 hover:scale-110"
      />

      {/* Title */}
      <h1
        className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-fadeIn"
      >
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Pravin Dabhade
        </span>
        , Full-Stack Developer
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl text-gray-300 text-base sm:text-lg mb-12 animate-fadeIn delay-200">
        I specialize in building modern, responsive, and beautiful web applications.
      </p>

      {/* Buttons */}
      <div className="space-x-6 flex flex-wrap justify-center gap-4 animate-fadeIn delay-400 mb-8">
        {/* For Mobile View: Adjust flex for left-right positioning */}
        <div className="w-full sm:w-auto flex justify-between sm:space-x-6">
          {/* Left-aligned button for mobile view */}
          <a
            href="#contact"
            className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-green-500/50 transition transform hover:scale-110 mb-4 sm:mb-0 m-2"
          >
            Contact 
          </a>

          {/* Right-aligned button for mobile view */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-yellow-500 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-pink-500/50 transition transform hover:scale-110 mb-4 sm:mb-0 m-2"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-8 justify-center">
        {/* GitHub */}
        <a
          href="https://github.com/pravindabhade"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-white transition text-3xl animate-fadeIn delay-500"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.086 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.606-2.665-.3-5.467-1.332-5.467-5.933 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.628-5.48 5.922.43.37.823 1.1.823 2.22v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/pravin20dabhade"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-blue-500 transition text-3xl animate-fadeIn delay-500"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.667v2.333h.067c.65-1.233 2.233-2.533 4.6-2.533 4.933 0 5.833 3.267 5.833 7.5V24h-5v-7.75c0-1.833-.033-4.2-2.567-4.2-2.567 0-2.967 2.007-2.967 4.07V24h-5V8z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:pravi20dabhade@gmail.com"
          aria-label="Email"
          className="text-gray-400 hover:text-red-500 transition text-3xl animate-fadeIn delay-500"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 12l-4-4-4 4m0 0l4 4 4-4m-8 4v4h8v-4"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
