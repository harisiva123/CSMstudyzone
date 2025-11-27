import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 9 – Fibonacci Using Recursion | C Programming Lab",
  description:
    "Generate Fibonacci series using recursive functions in C programming. Learn recursion, base cases, and recursive problem solving.",
  keywords: ["C programming", "fibonacci", "recursion", "recursive functions", "C lab"],
};

export default function Exp09FibonacciRecursionPage() {
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
          Lab Exercise – 09
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 9 – Fibonacci Using Recursion
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To generate Fibonacci series using recursive functions in C programming. The Fibonacci sequence is defined as: F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n &gt; 1.
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
              <li>Define a recursive function <code className="bg-gray-100 px-1.5 py-0.5 rounded">fibonacci(int n)</code>:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Base case 1: If n == 0, return 0</li>
                  <li>Base case 2: If n == 1, return 1</li>
                  <li>Recursive case: Return fibonacci(n-1) + fibonacci(n-2)</li>
                </ul>
              </li>
              <li>In main function, read the number of terms from user</li>
              <li>Use a loop to call fibonacci function for each term (0 to n-1)</li>
              <li>Display each Fibonacci number</li>
              <li>Note: Recursive approach is less efficient than iterative for large n</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Flowchart
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap">
{`Function: fibonacci(n)
  START
    │
    ├─→ IF (n == 0)
    │   │
    │   └─→ RETURN 0
    │
    ├─→ IF (n == 1)
    │   │
    │   └─→ RETURN 1
    │
    ├─→ ELSE
    │   │
    │   └─→ RETURN fibonacci(n-1) + fibonacci(n-2)
    │
  END

Main Function:
  START
    ├─→ Read n (number of terms)
    ├─→ FOR i = 0 to n-1
    │   │
    │   └─→ Display fibonacci(i)
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

// Recursive function to calculate nth Fibonacci number
int fibonacci(int n) {
    // Base cases
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n, i;
    
    // Input number of terms
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    
    if (n < 0) {
        printf("Error! Number of terms cannot be negative.\\n");
        return 1;
    }
    
    // Display Fibonacci series
    printf("\\nFibonacci Series (first %d terms):\\n", n);
    for (i = 0; i < n; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n");
    
    // Display nth Fibonacci number
    if (n > 0) {
        printf("\\nThe %d", n);
        if (n == 1) {
            printf("st");
        } else if (n == 2) {
            printf("nd");
        } else if (n == 3) {
            printf("rd");
        } else {
            printf("th");
        }
        printf(" Fibonacci number is: %d\\n", fibonacci(n - 1));
    }
    
    return 0;
}

// Note: For better performance with large n, use iterative approach:
/*
int fib_iterative(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1, c;
    for (int i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
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
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter the number of terms: 10</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Fibonacci Series (first 10 terms):
0 1 1 2 3 5 8 13 21 34 

The 10th Fibonacci number is: 34`}</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter the number of terms: 7</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Fibonacci Series (first 7 terms):
0 1 1 2 3 5 8 

The 7th Fibonacci number is: 8`}</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 3:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter the number of terms: 1</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Fibonacci Series (first 1 terms):
0 

The 1st Fibonacci number is: 0`}</pre>
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
              Recursion and Fibonacci numbers have important applications:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Algorithm Design:</strong> Many algorithms use recursion (tree traversal, divide-and-conquer, backtracking)</li>
              <li><strong>Data Structures:</strong> Tree and graph operations are naturally recursive</li>
              <li><strong>Mathematical Modeling:</strong> Fibonacci appears in nature (spiral patterns, golden ratio)</li>
              <li><strong>Financial Analysis:</strong> Fibonacci retracements used in technical analysis of stock markets</li>
              <li><strong>Computer Graphics:</strong> Generating natural-looking curves and patterns</li>
              <li><strong>Dynamic Programming:</strong> Understanding memoization and optimization of recursive solutions</li>
              <li><strong>Compiler Design:</strong> Recursive descent parsing, expression evaluation</li>
              <li><strong>Problem Solving:</strong> Breaking complex problems into smaller subproblems</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding recursion is crucial for advanced programming. While recursive solutions are often elegant, they require careful design of base cases and can be optimized with techniques like memoization.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-08-string-operations"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 8
        </Link>
        <Link
          href="/labs/c-programming/exp-10-array-reverse-pointer"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 10
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}

