import Navigation from "./../../Components/common/Navigation";
import Hero from "./../../Components/common/Hero";
import Features from "./../../Components/common/Features";
import Pricing from "./../../Components/common/Pricing";
import Footer from "./../../Components/common/Footer";
import Login from "./Login";
import Signup from "./Signup";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}