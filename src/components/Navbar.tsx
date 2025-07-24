import { IoIosSearch } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";
import { FaBagShopping } from "react-icons/fa6";
import Logo from "@/assets/Nex Logo.jpeg";
import { useNavigate } from "react-router-dom";
import { SmoothCursor } from "@/components/magicui/SmoothCursor";
import { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";


const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {toggleTheme,theme} = useTheme()
  

  return (
    <SmoothCursor>
      <nav className="w-full bg-white text-black dark:bg-black dark:text-white shadow-md">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between items-center py-4">
            {/* Left - Logo and Brand */}
            <div className="flex items-center gap-4">
              <img src={Logo} alt="Logo" className="w-10 h-10 rounded-sm" />
              <h1
                className="text-xl sm:text-2xl font-bold cursor-pointer"
                onClick={() => navigate("/")}
              >
                NEX STORE
              </h1>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden mr-[280px] md:flex gap-6 items-baseline text-sm font-semibold">
              <li
                className="hover:border-b-2 border-black cursor-pointer"
                onClick={() => navigate("/products?category=ALL")}
              >
                All
              </li>
              <li
                className="hover:border-b-2 border-black cursor-pointer"
                onClick={() => navigate("/products?category=MEN")}
              >
                Men
              </li>
              <li
                className="hover:border-b-2 border-black cursor-pointer"
                onClick={() => navigate("/products?category=WOMEN")}
              >
                Women
              </li>
            </ul>

            {/* Right - Search + Icons */}
            <div className="hidden lg:flex items-center gap-4 bg-white text-black dark:bg-black  dark:text-white ml-8">
              <div className="relative w-[300px] xl:w-[450px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border border-gray-900 px-4 py-2 rounded-lg pr-10"
                />
                <div className="absolute   right-3 top-1/2 -translate-y-1/2 text-2xl cursor-pointer">
                  <IoIosSearch />
                </div>
              </div>
              <button className="text-xl" onClick={() => navigate("/login")}>
                <LuLogIn />
              </button>
              <button
                className="text-xl"
                onClick={() => navigate("/cart/allcartproducts")}
              >
                <FaBagShopping />
              </button>
            </div>
            <div className="text-2xl">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {theme === "light" ? (
                  <MdOutlineDarkMode className="text-black" />
                ) : (
                  <MdOutlineLightMode className="text-white" />
                )}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-2xl"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col gap-4 pb-4">
              <ul className="flex flex-col gap-2 font-semibold text-black">
                <li onClick={() => navigate("/products?category=ALL")}>All</li>
                <li onClick={() => navigate("/products?category=MEN")}>Men</li>
                <li onClick={() => navigate("/products?category=WOMEN")}>
                  Women
                </li>
              </ul>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border border-gray-900 px-4 py-2 text-black rounded-lg pr-10"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xl">
                  <IoIosSearch />
                </div>
              </div>
              <div className="flex gap-4 pt-2 text-xl">
                <LuLogIn
                  onClick={() => navigate("/login")}
                  className="cursor-pointer"
                />
                <FaBagShopping
                  onClick={() => navigate("/cart/allcartproducts")}
                  className="cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </SmoothCursor>
  );
};

export default Navbar;
