"use client"
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';
import { image1, image2, image3, image4, image5, image6, image7 } from '../asset/gallery';
import "../../trial/trial.css"
import SectionHeader from '../SectionHeader';

const ZoomParallax = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);



    const pictures = [
        {
            src: image1,
            scale: scale4
        },
        {
            src: image2,
            scale: scale5
        },
        {
            src: image3,
            scale: scale6
        },
        {
            src: image4,
            scale: scale5
        },
        {
            src: image5,
            scale: scale6
        },
        {
            src: image6,
            scale: scale8
        },
        {
            src: image7,
            scale: scale9
        }
    ]

  return (
    <>
    
    <div className="padding-x pb-16">
    <SectionHeader title={'Photography'} />
    </div>
    
    
    <div ref={container} className='contain overflow-hidden'>




    <div className={'sticky  h-screen top-0'}>
        {
            pictures.map( ({src, scale}, index) => {
                return <motion.div key={index} style={{scale}} className={'el'}>
                    <div className={'imageContainer'}>
                        <Image
                            src={src}
                            fill
                            alt="image"
                            placeholder='blur'
                        />
                    </div>
                </motion.div>
            })
        }
    </div>
</div>
</>
  )
}

export default ZoomParallax