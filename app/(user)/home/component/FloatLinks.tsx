"use client"
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function FloatLinks() {
    let {t,i18n}=useTranslation()
    return (
        <div className={`absolute top-[80px] left-[50%] ${i18n.language == 'en'?'translate-x-[-40%]':'translate-x-[-60%]'}  bg-black p-5 text-white w-[350px] rounded-lg transition-all duration-700 z-10`}>
            <div className={` absolute  top-[-35px] left-[45%] ${i18n.language == 'en'?'translate-x-[-100%]':'translate-x-[100%]'} translate-x-[-100%]`} style={{borderWidth:"20px" ,borderStyle:"solid",borderColor:"transparent transparent black transparent"}}></div>
            <ul className=' items-center gap-3 text-lg font-semibold flex flex-col  lg:hidden'>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/home">{t("home")}</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/products">{t("products")}</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/about">{t("aboutUs")}</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/offers">{t("offers")}</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/blog">{t("blog")}</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/connectUs">{t("contactUs")} </Link>
                    </li>
                </ul>
        </div>
      )
}
