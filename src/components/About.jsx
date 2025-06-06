import React from "react";
import AboutImage from "../assets/PRAVIN DABHADE.jpeg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0 shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fadeIn"
          />

          <div className="flex-1">
            <p className="text-lg mb-8 animate-fadeIn delay-200">
              I'm an enthusiastic and detail-oriented aspiring full-stack developer 
              with strong foundational skills in both frontend and backend technologies. 
              I'm passionate about creating user-friendly, scalable web applications 
              and continually expanding my knowledge through self-learning and projects.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Experience */}
              <div className="animate-fadeIn delay-300">
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  Experience
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <strong>Intern</strong> – CodeCamp (2023 – 2024)
                  </li>
                  <li>
                    <strong>Personal Projects</strong> – GitHub Portfolio
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div className="animate-fadeIn delay-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Education
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <strong>Mastter in Computer Applications</strong> – Savitribai Phule University Pune
                     (2022 – 2024)
                  </li>
                  <li>
                    <strong>Certificate in Full Stack Development</strong> – Online
                    Bootcamp (2024)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add the following CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
// This code defines an "About" section for a portfolio website, featuring an image, a brief introduction, and sections for experience and education. The design includes responsive layouts, animations, and a modern aesthetic using Tailwind CSS classes.
// The section is structured to provide a clear overview of the individual's background, skills, and achievements, making it suitable for showcasing in a professional portfolio.