import AllProductCard from '@/components/AllProductCard';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import  { Product } from '@/components/Products'
import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const AllProductList = () => {
  const {loading,setLoading} = useAuth();
  
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get('category')|| 'ALL'; 

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${backend_url}/products`); 
      setLoading(false);
      console.log(res.data);
      const products = res.data.response;
      
      if(category === "ALL"){
        setAllProducts(products);
      }else{
        const filtered = products.filter(
          (p:Product) => p.category.toUpperCase() === category.toUpperCase()
        );
        setAllProducts(filtered)
      }
    } catch (e) {
      console.log("Error fetching products:", e);
    }
  };

  useEffect(() => {
    getData();
  }, [category]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="gap-y-2 flex flex-col">
          <Navbar />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.map((item) => (
              <AllProductCard
                key={item._id}
                name={item.name}
                price={item.price}
                _id={item._id}
                img={item.image}
              />
            ))}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default AllProductList
