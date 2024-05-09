import { MetadataRoute } from "next";
export default async function robots(): Promise<MetadataRoute.Robots> {
  const BASE_URL: string = "https://webdrei.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow:[ "/admin","api"]
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
