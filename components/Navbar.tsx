import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className="flex flex-col sticky md:px-10 px-2 bg-white md:flex-row md:items-center justify-between border-b border-b-[#DBDBDB] py-5 ">

      {/* Searchbar */}
      <form action="" className="w-1/3 flex items-center text-[#787486] hidden md:block">
        <div  className="relative flex items-center">
           <img
            className="absolute pointer-events-none ml-4"
            alt=""
            src="/searchicon.svg"
          />
        <input 
          type="text" 
          className="w-full rounded-md outline-none ring-0 focus:border-none focus:ring-0 border-none py-3 pl-14 pr-3 bg-[#F5F5F5] font-inter text-sm placeholder:text-[#787486]"
          placeholder="Search for anything..."
        />
        </div>  
      </form>
    
      {/* Navbar Icons */}
      <div className="flex hidden md:block md:items-center justify-center">
        <img
          className="flex items-center justify-center"
          alt=""
          src="/navbaricons.svg"
        />
      </div>
      

      {/* User Info */}
      <div className=" flex items-center justify-center space-x-5 text-[#787486] ">
        <div className="">
          <p className=" text-black ">Anima Agarwal</p>
          <p className=" text-right text-sm text-grayColor ">U.P, India</p>
        </div>
        <div className=" flex items-center justify-center space-x-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover object-top"
            alt=""
            src="/userinfoicon.png"
          />
          <img className=" " src="/arrowdown.svg" alt="" />
        </div>
      </div>

    </div>
  )
}