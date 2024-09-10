
interface props{
    title:string,
    amount:number,
    status:string,
    icon:any,
    precentage:number,
}
export default function ShowDetails({title,amount,status,icon,precentage}:props) {
  return (
    <div className='bg-white p-2 rounded-lg space-y-2'>
      <p className='text-sm text-slate-500'>{title}</p>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-lg'>{amount}$</h2>
        <div className={`${status=== 'increase'?"text-green-500 ":"text-red-500 "}flex items-center`}>
          {icon}
          <span>{precentage}%</span>
        </div>
      </div>
      <p className='text-sm text-slate-500 text-right'>compare to jun 2023</p>
    </div>
  )
}
