import { useEffect } from "react";

import { BUSINESS } from "../data/site";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

function upsertMeta(
  name: string,
  content: string
) {
  let element = document.querySelector(
    `meta[name="${name}"]`
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }

  element.content = content;
}

function upsertCanonical(url: string) {
  let link = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }

  link.href = url;
}

export default function Seo({
  title,
  description,
  path = "/",
}: SeoProps) {
  useEffect(() => {
    const siteUrl = (
      import.meta.env.VITE_SITE_URL ||
      window.location.origin
    ).replace(/\/$/, "");

    const normalizedPath =
      path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;

    const canonical = `${siteUrl}${normalizedPath}`;

    document.title = title;

    upsertMeta("description", description);

    upsertCanonical(canonical);

    // --------------------------------------------------------
    // Open Graph
    // --------------------------------------------------------

    upsertProperty("og:title", title);
    upsertProperty("og:description", description);
    upsertProperty("og:url", canonical);
    upsertProperty("og:type", "website");
    upsertProperty("og:site_name", BUSINESS.name);

    // --------------------------------------------------------
    // Twitter
    // --------------------------------------------------------

    upsertProperty("twitter:card", "summary_large_image");
    upsertProperty("twitter:title", title);
    upsertProperty("twitter:description", description);

    // --------------------------------------------------------
    // Structured Data
    // --------------------------------------------------------

    const existing = document.getElementById(
      "hafiz-structured-data"
    );

    if (existing) {
      existing.remove();
    }

    const script = document.createElement("script");

    script.id = "hafiz-structured-data";
    script.type = "application/ld+json";

    script.textContent = JSON.stringify({
      "@context": "https://schema.org",

      "@graph": [
        {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: BUSINESS.name,
          url: siteUrl,
          telephone: BUSINESS.phone,
        },

        {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#business`,
          name: BUSINESS.name,
          url: siteUrl,
          telephone: BUSINESS.phone,

          address: {
            "@type": "PostalAddress",
            streetAddress: "Pabla, Incholi",
            addressLocality: "Meerut",
            addressRegion: "Uttar Pradesh",
            postalCode: "",
            addressCountry: "IN",
          },

          areaServed: [
            "Meerut",
            "Uttar Pradesh",
            "India",
          ],
        },
      ],
    });

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [title, description, path]);

  return null;
}

function upsertProperty(
  property: string,
  content: string
) {
  let element = document.querySelector(
    `meta[property="${property}"]`
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.content = content;
}