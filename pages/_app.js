import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/reset.css";
import "../styles/globals.scss";
import Script from "next/script";
import * as ga from "../lib/google-analitycs";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routerChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routerChangeComplete", handleRouterChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8BHR6064F5"
        strategy="afterInteractive"
      />

      <Script id="google-analytics-script" strategy="afterInteractive">
        {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8BHR6064F5');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
