import Link from "next/link";
import React from "react";
import Image from "next/image";
import zapier from "../public/images/zapier.png"
import pipedrive from "../public/images/pipedrive.png"
import cib from "../public/images/cib.png"
import zlogo from "../public/images/zlogo.png"
import burnt from "../public/images/burnt.png"
import panda from "../public/images/panda.png"
import moz from "../public/images/moz.png"


const CompanyLogo = () => {
  return (
    <main className="w-full bg-[#FFFFFF] h-auto lg:pt-[35px] lg:pb-[20px] flex justify-center items-center">
      <div>
      <ul className="grid lg:grid-cols-7 lg:grid-rows-1 grid-cols-2 sm:grid-cols-3 grid-rows-4 sm:grid-rows-3 max-w-[1200px] lg:h-[139px] px-2 lg:px-0 mx-auto gap-10 lg:gap-0 xl:gap-10">
        <Link href={"#"}>
            <li className="h-[139px] w-[135px] flex justify-center items-center">
                <Image className="object-fill"
                src={zapier}
                alt="logo"
                />
            </li>
          </Link>
          <Link href={"#"}>
            <li className="h-[139px] w-[135px] flex justify-center items-center">
                <Image className="object-fil"
                src={pipedrive}
                alt="logo"
                />
            </li>
          </Link>
          <Link href={"#"}>
            <li className="h-[139px] w-[135px] flex justify-center items-center">
                <Image className="object-fill"
                src={cib}
                alt="logo"
                />
            </li>
          </Link>
          <Link href={"#"}>
            <li className="h-[139px] w-[135px] flex justify-center items-center">
                <Image className="object-fill"
                src={zlogo}
                alt="logo"
                />
            </li>
          </Link>
          <Link href={"#"}>
            <li className="h-[139px] w-[135px] flex justify-center items-center">
                <Image className="object-fill"
                src={burnt}
                alt="logo"
                />
            </li>
          </Link>
          <Link href={"#"}>
            <li className="h-[139px] w-[135px] flex justify-center items-center">
                <Image className="object-fill"
                src={panda}
                alt="logo"
                />
            </li>
          </Link>
          <Link href={"#"}>
            <li className="h-[139px] w-[135px] flex justify-center items-center">
                <Image className="object-fill"
                src={moz}
                alt="logo"
                />
            </li>
          </Link>
        </ul>
      </div>
    </main>
  );
};

export default CompanyLogo;
