import Card from "./Card";

interface props{
    offers: [];  
 
}
interface item{
    item_id: number;
    images: string[];
    en_name: string;
    ar_name: string;
    rate: number;
    price_after_discount: number;
    price: number;
}
export default function Offers({offers}:props) {



  return (
    <>
        <Card data={offers}/>
    </>
  )
}
