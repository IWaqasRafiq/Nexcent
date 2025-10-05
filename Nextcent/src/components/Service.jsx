import React from "react";
import Image from "../assets/Girl With Mobile Icon.png";

const Service = () => {
  return (
    <div className="flex flex-row gap-20 justify-center items-center p-10 px-32">
      <div>
        <img src={Image} alt="" className="w-[500px]" />
      </div>
      <div className="w-[50%]">
        <p className="font-bold text-4xl leading-normal">How to design your site footer like we did</p>
        <p className="text-gray-600 mt-4">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="mt-6 text-white bg-green-500 border border-green-500 rounded-md py-2 px-4">Learn More</button>
      </div>
    </div>
  );
};

export default Service;
