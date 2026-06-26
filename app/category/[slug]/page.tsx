import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  products,
  getCategoryFromSlug,
  getProductSlug,
  categoryMeta,
} from "@/lib/data";
import { CategoryClientView } from "./category-client";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-dynamic";

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

  const description = `Shop ${categoryProducts.length} ${categoryName} products from ₹${priceRange.min.toLocaleString()} to ₹${priceRange.max.toLocaleString()}.${ratingInfo} Shop official Super Digital Retail products directly on Flipkart.`;

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

  const defaultFaqs = [
    {
      question: `What kind of ${categoryName} products do you offer?`,
      answer: `We offer a curated selection of ${categoryProducts.length} ${categoryName} items crafted and sold directly by Super Digital Retail on Flipkart.`,
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

      <CategoryClientView
        categoryName={categoryName}
        categoryProducts={categoryProducts}
        intro={meta?.intro}
        faqs={faqs}
      />
    </>
  );
}
