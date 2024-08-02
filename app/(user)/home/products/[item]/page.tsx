
import ShowItem from '@/app/(user)/home/component/ShowItem';
import { cookies } from 'next/headers';



export default async function Page(params:any) {
    let id=params.params.item
    let token=process.env.NEXT_PUBLIC_TOKEN
    let URL=process.env.NEXT_PUBLIC_URL


    let res= await fetch(`${URL}/products/${id}`,{method:"GET",
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
        next:{revalidate:120}
    })
    let product=await res.json()
    console.log("DD",product)

        return (
          <div className='w-[80%] mx-auto flex justify-center items-center flex-col sm:flex-row gap-7 mt-4 p-4'>

            <ShowItem product={product}/>

          </div> 
        )
}
