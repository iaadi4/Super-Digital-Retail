import { Metadata } from "next";
import { products, getActiveCategories } from "@/lib/data";
import { ProductsClientView } from "./products-client";
import { Breadcrumbs } from "@/components/landing/breadcrumbs";

export const metadata: Metadata = {
  title: "All Products — Browse Deals Across Categories",
  description: `Explore ${products.length} handpicked products across ${getActiveCategories().length} categories. Compare prices, read real ratings, and buy on Flipkart at the best prices.`,
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  const breadcrumbItems = [{ label: "All Products" }];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-2">
              All Products
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover {products.length} curated products across {getActiveCategories().length} categories.
            </p>
          </div>
        </div>

        <ProductsClientView />
      </div>
    </div>
  );
}
