// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section className="bg-white py-16 px-4" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <img
          src="/logo.png"
          alt="About EventEase"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About EventEase</h2>
          <p className="text-gray-600 mb-4">
            EventEase aims to bring it all into one place for everyone. When planning and searching for services becomes hectic, EventEase shines the most - providing for both the casual planners to top notch services. We've got it all!
          </p>
          <p className="text-gray-600">
            Whether you’re hosting a wedding, birthday, or corporate event, we connect you with the best so you can focus on what matters the most - Celebrating :)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
