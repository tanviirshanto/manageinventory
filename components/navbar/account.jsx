"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowDown,MdAccountCircle } from "react-icons/md";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";


const Account = () => {
  const { data: session } = useSession();
  const [view, setView] = useState(false);
  const pathname = usePathname(); // Get current route

  if (pathname === "/login") return null;


  return (
    <div className="flex items-center gap-3 text-2xl ">
      <div
        onClick={() => setView(!view)}
        className="flex p-2 gap-3 hover:bg-gray-300 rounded-2xl cursor-pointer select-none"
      >
        <div className="text-2xl"><MdAccountCircle /></div>
        <button>
          <MdKeyboardArrowDown />
        </button>
      </div>
      {view && session && (
        <div className="absolute top-16 right-5 lg:right-10 h-auto w-80 lg:w-96 bg-[#7d2ce0] text-slate-100 rounded-xl p-5 text-lg flex flex-col gap-3 z-50 shadow-xl">
          <div className="flex items-center gap-4">
            <div className=" text-6xl">
              {/* <Image
                src="/shirt.jpg"
                height={300}
                width={300}
                alt="avatar"
                className="w-14 lg:w-20 rounded-full"
              /> */}
              <MdAccountCircle />
            </div>
            <div className="text-lg">
              <h1 className="">{session.user.name}</h1>
              <h1 className="text-gray-300">{session.user.email}</h1>
            </div>
          </div>
          <hr />
          <div className=" hover:bg-slate-200 hover:text-slate-900 py-1 rounded-lg">
            <Link href="/settings" className="lg:px-5" onClick={() => {
              setView(false);}}>
              My Profile
            </Link>
          </div>
          {/* <div className="pt-3 hover:bg-slate-200 rounded-lg">
            <Link href="" className="lg:px-5">
              Account Settings
            </Link>
          </div> */}
          <div
            onClick={() => {
              setView(false);
              signOut({ callbackUrl: "/login" })}}
            className="py-1 hover:bg-slate-200 hover:text-slate-900 rounded-lg cursor-pointer lg:px-5"
          >
            Log out
          </div>
        </div>
      )}
    </div>
  );
};;

export default Account;
