import React from "react";
import loginImage from "../../assets/images/loginImage.jpg";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="w-1/2 hidden md:block relative">
          <img
            src={loginImage}
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
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-1">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to continue
        </p>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-black font-medium hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/Signup" className="text-black font-semibold hover:underline">
            Sign up
          </a>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;