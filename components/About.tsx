import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import imageblock from "@/public/images/ImageBlock.png";
import { TbTruckDelivery } from "react-icons/tb";
import picture1 from "@/public/images/picture1.jpeg";
import picture2 from "@/public/images/picture2.png";
import picture3 from "@/public/images/picture3.png";
import { PiPlantLight } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const Faq = () => {
  return (
    <main className="w-full lg:pt-14 py-10 lg:py-0 lg:pb-24 bg-[#FFFFFF]">
      <div
        className={`${inter.className} max-w-[1200px] h-fit mx-auto flex flex-col px-2 xl:px-0`}
      >
        {/* PICTURES */}
        <div className="flex sm:flex-row flex-col gap-5 lg:h-[478px] sm:h-[340px] h-fit">
          <div className="sm:w-1/2 bg-[#007580] lg:p-14 p-5 flex flex-col lg:justify-between gap-14">
            <span className="flex flex-col gap-3">
              <h2 className="font-bold lg:text-[32px] text-[27px] leading-[38.73px] text-[#FFFFFF] text-nowrap">
                About Us - Comforty
              </h2>
              <p className="font-normal lg:text-[18px] text-[15px] leading-[21.78px] text-[#FFFFFF]">
                At Comforty, we believe that the right chair can transform your
                space and elevate your comfort. Specializing in ergonomic
                design, premium materials, and modern aesthetics, we craft
                chairs that seamlessly blend style with functionality.{" "}
              </p>
            </span>
            <button className="font-normal text-[16px] leading-[24px] text-[#FFFFFF] w-[179px] h-[56px] bg-[#F9F9F926]/15">
              View collection
            </button>
          </div>
          <div className="sm:w-1/2">
            <Image
              src={imageblock}
              alt="image"
              className="lg:h-[478px] h-[350px] sm:h-[340px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:pt-24 pt-16">
          <div className="font-semibold lg:text-[32px] text-[26px] leading-[35.2px] text-[#272343] text-center">
            What makes our Brand Different
          </div>
          <div className="flex sm:flex-row flex-col bg-cyan-30 gap-4">
            <div className="lg:p-8 sm:p-2 flex flex-col lg:gap-3 sm:gap-1 md:gap-2 gap-2 lg:h-[270px] h-[210px] md:h-[230px] sm:h-[190px] lg:justify-start xl:justify-center justify-center md:justify-start bg-[#F9F9F9]">
              <span>
                <TbTruckDelivery className="h-[24px] w-[24px] text-[#007580]" />
              </span>
              <h2 className="font-normal lg:text-[20px] sm:text-[18px] md:text-[20px] leading-[28px] text-[#007580]">
                Next day as standard
              </h2>
              <p className="font-normal lg:text-[16px] sm:text-[12px] md:text-[14px] leading-[24px] text-[#007580]">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
            <div className="lg:p-8 sm:p-2 flex flex-col lg:gap-3 sm:gap-1 md:gap-2 gap-2 lg:h-[270px] h-[210px] md:h-[230px] sm:h-[190px] lg:justify-start xl:justify-center justify-center md:justify-start bg-[#F9F9F9]">
              <span>
                <SiTicktick className="h-[24px] w-[24px] text-[#007580]" />
              </span>
              <h2 className="font-normal lg:text-[20px] sm:text-[18px] md:text-[20px] leading-[28px] text-[#007580]">
                Made by true artisans
              </h2>
              <p className="font-normal lg:text-[16px] sm:text-[12px] md:text-[14px] leading-[24px] text-[#007580]">
                Handmade crafted goods made with real passion and craftmanship
              </p>
            </div>
            <div className="lg:p-8 sm:p-2 flex flex-col lg:gap-3 sm:gap-1 md:gap-2 gap-2 lg:h-[270px] h-[210px] md:h-[230px] sm:h-[190px] lg:justify-start xl:justify-center justify-center md:justify-start bg-[#F9F9F9]">
              <span>
                <CiCreditCard1 className="h-[24px] w-[24px] text-[#007580]" />
              </span>
              <h2 className="font-normal lg:text-[20px] sm:text-[18px] md:text-[20px] leading-[28px] text-[#007580]">
                Unbeatable prices
              </h2>
              <p className="font-normal lg:text-[16px] sm:text-[12px] md:text-[14px] leading-[24px] text-[#007580]">
                For our materials and quality you won’t find better prices
                anywhere
              </p>
            </div>
            <div className="lg:p-8 sm:p-2 flex flex-col lg:gap-3 sm:gap-1 md:gap-2 gap-2 lg:h-[270px] h-[210px] md:h-[230px] sm:h-[190px] lg:justify-start xl:justify-center justify-center md:justify-start bg-[#F9F9F9]">
              <span>
                <PiPlantLight className="h-[24px] w-[24px] text-[#007580]" />
              </span>
              <h2 className="font-normal lg:text-[20px] sm:text-[18px] md:text-[20px] leading-[28px] text-[#007580]">
                Recycled packaging
              </h2>
              <p className="font-normal lg:text-[16px] sm:text-[12px] md:text-[14px] leading-[24px] text-[#007580]">
                We use 100% recycled to ensure our footprint is more manageable
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:pt-24 pt-16">
          <div className="font-semibold lg:text-[32px] text-[26px] leading-[35.2px] text-[#272343] text-center lg:text-left">
            Our Popular Products{" "}
          </div>
          <div className="flex sm:flex-row flex-col gap-5">
            <div className="sm:w-1/2">
              <div className="flex flex-col lg:gap-2 gap-1">
                <Image
                  src={picture1}
                  alt="image"
                  className="lg:h-[375px] h-[270px]"
                />
                <p className="font-normal lg:text-[20px] text-[16px] leading-[28px] text-[#2A254B]">
                  The Poplar suede sofa
                </p>
                <p className="font-normal lg:text-[18px] text-[16px] leading-[27px] text-[#2A254B]">
                  $99.00
                </p>
              </div>
            </div>
            <div className="sm:w-1/2 flex gap-4">
              <div className="flex flex-col lg:gap-2 gap-1">
                <Image
                  src={picture2}
                  alt="image"
                  className="lg:h-[375px] h-[270px]"
                />
                <p className="font-normal lg:text-[20px] text-[16px] leading-[28px] text-[#2A254B]">
                  The Dandy chair
                </p>
                <p className="font-normal lg:text-[18px] text-[16px] leading-[27px] text-[#2A254B]">
                  $99.00
                </p>
              </div>
              <div className="flex flex-col lg:gap-2 gap-1">
                <Image
                  src={picture3}
                  alt="image"
                  className="lg:h-[375px] h-[270px]"
                />
                <p className="font-normal lg:text-[20px] text-[16px] leading-[28px] text-[#2A254B]">
                  The Dandy chair
                </p>
                <p className="font-normal lg:text-[18px] text-[16px] leading-[27px] text-[#2A254B]">
                  $99.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;
