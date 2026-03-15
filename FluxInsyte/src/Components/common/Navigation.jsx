import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/FluxInsyte_Logo-removebg-preview.png";

export default function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
      >
        <a href="#home">Home</a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
      >
        <a href="#features">Features</a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
      >
        <a href="#pricing">Pricing</a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
      >
        <Link to="/about">About</Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-50 mx-auto max-w-screen-xl px-4 py-3 lg:px-8 lg:py-4 bg-white shadow-sm border-none rounded-none">
      <div className="container mx-auto flex items-center justify-between text-gray-800">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="FluxInsyte Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          {navList}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login">
            <Button
              variant="text"
              size="sm"
              className="bg-blue-600 text-white rounded-xl px-5 py-2 hover:bg-blue-700"
            >
              Log In
            </Button>
          </Link>

          <Link to="/signup">
            <Button
              size="sm"
              className="rounded-xl bg-black text-white px-5 py-2 hover:bg-gray-900"
            >
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <IconButton
          variant="text"
          ripple={false}
          className="ml-auto h-6 w-6 text-gray-800 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Navigation */}
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}

          <div className="flex flex-col gap-2 pb-4">
            <Link to="/login">
              <Button fullWidth variant="text">
                Log In
              </Button>
            </Link>

            <Link to="/signup">
              <Button fullWidth className="bg-black text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
