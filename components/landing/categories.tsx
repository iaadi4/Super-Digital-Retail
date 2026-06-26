"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products, getCategorySlug } from "@/lib/data";

const activeCategories = Array.from(new Set(products.map((p) => p.category)));

export function Categories() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
      },
    },
  };

  const itemVariants: any = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="py-14 md:py-20 bg-[#FFFFFF] border-y border-[#E0E0E0]/60 font-body" id="categories">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8">
          <span className="text-[11px] font-body uppercase tracking-widest text-[#7A7A7A] block mb-2">
            RECENT ADDITIONS
          </span>
          <h2 className="text-2xl md:text-3xl font-body font-bold text-[#111111]">
            Shop by Category
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-nowrap items-center justify-start md:justify-center gap-5 md:gap-8 overflow-x-auto pb-4 md:pb-6 scrollbar-hide"
        >
          {activeCategories.map((categoryName) => {
            const categoryProducts = products.filter((p) => p.category === categoryName);
            const thumbnailProduct = categoryProducts[0];
            const productCount = categoryProducts.length;

            return (
              <motion.div key={categoryName} variants={itemVariants} className="shrink-0">
                <Link
                  href={`/category/${getCategorySlug(categoryName)}`}
                  className="group flex flex-col items-center focus:outline-none"
                >
                  <div className="relative inline-flex flex-col items-center">
                    {/* Circular container */}
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
                      transition={{ duration: 0.2 }}
                      className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#F7F9F8] border border-[#E0E0E0] overflow-hidden relative flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                    >
                      {thumbnailProduct && (
                        <Image
                          src={thumbnailProduct.imageUrl}
                          alt={categoryName}
                          fill
                          sizes="112px"
                          className="object-contain p-3.5"
                        />
                      )}
                    </motion.div>

                    {/* Count badge */}
                    <span className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full border border-[#E0E0E0] text-[10px] font-medium text-[#111111] flex items-center justify-center shadow-none z-10">
                      {productCount}
                    </span>
                  </div>

                  {/* Label */}
                  <span className="mt-3 text-[13px] font-medium text-[#111111] text-center block">
                    {categoryName}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
