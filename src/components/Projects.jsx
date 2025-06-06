import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/pravindabhade",
    live: "https://employee-ms-demo.vercel.app",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack",
    image: bookMSImage,
    github: "https://github.com/pravindabhade",
    live: "https://blog-app-demo.vercel.app",
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/pravindabhade",
    live: "https://book-ms-demo",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-20" id="project">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-xl hover:shadow-2xl transition-transform transform hover:scale-105 animate-fadeIn"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>

              <div className="flex gap-4 flex-wrap mt-4">
                <a
                  href={project.github}
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm transition-transform transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <a
                  href={project.live}
                  className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm transition-transform transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
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
    </section>
  );
};

export default Projects;
