// Hero.tsx
// import Air1 from "@/assets/AIR1.png";
import img from '@/assets/h&m2.avif'
import img2 from "@/assets/h&m5.avif";


const Hero = () => {
  return (
    
    <div className="flex w-full h-[900px] mt-4">
      <div className="w-[50%] h-[100%] overflow-hidden">
        <img src={img} alt="" className="h-full w-full object-cover object-top" />
      </div>
      <div className="w-[50%] h-[100%] overflow-hidden">
        <img src={img2} alt="" className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
};

export default Hero;
