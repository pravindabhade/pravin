import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaPalette,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Crafting responsive and modern UIs using React, Tailwind CSS, and modern JavaScript best practices.",
    icon: <FaCode size={40} />,
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Building scalable RESTful APIs with Node.js, Express, and MongoDB, following clean architecture.",
    icon: <FaServer size={40} />,
  },
  {
    id: 3,
    title: "Mobile Responsive Design",
    description:
      "Ensuring websites look and perform well on all screen sizes with mobile-first design.",
    icon: <FaMobileAlt size={40} />,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences and sleek interfaces with Figma and modern UI trends.",
    icon: <FaPalette size={40} />,
  },
  {
    id: 5,
    title: "Database Management",
    description:
      "Managing and optimizing databases using MongoDB, MySQL, and Firebase for fast data access.",
    icon: <FaDatabase size={40} />,
  },
  {
    id: 6,
    title: "Cloud Deployment",
    description:
      "Deploying full-stack apps to the cloud using platforms like Vercel, Netlify, and Heroku.",
    icon: <FaCloud size={40} />,
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-20" id="service">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn">My Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 p-6 rounded-xl text-center hover:shadow-2xl hover:scale-105 transition-transform animate-fadeIn"
            >
              <div className="text-green-400 mb-4 flex justify-center transform transition-transform duration-300 hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
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

export default Services;
