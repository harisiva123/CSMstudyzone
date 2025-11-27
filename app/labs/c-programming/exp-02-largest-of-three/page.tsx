import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 2 – Largest of Three Numbers | C Programming Lab",
  description:
    "Find the largest among three numbers using conditional statements (if-else) in C programming. Learn decision-making logic and comparison operators.",
  keywords: ["C programming", "largest of three", "if-else", "conditional statements", "C lab"],
};

export default function Exp02LargestOfThreePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link
          href="/labs/c-programming"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors text-sm sm:text-base"
        >
          <span>←</span> Back to Lab Home
        </Link>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
          Lab Exercise – 02
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 2 – Largest of Three Numbers
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To find the largest among three numbers entered by the user using conditional statements (<code className="bg-gray-100 px-1.5 py-0.5 rounded">if-else</code> and nested <code className="bg-gray-100 px-1.5 py-0.5 rounded">if-else</code>) and comparison operators in C programming.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdio.h</code> header file</li>
              <li>Declare three variables to store the numbers</li>
              <li>Read three numbers from the user using <code className="bg-gray-100 px-1.5 py-0.5 rounded">scanf()</code></li>
              <li>Use nested if-else statements to compare the numbers:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Compare first number with second and third</li>
                  <li>If first is largest, display it</li>
                  <li>Else compare second with third</li>
                  <li>Display the largest number</li>
                </ul>
              </li>
              <li>Alternatively, use logical AND operator (<code className="bg-gray-100 px-1.5 py-0.5 rounded">&&</code>) for cleaner code</li>
              <li>Compile and test with different input combinations</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Flowchart
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap">
{`START
  │
  ├─→ Declare variables: a, b, c, largest
  │
  ├─→ Read a, b, c
  │
  ├─→ IF (a >= b && a >= c)
  │   │
  │   └─→ largest = a
  │
  ├─→ ELSE IF (b >= a && b >= c)
  │   │
  │   └─→ largest = b
  │
  ├─→ ELSE
  │   │
  │   └─→ largest = c
  │
  ├─→ Display "Largest number is: " + largest
  │
  └─→ END`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Program Code
          </h2>
          <div className="bg-gray-900 text-gray-100 p-4 sm:p-6 rounded-lg overflow-x-auto shadow-lg">
            <pre className="text-sm sm:text-base">
              <code>{`#include <stdio.h>

int main() {
    int a, b, c, largest;
    
    // Input three numbers
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    
    // Find the largest using if-else
    if (a >= b && a >= c) {
        largest = a;
    }
    else if (b >= a && b >= c) {
        largest = b;
    }
    else {
        largest = c;
    }
    
    // Display result
    printf("\\nThe largest number among %d, %d, and %d is: %d\\n", 
           a, b, c, largest);
    
    return 0;
}

// Alternative method using nested if-else:
/*
if (a > b) {
    if (a > c) {
        largest = a;
    } else {
        largest = c;
    }
} else {
    if (b > c) {
        largest = b;
    } else {
        largest = c;
    }
}
*/`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Sample Input and Output
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 1:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter three numbers: 15 42 8</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">The largest number among 15, 42, and 8 is: 42</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter three numbers: 100 100 50</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">The largest number among 100, 100, and 50 is: 100</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 3:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter three numbers: 7 12 25</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">The largest number among 7, 12, and 25 is: 25</pre>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Use Case / Real-world Relevance
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              Finding the maximum or minimum value among multiple inputs is a common requirement in programming:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Grading Systems:</strong> Finding the highest score among multiple test results</li>
              <li><strong>Business Analytics:</strong> Identifying the best performing product, region, or salesperson</li>
              <li><strong>Game Development:</strong> Determining the highest score, best time, or maximum damage</li>
              <li><strong>Data Analysis:</strong> Finding peak values, maximum temperatures, or highest sales in datasets</li>
              <li><strong>Resource Management:</strong> Allocating resources based on maximum demand or priority</li>
              <li><strong>Sorting Algorithms:</strong> This logic is fundamental to sorting and searching algorithms</li>
              <li><strong>Decision Making Systems:</strong> AI systems that need to choose the best option from multiple alternatives</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding conditional logic and comparison operations is essential for implementing decision-making in programs.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-01-basic-io"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 1
        </Link>
        <Link
          href="/labs/c-programming/exp-03-factorial"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 3
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}

