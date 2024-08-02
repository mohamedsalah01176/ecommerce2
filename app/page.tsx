
import { cookies } from "next/headers"


export default async function Page({context}:any) {

  let token=cookies().get("token")
  let URL=process.env.NEXT_PUBLIC_URL
  let resOffers=await fetch(`${URL}/products?limit=10&skip=10`, { 
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token?.value}`,
      'Content-Type': 'application/json'
    },
    next: { revalidate: 120 }//second
  });
  let dataOffers=await resOffers.json()
  
  console.log(dataOffers)

  let resCategory=await fetch(`${URL}/products/category-list`, { 
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token?.value}`,
      'Content-Type': 'application/json'
    },
    next: { revalidate: 120 }//second
  });

 
  return (
      <div className='relative '>

      
      </div>
      
  )
 
}
