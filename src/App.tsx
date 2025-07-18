
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AdminDashboard from './pages/AdminDashboard';
import ProductList from './pages/AllProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderHistory from './pages/OrderHistory';
import AllProductList from './pages/AllProductList';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from "react-hot-toast";
import GetCartItems from './utils/GetCartItems';
// import Profile from './pages/Profile';

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
            
              <Cart />
            
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
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/profile" element={< />} /> */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App
