import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductSlug, getCategorySlug } from "@/lib/data";
import { ProductView } from "./product-view";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: getProductSlug(product),
  }));
}

function findProduct(slug: string) {
  const id = slug.split('-').pop();
  return products.find((p) => p.id === id);
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    return {};
  }

  const discount = Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100);
  const ratingInfo = product.reviewsCount > 0 ? ` Rated ${product.rating.toFixed(1)}/5 by ${product.reviewsCount.toLocaleString()} buyers.` : '';
  
  // Vary description structure based on product characteristics
  const descTemplates = [
    `Get the ${product.title} at ₹${product.salePrice.toLocaleString()}${discount > 0 ? ` (${discount}% off)` : ''} in our ${product.category} collection.${ratingInfo} Compare and buy via Flipkart.`,
    `${product.title} by ${product.brandName} — now ₹${product.salePrice.toLocaleString()}${discount > 0 ? `, down from ₹${product.originalPrice.toLocaleString()}` : ''}.${ratingInfo} Shop on Flipkart.`,
    `Explore the ${product.title} for just ₹${product.salePrice.toLocaleString()}.${ratingInfo} Part of our curated ${product.category} picks. Buy on Flipkart.`,
  ];
  
  // Use a simple hash of the product ID to vary the template
  const templateIndex = parseInt(product.id, 10) % descTemplates.length;
  const description = descTemplates[templateIndex];

  return {
    title: `${product.title} — ₹${product.salePrice.toLocaleString()}`,
    description,
    openGraph: {
      title: `${product.title} — ₹${product.salePrice.toLocaleString()}`,
      description: product.description,
      images: [{ url: product.imageUrl, width: 1200, height: 630, alt: `${product.title} - ${product.category} product image` }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} — ₹${product.salePrice.toLocaleString()}`,
      description: product.description,
      images: [{ url: product.imageUrl, alt: `${product.title} - ${product.category} product image` }],
    },
    alternates: {
      canonical: `/products/${getProductSlug(product)}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    notFound();
  }

  const categorySlug = getCategorySlug(product.category);
  
  // Related products: same category, excluding current, limited to 4
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Generate Structured Data — Product Snippet (appropriate for affiliate sites)
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: [product.imageUrl, ...(product.additionalImages || [])],
    description: product.description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: product.brandName,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: product.flipkartUrl || `https://superdigitalretail.in/products/${slug}`,
      priceCurrency: "INR",
      price: product.salePrice,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Flipkart",
      },
    },
  };

  // ONLY add aggregateRating when there are real reviews — never fabricate
  if (product.reviewsCount > 0 && product.rating > 0) {
    jsonLd.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

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
        name: product.category,
        item: `https://superdigitalretail.in/category/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.title,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <ProductView product={product} relatedProducts={relatedProducts} />
    </>
  );
}
