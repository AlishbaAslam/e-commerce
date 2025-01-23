import React from "react";
import Image from "next/image";
import sproductimage from "@/public/images/sproductimage.png";
import { CiShoppingCart } from "react-icons/ci";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const SingleProduct = () => {
  return (
    <main className="w-full lg:py-24 py-16 bg-[#FFFFFF]">
      <div
        className={`${inter.className} max-w-[1200px] lg:h-[570px] mx-auto flex lg:flex-row flex-col justify-between px-2 xl:px-0 xl:gap-8 gap-8 lg:gap-8`}
      >
            {/* IMAGE */}
            <div className="flex justify-center">
              <Image
                className="rounded-[10px] xl:w-[600px] xl:h-[570px] lg:w-[600px] lg:h-[570px]"
                src={sproductimage}
                alt="product"
                quality={100}
              />
            </div>
            {/* TEXT */}
            <div className="lg:w-[541px] flex flex-col h-full gap-[25px] lg:px-0 px-3 md:px-11">
              <h1 className="font-bold lg:text-[60px] sm:text-[60px] text-[45px] leading-[66px] text-[#272343]">
                Library Stool <span className="lg:block block sm:inline">Chair</span> 
              </h1>
              <button className="w-[144px] h-[44px] rounded-[100px] bg-[#029FAE] font-semibold lg:text-[20px] sm:text-[20px] text-[16px] leading-[22px] text-[#FFFFFF]">
                $20.00 USD
              </button>
              <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
              <p className="font-normal lg:text-[22px] sm:text-[22px] text-[18px] leading-[33px] text-[#272343] opacity-[60%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
                adipiscing
              </p>
              <button className="flex items-center justify-center text-[#FFFFFF] w-[160px] h-[45px] lg:w-[212px] lg:h-[63px] sm:w-[212px] sm:h-[63px] bg-[#029FAE] rounded-[8px] lg:py-[14px] lg:px-[24px] sm:py-[14px] sm:px-[24px] py-[8px] px-[10px] lg:gap-[9px] sm:gap-[9px] gap-[4px]">
                <CiShoppingCart className="h-[25px] w-[25px] lg:h-[29px] lg:w-[29px] sm:h-[29px] sm:w-[29px]" />
                <span className="font-semibold lg:text-[20px] sm:text-[20px] text-[16px] leading-[22px] text-[#FFFFFF] text-center text-nowrap">
                  Add To cart
                </span>
              </button>
            </div>
      </div>
    </main>
  );
};

export default SingleProduct;
