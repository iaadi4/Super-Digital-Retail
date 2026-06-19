import Link from "next/link";
import { Zap, Globe, MessageCircle, Heart } from "lucide-react";
import { getActiveCategories, getCategorySlug } from "@/lib/data";

export function Footer() {
  const activeCategories = getActiveCategories();

  return (
    <footer className="bg-[#15171D] text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8 mb-16">
          
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="bg-primary text-[#15171D] p-1.5 rounded-xl transition-transform group-hover:scale-105">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Super Digital.
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              A product discovery platform helping you find the best deals on
              Flipkart. Compare prices, read ratings, and buy with confidence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-[#15171D] transition-colors">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-[#15171D] transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">Community</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-[#15171D] transition-colors">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Social</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Categories</h4>
            <ul className="space-y-4 text-sm">
              {activeCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/category/${getCategorySlug(cat)}`}
                    className="hover:text-primary transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://www.flipkart.com/helpcentre"
                  target="_blank"
                  rel="nofollow noopener"
                  className="hover:text-primary transition-colors"
                >
                  Flipkart Help Center
                </a>
              </li>
              <li>
                <a
                  href="https://www.flipkart.com/returnpolicy"
                  target="_blank"
                  rel="nofollow noopener"
                  className="hover:text-primary transition-colors"
                >
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Super Digital Retail. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-600">Not affiliated with nor endorsed by Flipkart.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
