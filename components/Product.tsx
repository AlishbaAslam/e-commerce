import React from 'react'
import Image from 'next/image';
import chair2 from "@/public/images/chair2.png"
import chair1 from "@/public/images/chair1.png"
import product2 from "@/public/images/product2.png"
import product1 from "@/public/images/product1.png"
import item1 from "@/public/images/item1.png"
import chair3 from "@/public/images/chair3.png"




import { Roboto,Open_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const open_Sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});


const Product = () => {
  return (
    <main className="w-full h-auto bg-[#1E28320D] lg:pt-14 lg:pb-24 pb-10 md:pt-10">
    <div
      className={`${roboto.className} max-w-[1200px] lg:h-[550px] mx-auto flex flex-col justify-between items-center px-2 xl:px-0`}
    >
        <div className='lg:w-[760px] lg:h-[165px] sm:h-[100px] h-[145px] w-full flex flex-col justify-between'>
        <h2 className='lg:font-medium text-[27px] lg:text-[50px] lg:leading-[58.59px] text-[#000000] capitalize font-semibold text-center'>Or subscribe to the <span className='block sm:inline'>newsletter</span></h2>
        <div className='flex justify-between gap-4 lg:gap-0 sm:justify-center lg:justify-between'>
          <input type="text" placeholder='Email Address...' className='lg:w-[643px] sm:w-[443px] w-full lg:h-[32px] sm:h-[32px] h-[25px] font-semibold lg:text-[16px] text-[14px] sm:text-[16px] leading-[18.75px] text-[#1E283280] opacity-[70%] border-black border-b-[2px]'/>
          <button className={`${open_Sans.className} w-[91px] lg:h-[32px] h-[25px] font-normal lg:text-[16px] sm:h-[32px] text-[14px] sm:text-[16px] leading-[21.79px] text-[#1E2832] border-black border-b-[2px]`}>SUBMIT</button>
        </div>
        </div>
        <div className='xl:h-[300px] lg:h-[330px] flex flex-col items-center justify-between w-full pt-7 lg:pt-0 space-y-6 lg:space-y-0'>
          <h2 className='lg:font-medium text-[27px] lg:text-[50px] lg:leading-[58.59px] text-[#000000] capitalize text-center font-semibold'>Follow products and discounts on Instagram</h2>
          <ul className='lg:h-[186px] lg:justify-between flex lg:flex-row flex-col sm:flex-wrap lg:flex-nowrap sm:h-[800px] justify-between items-center w-full lg:space-y-0 space-y-5 sm:space-y-0 sm:px-12 md:px-20 lg:px-0'>
            <li>
              <Image className='h-[230px] w-[230px] lg:h-[160px] lg:w-[157px] xl:h-[186px] xl:w-[186px] rounded-[6px]'
              src={chair2}
              alt='image'
              quality={100}
               />
            </li>
            <li>
              <Image className='h-[230px] w-[230px] lg:h-[160px] lg:w-[157px] xl:h-[186px] xl:w-[186px] rounded-[6px]'
              src={chair1}
              alt='image'
              quality={100}
               />
            </li>
            <li>
              <Image className='h-[230px] w-[230px] lg:h-[160px] lg:w-[157px] xl:h-[186px] xl:w-[186px] rounded-[6px]'
              src={product2}
              alt='image'
              quality={100}
               />
            </li>
            <li>
              <Image className='h-[230px] w-[230px] lg:h-[160px] lg:w-[157px] xl:h-[186px] xl:w-[186px] rounded-[6px]'
              src={product1}
              alt='image'
              quality={100}
               />
            </li>
            <li>
              <Image className='h-[230px] w-[230px] lg:h-[160px] lg:w-[157px] xl:h-[186px] xl:w-[186px] rounded-[6px]'
              src={item1}
              alt='image'
              quality={100}
               />
            </li>
            <li>
              <Image className='h-[230px] w-[230px] lg:h-[160px] lg:w-[157px] xl:h-[186px] xl:w-[186px] rounded-[6px]'
              src={chair3}
              alt='image'
              quality={100}
               />
            </li>
          </ul>
        </div>
    </div>
    </main>
  )
}

export default Product