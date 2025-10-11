import "../styles/globals.css";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";

// Import the Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS

// Prevent Font Awesome from adding its CSS automatically since we imported it above
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically
import Layout from '../components/Layout';
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-5KZMPH39" });
  }, []);
  return (<>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <SpeedInsights />
  </>);
}
