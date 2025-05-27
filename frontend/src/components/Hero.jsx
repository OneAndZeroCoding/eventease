// src/components/Hero.jsx
function Hero() {
  return (
    <section id="Hero" className="text-center bg-[url('/dinnerImg.jpg')] bg-cover bg-center py-20 text-white">
      <h2 className="text-7xl font-bold font-hero mb-4">Crafting moments that matter</h2>
      <p className="text-lg mb-8">Book venues, catering, photography, and more – all in one place.</p>
      <button className="px-6 py-3 bg-white text-teal-800 font-semibold rounded-md hover:bg-gray-100">
        Explore
      </button>
    </section>
  );
}

export default Hero;
