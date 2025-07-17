import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FeatureSection from "@/components/FeatureSection";
import Products from "@/components/Products";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";

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
      <Products />
      <Footer />
    </motion.div>
  );
}

export default Home
