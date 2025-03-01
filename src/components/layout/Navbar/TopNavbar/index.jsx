"use client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React, { useState } from "react";
import { MenuList } from "./MenuList";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import { TfiReload } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileSidebar from "@/components/layout/Navbar/mobile-sidebar"
import { data } from "@/lib/data/navbar/nav";
import CartBtn from "@/components/layout/Navbar/TopNavbar/CartBtn";




const TopNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-[#3d1152] text-white z-20">
      <div className="flex sm:mx-6 md:mx-10 mx-auto relative max-w-frame justify-between items-center py-5 md:py-6 px-4 xl:px-0">
        {/* Logo on the Left */}
        <div className="flex items-start">
          <Link
            href="/"
            className={cn([
              "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10",
            ])} >
            <img src="/images/logo/logo.png" className="w-[100px] md:w-[200px]" />
          </Link>
        </div>

        {/* Mobile Menu Button on the Right */}
        <div className="flex items-end">
          <div className="block md:hidden">
            <div className="flex gap-2">
              <div className="bg-[#fe4536] p-2 rounded-full cursor-pointer hover:opacity-75">
                <TfiReload size="18" />
              </div>
              <div className="bg-[#fe4536] p-2 rounded-full cursor-pointer hover:opacity-75">
                <IoIosHeartEmpty size="18" />
              </div>

              <Link href={"/cart"}>
                <div className="bg-[#fe4536] p-2 rounded-full cursor-pointer hover:opacity-75">
                  <IoBagHandleOutline size="20" />
                </div>
              </Link>
              <button
                onClick={toggleSidebar}
                className="block md:hidden bg-[#fe4536] p-2  rounded-full text-white focus:outline-none" >
                <CgDetailsMore size="18" />
              </button>
            </div>
          </div>

        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && <MenuItem label={item.label} url={item.url} />}
                {item.type === "MenuList" && <MenuList data={item.children} label={item.label} />}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section - Responsive Layout */}
        <div className="hidden md:flex ml-auto items-center gap-2 flex-wrap">
          <div className="bg-[#502963] p-2 mx-4 rounded-full flex items-center cursor-pointer hover:opacity-75">
            <div className="p-2">
              <TfiReload size="24" />
            </div>
            <div className="pr-4 text-sm">
              <div className="font-semibold">24/7 Support:</div>
              <div>+888-0000-000</div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="bg-[#fe4536] p-2 rounded-full cursor-pointer hover:opacity-75">
              <TfiReload size="24" />
            </div>
            <div className="bg-[#fe4536] p-2 rounded-full cursor-pointer hover:opacity-75">
              <IoIosHeartEmpty size="24" />
            </div>
            <Link href={"/cart"}>
            <div className="bg-[#fe4536] p-2 rounded-full cursor-pointer hover:opacity-75">
              <IoBagHandleOutline size="24" />
            </div>
            </Link>
            <div className="bg-[#fe4536] p-2 rounded-full cursor-pointer hover:opacity-75">
              <CgDetailsMore size="24" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} data={data} />

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default TopNavbar;