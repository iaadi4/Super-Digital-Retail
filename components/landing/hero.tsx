"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./product-card";
import { products } from "@/lib/data";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [shouldReduceMotion ? 0 : 8, shouldReduceMotion ? 0 : -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [shouldReduceMotion ? 0 : -8, shouldReduceMotion ? 0 : 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || shouldReduceMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sortedProducts = [...products]
    .filter(p => p.soldCount >= 1)
    .sort((a, b) => b.rating - a.rating);
  const product1 = sortedProducts[0] || products[0];
  const product2 = sortedProducts[1] || products[1];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center bg-background"
    >

      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="rounded-full bg-background border-border text-foreground px-4 py-1.5 mb-6 text-sm font-medium shadow-sm">
                <span className="text-primary mr-2">✦</span>
                50,000+ Happy Customers
              </Badge>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              <span className="text-foreground block">Discover products,</span>
              <span className="text-primary block mt-2">delivered to your door.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Shop millions of premium electronics, gear, and daily essentials. Discover the best deals and get lightning-fast delivery on all your favorite products.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/products" 
                className="inline-flex shrink-0 items-center justify-center rounded-full h-14 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all outline-none"
              >
                Start exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[600px] hidden sm:block perspective-1000"
            style={{ perspective: 1200 }}
          >
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="w-full h-full relative"
            >

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-10 top-10 w-[280px] z-20 shadow-2xl rounded-3xl"
                style={{ transform: "translateZ(60px)" }}
              >
                <ProductCard product={product1} />
              </motion.div>


              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-10 bottom-20 w-[260px] z-10 shadow-xl rounded-3xl opacity-90 scale-90"
                style={{ transform: "translateZ(20px)" }}
              >
                <ProductCard product={product2} />
              </motion.div>


              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/4 left-5 z-30 bg-background text-foreground rounded-full px-4 py-2 shadow-lg border border-border flex items-center gap-2"
                style={{ transform: "translateZ(90px)" }}
              >
                <div className="bg-primary/20 p-1 rounded-full text-primary">
                  <Star className="h-4 w-4 fill-primary" />
                </div>
                <span className="font-bold text-sm">{product2.rating.toFixed(1)}</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-1/4 right-0 z-30 bg-background text-foreground rounded-full px-4 py-2 shadow-lg border border-border flex items-center gap-2"
                style={{ transform: "translateZ(70px)" }}
              >
                <span className="font-bold text-sm">{product2.soldCount}+ sold</span>
                <span className="text-xl">🔥</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-8 right-20 z-30 bg-background text-foreground rounded-full p-1.5 pr-4 shadow-lg border border-border flex items-center gap-2"
                style={{ transform: "translateZ(100px)" }}
              >
                <Image src="https://i.pravatar.cc/150?u=techhaven" alt="Seller" width={28} height={28} className="rounded-full" />
                <span className="font-semibold text-xs">Top Rated</span>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
