
import { cookies } from 'next/headers'
import NoFound from '../component/NoFound'
import Title from '../component/Title'
import Card from '../component/Card'



interface item{
  item_id:number,
  en_name:string,
  ar_name:string,
  en_description:string,
  ar_description:string,
  rate:number,
  images:[string],
  price_after_discount:number,
  price:number
}

export default async function page(params:any) {
  let URL=process.env.NEXT_PUBLIC_URL
  let token:any=cookies().get("token")
  let search:string=params.searchParams.str
let res=await fetch(`${URL}/products?limit=50`,{method:"GET",
  headers:{
    'Authorization':`Bearer ${token?.value}`,
    'Content-Type': 'application/json' 
},
next:{revalidate:120}//second
}
)

let data=await res.json()
let data2= data.products


// let item=data2.filter((item:{title:string})=>item.title.toLowerCase().indexOf(search?.toLowerCase()) !==-1)
'https://dummyjson.com/products/search?q=phone'
let resSearch=await fetch(`${URL}/products/search?q=${search}`,{method:"GET",
  headers:{
    'Authorization':`Bearer ${token?.value}`,
    'Content-Type': 'application/json' 
  },
}
)

let dataSearch=await resSearch.json()
console.log(dataSearch.products)

let product=search?dataSearch.products:data2
  return (

    
    <div>
        <Title title={"products"}/>

        {product.length >0?
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-10 xl:p-20 mt-5 '>
    
    
        <Card data={product}/>
        
        </div>
        :
        <>
          <NoFound title={search}/>
          <h1 className='text-3xl flex justify-center mt-3 items-center text-red-600 font-semibold'>you should search By English language </h1>
        </>

         }
    </div>
  )
}
