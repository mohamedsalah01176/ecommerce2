"use client"
import React, { useEffect, useState } from 'react'
import { MdOutlineTranslate } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import Cookies from 'js-cookie';
import Link from 'next/link.js';
import { useTranslation } from 'react-i18next';
import FloatLinks from './FloatLinks';
import { usePathname, useRouter } from 'next/navigation';


export default function NavBar1() {
    const [openLinks ,setOpenLinks]=useState(false)
    const [token ,setToken]=useState<string>()
    let nav=useRouter()
    let path=usePathname()
    let {t,i18n}=useTranslation()

   useEffect(()=>{
    if(typeof window !== 'undefined'){
        setToken(Cookies.get("token"))
    }
   },[path])

   function scrollto(sectionid:string){
    nav.push('/home')
    document.getElementById(`${sectionid}`)?.scrollIntoView({ behavior: 'smooth' })
   }
    

    function handlelauguage(){
        if(i18n.language === "en"){
            i18n.changeLanguage("ar")
        }else{
            i18n.changeLanguage("en")
            // Cookies.set("language","en")
        }
        Cookies.set("language",i18n.language)
    }

    function handelLogout(){
        Cookies.remove("token")
        Cookies.remove("userName")
        Cookies.remove("password")
        Cookies.remove("typeUser")
        Cookies.remove("email")
        localStorage.clear()
        window.location.reload()
    }
    
  return (
    <div className='bg-black text-white p-7 fixed w-full top-0 left-0 z-40' >
        <div className='container flex justify-between items-center '>
            <div className="text-4xl font-semibold hover:scale-110 ">
                MS
            </div>
            {token ?
            <>
                <div className='lg:hidden relative  transition-all duration-700 '>
                    <FaBars onClick={()=>setOpenLinks(!openLinks)} className=' text-3xl font-semibold cursor-pointer '/>
                        {/* {openLinks === true? */}
                        <FloatLinks openLinks={openLinks}/>
                        {/* : */}
                        {/* ""} */}
                </div>
                <ul className=' items-center gap-7 text-lg font-semibold hidden lg:flex'>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/home">{t("home")}</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/home/products">{t("products")}</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300 cursor-pointer text-xl' onClick={()=>scrollto("offers")}>
                        {t("offers")}
                    </li>
                    <li className='hover:scale-110 transition-all duration-300 cursor-pointer' onClick={()=>scrollto("footer")}>
                        {t("contactUs")} 
                    </li>
                </ul>
                <button onClick={()=>handelLogout()} className='text-lg rounded-lg bg-red-700 hover:bg-red-600 transition2 text-white border-none outline-none py-2 px-3'>{t("logout")}</button>
            </>
            :
            <div >
                <Link href='/login' className='py-2 mx-3 px-4 bg-sky-700 rounded-md hover:bg-sky-600 transition-all duration-300'>{t("Login")}</Link>
                <Link href='/' className='py-2 px-4 bg-green-700 rounded-md hover:bg-green-600 transition-all duration-300'>{t("register")}</Link>
            </div>
            }


            <div onClick={()=>handlelauguage()}>
                <MdOutlineTranslate className='text-2xl font-semibold cursor-pointer'/>
            </div>

        </div>
    </div>
  )
}
