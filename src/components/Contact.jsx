import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Send the email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Service ID from EmailJS
        "YOUR_TEMPLATE_ID", // Template ID from EmailJS
        { name, email, message },
        "YOUR_USER_ID" // User ID from EmailJS
      )
      .then(
        (response) => {
          console.log("Message sent successfully:", response);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setError(null);
        },
        (err) => {
          console.error("Error sending message:", err);
          setError("There was an error sending your message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-black text-white py-20" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Send Message
            </button>

            {/* Success or Error Message */}
            {submitted && (
              <p className="text-green-400 mt-3">
                Message submitted successfully!
              </p>
            )}
            {error && <p className="text-red-500 mt-3">{error}</p>}
          </form>

          {/* Embedded Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.324644367449!2d73.85674361536943!3d18.5204309883606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c086af98e579%3A0x9b1756a60e1d8796!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1687212345678!5m2!1sen!2sus"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can handle form submission here (send to backend or API)
//     setSubmitted(true);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section className="bg-black text-white py-20" id="contact">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Contact Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="space-y-6 bg-gray-900 p-8 rounded-lg shadow-lg"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
//             />
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
//             >
//               Send Message
//             </button>
//             {submitted && (
//               <p className="text-green-400 mt-3">
//                 Message submitted successfully!
//               </p>
//             )}
//           </form>

//           {/* Embedded Google Map */}
//           <div className="rounded-lg overflow-hidden shadow-lg">
//             <iframe
//               title="Location Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.324644367449!2d73.85674361536943!3d18.5204309883606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c086af98e579%3A0x9b1756a60e1d8796!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1687212345678!5m2!1sen!2sus"
//               width="100%"
//               height="400"
//               allowFullScreen=""
//               loading="lazy"
//               className="border-0"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
