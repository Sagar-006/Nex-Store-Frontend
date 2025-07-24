import { MyOrder } from "@/components/MyOrder";
import axios from "axios";
import { useEffect, useState } from "react";

// interface allOrders{
  
// }
const AllOrders = () => {
  const base_url = import.meta.env.VITE_BACKEND_URL;
  const [allOrders, setAllorders] = useState<any[]>([]); 

  const getallorders = async () => {
    try {
      const token = localStorage.getItem("Authorization");
      const res = await axios.get(`${base_url}/order/getallorders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllorders(res.data.orders);
    } catch (e) {
      console.log("Failed to fetch orders:", e);
    }
  };
  console.log(allOrders)

  useEffect(() => {
    getallorders();
  }, []);

  return (
    <div className=" p-4 sm:p-6 space-y-4 max-w-5xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold">All Orders</h1>
      {allOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        allOrders.map((order) => <MyOrder key={order._id} order={order} />)
      )}
    </div>
  );
};

export default AllOrders;
