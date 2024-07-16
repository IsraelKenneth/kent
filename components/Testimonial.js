
import React, { useEffect, useState } from 'react'
import { testimonials } from '@/constants'
import { fadeIn} from '@/utils/frame-motion'
import SectionHeader from './SectionHeader'
import Image from 'next/image'
import { Gradient2 } from './BentoPre'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { test1, test3, testi } from './asset/testimonials';





const FeedbackCard = ({ index, testimonial, name, designation, company, image }) =>
(
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-black-200 p-10 rounded-3xl md:w-[400px] w-[310px]'
    >
        <p className=' font-black text-[48px]'>&quot;</p>

        <div className='mt-1'>
            <p className='tracking-wider text-[18px]'>{testimonial}</p>

            <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                    <p className=' font-medium text-[16px]'>
                        <span className='blue-text-gradient'>@</span> {name}
                    </p>
                    <p className='mt-1 text-secondary text-[12px]'>
                        {designation} of {company}
                    </p>
                </div>

                <Image
                    src={image}
                    alt={`feedback_by-${name}`}
                    className='w-10 h-10 rounded-full object-cover'
                />
            </div>
        </div>
    </motion.div>
)

const Testimonial = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false, // This allows the animation to reset when out of view
      });

      const [xValues, setXValues] = useState({ small: -110, large: -220 });


      useEffect(() => {
        const updateXValues = () => {
          if (window.innerWidth < 768) {
            setXValues({ small: -110, large: -110 });
          } else {
            setXValues({ small: -110, large: -220 });
          }
        };
    
        updateXValues();
        window.addEventListener("resize", updateXValues);
    
        return () => {
          window.removeEventListener("resize", updateXValues);
        };
      }, []);
    return (
      <div id='testimonials' className=' relative w-full items-center justify-center mt-4 lg:mt-10 pb-[5rem] lg:pb-[10rem]'>
          <SectionHeader
            title={'Testimonials'}
            brief={'What others have to say'}
          />

          
          
          {/* <div className='mt-20 flex flex-wrap gap-7 items-center justify-center'>
              {testimonials.map((testimonial, index) => (
                  <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
              ))}

          </div> */}



        <div ref={ref} className="relative flex justify-center items-center lg:mt-20 mt-20">
      <motion.div
        className="absolute z-10 w-48 h-64 md:w-[24rem] md:h-[30rem]"
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={inView ? { x: xValues.large, y: -10, rotate: -4, opacity: 1 } : { x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
            <Image src={test1}  alt="Image 1" className="w-full h-full object-contain" />
          </motion.div>
          <motion.div className="relative z-20 w-48 h-64 md:w-[26rem] md:h-[32rem]">
            <Image src={testi}  alt="Image 2" className="w-full h-full object-contain" />
          </motion.div>
          <motion.div
        className="absolute z-10 w-48 h-64 md:w-[24rem] md:h-[30rem]"
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={inView ? { x: -xValues.large, y: -10, rotate: 4, opacity: 1 } : { x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
            <Image src={test3} alt="Image 3" className="w-full h-full object-contain" />
          </motion.div>
        </div>


          <Gradient2 />
          
      </div>
  )
}

export default Testimonial