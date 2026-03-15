export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-gray-900">
          Simple Pricing for Everyone
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Start free. Upgrade only when you need more testimonials.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* Free Plan */}
          <div className="shadow-xl rounded-2xl p-8 border border-gray-200 bg-white">
            <h3 className="text-2xl font-bold text-gray-900">Free</h3>

            <p className="mt-4 text-4xl font-bold text-blue-600">
              ₹0
            </p>

            <p className="mt-2 text-gray-500">Forever free</p>

            <div className="mt-8 space-y-4 text-left">
              <p>✔ 5 testimonials</p>
              <p>✔ 1 public profile</p>
              <p>✔ Basic dashboard access</p>
            </div>

            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
              Start Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="shadow-2xl rounded-2xl p-8 border-2 border-blue-600 bg-white relative">

            <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              Popular
            </span>

            <h3 className="text-2xl font-bold text-gray-900">Pro</h3>

            <p className="mt-4 text-4xl font-bold text-blue-600">
              ₹50
            </p>

            <p className="mt-2 text-gray-500">per month</p>

            <div className="mt-8 space-y-4 text-left">
              <p>✔ Unlimited testimonials</p>
              <p>✔ Custom branding</p>
              <p>✔ Priority dashboard access</p>
            </div>

            <button className="mt-8 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition">
              Upgrade to Pro
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
