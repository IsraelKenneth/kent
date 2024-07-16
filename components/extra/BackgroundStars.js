"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Screen1, Screen2, Screen3, Screen4, Screen5, Screen6, Screen7, Screen8 } from "../asset/project";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
  }

  const HeroParallax = ({ products }) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  
    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  
    const translateX = useSpring(
      useTransform(scrollYProgress, [0, 1], [0, 1000]),
      springConfig
    );
    const translateXReverse = useSpring(
      useTransform(scrollYProgress, [0, 1], [0, -1000]),
      springConfig
    );
    const rotateX = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [15, 0]),
      springConfig
    );
    const opacity = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
      springConfig
    );
    const rotateZ = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [20, 0]),
      springConfig
    );
    const translateY = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
      springConfig
    );
  
    return (
      <div id="work" ref={ref} className="h-[290vh] xl:min-h-[290vh]  py-40 lg:pt-[20rem] overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
        <Header />
        <motion.div style={{ rotateX, rotateZ, translateY, opacity }} className="">
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        </motion.div>
      </div>
    );
  };
  
  export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
          <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          The Pinnacle of  <br /> Full-Stack Development
          </h1>
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Kent Design excels in crafting stunning products using cutting-edge technologies and frameworks. 
          I am driven by passion to create remarkable and innovative solutions. Below are designs I have worked on.
          </p>
        </div>
      );
  };
  
  export const ProductCard = ({ product, translate }) => {
    return (
        <motion.div
          style={{
            x: translate,
          }}
          whileHover={{
            y: -20,
          }}
          key={product.title}
          className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
          <Link
            href={product.link}
            className="block group-hover/product:shadow-2xl "
          >
            <Image
              src={product.thumbnail}
              height="1000"
              width="1000"
              className="object-cover object-left-top absolute h-full w-full inset-0"
              alt={product.title}
            />
          </Link>
          <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
          <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
            {product.title}
          </h2>
        </motion.div>
      );
  };



  export function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
  }
  export const products = [
    {
      title: "Urban News",
      link: "https://urbannews.onrender.com/",
      thumbnail: Screen7},
      {
        title: "Urban News",
        link: "https://urbannews.onrender.com/",
        thumbnail: Screen7},
    {
      title: "GPT AI",
      link: "https://gpt-chat.onrender.com",
      thumbnail: Screen1},
   
      {
        title: "Best Eats",
        link: "https://savory-vlpb.onrender.com/",
        thumbnail: Screen8},
        {
          title: "GPT AI",
          link: "https://gpt-chat.onrender.com",
          thumbnail: Screen1},
    {
      title: "Urban News",
      link: "https://urbannews.onrender.com/",
      thumbnail: Screen7},
   
    {
      title: "Rent-Up Real Estate ",
      link: "https://real-estate-new-y63n.onrender.com/",
      thumbnail: Screen5},
      {
        title: "GPT AI",
        link: "https://gpt-chat.onrender.com",
        thumbnail: Screen1},
    {
      title: "Qwik Drive",
      link: "https://qwik-drive.onrender.com",
      thumbnail: Screen6},
      {
        title: "Qwik Drive",
        link: "https://qwik-drive.onrender.com",
        thumbnail: Screen6},
        {
          title: "Best Eats",
          link: "https://savory-vlpb.onrender.com/",
          thumbnail: Screen8},
   
    {
      title: "Gallie Pet Sitting",
      link: "https://gallie.onrender.com",
      thumbnail: Screen3},
    {
      title: "Travel Guide Website",
      link: "https://travel-g-bsjv.onrender.com",
      thumbnail: Screen4},
    {
      title: "Nike Landing Page",
      link: "https://nike-page-fyor.onrender.com",
      thumbnail: Screen2},
      {
        title: "Urban News",
        link: "https://urbannews.onrender.com/",
        thumbnail: Screen7},
  ];