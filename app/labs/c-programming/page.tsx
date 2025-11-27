import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "C Programming Laboratory – Lab Experiments",
  description:
    "Complete C Programming lab experiments covering basic I/O, control structures, arrays, strings, functions, pointers, structures, file handling, and dynamic memory allocation.",
  keywords: [
    "C programming lab",
    "C lab experiments",
    "C programming exercises",
    "C lab manual",
    "programming lab",
  ],
};

const experiments = [
  {
    number: "01",
    slug: "exp-01-basic-io",
    title: "Basic I/O and Arithmetic",
    description: "Learn input/output operations and basic arithmetic calculations in C",
  },
  {
    number: "02",
    slug: "exp-02-largest-of-three",
    title: "Largest of Three Numbers",
    description: "Find the largest among three numbers using conditional statements",
  },
  {
    number: "03",
    slug: "exp-03-factorial",
    title: "Factorial Calculation",
    description: "Calculate factorial of a number using loops",
  },
  {
    number: "04",
    slug: "exp-04-prime-check",
    title: "Prime Number Check",
    description: "Check if a number is prime using loops and conditions",
  },
  {
    number: "05",
    slug: "exp-05-menu-calculator",
    title: "Menu-Driven Calculator",
    description: "Create a calculator with menu options using switch-case",
  },
  {
    number: "06",
    slug: "exp-06-array-stats",
    title: "Array Statistics",
    description: "Calculate sum, average, maximum, and minimum of array elements",
  },
  {
    number: "07",
    slug: "exp-07-matrix-operations",
    title: "Matrix Operations",
    description: "Perform addition, subtraction, and multiplication of matrices",
  },
  {
    number: "08",
    slug: "exp-08-string-operations",
    title: "String Operations",
    description: "Implement string manipulation functions like length, copy, concatenate",
  },
  {
    number: "09",
    slug: "exp-09-fibonacci-recursion",
    title: "Fibonacci Using Recursion",
    description: "Generate Fibonacci series using recursive functions",
  },
  {
    number: "10",
    slug: "exp-10-array-reverse-pointer",
    title: "Array Reverse Using Pointers",
    description: "Reverse an array using pointer arithmetic",
  },
  {
    number: "11",
    slug: "exp-11-structures-student",
    title: "Structures – Student Record",
    description: "Create and manage student records using structures",
  },
  {
    number: "12",
    slug: "exp-12-file-student-records",
    title: "File Handling – Student Records",
    description: "Store and retrieve student records from files",
  },
  {
    number: "13",
    slug: "exp-13-search-sort",
    title: "Search and Sort Algorithms",
    description: "Implement linear search, binary search, and sorting algorithms",
  },
  {
    number: "14",
    slug: "exp-14-dynamic-memory",
    title: "Dynamic Memory Allocation",
    description: "Use malloc, calloc, realloc, and free for dynamic memory management",
  },
];

export default function CProgrammingLabPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Hero Section */}
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          C Programming Laboratory
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-2 max-w-3xl mx-auto leading-relaxed">
          Comprehensive lab experiments covering fundamental to advanced C programming concepts
        </p>
        <p className="text-base text-gray-500 max-w-2xl mx-auto">
          Each experiment includes aim, procedure, flowchart, program code, sample I/O, and real-world applications
        </p>
        <Link
          href="/labs"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors text-sm sm:text-base mt-4"
        >
          <span>←</span> Back to Labs
        </Link>
      </div>

      {/* Experiments Grid */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
          Lab Experiments
        </h2>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {experiments.map((exp) => (
            <Link
              key={exp.slug}
              href={`/labs/c-programming/${exp.slug}`}
              className="group block rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                  Lab Exercise – {exp.number}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                Experiment {exp.number} – {exp.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="text-green-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1">
                View Experiment
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          About This Lab
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          This C Programming Laboratory section provides hands-on experiments designed to strengthen your understanding of C programming fundamentals. Each experiment is structured with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li><strong>Aim:</strong> Clear learning objectives for each experiment</li>
          <li><strong>Procedure:</strong> Step-by-step instructions to complete the task</li>
          <li><strong>Flowchart:</strong> Visual representation of program logic</li>
          <li><strong>Program Code:</strong> Complete, well-commented C source code</li>
          <li><strong>Sample Input/Output:</strong> Example test cases and expected results</li>
          <li><strong>Use Case:</strong> Real-world applications and relevance</li>
        </ul>
      </div>
    </main>
  );
}

