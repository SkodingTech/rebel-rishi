import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { MenuList } from "./MenuList";
import { NavigationMenu, NavigationMenuList, } from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";
import { TfiReload } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";


const data = [
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Men's clothes",
        url: "/shop#men-clothes",
        description: "In attractive and spectacular colors and designs",
      },
      {
        id: 12,
        label: "Women's clothes",
        url: "/shop#women-clothes",
        description: "Ladies, your style and tastes are important to us",
      },
      {
        id: 13,
        label: "Kids clothes",
        url: "/shop#kids-clothes",
        description: "For all ages, with happy and beautiful colors",
      },
      {
        id: 14,
        label: "Bags and Shoes",
        url: "/shop#bag-shoes",
        description: "Suitable for men, women and all tastes and styles",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "On Sale",
    url: "/shop#on-sale",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "New Arrivals",
    url: "/shop#new-arrivals",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Brands",
    url: "/shop#brands",
    children: [],
  },
];
const TopNavbar = () => {
  return (

    <nav className="sticky top-0 bg-[#3d1152] text-white z-20">
      <div className="flex sm:mx-6 md:mx-10 mx-auto relative max-w-frame center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-start sm:ml-10">
          <div className="block md:hidden mr-4">
            {/* <ResTopNavbar data={data} /> */}
          </div>
          <Link href="/" className={cn([
            integralCF.className,
            "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10",
          ])}>
            REBEL RISHI
          </Link>
        </div>

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
        <div className="sm:flex hidden md:flex ml-auto items-center gap-2 flex-wrap">
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
            <div className="bg-[#fe4536] p-2 rounded-full cursor-pointer hover:opacity-75">
              <IoBagHandleOutline size="24" />
            </div>
            <div className="bg-[#fe4536] p-2 rounded-full cursor-pointer hover:opacity-75">
              <CgDetailsMore size="24" />
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
};
export default TopNavbar;
