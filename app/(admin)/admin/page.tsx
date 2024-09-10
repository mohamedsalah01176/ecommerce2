import { CgArrowTopRight } from "react-icons/cg";
import { CgArrowBottomRight } from "react-icons/cg";
import ShowDetails from "./component/ShowDetails";
import OrderList from "./component/OrderList";


export default function page() {
  return (
    <div className='text-black w-full bg-slate-100 p-4 min-h-screen'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-4'>
        <ShowDetails title={'Total sells'}  status={'increase'} amount={128.5} precentage={34.7} icon={<CgArrowTopRight className="text-2xl"/> }/>
        <ShowDetails title={'Order value'}  status={'increase'} amount={137.8} precentage={14.7} icon={<CgArrowTopRight className="text-2xl"/>  }/>
        <ShowDetails title={'Daily orders'}  status={'decrease'} amount={100.5} precentage={4.7} icon={<CgArrowBottomRight className="text-2xl"/> }/>
        <ShowDetails title={'Daily Revenue'}  status={'increase'} amount={228.5} precentage={54.7} icon={<CgArrowTopRight className="text-2xl"/> }/>
      </div>
      <OrderList/>
    </div>
  )
}
