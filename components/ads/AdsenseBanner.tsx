"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdsenseBannerProps {
  slotId: string; // e.g. "1234567890"
  className?: string;
}

const AdsenseBanner: React.FC<AdsenseBannerProps> = ({ slotId, className }) => {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!clientId) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // fail silently in dev or before approval
      console.debug("AdSense error:", e);
    }
  }, [clientId]);

  if (!clientId) return null;

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdsenseBanner;

