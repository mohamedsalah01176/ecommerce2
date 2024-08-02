"use client"
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { updateStatus } from '../../../redux/slice/slicecart';
import AOS from 'aos';



interface item {
  color_id:string,
  en_name: string,
  ar_name: string,
  comment:string,
  date:string,
  rating:number

}
interface props {
    product: {
        id: number,
        title: string,
        brand: string,
        thumbnail: string,
        description: string,
        images: string[],
        rating: number,
        price: number,
        discountPercentage: number,
        reviews:[]
    }
    
    
  }
export default function ShowItem({product}:props) {
  const[cart,setCart]=useState<any>([])
  const[update,setUpdate]=useState<any>(false)
  const[token,seToken]=useState<any>(null)
  const [quantity, setQuantity] = useState(1);
  const [selection, setSelection] = useState('decription');
  let dispatch=useDispatch()
  let nav=useRouter()
    let{t,i18n}=useTranslation()

    console.log(product)

    useEffect(()=>{
      if(typeof window !== undefined){
          let datalocal=localStorage.getItem("cart")
          setCart(datalocal?JSON.parse(datalocal):[])
          seToken(Cookies.get('token'))
          AOS.init();
          AOS.refresh()
      }
  },[])
  function addArray(idItem:number){
    // setArray((prevState:any) => [...prevState, product])
    //previt cart
    
    let existItem=cart.find((item:any)=>item.id === product.id)

    if(existItem){
      setCart((prefCart:any)=>prefCart.map((item:any)=>
        item.id ===product.id ?{...item,quantity:quantity}: item
      ))
    }else{
      setCart((prevCart:any)=>[...prevCart,{...product,quantity:1}])
    }
    
  }
  function updateCart(){
    setUpdate(!update)
    dispatch(updateStatus(!update))
    
  }
  
  
  useEffect(()=>{
    updateCart()
    localStorage.setItem("cart",JSON.stringify(cart))

  },[cart])

  


  return (
    <div className='overflow-hidden flex justify-center flex-col md:flex-row items-center gap-10 p-3'>
    <div className=' text-center ' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
        <Image width={400} height={400} src={product.thumbnail?product.thumbnail:"/R.png"} alt="product" className='h-[300px] min-w-[300px]  rounded-xl ' style={{boxShadow:"2px 2px 30px #ccc"}}  />
        <div className='flex items-center gap-2' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
          {product.images?.map((item:string,index:number)=>
              <Image width={200} height={200} key={index} src={item} alt="product" className='h-[100px] w-[100px] mt-4'  />
          )}
        </div>

    </div >
    <div className='flex gap-3 flex-col lg:w-1/2' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
        <p className='text-sm text-gray-400'>{product.brand}</p>
        <h1 className='text-3xl font-bold '>{i18n.language === "en"? product.title:""}</h1>
        <div className='flex gap-3 justify-between items-center ' >
          <div className='flex items-center'>
            <p className='text-2xl font-bold mx-2'>{(product.price-(product.price*(product.discountPercentage/100))).toFixed(2)}$</p>
            <p className='line-through text-lg font-semibold text-red-600'>{product.price}$</p>
          </div>
            <Rating name="half-rating-read" dir='ltr' value={ product?.rating} precision={0.1} readOnly />
        </div>
        <div className='flex items-center gap-5'>
          <button onClick={()=>setSelection('decription')} className='text-xl font-normal'>description</button>
          <button onClick={()=>setSelection('reviews')} className='text-xl font-normal'>reviews</button>
        </div>
        {selection === 'decription'?
        <p className='text-lg text-gray-400 w-full min-h-[100px]'>{i18n.language === "en"?product.description:""}</p>
        :selection === 'reviews'?
        <div className='text-lg text-gray-400 w-full h-[130px] overflow-y-scroll pb-5 scrollbar-none'>
          {product.reviews.map((item:item,index:number)=>
          <div key={index} className='border p-2 rounded-lg w-full'>
            <p className='text-lg text-gray-500 text-right'>{item.date.slice(0,10)}</p>
            <div className='flex justify-between items-center '>
              <p>{item.comment}</p>
              {item.rating?
                <Rating name="half-rating-read" dir='ltr' className='text-lg' value={item.rating} precision={0.1} readOnly />
            :
            null
            }
            </div>
          </div>
          )}
        </div>
        :
        null
        }
        <div className='flex justify-center lg:justify-between gap-5 items-center flex-wrap'>
        </div>
          <div className='flex justify-between items-center'>
            <button onClick={()=>{token?addArray(product.id):nav.push('/register')}}  className='py-2 px-4 bg-gray-800 hover:bg-black rounded-lg transition2 text-white text-lg w-fit '>{t("ADD TO CART")}</button>
            <div className='flex items-center gap-1'>
              <button className='bg-black  text-3xl font-bold text-white rounded-full w-[40px] h-[40px]' onClick={()=>setQuantity(quantity+1)}>+</button>
              <input title='Enter quantity' type='text' value={quantity} onChange={(e:any)=>setQuantity(e.target.value)} className='border max-w-[70px] p-2'/>
              <button className='bg-black  text-3xl font-bold text-white rounded-full w-[40px] h-[40px]' onClick={()=>setQuantity(quantity > 1 ?quantity-1:1)}>-</button>
            </div>
          </div>
        </div>
    </div>
  )
}
