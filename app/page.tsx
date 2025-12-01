import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSM Study Zone – Notes, Labs, Projects & Programming for CSM, CSE & AIML",
  description: "Your comprehensive resource for B.Tech CSM, CSE & AIML students. Access unit-wise notes, lab manuals, question banks, project ideas, and programming resources.",
  alternates: {
    canonical: "https://www.csmstudyzone.in",
  },
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16 lg:mb-20">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700">
            🎓 Educational Platform
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome to CSM Study Zone
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Your comprehensive resource for B.Tech CSM, CSE & AIML students.
          Access unit-wise notes, lab manuals, question banks, project ideas,
          and programming resources.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📚</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
              Notes
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comprehensive unit-wise notes for all subjects in CSM, CSE & AIML
              courses.
            </p>
            <Link
              href="/notes"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300"
            >
              Explore Notes
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

        <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 hover:border-green-200 transition-all duration-300 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔬</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
              Labs
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Detailed lab manuals and practical guides for hands-on learning.
            </p>
            <Link
              href="/labs"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group-hover:gap-3 transition-all duration-300"
            >
              View Labs
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

        <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💡</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
              Projects
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Innovative project ideas and implementations for your coursework.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold group-hover:gap-3 transition-all duration-300"
            >
              Browse Projects
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

        <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💻</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
              Programming
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Code examples, algorithms, and programming resources for various
              languages.
            </p>
            <Link
              href="/programming"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold group-hover:gap-3 transition-all duration-300"
            >
              Learn Programming
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-center shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Start Your Learning Journey
          </h2>
          <p className="text-lg sm:text-xl text-blue-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Access high-quality study materials, practice with lab exercises, and
            build projects that enhance your understanding of computer science
            concepts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/notes"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              href="/labs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              View Labs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

