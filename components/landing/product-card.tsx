"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Product, getProductSlug } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

function formatReviewsCount(count: number): string {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return count.toString();
}

export function ProductCard({ product }: ProductCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const discountPercentage =
    product.originalPrice > product.salePrice
      ? Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)
      : 0;

  return (
    <motion.div
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col bg-[#FFFFFF] rounded-[20px] overflow-hidden font-body relative"
    >
      <Link href={`/products/${getProductSlug(product)}`} className="absolute inset-0 z-20">
        <span className="sr-only">View {product.title}</span>
      </Link>

      {/* Image Area */}
      <div className="relative aspect-square w-full bg-[#F7F9F8] rounded-[20px] overflow-hidden p-3">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-contain p-3 transition-transform duration-500 ease-in-out group-hover:scale-[1.08]"
        />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 z-10 rounded-full bg-[#111111] text-white text-[11px] font-medium px-2.5 py-0.5 pointer-events-none">
            −{discountPercentage}%
          </div>
        )}
      </div>

      {/* Body */}
      <div className="pt-4 pb-2 px-1 flex flex-col flex-1 pointer-events-none">
        {/* Brand / Category */}
        <span className="text-[11px] uppercase tracking-wider text-[#7A7A7A] font-body block mb-1">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="text-[14px] font-medium text-[#111111] line-clamp-2 leading-snug mb-2">
          {product.title}
        </h3>

        <div className="mt-auto">
          {/* Price Row */}
          <div className="flex items-center gap-3">
            <span className="text-[16px] font-bold text-[#111111]">
              ₹{product.salePrice.toLocaleString()}
            </span>
            {product.originalPrice > product.salePrice && (
              <span className="text-[13px] line-through text-[#7A7A7A]">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Rating Row */}
          {product.reviewsCount > 0 && (
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-3 w-3 fill-[#111111] text-[#111111]" />
              <span className="text-[12px] text-[#7A7A7A]">
                {product.rating.toFixed(1)} ({formatReviewsCount(product.reviewsCount)})
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
