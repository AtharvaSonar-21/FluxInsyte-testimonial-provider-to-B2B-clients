import React from "react";
import { Button } from "@material-tailwind/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-white flex items-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">
            Trusted by freelancers & creators
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
            Collect Client Testimonials <br />
            Without Chasing Clients.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            FluxInsight helps freelancers, students, and service providers
            collect clean video or text testimonials through a simple link —
            organized, branded, and ready to showcase.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-600 px-6 py-3 rounded-xl text-white shadow-md hover:bg-blue-700">
              Start Collecting Free
            </Button>

            <Button
              variant="outlined"
              className="border-gray-300 px-6 py-3 rounded-xl text-gray-800"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust line */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <span>✔ No coding needed</span>
            <span>✔ Firebase powered</span>
            <span>✔ Instant sharing</span>
          </div>
        </div>

        {/* Right Visual Card */}
        <div className="relative">
          <div className="bg-white shadow-2xl rounded-3xl p-6 border border-gray-100">

            <div className="bg-gray-50 rounded-2xl p-5 mb-4">
              <p className="text-sm text-gray-500 mb-2">
                New Testimonial Received
              </p>

              <h3 className="font-semibold text-lg text-gray-900">
                "Working with Atharva was smooth and highly professional."
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                — Product Designer, Startup Founder
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-3 bg-blue-100 rounded-full w-5/6"></div>
              <div className="h-3 bg-blue-100 rounded-full w-4/6"></div>
              <div className="h-3 bg-blue-100 rounded-full w-3/6"></div>
            </div>

            <div className="mt-6 bg-blue-600 text-white text-center py-3 rounded-xl font-medium">
              +12 Testimonials This Week
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-xl text-sm shadow-lg">
            Live Dashboard
          </div>
        </div>
      </div>
    </section>
  );
}
