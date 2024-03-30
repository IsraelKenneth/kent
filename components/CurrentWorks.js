"use client";
import React, { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { D1, D2, Graph1, Graph2, Graph3, Graph4, Graph5, Graph6, Mob1, Mob2, New1, New11, New2, New3, New4, New5, New6, New7, New9, Photo2 } from "./asset/Hero";
import Image from "next/image";


export function cn(...inputs) {
    return twMerge(clsx(inputs));
  }

  export const ContainerScroll = ({ users, titleComponent }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }, []);
  
    const scaleDimensions = () => {
      return isMobile ? [0.7, 0.9] : [1.05, 1];
    };
  
    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
    return (
      <div className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20" ref={containerRef}>
        <div className="py-10 md:py-40 w-full relative" style={{ perspective: "1000px" }}>
          <Header translate={translate} titleComponent={titleComponent} />
          <Card rotate={rotate} translate={translate} scale={scale} users={users} />
        </div>
      </div>
    );
  };
  
  export const Header = ({ translate, titleComponent }) => {
    return (
      <motion.div style={{ translateY: translate }} className="max-w-5xl mx-auto text-center">
        {titleComponent}
      </motion.div>
    );
  };
  
  export const Card = ({ rotate, scale, translate, users }) => {
    return (
      <motion.div
        style={{
          rotateX: rotate, // rotate in X-axis
          scale,
          boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        }}
        className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
      >
        <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden p-4">
          {users.map((user, idx) => (
            <motion.div key={`user-${idx}`} className="bg-white rounded-md cursor-pointer relative" style={{ translateY: translate }} whileHover={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                {user.badge}
              </div>
              <Image src={user.image} className="rounded-tr-md rounded-tl-md text-sm" alt="thumbnail" />
              <div className="p-4">
                <h1 className="font-semibold text-sm">{user.name}</h1>
                <h2 className="text-gray-500 text-xs">{user.designation}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };
  






export function HeroScrollDemo() {
    return (
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          users={users}
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
              Discover the Art of Design in <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Every Pixel
                </span>
              </h1>
            </>
          }
        />
      </div>
    );
  }
   
  export const users = [
    {
      name: "Web Design",
      designation: "Abstract",
      image: New1,
    },
    {
      name: "Logo Design",
      designation: "Jon-Dor",
      image: Graph1,
    },
    {
      name: "Web Design",
      designation: "Travel Guide",
      image: New2,
    },
    {
      name: "Web Design",
      designation: "Portfolio",
      image: New4,
    },
    {
      name: "Branding",
      designation: "Pure Honey",
      image: Graph2,
    },
    {
      name: "Web Design",
      designation: "Fashion Hub",
      image: New5,
    },
    {
      name: "Photography",
      designation: "Verbier",
      image: Photo2,
    },
    {
      name: "Graphic Design",
      designation: "Kent Aid",
      image: New11,
    },
    {
      name: "Web Design",
      designation: "Hiking",
      image: New9,
    },
    {
      name: "Logo Design",
      designation: "Mimosa",
      image: Graph6,
    },
    {
      name: "3D Design",
      designation: "Garnet",
      image: Graph3,
    },
    {
      name: "Web Design",
      designation: "E-Wallet",
      image: New3,
    },
    {
      name: "Mobile Dev",
      designation: "Easy Buy E-commerce",
      image: Mob1,
    },
    {
      name: "Graphic Design",
      designation: "Mamagah's kitchen",
      image: Graph4,
    },
    {
      name: "3D Design",
      designation: "Cat Lady",
      image: D2,
    },
    {
      name: "Mobile Dev",
      designation: "La Poste",
      image: Mob2,
    },
    {
      name: "Logo Design",
      designation: "Ace of Glow",
      image: Graph5
    },
    {
      name: "3D Design",
      designation: "Duckling",
      image: D1,
    },
    {
      name: "Web Design",
      designation: "Travel with Safety",
      image: New7,
    },
    {
      name: "Web Design",
      designation: "Lets Travel",
      image: New6,
    },
  ];