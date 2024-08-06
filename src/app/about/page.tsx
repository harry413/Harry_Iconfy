"use client"
import React from "react";
import Image from "next/image"
import { FlipWords } from "../components/ui/flip"
import { IconHome } from "@tabler/icons-react"

export default function About() {
  const words =["Inspiring"," Creative", "Fun", "Helpful"];
  return (
    <div className="h-fit bg-[#1D232A] dark:bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex md:flex-col px-10 md:px-22">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-start bg-black dark:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className=' relative md:mx-4 flex flex-col items-center  justify-start gap-2 mt-18 md:pt-8 '>
            <div className="max-w-2xl  p-2 pr-20 flex items-center justify-center pb-10 ">
                <Image src='/assets/exp4.svg' alt='logo' width={100} height={100} className='relative md:mr-2 flex items-center justify-center ' />
                  <h1 className="relative z-10 text-4xl md:text-4xl font-serif bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold">
                    Harry_Iconfy
                  </h1>
            </div>
          <a href='/' className='flex items-start justify-center   gap-2 mb-2 '>
               <IconHome className="h-5 w-5 text-white dark:text-black" />
               <span className='text-gray-300 hover:underline'>Back to home</span>
            </a>
          <div className='flex items-start'>
          <h1 className='flex items-start hover:text-gray-600 text-2xl font-serif '>About Us</h1>
          </div>
        <div className='  md:mx-4 flex flex-col md:flex-row items-center'>
            
            <h3 className=' font-serif  font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700  md:text-6xl'>Express the power of your ideas with Harry_Iconfy</h3>
            <div className=' mx-4 flex flex-col gap-2 md:gap-4 '>
                
                <p className=' z-20 text-slate-300'>Harry_Iconfy is the Internet's icon library and toolkit, used by millions of designers, developers, and content creators.</p>
                <p className=' z-20 text-pretty'>Founded in 2024, we’re the one-stop platform for all the cool solutions, content, and inspiration you need to express the power of your ideas.</p>
            </div>
         </div>
        <div className=' flex flex-col items-start mt-4 mx-4 gap-2'>
            <div className=' flex flex-col md:flex-row items-center '>
              <div className="my-8 md:my-40 flex mx-20  md:mr-40">
                <div className=" mx-auto h-10 w-10 animate-bounce">
                  <div className="mx-auto h-16 w-16 animate-pulse rounded-full bg-[#dd0939]"></div>
                  <span className="absolute flex h-5 w-5 animate-spin">
                    <span className="h-4 w-4 rounded-full bg-[#dd0939]"> </span>
                  </span>
                </div>
              </div>
              <div className='flex flex-col items-start gap-2 mt-4 '>
                <h5 className='text-2xl font-serif text-white'>WHO WE ARE</h5>
                <h2 className='text-4xl text-white font-serif'>We're<FlipWords words={words} /></h2>
                <p className=''>We gather talent and inspiration from creatives all around the world –all in one place– and looove it when we help you make your great ideas happen.</p> 
                <p>We believe in the power of good design and community. Our spirit is restless, and our inner joyful rebel says: Don't follow all the conventions; rewrite them</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-start '>
              <div className='flex flex-col items-start gap-2 mt-4 '>
                  <h5 className='text-2xl font-serif text-white'>WHAT WE DO</h5>
                  <h2 className='text-4xl text-white font-serif'>We help anyone create great designs, faster</h2>
                  <p className=''>We exist to help others turn their ideas into great designs faster, easier, and better. We put innovative technology –like AI– and best-quality content within reach 
                  of everyone, including designers, marketers, small business owners, educators, and content creators.</p> 
              </div>
              <div className=''>
                <div className="mockup-phone border-primary ml-10">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="artboard artboard-demo phone-1">
                      <img src='/assets/front.png' className='items-start justify-center' alt='front'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>     
     </div>
   </div>
  );
}
