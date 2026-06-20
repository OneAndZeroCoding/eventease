// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Have questions or need help? Reach out to our team and we’ll get back to you shortly.
        </p>

        <form className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-mocha"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-mocha"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-mocha"
          ></textarea>

          <button
            type="submit"
            className="bg-mocha text-white py-3 px-6 rounded-md hover:bg-espresso transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
