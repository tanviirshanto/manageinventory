"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { FaHome, FaArrowLeft, FaArrowRight, FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits, MdCategory } from "react-icons/md";
import { SiNanostores } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { IoAddCircleOutline, IoLogOutOutline } from "react-icons/io5";

const style1 =
  "flex gap-4 items-center hover:bg-[#4a04a3] px-5 py-2 rounded-lg transition duration-300";

const sidebarItems = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/sales", label: "Sales", icon: <FaArrowLeft /> },
  { href: "/stockins", label: "Stock in", icon: <FaArrowRight /> },
  {
    href: "/products",
    label: "Products",
    icon: <MdProductionQuantityLimits />,
  },
  { href: "/categories", label: "Categories", icon: <MdCategory /> },
  { href: "/stores", label: "Stores", icon: <SiNanostores /> },
  { href: "/users", label: "Users", icon: <FaUsers /> },
  { href: "/settings", label: "Settings", icon: <IoMdSettings /> },
];

const ToggleSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname(); // Get current route

  // Hide sidebar toggle button if on the login page
  if (pathname === "/login") return null;

  const closeSidebar = () => setIsVisible(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        aria-label="Toggle Sidebar"
        className="font-bold text-xl lg:hidden pl-5"
        onClick={() => setIsVisible(!isVisible)}
      >
        <CgMenuLeft />
      </button>

      {/* Overlay */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 backdrop-blur-xl transition-opacity"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-2/3 sm:w-1/3 bg-[#7d2ce0] text-white h-full flex flex-col justify-between py-5 px-4 rounded-tr-xl shadow-lg transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2">
          <button
            aria-label="Close Sidebar"
            className="font-bold text-xl lg:hidden pt-2"
            onClick={closeSidebar}
          >
            <CgMenuRight />
          </button>
          {sidebarItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={closeSidebar}
              className={style1}
            >
              {icon} {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Link href="/add_product" onClick={closeSidebar} className={style1}>
            <IoAddCircleOutline /> Add Product
          </Link>
          <button
            className={`${style1} w-full text-left`}
            onClick={closeSidebar}
          >
            <IoLogOutOutline /> Log out
          </button>
        </div>
      </div>
    </>
  );
};

export default ToggleSidebar;
