import React from 'react'
import { staggerContainer } from './frame-motion'
import { motion } from "framer-motion"

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
                <span className='hash-span' id={idName}> &nbsp; </span>
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper