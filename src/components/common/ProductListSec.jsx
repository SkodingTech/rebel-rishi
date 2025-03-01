import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductListSec = ({ title, data, viewAllLink }) => {
  return (
    <div className="w-full overflow-y-auto ">
      <section className="max-w-frame mx-auto px-4 sm:px-10 lg:px-20 text-start">
        {/* Title */}
        <motion.h3
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([
            "text-[32px] md:text-5xl mb-8 md:mb-14",
          ])}
        >
          {title}
        </motion.h3>

        {/* Carousel */}
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full mb-6 md:mb-9" >
            <CarouselContent className="space-x-4 sm:space-x-5">
              {data.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="w-full max-w-[198px] sm:max-w-[295px] pl-0"  >
                  <ProductCard data={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* View All Button */}
        {viewAllLink && (
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-full px-4 sm:px-0 text-center" >
            <Link
              href={viewAllLink}
              className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-[#ff4613] hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10" >
              View All
            </Link>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default ProductListSec;