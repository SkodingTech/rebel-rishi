import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import ProductCardNormal from "./ProductSimple";
import Link from "next/link";

const ProductListSec = ({ title, data, viewAllLink, categories }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <section className=" px-4 sm:px-10 lg:px-20">
        {/* Title and Category Buttons */}
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-14 gap-4" >
          {/* Title */}
          <h3 className={cn(["text-[32px] md:text-5xl",])}>
            {title}
          </h3>

          {/* Category Buttons */}
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-3"  >
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-2 border hover:bg-[#ff4613] hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10" >
                {category.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0"  >
          {data.map((product) => (
            <div key={product.id} >
              {/* <ProductCard data={product} /> */}
              <ProductCardNormal data={product} />
            </div>
          ))}
        </motion.div>

        {/* View All Button */}
        {viewAllLink && (
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="w-full px-4 sm:px-0 text-center mt-8"
          >
            <Link
              href={viewAllLink}
              className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-[#ff4613] hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10"
            >
              View All
            </Link>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default ProductListSec;