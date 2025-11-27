import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 3 – Factorial Calculation | C Programming Lab",
  description:
    "Calculate factorial of a number using loops in C programming. Learn iterative approach with for and while loops.",
  keywords: ["C programming", "factorial", "loops", "for loop", "while loop", "C lab"],
};

export default function Exp03FactorialPage() {
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
          Lab Exercise – 03
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 3 – Factorial Calculation
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To calculate the factorial of a given number using iterative approach (loops) in C programming. Factorial of n (n!) is the product of all positive integers from 1 to n.
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
              <li>Declare variables: <code className="bg-gray-100 px-1.5 py-0.5 rounded">n</code> (input number) and <code className="bg-gray-100 px-1.5 py-0.5 rounded">factorial</code> (result, initialize to 1)</li>
              <li>Read the number from user</li>
              <li>Check if number is negative (factorial undefined for negative numbers)</li>
              <li>Use a loop (for or while) to multiply numbers from 1 to n:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Initialize counter i = 1</li>
                  <li>While i &lt;= n, multiply factorial by i</li>
                  <li>Increment i</li>
                </ul>
              </li>
              <li>Display the factorial result</li>
              <li>Handle edge case: factorial of 0 is 1</li>
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
  ├─→ Declare variables: n, factorial = 1, i
  │
  ├─→ Read n
  │
  ├─→ IF (n < 0)
  │   │
  │   └─→ Display "Factorial not defined for negative numbers"
  │   └─→ END
  │
  ├─→ IF (n == 0 || n == 1)
  │   │
  │   └─→ factorial = 1
  │
  ├─→ ELSE
  │   │
  │   ├─→ FOR i = 1 to n
  │   │   │
  │   │   └─→ factorial = factorial * i
  │   │
  │   └─→ END FOR
  │
  ├─→ Display "Factorial of " + n + " = " + factorial
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
    int n, i;
    long long factorial = 1;  // Use long long for large numbers
    
    // Input number
    printf("Enter a positive integer: ");
    scanf("%d", &n);
    
    // Check for negative number
    if (n < 0) {
        printf("Error! Factorial is not defined for negative numbers.\\n");
        return 1;
    }
    
    // Calculate factorial
    if (n == 0 || n == 1) {
        factorial = 1;
    } else {
        for (i = 1; i <= n; i++) {
            factorial *= i;
        }
    }
    
    // Display result
    printf("Factorial of %d = %lld\\n", n, factorial);
    
    return 0;
}

// Alternative using while loop:
/*
i = 1;
while (i <= n) {
    factorial *= i;
    i++;
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
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter a positive integer: 5</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Factorial of 5 = 120</pre>
                <p className="text-xs text-gray-600 mt-2">(5! = 5 × 4 × 3 × 2 × 1 = 120)</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter a positive integer: 0</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Factorial of 0 = 1</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 3:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter a positive integer: 7</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Factorial of 7 = 5040</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 4:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter a positive integer: -5</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Error! Factorial is not defined for negative numbers.</pre>
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
              Factorial calculation is fundamental in mathematics and computer science:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Combinatorics:</strong> Calculating permutations and combinations (nPr, nCr)</li>
              <li><strong>Probability Theory:</strong> Computing probabilities in various scenarios</li>
              <li><strong>Statistics:</strong> Used in binomial distribution and other statistical formulas</li>
              <li><strong>Algorithm Analysis:</strong> Understanding time complexity of algorithms (e.g., generating all permutations)</li>
              <li><strong>Taylor Series:</strong> Used in mathematical series expansions (e.g., e^x, sin(x))</li>
              <li><strong>Cryptography:</strong> Some encryption algorithms use factorial-based calculations</li>
              <li><strong>Game Development:</strong> Calculating possible moves or combinations in puzzle games</li>
              <li><strong>Data Structures:</strong> Used in tree structures and graph algorithms</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding loops and iterative problem-solving is crucial for efficient programming. This experiment teaches you how to break down a mathematical problem into iterative steps.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-02-largest-of-three"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 2
        </Link>
        <Link
          href="/labs/c-programming/exp-04-prime-check"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 4
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}

