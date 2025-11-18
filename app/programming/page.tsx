import Link from "next/link";
import { programmingItems } from "@/content/programming";

export default function ProgrammingPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
        Programming
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Learn C, Python, Java and Data Structures concepts with concise notes
        and example programs.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programmingItems.map((item) => (
          <Link
            key={item.slug}
            href={`/programming/${item.slug}`}
            className="group block rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              {item.category}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{item.summary}</p>
            <div className="mt-4 text-orange-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1">
              Learn More
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

