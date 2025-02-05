"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
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
        <Image
          src="/shirt.jpg"
          height={300}
          width={300}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <button>
          <MdKeyboardArrowDown />
        </button>
      </div>
      {view && session && (
        <div className="absolute top-16 right-5 lg:right-10 h-auto w-80 lg:w-96 bg-slate-200 rounded-xl p-5 text-lg flex flex-col gap-3 z-50 shadow-xl">
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="/shirt.jpg"
                height={300}
                width={300}
                alt="avatar"
                className="w-14 lg:w-20 rounded-full"
              />
            </div>
            <div className="text-lg">
              <h1 className="text-black">{session.user.name}</h1>
              <h1 className="text-gray-500">{session.user.email}</h1>
            </div>
          </div>
          <hr />
          <div className=" hover:bg-slate-200 rounded-lg">
            <Link href="" className="lg:px-5">
              My Profile
            </Link>
          </div>
          <div className="pt-3 hover:bg-slate-200 rounded-lg">
            <Link href="" className="lg:px-5">
              Account Settings
            </Link>
          </div>
          <div
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="pt-3 hover:bg-slate-200 rounded-lg cursor-pointer lg:px-5"
          >
            Log out
          </div>
        </div>
      )}
    </div>
  );
};;

export default Account;
