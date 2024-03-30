import React, { useState, useEffect } from 'react'
import { menu, close, logo } from '../asset';
import { navLinks } from '@/constants'

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle';

const HeroNav = () => {

    const [active, setActive] = useState("")

    const [toggle, setToggle] = useState(false)



    useEffect(() => {
        const smoothScroll = (event) => {
          event.preventDefault();
          const targetId = event.currentTarget.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth',
            });
          }
        };
    
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
          link.addEventListener('click', smoothScroll);
        });
    
        return () => {
          links.forEach((link) => {
            link.removeEventListener('click', smoothScroll);
          });
        };
      }, []);

    

  return (
    
    <nav className='padding-x w-full flex items-center py-5 lg:sticky lg:top-0 lg:z-20 lg:bg-white/10 lg:backdrop-blur-sm fixed top-0 z-20 bg-white/10 backdrop-blur-sm'>
    <div className='w-full flex justify-between items-center mx-auto'>
    <Link href='/' className='flex items-center gap-2' onClick={() => {
                    setActive(""); window.scrollTo(0, 0);
                }}>
                    <Image src={logo} alt='logo' className='w-9 h-9 object-contain' />
                    <p className=' text-[18px] font-bold cursor-pointer flex'>Kent &nbsp; <span className='sm:block hidden
      '>| Designs</span></p>
                </Link>

                <Link href='/#blog' className='items-center lg:flex hidden z-50' onClick={() => {
                    setActive(""); window.scrollTo(0, 0);
                }}>
                    <p className=' text-[18px] font-bold cursor-pointer flex'>Blog</p>
                </Link>

    <div className='lg:hidden flex
        '>
                    <Image className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} src={toggle ? close : menu} alt='menu' />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 dark:bg-n-2 bg-n-8 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col
       gap-4
       '> {navLinks.map((link) => {
                            return (
                                <li key={link.id} className={`${active === link.title ? "text-white" : "dark:text-n-8 text-n-2 "}  text-[16px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title)
                                    }}>
                                    <a href={`#${link.id}`}> {`${link.title}`}</a>
                                </li>)
                        })}
                        <ThemeToggle />
                        </ul>
            
                    </div>
                </div>
    </div>
    </nav>
  )
}

export default HeroNav