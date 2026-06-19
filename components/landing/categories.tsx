"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Laptop, 
  Shirt, 
  Briefcase, 
  Utensils, 
  Sofa, 
  Baby, 
  Sparkles, 
  PenTool, 
  ShoppingCart, 
  BookOpen,
  Home,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { products, getCategorySlug } from "@/lib/data";

const categoryIcons: Record<string, LucideIcon> = {
  Electronics: Laptop,
  Clothes: Shirt,
  Bags: Briefcase,
  Food: Utensils,
  Furniture: Sofa,
  "Baby Care": Baby,
  "Beauty & Makeup": Sparkles,
  Stationery: PenTool,
  Grocery: ShoppingCart,
  Books: BookOpen,
  "Home Decor": Home,
  "Home & Kitchen": Utensils,
  Accessories: Headphones,
};

// Only show categories that have products
const activeCategories = Array.from(new Set(products.map((p) => p.category)));

export function Categories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="py-10 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto pb-4 pt-2 hide-scrollbar gap-3 snap-x"
        >
          {activeCategories.map((categoryName) => {
            const Icon = categoryIcons[categoryName] || ShoppingCart;
            
            return (
              <motion.div key={categoryName} variants={itemVariants} className="snap-start shrink-0">
                <Link
                  href={`/category/${getCategorySlug(categoryName)}`}
                  className="rounded-full h-12 px-6 gap-2 transition-all duration-300 bg-background text-foreground border border-border hover:border-primary hover:text-primary hover:bg-primary/5 inline-flex items-center justify-center text-sm font-medium"
                >
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{categoryName}</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

