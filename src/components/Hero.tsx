// Hero.tsx
// import Air1 from "@/assets/AIR1.png";
import img from '@/assets/h&m2.avif'
import img2 from "@/assets/prada1.avif";


const Hero = () => {
  return (
    // <div className="relative h-[650px] w-full overflow-hidden bg-white ">
    //   <DotPattern className="absolute inset-0 z-0" />
    //   {/* <FlickeringGrid className="absolute inset-0 z-0" /> */}

    //   <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-4 gap-10 ">
    //     {/* Left text */}
    //     <div className="text-black text-center md:text-left">
    //       <h1 className="text-6xl font-bold leading-tight">
    //         Nike Kobe <br /> All Star Edition
    //       </h1>
    //       <p className="bg-white text-black inline-block px-4 py-2 mt-4 font-mono">
    //         Strike with Precision.
    //       </p>
    //     </div>

    //     {/* Shoe image */}
    //     <img
    //       src={img}
    //       alt="Shoe"
    //       className="w-full max-w-[800px] object-contain drop-shadow-2xl"
    //     />
    //   </div>

    //   {/* Optional right vertical text */}
    // </div>

    <div className="flex w-full h-[800px]">
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
