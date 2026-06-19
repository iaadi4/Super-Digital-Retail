"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-heading text-3xl md:text-4xl font-bold mb-4"
            >
              Don't just take our word for it
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-muted-foreground text-lg"
            >
              See what our happy customers are saying about the Super Digital experience.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((t) => (
                <CarouselItem key={t.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card border border-border rounded-3xl p-8 h-full flex flex-col relative shadow-sm">
                    <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/10" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < t.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`} 
                        />
                      ))}
                    </div>

                    <p className="text-foreground text-lg mb-8 flex-1 leading-relaxed">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      {t.avatar ? (
                        <Image 
                          src={t.avatar} 
                          alt={t.name} 
                          width={48} 
                          height={48} 
                          className="rounded-full bg-muted object-cover" 
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm tracking-wider shrink-0">
                          {t.name.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-foreground">{t.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Purchased <span className="text-primary font-medium">{t.brandRef}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
              <CarouselNext className="static translate-y-0 h-12 w-12 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
