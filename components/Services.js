import { useEffect, useState } from 'react';
import { services } from "@/constants"
import SectionHeader from "./SectionHeader"
import ServicesCard from "./extra/ServicesCard"
import { textVariant } from "@/utils/frame-motion"
import { motion } from "framer-motion"

const Services = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('services');
      if (aboutSection && !isVisible && aboutSection.getBoundingClientRect().top < window.innerHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div id="services"
    
    >
    <div className="h-full padding overflow-hidden items-center ">
    <motion.div variants={textVariant()} className="lg:py-20 py-14">
    <SectionHeader title={"SERVICES"} />
    </motion.div>
    
    <motion.div 
              initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }} className="flex flex-wrap gap-10 mb-10 items-center justify-center">
    {
    services.map((service, index) => (
        <ServicesCard key={index} 
            title={service.title}
            icon ={service.icon}
            smalltxt={service.smalltxt}
        />
    ))
    }
    
    </motion.div>
    
    </div>
    </div>
  )
}

export default Services