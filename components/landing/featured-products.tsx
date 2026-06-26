"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ProductCard } from "./product-card";
import { products } from "@/lib/data";

const activeCategories = Array.from(new Set(products.map((p) => p.category)));
const categories = ["All", ...activeCategories];

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const displayProducts = (() => {
    const filtered =
      activeTab === "All" ? products : products.filter((p) => p.category === activeTab);

    const result: typeof products = [];
    const counts: Record<string, number> = {};

    for (const p of filtered) {
      if (!counts[p.category]) counts[p.category] = 0;
      if (counts[p.category] < 3) {
        result.push(p);
        counts[p.category]++;
      }
    }
    return result;
  })();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: any = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="pt-14 md:pt-20 pb-12 md:pb-16 bg-[#FFFFFF] font-body">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-body uppercase tracking-widest text-[#7A7A7A] block mb-2">
              FEATURED ITEMS
            </span>
            <h2 className="font-display text-[40px] font-bold text-[#111111] leading-tight mb-2">
              Must-have picks
            </h2>
            <p className="text-[15px] text-[#7A7A7A] font-body">
              Selected every month
            </p>
          </div>

          <div className="flex flex-nowrap md:flex-wrap items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`shrink-0 rounded-full px-5 py-2 text-[13px] font-medium transition-colors border cursor-pointer focus:outline-none ${
                  activeTab === cat
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-white text-[#111111] border-[#E0E0E0] hover:bg-[#F7F9F8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
        >
          {displayProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
