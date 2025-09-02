import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CodMonks Technologies",
            "url": "https://www.codmonks.com",
            "logo": "https://www.codmonks.com/assets/images/logo-1-tp.png",
            "sameAs": [
              "https://www.facebook.com/codmonks",
              "https://www.linkedin.com/company/codmonks",
              "https://twitter.com/codmonks"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919716837371",
              "contactType": "customer service",
              "areaServed": "Worldwide",
              "availableLanguage": "English"
            }
          }
          `}} />
      </body>
    </Html>
  );
}
