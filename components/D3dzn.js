import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Image from "next/image";
import { Dguy } from "./asset/gallery";
import SectionHeader from "./SectionHeader";

const D3dzn = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0, // Slide in to the original position
        opacity: 1,
        transition: { duration: 2 }, // Takes 2 seconds
      });
    } else {
      controls.start({
        x: "-100vw", // Exit to the right
        opacity: 0,
        transition: { duration: 2 }, // Takes 2 seconds
      });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="min-h-screen flex flex-col items-center justify-center">

          <SectionHeader
            title={'3D Design'}
            brief={'Kent Design bring creative visions to life with detailed renderings and immersive experiences.'}
          />

      <motion.div
       
        initial={{ x: "-100vw", opacity: 0 }} // Start from left off-screen
        animate={controls}
        
      >
        <Image
         src={Dguy}
         alt="image"
         className="w-[30rem] h-[30rem] object-contain"
         />
        </motion.div>
    </div>
  );
};


export default D3dzn
