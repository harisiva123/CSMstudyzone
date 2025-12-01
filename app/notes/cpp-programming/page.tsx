import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "C++ Programming Notes – Complete Guide",
  description:
    "Comprehensive C++ programming notes covering introduction, operators, control structures, functions, OOP concepts, inheritance, polymorphism, pointers, arrays, structures, file handling, exception handling, templates, and STL.",
  keywords: [
    "C++ programming",
    "C++ notes",
    "object-oriented programming",
    "C++ tutorial",
    "C++ concepts",
    "OOP C++",
    "C++ STL",
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming",
  },
};

const cppTopics = [
  {
    slug: "introduction",
    title: "Introduction to C++",
    description: "History, features, and basic structure of C++ programs",
  },
  {
    slug: "operators",
    title: "Operators & Expressions",
    description: "Arithmetic, relational, logical, and bitwise operators",
  },
  {
    slug: "control-structures",
    title: "Control Structures",
    description: "if-else, switch, loops (for, while, do-while), and break/continue",
  },
  {
    slug: "functions",
    title: "Functions in C++",
    description: "Function declaration, definition, parameters, return types, and overloading",
  },
  {
    slug: "oop",
    title: "OOP Concepts",
    description: "Classes, objects, encapsulation, abstraction, and access specifiers",
  },
  {
    slug: "inheritance",
    title: "Inheritance",
    description: "Single, multiple, multilevel, hierarchical, and hybrid inheritance",
  },
  {
    slug: "polymorphism",
    title: "Polymorphism",
    description: "Compile-time and runtime polymorphism, virtual functions, and function overriding",
  },
  {
    slug: "pointers",
    title: "Pointers & Memory",
    description: "Pointers, references, dynamic memory allocation, and memory management",
  },
  {
    slug: "arrays",
    title: "Arrays & Strings",
    description: "Arrays, multidimensional arrays, strings, and string manipulation",
  },
  {
    slug: "structures",
    title: "Structures & Unions",
    description: "Structures, unions, nested structures, and typedef",
  },
  {
    slug: "files",
    title: "File Handling",
    description: "File operations, reading/writing files, and file streams",
  },
  {
    slug: "exceptions",
    title: "Exception Handling",
    description: "try-catch blocks, throw, and exception classes",
  },
  {
    slug: "templates",
    title: "Templates",
    description: "Function templates, class templates, and template specialization",
  },
  {
    slug: "stl",
    title: "STL Overview",
    description: "Standard Template Library: containers, iterators, and algorithms",
  },
];

export default function CppProgrammingPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Page Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          C++ Programming – Notes
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl leading-relaxed">
          Browse topic-wise notes, syntax, and examples for C++ programming. Learn object-oriented programming concepts, STL, and advanced C++ features.
        </p>
        <Link
          href="/notes"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base"
        >
          <span>←</span> Back to Notes
        </Link>
      </div>

      {/* Submenu Navigation */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          Topics
        </h2>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cppTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/notes/cpp-programming/${topic.slug}`}
              className="group block rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {topic.description}
              </p>
              <div className="mt-4 text-blue-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1">
                Read more
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
