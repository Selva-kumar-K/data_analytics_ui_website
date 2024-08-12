import React from "react";
import Icon from "./../public/Icon.svg";
import Icon2 from "./../public/Icon2.svg";
import Icon3 from "./../public/Icon3.svg";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <div className="lg:w-[90%] xl:w-[80%] mx-auto my-[4%]">
      <div className="mt-10 md:mt-0 text-center space-y-8">
        <h2 className="text-[30px] md:text-[40px] text-[#172755] font-semibold">
          Main Features
        </h2>
        <p className="text-[#8794BA] text-[16px] md:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet. Id vel in nam malesuada.
        </p>
      </div>

      <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:items-center gap-[25px] my-[7%]">
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center space-y-5 text-center">
          <Image src={Icon} alt="logo" />
          <p className="text-[#172755] font-semibold">Monitoring 24/7</p>
          <p className="text-[#8794BA] ">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center space-y-5  text-center">
        <Image src={Icon2} alt="logo" />
          <p className="text-[#172755] font-semibold">Widget System</p>
          <p className="text-[#8794BA] ">
          Sapien in etiam vitae nibh nunc mattis imperdiet
          sed nullam. Vitae et, tortor pulvinar risus pulvinar.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center space-y-5  text-center">
        <Image src={Icon3} alt="logo" />
          <p className="text-[#172755] font-semibold">Best Performance</p>
          <p className="text-[#8794BA] ">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>
      </div>
    </div>
  );
}
