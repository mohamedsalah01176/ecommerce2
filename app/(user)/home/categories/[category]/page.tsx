import { cookies } from 'next/headers'
import React, { useState } from 'react'
import Card from '../../component/Card';
import Title from '../../component/Title';
import NoFound from '../../component/NoFound';


interface item{
  item_id:number,
  en_name:string,
  ar_name:string,
  en_description:string,
  ar_description:string,
  rate:number,
  images:[string],
  price_after_discount:number,
  price:number,
  category:{en_name:string, ar_name:string}
}


export default async function page(params:any) {
  let token=process.env.NEXT_PUBLIC_TOKEN
    let URL=process.env.NEXT_PUBLIC_URL
    let category=params.params.category
    let res=await fetch(`${URL}/products/category/${category}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      next: { revalidate: 120 }//second
    });
    let data=await res.json()
    let products=data.products


  return (
    <div>
      <Title title={"Categories"}/>
        {products.length >0?
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 container mx-auto mt-5 p-4'>
                <Card  data={products}/>
          </div>
        :
        <NoFound title={category} />}


    </div>
  )
}
