"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ProductCard } from "@/components/landing/product-card";
import { products, getActiveCategories } from "@/lib/data";

const activeCategories = getActiveCategories();

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = searchParams.get("search") || "";
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  const query = searchQuery.trim().toLowerCase();

  const filteredProducts = products.filter((p) => {
    const matchesCat =
      !query || selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      !query ||
      p.title.toLowerCase().includes(query) ||
      (p.brandName && p.brandName.toLowerCase().includes(query)) ||
      (p.category && p.category.toLowerCase().includes(query)) ||
      (p.description && p.description.toLowerCase().includes(query)) ||
      (p.features && p.features.some((f) => f.toLowerCase().includes(query)));
    return matchesCat && matchesSearch;
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (searchQuery) {
      router.push("/products");
    }
  };

  return (
    <div className="w-full font-body bg-[#FFFFFF]">
      <div className="mb-10">
        <span className="text-[11px] uppercase tracking-widest text-[#7A7A7A] block mb-2">
          CATALOG
        </span>
        <h1 className="font-display text-[48px] font-bold text-[#111111] mb-2">
          {searchQuery
            ? `Search: "${searchQuery}"`
            : selectedCategory === "All"
            ? "All Products"
            : selectedCategory}
        </h1>
        {searchQuery && (
          <p className="text-sm text-[#7A7A7A]">
            Found {filteredProducts.length} items matching your search.
          </p>
        )}
      </div>

      {/* Filter Bar */}
      <div className="flex flex-nowrap items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-hide">
        <button
          onClick={() => handleCategoryClick("All")}
          className={`rounded-full px-5 py-2 text-[13px] font-medium transition-colors border whitespace-nowrap cursor-pointer focus:outline-none ${
            !query && selectedCategory === "All"
              ? "bg-[#111111] text-white border-[#111111]"
              : "bg-white text-[#111111] border-[#E0E0E0] hover:bg-[#F7F9F8]"
          }`}
        >
          All
        </button>
        {activeCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`rounded-full px-5 py-2 text-[13px] font-medium transition-colors border whitespace-nowrap cursor-pointer focus:outline-none ${
              !query && selectedCategory === category
                ? "bg-[#111111] text-white border-[#111111]"
                : "bg-white text-[#111111] border-[#E0E0E0] hover:bg-[#F7F9F8]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 16,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.25,
                  ease: "easeOut",
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-24">
          <p className="text-xl font-medium text-[#7A7A7A]">
            No products found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}

export function ProductsClientView() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FFFFFF]" />}>
      <ProductsContent />
    </Suspense>
  );
}
