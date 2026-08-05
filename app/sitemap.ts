import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "www.asacreative.space", // TODO: replace with custom domain later
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
