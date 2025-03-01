import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import Link from "next/link";
import LinksSection from "./LinksSection";
import Image from "next/image";
import NewsLetterSection from "./NewsLetterSection";
import LayoutSpacing from "./LayoutSpacing";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa6";

const paymentBadgesData = [
  {
    id: 1,
    srcUrl: "/icons/Visa.svg",
  },
  {
    id: 2,
    srcUrl: "/icons/mastercard.svg",
  },
  {
    id: 3,
    srcUrl: "/icons/paypal.svg",
  },
  {
    id: 4,
    srcUrl: "/icons/applePay.svg",
  },
  {
    id: 5,
    srcUrl: "/icons/googlePay.svg",
  },
];
const Footer = () => {
  return (<footer className="mt-10">
    <div className="relative">
      <div className="absolute bottom-0 w-full h-1/2 bg-[#F0F0F0]"></div>
      {/* <div className="px-4">
          <NewsLetterSection />
        </div> */}
    </div>
    <div className="pt-8 md:pt-[50px] bg-blue-50 px-4 pb-4 ">
      <div className="max-w-frame mx-auto sm:mx-20 md:mx-20">
        <nav className="lg:grid lg:grid-cols-12 mb-8">
          <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
            <img src='/images/logo/icon.png' className='max-w-[100px]' />
            <p className="text-black/60 text-sm mb-9">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>

            <div className="flex items-center my-2"> <div className="bg-white rounded-full p-1 mr-2"><IoLocationOutline size="20" /> </div> India </div>
            <div className="flex items-center my-2"> <div className="bg-white rounded-full p-1 mr-2"><LuPhoneCall size="20" /> </div> +000-1234-456789 </div>
            <div className="flex items-center my-2"> <div className="bg-white rounded-full p-1 mr-2"><MdOutlineEmail size="20" /> </div> info@gmail.com </div>
            <div className="flex items-center my-2"> <div className="bg-white rounded-full p-1 mr-2"><FaFax size="20" /> </div> +000-1234-55000 </div>
          </div>
          <div className="hidden lg:grid col-span-9 lg:grid-cols-3 lg:pl-10">
            <LinksSection />
          </div>
          <div className="grid lg:hidden grid-cols-2 sm:grid-cols-3">
            <LinksSection />
          </div>

        </nav>

        <hr className="h-[1px] border-t-black/10 mb-6" />

      </div>

      <div className="flex  text-center bg-[#3d1152] h-14 justify-center items-center mb-2">
        <p className="text-sm text-center  text-white  mb-4 sm:mb-0 sm:mr-1">
          ©  2025 Rebel.{" "}
          <Link href="#" className="text-white font-medium">
            All Right Reserved
          </Link>
        </p>
      </div>
      <LayoutSpacing />
    </div>
  </footer>);
};
export default Footer;
