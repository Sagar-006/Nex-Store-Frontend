import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export type Product = {
  _id: string;
  name: string;
  price: number;
  img: string;
  description: string;
  category: string;
};

const Products = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/user/products"); 
      // console.log(res.data.response._id);
      setAllProducts(res.data.response);
    } catch (e) {
      console.log("Error fetching products:", e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-y-6 mt-6  pb-[100px] ">
      {allProducts.map((item) => (
        <ProductCard key={item._id} _id={item._id} item={item} />
      ))}
    </div>
  );
};

export default Products;
