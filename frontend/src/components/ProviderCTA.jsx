// src/components/ProviderCTA.jsx
function ProviderCTA() {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Are you a service provider?
      </h3>
      <p className="text-gray-600 mb-6">Join our platform to get listed and reach new clients.</p>
      <div className="space-x-4">
        <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Register
        </button>
        <button className="px-6 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100">
          Login
        </button>
      </div>
    </section>
  );
}

export default ProviderCTA;
