import { MetadataRoute } from "next";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL: string = "https://webdrei.com";

  return [
    {
      url: BASE_URL,
    },
  ];
}
