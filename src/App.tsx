import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import AllProductList from "./pages/AllProductList";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import GetCartItems from "./utils/GetCartItems";
import AllOrders from "./pages/AllOrders";
import AboutPage from "./pages/AboutPage";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<AllProductList />} />
        <Route
          path="/products/:_id"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart/allcartproducts"
          element={
            <ProtectedRoute>
              <GetCartItems />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/getallorders" element={<Checkout />} /> */}
        <Route
          path="/getallorders"
          element={
            <ProtectedRoute>
              <AllOrders />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/profile" element={< />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
