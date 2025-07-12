import { FlickeringGrid } from "./magicui/flickering-grid";

const Hero = () => {
  return (
    <div className="w-[1300px] h-[600px] relative overflow-hidden ml-[120px]">
      <FlickeringGrid className="absolute inset-0 z-0" />

      {/* Optional content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Welcome to My Store</h1>
      </div>
    </div>
  );
};

export default Hero;
