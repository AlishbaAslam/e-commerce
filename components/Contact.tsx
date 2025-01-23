import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";








import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Contact = () => {
  return (
    <main className="w-full lg:pt-16 py-10 lg:py-0 bg-[#FFFFFF]">
      <div
        className={`${poppins.className} max-w-[1200px] h-fit mx-auto flex flex-col px-2 xl:px-0`}
      >
        {/* CONTACT FORM */}
          {/* INFO */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-semibold lg:text-[36px] text-[26px] leading-[54px] text-[#000000] text-nowrap">Get In Touch With Us</h2>
            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F] text-center">For More Information About Our Product & Services. Please Feel Free To Drop <span className="lg:block inline">Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</span></p>
          </div> 
          {/* ADDRESS AND CONTACT INFO */}
          <div className="flex lg:flex-row flex-col sm:flex-row justify-center">
            {/* ADDRESS */}
            <div className="lg:w-[393px] h-[537px] flex justify-center pt-9 lg:mt-9 xl:mt-8 mt-5 sm:mt-3 md:mt-0">
              <div className="lg:w-[310px] h-[450px] flex flex-col justify-evenly px-5 lg:px-0">
              <div className="flex gap-5">
                <div>
                <FaMapMarkerAlt className="lg:w-[22px] h-[27px]" />
                </div>
                <div className="flex flex-col">
                <span className="font-medium text-[24px] leading-[36px] text-[#000000]">Address</span>
                <span className="font-normal text-[16px] leading-[19.36px] text-[#000000]">236 5th SE Avenue, New <span className="block">York NY10000, United</span> States</span>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                <IoCall className="lg:w-[22px] h-[27px]" />
                </div>
                <div className="flex flex-col">
                <span className="font-medium text-[24px] leading-[36px] text-[#000000]">Phone</span>
                <span className="font-normal text-[16px] leading-[19.36px] text-[#000000]">Mobile: +(84) 546-6789<span className="block">Hotline: +(84) 456-6789</span></span>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                <IoTimeSharp className="w-[22px] h-[27px]" />
                </div>
                <div className="flex flex-col">
                <span className="font-medium text-[24px] leading-[36px] text-[#000000]">Working Time</span>
                <span className="font-normal text-[16px] leading-[19.36px] text-[#000000]">Monday-Friday: 9:00 -<span className="block">22:00
                </span>Saturday-Sunday: 9:00 - 21:00</span>
                </div>
              </div>
              </div>
            </div>
            {/* CONTACT */}
            <div className="flex lg:w-[635px] lg:h-[923px] sm:h-[820px] h-[700px] lg:pt-28 sm:pt-20 px-5">
              <div className="flex flex-col mx-auto lg:w-[531px] sm:w-[370px] md:w-[385px] w-full lg:h-[741px] h-[650px] justify-between">
                <div className="lg:h-[121px] h-[90px] flex flex-col justify-between">
                <label htmlFor="Your name" className="font-medium text-[16px] leading-[24px] text-[#000000]">Your name</label>
              <input type="text" placeholder="Abc" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F] lg:h-[75px] h-[50px] border-[1px] border-[#9F9F9F] rounded-[10px] pl-5" />
                </div>
                <div className="lg:h-[121px] h-[90px] flex flex-col justify-between">
                <label htmlFor="Email address" className="font-medium text-[16px] leading-[24px] text-[#000000]">Email address</label>
              <input type="text" placeholder="Abc@def.com" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F] lg:h-[75px] h-[50px] border-[1px] border-[#9F9F9F] rounded-[10px] pl-5" />
                </div>
                <div className="lg:h-[121px] h-[90px] flex flex-col justify-between">
                <label htmlFor="Subject" className="font-medium text-[16px] leading-[24px] text-[#000000]">Subject</label>
              <input type="text" placeholder="This is an optional" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F] lg:h-[75px] h-[50px] border-[1px] border-[#9F9F9F] rounded-[10px] pl-5" />
                </div>
                <div className="lg:h-[135px] h-[130px] flex flex-col justify-between">
                <label htmlFor="Message" className="font-medium text-[16px] leading-[24px] text-[#000000]">Message</label>
              <textarea rows={3} placeholder="Hi! i’d like to ask about" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F] lg:h-[90px] h-[90px] border-[1px] border-[#9F9F9F] rounded-[10px] pl-5 pt-5 lg:pt-6 " />
                </div>
                <button className="font-medium text-[16px] leading-[24px] text-[#FFFFFF] bg-[#029FAE] lg:w-[237px] h-[55px] rounded-[5px] border-[1px] border-[#B88E2F] lg:ml-3">Submit</button>
              </div>
            </div>
          </div>
        {/* LABELS */}
        <div className="flex justify-center bg-[#F4F4F4] h-[270px] items-center">
          <div className="flex lg:flex-row flex-col sm:flex-row justify-between lg:w-[1100px] md:w-[800px] gap-3 sm:gap-0">
            <div className="flex lg:h-[70px] h-[50px] sm:h-[70px] w-fit gap-1">
              <span className="flex justify-center items-center">
                <HiOutlineTrophy className="lg:h-[60px] h-[50px] sm:h-[60px] w-[60px]" />
              </span>
              <div className="flex flex-col justify-between">
                <h3 className="font-semibold lg:text-[25px] text-[18px] lg:leading-[37.5px] text-[#242424]">High Quality</h3>
                <p className="font-medium lg:text-[20px] text-[15px] lg:leading-[30px] text-[#898989]">crafted from top materials</p>
              </div>
            </div>
            <div className="flex lg:h-[70px] h-[50px] sm:h-[70px] w-fit gap-1">
              <span className="flex justify-center items-center">
                <AiFillCheckCircle className="lg:h-[60px] h-[50px] w-[60px] sm:h-[60px]" />
              </span>
              <div className="flex flex-col justify-between">
                <h3 className="font-semibold lg:text-[25px] text-[18px] lg:leading-[37.5px] text-[#242424] text-nowrap">Warranty Protection</h3>
                <p className="font-medium lg:text-[20px] text-[15px] lg:leading-[30px] text-[#898989]">Over 2 years</p>
              </div>
            </div>
            <div className="flex lg:h-[70px] h-[50px] sm:h-[70px] w-fit gap-1">
              <span className="flex justify-center items-center">
                <MdOutlineSupportAgent  className="lg:h-[60px] h-[50px] w-[60px] sm:h-[60px]" />
              </span>
              <div className="flex flex-col justify-between">
                <h3 className="font-semibold lg:text-[25px] text-[18px] lg:leading-[37.5px] text-[#242424] text-nowrap">24 / 7 Support</h3>
                <p className="font-medium lg:text-[20px] text-[15px] lg:leading-[30px] text-[#898989]">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
