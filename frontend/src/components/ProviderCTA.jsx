// src/components/ProviderCTA.jsx
function ProviderCTA() {
  return (
    <section id="provider" className="py-20 px-6 bg-[url('/serviceImg.jpg')] bg-cover text-center">
      <h3 className="text-2xl font-bold text-black mb-4">
        Are you a service provider?
      </h3>
      <p className="text-gray-600-bold mb-6">Join EventEase and reach clients who want top performances</p>
      <div className="space-x-4">
        <button className="px-6 py-2 bg-mocha text-white rounded hover:bg-espresso">
          Join now
        </button>
      </div>
    </section>
  );
}

export default ProviderCTA;
