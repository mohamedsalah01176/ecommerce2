import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { TbShoppingCartDown } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";

import Link from 'next/link';



export default function SideBar({setOpenSlider,openSlider}:any) {
  return (
    <div className={ `min-w-[150px] sm:min-w-[220px] min-h-screen fixed top-[106px]  text-slate-600 transition-all duration-300 ${openSlider?'left-0':'-left-[160px] sm:-left-[220px]'} `}>
      <div className='bg-white cursor-pointer absolute top-14 -right-5' onClick={()=>setOpenSlider(!openSlider)}>
        <IoMdSettings className='text-3xl p-1 hover:rotate-180 transition-all duration-500 '/>
      </div>
      <div className='space-y-1 border-b-2 border-slate-300 p-2'>
        <Link href={'/admin'} className='flex items-center justify-center gap-2 hover:bg-[#7364db] hover:text-white transition-all duration-300 rounded-lg p-3 cursor-pointer'>
          <MdOutlineDashboard className='text-3xl font-semibold'/>
          <h2 className='text-lg font-semibold'>Dashboard</h2>
        </Link>
        <Link href={'/admin/products'} className='flex items-center justify-center gap-2 hover:bg-[#7364db] hover:text-white transition-all duration-300 rounded-lg p-3 cursor-pointer'>
          <CiShop className='text-3xl font-semibold'/>
          <h2 className='text-lg font-semibold'>Products</h2>
        </Link>
        <Link href={'/admin/orders'} className='flex items-center justify-center gap-2 hover:bg-[#7364db] hover:text-white transition-all duration-300 rounded-lg p-3 cursor-pointer'>
          <TbShoppingCartDown className='text-3xl font-semibold'/>
          <h2 className='text-lg font-semibold'>Orders</h2>
        </Link>
        <Link href={'/admin/payment'} className='flex items-center justify-center gap-2 hover:bg-[#7364db] hover:text-white transition-all duration-300 rounded-lg p-3 cursor-pointer'>
          <MdOutlinePayment className='text-3xl font-semibold'/>
          <h2 className='text-lg font-semibold'>Payment</h2>
        </Link>
        <Link href={'/admin/clients'} className='flex items-center justify-center gap-2 hover:bg-[#7364db] hover:text-white transition-all duration-300 rounded-lg p-3 cursor-pointer  '>
          <HiOutlineUsers className='text-3xl font-semibold'/>
          <h2 className='text-lg font-semibold'>Clients</h2>
        </Link>
      </div>
      <div className='p-3 '>
        <h2 className='text-lg font-bold'>Categories</h2>
        <div className='pl-2 mt-2 space-y-4'>
          <button className='flex justify-between items-center w-full'> <h2 className='text-[18px]'>LapTops</h2> <span className='py-[1px] px-2 bg-red-500 text-black rounded-lg'>1</span></button>
          <button className='flex justify-between items-center w-full'> <h2 className='text-[18px]'>Mobiles</h2> <span className='py-[1px] px-2 bg-yellow-500 text-black rounded-lg'>1</span></button>
          <button className='flex justify-between items-center w-full'> <h2 className='text-[18px]'>Desktop</h2> <span className='py-[1px] px-2 bg-pink-500 text-black rounded-lg'>1</span></button>
        </div>
      </div>
        
    </div>
  )
}
