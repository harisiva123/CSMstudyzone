import Link from "next/link";
import type { Metadata } from "next";
import { programmingItems } from "@/content/programming";

export const metadata: Metadata = {
  title: "Programming",
  description: "Learn C, Python, Java and Data Structures concepts with concise notes and example programs. Comprehensive programming resources for B.Tech CSM, CSE and AIML students.",
  alternates: {
    canonical: "https://www.csmstudyzone.in/programming",
  },
};

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

      {/* C Programming Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">C Programming</h2>
        <p className="text-gray-600 mb-6">
          Comprehensive C programming resources including basics, tips, programs, practice questions, debugging guides, viva questions, and complete notes.
        </p>
        
        {/* C Language Notes Card */}
        <div className="mb-6">
          <Link
            href="/programming/c-language/notes"
            className="group block rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
              C Language – Topic-wise Notes
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Browse comprehensive topic-wise notes with syntax, examples, and explanations for all C programming concepts.
            </p>
            <div className="text-indigo-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1">
              Explore Notes
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        </div>

        <ul className="space-y-3 prose prose-lg">
          <li>
            <Link href="/programming/c-language" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              C Basics
            </Link>
          </li>
          <li>
            <Link href="/programming/c-language/programming-tips" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Tips & Best Practices
            </Link>
          </li>
          <li>
            <Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Important Programs
            </Link>
          </li>
          <li>
            <Link href="/programming/c-language/practice-questions" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Practice Questions
            </Link>
          </li>
          <li>
            <Link href="/programming/c-language/debugging" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Debugging Guide
            </Link>
          </li>
          <li>
            <Link href="/programming/c-language/viva-questions" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Viva Questions
            </Link>
          </li>
          <li>
            <Link href="/programming/c-language/full-notes" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Full Notes
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

