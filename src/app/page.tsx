"use client";
import React from "react";


//components
import BackgroundBeamsDemo from './components/BackgrounBeam';
import BackgroundBoxesDemo from './components/BackgroundBox';
import GlobeDemo from './components/Globe'
import LampDemo from "./components/Lamps";
import Cards from "./components/Cards"
import Companies from "./components/Companies"
import Team from "./components/Team"


export default function home(){
  return(
    <>
      <BackgroundBeamsDemo/>
        <BackgroundBoxesDemo/>
        <LampDemo/>
        <GlobeDemo/>
        <Cards/>
        <Companies/>
        <Team/>
    </>
  )
}
