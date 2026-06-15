"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Counter({ from, to, duration, suffix = "" }: { from: number, to: number, duration: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        

        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeOut * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="font-heading font-bold text-4xl text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function SellerCTA() {
  return (
    <section className="py-24 bg-[#15171D] text-slate-50 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Top brands. <br />
              <span className="text-primary">Best prices.</span> <br />
              Super Digital.
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl mb-8 leading-relaxed max-w-xl">
              Discover a world of premium products at your fingertips. We bring you the best brands, exclusive deals, and lightning-fast delivery. Join our community of happy shoppers.
            </p>
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold bg-primary text-[#15171D] hover:bg-primary/90 shadow-lg shadow-primary/20">
              Start shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 lg:pl-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <Counter from={0} to={50} duration={2} suffix="k+" />
              <span className="text-slate-400 font-medium">Happy Customers</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-2"
            >
              <Counter from={0} to={2.5} duration={2} suffix="M+" />
              <span className="text-slate-400 font-medium">Products Available</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-2"
            >
              <Counter from={0} to={150} duration={2} suffix="+" />
              <span className="text-slate-400 font-medium">Premium Brands</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col gap-2"
            >
              <span className="font-heading font-bold text-4xl text-primary">24h</span>
              <span className="text-slate-400 font-medium">Fast Delivery</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
