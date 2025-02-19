import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import LinksSection from "./LinksSection";
import Image from "next/image";
import NewsLetterSection from "./NewsLetterSection";
import LayoutSpacing from "./LayoutSpacing";
const socialsData = [
    {
        id: 1,
        icon: <FaTwitter />,
        url: "https://twitter.com",
    },
    {
        id: 2,
        icon: <FaFacebookF />,
        url: "https://facebook.com",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        url: "https://instagram.com",
    },
    {
        id: 4,
        icon: <FaGithub />,
        url: "https://github.com/mohammadoftadeh",
    },
];
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
      <div className="pt-8 md:pt-[50px] bg-[#F0F0F0] px-4 pb-4 ">
        <div className="max-w-frame mx-auto sm:mx-20 md:mx-20">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <h1 className={cn([
            integralCF.className,
            "text-[28px] lg:text-[32px] mb-6",
            ])}>
                REBEL RISHI
              </h1>
              <p className="text-black/60 text-sm mb-9">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex items-center">
                {socialsData.map((social) => (<Link href={social.url} key={social.id} className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5">
                    {social.icon}
                  </Link>))}
              </div>
            </div>
            <div className="hidden lg:grid col-span-9 lg:grid-cols-4 lg:pl-10">
              <LinksSection />
            </div>
            <div className="grid lg:hidden grid-cols-2 sm:grid-cols-4">
              <LinksSection />
            </div>
          </nav>

          <hr className="h-[1px] border-t-black/10 mb-6"/>
          
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
