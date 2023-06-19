import React from 'react'

type Props = {}

export default function LandingPage({}: Props) {
  return (
    <div>
        <section className=" my-10 md:px-10 px-2 ">
          <div className=" flex flex-col md:flex-row md:items-center justify-between space-y-10 md:space-y-0 ">

            {/* Mobile App */}
            <div className=" flex justify-start  space-x-5  ">
              <h2 className=" md:text-5xl text-4xl font-semibold ">Mobile App</h2>
              <div className=" flex items-center justify-center space-x-5 ">
              <button className=" rounded-md p-1 hidden md:block ">
                <img
                className="w-[72px] h-[30px]"
                alt=""
                src="/penLink.svg"
                />
              </button>
              </div>
            </div>

            {/* Invite Section */}
            <div className="flex items-center justify-between hidden lg:block ">
              <button className=" flex items-center justify-center space-x-2 ">
                <img
                  className="w-[18px] h-[18px]"
                  alt=""
                  src="/inviteaddsquare.svg"
                />
                <span className=" font-medium text-[#5030E5] ">Invite</span>
              </button>
              <div className="flex -space-x-2 overflow-hidden ">
                <img className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white" src="/a.png" alt="{user.handle}" />
                <img className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white" src="/b.png" alt="{user.handle}" />
                <img className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white" src="/c.png" alt="{user.handle}" />
                <img className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white" src="/d.png" alt="{user.handle}" />
                <div className=" flex md:h-10 md:w-10 h-8 w-8 items-center justify-center rounded-full bg-red-200 ring-2 ring-white ">
                  <span className=" font-medium text-[#D25B68] ">+2</span>
                </div>
              </div>
            </div>
          
          </div>

          {/* Filter , Today Section */}
          <div className=" my-10 flex items-center justify-between font-medium text-grayColor "><div className="flex items-center justify-center gap-5  ">
            {/* Filter */}
            <button className="flex items-center justify-center space-x-2 rounded-md border border-grayColor px-3 md:py-2 py-1 ">
              <img
                className="w-4 h-4"
                alt=""
                src="/filter.svg"
              />
              <span>Filter</span>
              <img
                className="w-4 h-4"
                alt=""
                src="arrowdown1.svg"
              />
            </button>

            {/* Today */}
            <button className=" flex items-center justify-center space-x-2 rounded-md border border-grayColor px-3 md:py-2 py-1 ">
              <img
                className="h-[16px] w-[16px]"
                alt=""
                src="/calendar.svg"
              />
              <span>Today</span>
              <img
                className="w-4 h-4"
                alt=""
                src="/arrowdown2.svg"
              />
            </button>
          </div>

          <div className=" md:flex items-center justify-center space-x-5 hidden ">
            <button className="flex items-center justify-center space-x-2 rounded-md border border-grayColor px-3 py-2 ">
              <img
                className="w-4 h-4"
                alt=""
                src="/share.svg"
              />
              <span>Share</span>
            </button>
            <hr className=" h-7 border-[1px] border-grayColor " />
            <div className="  justify-center rounded-md hidden lg:block ">
            <button className="">
              <img
                className="flex w-[83px] h-10"
                alt=""
                src="/homeShare.svg"
              />
            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}