import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useAuth } from "@/hooks/useAuth";

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
  const { loading, setLoading } = useAuth();

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/products`);
      setLoading(false);
      const shuffled = res.data.response.sort(() => 0.5 - Math.random());
      setAllProducts(shuffled.slice(0, 4));
    } catch (e) {
      console.log("Error fetching products:", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 mt-6 pb-12 ">
        {allProducts.map((item) => (
          <ProductCard key={item._id} _id={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
