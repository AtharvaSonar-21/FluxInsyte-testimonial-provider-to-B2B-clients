export default function Features() {
  return (
    <section id="features" className="py-24 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            One powerful feature. Done right.
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Collect testimonials via simple branded links and store them instantly in your dashboard.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-xl">Custom request link</div>
            <div className="bg-blue-50 p-4 rounded-xl">Text testimonial form</div>
            <div className="bg-blue-50 p-4 rounded-xl">Instant Firebase storage</div>
          </div>
        </div>
      </div>
    </section>
  );
}
