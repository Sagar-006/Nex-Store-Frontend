import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import FeatureSection from "@/components/FeatureSection";
// import { Marquee } from "@/components/magicui/marquee";
// import MarqueenComponent from "@/components/MarqueenComponent";

const Home = () => {
  return (
    <div className="bg-[#fff] h-[100vh] w-[100vw] overflow-x-hidden hide-scrollbar">
      <Navbar />
      <Hero />
      <FeatureSection />
    </div>
  );
}

export default Home
