"use client"
import React from 'react';
import Link from 'next/link';

import { FaHome, FaArrowLeft, FaArrowRight, FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits, MdCategory } from "react-icons/md";
import { SiNanostores } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { IoAddCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { RiStockLine } from "react-icons/ri";
import { usePathname } from 'next/navigation';
import { useSession, signOut } from "next-auth/react";

const style1 =
  "flex gap-4 items-center hover:bg-[#4a04a3] px-5 py-2 rounded-lg";



const Sidebar = () => {
    const pathname = usePathname(); // Get current route
  
    // Hide sidebar toggle button if on the login page
    if (pathname === "/login") return null;
  return (
    <div className="bg-[#f3f3f3] h-[100ve] w-1/6 hidden lg:block">
      <div className="bg-[#7d2ce0] text-white  h-[calc(100vh-50px)] flex flex-col justify-between  text-sm font-semibold py-5 px-4 rounded-tr-xl fixed mt-[65px]">
        <div>
          <Link href="/" className={`${style1}`}>
            <div>
              <FaHome />
            </div>{" "}
            Home{" "}
          </Link>
          <Link href="/sales" className={`${style1}`}>
            <div>
              <FaArrowLeft />
            </div>{" "}
            Sales{" "}
          </Link>
          <Link href="/stockins" className={`${style1}`}>
            <div>
              <FaArrowRight />
            </div>{" "}
            Stock in{" "}
          </Link>
          <Link href="/products" className={`${style1}`}>
            <div>
              <MdProductionQuantityLimits />
            </div>{" "}
            Products{" "}
          </Link>
          <Link href="/categories" className={`${style1}`}>
            <div>
              <MdCategory />
            </div>{" "}
            Categories{" "}
          </Link>
          <Link href="/stores" className={`${style1}`}>
            <div>
              <SiNanostores />
            </div>{" "}
            Stores{" "}
          </Link>
          <Link href="/users" className={`${style1}`}>
            <div>
              <FaUsers />
            </div>{" "}
            Users{" "}
          </Link>
          <Link href="/settings" className={`${style1}`}>
            <div>
              <IoMdSettings />
            </div>{" "}
            Settings{" "}
          </Link>
        </div>

        <div>
          <Link href="/add_product" className={`${style1}`}>
            <div>
              <IoAddCircleOutline />
            </div>{" "}
            Add Product{" "}
          </Link>
          <div className={`${style1} cursor-pointer`} onClick={() => signOut({ callbackUrl: "/login" })}  >
            <div>
              <IoLogOutOutline />
            </div>{" "}
            Log out{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar