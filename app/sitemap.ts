import { MetadataRoute } from "next";
import { products, getActiveCategories, getProductSlug, getCategorySlug } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://superdigitalretail.in";

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${getProductSlug(product)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Only include categories that have products — never index empty categories
  const activeCategories = getActiveCategories();

  const categoryUrls = activeCategories.map((cat) => ({
    url: `${baseUrl}/category/${getCategorySlug(cat)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...categoryUrls,
    ...productUrls,
  ];
}
