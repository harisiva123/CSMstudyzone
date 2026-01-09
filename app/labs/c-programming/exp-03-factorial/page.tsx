import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 3 – Factorial Calculation Using Loops | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment to calculate factorial of a number using iterative approach. Includes algorithm, flowchart, code with comments, sample I/O, viva questions, and real-world applications.",
  keywords: [
    "C programming lab",
    "factorial calculation",
    "for loop",
    "while loop",
    "iterative approach",
    "C lab manual",
    "loops in C",
    "factorial program"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-03-factorial",
  },
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
            <p className="text-gray-700 leading-relaxed mb-3">
              To calculate the factorial of a given number using iterative approach (loops) in C programming. Factorial of n (n!) is the 
              product of all positive integers from 1 to n. This experiment helps students understand loop constructs, iterative problem-solving, 
              and handling edge cases in programming.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to implement iterative solutions, understand the difference between iterative and 
              recursive approaches, and practice using for and while loops effectively.
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
              <li>Understand the concept of factorial and its mathematical definition</li>
              <li>Implement iterative solutions using for and while loops</li>
              <li>Handle edge cases (0!, negative numbers) in programs</li>
              <li>Choose appropriate data types for large factorial values</li>
              <li>Write clean, efficient code for mathematical calculations</li>
              <li>Compare iterative vs recursive approaches to problem-solving</li>
              <li>Debug and test programs with various input values</li>
              <li>Apply loop constructs to solve real-world mathematical problems</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithm to calculate factorial iteratively involves multiplying numbers from 1 to n sequentially:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Algorithm Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Start:</strong> Begin the program execution</li>
                <li><strong>Input:</strong> Read a positive integer <code className="bg-white px-1 rounded">n</code> from the user</li>
                <li><strong>Validate:</strong> Check if <code className="bg-white px-1 rounded">n</code> is negative
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>If negative, display error message and exit</li>
                    <li>If non-negative, proceed to calculation</li>
                  </ul>
                </li>
                <li><strong>Initialize:</strong> Set <code className="bg-white px-1 rounded">factorial = 1</code> and <code className="bg-white px-1 rounded">i = 1</code></li>
                <li><strong>Check Base Case:</strong> If <code className="bg-white px-1 rounded">n == 0</code> or <code className="bg-white px-1 rounded">n == 1</code>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Set <code className="bg-white px-1 rounded">factorial = 1</code> (by definition, 0! = 1 and 1! = 1)</li>
                    <li>Skip to output step</li>
                  </ul>
                </li>
                <li><strong>Iterate:</strong> For <code className="bg-white px-1 rounded">i</code> from 1 to <code className="bg-white px-1 rounded">n</code>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Multiply <code className="bg-white px-1 rounded">factorial</code> by <code className="bg-white px-1 rounded">i</code></li>
                    <li>Increment <code className="bg-white px-1 rounded">i</code> by 1</li>
                    <li>Repeat until <code className="bg-white px-1 rounded">i &gt; n</code></li>
                  </ul>
                </li>
                <li><strong>Output:</strong> Display the factorial result</li>
                <li><strong>Stop:</strong> End the program</li>
              </ol>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700 text-sm">
                <strong>Mathematical Formula:</strong> n! = n × (n-1) × (n-2) × ... × 2 × 1, where 0! = 1 by definition.
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
              Understanding loops and iterative problem-solving is crucial for efficient programming. This experiment teaches you how to break 
              down a mathematical problem into iterative steps. Factorial calculation is a fundamental operation that appears in many algorithms 
              and mathematical computations, making it an essential skill for any programmer.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is factorial? Give the mathematical definition.</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
                Mathematically: n! = n × (n-1) × (n-2) × ... × 2 × 1, with special case 0! = 1.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Why is 0! equal to 1?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                0! = 1 by definition. This is consistent with the empty product convention in mathematics and makes formulas like the 
                binomial coefficient work correctly. It's also consistent with the gamma function, which extends factorial to real numbers.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What data type should be used for storing factorial? Why?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use <code className="bg-gray-100 px-1 rounded">long long</code> or <code className="bg-gray-100 px-1 rounded">unsigned long long</code> because factorial values grow very rapidly. 
                For example, 20! = 2,432,902,008,176,640,000, which exceeds the range of <code className="bg-gray-100 px-1 rounded">int</code>. 
                For very large factorials, consider using libraries that handle arbitrary precision arithmetic.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: What is the difference between iterative and recursive approaches for factorial?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Iterative approach uses loops and is more memory-efficient (O(1) space) and usually faster. Recursive approach calls the 
                function itself and uses the call stack (O(n) space), which can cause stack overflow for large n. Iterative is preferred 
                for factorial calculation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What happens if we calculate factorial of a negative number?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Factorial is not defined for negative numbers in standard mathematics. The program should check for negative input and 
                display an error message. Attempting to calculate factorial of negative numbers leads to undefined behavior or infinite loops.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: Can we use a while loop instead of for loop? Show how.</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, while loop can be used: <code className="bg-gray-100 px-1 rounded">int i = 1; while (i &lt;= n) {'{'} factorial *= i; i++; {'}'}</code>. 
                Both for and while loops are equivalent for this problem. Choose based on readability and coding style preferences.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What is the time complexity of the iterative factorial algorithm?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The time complexity is O(n) because the loop executes n times, performing constant-time multiplication in each iteration. 
                The space complexity is O(1) as we only use a fixed amount of extra memory regardless of input size.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: Why do we initialize factorial to 1 and not 0?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We initialize to 1 because multiplication by 1 is the identity operation. If we initialize to 0, all multiplications would 
                result in 0 (since anything × 0 = 0), giving incorrect results. Starting with 1 ensures correct multiplication accumulation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q9: What is the largest factorial that can be calculated using long long?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">long long</code> can store values up to 9,223,372,036,854,775,807. Factorial of 20 
                (20! = 2,432,902,008,176,640,000) fits, but 21! exceeds this range, causing overflow. For larger factorials, use arbitrary 
                precision libraries or handle overflow detection.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q10: How would you modify the program to calculate factorial using recursion?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Create a recursive function: <code className="bg-gray-100 px-1 rounded">long long factorial(int n) {'{'} if (n &lt;= 1) return 1; return n * factorial(n-1); {'}'}</code>. 
                The base case is n ≤ 1 returning 1, and the recursive case multiplies n by factorial(n-1). This is less efficient than iteration 
                but demonstrates recursion concepts.
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
              <li><Link href="/labs/c-programming/exp-02-largest-of-three" className="text-blue-600 hover:text-blue-700 underline">Experiment 2: Largest of Three</Link></li>
              <li><Link href="/labs/c-programming/exp-04-prime-check" className="text-blue-600 hover:text-blue-700 underline">Experiment 4: Prime Number Check</Link></li>
              <li><Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 underline">Important C Programs</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
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


