import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useState } from "react";
import { FiAlertCircle, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  
  const {signupData,setSignupData,emailData,setEmailData} = useAuth();
  const navigate = useNavigate()
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const getData = async () => {
      try {
        const res = await axios.post(`${backend_url}/signup`, {
          username:signupData.username,
          email: signupData.email,
          password: signupData.password,
          // role:"user"
        });
        console.log(res.data);
        localStorage.setItem("Authorization", res.data.token);
        localStorage.setItem("selectedUser",JSON.stringify(res.data.user))

        if (res.data.message == "you are signed in") {
          toast.success("Signup successfully!");
          navigate("/products");      
        }
        toast.error(res.data.error);
      } catch (e) {
        
        console.log("Error fetching products:", e);
      }
    };
    getData();
  };

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSignupData((prev) =>({
      ...prev,
      [e.target.name]:e.target.value,
    }))
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
        <h1 className="text-5xl font-black tracking-widest mb-6">WELCOME</h1>

        <p className="text-center font-medium text-lg mb-6 tracking-wider">
          Sign up with your email or login.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4"
        >
          {/* Username */}
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-black px-4 py-3 text-sm"
              required
              onChange={changeHandler}
              name="username"
            />
          </div>

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
                  emailData ? "border-black text-black" : "border-black"
                }`}
                required
                onChange={changeHandler}
                name="email"
              />
              {/* {emailData && (
                <FiAlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-xl" />
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
            SIGNUP
          </button>
        </form>
        <div
          onClick={() => navigate("/login")}
          className="flex items-center justify-center mt-2 text-md cursor-pointer mr-6"
        >
          <IoIosArrowRoundForward className="text-2xl " />
          <span>Login</span>
        </div>

        {/* Secure Info */}
        <div className="flex items-center justify-center mt-8 text-sm gap-2">
          <FiLock />
          <span>All data is kept secure</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
