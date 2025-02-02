import React from 'react'
import Image from 'next/image'
import hero from '../public/images/Product-Image.png'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});


const Hero = () => {
  return (
    <main className="w-full bg-[#FFFFFF]">
    <div className={`${inter.className} max-w-[1200px] lg:px-5 h-[580px] lg:h-[850px] bg-[#F0F2F3] mx-auto flex items-center lg:justify-around justify-center xl:rounded-bl-[48px] xl:py-[14px] px-2 xl:px-0`}>
            {/* LEFT */}
            <div className='lg:w-[540px] lg:h-[337px] flex flex-col lg:gap-[29px] sm:gap-[24px] gap-[28px] md:gap-[30px] md:w-[55%]'>
                <h2 className='font-normal lg:text-[16px] lg:leading-[14px] lg:tracking-wide uppercase text-[#272343]'>Welcome to chairy</h2>
                <h2 className='font-bold lg:text-[55px] text-[48px] sm:text-[55px] lg:leading-[70px] leading-[55px] text-[#272343] capitalize'>Best Furniture Collection for your interior.</h2>
                <button className='flex lg:gap-[20px] gap-[25px] items-center justify-center w-[171px] h-[52px] py-1.5 rounded-[8px] bg-[#029FAE] text-[16px] leading-[17.6px] text-center text-[#FFFFFF]'>Shop Now <span className='h-[24px] lg:w-[24px] flex items-center'>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span></button>
            </div>
            {/* RIGHT */}
            <div className='md:w-[35%]'>
                <Image className='lg:w-[434px] lg:h-[584px] md:w-[420px] md:h-[420px] hidden md:block'
                src={hero}
                alt='hero'
                quality={100}
                 />
            </div>
    </div>
    </main>
  )
}

export default Hero