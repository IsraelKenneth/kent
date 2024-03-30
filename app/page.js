"use client"

import React, {useEffect, useState} from "react";


import "./globals.css"

import { Navbar, Footer, CustomCursor, Header,Skills, About, Works, Contact, ZoomParallax, Services, Blog, Hero, Barner, Carding, Header2, BentoPrev, HeroNav } from "@/components";
import Display from "@/components/Display";
import Testimonial from "@/components/Testimonial";
import Loading from "@/components/extra/Loading";
import { HeroParallaxDemo } from "@/components/extra/BackgroundStars";
import Nav from "@/components/Navbar";


const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 6 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

    return (
      <>
 {isLoading ? ( <Loading />
        
      ) : (
        <>
        
          <CustomCursor />
            <div
             className=""
                id="main-container"
                data-scroll-container
            >
            <Nav />
            <div className="overflow-hidden dark:bg-herobg dark:bg-contain dark:bg-opacity-90 dark:bg-no-repeat">
              <HeroNav />
              <Hero />
              
              </div>
              
              <About />


              <Services />

              <Skills />
              
              <Display />
          
              <ZoomParallax />
              <Testimonial />
              <BentoPrev />

              <HeroParallaxDemo />
              
              <Works />

              <Blog />
              <Contact />

              <Footer />
            </div>
            </>
      )}
    </>
  );
};
export default Home