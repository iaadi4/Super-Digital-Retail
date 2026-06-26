"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ProductCard } from "@/components/landing/product-card";
import { Breadcrumbs } from "@/components/landing/breadcrumbs";
import { Product } from "@/lib/data";

function FaqAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="border-b border-[#E0E0E0] py-5 font-body">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
      >
        <span className="text-[16px] font-medium text-[#111111] pr-4">{question}</span>
        <span className="text-[18px] text-[#7A7A7A] shrink-0 font-light">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: shouldReduceMotion ? "auto" : 0, opacity: shouldReduceMotion ? 1 : 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: shouldReduceMotion ? "auto" : 0, opacity: shouldReduceMotion ? 1 : 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-3 pb-2 text-[15px] text-[#7A7A7A] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CategoryClientView({
  categoryName,
  categoryProducts,
  intro,
  faqs,
}: {
  categoryName: string;
  categoryProducts: Product[];
  intro?: string;
  faqs: { question: string; answer: string }[];
}) {
  const shouldReduceMotion = useReducedMotion();

  const headerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  const gridVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  };

  const currentDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: categoryName },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-24 md:py-32 font-body">
      <div className="container mx-auto px-4 md:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 max-w-3xl"
        >
          <motion.span
            variants={itemVariants}
            className="text-[11px] uppercase tracking-widest text-[#7A7A7A] block mb-2"
          >
            {categoryName}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-display text-[56px] font-bold text-[#111111] leading-tight mb-4"
          >
            {categoryName}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[17px] text-[#7A7A7A] leading-relaxed mt-3"
          >
            {intro ||
              `Explore our official collection of ${categoryName} products crafted and sold directly by Super Digital Retail on Flipkart.`}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="text-[12px] text-[#7A7A7A] mt-4 flex items-center gap-2"
          >
            <span>{categoryProducts.length} items</span>
            <span>·</span>
            <span>Official Brand Store</span>
            <span>·</span>
            <span>Updated {currentDate}</span>
          </motion.div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-24"
        >
          {categoryProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <div className="border-t border-[#E0E0E0] pt-16 max-w-3xl">
          <span className="text-[11px] uppercase tracking-widest text-[#7A7A7A] block mb-2">
            HELP & INFO
          </span>
          <h2 className="text-2xl font-bold text-[#111111] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="border-t border-[#E0E0E0]">
            {faqs.map((faq, idx) => (
              <FaqAccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
