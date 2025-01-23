import React from 'react'
import Image from 'next/image';
import item1 from '@/public/images/item1.png'
import { FaRegHeart } from "react-icons/fa";
import cart from "@/public/images/cart.png"
import { RiDeleteBinLine } from "react-icons/ri";






import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});


const Cart = () => {
  return (
    <main className="w-full lg:py-24 py-10 bg-[#FFFFFF]">
    <div
      className={`${inter.className} max-w-[1200px] h-fit mx-auto flex lg:flex-row flex-col justify-between lg:gap-8 xl:gap-0 gap-8 px-2 xl:px-0`}
    >
          {/* LEFT */}
        <div className='flex flex-col h-fit'>
          <h1 className='font-semibold text-[22px] leading-[33px] text-[#111111]'>Bag</h1>
          <div className='flex items-center lg:h-[211px] sm:h-[211px] h-[170px] w-full border-b-[1px] border-[#D9D9D9]'>
            <div className='flex lg:h-[163px] sm:h-[163px] h-[130px] w-full lg:gap-[30px] sm:gap-[30px] gap-4'>
              <div className='w-[160px] lg:w-[150px] sm:w-[150px]'>
              <Image
              className="lg:w-[150px] lg:h-[150px] w-[160px] h-[120px] sm:w-[150px] sm:h-[150px]"
              src={item1}
              alt="product"
              />
              </div>
              <div className='flex flex-col justify-between xl:w-[600px] lg:w-[554px] sm:w-3/4 h-full w-full'>
              <div className='flex justify-between xl:w-[585px] lg:h-[105px] sm:h-[105px] h-[90px] lg:w-[545px] lg:gap-0 sm:gap-0 gap-7'>
                  <div className='flex flex-col sm:justify-between h-full lg:w-[235.31px] sm:w-[235.31px] w-[100px]'>
                    <p className='font-normal lg:text-[16px] sm:text-[16px] text-[14px] lg:leading-[20.8px] sm:leading-[20.8px] text-[#272343]'>Library Stool Chair</p>
                    <span className='flex flex-col'>
                      <p className='font-normal lg:text-[15px] sm:text-[15px] text-[11px] lg:leading-[28px] sm:leading-[28px] text-[#757575]'>Ashen Slate/Cobalt Bliss</p>
                      <span className='flex'>
                      <p className='font-normal lg:text-[15px] sm:text-[15px] text-[9px] lg:leading-[28px] sm:leading-[28px] text-[#757575] mr-[10px]'>
                      Quantity
                      </p>
                      <p className='font-normal lg:text-[15px] sm:text-[15px] text-[9px] lg:leading-[28px] sm:leading-[28px] text-[#757575]'>
                      1
                      </p>
                      </span>
                    </span>
                  </div>
                  <div className='h-[28px] font-normal lg:text-[15px] sm:text-[15px] text-[8px] lg:leading-[28px] sm:leading-[28px] text-[#111111]'>MRP: $99</div>
              </div>
              <div className='flex gap-4 items-center w-fit lg:h-[34px] sm:h-[34px]'>
                  <FaRegHeart className='lg:h-[24px] lg:w-[24px] sm:h-[24px] sm:w-[24px] h-[15px] w-[15px]' />
                  <RiDeleteBinLine className='lg:h-[24px] lg:w-[24px] sm:h-[24px] sm:w-[24px] h-[15px] w-[15px]' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center lg:h-[211px] sm:h-[211px] h-[170px] w-full border-b-[1px] border-[#D9D9D9]'>
            <div className='flex lg:h-[163px] sm:h-[163px] h-[130px] w-full lg:gap-[30px] sm:gap-[30px] gap-4'>
              <div className='w-[160px] lg:w-[150px] sm:w-[150px]'>
              <Image
              className="lg:w-[150px] lg:h-[150px] w-[160px] h-[120px] sm:w-[150px] sm:h-[150px]"
              src={cart}
              alt="product"
              />
              </div>
              <div className='flex flex-col justify-between xl:w-[600px] lg:w-[554px] sm:w-3/4 h-full w-full'>
              <div className='flex justify-between xl:w-[585px] lg:h-[105px] sm:h-[105px] h-[90px] lg:w-[545px] lg:gap-0 sm:gap-0 gap-7'>
                  <div className='flex flex-col sm:justify-between h-full lg:w-[235.31px] sm:w-[235.31px] w-[100px]'>
                    <p className='font-normal lg:text-[16px] sm:text-[16px] text-[14px] lg:leading-[20.8px] sm:leading-[20.8px] text-[#272343]'>Library Stool Chair</p>
                    <span className='flex flex-col'>
                      <p className='font-normal lg:text-[15px] sm:text-[15px] text-[11px] lg:leading-[28px] sm:leading-[28px] text-[#757575]'>Ashen Slate/Cobalt Bliss</p>
                      <span className='flex'>
                      <p className='font-normal lg:text-[15px] sm:text-[15px] text-[9px] lg:leading-[28px] sm:leading-[28px] text-[#757575] mr-[10px]'>
                      Quantity
                      </p>
                      <p className='font-normal lg:text-[15px] sm:text-[15px] text-[9px] lg:leading-[28px] sm:leading-[28px] text-[#757575]'>
                      1
                      </p>
                      </span>
                    </span>
                  </div>
                  <div className='h-[28px] font-normal lg:text-[15px] sm:text-[15px] text-[8px] lg:leading-[28px] sm:leading-[28px] text-[#111111]'>MRP: $99</div>
              </div>
              <div className='flex gap-4 items-center w-fit lg:h-[34px] sm:h-[34px]'>
                  <FaRegHeart className='lg:h-[24px] lg:w-[24px] sm:h-[24px] sm:w-[24px] h-[15px] w-[15px]' />
                  <RiDeleteBinLine className='lg:h-[24px] lg:w-[24px] sm:h-[24px] sm:w-[24px] h-[15px] w-[15px]' />
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* RIGHT */}
          <div className='xl:h-[295px] lg:h-[340px] xl:w-[350.67px] lg:w-[300px] sm:w-[300px] sm:place-self-end lg:place-self-start flex flex-col gap-3 px-2'>
            <h1 className='font-semibold text-[21px] leading-[33px] text-[#111111]'>Summary</h1>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col xl:gap-2'>
              <span className='flex justify-between'>
              <p className='font-normal text-[15px] leading-[28px] text-[#111111]'>Subtotal</p>
              <p className='font-medium text-[14px] leading-[24px] text-[#111111]'>$198.00</p>
            </span>
            <span className='flex justify-between'>
              <p className='font-normal text-[15px] leading-[28px] text-[#111111]'>Estimated Delivery & Handling</p>
              <p className='font-normal text-[15px] leading-[28px] text-[#111111]'>Free</p>
            </span>
              </div>
            <span className='flex justify-between items-center h-[62px] border-b-[1px] border-t-[1px] border-[#E5E5E5]'>
              <p className='font-normal text-[14px] leading-[28px] text-[#111111]'>Total</p>
              <p className='font-medium text-[14px] leading-[24px] text-[#111111]'>$198.00</p>
            </span>
            <button className='font-medium text-[15px] leading-[24px] text-[#FFFFFF] text-center bg-[#029FAE] rounded-[30px] h-[55px] w-full'>Member Checkout</button>
            </div>
          </div>
        </div>
        </main>

  )
}

export default Cart