"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Menu } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const navLinks = [
    { label: "Shop", href: "/products" },
    { label: "Categories", href: "/products#categories" },
  ];

  const isHeroTransparent = pathname === "/" && !isScrolled;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col font-body">
      {/* Announcement bar */}
      <div className="h-[36px] bg-[#111] text-white flex items-center justify-center text-xs tracking-wider uppercase px-4 text-center font-medium">
        Quality Meets Value — Secured by Flipkart
      </div>

      {/* Navbar */}
      <header
        className={`transition-all duration-300 flex items-center ${
          isHeroTransparent
            ? "bg-transparent border-b border-transparent py-5"
            : "bg-[#FFFFFF] border-b border-[#E0E0E0] py-4 shadow-none"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between relative">
          {/* Nav links left */}
          <nav className="hidden md:flex items-center gap-8 z-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-[#7A7A7A] hover:text-[#111] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo centered */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center z-10">
            <Link
              href="/"
              className="font-body font-bold text-xl tracking-tight text-[#111] hover:opacity-80 transition-opacity"
            >
              superdigital.
            </Link>
          </div>

          {/* Cart + Search right */}
          <div className="flex items-center gap-2 sm:gap-4 z-10 ml-auto">
            <div className="hidden md:flex items-center">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.form
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    onSubmit={handleSearchSubmit}
                    className="overflow-hidden mr-2 hidden sm:block"
                  >
                    <Input
                      type="search"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-9 bg-[#F7F9F8] text-[#111] border border-[#E0E0E0] rounded-full text-xs px-4 focus-visible:ring-1 focus-visible:ring-[#111]"
                      autoFocus
                    />
                  </motion.form>
                )}
              </AnimatePresence>
              <button
                className="p-2 rounded-full hover:bg-[#F7F9F8] text-[#111] transition-colors cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            <Link
              href="/products"
              className="hidden md:flex p-2 rounded-full hover:bg-[#F7F9F8] text-[#111] transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger className="p-2 rounded-full hover:bg-[#F7F9F8] text-[#111] transition-colors inline-flex items-center justify-center cursor-pointer">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </SheetTrigger>
                <SheetContent className="bg-[#FFFFFF] text-[#111] border-l border-[#E0E0E0]">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <div className="flex flex-col gap-6 mt-8">
                    <SheetClose
                      render={
                        <Link
                          href="/"
                          className="font-body font-bold text-xl tracking-tight text-[#111] mb-4 block"
                        />
                      }
                    >
                      superdigital.
                    </SheetClose>
                    <form onSubmit={handleSearchSubmit} className="relative mb-2">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7A7A7A]" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 bg-[#F7F9F8] text-[#111] border border-[#E0E0E0] rounded-full h-10 text-sm"
                      />
                    </form>
                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <SheetClose
                          key={link.label}
                          render={
                            <Link
                              href={link.href}
                              className="text-lg font-medium text-[#111] hover:text-[#7A7A7A] transition-colors"
                            />
                          }
                        >
                          {link.label}
                        </SheetClose>
                      ))}
                      <SheetClose
                        render={
                          <Link
                            href="/products"
                            className="text-lg font-medium text-[#111] hover:text-[#7A7A7A] transition-colors flex items-center gap-2"
                          />
                        }
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Cart
                      </SheetClose>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
