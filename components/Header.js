"use client"

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import "../trial/trial.css"
import { SkillsCard1 } from "./SkillsCard";

const Header = () => {

  const firstText = useRef(null);
  const secondText = useRef(null)
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() =>{

    requestAnimationFrame(animation)
  }, [])

  const animation = () =>{
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }

    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent:xPercent})
    xPercent += 0.00001  * direction;
    requestAnimationFrame(animation)
  }
  return (
    <section className="relative flex overflow-hidden h-[14rem]">

    <div className="absolute">
        <div ref={slider} className=" flex flex-row">
          <div ref={firstText}>
          <SkillsCard1 />
          </div>
          <div ref={secondText}>
          <SkillsCard1 />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Header