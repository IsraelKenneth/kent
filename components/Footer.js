
import Image from "next/image"
import Magnetic from "./extra/Magnetic"
import Link from "next/link"
import { dribbleEmoji, linkedIn, whatsapp } from "./asset/svg"

const Footer = () => {
  return (
    <div className="">
     <div className="flex flex-col">
                <div className="flex mt-24 mb-12 flex-row justify-between padding-x">
                    <Link className="hidden md:block cursor-pointer text-gray-600 hover:text-blue-700 uppercase font-semibold" href="/#about">About</Link>
                    <Link className="hidden md:block cursor-pointer text-gray-600 hover:text-blue-700  uppercase font-semibold" href="/#services">Services</Link>
                    <Link className="hidden md:block cursor-pointer text-gray-600 hover:text-blue-700  uppercase font-semibold" href="/#blog">Blog</Link>
                    <Link className="hidden md:block cursor-pointer text-gray-600 hover:text-blue-700  uppercase font-semibold" href="/#contact">Contact</Link>
                <div className="flex flex-row space-x-8 items-center justify-between">

                        <Magnetic>
                        <a className="w-6" href="https://dribbble.com/kent120">
                        <Image alt="footer"
                        src={dribbleEmoji}
                        />  
                        </a> 
                        </Magnetic>
                        <Magnetic>
                        <a href="https://www.linkedin.com/in/vinci-designs-a5b831191/" className="w-6">
                        <Image alt="footer"
                        src={linkedIn}
                        />                               
                        </a>
                        </Magnetic>
                        <Magnetic>
                        <a href="https://wa.link/u8bsuf" className="w-6 z-50">
                        <Image alt="footer"
                        src={whatsapp}
                        />                               
                        </a>
                        </Magnetic>
                    </div>
                </div>
                <hr className="border-gray-600"/>
                <p className="w-full text-center my-12 text-gray-600">Copyright © 2020 Kent Design</p>
            </div></div>
  )
}

export default Footer