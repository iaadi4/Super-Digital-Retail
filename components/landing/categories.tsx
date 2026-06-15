"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  BookOpen 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Electronics", icon: Laptop },
  { name: "Clothes", icon: Shirt },
  { name: "Bags", icon: Briefcase },
  { name: "Food", icon: Utensils },
  { name: "Furniture", icon: Sofa },
  { name: "Baby Care", icon: Baby },
  { name: "Beauty & Makeup", icon: Sparkles },
  { name: "Stationery", icon: PenTool },
  { name: "Grocery", icon: ShoppingCart },
  { name: "Books", icon: BookOpen },
];

export function Categories() {
  const [active, setActive] = useState("Electronics");

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
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = active === category.name;
            
            return (
              <motion.div key={category.name} variants={itemVariants} className="snap-start shrink-0">
                <Button
                  variant={isActive ? "default" : "outline"}
                  className={`rounded-full h-12 px-6 gap-2 transition-all duration-300 ${
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90" 
                      : "bg-background text-foreground border-border hover:border-primary hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setActive(category.name)}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                  <span className="font-medium">{category.name}</span>
                </Button>
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
