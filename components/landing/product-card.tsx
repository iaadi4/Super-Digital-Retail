"use client";

import Image from "next/image";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col rounded-3xl bg-card border border-border shadow-sm overflow-hidden"
    >
      <div className="relative aspect-[4/3] bg-muted/30 w-full overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full shadow-md bg-card/90 hover:bg-card">
            <Heart className="h-4 w-4 text-muted-foreground hover:text-destructive transition-colors" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Image
            src={product.brandLogo}
            alt={product.brandName}
            width={20}
            height={20}
            className="rounded-full bg-muted"
          />
          <span className="text-xs font-medium text-muted-foreground">
            {product.brandName}
          </span>
        </div>

        <h3 className="font-heading font-semibold text-foreground line-clamp-2 mb-2">
          {product.title}
        </h3>

        <div className="mt-auto">
          <div className="flex items-end gap-2 mb-3">
            <span className="text-lg font-bold text-primary">
              ${product.salePrice.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground line-through mb-[2px]">
              ${product.originalPrice.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                <span className="text-xs font-medium text-foreground">
                  {product.rating}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({product.reviewsCount})
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {product.soldCount} sold
              </span>
            </div>

            <Button
              size="icon"
              className="h-8 w-8 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
