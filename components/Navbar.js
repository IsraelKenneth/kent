'use client'
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', id: 'home', icon: <HiHome /> },
  { name: 'about', id: 'about', icon: <HiUser /> },
  { name: 'services', id: 'services', icon: <HiRectangleGroup /> },
  { name: 'work', id: 'work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    id: 'testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    id: 'contact',
    icon: <HiEnvelope />,
  },
];


import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useEffect } from 'react';

const Nav = () => {
  const router = useRouter()

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
  <nav className=' gap-4 fixed h-max bottom-0 lg:flex hidden 
  lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen
  mt-auto flex-col items-center lg:justify-center'>
  <div className='flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10
  px-4 md:px-40 lg:px-0 h-[85px] 
  lg:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl lg:text-xl lg:rounded-full'>
  {navData.map((navbar, index) => {
    return (
      <Link className={`${router.asPath === `/#${navbar.id}` && 'text-blue-600'} relative flex items-start transition-all duration-300  hover:text-accent group`} href={`#${navbar.id}`} key={index}>
       
        {/* tooltip */}
        <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
        <div className='dark:bg-white text-n-8  relative flex text-primary items-center p-[6px] rounded-[3px]'>
        <div className='text-[12px] leading-none font-semibold capitalize'>{navbar.name}</div>
       
       {/* triangle */}
       <div className='border-solid border-l-white borde-l-8 border-y-transparent border-y-[6px] border-0 absolute -right-2'>

       </div>
        </div>
        </div>
        <div className= ''>
        {navbar.icon}
        </div>
      </Link>
    )
  })}
  </div>
  <div className='hidden lg:flex'>
  <ThemeToggle />
  </div>
  </nav>
)};

export default Nav;
