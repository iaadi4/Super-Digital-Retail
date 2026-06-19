import { Hero } from "@/components/landing/hero";
import { Categories } from "@/components/landing/categories";
import { FeaturedProducts } from "@/components/landing/featured-products";
import { SellerCTA } from "@/components/landing/seller-cta";
import { Testimonials } from "@/components/landing/testimonials";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <SellerCTA />
      <Testimonials />
    </div>
  );
}
