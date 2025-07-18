import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; 
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const Marquee = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const controls = useAnimation();

  const getData = async () => {
    try {
      const res = await axios.get(`${backend_url}/products`);
      setProducts(res.data.response);

      controls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } catch (e) {
      console.log("Error fetching products:", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div
      className="group flex overflow-hidden bg-gray-100 p-2 [--duration:40s] [--gap:1rem] gap-[var(--gap)]"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          x: ["0%", "-100%"],
          transition: {
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          },
        })
      }
    >
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          animate={controls}
          className={cn(
            "flex shrink-0 justify-around gap-[var(--gap)]",
            "group-hover:[animation-play-state:paused]"
          )}
        >
          {products.map((item) => (
            <div
              onClick={() => navigate(`/products/${item._id}`)}
              key={item._id + i}
              className="bg-neutral-900 rounded-xl p-4 w-64 h-72 flex flex-col justify-center items-center shadow-md hover:cursor-pointer "
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-[200px] w-[150px] object-cover mb-4 transition-transform duration-300 hover:scale-105 rounded-md"
              />
              <div className="flex gap-2 px-4 py-2 bg-neutral-900 rounded-full items-center justify-center hover:border-[0.5px] border-blue-600">
                <span className="text-white text-sm">{item.name}</span>
                <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  ₹{item.price}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Marquee;
