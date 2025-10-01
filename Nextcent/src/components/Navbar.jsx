import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Arrow from "../assets/right-arrow.png";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-6 mx-24">
      <div>
        <img src={Logo} alt="Logo" className="w-36" />
      </div>
      <div className="flex flex-row items-center  space-x-4">
        <nav>
          <Link to="/" className="p-4 font-bold hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="p-4 font-bold hover:text-blue-500">
            Features
          </Link>
          <Link to="/community" className="p-4 font-bold hover:text-blue-500">
            Community
          </Link>
          <Link to="/blog" className="p-4 font-bold hover:text-blue-500">
            Blog
          </Link>
          <Link to="/pricing" className="p-4 font-bold hover:text-blue-500">
            Pricing
          </Link>
        </nav>
        <div className="flex border border-gray-300 bg-[#4CAF4F] text-white rounded-lg p-2 flex-row items-center space-x-4">
          <button>Register Now</button>
          <img
            src={Arrow}
            alt="Arrow"
            className="w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
