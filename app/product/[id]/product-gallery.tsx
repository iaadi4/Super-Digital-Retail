"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function ProductGallery({ images, title }: { images: string[], title: string }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square sm:aspect-[4/3] bg-muted/30 rounded-3xl overflow-hidden border border-border">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage}
              alt={title}
              fill
              className="object-cover mix-blend-multiply dark:mix-blend-normal"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide p-1">
          {images.map((img, idx) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={idx}
              onClick={() => setActiveImage(img)}
              className={cn(
                "relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-colors duration-200",
                activeImage === img ? "border-primary shadow-md" : "border-transparent hover:border-primary/50 opacity-70 hover:opacity-100"
              )}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                fill
                className="object-cover mix-blend-multiply dark:mix-blend-normal bg-muted/30"
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
