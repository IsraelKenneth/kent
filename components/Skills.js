
import Header from "./Header"
import Header2 from "./Header2"
import SectionHeader from "./SectionHeader"

const Skills = () => {
  return (
    <div className="overflow-hidden padding-y flex flex-col relative h-full " data-scroll >
   <div className="padding-x">
    <SectionHeader title={'Technologies & Frameworks'} />
    </div>
    <Header />
    <Header2 />
    </div>
  )
}

export default Skills