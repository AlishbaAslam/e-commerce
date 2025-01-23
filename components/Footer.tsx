import React from "react";
import Image from "next/image";
import logo from "@/public/images/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import { RiVisaLine } from "react-icons/ri";
import Vector from "@/public/images/Vector.png"
import paypal from "@/public/images/paypal.png"
import card from "@/public/images/card.png"




import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

import { Poppins } from "next/font/google";
import { DropdownMenuRadioGroupDemo } from "./dropdown";
import { DropdownMenuRadioGroupDemoButton } from "./dropdowntwo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});


const Footer = () => {
  return (
    <footer className="w-full bg-[#FFFFFF]">
    <div
      className={`${inter.className} max-w-[1200px] h-[530px] md:h-[360px] lg:h-[550px] xl:h-[350px] md:flex-wrap xl:flex-nowrap mx-auto flex lg:flex-row flex-col items-start pt-14 lg:justify-between bg-[#FFFFFF] border-t-[1px] border-opacity-[50%] border-[#9A9CAA] px-2 xl:px-0`}
    >
        <div className="lg:w-[350px] sm:w-[350px] lg:h-[198px] flex flex-col gap-[24px]">
          <div className="flex gap-[8px]">
            <span>
              <Image
                src={logo}
                alt="logo"
                className="lg:h-[40px] lg:w-[40px] h-[35px] w-[35px] text-[#029FAE]"
              />
            </span>
            <p className="text-[#272343] lg:text-[26px] text-[22px]">
              Comforty
            </p>
          </div>
          <p className="font-normal text-[16px] opacity-[60%] text-[#272343]">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus
          </p>
          <ul className="w-fit h-[38px] gap-[4px] flex items-center">
            <li className="h-[38px] w-[38px] rounded-full border-[1px] flex items-center justify-center border-[#007580]">
              <FaFacebook className="text-[#6b9598]" />
            </li>
            <li className="h-[38px] w-[38px] flex items-center justify-center">
              <FaTwitter />
            </li>
            <li className="h-[38px] w-[38px] flex items-center justify-center">
              <FaInstagram />
            </li>
            <li className="h-[38px] w-[38px] flex items-center justify-center">
              <FaPinterest />
            </li>
            <li className="h-[38px] w-[38px] flex items-center justify-center">
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="lg:w-[105px] lg:h-[203px] flex lg:flex-col lg:gap-[20px] text-nowrap lg:pt-0 pt-8">
          <h2 className="font-medium text-[14px] text-[#9A9CAA]">
            CATEGORY
          </h2>
          <span className="lg:hidden"><DropdownMenuRadioGroupDemo /></span>
          <div className="hidden lg:block">
          <ul className="font-normal text-[16px] flex flex-col gap-[12px] text-[#272343]">
            <li>Sofa</li>
            <li>Armchair</li>  
            <li>Wing Chair</li>
            <Link href={"#"}>
              <li className="underline text-[#007580]">Desk Chair</li>
            </Link>
            <li>wooden Chair</li>
            <li>Park Bench</li>
          </ul>
          </div>
        </div>
        <div className="lg:w-[156px] lg:h-[143px] flex lg:flex-col lg:gap-[20px] text-nowrap">
          <h2 className="font-medium text-[14px] text-[#9A9CAA]">
            SUPPORT
          </h2>
          <span className="lg:hidden"><DropdownMenuRadioGroupDemoButton /></span>
          <div className="hidden lg:block">
          <ul className="font-normal text-[16px] flex flex-col gap-[12px] text-[#272343]">
            <li>Help & Support</li>
            <li>Tearms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
          </div>
        </div>
        <div className="lg:w-[424px] md:w-[400px] lg:h-[142px] text-[#E1E3E5] flex flex-col space-y-6 lg:pt-10 xl:pt-0">
          <h2 className="font-medium text-[14px] text-[#9A9CAA]">
            NEWSLETTER
          </h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Your email"
              className="sm:w-[285px] md:w-[230px] h-[46px] border-[1px] rounded-[8px] border-[#E1E3E5] opacity-[60%]"
            />
            <button className="sm:w-[127px] h-[46px] rounded-[8px] lg:mx-[18px] mx-1 bg-[#029FAE] lg:text-[16px] text-[12px] text-[#FFFFFF] lg:px-0 px-1">
              Subscribe
            </button>
          </div>
          <p className="font-normal text-[15px] text-[#272343] opacity-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
    </div>
    </footer>
  );
};

export default Footer;

export function BottomFooter() {
  return (
    <footer className="w-full bg-[#FFFFFF]">
    <div
      className={`${poppins.className} max-w-[1200px] lg:h-[75px] py-[24px] mx-auto flex lg:flex-row flex-col space-y-8 items-center justify-between text-[#9A9CAA] border-t-[1px] border-opacity-[50%] border-[#9A9CAA] px-2 xl:px-0`}
    >
      <div>
            <p className="font-normal text-[14px]">@ 2021 - Blogy - Designed & Develop by <span className="font-normal text-[14px] text-[#000000]">Zakirsoft</span></p>
        </div>
        <ul className="w-[227px] lg:h-[38px] flex items-center justify-center gap-[10px] text-[#000000] opacity-[50%] xl:pb-5">
            <li>
            <Image src={card} alt="card" className="opacity-[50%]"/>
            </li>
            <li>
            <Image src={paypal} alt="paypal" className="opacity-[50%]"/>
            </li>
            <li>
            <Image src={Vector} alt="vector" className="w-[50px] h-[27px]" />
            </li>
            <li>
            <RiVisaLine className="w-[50px] h-[35px] opacity-[50%]"/>
            </li>
        </ul>
    </div>
    </footer>
  );
};
