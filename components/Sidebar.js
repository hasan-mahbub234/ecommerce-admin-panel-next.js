"use client";
import { SidebarMenu } from "@/constants/AllConstants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Sidebar() {
  const pathname = usePathname();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  return (
    <div className="top-0 bottom-0 left-0 absolute bg-slate-900 text-white w-[17%]">
      {/* Heading */}
      <div className="flex flex-row items-center justify-between px-3 py-3 bg-slate-700">
        <h2 className="text-yellow-400 font-poppins font-semibold text-[18px] uppercase">
          Admin panel
        </h2>

        {/* Profile Image Container */}
        <div
          className="relative"
          onMouseEnter={() => setShowProfileDropdown(true)}
          onMouseLeave={() => setShowProfileDropdown(false)}
        >
          <img
            src="/assets/profile.jpg"
            className="w-[35px] h-[35px] rounded-full cursor-pointer"
          />
          {showProfileDropdown && (
            <div className="absolute right-0 top-[25px] mt-2 bg-white text-black shadow-md rounded-sm w-[100px]">
              <Link
                href="/account"
                className="border-b border-b-gray-100 font-lato text-[13px] py-2 px-3 cursor-pointer hover:bg-gray-100"
              >
                Account
              </Link>
              <p className="font-lato text-[13px] py-2 px-3 cursor-pointer hover:bg-gray-100">
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Menu */}
      <div className="mt-10">
        {SidebarMenu.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`flex flex-row items-center hover:bg-slate-800 py-3 px-4 my-3 mx-2 hover:rounded-[8px]  hover:text-slate-200 ${
              pathname === item.link
                ? "bg-slate-800 text-slate-200"
                : "text-slate-400"
            }`}
          >
            {item.icon()}
            <p className="text-[15px] text-lato ml-2">{item.name}</p>
          </Link>
        ))}
      </div>
      {/* User Info */}
      <div className="absolute bottom-10 flex flex-col items-center px-4 py-3 w-full">
        <p className="text-[15px] text-gray-400 font-poppins font-semibold">
          Mahbubul Hasan
        </p>
        <p className="text-[12px] text-gray-500 font-poppins font-[400]">
          hasan.mahbub009@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
