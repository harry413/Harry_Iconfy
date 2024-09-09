"use client"
import React from "react"
import { Boxes } from "./ui/background-boxes";
import {cn} from '@/app/utils/cn'
import Image from 'next/image'
import Link from "next/link"

export default function BackgroundBoxesDemo() {
    return (
      <div className="h-fit md:h-[50rem] relative w-full overflow-hidden bg-[#1D232A] flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <Image src='/assets/exp1.svg' alt='logo' width={100} height={100} className='relative' />
        <h1 className={cn("md:text-6xl font-serif text-center font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  relative z-20")}>
          Loved by thousands of people
        </h1>
        
        <p className="text-center mt-2 max-w-lg mx-auto my-2 text-neutral-300 relative z-20">
          Download Free Icons and Stickers for your projects. Images made by and for designers in PNG, SVG, EPS, PSD and CSS formats.
        </p>
        <div className='px-4 flex flex-col md:flex-row items-center justify-center gap-8 pt-8'>
          <div className="relative drop-shadow-xl w-48 h-48 overflow-hidden rounded-xl bg-[#3d3c3d] backdrop-blur-md">
            <div className="absolute flex flex-col justify-end p-2 w-full text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] ">
              <p>Icons</p>
              <Link href='/docs' className='relative  text-white px-4 py-2 text-sm text-center bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-md'>Get start</Link>
            </div>
            <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
        </div>    
          <div className="relative drop-shadow-xl w-48  h-48 overflow-hidden rounded-xl bg-[#3d3c3d] backdrop-blur-md">
            <div className="absolute flex p-2 justify-end flex-col w-full text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] ">
             <p>3D icons</p>
             <Link href='/docs' className='relative text-white px-4 py-2 text-sm text-center bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-md  '>Get start</Link>
            </div>
            <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
          </div>
          <div  className="relative drop-shadow-xl w-48 h-48 overflow-hidden rounded-xl bg-[#3d3c3d] backdrop-blur-md">
            <div className="absolute flex flex-col justify-end w-full p-2 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] ">
             <p>Illustration</p>
             <Link href='/docs' className='relative text-white px-4 py-2 text-sm text-center bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-md' >Get start</Link>
            </div>
            <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
          </div>
        </div>
      </div>
    );
  }