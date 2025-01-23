import React from "react";
import Image from "next/image";
import chair1 from "@/public/images/chair1.png";
import chair2 from "@/public/images/chair2.png";
import chair3 from "@/public/images/chair3.png";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});
 

const TopCategories = () => {
  return (
    <main className="w-full h-auto bg-[#FFFFFF] lg:pt-24 lg:pb-10 py-12 md:pt-20">
    <div
      className={`${inter.className} max-w-[1200px] lg:h-[508px] lg:space-y-0 space-y-7 mx-auto flex flex-col justify-between px-2 xl:px-0`}
    >
      <div className="font-semibold h-[35px] text-[32px] leading-[35.2px] text-[#272343] capitalize lg:self-start self-center">
      Top categories
      </div>
      <div className="flex lg:flex-row flex-col md:flex-row justify-between items-center w-full lg:gap-0 gap-5">
        <div className="relative lg:h-[424px] lg:w-[320px] xl:h-[424px] xl:w-[385px] h-[330px] w-[280px]"> 
          <Image
            className="rounded-[10px] xl:w-[424px] lg:h-[424px] lg:w-[320px] w-[280px] h-[330px]"
            src={chair1}
            alt="product"
          />
          <div className="absolute bottom-0 w-full h-[85px] rounded-bl-[10px] rounded-br-[10px] flex flex-col z-50 bg-black/70 gap-[8px] p-[20px]">
            <p className="text-[20px] leading-[22px] text-[#FFFFFF]">Wing Chair</p>
            <p className="font-normal text-[14px] leading-[15.4px] text-[#FFFFFF] opacity-[70%]">3,584 Products</p>
          </div>
        </div>
        <div className="relative lg:h-[424px] lg:w-[320px] xl:h-[424px] xl:w-[385px] h-[330px] w-[280px]"> 
          <Image
            className="rounded-[10px] xl:w-[424px] lg:h-[424px] lg:w-[320px] w-[280px] h-[330px]"
            src={chair2}
            alt="product"
          />
          <div className="absolute bottom-0 w-full h-[85px] rounded-bl-[10px] rounded-br-[10px] flex flex-col z-50 bg-black/70 gap-[8px] p-[20px]">
            <p className="text-[20px] leading-[22px] text-[#FFFFFF]">Wooden Chair</p>
            <p className="font-normal text-[14px] leading-[15.4px] text-[#FFFFFF] opacity-[70%]">157 Products</p>
          </div>
        </div>
        <div className="relative lg:h-[424px] lg:w-[320px] xl:h-[424px] xl:w-[385px] h-[330px] w-[280px]"> 
          <Image
            className="rounded-[10px] xl:w-[424px] lg:h-[424px] lg:w-[320px] w-[280px] h-[330px]"
            src={chair3}
            alt="product"
          />
          <div className="absolute bottom-0 w-full h-[85px] rounded-bl-[10px] rounded-br-[10px] flex flex-col z-50 bg-black/70 gap-[8px] p-[20px]">
            <p className="text-[20px] leading-[22px] text-[#FFFFFF]">Desk Chair</p>
            <p className="font-normal text-[14px] leading-[15.4px] text-[#FFFFFF] opacity-[70%]">154 Products</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default TopCategories