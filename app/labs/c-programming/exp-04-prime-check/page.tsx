import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 4 – Prime Number Check Using Loops | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment to check if a number is prime. Includes algorithm, flowchart, optimized code, sample I/O, viva questions, and real-world applications in cryptography and security.",
  keywords: [
    "C programming lab",
    "prime number check",
    "prime number algorithm",
    "loops in C",
    "C lab manual",
    "prime number program",
    "number theory",
    "cryptography"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-04-prime-check",
  },
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
            <p className="text-gray-700 leading-relaxed mb-3">
              To check whether a given number is prime or not using loops and conditional statements. A prime number is a natural number greater 
              than 1 that has no positive divisors other than 1 and itself. This experiment helps students understand efficient algorithm design, 
              loop optimization, and mathematical problem-solving in programming.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to implement prime checking algorithms, understand optimization techniques (checking 
              up to sqrt(n)), and handle edge cases in mathematical computations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Learning Outcomes
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              After completing this experiment, students will be able to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Understand the mathematical definition of prime numbers</li>
              <li>Implement prime checking algorithms using loops and conditions</li>
              <li>Apply optimization techniques (checking up to sqrt(n) instead of n/2)</li>
              <li>Handle edge cases (numbers less than 2, even numbers, etc.)</li>
              <li>Use break statement to exit loops early when divisor is found</li>
              <li>Write efficient code by reducing unnecessary iterations</li>
              <li>Understand the importance of algorithm optimization</li>
              <li>Apply mathematical concepts in programming solutions</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithm to check if a number is prime involves testing divisibility by numbers from 2 to sqrt(n):
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Algorithm Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Start:</strong> Begin program execution</li>
                <li><strong>Input:</strong> Read a positive integer <code className="bg-white px-1 rounded">n</code> from the user</li>
                <li><strong>Check Base Cases:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>If <code className="bg-white px-1 rounded">n &lt; 2</code>, it's not prime (return false)</li>
                    <li>If <code className="bg-white px-1 rounded">n == 2</code>, it's prime (return true)</li>
                    <li>If <code className="bg-white px-1 rounded">n</code> is even and <code className="bg-white px-1 rounded">n &gt; 2</code>, it's not prime</li>
                  </ul>
                </li>
                <li><strong>Check Odd Divisors:</strong> For odd numbers greater than 2
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Initialize <code className="bg-white px-1 rounded">flag = 0</code> (0 means prime, 1 means composite)</li>
                    <li>Loop from <code className="bg-white px-1 rounded">i = 3</code> to <code className="bg-white px-1 rounded">sqrt(n)</code>, increment by 2 (only check odd numbers)</li>
                    <li>If <code className="bg-white px-1 rounded">n % i == 0</code>, set <code className="bg-white px-1 rounded">flag = 1</code> and break</li>
                  </ul>
                </li>
                <li><strong>Determine Result:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>If <code className="bg-white px-1 rounded">flag == 0</code>, number is prime</li>
                    <li>If <code className="bg-white px-1 rounded">flag == 1</code>, number is composite (not prime)</li>
                  </ul>
                </li>
                <li><strong>Output:</strong> Display whether the number is prime or not</li>
                <li><strong>Stop:</strong> End program execution</li>
              </ol>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700 text-sm">
                <strong>Optimization Note:</strong> We only check up to sqrt(n) because if n has a divisor greater than sqrt(n), it must also 
                have a corresponding divisor less than sqrt(n). Checking only odd numbers (after verifying it's not even) further optimizes 
                the algorithm.
              </p>
            </div>
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
              Understanding prime number algorithms helps in learning optimization techniques, as efficient prime checking requires careful loop 
              design and mathematical insights. Prime numbers are fundamental in computer science, especially in security and cryptography 
              applications where large primes are essential for encryption algorithms.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is a prime number? Give examples.</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A prime number is a natural number greater than 1 that has exactly two distinct positive divisors: 1 and itself. Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. 
                Note that 1 is not considered prime because it has only one divisor.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Why do we check only up to sqrt(n) instead of n/2 or n-1?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                If n has a divisor greater than sqrt(n), it must have a corresponding divisor less than sqrt(n). For example, if 100 has divisor 20, 
                it also has 5 (since 20 × 5 = 100). Checking up to sqrt(n) is sufficient and more efficient. This reduces time complexity from O(n) to O(√n).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: Why do we check if the number is even before the loop?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                All even numbers greater than 2 are composite (divisible by 2). By checking this first, we can immediately determine they're not prime 
                without entering the loop, saving computation. The only even prime number is 2, which we handle as a special case.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: What is the time complexity of the prime checking algorithm?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The optimized algorithm has time complexity O(√n) because we check divisors only up to sqrt(n). The naive approach checking up to n-1 would 
                be O(n). For very large numbers, more advanced algorithms like the Sieve of Eratosthenes or probabilistic tests are used.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: Can we use a while loop instead of for loop? Show how.</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes: <code className="bg-gray-100 px-1 rounded">int i = 3; while (i &lt;= sqrt(n)) {'{'} if (n % i == 0) {'{'} flag = 1; break; {'}'} i += 2; {'}'}</code>. 
                Both loops are equivalent. The for loop is more concise, while the while loop gives more explicit control over the increment.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: What happens if we don't use the break statement?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Without break, the loop continues checking all divisors even after finding one, which is inefficient but still correct. The break statement 
                optimizes the algorithm by stopping as soon as we find a divisor, since we only need to know if any divisor exists, not find all divisors.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: Why is 2 a special case in prime checking?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                2 is the only even prime number. All other even numbers are divisible by 2, making them composite. We handle 2 as a special case because 
                our optimization skips even numbers in the loop. Without this check, 2 would incorrectly be identified as composite.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: How would you modify the program to find all prime numbers up to N?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use nested loops: outer loop from 2 to N, inner loop checks if each number is prime. More efficiently, use the Sieve of Eratosthenes 
                algorithm which marks multiples of primes, eliminating the need to check each number individually. This reduces complexity significantly 
                for finding multiple primes.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/programming/c-language" className="text-blue-600 hover:text-blue-700 underline">C Language Basics</Link></li>
              <li><Link href="/programming/c-language/full-notes" className="text-blue-600 hover:text-blue-700 underline">Full C Language Notes</Link></li>
              <li><Link href="/labs/c-programming/exp-03-factorial" className="text-blue-600 hover:text-blue-700 underline">Experiment 3: Factorial</Link></li>
              <li><Link href="/labs/c-programming/exp-05-menu-calculator" className="text-blue-600 hover:text-blue-700 underline">Experiment 5: Menu Calculator</Link></li>
              <li><Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 underline">Important C Programs</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
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


