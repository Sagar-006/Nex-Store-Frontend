import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useState } from "react";
import { FiAlertCircle, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [emailError, setEmailError] = useState(false);
  const [loginData,setLoginData] = useState({
    email:'',password:""
  });
  // console.log(loginData);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email validation
    setEmailError(true);

    const getData = async () => {
      try {
        const res = await axios.post(`${backend_url}/login`,{
          email:loginData.email,
          password:loginData.password,
        });
        console.log(res.data);
        localStorage.setItem("Authorization",res.data.token);

        if(res.data.message == 'Login successfully'){
          navigate("/products");
        }

      } catch (e) {
        console.log("Error fetching products:", e);
      }
    };
    getData();
  };

  const changeHandler =(e:React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-5xl font-black tracking-widest mb-6">WELCOME</h1>

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
                emailError ? "border-red-600 text-red-600" : "border-black"
              }`}
              required
              name="email"
              onChange={changeHandler}
            />
            {emailError && (
              <FiAlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 text-xl" />
            )}
          </div>
          {emailError && (
            <p className="text-sm text-red-600 mt-1">Enter email address</p>
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
  );
};

export default Login;
