import Image from "next/image";
import ImageLogo from "./../public/main-screen.png"
import React from "react";

export default function HeroSection() {
  return (
    <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0 md:items-center lg:ml-[70px] xl:ml-[150px] overflow-hidden my-[3%]">
      <div className="md:w-2/4 flex flex-col space-y-5">
        <h1 className="text-[30px] lg:text-[46px] font-semibold text-white">
          Monitor your business on real-time dashboard
        </h1>
        <p className="text-[16px] lg:text-[18px] text-[#8794BA]">
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
      <div className="w-full -ml-5 md:w-1/2">
      <Image src={ImageLogo} alt="image_logo" className=""/>
      </div>
    </div>
  );
}
