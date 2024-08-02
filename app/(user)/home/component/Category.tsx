"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import AOS from "aos"


interface props{
  categories:[]
}


export default function Category({categories}:props) {

let {t}=useTranslation()

useEffect(()=>{
  AOS.init();
  AOS.refresh()
},[])

return (
  <>
  {
    categories?.map((item:string,index:number)=>
      <Link data-aos="zoom-in-up" data-aos-duration="1500" key={index} href={`/home/categories/${item}`} className='p-5 shadow-xl flex items-center gap-4  hover:shadow-2xl transition2 justify-center '>
          <div className='text-xl font-semibold'>{t(item)}</div>
      </Link>
    
    )
  }
  </>
)
}
