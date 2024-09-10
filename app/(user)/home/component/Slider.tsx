"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
// import Loader from './Loader/Loader.tsx';


interface item{
    image:string,
    title:string,
    // ar_title:string,
    discription:string,
    // ar_text:string,
 
}

export default function Slider({sliderHome}:any) {
    const {t,i18n}=useTranslation()
    let token=cookies.get('token')
    let nav=useRouter()
    return (
      <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      dir='ltr'
      className='relative'
    > 
    {
    sliderHome.map((item:item,index:number)=>
      <SwiperSlide key={index}><Image height={500} width={500} src={item.image} alt='slider' className='h-[550px] w-full'/>
        <div className='absolute top-[50%] right-[12%]  z-10 text-white w-[300px] text-right' >
              <h1 className='text-4xl font-semibold mb-2'>{t(item.title)} </h1>
              <h1 className='text-2xl mb-2'>{t(item.discription)}</h1>
              <div onClick={()=>{token?nav.push('/home/products'):nav.push('/')}}  className='py-2 cursor-pointer  mx-auto  px-3  text-lg w-fit bg-gray-800 rounded-lg text-white hover:bg-gray-900 transition2 '>{t("shop")}</div>
        </div>
      </SwiperSlide>
    )

    }
  
      
    </Swiper>
  
    )
}
