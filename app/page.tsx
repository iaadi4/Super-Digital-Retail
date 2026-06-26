import { Hero } from "@/components/landing/hero";
import { Categories } from "@/components/landing/categories";
import { FeaturedProducts } from "@/components/landing/featured-products";
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
          "The official online store of Super Digital Retail. Shop premium electronics, home decor, kitchenware, and lifestyle accessories available directly on Flipkart.",
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
          "Super Digital Retail is a verified single-brand online store offering curated quality products on Flipkart with guaranteed authenticity and lightning-fast delivery.",
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
        <Testimonials />
      </div>
    </>
  );
}
