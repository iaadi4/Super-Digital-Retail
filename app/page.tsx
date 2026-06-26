import { Hero } from "@/components/landing/hero";
import { Categories } from "@/components/landing/categories";
import { FeaturedProducts } from "@/components/landing/featured-products";
import { SellerCTA } from "@/components/landing/seller-cta";
import { Testimonials } from "@/components/landing/testimonials";

export const dynamic = "force-dynamic";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://superdigitalretail.in/#website",
        url: "https://superdigitalretail.in/",
        name: "Super Digital Retail",
        description:
          "Compare prices, read real ratings, and discover top products across Electronics, Home Decor, Kitchen, and more. Buy on Flipkart at the best prices.",
        publisher: {
          "@id": "https://superdigitalretail.in/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://superdigitalretail.in/#organization",
        name: "Super Digital Retail",
        url: "https://superdigitalretail.in/",
        logo: {
          "@type": "ImageObject",
          url: "https://superdigitalretail.in/icon.svg",
        },
        description:
          "A product discovery platform that helps shoppers find the best deals on Flipkart. We curate and compare products across categories so you can make informed purchasing decisions.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <SellerCTA />
        <Testimonials />
      </div>
    </>
  );
}
