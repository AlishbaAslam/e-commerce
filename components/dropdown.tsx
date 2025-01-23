"use client"

import * as React from "react"
import { MdArrowDropDown } from "react-icons/md";


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export function DropdownMenuRadioGroupDemo() {
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
          <DropdownMenuRadioItem value="Sofa">Sofa</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Armchair">Armchair</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Wing Chair">Wing Chair</DropdownMenuRadioItem>
          <Link href={"#"}>
          <DropdownMenuRadioItem value="Desk Chair" className="text-[#007580] underline">Desk Chair</DropdownMenuRadioItem>
          </Link>
          <DropdownMenuRadioItem value="wooden Chair">wooden Chair</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Park Bench">Park Bench</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
