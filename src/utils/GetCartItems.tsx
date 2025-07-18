import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import { motion } from "framer-motion";
import { Smile } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import CartItem from "@/components/CartItem";

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
const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("Authorization");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get(`${backend_url}/product/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCartItems(res.data.findCart.items);
        console.log(res.data.findCart);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch cart items:", err);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [backend_url, token]);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-6">Cart</h2>
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
};

export default GetCartItems;
