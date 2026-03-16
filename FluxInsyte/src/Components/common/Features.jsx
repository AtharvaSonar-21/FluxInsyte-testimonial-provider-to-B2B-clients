export default function Features() {
  return (
    <section id="features" className="py-24 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Built to collect trust at scale
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            FluxInsight helps businesses collect, manage, and showcase client testimonials
            through simple branded links, instant storage, and clean dashboard workflows.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="space-y-4">

            <div className="bg-blue-50 p-4 rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">Custom Request Links</h3>
              <p className="text-sm text-gray-600 mt-1">
                Generate branded testimonial links and send them directly to clients.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">Structured Testimonial Forms</h3>
              <p className="text-sm text-gray-600 mt-1">
                Collect text testimonials in a clean and frictionless submission flow.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">Instant Dashboard Storage</h3>
              <p className="text-sm text-gray-600 mt-1">
                Every submission is securely stored and organized inside your dashboard.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
