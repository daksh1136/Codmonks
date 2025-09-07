import "../styles/globals.css";
import type { AppProps } from "next/app";

// Import the Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS

// Prevent Font Awesome from adding its CSS automatically since we imported it above
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (<Layout>
    <Component {...pageProps} />
  </Layout>);
}
