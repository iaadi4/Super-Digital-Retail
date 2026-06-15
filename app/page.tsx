import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Categories } from "@/components/landing/categories";
import { FeaturedProducts } from "@/components/landing/featured-products";
import { SellerCTA } from "@/components/landing/seller-cta";
import { Testimonials } from "@/components/landing/testimonials";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <SellerCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
