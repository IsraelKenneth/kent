import React from 'react'

import { dribble, envato, fiverr, upwork, behance} from '../asset/svg'
import Image from 'next/image'

const Barner = () => {
  return (
    
    <div
      className="pt-[12rem] -mt-[5.25rem] flex flex-col  overflow-hidden  w-full">
            <div className="w-full ">
    <div className=" flex flex-col items-center gap-8 mx-auto my-32">
      <div className="flex flex-wrap items-center justify-center w-full gap-6 lg:gap-0 lg:flex-nowrap lg:justify-between">
        <span>
      <Image src={dribble} alt='dribble' width={140} height={140} />
        </span>
        <span>
      <Image src={envato} alt='dribble' width={140} height={140} />
        </span>
        <span>
      <Image src={fiverr} alt='dribble' width={140} height={140} />
        </span>
        <span>
      <Image src={upwork} alt='dribble' width={140} height={140} />
        </span>
        <span>
      <Image src={behance} alt='dribble' width={140} height={140} />
        </span>
      </div>
    </div>
  </div>
        </div>
  )
}

export default Barner