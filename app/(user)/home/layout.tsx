"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Footer from './component/Footer'
import NavBar1 from './component/NavBar1'
import NavBar2 from './component/NavBar2'
import Chat from './component/Chat'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  let path=usePathname()
  const[position,setPosition]=useState(0)
  let {t,i18n}=useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    
    // Set initial scroll position
    handleScroll();
    
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollTo(sectionId:string){
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }






  return (
    <div>
        <div id='navBar1'>

          <NavBar1 />

        </div>
        {path === "/login" || path === "/register"?
          null
          :
          <NavBar2 />
        }
        
        <div className="min-h-screen  w-full ">
          {children}
        </div>
        <div onClick={()=>scrollTo("navBar1")} className={`${position > 695?"opacity-100 	order-10":"opacity-0 -order-2 "}  transition-all duration-500 fixed bottom-[90px] ${i18n.language === "en"?"right-8":"left-8"} bg-black w-[50px] h-[50px] rounded-full p-3 hover:bg-gray-800 hover:scale-110  cursor-pointer  z-40 text-2xl text-white text-center  `}><FaArrowUp/></div>
        {path === "/login" || path === "/register"?
          null
          :
          <Footer/>
        }
        <Chat/>
    </div>
  )
}
