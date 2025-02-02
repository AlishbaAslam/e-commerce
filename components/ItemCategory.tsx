import React from "react";
import Image from "next/image";
import item1 from "@/public/images/item1.png";
import item2 from "@/public/images/item2.jpg"
import item3 from "@/public/images/item3.jpg"
import item4 from "@/public/images/item4.jpg"

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const ItemCategory = () => {
  return (
    <main className="w-full h-auto lg:py-24">
      <div
        className={`${roboto.className} max-w-[1245px] sm:h-[500px] lg:h-[610px] h-[840px] mx-auto flex lg:flex-row flex-col sm:flex-row gap-6 sm:gap-4 lg:gap-6 items-center justify-center xl:justify-between px-2 xl:px-0 lg:justify-center`}
      >
          <div className="relative flex">
            <h2 className="absolute left-[-180px] lg:left-[-279px] top-[181px] lg:top-[279px] w-[400px] lg:w-[610px] h-[39px] lg:h-[52px] -rotate-90 uppercase font-normal text-[21px] lg:text-[32px] leading-[39.84px] text-center text-[#000000]">
              Explore new and popular styles
            </h2>
            <div className="lg:ml-[50px] ml-[40px]">
              <Image className="h-[400px] w-[320px] sm:h-[400px] sm:w-[300px] md:h-[400px] md:w-[340px] lg:h-[610px] lg:w-[480px] xl:h-[610px] xl:w-[580px]" src={item1} alt="item" quality={100} />
            </div>
          </div>
          <div className="flex flex-col lg:h-[610px] xl:w-[639px] justify-between space-y-3 lg:space-y-0">
          <div className="flex gap-3 lg:gap-6">
            <Image className="h-[180px] w-[145px] sm:h-[195px] sm:w-[130px] md:w-[160px] lg:h-[292px] lg:w-[190px] xl:h-[292px] xl:w-[295px]" src={item2} alt="item" quality={100} />
            <Image className="h-[180px] w-[145px] sm:h-[195px] sm:w-[130px] md:w-[160px] lg:h-[292px] lg:w-[190px] xl:h-[292px] xl:w-[295px]" src={item3} alt="item" quality={100} />
          </div>
          <div className="flex gap-3 lg:gap-6">
            <Image className="h-[180px] w-[145px] sm:h-[195px] sm:w-[130px] md:w-[160px] lg:h-[292px] lg:w-[190px] xl:h-[292px] xl:w-[295px]" src={item4} alt="item" quality={100} />
            <Image className="h-[180px] w-[145px] sm:h-[195px] sm:w-[130px] md:w-[160px] lg:h-[292px] lg:w-[190px] xl:h-[292px] xl:w-[295px]" src={item3} alt="item" quality={100} />
          </div>
          </div>
      </div>
    </main>
  );
};

export default ItemCategory;
