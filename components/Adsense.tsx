"use client";

import Script from "next/script";

// AdSense Client ID for site verification
const ADSENSE_CLIENT_ID = "ca-pub-1661569191684905";

export function AdsenseScript() {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

