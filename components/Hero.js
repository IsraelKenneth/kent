"use client"

import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import Section from './extra/Section';
import { curve } from './asset';
import {  BackgroundCircles, BottomLine } from './extra/Hero';
import Image from 'next/image';
import Barner from './extra/Barner';
import "../app/globals.css"
import { HeroScrollDemo } from './CurrentWorks';
import Link from 'next/link';
import { Gradient2, Gradient3 } from './BentoPre';



const Hero = () => {

  const smoothScroll = () => {
    const targetElement = document.getElementById('heroScrollDemo');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

//   const canvasRef = useRef(null);

// useEffect(() => {
//   if (canvasRef.current) {
//     const app = new Application(canvasRef.current);
//     app.load('https://prod.spline.design/bgVGHVHADC3NU1M4/scene.splinecode');
//   }
// }, []);

  const parallaxRef = useRef(null);

  return (
    <Section
      className="relative padding-x pt-[12rem] -mt-[5.25rem] border-b-2 border-stroke-1"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
    
      <div className=" relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1.875rem] md:mb-[1.8rem] lg:mb-[0.25rem]">
          <h1  className="h1 mb-6">
         Discover a World Where Code Meets  {` `}
            <span className="inline-block relative">
              CREATIVITY{" "}
              <Image
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-4 lg:mb-8">
          Elevate your digital solutions by exploring a blend of cutting-edge designs.
          </p>
        <button onClick={smoothScroll} className='cursor-none dark:bg-n-2 bg-n-8 hover:dark:bg-n-5 hover:bg-n-4 dark:text-n-8 text-n-2 w-[10rem] font-bold py-2 px-4 rounded-lg transition-all duration-300 inline-block'>
          <Link href='' className="">
                Get Started
        </Link>
        </button>
        </div>
        <div id="heroScrollDemo" className='z-10'>
        <HeroScrollDemo />

        </div>
        
        <Gradient2 />
        <Gradient3 />
        </div>
                   
      <BottomLine />
      <Barner />
      
    </Section>
  );
}

export default Hero