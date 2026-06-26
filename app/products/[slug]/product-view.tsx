"use client";

import Link from "next/link";
import { Product, getCategorySlug } from "@/lib/data";
import { Star, Truck, RefreshCcw } from "lucide-react";
import { ProductGallery } from "./product-gallery";
import { motion, useReducedMotion } from "framer-motion";
import { Breadcrumbs } from "@/components/landing/breadcrumbs";
import { ProductCard } from "@/components/landing/product-card";

function formatReviewsCount(count: number): string {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return count.toString();
}

export function ProductView({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const allImages = [product.imageUrl, ...(product.additionalImages || [])];
  const shouldReduceMotion = useReducedMotion();

  const stagger = {
    animate: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    {
      label: product.category,
      href: `/category/${getCategorySlug(product.category)}`,
    },
    { label: product.title },
  ];

  const savings =
    product.originalPrice > product.salePrice ? product.originalPrice - product.salePrice : 0;

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-24 md:py-32 font-body">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="container mx-auto px-4 md:px-8 max-w-6xl"
      >
        <motion.div variants={fadeInUp}>
          <Breadcrumbs items={breadcrumbItems} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery Column */}
          <div className="w-full lg:sticky lg:top-32 h-fit">
            <ProductGallery images={allImages} title={product.title} />
          </div>

          {/* Details Column */}
          <motion.div variants={stagger} className="flex flex-col items-start">
            {/* Breadcrumb Pill */}
            <motion.div variants={fadeInUp}>
              <Link
                href={`/category/${getCategorySlug(product.category)}`}
                className="inline-block text-[11px] uppercase tracking-widest bg-[#F7F9F8] px-3 py-1 rounded-full text-[#7A7A7A] mb-4 hover:text-[#111111] transition-colors"
              >
                {product.category}
              </Link>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="font-display text-[40px] font-bold text-[#111111] leading-tight mb-3 w-full"
            >
              {product.title}
            </motion.h1>

            {/* Rating Chip */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              {product.reviewsCount > 0 ? (
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-[#111111] text-[#111111]" />
                  <span className="text-[13px] font-medium text-[#111111]">
                    {product.rating.toFixed(1)}
                  </span>
                  <span className="text-[13px] text-[#7A7A7A]">
                    ({formatReviewsCount(product.reviewsCount)} reviews)
                  </span>
                </div>
              ) : (
                <span className="text-[12px] font-medium text-[#111111] bg-[#F7F9F8] px-2.5 py-0.5 rounded-full">
                  Newly listed
                </span>
              )}
              {product.soldCount > 0 && (
                <span className="text-[12px] text-[#7A7A7A]">
                  · {product.soldCount}+ sold
                </span>
              )}
            </motion.div>

            {/* Price Row */}
            <motion.div variants={fadeInUp} className="flex items-baseline gap-3 mb-8">
              <span className="text-[32px] font-bold text-[#111111]">
                ₹{product.salePrice.toLocaleString()}
              </span>
              {product.originalPrice > product.salePrice && (
                <span className="text-[20px] line-through text-[#7A7A7A]">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
              {savings > 0 && (
                <span className="rounded-full bg-[#F0F0F0] text-[#111111] text-[12px] font-medium px-3 py-1 ml-1">
                  Save ₹{savings.toLocaleString()}
                </span>
              )}
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="mb-8 pb-8 border-b border-[#E0E0E0] w-full">
              <p className="text-[15px] text-[#7A7A7A] leading-relaxed">
                {product.description ||
                  "Premium product crafted with high quality materials for daily reliability and refined aesthetics."}
              </p>
            </motion.div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <motion.div variants={fadeInUp} className="mb-8 w-full">
                <h2 className="text-[14px] font-medium text-[#111111] uppercase tracking-wider mb-3">
                  Key Specifications
                </h2>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-[14px] text-[#7A7A7A] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div variants={fadeInUp} className="w-full mt-2">
              {product.flipkartUrl && (
                <a
                  href={product.flipkartUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="w-full rounded-full h-14 bg-[#111111] text-white flex items-center justify-center text-[16px] font-medium hover:bg-[#333333] transition-colors cursor-pointer"
                >
                  Buy on Flipkart
                </a>
              )}
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4 w-full pt-6 mt-6 border-t border-[#E0E0E0]"
            >
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-[#111111] shrink-0" />
                <div>
                  <div className="text-[14px] font-medium text-[#111111]">Free Delivery</div>
                  <div className="text-[12px] text-[#7A7A7A]">Orders over ₹500</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCcw className="h-5 w-5 text-[#111111] shrink-0" />
                <div>
                  <div className="text-[14px] font-medium text-[#111111]">Easy Returns</div>
                  <div className="text-[12px] text-[#7A7A7A]">Flipkart policy</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#E0E0E0]">
            <div className="mb-10">
              <span className="text-[11px] uppercase tracking-widest text-[#7A7A7A] block mb-2">
                MORE ITEMS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111111]">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
