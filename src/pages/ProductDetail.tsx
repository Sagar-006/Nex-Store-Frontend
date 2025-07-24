import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type sizeType = string;
const ProductDetail = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL;
  const sizes: sizeType[] = ["XS", "S", "M", "L", "XL", "XXL"];
  const navigate = useNavigate();
  const {
    loading,
    setLoading,
    quantity,
    setQuantity,
    selectedSize,
    setSelectedSize,
  } = useAuth();
  const { _id } = useParams();
  const [data, setData] = useState<any>(null);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/products/${_id}`);
      setData(res.data.product);
      setLoading(false);
      console.log(res.data.product);
    } catch (e) {
      console.error("Error fetching product:", e);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (_id) {
      getData();
    }
  }, [_id]);

  return (
    <div className="">
      <Navbar />
      <div className="bg-white  text-black dark:bg-black gray-900 dark:text-white flex items-center justify-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="bg-white  text-black dark:bg-black gray-900 dark:text-white flex flex-col lg:flex-row w-full min-h-screen items-center justify-center px-4 lg:px-10 gap-6">
            {/* Left: Image */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <img
                src={data?.image}
                alt={data?.name}
                className="max-h-[400px] lg:max-h-[600px] object-contain"
              />
            </motion.div>

            {/* Right: Info */}
            <div className=" bg-white  text-black dark:bg-black gray-900 dark:text-white w-full lg:w-1/2 flex flex-col gap-4 px-2 lg:px-10">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                {data?.name}
              </h1>

              <div>
                <span className="text-sm font-semibold ">Details:</span>{" "}
                <span className="text-sm md:text-md text-gray-800">
                  {data?.description}
                </span>
              </div>

              {/* Select Size */}
              <div className="bg-white  text-black dark:bg-black gray-900 dark:text-white mt-4">
                <p className="font-semibold mb-2">SELECT SIZE</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-w-md">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      className={`border py-2 text-sm ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 text-black bg-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Quantity */}
              <div className="mt-4">
                <p className="font-semibold mb-2">QUANTITY</p>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 px-4 py-2 text-sm w-full max-w-[160px]"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add to Cart Button */}
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className=""
              >
                <button
                  onClick={() =>
                    navigate(
                      `/cart?productId=${_id}&quantity=${quantity}&size=${selectedSize}`
                    )
                  }
                  className="mt-6 w-full max-w-[160px] bg-black text-white py-2 rounded-full text-sm hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
