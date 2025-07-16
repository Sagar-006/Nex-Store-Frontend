import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type sizeType= string;
const ProductDetail = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const sizes:sizeType[] = ["XS", "S", "M", "L", "XL", "XXL"];
  const navigate = useNavigate();

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };
  const {loading,setLoading} = useAuth();
  // const [loading, setLoading] = useState(true);
  const { _id } = useParams();
  const [data, setData] = useState<any>(null);

  const getData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/products/${_id}`);
      setData(res.data.product);
      console.log(res.data.product);
      setLoading(false);
    } catch (e) {
      console.error("Error fetching product:", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="flex w-full h-screen items-center justify-center px-10">
            {/* Left: Image */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="min-h-screen scroll-smooth w-1/2 flex justify-center"
            >
              <div className="">
                <img
                  src={data.image}
                  alt={data.name}
                  className="max-h-[600px] object-contain"
                />
              </div>
            </motion.div>
           

            {/* Right: Info */}
            <div className="w-1/2 flex flex-col gap-2 px-10 mt-[600px]">
              <h1 className="text-2xl md:text-3xl font-semibold text-black leading-tight">
                {data.name}
              </h1>
              <div>
                <span className="text-sm font-semibold text-black">
                  Details:
                </span>{" "}
                <span className="text-md text-gray-800">
                  {data.description}
                </span>
              </div>

              {/* Select Size */}
              <div className="mt-6">
                <p className="font-semibold mb-2">SELECT SIZE</p>
                <div className="grid grid-cols-5 gap-2 max-w-md">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      className={`border py-2 text-sm ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 text-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Quantity */}
              <div className="mt-6">
                <p className="font-semibold mb-2">QUANTITY</p>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 px-4 py-2 text-sm w-[120px]"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

                 <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen scroll-smooth"
    >
      <button
                onClick={() =>
                  navigate(
                    `/cart?productId=${_id}&quantity=${quantity}&size=${selectedSize}`
                  )
                }
                className="mt-6 w-[160px] cursor-pointer bg-black text-white py-2 rounded-full text-sm hover:bg-gray-800 transition"
              >
                Add to Cart
              </button></motion.div> 
              
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
