import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface bodyInterface {
  productId:string,
  quantity:string,
  size:string,
}
const Cart = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const productId = query.get("productId");
  const quantity = query.get("quantity");
  const size = query.get("size");
  console.log(productId,quantity,size);

  const addToCart = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const res = await axios.post(`${backend_url}/product/cart/addtocart`, {
          productId: productId,
          quantity: quantity,
          size: size,     
      });

      console.log(res.data);
      const products = res.data.response;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    addToCart
  },[])

  return <div>
    <button onClick={() => addToCart()}>
      AddToCart
    </button>
    
  </div>;
};

export default Cart;
