import React from "react";

export default function PricingSection() {
  return (
    <div className="bg-[#172755] py-10 px-4">
      <div className="md:mx-auto md:w-[600px] text-center space-y-4">
        <h2 className="text-[30px] md:text-[40px] text-[#fff] font-semibold">
          Pricing
        </h2>
        <p className="text-[#8794BA] text-[16px] md:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est.
        </p>
      </div>

      <div className="lg:w-[90%] xl:w-[80%] mx-auto my-[4%] mt-10">
        <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between md:items-center md:space-x-10">
          <div className="md:w-2/6 border-[1px] md:h-[450px] border-[#2A407C] rounded-[30px] flex flex-col justify-center items-center space-y-5 py-10">
            <div className="border-b border-slate-200 pb-5">
              <h1 className="text-[30px] font-semibold text-white">Starter</h1>
              <p className="text-[18px] text-[#8794BA]">upto 3 users</p>
            </div>
            <div className="text-center">
              <h1 className="text-[40px] font-semibold text-white">
                <span className="text-[18px]">$</span>29
              </h1>
              <p className="text-[16px] text-[#8794BA]">per month</p>
              <button className="mt-10 text-[#8794BA] py-[5px] px-[30px] lg:py-[10px] lg:px-[56px] border-[1px] border-[#465B95] rounded-[68px] hover:text-white hover:bg-[#4672e2]/40 cursor-pointer">
                Order
              </button>
            </div>
          </div>

          {/* 2 */}

          <div className="md:w-2/6  md:h-[450px] border-[1px] border-[#2A407C] bg-[#fff] rounded-[30px] flex flex-col justify-center items-center space-y-5 py-10">
            <div className="border-b border-slate-200 pb-5">
              <h1 className="text-[30px] font-semibold text-[#172755]">
                Standard
              </h1>
              <p className="text-[18px] text-[#8794BA]">upto 20 users</p>
            </div>
            <div className="text-center">
              <h1 className="text-[40px] font-semibold text-[#172755]">
                <span className="text-[18px]">$</span>29
              </h1>
              <p className="text-[16px] text-[#8794BA]">per month</p>
              <button className="bg-[#EF2A82]  mt-10 text-[#fff] py-[5px] px-[30px] lg:py-[10px] lg:px-[56px] rounded-[68px]  hover:bg-[#fa4a93] cursor-pointer">
                Order
              </button>
            </div>
          </div>

          {/* 3 */}

          <div className="md:w-2/6  md:h-[450px] border-[1px] border-[#2A407C] rounded-[30px] flex flex-col justify-center items-center space-y-5 py-10">
            <div className="border-b border-slate-200 pb-5">
              <h1 className="text-[30px] font-semibold text-white">Premium</h1>
              <p className="text-[18px] text-[#8794BA]">upto 200 users</p>
            </div>
            <div className="text-center">
              <h1 className="text-[40px] font-semibold text-white">
                <span className="text-[18px]">$</span>29
              </h1>
              <p className="text-[16px] text-[#8794BA]">per month</p>
              <button className="mt-10 text-[#8794BA] py-[5px] px-[30px] lg:py-[10px] lg:px-[56px] border-[1px] border-[#465B95] rounded-[68px] hover:text-white hover:bg-[#4672e2]/40 cursor-pointer">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
