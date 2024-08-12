import Image from "next/image";
import ImageLogo from "./../public/main-screen.png"
import React from "react";

export default function HeroSection() {
  return (
    <div className="flex space-x-10 items-center ml-[150px] overflow-hidden my-[3%]">
      <div className="w-2/4 flex flex-col space-y-5">
        <h1 className="text-[46px] font-semibold text-white">
          Monitor your business on real-time dashboard
        </h1>
        <p className="text-[18px] text-[#8794BA]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam.{" "}
        </p>
        <div className="">
          <button className="bg-[#EF2A82] text-white rounded-[68px] px-[40px] py-[10px] hover:bg-[#EF3A85]">
            Try for free
          </button>
        </div>
      </div>
      <div className="w-1/2">
      <Image src={ImageLogo} alt="image_logo" className=""/>
      </div>
    </div>
  );
}
