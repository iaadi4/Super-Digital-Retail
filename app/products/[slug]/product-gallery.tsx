"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-4 font-body">
      {/* Main Image */}
      <div className="relative aspect-square bg-[#F7F9F8] rounded-[24px] overflow-hidden border border-[#E0E0E0]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            className="absolute inset-0 p-6 flex items-center justify-center"
          >
            <Image
              src={activeImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-6"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`relative h-20 w-20 flex-shrink-0 rounded-[12px] overflow-hidden bg-[#F7F9F8] cursor-pointer transition-all duration-200 focus:outline-none ${
                activeImage === img ? "border-[1.5px] border-[#111111]" : "border border-[#E0E0E0]"
              }`}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
