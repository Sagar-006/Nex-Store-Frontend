import ProductCard from '@/components/ProductCard';
import  { Product } from '@/components/Products'
import axios from 'axios';
import  { useEffect, useState } from 'react'

const ProductList = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/user/products"); // ✅ Fixed URL (added missing `//`)
      console.log(res.data);
      setAllProducts(res.data.response);
    } catch (e) {
      console.log("Error fetching products:", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* {
        allProducts.map((product) => (
          
        ))
      } */}
    </div>
  )
}

export default ProductList
