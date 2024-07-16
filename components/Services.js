import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import "../trial/trial.css"
import { ServicesCard } from "./SkillsCard";

import SectionHeader from "./SectionHeader"

const ServicesScroll = () => {

  const firstText = useRef(null);
  const secondText = useRef(null)
  const slider = useRef(null);

  let xPercent = 0;
  let direction = 1;

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
    xPercent += 0.01 * direction;
    requestAnimationFrame(animation)
  }
  return (
    <div className="relative flex overflow-hidden h-[14rem]">

    <div className="absolute">
        <div ref={slider} className="flex flex-row">
          <div ref={firstText}>
          <ServicesCard />
          </div>
          <div ref={secondText}>
          <ServicesCard />
          </div>
        </div>
      </div>

    </div>
  )
}

const Services = () => {
  return (
    <div className="overflow-hidden padding-y flex flex-col relative h-full " data-scroll >
   <div className="padding-x py-6">
    <SectionHeader title={'Services'} />
    </div>
    <ServicesScroll />
    </div>
  )
}


export default Services