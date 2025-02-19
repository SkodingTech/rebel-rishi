import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";
const Header = () => {
  return (

    <section className="mx-4 sm:mx-20 md:mx-20 bg-[#ff4613] rounded-3xl text-white p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center">
      <div className="text-center sm:text-left">
      <p className="text-sm text-black sm:text-base mb-10">Rooted in the rich heritage</p>
        <h2 className="text-4xl sm:text-4xl font-bold tracking-wide" sty>Modern but <br /> Traditional</h2>
        <p className="text-base sm:text-lg mt-2">We design pieces that evoke sophistication and timeless charm.</p>
        <button className="bg-white text-black rounded-3xl px-4 py-2 mt-4">Shop Now</button>
      </div>
      <div className="">
      <img
        src="/images/1.png"
        width={400}
        height={400}
        alt="Hero"
        className="w-full sm:w-[400px] mt-6 sm:mt-0"
      />
      </div>
      
    </section>

  );
};
export default Header;
