"use client"
import { useState ,useEffect} from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {useRouter} from 'next/navigation';

interface props{
    numSkip: number,
 
}
export default function Pagination() {
    const [numSkip,setnumSkip]=useState(0)
    let rout=useRouter()
    useEffect(()=>{
        rout.push(`?numSkip=${numSkip}`)
    },[numSkip,rout])
 
    return (
        <div className='w-fit h-full mx-auto flex justify-between items-center  gap-2'>
            <div className="text-2xl p-1 font-semibold border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" onClick={()=>setnumSkip(numSkip-50)}><MdOutlineKeyboardArrowLeft/></div>
            <div className="text-lg font-semibold py-1 px-2 border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" onClick={()=>setnumSkip(0)} >1</div>
            <div className="text-lg font-semibold py-1 px-2 border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" onClick={()=>setnumSkip(50)} >2</div>
            <div className="text-lg font-semibold py-1 px-2 border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" onClick={()=>setnumSkip(100)} >3</div>
            <div className="text-lg font-semibold py-1 px-2 border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" onClick={()=>setnumSkip(150)} >4</div>
            <div className="text-2xl p-1 font-semibold border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" onClick={()=>setnumSkip(numSkip+50)}><MdOutlineKeyboardArrowRight/></div>
        </div>
    )
}
