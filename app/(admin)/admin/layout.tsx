import React from 'react'
import NavBarAdmin from './component/NavBar';
import SideBar from './component/sideBar';

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
  return (
    <div>
        <NavBarAdmin/>
        <SideBar/>
        <div className='ml-[150px] sm:ml-[220px] mt-[115px]'>
          {children}
        </div>
    </div>
  )
}
