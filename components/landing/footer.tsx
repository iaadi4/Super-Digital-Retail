import Link from "next/link";
import { getActiveCategories, getCategorySlug } from "@/lib/data";

export function Footer() {
  const activeCategories = getActiveCategories();

  return (
    <footer className="bg-[#FFFFFF] text-[#111111] pt-24 pb-12 border-t border-[#E0E0E0] font-body">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="font-body font-bold text-xl tracking-tight text-[#111111] block mb-4">
              superdigital.
            </Link>
            <p className="text-[#7A7A7A] text-[14px] mb-6 max-w-xs leading-relaxed">
              The official online storefront of Super Digital Retail. Shop our verified products directly on Flipkart.
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-medium text-[#111111] uppercase tracking-wider mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#7A7A7A]">
              {activeCategories.slice(0, 6).map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/category/${getCategorySlug(cat)}`}
                    className="hover:text-[#111111] transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-medium text-[#111111] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#7A7A7A]">
              <li>
                <Link href="/products" className="hover:text-[#111111] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products#categories" className="hover:text-[#111111] transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-medium text-[#111111] uppercase tracking-wider mb-4">
              Affiliate Notice
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#7A7A7A]">
              <li>
                <a
                  href="https://www.flipkart.com/helpcentre"
                  target="_blank"
                  rel="nofollow noopener"
                  className="hover:text-[#111111] transition-colors"
                >
                  Flipkart Support
                </a>
              </li>
              <li>
                <a
                  href="https://www.flipkart.com/returnpolicy"
                  target="_blank"
                  rel="nofollow noopener"
                  className="hover:text-[#111111] transition-colors"
                >
                  Returns Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E0E0E0] flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#7A7A7A]">
          <p>© {new Date().getFullYear()} Super Digital Retail. Prices updated daily.</p>
          <p>Official Brand Store. Verified Flipkart Seller. Authentic Products.</p>
        </div>
      </div>
    </footer>
  );
}
