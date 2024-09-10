import Slider from "./component/Slider";
import { dataSlideHome } from "../../helpers/DataSliderHome";
import Category from "./component/Category";
import Offers from "./component/Offers";
import Title from "./component/Title"; 


export  default async function page() {
  let token=process.env.NEXT_PUBLIC_TOKEN 
  let URL=process.env.NEXT_PUBLIC_URL
  let resOffers=await fetch(`${URL}/products?limit=10&skip=10`, { 
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    next: { revalidate: 120 }//second
  });
  let dataOffers=await resOffers.json()
  

  let resCategory=await fetch(`${URL}/products/category-list`, { 
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    next: { revalidate: 120 }//second
  });
  let categoryList=await resCategory.json()
  
 
  return (
      <div className='relative '>
          <Slider sliderHome={dataSlideHome} />
          <Title title={'Categories'}/>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  p-5 gap-2 '>
            <Category categories={categoryList}/>
          </div>
            <Title title={'offers'}/>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10  p-10 xl:p-20'  id="offers">
              <Offers offers={dataOffers.products} />
            </div>

      
      </div>
      
  )
 
}
