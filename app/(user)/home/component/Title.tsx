"use client"
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import AOS from 'aos';



interface props{
    title: string; 
 
}


export default function Title({title}:props) {
  let {t}=useTranslation()
  useEffect(()=>{
    AOS.init();
    AOS.refresh()
  },[])


  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className='text-center mt-10 mb-10 relative'>
      <span className=' text-5xl sm:text-7xl  font-bold text-[#eee]'>{t(title)}</span>
      <span className='absolute text-3xl sm:text-5xl  font-semibold   top-[25%] left-[50%] translate-x-[-50%]'>{t(title)}</span>
    </div>
  )
}
