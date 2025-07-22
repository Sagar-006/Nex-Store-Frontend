import img from "@/assets/h&m2.avif";
import img2 from "@/assets/h&m5.avif";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[900px] mt-4">
      <div className="w-full md:w-1/2 h-[400px] md:h-full overflow-hidden">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="w-full md:w-1/2 h-[400px] md:h-full overflow-hidden">
        <img
          src={img2}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Hero;
