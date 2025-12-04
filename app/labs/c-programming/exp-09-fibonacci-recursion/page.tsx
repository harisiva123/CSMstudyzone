import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 9 – Fibonacci Series Using Recursion | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment to generate Fibonacci series using recursive functions. Includes algorithm, flowchart, recursive implementation, base cases, sample I/O, viva questions, and optimization techniques.",
  keywords: [
    "C programming lab",
    "fibonacci series",
    "recursion",
    "recursive functions",
    "base cases",
    "C lab manual",
    "recursive algorithms"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-09-fibonacci-recursion",
  },
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
            <p className="text-gray-700 leading-relaxed mb-3">
              To generate Fibonacci series using recursive functions in C programming. The Fibonacci sequence is defined as: F(0) = 0, F(1) = 1, and 
              F(n) = F(n-1) + F(n-2) for n &gt; 1. This experiment helps students understand recursion, base cases, recursive problem decomposition, 
              and the trade-offs between recursive and iterative solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to identify base cases, design recursive solutions, understand the call stack, and recognize 
              when recursion is appropriate versus when iterative solutions are more efficient.
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
              <li>Understand the concept of recursion and recursive function calls</li>
              <li>Identify and implement base cases for recursive functions</li>
              <li>Design recursive solutions for mathematical problems</li>
              <li>Understand the Fibonacci sequence and its recursive definition</li>
              <li>Trace recursive function execution and understand the call stack</li>
              <li>Recognize the exponential time complexity of naive recursive Fibonacci</li>
              <li>Compare recursive and iterative approaches</li>
              <li>Understand when recursion is appropriate and when to avoid it</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The recursive algorithm for Fibonacci follows the mathematical definition directly:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Recursive Fibonacci Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Base Case 1:</strong> If n == 0, return 0</li>
                <li><strong>Base Case 2:</strong> If n == 1, return 1</li>
                <li><strong>Recursive Case:</strong> If n &gt; 1, return fibonacci(n-1) + fibonacci(n-2)</li>
              </ol>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> This recursive approach has exponential time complexity O(2^n) because it recalculates the same values multiple 
                times. For better performance with large n, use iterative approach (O(n)) or memoization (O(n) with O(n) space).
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
              Understanding recursion is crucial for advanced programming. While recursive solutions are often elegant, they require careful design of 
              base cases and can be optimized with techniques like memoization. Recursion is fundamental to many algorithms including tree traversal, 
              divide-and-conquer, and dynamic programming.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is recursion and what are its essential components?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Recursion is a technique where a function calls itself to solve a problem. Essential components: base case(s) that stop recursion 
                (prevent infinite calls), recursive case that calls the function with smaller/ simpler input, and progress toward base case. Without 
                proper base cases, recursion leads to infinite loops and stack overflow.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Why is the recursive Fibonacci inefficient for large n?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Recursive Fibonacci recalculates the same values many times. For example, fibonacci(5) calls fibonacci(3) twice, fibonacci(2) three 
                times, etc. This leads to exponential time complexity O(2^n). For n=40, this means over 1 billion function calls! Iterative 
                approach calculates each value once, giving O(n) time complexity.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What is the call stack and how does it relate to recursion?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Call stack stores function call information (parameters, local variables, return address). Each recursive call pushes a new frame onto 
                the stack. When base case is reached, frames are popped in reverse order. Deep recursion can cause stack overflow if stack size is 
                exceeded. Each recursive call uses stack space until it returns.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: How can we optimize recursive Fibonacci?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use memoization: store previously calculated values in an array. Before calculating, check if value exists. If yes, return it; if no, 
                calculate and store. This reduces time complexity from O(2^n) to O(n) with O(n) space. Alternatively, use iterative approach which 
                is O(n) time and O(1) space, or use matrix exponentiation for O(log n) time.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: When should we use recursion vs iteration?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use recursion for problems with natural recursive structure (trees, divide-and-conquer, backtracking) or when recursive solution is 
                more intuitive. Use iteration when recursion causes performance issues, stack overflow risk, or when iterative solution is simpler. 
                Many recursive problems can be converted to iterative using stacks or loops.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: What happens if we forget base cases in recursive Fibonacci?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Without base cases, the function will call itself indefinitely: fibonacci(n) calls fibonacci(n-1) and fibonacci(n-2), which call 
                more functions, never stopping. This causes infinite recursion, leading to stack overflow (running out of stack space) and program 
                crash. Base cases are essential to stop recursion.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: Can you trace the execution of fibonacci(4)?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                fibonacci(4) calls fibonacci(3) + fibonacci(2). fibonacci(3) calls fibonacci(2) + fibonacci(1). fibonacci(2) calls fibonacci(1) + 
                fibonacci(0). Base cases: fibonacci(1)=1, fibonacci(0)=0. So fibonacci(2)=1+0=1, fibonacci(3)=1+1=2, fibonacci(4)=2+1=3. The call 
                tree shows many repeated calculations, demonstrating inefficiency.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: What is tail recursion and can Fibonacci be tail-recursive?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Tail recursion occurs when the recursive call is the last operation. Standard Fibonacci isn't tail-recursive because it performs 
                addition after recursive calls. However, we can write tail-recursive version using accumulator parameters. Tail recursion can be 
                optimized by compilers to avoid stack growth, but C doesn't guarantee this optimization. Iterative version is clearer for Fibonacci.
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
              <li><Link href="/labs/c-programming/exp-08-string-operations" className="text-blue-600 hover:text-blue-700 underline">Experiment 8: String Operations</Link></li>
              <li><Link href="/labs/c-programming/exp-10-array-reverse-pointer" className="text-blue-600 hover:text-blue-700 underline">Experiment 10: Array Reverse with Pointers</Link></li>
              <li><Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 underline">Important C Programs</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
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


