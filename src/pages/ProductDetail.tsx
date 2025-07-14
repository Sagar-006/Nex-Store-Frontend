import Loading from "@/components/Loading";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [loading,setLoading] = useState(true);
  const { _id } = useParams();
  const baseUrl = import.meta.env.VITE_BACKEND_URL;
  const [data, setData] = useState<any>(null); // You can type this better if needed
  console.log(`${baseUrl}/products/${_id}`);
  // const id = _id;
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
      {
        loading ? (<Loading/>) : ( <div>
          <h3>{data.name}</h3>
          <img src={data.image} alt={data.name} width={300} />
          <p>{data.description}</p>
          <p>Price: ₹{data.price}</p>
        </div>)
      }
    </div>
  );
};

export default ProductDetail;
