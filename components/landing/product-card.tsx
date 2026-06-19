"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Product, getProductSlug } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group flex flex-col rounded-3xl bg-card border border-border shadow-sm hover:shadow-2xl hover:shadow-primary/10 overflow-hidden relative transition-shadow duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
      
      <Link href={`/products/${getProductSlug(product)}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {product.title}</span>
      </Link>
      
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/20">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover mix-blend-multiply dark:mix-blend-normal transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col flex-1 relative z-20 pointer-events-none">


        <h3 className="font-heading font-semibold text-foreground line-clamp-2 mb-2">
          {product.title}
        </h3>

        <div className="mt-auto">
          <div className="flex items-end gap-2 mb-3">
            <span className="text-lg font-bold text-primary">
              ₹{product.salePrice.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground line-through mb-[2px]">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-3">
              {product.reviewsCount > 0 ? (
                <>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium text-foreground">
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviewsCount.toLocaleString()})
                    </span>
                  </div>
                  {product.soldCount > 0 && (
                    <span className="text-xs text-muted-foreground">
                      {product.soldCount.toLocaleString()} sold
                    </span>
                  )}
                </>
              ) : (
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  Newly listed
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
