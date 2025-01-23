import React from "react";
import { GoPlus } from "react-icons/go";


import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const Faq = () => {
  return (
    <main className="w-full lg:pt-14 py-10 lg:py-0 lg:pb-24 bg-[#FFFFFF]">
      <div className={`${inter.className} max-w-[1200px] h-fit mx-auto flex flex-col px-2 xl:px-0 gap-12`}>
        {/* QUESTIONS */}
          <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="font-bold lg:text-[48px] text-[26px] leading-[56px] text-[#333333] text-nowrap">Questions Looks Here</h2>
            <p className="font-normal text-[16px] leading-[24px] text-[#4F4F4F] text-center md:px-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
         </div> 
          <div className="flex sm:flex-row flex-col gap-5">    
            <div className="lg:w-1/2 space-y-5">
            <div className="flex flex-col gap-4 rounded-[8px] bg-[#F7F7F7] sm:p-5 p-4">
                <span className="flex justify-between">
                    <h3 className="font-bold lg:text-[18px] sm:text-[15px] text-[12px] leading-[26px] text-[#333333] md:text-[17px]">What types of chairs do you offer?</h3>
                    <span>
                    <GoPlus className="sm:h-[24px] sm:w-[24px] h-[25px] w-[25px]" />
                    </span>
                </span>
                <p className="font-normal md:text-[16px] sm:text-[12px] text-[10px] leading-[24px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            <div className="flex flex-col gap-4 rounded-[8px] bg-[#F7F7F7] sm:p-5 p-4">
                <span className="flex justify-between">
                    <h3 className="font-bold lg:text-[18px] sm:text-[15px] text-[12px] leading-[26px] text-[#333333] md:text-[17px]">Do your chairs come with a warranty?</h3>
                    <span>
                    <GoPlus className="sm:h-[24px] sm:w-[24px] h-[25px] w-[25px]" />
                    </span>
                </span>
                <p className="font-normal md:text-[16px] sm:text-[12px] text-[10px] leading-[24px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            <div className="flex flex-col gap-4 rounded-[8px] bg-[#F7F7F7] sm:p-5 p-4">
                <span className="flex justify-between">
                    <h3 className="font-bold lg:text-[18px] sm:text-[15px] text-[12px] leading-[26px] text-[#333333] md:text-[17px]">Can I try a chair before purchasing?</h3>
                    <span>
                    <GoPlus className="sm:h-[24px] sm:w-[24px] h-[25px] w-[25px]" />
                    </span>
                </span>
                <p className="font-normal md:text-[16px] sm:text-[12px] text-[10px] leading-[24px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            </div>
            <div className="lg:w-1/2 space-y-5">
            <div className="flex flex-col gap-4 rounded-[8px] bg-[#F7F7F7] sm:p-5 p-4">
                <span className="flex justify-between">
                    <h3 className="font-bold lg:text-[18px] sm:text-[15px] text-[12px] leading-[26px] text-[#333333] md:text-[17px]">How can we get in touch with you?</h3>
                    <span>
                    <GoPlus className="sm:h-[24px] sm:w-[24px] h-[25px] w-[25px]" />
                    </span>
                </span>
                <p className="font-normal md:text-[16px] sm:text-[12px] text-[10px] leading-[24px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            <div className="flex flex-col gap-4 rounded-[8px] bg-[#F7F7F7] sm:p-5 p-4">
                <span className="flex justify-between">
                    <h3 className="font-bold lg:text-[18px] sm:text-[15px] text-[12px] leading-[26px] text-[#333333] md:text-[17px]">What will be delivered? And When?</h3>
                    <span>
                    <GoPlus className="sm:h-[24px] sm:w-[24px] h-[25px] w-[25px]" />
                    </span>
                </span>
                <p className="font-normal md:text-[16px] sm:text-[12px] text-[10px] leading-[24px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            <div className="flex flex-col gap-4 rounded-[8px] bg-[#F7F7F7] sm:p-5 p-4">
                <span className="flex justify-between">
                    <h3 className="font-bold lg:text-[18px] sm:text-[15px] text-[12px] leading-[26px] text-[#333333] md:text-[17px]">How do I clean and maintain my Comforty chair?</h3>
                    <span>
                    <GoPlus className="sm:h-[24px] sm:w-[24px] h-[25px] w-[25px]" />
                    </span>
                </span>
                <p className="font-normal md:text-[16px] sm:text-[12px] text-[10px] leading-[24px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            </div>
          </div>
      </div>
    </main>
  );
};

export default Faq;
