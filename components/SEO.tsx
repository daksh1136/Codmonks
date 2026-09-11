import Head from "next/head";

const SITE_URL = "https://codmonks.com";
const DEFAULT_IMAGE = "/assets/images/og-banner.webp";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

type SEOProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: JsonLd;
};

export const absoluteUrl = (path: string) => path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export function SEO({ title, description, path, image = DEFAULT_IMAGE, type = "website", noindex = false, jsonLd }: SEOProps) {
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image);
  return <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {noindex && <meta name="robots" content="noindex,nofollow" />}
    <link rel="canonical" href={canonical} />
    <meta property="og:type" content={type} />
    <meta property="og:site_name" content="CodMonks" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={socialImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={socialImage} />
    {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
  </Head>;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodMonks Technologies",
  url: SITE_URL,
  logo: absoluteUrl("/assets/images/logo-1-tp.png"),
  contactPoint: { "@type": "ContactPoint", telephone: "+919716837371", contactType: "customer service", areaServed: "Worldwide", availableLanguage: "English" },
};

export const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "CodMonks", url: SITE_URL };

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })),
});
