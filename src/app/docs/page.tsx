"use client"
import React from "react"

import Sidebar from "../components/Sidebar"

export default function docs(){
     return(
          <div className='h-screen flex bg-gray-800'>
             <div className=' bg-gray-800 flex flex-col'>
               <Sidebar/>
             </div>
             <div className='flex flex-col p-2 md:p-10 md:m-2'>
               <h1 className='text-xl md:text-2xl font-serif text-slate-200'>Get Start</h1>
               <p className='text-sm'>Icons you are searching for the here </p>
               <div className=''>
                 <p className='text-sm'>
                    There is lots of skills icons are here that you can choose according to your skills 
                    to represent the skills icons 
                 </p>
               </div>
             </div> 
          </div>
     )
}