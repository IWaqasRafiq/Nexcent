import React from "react";
import Logo from "../assets/Footer Logo.png";
import Icon01 from "../assets/Social Icons 01.png";
import Icon02 from "../assets/Social Icons 02.png";
import Icon03 from "../assets/Social Icons 03.png";
import Icon04 from "../assets/Social Icons 04.png";

const Footer = () => {
  return (
    <div className="bg-[#263238] text-white grid grid-cols-4 mt-16 p-10  gap-4 ">
      <div className="mx-4">
        <img src={Logo} alt="" />
        <p className="text-sm mb-2 mt-10">Copyright © 2020 Landify UI Kit.</p>
        <p className="text-sm ">All rights reserved</p>
        <div className="flex flex-row items-center gap-4 mt-8">
            <img src={Icon01} alt="" />
            <img src={Icon02} alt="" />
            <img src={Icon03} alt="" />
            <img src={Icon04} alt="" />
        </div>
      </div>
      <div className="mx-4">
        <p className="font-bold text-2xl mb-8">Company</p>
        <p className="text-sm text-gray-300 mb-2">About us</p>
        <p className="text-sm text-gray-300 mb-2">Blog</p>
        <p className="text-sm text-gray-300 mb-2">Contact us</p>
        <p className="text-sm text-gray-300 mb-2">Pricing</p>
        <p className="text-sm text-gray-300 mb-2">Testimonials</p>
      </div>
      <div className="mx-4">
        <p className="font-bold text-2xl mb-8">Support</p>
        <p className="text-sm text-gray-300 mb-2">Help center</p>
        <p className="text-sm text-gray-300 mb-2">Terms of service</p>
        <p className="text-sm text-gray-300 mb-2">Legal</p>
        <p className="text-sm text-gray-300 mb-2">Privacy policy</p>
        <p className="text-sm text-gray-300 mb-2">Status</p>
      </div>
      <div className="mx-[-20px]">
        <p className="font-bold text-2xl mb-8">Stay up to date</p>
        <div>
            <input type="email" name="email" id="email" className="p-2 w-80 rounded-md outline-none bg-gray-200" placeholder="Enter your email" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
