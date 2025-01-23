import Link from "next/link";
import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { CiDollar } from "react-icons/ci";
import Image from "next/image";
import logo from "@/public/images/Logo.png";
import { CiShoppingCart } from "react-icons/ci";

import { DM_Sans } from "next/font/google";
import { SheetSide } from "./sheet";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const TopHeader = () => {
  return (
    <header className="w-full bg-[#272343]">
      <div className="h-[45px] max-w-[1200px] bg-[#272343] mx-auto flex items-center justify-between px-2 xl:px-0">
        {/* RIGHT-SIDE */}
        <div className="sm:gap-[8px] gap-1 flex items-center opacity-[70%]">
          <span className="flex items-center text-[#FFFFFF] border-[1.5px] border-[#FFFFFF] h-[10px] w-[10px] sm:h-[13px] sm:w-[13px]">
            <svg
              className="opacity-0 hover:opacity-100"
              width="12"
              height="12"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3334 1.5L5.00008 8.83333L1.66675 5.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <p className="text-[#FFFFFF] font-normal text-[9px] sm:text-[13px]">
            Free shipping on all orders over $50
          </p>
        </div>
        {/* RIGHT-SIDE */}
        <div className="flex items-center gap-[5px] sm:gap-[24px] opacity-[70%]">
          <div className="flex text-[#FFFFFF] items-center sm:gap-[6px] opacity-[70%]">
            <p className="font-normal text-[9px] sm:text-[13px] text-center">
              Eng
            </p>
            <span>
              <svg
                className="w-[7px] h-[3.5px] text-[#FFFFFF]"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.75L4.5 4.25L1 0.75"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <Link href={"/faq"}>
          <div className="text-[#FFFFFF] opacity-[70%] flex items-center sm:gap-[6px]">
            <p className="font-normal text-[9px] sm:text-[13px] text-center">
              Faqs
            </p>
            <span>
              <CiDollar className="w-[19px] h-[19px]" />
            </span>
          </div>
          </Link>
          <Link href={"/contactus"}>
          <div className="flex items-center sm:gap-[6px] text-[#FFFFFF] opacity-[70%]">
            <span>
              <HiOutlineExclamationCircle className="h-[19px] w-[19px]" />
            </span>
            <p className="font-normal text-[9px] sm:text-[13px] text-center">
              Need Help
            </p>
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;

export function Header() {
  return (
    <header className="w-full bg-[#F0F2F3]">
      <div className="max-w-[1200px] h-[65px] sm:h-[84px] bg-[#F0F2F3] mx-auto flex items-center justify-between py-[10px] px-2 xl:px-0 box-border sm:box-content">
        {/* LEFT-SIDE */}
        <div className="flex items-center gap-[3px] sm:gap-[8px] text-[#029FAE]">
          <span>
            <Image src={logo} alt="logo" className="sm:w-[40px] w-[25px]" />
          </span>
          <p className="font-medium text-[20px] sm:text-[26px] text-[#272343]">
            Comforty
          </p>
        </div>
        {/* RIGHT-SIDE */}
        <div className="w-[120px] h-[44px] flex items-center justify-center bg-[#FFFFFF] rounded-[8px] gap-[12px]">
        <Link href={"/cart"}>
          <div className="w-[56px] flex gap-[8px] items-center">
            <span>
              <CiShoppingCart className="text-[#272343]" />
            </span>
            <p className="font-medium text-[12px] text-center text-[#272343]">
              Cart
            </p>
          </div>
          </Link>
          <div
            className={`${sans.className} h-[20px] w-[20px] text-[#FFFFFF] bg-[#007580] rounded-full flex justify-center items-center`}
          >
            <span className="font-medium text-[10px] text-[#FFFFFF]">2</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export function NavLinks() {
  return (
    <header className="w-full bg-[#FFFFFF]">
      <div className="max-w-[1200px] h-[60px] sm:h-[74px] bg-[#FFFFFF] mx-auto flex items-center justify-between py-[30px] px-2 xl:px-0">
      <div className="lg:hidden block"><SheetSide /></div>
      <div className="hidden lg:block">
            <ul className="flex gap-[32px] font-medium text-[14px] text-[#636270]">
            <Link href={"/"}>
              <li className="active:text-[#007580]">Home</li>
            </Link>
            <Link href={"/singleproduct"}>
              <li className="active:text-[#007580]">Shop</li>
            </Link>
            <Link href={"/product"}>
              <li className="active:text-[#007580]">Product</li>
            </Link>
            <Link href={"#"}>
              <li className="active:text-[#007580]">Pages</li>
            </Link>
            <Link href={"/aboutus"}>
              <li className="active:text-[#007580]">About</li>
            </Link>
          </ul>
          </div>
          <div className="flex gap-[8px]">
            <p className="font-normal text-[10px] sm:text-[14px] text-[#636270]">
              Contact:
            </p>
            <p className="font-medium text-[10px] sm:text-[14px] text-[#272343]">
              (808) 555-0111
            </p>
          </div>
      </div>
    </header>
  );
}
