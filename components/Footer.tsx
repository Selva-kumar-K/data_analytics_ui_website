import Image from "next/image";
import React from "react";
import Logo from "./../public/Subtract_plain.png";
import Facebook from "./../public/Facebook.png";
import Instagram from "./../public/Instagram.png";
import Twitter from "./../public/Twitter.png";

export default function Footer() {
  return (
    <div className="bg-[#172755] h-full px-4 lg:px-0 py-[20px] ">
      <div className="text-white flex items-center justify-between  py-5 lg:w-[90%] xl:w-[80%] mx-auto border-t border-[#2A407C]">
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="logo"
            className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]"
          />
          <h1 className="uppercase font-semibold text-[15px] md:text-[17px] lg:text-[20px] ">
            analytics
          </h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-[38px]">
            <li className="text-[#8794BA] text-[16px] hover:text-[#677cb8] cursor-pointer">
              Products
            </li>
            <li className="text-[#8794BA] text-[16px] hover:text-[#677cb8] cursor-pointer ">
              Pricing
            </li>
            <li className="text-[#8794BA] text-[16px] hover:text-[#677cb8] cursor-pointer">
              FAQ
            </li>
            <li className="text-[#8794BA] text-[16px] hover:text-[#677cb8] cursor-pointer">
              Blog
            </li>
          </ul>
        </div>
        <div className="flex space-x-5 items-center">
            <Image src={Facebook} alt="" className=""/>
            <Image src={Twitter} alt=""/>
            <Image src={Instagram} alt=""/>
        </div>
      </div>
    </div>
  );
}
