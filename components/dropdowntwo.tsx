"use client"

import * as React from "react"
import { MdArrowDropDown } from "react-icons/md";


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export function DropdownMenuRadioGroupDemoButton() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-white text-black pb-5"><MdArrowDropDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="Help & Support">Help & Support</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Tearms & Conditions">Tearms & Conditions</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Privacy Policy">Privacy Policy</DropdownMenuRadioItem>
          <Link href={"#"}>
          <DropdownMenuRadioItem value="Help" className="text-[#007580] underline">Help</DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
