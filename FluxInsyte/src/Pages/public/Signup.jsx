import React from "react";
import signupImage from "./../../assets/images/signupImage.jpg"
const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="w-1/2 hidden md:block relative">
          <img
            src={signupImage}
            alt="Login"
            className="w-full h-screen object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-10 left-8 text-white z-10">
            <h2 className="text-2xl font-bold">Welcome to FluxInsyte</h2>
            <p className="text-sm mt-2 max-w-xs">
              Capture trust. Showcase credibility. Grow faster.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Start collecting testimonials professionally
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-900 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/Login" className="text-black font-semibold hover:underline">
            Login
          </a>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
