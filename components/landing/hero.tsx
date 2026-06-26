"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { products } from "@/lib/data";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const season = "SUMMER";
  const year = new Date().getFullYear();

  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
  const heroProduct = sortedProducts[0] || products[0];

  const leftContainerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const leftChildVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-100px)] w-full bg-[#FFFFFF] flex items-center py-12 lg:py-0 overflow-hidden font-body">
      <div className="container mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          {/* Left Column */}
          <motion.div
            variants={leftContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start justify-center max-w-xl z-10"
          >
            <motion.div variants={leftChildVariants} className="mb-4">
              <span className="text-[11px] uppercase tracking-widest text-[#7A7A7A] font-body block">
                NEW ARRIVALS · {season} {year}
              </span>
            </motion.div>

            <motion.h1
              variants={leftChildVariants}
              className="font-display text-[48px] lg:text-[72px] font-bold text-[#111111] leading-[1.05] tracking-tight mb-6"
            >
              Curated deals,<br />delivered daily.
            </motion.h1>

            <motion.p
              variants={leftChildVariants}
              className="text-[16px] text-[#7A7A7A] font-body max-w-sm mb-8 leading-relaxed"
            >
              Discover official electronics, home decor, and lifestyle products from Super Digital Retail, available directly through our verified Flipkart storefront.
            </motion.p>

            <motion.div
              variants={leftChildVariants}
              className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] text-white px-8 py-3 text-sm font-medium hover:bg-[#333333] transition-colors"
              >
                Shop Now →
              </Link>
              <Link
                href="/products#categories"
                className="inline-flex items-center justify-center rounded-full border border-[#111111] text-[#111111] bg-transparent px-8 py-3 text-sm font-medium hover:bg-[#F7F9F8] transition-colors"
              >
                Browse Categories
              </Link>
            </motion.div>

            <motion.div
              variants={leftChildVariants}
              className="text-[12px] text-[#7A7A7A] font-body mt-auto pt-4 border-t border-[#E0E0E0]/60 w-full sm:w-auto"
            >
              Official Brand Store · Verified Flipkart Seller · Authentic INR Prices
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="relative flex items-center justify-center h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[600px] w-full">
            {/* Sage circle background */}
            <motion.div
              initial={{
                scale: shouldReduceMotion ? 1 : 0.6,
                opacity: shouldReduceMotion ? 0.8 : 0,
              }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.4,
                ease: "easeOut",
              }}
              style={{ backgroundColor: "#DDE8E2" }}
              className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full pointer-events-none"
            />

            {/* Product Image */}
            <motion.div
              initial={{
                scale: shouldReduceMotion ? 1 : 0.92,
                opacity: shouldReduceMotion ? 1 : 0,
              }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.0,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="relative z-10 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] flex items-center justify-center"
            >
              <Image
                src={heroProduct.imageUrl}
                alt={heroProduct.title}
                fill
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 360px, 440px"
                priority
                className="object-contain rounded-none drop-shadow-sm"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
