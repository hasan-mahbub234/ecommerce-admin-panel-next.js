"use client";
import { SidebarMenu } from "@/constants/AllConstants";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  // console.log(user);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-2 left-2 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md bg-slate-800 text-white"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 left-0 bg-slate-900 text-white w-[17%] min-w-[250px] md:block z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Heading */}
        <div className="flex flex-row items-center justify-between px-3 py-3 bg-slate-700">
          <h2 className="text-yellow-400 font-poppins font-semibold text-[18px] uppercase">
            Admin Panel
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
              alt="Profile"
            />
            {showProfileDropdown &&
              (user ? (
                <div className="absolute right-0 top-[25px] mt-2 bg-white text-black shadow-md rounded-sm w-[100px]">
                  <Link
                    href="/account"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <p className="border-b border-b-gray-100 font-lato text-[13px] py-2 px-3 cursor-pointer hover:bg-gray-100">
                      Account
                    </p>
                  </Link>
                  <p
                    onClick={() => logout()}
                    className="font-lato text-[13px] py-2 px-3 cursor-pointer hover:bg-gray-100"
                  >
                    Logout
                  </p>
                </div>
              ) : (
                <div className="absolute right-0 top-[25px] mt-2 bg-white text-black shadow-md rounded-sm w-[100px]">
                  <Link href="/login">
                    <p className="font-lato text-[13px] py-2 px-3 cursor-pointer hover:bg-gray-100">
                      Login
                    </p>
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Menu */}
        {user && (
          <div className="mt-10 overflow-y-auto thin-scrollbar h-[calc(100%-180px)]">
            {SidebarMenu.map((item, index) => (
              <div key={index}>
                {item.link ? (
                  <Link
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex flex-row items-center hover:bg-slate-800 py-3 px-4 my-3 mx-2 hover:rounded-[8px] hover:text-slate-200 ${
                      pathname === item.link
                        ? "bg-slate-800 text-slate-200"
                        : "text-slate-400"
                    }`}
                  >
                    {item.icon()}

                    <p className="text-[15px] text-lato ml-2">{item.name}</p>
                  </Link>
                ) : (
                  <div
                    href={item.link}
                    // onClick={() => setMobileMenuOpen(false)}
                    className={`flex flex-col hover:bg-slate-800 py-3 px-4 my-3 mx-2 hover:rounded-[8px] hover:text-slate-200 cursor-pointer ${
                      showItems
                        ? "bg-slate-800 text-slate-200"
                        : "text-slate-400"
                    }`}
                  >
                    <div className="flex flex-row items-center mb-2">
                      {item.icon()}
                      <div
                        className="flex flex-row justify-between items-center w-full"
                        onClick={() => setShowItems((prev) => !prev)}
                      >
                        <p className="text-[15px] text-lato ml-2">
                          {item.name}
                        </p>
                        {item.items && (
                          <i className="fa-solid fa-chevron-down"></i>
                        )}
                      </div>
                    </div>
                    {showItems &&
                      item.items?.map((web, webIndex) => (
                        <div
                          key={webIndex}
                          className="flex flex-col py-2 border-[1px] border-white/50 my-2"
                        >
                          <div
                            className="flex flex-row items-center w-full cursor-pointer  px-2"
                            onClick={() => toggleMenu(webIndex)}
                          >
                            <img
                              src={web.image}
                              className="w-[15px] h-[15px] mr-2"
                            />
                            <div className="flex flex-row justify-between  items-center w-full">
                              <p className="text-[13px] text-lato ml-2">
                                {web.name}
                              </p>
                              <i className="fa-solid fa-chevron-down text-[12px] text-gray-400"></i>
                            </div>
                          </div>
                          {/* menus */}
                          {openMenus[webIndex] && (
                            <div className="flex flex-col px-1 mt-2">
                              {web.menu.map((menu, index) => (
                                <Link
                                  key={index}
                                  href={menu.link}
                                  className={`flex flex-row items-center mb-2 py-1 px-2 text-gray-400 ${
                                    pathname === menu.link
                                      ? "bg-slate-700 text-slate-300"
                                      : "text-slate-400"
                                  }`}
                                >
                                  {menu.icon()}

                                  <p className="text-[12px] text-lato ml-2">
                                    {menu.name}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* User Info */}
        {user ? (
          <div className="absolute bottom-10 flex flex-col items-center px-4 py-3 w-full">
            <p className="text-[15px] text-gray-400 font-poppins font-semibold">
              {user?.fullname}
            </p>
            <p className="text-[12px] text-gray-500 font-poppins font-[400]">
              {user?.email}
            </p>
          </div>
        ) : (
          <div className="absolute bottom-10 flex flex-col items-center px-4 py-3 w-full">
            <p className="text-[15px] text-gray-400 font-poppins font-semibold">
              Not logged in. please{" "}
              <Link href="/login" className="border-b">
                login
              </Link>
            </p>
          </div>
        )}
      </div>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
