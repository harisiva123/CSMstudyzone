import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "CSM Study Zone – Learn Programming, AI & ML the Smart Way",
  description:
    "Your all-in-one platform to master programming languages, data structures, algorithms, AI & ML concepts, lab experiments, and real-world projects. Explore curated notes, hands-on labs, coding practice and contests.",
  alternates: {
    canonical: "https://www.csmstudyzone.in",
  },
};

export default function Home() {
  return <HomePageClient />;
}
