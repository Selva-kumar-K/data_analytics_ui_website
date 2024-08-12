import Image from "next/image";
import React from "react";
import Logo from "./../public/Subtract.png";
import HeroSection from "./HeroSection";

export default function Navbar() {
  return (
    <div className="bg-blue-950/90  h-screen px-4 lg:px-0">
        <div className="text-white flex items-center justify-between  py-5 lg:w-[90%] xl:w-[80%] mx-auto">
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
              <li className="text-[#8794BA] text-[16px] hover:text-[#677cb8] cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-x-10">
            <button className="text-[#8794BA] hover:text-[#677cb8] cursor-pointer">
              Sign in
            </button>
            <button className="text-[#8794BA] py-[5px] px-[30px] lg:py-[10px] lg:px-[56px] border-[1px] border-[#465B95] rounded-[68px] hover:text-white hover:bg-[#4672e2]/40 cursor-pointer">
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
        </div>

        <HeroSection/>

    </div>
  );
}
