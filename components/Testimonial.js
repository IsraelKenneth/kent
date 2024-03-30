'use client';
import TestimonialCard from "./TestimonialCard"
import { testimonials } from "@/constants"
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'


const Testimonial = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
    })

    useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      })


  return (
    <div ref={container} className="relative mt-[50vh] w-full" id="testimonials">
        
        {
          
            testimonials.map((project, i) =>{
                const targetScale = 1 - ( (testimonials.length - i) * 0.05);
                return  <TestimonialCard key={`p_${i}`} i={i} {...project}   progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}  />})
                
        }

    </div>
  )
}

export default Testimonial