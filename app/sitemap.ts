import type { MetadataRoute } from "next";

const routes = [
  "",
  "/projects",
  "/projects/enverse",
  "/projects/darksky",
  "/projects/klever",
  "/experience",
  "/about",
  "/resume",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://iqra-khan-portfolio-self.vercel.app";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-07-15"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.startsWith("/projects") ? 0.85 : 0.7,
  }));
}
