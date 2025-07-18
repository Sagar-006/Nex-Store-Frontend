import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FeatureSection from "@/components/FeatureSection";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";


const Home = () => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen scroll-smooth hide-scrollbar"
    >
      <Navbar />
      <Hero />
      <FeatureSection />
      <div className="flex justify-center">
        <Products/>
      </div>
      <div>
        <h1 className=" ml-32 text-2xl font-bold mb-4">Our Trending Products</h1>
        <Marquee />
      </div>
      <Footer />
    </motion.div>
  );
}

export default Home
