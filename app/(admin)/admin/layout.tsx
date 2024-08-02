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
        {children}
    </div>
  )
}
