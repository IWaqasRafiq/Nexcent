import React from "react";
import BlogImage01 from "../assets/Blog Image 01.png";
import BlogImage02 from "../assets/Blog Image 02.png";
import BlogImage03 from "../assets/Blog Image 03.png";

const Blog = () => {
  return (
    <div className="mb-32">
      <div className="flex flex-col items-center justify-center  gap-4 mt-16">
        <p className="font-semibold text-4xl">Caring is the new marketing</p>
        <p className="text-gray-500 w-2/4 text-center">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-12 px-32 mb-16">
        <div>
          <img src={BlogImage01} alt="" />
          <div className="flex flex-col mx-12 mt-[-90px] gap-4 absolute  w-64 rounded-lg bg-[#F5F7FA] p-4">
            <p className="font-semibold text-center">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <p className="font-semibold text-center text-green-500">Readmore</p>
          </div>
        </div>
        <div>
          <img src={BlogImage02} alt="" />
          <div className="flex flex-col mx-12 mt-[-90px] gap-4 absolute  w-64 rounded-lg bg-[#F5F7FA] p-4">
            <p className="font-semibold text-center">
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <p className="font-semibold text-center text-green-500">Readmore</p>
          </div>
        </div>
        <div>
          <img src={BlogImage03} alt="" />
          <div className="flex flex-col mx-12 mt-[-90px] gap-4 absolute min-h-36  w-64 rounded-lg bg-[#F5F7FA] p-4">
            <p className="font-semibold text-center">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <p className="font-semibold text-center text-green-500">Readmore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
