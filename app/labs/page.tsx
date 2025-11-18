import Link from "next/link";
import { labs } from "@/content/labs";

export default function LabsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Labs
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Explore lab experiments for CVIP, Machine Learning, Python and more.
        Each experiment includes objective, theory, algorithm and implementation outline.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab) => (
          <Link
            key={lab.slug}
            href={`/labs/${lab.slug}`}
            className="group block rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
              {lab.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              {lab.category}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{lab.summary}</p>
            <div className="mt-4 text-green-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1">
              View Lab
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

