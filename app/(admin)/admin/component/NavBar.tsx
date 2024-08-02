"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import  Cookies  from 'js-cookie';
import { usePathname ,useRouter } from 'next/navigation';

export default function NavBarAdmin() {
    const [image ,setImage]=useState<any>('')
    const [fristName ,setFristName]=useState<string>()
    const [search ,setSearch]=useState<string>()
    const params2=usePathname()
    let nav=useRouter()

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
            nav.push(`/products?str=${search.toLowerCase()}`)
        }
        else {
            if(params2 === "/products"){
                nav.push(`/products`)
            }else if(params2 === "/"){
                nav.push(`/`)
            }
        }
    }

    useEffect(()=>{
        handelSearch()

    },[search])

  return (
    <div className='bg-white text-black p-7 fixed w-full top-0 left-0 z-40'>

        <div className=' flex justify-between items-center gap-3' >
                <div className="text-4xl font-semibold hover:scale-110 ">
                    MS
                </div>
            <div className='bg-[#eee] p-2  flex items-center gap-1 w-[40%] sm:w-[60%] rounded-lg'>
                <input type="text" placeholder="searchBar"  className='bg-[#eee] w-[95%] border-none outline-none p-1 input' onChange={(e)=>{ setSearch(e.target.value);handelSearch()}}  />
                <FaSearch/>
            </div>
            <div className='flex gap-3 items-center justify-center w-[40%] sm:w-[20%] '> 
                <div className='flex items-center justify-center flex-wrap gap-2 text-center '>
                    <Image width={200} height={200} src={image?image:"/R.png"} alt="aaa" className='w-[50px] h-[50px] rounded-full' />
                    <h1 className='w-[150px] sm:w-fit overflow-x-scroll sm:overflow-x-auto'>{fristName}</h1>
                    
                </div>
                

            </div>
        </div>
    </div>
  )
}
