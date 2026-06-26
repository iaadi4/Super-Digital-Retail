import { Metadata } from "next";
import { products, getActiveCategories } from "@/lib/data";
import { ProductsClientView } from "./products-client";
import { Breadcrumbs } from "@/components/landing/breadcrumbs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Products — Browse Deals Across Categories",
  description: `Explore ${products.length} handpicked products across ${getActiveCategories().length} categories. Compare prices, read real ratings, and buy on Flipkart at the best prices.`,
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "All" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-12 pb-24 font-body">
      <div className="container mx-auto px-4 md:px-8">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductsClientView />
      </div>
    </div>
  );
}
