import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/wp-admin/",
        "/wp-content/",
        "/wp-includes/",
        "/wp-login.php",
        "/xmlrpc.php",
        "/feed/",
        "/category/",
        "/author/",
        "/?p=",
        "/?s=",
      ],
    },
    sitemap: "https://lauden.com.br/sitemap.xml",
  };
}
