import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">FluxInsight</h2>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Collect and manage client testimonials professionally.
            Built for freelancers, students, and creators.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Product</h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#features" className="hover:text-white transition">
                Features
              </a>
            </li>

            <li>
              <a href="#pricing" className="hover:text-white transition">
                Pricing
              </a>
            </li>

            <li>
              <a href="#home" className="hover:text-white transition">
                Demo
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

        <p>© 2026 FluxInsight. All rights reserved.</p>

        <p className="mt-4 md:mt-0">
          Built with React + Firebase
        </p>
      </div>
    </footer>
  );
}
