import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useNavigate } from 'react-router-dom';


const FeatureSection = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-10">
      <h1 className="bg-white  text-black dark:bg-black gray-900 dark:text-white text-4xl md:text-6xl font-extrabold tracking-widest font-anton text-center">
        NEVER BEEN DONE IS WHAT WE DO
      </h1>

      <div
        onClick={() => navigate("/products")}
        className="w-full flex items-center justify-center mt-6 mb-2"
      >
        <ShimmerButton className="flex items-center h-[40px] ">
          Shop Now
        </ShimmerButton>
      </div>
    </div>
  );
}

export default FeatureSection
