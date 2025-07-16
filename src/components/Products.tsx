import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

const Products = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL;
  const [allProducts, setAllProducts] = useState<Product[]>([]);


  const getData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/products`); 
      // console.log(res.data.response._id);
      setAllProducts(res.data.response.slice(0,4));

    } catch (e) {
      console.log("Error fetching products:", e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-y-6 gap-x-0 mt-6  pb-[100px] ">
      {allProducts.map((item) => (
        <ProductCard key={item._id} _id={item._id} item={item} />
      ))}
    </div>
  );
};

export default Products;
