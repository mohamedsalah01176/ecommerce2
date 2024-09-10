"use client"
import { Rating } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import  { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { updateStatus } from '../../../redux/slice/slicecart'
import Cookies from "js-cookie"
import { useRouter } from 'next/navigation'
import AOS from 'aos';
import { FiEye } from "react-icons/fi";



interface item {
  id: number,
    title: string,
    rating: number,
    discountPercentage: number,
    price: number,
    images:[string],
    
}


export default function Card({data}:any) {
    const[array,setArray]=useState<any>([])
    const[update,setUpdate]=useState<any>(false)
    const[click,setClick]=useState<any>(false)
    const[token,seToken]=useState<any>(null)
    const [cart, setCart] = useState<any>([]);

    let {t,i18n}=useTranslation()
    let dispatch=useDispatch()
    let nav=useRouter()
    let reduxUpdataCartProduct=useSelector((state:any)=>state.update.updataCartProduct)

    useEffect(()=>{
        if(typeof window !== undefined){
            let datalocal=localStorage.getItem("cart")
            setCart(datalocal?JSON.parse(datalocal):[])
            seToken(Cookies.get('token'))
            AOS.init();
            AOS.refresh()
        }
        
      },[reduxUpdataCartProduct])
      
    const handleQuantityChange = (itemId:any, change:any) => {

      
      let item=data.find((item:any)=> item.id ===itemId)
      let existItem=cart.find((item:any)=> item.id ===itemId)
  
      if(existItem){
        setCart((prevCart:any)=>prevCart.map((cartItem:any) => 
          cartItem.id === itemId 
            ? { ...cartItem, quantity: cartItem.quantity + change } 
            : cartItem
        ));
      }else{
          setCart((prevState:any)=>[...prevState , {...item,quantity:1}])
      }

    };
    
    
    function updateCart(){
      setUpdate(!update)
      dispatch(updateStatus(!update))
      
    }
    useEffect(() => {
      if(click){
        localStorage.setItem("cart",JSON.stringify(cart));
      }
      updateCart()
    }, [cart]);
    
  


   





  return (
    <>
    {data.map((item:item,index:number)=>
        <div  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" key={index} className=' pt-3 min-h-[500px] text-center  rounded-lg transition2    relative group overflow-hidden '   >
        <Link href={`/home/products/${item.id}`} className=''>

            <Image width={200} height={200} loading="lazy" className='border border-black rounded-lg  h-[300px] w-full px-5 mx-auto ' src={item.images[0]} alt="product" />
            <div className='flex group-hover:opacity-100 opacity-0 transition-all duration-500   flex-col justify-center items-center gap-1 absolute top-3 left-0 h-[300px] w-full bg-[#00000033] rounded-lg '>
              <p className='text-lg text-white font-semibold   '>VIEW</p>
              <FiEye className='text-3xl text-white'/>
            </div>
            
        </Link>
        <div className='px-4 pt-2 '>
            {item.rating?
            <Rating name="half-rating-read" dir='ltr' className='text-lg' value={item.rating} precision={0.1} readOnly />
            :
            null
            }
            <h1 className='font-semibold'>{item.title}</h1>

            <div className='flex justify-center gap-3 items-center mb-2'>
                <p className=' text-lg font-semibold'>{(item.price-(item.price*(item.discountPercentage/100))).toFixed(2)}</p>
                <p className='line-through text-lg font-semibold text-red-600'>{item.price}</p>
            </div>

        </div>
            <button onClick={()=>{token?handleQuantityChange(item.id,1):nav.push('/');setClick(true)}}  className='py-2 px-4 bg-gray-700 hover:bg-black rounded-lg transition2 text-white  min-w-[150px] mx-auto absolute  left-[50%] translate-x-[-50%]  '>{t("ADD TO CART")}</button>
    </div>
    
    )
    }
    </>
  )
}
