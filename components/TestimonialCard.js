'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import "../app/globals.css"

const TestimonialCard = ({i,image, name, designation, testimonial, company, progress, range, targetScale}) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'start start']
    })


    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div style={{top:`calc(-5vh + ${i * 25}px)`}} className='h-screen flex items-center justify-center sticky top-0 overflow-hidden'>
    <div className='w-full justify-center items-center flex'>
    <div className="flex items-center text-white lg:w-[75vw] w-[90%] text-center  -top-1/4 relative lg:flex-row flex-col   pl-5 pr-[30px] py-[50px] rounded-3xl bg-[#121017] ">
    <Image alt='testimonial' src={image} className='lg:max-w-[280px] lg:h-[300px] object-cover ml-[-60px] shadow-lg shadow-black mr-[30px] md:rounded-[inherit]  md:mt-[-100px] md:w-full max-w-[1000px] md:h-[250px] md:mb-[30px] md:mx-0   h-[45vw] w-[45vw] mt-[-140px] mb-[30px] mx-0 rounded-[50%]' />
    <div>
      <h2 className='h2  mr-0 font-normal lg:mr-[30px] mt-0 mb-2.5'>{name}</h2>
      <h6 className='h6 text-base font-normal opacity-75 m-0'>{designation} of {company}</h6>
      <p className='text-sm font-normal opacity-65 lg:px-28 mb-[30px] md:pt-8 pt-4 '>
        {testimonial}
      </p>
      <button className='border border-[#f8f8f8] text-[#f8f8f8] text-base px-[26px] py-4 rounded-[40px] bg-transparent font-inherit cursor-none'>Follow Account</button>
    </div>
  </div>
  </div>
  </motion.div>
  )
}

export default TestimonialCard