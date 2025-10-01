import React from "react";
import illustration from "../assets/Illustration.png";

const Slidebar = () => {
  return (
    <div className="flex justify-between items-center bg-[#F5F7FA] p-10 ">
      <div className="mx-20">
        <p className="text-5xl font-semi-bold mb-4 leading-snug">
          Lessons and insights <br />
          <span className="text-green-500"> from 8 years</span>
        </p>
        <p className="text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
        <button className="mt-4 text-white bg-green-500 border border-green-500 rounded-md py-2 px-4">Register</button>
      </div>
      <div className="mx-16">
        <img src={illustration} className="w-96" alt="Illustration" />
      </div>
    </div>
  );
};

export default Slidebar;
