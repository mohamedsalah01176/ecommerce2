import React from 'react'

export default function Feature({setOpenFeature}:any) {
  return (
    <div className='fixed z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-screen bg-black/70 p-5 flex justify-center items-center text-3xl text-white'>
        <button onClick={()=>setOpenFeature(false)} className='text-3xl font-bold text-white hover:rotate-180 hover:text-red-700 transition2 absolute top-[150px] right-5'>X</button>
        <p>Will Add This Option in The Feature</p>
    </div>
  )
}
