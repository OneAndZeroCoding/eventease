export default function Services() {
  const services = [
    {
      title: "Venues",
      image: "/venue.jpg",
      description: "Book stunning venues for weddings, parties, and more.",
    },
    {
      title: "Catering",
      image: "/catering.jpg",
      description: "From world-class to local cuisines",
    },
    {
      title: "And more",
      image: "/photography.jpg",
      description: "Book and Enjoy load more top-notch services.",
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-100" id="services">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="max-w-6xl mx-auto grid gap-9 md:grid-cols-1 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl text-center shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
