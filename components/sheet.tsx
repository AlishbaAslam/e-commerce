"use client";

import { Button } from "@/components/ui/button";
import { TiThMenu } from "react-icons/ti";
import logo from "@/public/images/Logo.png";


import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="bg-[#FFFFFFF] text-[#272343] pl-0">
              <TiThMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center gap-[4px] text-[#029FAE]">
                  <span>
                    <Image
                      src={logo}
                      alt="logo"
                      className="sm:w-[40px] w-[25px]"
                    />
                  </span>
                  <p className="font-medium text-[18px] text-[#272343]">
                    Comforty
                  </p>
                </div>
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-[20px] pt-5 font-medium text-[14px] text-[#636270]">
              <Link href={"/"}>
                <li className="text-[#007580]">Home</li>
              </Link>
              <Link href={"/cart"}>
                <li>Shop</li>
              </Link>
              <Link href={"/product"}>
                <li>Product</li>
              </Link>
              <Link href={"/singleproduct"}>
                <li>Pages</li>
              </Link>
              <Link href={"#"}>
                <li>About</li>
              </Link>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
