import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useState } from "react";
import { FiAlertCircle, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";
import { ShoppingCart } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const Login = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const { loginData, setLoginData, emailData, setEmailData, login, setLogin } =
    useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email validation
    // setEmailData(true);
    const getData = async () => {
      try {
        setLogin(false);
        const res = await axios.post(`${backend_url}/login`, {
          email: loginData.email,
          password: loginData.password,
        });
        console.log(res.data);

        if (res.data.message === "Incorrect Password!") {
          toast.error("Wrong Password try again!");
        }
        localStorage.setItem("Authorization", res.data.token);
        localStorage.setItem("selectedUser", JSON.stringify(res.data.user));
        localStorage.setItem("userId", res.data.user.userId);
        setLogin(true);

        if (res.data.message == "Login successfully") {
          toast.success("Logged in successfully!");
          navigate("/products");
        } else {
          toast.error("email | password WRONG!");
        }
      } catch (e) {
        console.log("Error fetching products:", e);
      }
    };
    getData();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const logOut = () => {
    localStorage.clear();
    delete axios.defaults.headers.common["Authorization"];
    setLogin(false);
    toast.success("Logout successfully!");
    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      <div>
        {login ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="text-3xl font-semibold">
              You are <span className="text-red-600 font-bold">Logged IN!</span>
            </h2>
            <p className="text-gray-600 mt-2">
              You are aleready login go to shopping page.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="flex items-center gap-2 mt-6 px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              RETURN TO SHOP
            </button>
            <ShimmerButton className=" mt-4" onClick={() => logOut()}>
              Log Out
            </ShimmerButton>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
            <h1 className="text-5xl font-black tracking-widest mb-6">
              WELCOME
            </h1>

            <p className="text-center font-medium text-lg mb-6 tracking-wider">
              Login with your email or Sign up.
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col gap-4"
            >
              {/* Email */}
              <div>
                <label className="block mb-1 font-medium">
                  Email <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className={`w-full border px-4 py-3 text-sm ${
                      emailData ? " text-black" : "border-black"
                    }`}
                    required
                    name="email"
                    onChange={changeHandler}
                  />
                  {/* {emailData && (
                <FiAlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 text-xl" />
              )} */}
                </div>
                {emailData && (
                  <p className="text-sm text-black mt-1">Enter email address</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block mb-1 font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-black px-4 py-3 text-sm"
                  required
                  onChange={changeHandler}
                  name="password"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-black text-white py-3 font-semibold text-sm w-full"
              >
                LOGIN
              </button>
            </form>
            <div
              onClick={() => navigate("/signup")}
              className="flex items-center justify-center mt-2 text-md cursor-pointer mr-6"
            >
              <IoIosArrowRoundForward className="text-2xl " />
              <span>Sign up</span>
            </div>

            {/* Secure Info */}
            <div className="flex items-center justify-center mt-8 text-sm gap-2">
              <FiLock />
              <span>All data is kept secure</span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
