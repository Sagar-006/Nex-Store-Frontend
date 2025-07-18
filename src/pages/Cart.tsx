import { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const productId = query.get("productId");
  const quantity = query.get("quantity");
  const size = query.get("size");

  useEffect(() => {
    const addToCart = async () => {
      try {
        const token = localStorage.getItem("Authorization");
        if (!token) return;

        const res = await axios.post(
          `${backend_url}/product/cart/addtocart`,
          {
            productId: String(productId),
            quantity: Number(quantity),
            size,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Item added to cart", res.data);
        toast.success("Added to cart!");
        navigate("/cart/allcartproducts"); // ✅ navigate works now
      } catch (e) {
        console.error("Failed to add to cart:", e);
        toast.error("Failed to add item.");
      }
    };

    if (productId && quantity && size) {
      addToCart();
    } else {
      console.warn("Missing cart query params");
    }
  }, [productId, quantity, size, navigate, backend_url]);

  return <div>Redirecting to cart...</div>;
};

export default Cart;
