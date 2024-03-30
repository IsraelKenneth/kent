import Image from "next/image"
import "./extra.css"
import { Cyborg } from "../asset"

const ServicesCard = ({ index, title, icon, smalltxt }) => {
  return (

    <div className="card ">
    <div className="border"></div>
    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20 duration-[0.4s] ease-[ease-in-out]">
      <Image src={Cyborg}  alt="cyborg"/>
    </div>
    <div className="content">
      <div className="logo">
        <div className="logo1">
        <Image src={icon}  alt="cyborg"/>
        </div>
        <div className="logo2 ">
        </div>
      </div>
      <span className="logo-bottom-text">{title}</span>
    </div>
    <span className="bottom-text">{smalltxt}</span>
  </div>
  )
}

export default ServicesCard