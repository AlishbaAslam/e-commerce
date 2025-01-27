import React from "react";
import Image from "next/image";
import product1 from "@/public/images/product1.png";
import product2 from "@/public/images/product2.png";
import product3 from "@/public/images/product3.png";
import product4 from "@/public/images/product4.png";
import chair1 from "@/public/images/chair1.png";
import item4 from "@/public/images/item4.jpg";
import item5 from "@/public/images/item5.png";
import chair2 from "@/public/images/chair2.png";
import chair3 from "@/public/images/chair3.png";
import { CiShoppingCart } from "react-icons/ci";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const FeaturedProducts = () => {
  return (
    <main className="w-full h-auto lg:pb-24 pb-10 pt-8 lg:pt-10 bg-[#FFFFFF]">
      <div
        className={`${inter.className} max-w-[1200px] mx-auto flex flex-col lg:space-y-16 sm:space-y-6 space-y-8 justify-between px-2 lg:px-0`}
      >
        <div className="font-bold mx-auto lg:ml-6 xl:ml-0 text-[32px] leading-[35.2px] text-[#272343] capitalize">
          All Products
        </div>
        <div className="flex flex-col lg:grid-cols-4 lg:grid-rows-1 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:place-items-center justify-between items-center w-full gap-8 sm:gap-5 lg:gap-0 xl:gap-6 md:px-20 lg:px-0">
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={product1}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#029FAE] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
            <div className="flex justify-center items-center h-[26px] w-[49px] absolute top-[20px] left-[20px] rounded-[4px] py-[6px] px-[10px] bg-[#01AD5A] text-center z-50 font-medium text-[13px] leading-[14.3px] text-[#FFFFFF]">
              New
            </div>
          </div>
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={product2}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                  <p className="font-normal text-[14px] leading-[15.4px] line-through text-[#9A9CAA]">
                    $39
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#F0F2F3] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
            <div className="flex justify-center items-center h-[26px] w-[49px] absolute top-[20px] left-[20px] rounded-[4px] py-[6px] px-[10px] bg-[#F5813F] text-center z-50 font-medium text-[13px] leading-[14.3px] text-[#FFFFFF]">
              Sales
            </div>
          </div>
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={product3}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#F0F2F3] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
          </div>
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={product4}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#F0F2F3] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:grid-cols-4 lg:grid-rows-1 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:place-items-center justify-between items-center w-full gap-8 sm:gap-5 lg:gap-0 xl:gap-6 md:px-20 lg:px-0">
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={chair2}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#029FAE] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
            <div className="flex justify-center items-center h-[26px] w-[49px] absolute top-[20px] left-[20px] rounded-[4px] py-[6px] px-[10px] bg-[#01AD5A] text-center z-50 font-medium text-[13px] leading-[14.3px] text-[#FFFFFF]">
              New
            </div>
          </div>
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={item4}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                  <p className="font-normal text-[14px] leading-[15.4px] line-through text-[#9A9CAA]">
                    $39
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#F0F2F3] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
            <div className="flex justify-center items-center h-[26px] w-[49px] absolute top-[20px] left-[20px] rounded-[4px] py-[6px] px-[10px] bg-[#F5813F] text-center z-50 font-medium text-[13px] leading-[14.3px] text-[#FFFFFF]">
              Sales
            </div>
          </div>
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={item5}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#F0F2F3] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
          </div>
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={product1}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#F0F2F3] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:grid-cols-4 lg:grid-rows-1 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:place-items-center justify-between items-center w-full gap-8 sm:gap-5 lg:gap-0 xl:gap-6 md:px-20 lg:px-0">
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={chair1}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#029FAE] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
            <div className="flex justify-center items-center h-[26px] w-[49px] absolute top-[20px] left-[20px] rounded-[4px] py-[6px] px-[10px] bg-[#01AD5A] text-center z-50 font-medium text-[13px] leading-[14.3px] text-[#FFFFFF]">
              New
            </div>
          </div>
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={product2}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                  <p className="font-normal text-[14px] leading-[15.4px] line-through text-[#9A9CAA]">
                    $39
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#F0F2F3] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
            <div className="flex justify-center items-center h-[26px] w-[49px] absolute top-[20px] left-[20px] rounded-[4px] py-[6px] px-[10px] bg-[#F5813F] text-center z-50 font-medium text-[13px] leading-[14.3px] text-[#FFFFFF]">
              Sales
            </div>
          </div>
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={product3}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#F0F2F3] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
          </div>
          <div className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between"> 
            <Image
              className="rounded-[6px] w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px]"
              src={chair3}
              alt="product"
              quality={100}
            />
            <div className="h-[51px] flex gap-[10px] items-center">
              <div className="w-[256px] h-[51px] flex flex-col justify-between">
                <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                    $20
                  </p>
                </span>
              </div>
              <button className="h-[44px] w-[44px] bg-[#F0F2F3] justify-items-center rounded-lg">
                <CiShoppingCart className="h-[24px] w-[24px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProducts;
