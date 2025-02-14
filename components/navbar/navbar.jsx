"use client"
import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import Account from './account';
import Link from 'next/link';
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import ToggleSidebar from '../sidebar/toggleSidebar';
import { usePathname } from 'next/navigation';

const Navbar = () => {
      const pathname = usePathname(); // Get current route
  
  return (
    <div className={`flex justify-between  ${pathname==='login'?'bg-[#7d2ce0]':'bg-[#f3f3f3]'}   max-w-screen w-screen z-10 h-[70px] fixed`}  >
      <div className="flex items-center  lg:pl-9 my-4 ">
        {" "}
        <ToggleSidebar/>
        <Link href="/" className="text-lg text-[#7d2ce0] font-bold pl-5">
          Managing Inventory
        </Link>
      </div>
      <div className="flex gap-2 lg:gap-5 lg:px-9 text-2xl items-center">
        {/* <div>
          <IoIosNotifications />
        </div> */}
        <div className="">
          {/* <MdAccountCircle /> */}
          <Account />
        </div>
      </div>
    </div>
  );
}

export default Navbar