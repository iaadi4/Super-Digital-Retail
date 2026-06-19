import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  products,
  categories,
  getProductSlug,
  getCategorySlug,
  getCategoryFromSlug,
  categoryMeta,
} from "@/lib/data";
import { ProductCard } from "@/components/landing/product-card";
import { Breadcrumbs } from "@/components/landing/breadcrumbs";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return categories
    .filter((cat) => products.some((p) => p.category === cat))
    .map((cat) => ({
      slug: getCategorySlug(cat),
    }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = getCategoryFromSlug(slug);
  const categoryProducts = products.filter((p) => p.category === categoryName);

  if (!categoryName || categoryProducts.length === 0) {
    return {
      title: "Category Not Found",
      robots: "noindex, nofollow",
    };
  }

  const priceRange = categoryProducts.reduce(
    (acc, p) => ({
      min: Math.min(acc.min, p.salePrice),
      max: Math.max(acc.max, p.salePrice),
    }),
    { min: Infinity, max: 0 }
  );

  const ratedProducts = categoryProducts.filter((p) => p.reviewsCount > 0);
  const ratingInfo =
    ratedProducts.length > 0
      ? ` Top-rated items score up to ${Math.max(...ratedProducts.map((p) => p.rating)).toFixed(1)}/5.`
      : "";

  const description = `Shop ${categoryProducts.length} ${categoryName} products from ₹${priceRange.min.toLocaleString()} to ₹${priceRange.max.toLocaleString()}.${ratingInfo} Compare prices, features, and buy on Flipkart.`;

  return {
    title: `${categoryName} — Best Deals & Top Picks`,
    description,
    openGraph: {
      title: `${categoryName} Collection | Super Digital Retail`,
      description,
      type: "website",
    },
    alternates: {
      canonical: `/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = getCategoryFromSlug(slug);
  const categoryProducts = products.filter((p) => p.category === categoryName);

  if (!categoryName || categoryProducts.length === 0) {
    notFound();
  }

  const meta = categoryMeta[categoryName];

  // Default FAQs if no category-specific ones exist
  const defaultFaqs = [
    {
      question: `What kind of ${categoryName} products do you offer?`,
      answer: `We offer a curated selection of ${categoryProducts.length} ${categoryName} items carefully chosen from top Flipkart sellers for quality and value.`,
    },
    {
      question: `How do I purchase ${categoryName} products from this site?`,
      answer:
        "Click on any product to see full details, then use the 'Buy on Flipkart' button. You'll be redirected to Flipkart to complete your purchase through their secure checkout.",
    },
  ];

  const faqs = meta?.faqs || defaultFaqs;

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://superdigitalretail.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://superdigitalretail.in/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryName,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: categoryProducts.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        url: `https://superdigitalretail.in/products/${getProductSlug(p)}`,
        name: p.title,
        image: p.imageUrl,
        offers: {
          "@type": "Offer",
          price: p.salePrice,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: categoryName },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
              {categoryName}
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mb-2">
              {meta?.intro ||
                `Explore our curated selection of ${categoryName} items. Whether you're looking for durability, style, or performance, find exactly what you need from our top-rated selection.`}
            </p>
            <p className="text-xs text-muted-foreground">
              {categoryProducts.length} product{categoryProducts.length !== 1 ? "s" : ""} available
              {" · "}
              Prices sourced from Flipkart
              {" · "}
              Last checked {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* FAQ Section — visible content matching FAQPage schema */}
          <div className="mt-20 border-t pt-12">
            <h2 className="text-2xl font-bold mb-8">
              Frequently Asked Questions about {categoryName}
            </h2>
            <div className="space-y-8 max-w-3xl">
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
