import React from "react";
import Airpods from "../assets/Airpods.png";
import Company01 from "../assets/Company 01.png";
import Company02 from "../assets/Company 02.png";
import Company03 from "../assets/Company 03.png";
import Company04 from "../assets/Company 04.png";
import Company05 from "../assets/Company 05.png";
import Company06 from "../assets/Company 06.png";
import Company07 from "../assets/Compant 07.png";
import Arrow from "../assets/right-arrow.png";


const Review = () => {
  return (
    <div className="flex justify-between items-center p-10   bg-[#F5F7FA]">
      <div className="">
        <img src={Airpods} alt="" />
      </div>
      <div className="flex flex-col gap-4 my-4 w-2/3">
        <p className=" font-normal text-gray-800">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="font-semibold text-2xl text-green-500">Tim Smith</p>
        <p className="text-gray-500">British Dragon Boat Racing Association</p>
        <div className="flex flex-row items-center gap-12 mt-6">
            <img src={Company07} alt="Company07" />
            <img src={Company01} alt="Company07" className="w-10" />
            <img src={Company02} alt="Company07" className="w-10" />
            <img src={Company03} alt="Company07" className="w-10" />
            <img src={Company04} alt="Company07" className="w-10" />
            <img src={Company05} alt="Company07" className="w-10" />
            <img src={Company06} alt="Company07" className="w-10" />
            <div className="flex flex-row items-center gap-2">
                <p className="text-green-500 font-medium">Meet all customers</p>
                <img src={Arrow} className="w-6" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
