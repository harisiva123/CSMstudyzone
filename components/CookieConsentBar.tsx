"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_KEY = "csmstudyzone_cookie_consent";

const CookieConsentBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const value = window.localStorage.getItem(COOKIE_KEY);
    if (value !== "accepted") {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(COOKIE_KEY, "accepted");
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 text-xs text-slate-700 sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-snug">
          We use cookies and similar technologies to improve your experience and to show relevant content.
          By using CSM Study Zone, you agree to our{" "}
          <Link href="/privacy-policy" className="font-semibold text-indigo-600 hover:underline">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-indigo-700 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBar;

