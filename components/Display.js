"use client"

import { useEffect,useState, useRef } from "react"
import Image from "next/image"
import Lenis from '@studio-freight/lenis'
import { useScroll, useTransform, motion } from "framer-motion"
import {  D2 as f1, Graph3 as f4, } from "./asset/Hero"
import { f2, f3,f4 as f6, f10, f11, f12,  f5, f7, f8, f9 } from "./asset/dez"

import "../trial/trial.css"

const images = [
 f1, f2, f3, f10, f11, f12, f4, f5, f6, f7, f8, f9
]

const Column = ({images, y}) =>{
    return (
        <motion.div className="column relative h-full w-3/12 min-w-[250px] flex flex-col gap-[2vw]" style ={{y}}>
        {
            images.map((src, index) =>{
                return (
                    <div key={index}  className="h-full w-full relative overflow-hidden rounded-[1vw]">
                    <Image fill src={src} alt={`src ${index}`} className="object-cover"/>
                    </div>
                )
            })
        }
        </motion.div>
    )
}

const Display = () => {
    const [dimension, setDimension] = useState({width:0, height:0});
    const container = useRef(null)


    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })


    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])


    useEffect(() =>{
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

const resize = () => {
    setDimension({width: window.innerWidth, height: window.innerHeight})
  }

  window.addEventListener("resize", resize)
  requestAnimationFrame(raf);
  resize();

  return () => {
    window.removeEventListener("resize", resize);
  }
}, [])





  return (
    <div className="min-h-screen padding ">
    <div ref={container} className="h-[175vh] mx-auto items-center justify-center relative flex gap-[2vw] box-border overflow-hidden p-[2vw] bg-[rgb(205,204,204)]">
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
    </div>
    <div className="spacer"></div>
    </div>
  )
}

export default Display