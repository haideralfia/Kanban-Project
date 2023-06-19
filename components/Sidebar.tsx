import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div className="md:flex w-1/5 sm:border-r hidden">
      <section className="sticky top-0 h-screen overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none] ">
        <div className="sticky top-0 border-b bg-white">
          <div className="flex justify-between py-5 px-[37px]">
            <div className="flex items-center justify-between space-x-4">

                {/* Logo */}
              <img
                className=""
                alt=""
                src="/logo.svg"
              />
                {/* Title */}
              <div className="text-[#0D062D] hidden md:block not-italic font-semibold xl:text-xl lg:text-base">
                Project M.
              </div>

                {/* button */}
              <button className='relative hidden md:block flex items-center justify-center'>
                <span className='top-[6px] -left-2'>
                  <img
                    className="w-[26px] h-5"
                    alt=""
                    src="/arrow.svg"
                  />
                </span>
              </button>

            </div>
          </div>
        </div>

        {/* Sidebar content */}
        <div className="my-5 px-5 ">
          <div className="flex items-center space-x-4 py-3 px-5 text-[#787486] cursor-pointer">
            <img
            className="w-6 h-6"
            alt=""
            src="/home.svg"
            />
            <div className="hidden sm:block font-medium ">
              Home
            </div>
          </div>

          <div className="flex items-center space-x-4 py-3 px-5 text-[#787486] cursor-pointer">
            <img
              className="w-[20px] h-[20.06px]"
              alt=""
              src="/message.svg"
            />
            <div className="hidden sm:block text-[16px] font-medium ">
              Messages
            </div>
          </div>

          <div className="flex items-center space-x-4 py-3 px-5 text-[#787486] cursor-pointer">
            <img
              className="w-[20px] h-[20px]"
              alt=""
              src="/task.svg"
            />
            <div className="hidden sm:block text-[16px] font-medium">
              Tasks
            </div>
          </div>

          <div className="flex items-center space-x-4 py-3 px-5 text-[#787486] cursor-pointer">
            <img
              className="w-6 h-6"
              alt=""
              src="/members.svg"
            />
            <div className="hidden sm:block text-[16px] font-medium">
              Members
            </div>
          </div>

          <div className="flex items-center space-x-4 py-3 px-5 text-[#787486] cursor-pointer">
            <img
              className="w-[24px] h-[24px]"
              alt=""
              src="/setting.svg"
            />
            <div className="hidden sm:block text-[16px] font-medium">
              Settings
            </div>
          </div>
        </div>
      
        {/* Sidebar-line */}
        <hr className="mx-5 bg-[#DBDBDB]"/>

        {/*My Project  */}
        <div className="my-5 px-5 hidden md:block">
          <div className="flex items-center justify-between text-xs text-[#787486] font-bold cursor-pointer">
            <p className="text-[12px] uppercase">
                my projects
            </p>
            <img
              className="w-[13px] h-[13px]"
              alt=""
              src="/addsquare.svg"
            />
          </div>

          <div className="my-5 flex items-center space-x-4 rounded-md py-2 font-medium bg-[#F1EEFD] text-[#0D062D] first:bg-[#F1EEFD] first:font-semibold first:text-[#0D062D] overflow-visible px-5 active cursor-pointer">
            <span className="rounded-full bg-[#7AC555] w-2 h-2" />
            <div className="flex items-center justify-center space-x-11">
              <div className=" font-semibold">
              Mobile App
            </div>
            <div className="stracking-[-0.07em] font-extrabold cursor-pointer">
              ...
            </div>
            </div>
          </div>

          <div className="my-5 flex items-center space-x-4 rounded-md py-2 font-medium text-[#0D062D] first:bg-[#F1EEFD] first:font-semibold first:text-[#0D062D] overflow-visible px-5 active cursor-pointer">
            <span className="rounded-full bg-[#FFA500] w-2 h-2" />
            <div className="font-medium">
              Website Redesign
            </div>
          </div>

          <div className="my-5 flex items-center space-x-4 rounded-md py-2 font-medium text-[#0D062D] first:bg-[#F1EEFD] first:font-semibold first:text-[#0D062D] overflow-visible px-5 active cursor-pointer">
            <span className="rounded-full bg-[#E4CCFD] w-2 h-2" />
            <div className="font-medium">
              Design System
            </div>
          </div>

          <div className="my-5 flex items-center space-x-4 rounded-md py-2 font-medium text-[#0D062D] first:bg-[#F1EEFD] first:font-semibold first:text-[#0D062D] overflow-visible px-5 active cursor-pointer">
            <span className="rounded-full bg-[#76A5EA] w-2 h-2" />
            <div className="font-medium" >
              Wireframes
            </div>
          </div>
        </div>


          


        <div className="relative mt-20 rounded-2xl bg-[#F5F5F5] mx-5 ">
          <div className=" absolute inset-x-0 -top-12 flex items-center justify-center ">
            <div className=" flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 backdrop-blur-xl ">
              <div className=" bg-[#FCD64AB2] rounded-full w-10 h-10 ">
                <div className=" absolute flex justify-center items-center backdrop-blur-md w-16 h-16 top-0 right-0 left-0 rounded-full ">
                  <img
                    className="w-[34px] h-[34px] opacity-[0.4]"
                    alt=""
                    src="/lamp.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center space-y-5 px-10 lg:px-5 py-5 mb-20 bg-[#F5F5F5] rounded-2xl ">
            <p className=" mt-3 font-medium text-black ">Thoughts Time</p>
            <p className=" text-center text-xs text-[#787486] ">We don't have any notice for you, till then you can share your thoughts with your peers.</p>
            <button className=" rounded bg-white px-6 lg:px-3 py-3 text-center text-sm font-medium text-black  ">Write a message</button>
          </div>
        
        </div>

      </section>
    </div>
  )
}