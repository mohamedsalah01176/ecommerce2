"use client"
import { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { usePathname, useRouter } from 'next/navigation.js';
import Cart from './Cart';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function NavBar2(params:any) {
    const [openLinks ,setOpenLinks]=useState(false)
    const [image ,setImage]=useState<any>('')
    const [fristName ,setFristName]=useState<string>()
    const [search ,setSearch]=useState<string>()
    const params2=usePathname()
    let nav=useRouter()

    let {t}=useTranslation()

    useEffect(()=>{
        
        if(typeof window !== "undefined"){
            let fristNameCookies=Cookies.get("userName")
            let image=localStorage.getItem("image")
            setImage(image)
            setFristName(fristNameCookies)
        }
    },[])

    function handelSearch(){
        if(search){
            nav.push(`/home/products?str=${search.toLowerCase()}`)
        }
        else {
            if(params2 === "/home/products"){
                nav.push(`/home/products`)
            }else if(params2 === "/home"){
                nav.push(`/home`)
            }
        }
    }

    useEffect(()=>{
        handelSearch()

    },[search])


    //cart******************************************
    let updata=useSelector((state:any)=>state.update)

    const [dataCart,setDataCart]=useState<any>([])

    useEffect(()=>{
        if(typeof window !== undefined){
            let dataLoacl=localStorage.getItem('cart')
            setDataCart(dataLoacl?JSON.parse(dataLoacl):[])
        }
    },[updata])
    
    




  return (
    <div className='bg-white flex justify-between items-center gap-3 px-5 py-4 w-full mt-[100px]' >
        <div className='bg-[#eee] p-2  flex items-center gap-1 w-[40%] sm:w-[60%] rounded-lg'>
            <input type="text" placeholder={t("searchBar")}  className='bg-[#eee] w-[95%] border-none outline-none p-1 input' onChange={(e)=>{ setSearch(e.target.value);handelSearch()}}  />
            <FaSearch/>
        </div>
        <div className='flex gap-3 items-center justify-center w-[60%] sm:w-[40%] '> 
            <div className='relative'>
                <LuShoppingCart  className='text-4xl font-semibold cursor-pointer p-1' onClick={()=>setOpenLinks(!openLinks)}/>
                <div className="absolute -top-1 -right-2 bg-black p-2 rounded-full w-[20px] h-[20px] text-sm font-bold flex items-start ">
                    <span className='-top-[5%] right-[30%] absolute text-white'>{dataCart?.length}</span>
                </div>
                {openLinks === true?
                    <Cart setOpenLinks={setOpenLinks} />
                :
                null
            }
            </div>
            <div className='flex items-center justify-center flex-wrap gap-2 text-center '>
                <Image width={200} height={200} src={image?image:"/R.png"} alt="aaa" className='w-[50px] h-[50px] rounded-full' />
                <h1 className='w-[150px] sm:w-fit overflow-x-scroll sm:overflow-x-auto'>{fristName}</h1>
                
            </div>
            

        </div>
    </div>
  )
}
