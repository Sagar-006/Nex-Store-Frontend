import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import { ShoppingCart } from "lucide-react";
import CartItem from "@/components/CartItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { FiPackage } from "react-icons/fi";

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
  refreshCart:() => void;
}

const GetCartItems = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const {
    loading,
    setLoading,
    finalPrice,
    setFinalPrice,
    shippingAddress,
    setShippingAddress,
  } = useAuth();
  const token = localStorage.getItem("Authorization");
  const [subtotal, setSubTotal] = useState(0);
  console.log(shippingAddress)

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${backend_url}/product/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res.data.findCart.items)

      setCartItems(res.data.findCart.items);
      // console.log(res.data.findCart.items._id);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch cart items:", err);
      setLoading(false);
    }
  };
  useEffect(() => {
    
    fetchCartItems();
  }, [backend_url, token]);

  const calculateTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].productId.price * cartItems[i].quantity;
    }
    setSubTotal(total);
    const deliverycharges: number = 111;
    const fullfinal: number = total + deliverycharges;
    setFinalPrice(fullfinal);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const removeItemFromUI = (productId: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item.productId._id !== productId)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Address added!");
    console.log(shippingAddress);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    setShippingAddress((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // console.log(shippingAddress);
  };

  const orderCreate = async () => {
    const token = localStorage.getItem("Authorization");

    const formattedShippingAddress = {
      firstname: shippingAddress.firstname,
      lastname: shippingAddress.lastname,
      street: shippingAddress.street, // assuming "address" is full address
      city: shippingAddress.city,
      zip: shippingAddress.zip,
    };

    if (
      !formattedShippingAddress.firstname ||
      !formattedShippingAddress.lastname ||
      !formattedShippingAddress.street ||
      !formattedShippingAddress.city ||
      !formattedShippingAddress.zip
    ) {
      return toast.error("Add address!");
    }

    try {
      
      const res = await axios.post(
        `${backend_url}/order`,
        {
          items: cartItems.map((item) => ({
            productId: item.productId._id, 
            quantity: item.quantity,
            size: item.size,
          })),
          shippingAddress: formattedShippingAddress,
          totalAmount: finalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      toast.success("Order successful!");
      navigate("/getallorders");
    } catch (e) {
      console.log(e);
      toast.error("Order failed!");
    }
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <Loading />
      ) : cartItems.length === 0 ? (
        <div className=" flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
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
        <>
          {/* Cart & Summary Section */}
          <div className="p-4 sm:p-6 mb-10 mx-auto max-w-7xl bg-white text-black dark:bg-black dark:text-white rounded-xl shadow-md mt-6 flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl font-semibold mb-6">Cart</h2>
              {cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  refreshCart={fetchCartItems}
                  removeItemFromUI={removeItemFromUI}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3 bg-white text-black dark:bg-black dark:text-white dark:border dark:border-gray-700 p-6 rounded-lg shadow-md h-fit">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between py-2 text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal}.00</span>
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
                <span>₹{finalPrice}.00</span>
              </div>
              <button
                className="mt-6 w-full bg-black text-white dark:border dark:border-gray-700 py-3 rounded-lg font-semibold"
                onClick={orderCreate}
              >
                Checkout
              </button>
            </div>
          </div>

          {/* Orders Button */}
          <div className="flex justify-end max-w-7xl mx-auto px-4 mb-6">
            <div
              className="flex flex-row-reverse rounded-2xl border h-[40px] items-center justify-center px-4 hover:cursor-pointer"
              onClick={() => navigate(`/getallorders`)}
            >
              <h1>Orders</h1>
              <FiPackage className="text-2xl ml-2" />
            </div>
          </div>

          {/* Address Form */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-semibold mb-1">Shipping address</h2>
            <form
              onSubmit={handleSubmit}
              className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">
                  FIRST NAME *
                </label>
                <input
                  onChange={changeHandler}
                  name="firstname"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  LAST NAME *
                </label>
                <input
                  onChange={changeHandler}
                  name="lastname"
                  required
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  ADDRESS – STREET
                </label>
                <input
                  onChange={changeHandler}
                  name="street"
                  required
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  ZIP CODE *
                </label>
                <input
                  onChange={changeHandler}
                  name="zip"
                  required
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CITY *</label>
                <input
                  onChange={changeHandler}
                  name="city"
                  required
                  type="text"
                  className="w-full border border-gray-300  rounded px-3 py-2"
                />
              </div>
              <div></div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white dark:border dark:border-gray-700 mb-6 px-6 py-3 font-semibold rounded hover:bg-gray-800"
                >
                  Add address
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      <Footer />
    </div>
  );

};

export default GetCartItems;
