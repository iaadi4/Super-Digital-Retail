"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data";
import { Star, ShoppingCart, ShieldCheck, Truck, RefreshCcw, ExternalLink, ArrowLeft } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductGallery } from "./product-gallery";
import { motion } from "framer-motion";

export function ProductView({ product }: { product: Product }) {
  const allImages = [product.imageUrl, ...(product.additionalImages || [])];

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <motion.div 
        initial="initial"
        animate="animate"
        variants={stagger}
        className="container mx-auto px-4 max-w-6xl"
      >
        <motion.div variants={fadeInUp}>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors bg-muted/30 hover:bg-muted/50 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to products
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery Section */}
          <motion.div variants={scaleIn} className="w-full lg:sticky lg:top-32 h-fit">
            <ProductGallery images={allImages} title={product.title} />
          </motion.div>

          {/* Details Section */}
          <motion.div variants={stagger} className="flex flex-col">
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full border border-border">
                <Image
                  src={product.brandLogo}
                  alt={product.brandName}
                  width={20}
                  height={20}
                  className="rounded-full bg-background shadow-sm"
                />
                <span className="text-sm font-semibold text-foreground">
                  {product.brandName}
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full border border-border">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-bold">{product.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({product.reviewsCount} reviews)
                </span>
              </div>
              <div className="text-sm font-medium text-muted-foreground ml-auto bg-muted/30 px-3 py-1.5 rounded-full border border-border">
                {product.soldCount} sold
              </div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              {product.title}
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex items-end gap-4 mb-8 pb-8 border-b border-border">
              <span className="text-4xl lg:text-5xl font-bold text-primary">
                ${product.salePrice.toLocaleString()}
              </span>
              {product.originalPrice > product.salePrice && (
                <span className="text-xl text-muted-foreground line-through mb-1.5">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.originalPrice > product.salePrice && (
                <span className="mb-2 ml-2 px-3 py-1 text-sm font-bold bg-destructive/10 text-destructive rounded-full">
                  Save ${((product.originalPrice - product.salePrice)).toLocaleString()}
                </span>
              )}
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Description</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.description || "Premium product crafted with the finest materials to deliver exceptional performance and style."}
              </p>
            </motion.div>

            {product.features && product.features.length > 0 && (
              <motion.div variants={fadeInUp} className="mb-12">
                <h3 className="text-xl font-semibold mb-5 text-foreground">Key Features</h3>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 bg-primary/10 p-1.5 rounded-full shrink-0">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Button size="lg" className="flex-1 h-14 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              {product.flipkartUrl && (
                <a 
                  href={product.flipkartUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "flex-1 h-14 text-lg rounded-2xl border-2 border-[#2874f0] text-[#2874f0] hover:bg-[#2874f0] hover:text-white transition-all shadow-sm"
                  )}
                >
                  Buy on Flipkart
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              )}
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mt-8 p-6 bg-card rounded-3xl border border-border shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Free Delivery</div>
                  <div className="text-xs text-muted-foreground">For orders over $50</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <RefreshCcw className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">30 Days Return</div>
                  <div className="text-xs text-muted-foreground">No questions asked</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
