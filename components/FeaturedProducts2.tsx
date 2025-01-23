import React from "react";
import Image from "next/image";
import item5 from "@/public/images/item5.png";
import product1 from "@/public/images/product1.png";
import chair3 from "@/public/images/chair3.png";
import product3 from "@/public/images/product3.png";
import chair1 from "@/public/images/chair1.png";




import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const FeaturedProducts = () => {
  return (
    <main className="w-full bg-[#FFFFFF] lg:pb-36 h-auto border-b-[1px] pb-10 border-[#D9D9D9]">
      <div
        className={`${inter.className} max-w-[1200px] lg:h-[390px] mx-auto flex flex-col justify-between px-2 xl:px-0 lg:gap-0 gap-12`}
      >
        <div className="text-[#000000] flex justify-between items-center">
          <div className="h-[34px] w-[401px] font-bold lg:text-[28px] text-[18px] sm:text-[23px] leading-[33.89px] uppercase tracking-widest">Featured Products</div>
          <div className="h-[33px] w-[69px] font-bold lg:text-[18px] text-[12px] sm:text-[14px] sm:flex sm:justify-center sm:items-center leading-[21.78px] border-b-[2px] border-black place-content-center">View all</div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center gap-4 xl:items-end sm:flex-wrap sm:h-[580px] md:px-10 lg:flex-nowrap lg:px-0">
          <div className="h-[270px] xl:h-[280px] lg:h-[276px] lg:w-[263px] flex flex-col justify-between"> 
            <Image
              className="w-[240px] h-[253px] sm:w-[210px] sm:h-[225px] lg:w-[270px] lg:h-[230px] xl:w-[240px] xl:h-[240px]"
              src={item5}
              alt="product"
            />
            <div className="h-[21px] flex justify-between justify-self-end">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                  <p className="font-bold text-[14px] leading-[16.94px] text-[#000000]">
                    $99
                  </p>
              </div>
            </div>
            <div className="h-[270px] xl:h-[280px] lg:h-[276px] lg:w-[263px] flex flex-col justify-between"> 
            <Image
              className="w-[240px] h-[253px] lg:w-[270px] lg:h-[230px] sm:w-[210px] sm:h-[225px] xl:w-[240px] xl:h-[240px]"
              src={product1}
              alt="product"
            />
            <div className="h-[21px] flex justify-between justify-self-end">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                  <p className="font-bold text-[14px] leading-[16.94px] text-[#000000]">
                    $99
                  </p>
              </div>
            </div>
            <div className="h-[270px] xl:h-[280px] lg:h-[276px] lg:w-[263px] flex flex-col justify-between"> 
            <Image
              className="w-[240px] h-[253px] sm:w-[210px] sm:h-[225px] lg:w-[270px] lg:h-[230px] xl:w-[240px] xl:h-[240px]"
              src={chair3}
              alt="product"
            />
            <div className="h-[21px] flex justify-between justify-self-end">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                  <p className="font-bold text-[14px] leading-[16.94px] text-[#000000]">
                    $99
                  </p>
              </div>
            </div>
            <div className="h-[270px] xl:h-[280px] lg:h-[276px] lg:w-[263px] flex flex-col justify-between"> 
            <Image
              className="w-[240px] h-[253px] sm:w-[210px] sm:h-[225px] lg:w-[270px] lg:h-[230px] xl:w-[240px] xl:h-[240px]"
              src={product3}
              alt="product"
            />
            <div className="h-[21px] flex justify-between justify-self-end">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                  <p className="font-bold text-[14px] leading-[16.94px] text-[#000000]">
                    $99
                  </p>
              </div>
            </div>
            <div className="h-[270px] xl:h-[280px] lg:h-[276px] lg:w-[263px] flex flex-col justify-between"> 
            <Image
              className="w-[240px] h-[253px] sm:w-[210px] sm:h-[225px] lg:w-[270px] lg:h-[230px] xl:w-[240px] xl:h-[240px]"
              src={chair1}
              alt="product"
            />
            <div className="h-[21px] flex justify-between justify-self-end">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                  <p className="font-bold text-[14px] leading-[16.94px] text-[#000000]">
                    $99
                  </p>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
};

export default FeaturedProducts;
