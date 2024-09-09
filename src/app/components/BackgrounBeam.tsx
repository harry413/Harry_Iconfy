"use client";
import React from "react";
import Image from 'next/image'
import { BackgroundBeams } from "./ui/background-beams";

import { TextGenerateEffect} from "./ui/text-generate-effect";

import { PlaceholdersAndVanishInput } from "./ui/placeholder";




const words ="Welcome to Harry_Iconfy, the best animation on the web.We provide reliable, scalable, and customizable web solutions for your business. Whether you're sending order confirmations,Harry_Iconfy has got you covered.";

export default function BackgroundBeamsDemo() {
const placeholders = [
"Search the icons",
"Search skill icons?",
"Search 3d icons?",
"Search diffrent type of icons ",
];
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    };
    return (
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 ">
        <div className="max-w-2xl mx-auto p-4 flex flex-col md:flex-row items-center justify-center ">
          <Image src='/assets/exp4.svg' alt='logo' width={100} height={100} className='relative md:mr-2 flex items-center justify-center ' />
          <h1 className="relative z-10 text-4xl md:text-7xl font-serif bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold">
            Harry_Iconfy
          </h1>
        </div>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-6">
          <TextGenerateEffect words={words} />
        </p>
        <div className='flex flex-col mt-4 items-center justify-center'>
          <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
        </div>
      </div>
      <BackgroundBeams />
    </div>
    );
    }