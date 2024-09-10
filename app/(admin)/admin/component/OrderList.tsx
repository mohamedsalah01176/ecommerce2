"use client"
import { dataOrders } from "@/app/helpers/DataOrderList"

export default function OrderList() {
    function ckeckAll(){
        let allCheckboxs:any=document.querySelectorAll('input[type="checkbox"]')
        if(allCheckboxs[0].checked === true){
            allCheckboxs.forEach((checkbox:any) => checkbox.checked = true)
        }else{
            allCheckboxs.forEach((checkbox:any) => checkbox.checked = false)
        }
        // console.log(allCheckboxs)
    }

  return (
        <table className='w-full  text-center bg-white  border-collapse ' cellPadding={10} >
            <caption>Order List</caption>
            <thead>
                <tr className='border-b-2'>
                    <th><input type="checkbox" title="checkbox" onClick={()=>ckeckAll()} /></th>
                    <th>Order Id</th>
                    <th>Client Name</th>
                    <th>Payment Method</th>
                    <th>Date</th>
                    <th>State</th>
                    <th>Total</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {dataOrders.map((order,index)=>
                    <tr key={index} className='hover:bg-[#eee] transition-all duration-300 border-b-2 '>
                        <td><input id="ckeckBox" type="checkbox" title="checkbox" /></td>
                        <td>{order.orderId}</td>
                        <td>{order.customerName}</td>
                        <td>{order.paymentMethod}</td>
                        <td>{order.date}</td>
                        <td>{order.status}</td>
                        <td>{order.total}</td>
                        <td>...</td>
                    </tr>
                )}
            </tbody>
        </table>
  )
}
