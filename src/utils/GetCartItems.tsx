import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import { motion } from "framer-motion";
import { ShoppingCart, Smile } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import CartItem from "@/components/CartItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  category: string;
}

interface CartItem {
  _id: string;
  productId: Product;
  quantity: number;
  size: string;
}

const GetCartItems = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("Authorization");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${backend_url}/product/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCartItems(res.data.findCart.items);
        // console.log(res.data.findCart.items._id);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch cart items:", err);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [backend_url, token]);

  const removeItemFromUI = (productId: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item.productId._id !== productId)
    );
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <Loading />
      ) : cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <h2 className="text-3xl font-semibold">
            Your Cart is <span className="text-red-600 font-bold">Empty!</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Must add items on the cart before you proceed to check out.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 mt-6 px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
            RETURN TO SHOP
          </button>
        </div>
      ) : (
        <div className="p-6 max-w-4xl mb-10 mx-auto bg-white rounded-xl shadow-md mt-6 flex gap-20">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Cart</h2>
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                removeItemFromUI={removeItemFromUI}
                // cartId={findCart.items._id}
              />
            ))}
          </div>

          <div className="w-full lg:w-96 bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between py-2 text-gray-600">
              <span>Subtotal</span>
              <span>₹222.00</span>
            </div>
            <div className="flex justify-between py-2 text-gray-600">
              <span>Delivery</span>
              <span>₹111.00</span>
            </div>
            <div className="flex justify-between py-2 text-gray-600">
              <span>Discount</span>
              <span>-</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹122.00</span>
            </div>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-lg font-semibold">
              Checkout
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default GetCartItems;
