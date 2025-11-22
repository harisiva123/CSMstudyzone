import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  title: {
    default: "CSMstudyzone.in – Notes, Labs, Projects & Programming for CSM, CSE & AIML",
    template: "%s | CSM Study Zone",
  },
  description:
    "CSM Study Zone offers unit-wise notes, lab manuals, question banks, project ideas, and programming resources for B.Tech CSM, CSE, and AIML students.",
  keywords: [
    "CSM notes",
    "CSE study materials",
    "AIML resources",
    "lab manuals",
    "programming examples",
    "question bank",
    "B.Tech CSM",
  ],
  authors: [{ name: "CSM Study Zone" }],
  creator: "CSM Study Zone",
  publisher: "CSM Study Zone",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.csmstudyzone.in"),
  icons: {
    icon: "/csm-logo.png",
    shortcut: "/csm-logo.png",
    apple: "/csm-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.csmstudyzone.in",
    siteName: "CSM Study Zone",
    title: "CSMstudyzone.in – Notes, Labs, Projects & Programming for CSM, CSE & AIML",
    description:
      "CSM Study Zone offers unit-wise notes, lab manuals, question banks, project ideas, and programming resources for B.Tech CSM, CSE, and AIML students.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSMstudyzone.in – Notes, Labs, Projects & Programming for CSM, CSE & AIML",
    description:
      "CSM Study Zone offers unit-wise notes, lab manuals, question banks, project ideas, and programming resources for B.Tech CSM, CSE, and AIML students.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Analytics />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

