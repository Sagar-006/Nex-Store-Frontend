import Loading from "@/components/Loading";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface bodyInterface {
  productId: string;
  quantity: string;
  size: string;
}
const Cart = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [cartItems, setCartItems] = useState<any[]>([]);
  const location = useLocation();
  const {loading,setLoading} = useAuth();

  const query = new URLSearchParams(location.search);
  const productId = query.get("productId");
  const quantity = query.get("quantity");
  const size = query.get("size");
  // console.log(productId,quantity,size);
  if (!productId || !quantity || !size) {
    console.warn("Missing cart query params");
    return;
  }

  const addToCart = async () => {
    try {
      const token = localStorage.getItem("Authorization");
      if (!token) return;

      const res = await axios.post(`${backend_url}/product/cart/addtocart`, {
        productId: String(productId),
        quantity: Number(quantity),
        size: size,
      },{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Item added to cart",res.data);
      await getCartItems();
    } catch (e) {
      console.log(e);
    }
  };

  const getCartItems = async() => {
    try{
      const token = localStorage.getItem("Authorization");
      if(!token) return;

      setLoading(true);
      const res = await axios.get(`${backend_url}/product/cart`,{
        headers:{
          Authorization:`Bearer ${token}`,
        },
      });

      console.log("cart items",res.data.findCart);
      setCartItems(res.data.findCart.items || []);
      setLoading(false);
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    const shouldAddToCart = productId && quantity && size;

    if (shouldAddToCart) {
      addToCart();
    } else {
      console.log("Cart page mounted"); 
      getCartItems(); // always call this on mount
    }
    // Only run once on initial render
  }, []);


  return (
    <div>
      {
        loading ? (<Loading/>) : (<div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Cart Items</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">No items in cart</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item, index) =>
            item.productId ? (
              <div
                key={index}
                className="flex items-center gap-4 border p-4 rounded-lg shadow-sm"
              >
                {/* Product Image */}
                <img
                  src={item.productId.image}
                  alt={item.productId.name}
                  className="w-20 h-20 object-contain"
                />

                {/* Product Info */}
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.productId.name}
                  </h3>
                  <p className="text-sm text-gray-700">
                    Size: <span className="font-medium">{item.size}</span> |
                    Quantity:{" "}
                    <span className="font-medium">{item.quantity}</span>
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="p-4 bg-red-100 text-red-700 rounded-md border border-red-300"
              >
                This product no longer exists.
              </div>
            )
          )}
        </div>
      )}
    </div>)
      }
    </div>
  );
};

export default Cart;
