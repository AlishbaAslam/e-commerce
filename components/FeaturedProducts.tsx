"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { Inter } from "next/font/google";
import { Product } from "@/types/products";
import { client } from "@/sanity/lib/client";
import { allProducts, four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(four);
      setProducts(fetchedProduct);
    }
    fetchProduct();
  }, []);

  return (
    <main className="w-full bg-[#FFFFFF]">
      <div
        className={`${inter.className} max-w-[1200px] mx-auto flex flex-col space-y-9 lg:space-y-6 justify-between px-2 lg:px-0`}
      >
        <h1 className="font-semibold mx-auto lg:ml-6 xl:ml-0 text-[32px] leading-[35.2px] text-[#272343] capitalize">
          Featured Products
        </h1>
        <div className="flex flex-col lg:grid-cols-4 lg:grid-rows-1 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:place-items-center justify-between items-center w-full gap-8 sm:gap-5 lg:gap-0 xl:gap-6 md:px-20 lg:px-0">
          {products.map((products) => (
            <div
              key={products._id}
              className="relative h-[353px] w-[280px] xl:h-[353px] xl:w-[280px] lg:h-[310px] lg:w-[210px] flex flex-col justify-between shadow-md border rounded-lg hover:shadow-lg transition duration-200"
            >
              {products.image && (
                <Image
                  className="w-[312px] h-[280px] xl:w-[312px] xl:h-[280px] lg:w-[312px] lg:h-[240px] rounded-md"
                  src={urlFor(products.image).url()}
                  alt="image"
                  height={280}
                  width={312}
                />
              )}
              <div className="h-[51px] flex gap-[10px] items-center">
                <div className="w-[256px] h-[51px] flex flex-col justify-between">
                  <p className="font-normal text-[16px] leading-[20.8px] hover:text-[#007580]">
                    {products.title}
                  </p>
                  <span className="flex items-center gap-1">
                    <p className="font-bold text-[18px] leading-[19.8px] text-[#272343]">
                      {products.price}
                    </p>
                  </span>
                </div>
                <button className="h-[44px] w-[44px] hover:bg-[#029FAE] bg-[#F0F2F3] justify-items-center rounded-lg">
                  <CiShoppingCart className="h-[24px] w-[24px]" />
                </button>
                {products.badge && (
                <div className={`flex justify-center items-center h-[26px] w-[49px] absolute top-[20px] left-[20px] rounded-[4px] py-[6px] px-[10px] text-center z-50 font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] ${products.badge === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"}`}>
                  {products.badge}
                </div>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FeaturedProducts;

