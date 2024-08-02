"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getUniqueItems } from '../../../helpers/sameItem'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { updataCartProductfun, updateStatus } from '../../../redux/slice/slicecart'
import  Cookies from 'js-cookie'
import Feature from './Feature'

interface item{
    id:number,
    title:string,
    images:string[],
    discountPercentage:number,
    price:number,
    description:string,
    color:string,
    size:string,
    quantity:number
}
interface itemTotal{
    discountPercentage:number,
    quantity:number
    price:number,
}
export default function Cart({setOpenLinks}:any) {
    let {t,i18n}=useTranslation()
    const [dataCart,setDataCart]=useState<any>([])
    const [updata,setUpdata]=useState<boolean>(false)
    const [updataCartProduct,setUpdataCartProduct]=useState<boolean>(false)
    const [token,setToken]=useState<any>(null)
    const [details,setdetails]=useState<any>([])
    const [openFeature,setOpenFeature]=useState<boolean>(false)
    let dispatch=useDispatch()
    let update=useSelector((state:any)=>state.update)
    let nav=useRouter()

    
    useEffect(()=>{
        if(typeof window !== undefined){
            let dataLoacl=localStorage.getItem('cart')
            setDataCart(dataLoacl?JSON.parse(dataLoacl):[])
            setToken(Cookies.get('token'))

        }
        
        
    },[update])


    function total(data:[]){
        let total=0
        data.map((item:itemTotal)=>total+=Number((item.price-(item.price*(item.discountPercentage/100)))*item.quantity))
        return total.toFixed(2)    
    }


    function handleMove(id:number){
        nav.push(`/home/products/${id}`)
        setOpenLinks(false)
    }

    function deleteItem(array:[],id:number){
        let items=array.filter((item:any)=>item.id !== id)
        setDataCart(items)
        localStorage.setItem('cart',JSON.stringify(items))

        updateCart()
        setUpdataCartProduct(!updataCartProduct)
        dispatch(updataCartProductfun(!updataCartProduct))
    }
    function updateCart(){
        setUpdata(!updata)
        dispatch(updateStatus(!updata))

    }
    

  return (
    <>
    <div className={`bg-white min-w-[250px] sm:min-w-[300px] p-3 absolute top-[50px] right-[50%] translate-x-[50%] rounded-lg text-center z-10  `}>
        <div className=' absolute  top-[-10px] left-[50%] translate-x-[-50%] ' style={{borderWidth:"10px" ,borderStyle:"solid",borderColor:"transparent transparent black transparent"}}></div>
        <h2 className='font-semibold text-lg my-2'>{t('yourCart')}</h2>
        <div className='flex flex-col items-center gap-3 max-h-[300px] overflow-y-scroll scrollbar-none'>{/* style scrollbar from app.css */}
            {dataCart?.map((item:item,index:number)=>
                <div key={index} className='flex items-center gap-3 border border-white p-2 group hover:border-blue-700 transition2 '>
                    <div className='cursor-pointer' onClick={()=>handleMove(item.id)}  >
                    <Image width={1000} height={1000} src={item.images[0]} alt="product" className='min-w-[80px] min-h-[100px]' />
                    </div>
                        
                    <div className='group-hover:text-blue-600 transition2'>
                        <h1 className='text-xl font-semibold' >{i18n.language=== "en"?item.title:""}</h1>
                        

                        <div className='flex justify-around items-center gap-3'>
                            <p className='text-lg font-semibold'> ${(item.price-(item.price*(item.discountPercentage/100))).toFixed(2)}</p>
                            <button onClick={()=>deleteItem(dataCart,item.id)} className='py-1 px-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition2'>{t('delete')}</button>
                        </div>
                        <div className='flex justify-between items-center gap-3'>
                            <p className='text-lg '> quantity:</p>
                            <p className='text-lg font-semibold'> ({item.quantity})</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <div className=' mt-5'>
            <div className='flex justify-between items-center text-xl'><span className='font-light'>Total </span> <span className='font-semibold'>${total(dataCart)}</span></div>
            <button onClick={()=>{token?setOpenFeature(true):nav.push('/register')}} className='text-white bg-gray-800 px-4 py-2 rounded-md mt-3 hover:bg-gray-700 transition2-all duration-300 '>{t("checkout")}</button>
        </div>
        


    </div>
    {openFeature?
        <Feature setOpenFeature={setOpenFeature}/>
        :
        null
    }
    </>
  )
}


