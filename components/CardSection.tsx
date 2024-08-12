import Image from "next/image";
import React from "react";
import screen1 from "./../public/screen-01.png";
import screen2 from "./../public/screen-02.png";
import screen3 from "./../public/screen-03.png";

export default function CardSection() {
  return (
    <div className="lg:w-[90%] xl:w-[80%] mx-auto my-[4%] space-y-14">
      <div className="flex  justify-between items-center">
        <div className="w-2/5 flex flex-col space-y-5">
          <h1 className="text-[30px] lg:text-[40px] font-semibold text-[#172755]">
            Automated Reports & Widget Alerts
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#8794BA]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam.{" "}
          </p>
        </div>
        <div className="w-3/6">
          <Image src={screen1} alt="screen1" />
        </div>
      </div>

      {/* 2 */}

      <div className="flex flex-row-reverse justify-between items-center">
        <div className="w-2/5 flex flex-col space-y-5">
          <h1 className="text-[30px] lg:text-[40px] font-semibold text-[#172755]">
          Fully customizable to address your needs 
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#8794BA]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam.{" "}
          </p>
        </div>
        <div className="w-3/6">
          <Image src={screen2} alt="screen1" className="-ml-6"/>
        </div>
      </div>

      {/* 3 */}

      <div className="flex justify-between items-center">
        <div className="w-2/5 flex flex-col space-y-5">
          <h1 className="text-[30px] lg:text-[40px] font-semibold text-[#172755]">
          Pre-built Dashboard Templates
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#8794BA]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam.{" "}
          </p>
        </div>
        <div className="w-3/6">
          <Image src={screen3} alt="screen1" />
        </div>
      </div>
    </div>
  );
}
