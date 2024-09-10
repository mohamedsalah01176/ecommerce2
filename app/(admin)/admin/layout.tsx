"use client"
import cookies  from 'js-cookie';
import NavBarAdmin from './component/NavBar';
import SideBar from './component/sideBar';
import { useEffect, useState } from 'react';

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
    const [openSlider,setOpenSlider]=useState(true)
    const [token,setToken]=useState<any>('')
    const [typeUser,setTypeUser]=useState<any>('')
    useEffect(()=>{
      // let token=cookies.get('token')
      setToken(cookies.get('token'))
      setTypeUser(cookies.get('typeUser'))
      // let typeUser=cookies.get('typeUser')

    },[])

 

  return (
    <div>
      {token && typeUser==='admin'? 
      <>
        <NavBarAdmin />
        <SideBar setOpenSlider={setOpenSlider} openSlider={openSlider}/>
        <div className={`mt-[115px] ${openSlider?'ml-[150px] sm:ml-[220px] ':'ml-0'} transition-all duration-300`}>
          {children}
        </div>
      </>
      :
      <div className='text-5xl flex justify-center items-center text-red-600 font-semibold h-screen '>
        Not found this page
      </div> 
        }
    </div>
  )
}
