"use client"


import React, { useEffect, useState } from "react";
import { projectsData, services } from "@/constants";
import Image from "next/image";
import SectionHeader from "./SectionHeader";


const ProjectCard = ({
  index,
  source,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
<>
            <div onClick={() => window.open(source_code_link, "_blank")} className="p-4 lg:w-1/3 ">
                <div className="h-full rounded-xl shadow-cla-violate shadow-md text-n-8 bg-[#eeeeee] overflow-hidden">
                  <Image className="lg:h-56 md:h-36 shadow-sm  w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100 " src={image} alt="blog"/>
                  <div className="p-6 flex flex-col h-full">
                  <div className="flex flex-col">
                    <h1 className="title-font text-lg font-bold text-gray-600 mb-3">{name}</h1>
                    <p className="leading-relaxed mb-3 text-md">{description}</p>
                    </div>
                    <div className="flex items-end flex-wrap ">
                    <div className='mb-4 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                  <p
                      key={`${name}-${tag.name}`}
                      className={`text-[15px] `} style={{color: tag.color}}
                  >
                      #{tag.name}
                  </p>
              ))}
          </div>
                    </div>
                  </div>
                </div>
              </div>
              </>
  );
};



const Works = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    setProjects(getProjectsByActiveTab());
  }, [activeTab]);

  const handleTabClick = (tabIndex) =>{
    setActiveTab(tabIndex)
  }

  const getProjectsByActiveTab = () => {
    switch (activeTab) {
      case 1:
        return projectsData.webworks;
      case 2:
        return projectsData.mobilework;
      case 3:
        return projectsData.graphicworks;
      case 4:
        return projectsData.designworks;
      default:
        return [];
    }
  };
  return (
      <div className="w-full flex flex-col padding-x pb-[10rem]  items-center justify-center">

    <div className="padding-x ">
    <SectionHeader title={'Designs'} 
    brief={"Each thumbnail provides an in-depth look at the project, showcasing my design process, creativity, and attention to detail. Dive into each project to see how I bring ideas to life through innovative design solutions."}/>
    </div>

          <div className="hidden md:grid grid-flow-col text-center text-gray-500 bg-gray-300 rounded-full p-1 mt-10 w-[70%] ">
                <button
                    className={`flex justify-center cursor-none py-4 uppercase ${activeTab === 1 ? "bg-white rounded-full shadow text-indigo-900 py-4" : " text-black"}`}
                    onClick={() => handleTabClick(1)}
                >
                    Web Dev
                </button>
                <button
                    className={`flex justify-center py-4 cursor-none uppercase ${activeTab === 2 ? "bg-white rounded-full shadow text-indigo-900 py-4" : "text-black"}`}
                    onClick={() => handleTabClick(2)}
                >
                    Mobile Dev <br className="block md:hidden" /> 
                </button>
                <button
                    className={`flex justify-center cursor-none py-4 uppercase ${activeTab === 3 ? "bg-white rounded-full shadow text-indigo-900 py-4" : "text-black"}`}
                    onClick={() => handleTabClick(3)}
                >
                    Designs
                </button>

            </div>


            <div className="md:hidden grid grid-flow-col items-center text-center text-gray-500 bg-gray-300 rounded-full p-1 w-full my-14">
                <button
                    className={`flex justify-center cursor-none py-1 uppercase ${activeTab === 1 ? "bg-white rounded-full shadow text-indigo-900 py-4" : " text-black"}`}
                    onClick={() => handleTabClick(1)}
                >
                    <Image src={services[0].icon} alt="Web" width={40} height={30} />
                </button>
                <button
                    className={`flex justify-center py-1 cursor-none uppercase ${activeTab === 2 ? "bg-white rounded-full shadow text-indigo-900 py-4" : "text-black"}`}
                    onClick={() => handleTabClick(2)}
                >
                <Image src={services[1].icon} alt="Web" width={40} height={30} />
                </button>
                <button
                    className={`flex justify-center cursor-none py-1 uppercase ${activeTab === 3 ? "bg-white rounded-full shadow text-indigo-900 py-4" : "text-black"}`}
                    onClick={() => handleTabClick(3)}
                >
                <Image src={services[2].icon} alt="Web" width={40} height={30} />
                </button>

            </div>
            

      <div className='w-full flex flex-wrap md:mt-24 mt-5'>
        
        {projects.map((project, index) => (
            <ProjectCard key={index} {...project}/>
        ))}


      </div>
      </div>
  );}

  export default Works

  