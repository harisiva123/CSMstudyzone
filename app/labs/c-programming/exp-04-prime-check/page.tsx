import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 4 – Prime Number Check | C Programming Lab",
  description:
    "Check if a number is prime using loops and conditions in C programming. Learn efficient prime checking algorithms.",
  keywords: ["C programming", "prime number", "loops", "conditionals", "C lab"],
};

export default function Exp04PrimeCheckPage() {
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
          Lab Exercise – 04
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 4 – Prime Number Check
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To check whether a given number is prime or not using loops and conditional statements. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdio.h</code> and optionally <code className="bg-gray-100 px-1.5 py-0.5 rounded">math.h</code> for sqrt function</li>
              <li>Declare variables: <code className="bg-gray-100 px-1.5 py-0.5 rounded">n</code> (number to check) and <code className="bg-gray-100 px-1.5 py-0.5 rounded">flag</code> (0 for prime, 1 for composite)</li>
              <li>Read the number from user</li>
              <li>Check if number is less than 2 (not prime)</li>
              <li>Check if number is 2 (prime)</li>
              <li>For numbers greater than 2, check divisibility:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Loop from 2 to sqrt(n) or n/2</li>
                  <li>If n is divisible by any number, set flag = 1 and break</li>
                  <li>If no divisor found, number is prime</li>
                </ul>
              </li>
              <li>Display result based on flag value</li>
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
  ├─→ Declare variables: n, i, flag = 0
  │
  ├─→ Read n
  │
  ├─→ IF (n < 2)
  │   │
  │   └─→ Display "Not a prime number"
  │   └─→ END
  │
  ├─→ IF (n == 2)
  │   │
  │   └─→ Display "Prime number"
  │   └─→ END
  │
  ├─→ FOR i = 2 to sqrt(n)
  │   │
  │   ├─→ IF (n % i == 0)
  │   │   │
  │   │   ├─→ flag = 1
  │   │   └─→ BREAK
  │   │
  │   └─→ END FOR
  │
  ├─→ IF (flag == 0)
  │   │
  │   └─→ Display "Prime number"
  │
  ├─→ ELSE
  │   │
  │   └─→ Display "Not a prime number"
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
#include <math.h>

int main() {
    int n, i, flag = 0;
    
    // Input number
    printf("Enter a positive integer: ");
    scanf("%d", &n);
    
    // Check for numbers less than 2
    if (n < 2) {
        printf("%d is not a prime number.\\n", n);
        return 0;
    }
    
    // 2 is the only even prime number
    if (n == 2) {
        printf("%d is a prime number.\\n", n);
        return 0;
    }
    
    // Check for even numbers (except 2)
    if (n % 2 == 0) {
        printf("%d is not a prime number.\\n", n);
        return 0;
    }
    
    // Check divisibility from 3 to sqrt(n), step by 2
    for (i = 3; i <= sqrt(n); i += 2) {
        if (n % i == 0) {
            flag = 1;
            break;
        }
    }
    
    // Display result
    if (flag == 0) {
        printf("%d is a prime number.\\n", n);
    } else {
        printf("%d is not a prime number.\\n", n);
    }
    
    return 0;
}

// Simpler version without math.h:
/*
for (i = 2; i <= n/2; i++) {
    if (n % i == 0) {
        flag = 1;
        break;
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
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter a positive integer: 17</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">17 is a prime number.</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter a positive integer: 15</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">15 is not a prime number.</pre>
                <p className="text-xs text-gray-600 mt-2">(15 = 3 × 5)</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 3:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter a positive integer: 1</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">1 is not a prime number.</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 4:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter a positive integer: 29</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">29 is a prime number.</pre>
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
              Prime numbers are fundamental in mathematics and have critical applications:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Cryptography:</strong> RSA encryption relies on large prime numbers for security</li>
              <li><strong>Hash Functions:</strong> Prime numbers are used in hash table implementations for better distribution</li>
              <li><strong>Random Number Generation:</strong> Prime numbers are used in pseudo-random number generators</li>
              <li><strong>Error Detection:</strong> Checksums and error-correcting codes use prime numbers</li>
              <li><strong>Computer Science:</strong> Prime numbers help in designing efficient algorithms and data structures</li>
              <li><strong>Mathematics:</strong> Fundamental in number theory, used in factorization and modular arithmetic</li>
              <li><strong>Security Systems:</strong> Prime numbers are essential in digital signatures and secure communications</li>
              <li><strong>Game Development:</strong> Used in procedural generation and randomization algorithms</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding prime number algorithms helps in learning optimization techniques, as efficient prime checking requires careful loop design and mathematical insights.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-03-factorial"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 3
        </Link>
        <Link
          href="/labs/c-programming/exp-05-menu-calculator"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 5
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}

