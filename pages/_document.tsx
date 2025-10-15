import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CodMonks Technologies",
            "url": "https://codmonks.com",
            "logo": "https://codmonks.com/assets/images/logo-1-tp.png",
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
