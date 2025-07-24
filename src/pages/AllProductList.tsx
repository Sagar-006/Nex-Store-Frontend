import AllProductCard from "@/components/AllProductCard";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { Product } from "@/components/Products";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AllProductList = () => {
  const { loading, setLoading } = useAuth();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get("category") || "ALL";

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${backend_url}/products`);
      setLoading(false);
      const products = res.data.response;

      if (category === "ALL") {
        setAllProducts(products);
      } else {
        const filtered = products.filter(
          (p: Product) => p.category.toUpperCase() === category.toUpperCase()
        );
        setAllProducts(filtered);
      }
    } catch (e) {
      console.log("Error fetching products:", e);
    }
  };

  useEffect(() => {
    getData();
  }, [category]);

  return (
    <div className="min-h-screen flex flex-col bg-white  text-black dark:bg-black gray-900 dark:text-white ">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />

          <main className=" flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* <h1 className="text-2xl font-bold mb-4 capitalize">
              Showing{" "}
              {category === "ALL" ? "All Products" : category + " Products"}
            </h1> */}

            <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          </main>

          <Footer />
        </>
      )}
    </div>
  );
};

export default AllProductList;
