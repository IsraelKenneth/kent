import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SectionHeader from "./SectionHeader"
import "../app/globals.css"
import Character from "@/components/Character"
import SectionWrapper from "@/utils/SectionWrapper";

const paragraph =  "A passionate full-stack developer with a creative flair for graphic design, 3D design and photography. With a keen eye for detail and a love for problem-solving, thriving in the dynamic world of web development, where innovation meets functionality. "

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection && !isVisible && aboutSection.getBoundingClientRect().top < window.innerHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div className="lg:padding-x" id="about">
      <div className="padding-x flex flex-col">
        <SectionHeader title={'about'} />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <Character paragraph={paragraph} />
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about');
