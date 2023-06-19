import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";

const tabindex =0;

type Props = {}

export default function DND({}: Props) {
  return (
    <div>
      <section className="grid lg:grid-cols-3 gap-5 mt-10 md:px-10 px-2">
        <div className="rounded-2xl bg-[#F5F5F5] p-5">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full"></span>
            <p className="font-medium capitalize text-blackColor">
              To do
              </p>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium">3</span>
            </div>
            <hr className="mt-5 border-2 border-[##5030E5]"/>
            <section 
            data-rbd-droppable-id="0" 
            data-rbd-droppable-context-id="0"
            >
              <article 
              data-rbd-draggable-context-id="0"
              data-rbd-draggable-id="31"
      
              role="button" 
              aria-describedby="rbd-hidden-text-0-hidden-text-0" data-rbd-drag-handle-draggable-id="31" data-rbd-drag-handle-context-id="0" 
              draggable="false" 
              className="my-5 rounded-2xl bg-white md:p-8 p-5   ">
                <div className="flex items-center justify-between ">
                  <span className="rounded px-2 py-1 text-xs font-medium capitalize bg-[#DFA87433] text-[#D58D49] false  false">
                    low
                    </span>
                  <button className="text-2xl">
                    ...
                    </button>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-blackColor">
                    Brainstorming
                    </h3>
                  <p className="mt-2 text-grayColor">
                    Brainstorming brings team members' diverse experience into play.
                    </p>
                    <div className="mt-10 flex items-center justify-between">
                      <div className="flex -space-x-2 overflow-hidden">
                        <img 
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
                        src="/a.png" 
                        alt="profile" />
                        <img 
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
                        src="/d.png" 
                        alt="profile" />
                        <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                        src="/c.png" 
                        alt="profile" />
                          </div>
                          <div className="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                            <div className="flex items-center justify-center space-x-2">
                              <img
          src="/comment.svg"
          alt=""
           />
                              <span className="">12 comments</span>
                              </div>
                              <div className="flex items-center justify-center space-x-2">
                                <img
          src='/file.svg' 
          alt=""
          />
                                <span className="">0 files</span>
                                </div>
                                </div>
                                </div>
                                </article>
                                
                                <article 
                                data-rbd-draggable-context-id="0" 
                                data-rbd-draggable-id="32" 
                         
                                role="button" 
                                aria-describedby="rbd-hidden-text-0-hidden-text-0" 
                                data-rbd-drag-handle-draggable-id="32" 
                                data-rbd-drag-handle-context-id="0" 
                                draggable="false" 
                                className="my-5 rounded-2xl bg-white md:p-8 p-5   ">
                                  <div className="flex items-center justify-between ">
                                    <span className="rounded px-2 py-1 text-xs font-medium capitalize false bg-[#D8727D1A] text-[#D8727D]   false">
                                      high
                                      </span>
                                      <button className="text-2xl">...</button>
                                      </div>
                                      <h3 className="mt-2 text-lg font-semibold text-blackColor">
                                        Research
                                        </h3>
                                        <p className="mt-2 text-grayColor">
                                          User research helps you to create an optimal product for users. </p>
                                          <div className="mt-10 flex items-center justify-between">
                                            <div className="flex -space-x-2 overflow-hidden">
                                              <img 
                                              className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
                                              src="/b.png" 
                                              alt="profile" />
                                                <img 
                                                className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
                                                src="/x.png" 
                                                alt="profile" />
                                                  </div>
                                                  <div className="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                                                    <div className="flex items-center justify-center space-x-2">
                                                      <img
          src="/comment.svg"
          alt=""
           />
                                                      <span className="">10 comments</span>
                                                      </div>
                                                      <div className="flex items-center justify-center space-x-2">
                                                        <img
          src='/file.svg' 
          alt=""
          />
                                                        <span className="">3 files</span>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </article>
                                                        
                                                        <article 
                                                        data-rbd-draggable-context-id="0" 
                                                        data-rbd-draggable-id="33" 
                                                 
                                                        role="button" 
                                                        aria-describedby="rbd-hidden-text-0-hidden-text-0" 
                                                        data-rbd-drag-handle-draggable-id="33" 
                                                        data-rbd-drag-handle-context-id="0" 
                                                        draggable="false" 
                                                        className="my-5 rounded-2xl bg-white md:p-8 p-5   ">
                                                          <div className="flex items-center justify-between ">
                                                            <span className="rounded px-2 py-1 text-xs font-medium capitalize false bg-[#D8727D1A] text-[#D8727D]   false">
                                                              high
                                                              </span>
                                                              <button className="text-2xl">...</button>
                                                              </div>
                                                              <h3 className="mt-2 text-lg font-semibold text-blackColor">Wireframes</h3>
                                                              <p className="mt-2 text-grayColor">
                                                                Low fidelity wireframes include the most basic content and visuals.. 
                                                                </p>
                                                                <div className="mt-10 flex items-center justify-between">
                                                                  <div className="flex -space-x-2 overflow-hidden">
                                                                    <img 
                                                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
                                                                    src="/a.png" 
                                                                    alt="profile"
                                                                    />
                                                                    <img 
                                                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
                                                                    src="/d.png" 
                                                                    alt="profile"
                                                                    />
                                                                      <img 
                                                                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                                                      src="/c.png"
                                                                      alt="profile"
                                                                      />
                                                                        </div>
                                                                        <div className="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                                                                          <div className="flex items-center justify-center space-x-2">
                                                                            <img
          src="/comment.svg"
          alt=""
           />
                                                                            <span className="">12 comments</span>
                                                                            </div>
                                                                            <div className="flex items-center justify-center space-x-2">
                                                                              <img
          src='/file.svg' 
          alt=""
          />
                                                                              <span className="">13 files</span>
                                                                              </div>
                                                                              </div>
                                                                              </div>
                                                                              </article>
                                                                              </section>
                                                                              </div>









        <div className="rounded-2xl bg-[#F5F5F5] p-5">
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full"></span>
        <p className="font-medium capitalize text-blackColor">on progress</p>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium">2</span>
        </div>
        <hr className="mt-5 border-2 border-[##FFA500]"/>
          <section data-rbd-droppable-id="1" data-rbd-droppable-context-id="0">
          <article 
        data-rbd-draggable-context-id="0" 
        data-rbd-draggable-id="45" 
 
        role="button" 
        aria-describedby="rbd-hidden-text-0-hidden-text-0" 
        data-rbd-drag-handle-draggable-id="45" 
        data-rbd-drag-handle-context-id="0" 
        draggable="false" 
        className="my-5 rounded-2xl bg-white md:p-8 p-5   "
        >
          <div className="flex items-center justify-between ">
          <span className="rounded px-2 py-1 text-xs font-medium capitalize bg-[#DFA87433] text-[#D58D49] false  false">low</span>
        <button className="text-2xl">...</button>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-blackColor">
          Onboarding Illustrations 
        </h3>
        <div className="mt-5">
          <img 
          src="/onboard.png" 
          alt=""
           className="h-40 w-full object-cover false"
           />

          </div>
          <div className="mt-10 flex items-center justify-between">
          <div className="flex -space-x-2 overflow-hidden">
          <img 
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
          src="/c.png" 
          alt="profile"
          />
          <img 
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
          src="/d.png" 
          alt="profile"
          />
          <img 
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
          src="/a.png" 
          alt="profile"
          />

        </div>
        <div className="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
          <div className="flex items-center justify-center space-x-2">
          <img
          src="/comment.svg"
          alt=""
           />
        <span className="">14 comments</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <img
          src='/file.svg' 
          alt=""
          />
        <span className="">15 files</span>
        </div>
        </div>
        </div>
        </article>
        <article 
        data-rbd-draggable-context-id="0" 
        data-rbd-draggable-id="46" 
 
        role="button" 
        aria-describedby="rbd-hidden-text-0-hidden-text-0" 
        data-rbd-drag-handle-draggable-id="46" 
        data-rbd-drag-handle-context-id="0" 
        draggable="false" 
        className="my-5 rounded-2xl bg-white md:p-8 p-5   ">
          <div className="flex items-center justify-between ">
          <span className="rounded px-2 py-1 text-xs font-medium capitalize bg-[#DFA87433] text-[#D58D49] false  false">low</span>
        <button className="text-2xl">...</button>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-blackColor">Moodboard</h3>
        <div className="flex flex-row gap-2 mt-5">
          <img 
          src="/moodboard.png" 
          alt="" 
          className="h-40 w-1/2 rounded-lgobject-cover false"
          />
          <img 
          src="/moodboard2.png" 
          alt="" 
          className="h-40 w-1/2 rounded-lgobject-cover false"
          />

        </div>
        <div className="mt-10 flex items-center justify-between">
          <div className="flex -space-x-2 overflow-hidden">
          <img 
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
          src="/c.png" 
          alt="profile"
          />

        </div>
        <div className="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
          <div className="flex items-center justify-center space-x-2">
          <img
          src="/comment.svg"
          alt=""
           />
        <span className="">9 comments</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <img
          src='/file.svg' 
          alt=""
          />
        <span className="">10 files</span>
        </div>
        </div>
        </div>
        </article>
        </section>
        </div>



<div className="rounded-2xl bg-[#F5F5F5] p-5">
  <div className="flex items-center space-x-2">
    <span className="h-2 w-2 rounded-full"></span>
    <p className="font-medium capitalize text-blackColor">done</p>
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium">2</span>
    </div>
    <hr className="mt-5 border-2 border-[##8BC48A]" />
    <section 
    data-rbd-droppable-id="2" 
    data-rbd-droppable-context-id="0">
      <article 
      data-rbd-draggable-context-id="0" 
      data-rbd-draggable-id="73"  
      role="button" 
      aria-describedby="rbd-hidden-text-0-hidden-text-0" 
      data-rbd-drag-handle-draggable-id="73" 
      data-rbd-drag-handle-context-id="0" 
      draggable="false" 
      className="my-5 rounded-2xl bg-white md:p-8 p-5   "
      >
        <div className="flex items-center justify-between ">
          <span className="rounded px-2 py-1 text-xs font-medium capitalize false false  bg-[#83C29D33] text-[#68B266]">
            completed</span>
            <button className="text-2xl">...</button>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-blackColor">Mobile App Design</h3>
            <div className="mt-5">
          <img 
          src="/mobileAppDesign.png" 
        alt="" 
        className="h-40 w-full object-cover h-64 object-top"
        />

        </div>
        <div className="mt-10 flex items-center justify-between">
          <div className="flex -space-x-2 overflow-hidden">
          <img 
        className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
        src="/x.png" 
        alt="profile"
        />
          <img 
        className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
        src="/d.png" 
        alt="profile"
        />
          </div>
          <div className="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
          <div className="flex items-center justify-center space-x-2">
          
          <img
          src="/comment.svg"
          alt=""
           />
        <span className="">12 comments</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          
          <img
          src='/file.svg' 
          alt=""
          />
        <span className="">15 files</span>
        </div>
        </div>
        </div>
        </article>
        <article 
        data-rbd-draggable-context-id="0" 
        data-rbd-draggable-id="74" 
 
        role="button" 
        aria-describedby="rbd-hidden-text-0-hidden-text-0" 
        data-rbd-drag-handle-draggable-id="74" 
        data-rbd-drag-handle-context-id="0" 
        draggable="false" 
        className="my-5 rounded-2xl bg-white md:p-8 p-5   "
        >
          <div className="flex items-center justify-between ">
          <span className="rounded px-2 py-1 text-xs font-medium capitalize false false  bg-[#83C29D33] text-[#68B266]">
            completed
            </span>
        <button className="text-2xl">...</button>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-blackColor">Design System</h3>
        <p className="mt-2 text-[#0D062D">
          It just needs to adapt the UI from what you did before 
        </p>
        <div className="mt-10 flex items-center justify-between">
          <div className="flex -space-x-2 overflow-hidden">
          <img 
        className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
        src="/a.png" 
        alt="profile"
        />
          <img 
        className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
        src="/d.png" 
        alt="profile"
        />
          <img 
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
          src="/c.png" 
          alt="profile"
          />

        </div>
        <div className="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
          <div className="flex items-center justify-center space-x-2">
          <img
          src="/comment.svg"
          alt=""
           />
          
        <span className="">12 comments</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          
          <img
          src='/file.svg' 
          alt=""
          />
        <span className="">15 files</span>
        </div>
        </div>
        </div>
        </article>
        </section>
        </div>





























      </section>
    </div>
  )
}