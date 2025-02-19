import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TfiReload } from "react-icons/tfi";
import { HiOutlineTruck } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineHelpOutline } from "react-icons/md";



const TopBanner = () => {
  return (

    <div className="bg-[#fe4536] text-white text-center py-2 px-2 sm:px-4 xl:px-0">
      <div className="flex flex-col sm:flex-row sm:mx-6 md:mx-10 mx-auto relative max-w-frame justify-between items-center xl:px-0 gap-y-2 sm:gap-y-0">

        <div className="flex flex-col sm:flex-row items-center sm:ml-10 gap-x-4 text-sm">
          <div className="flex items-center">
            <HiOutlineTruck size="20" className="mr-2" />
            <div>Get free home delivery (Order more than $300)</div>
          </div>

          <div className="flex items-center">
            <MdOutlineMailOutline size="20" className="mr-2" />
            <div>office@email.com</div>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex items-center cursor-pointer hover:opacity-75">
            <IoLocationOutline size="24" className="mr-1" />
            <div className="text-sm font-semibold">India</div>
          </div>

          <div className="flex items-center cursor-pointer hover:opacity-75">
            <AiOutlineUser size="24" className="mr-1" />
            <div className="text-sm font-semibold">Login</div>
          </div>

          <div className="flex items-center cursor-pointer hover:opacity-75">
            <MdOutlineHelpOutline size="24" className="mr-1" />
            <div className="text-sm font-semibold">Help</div>
          </div>
        </div>

      </div>
    </div>



  );
};
export default TopBanner;
