import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { ProductView } from "./product-view";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductView product={product} />;
}
