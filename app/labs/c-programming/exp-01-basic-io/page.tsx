import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 1 – Basic I/O and Arithmetic | C Programming Lab",
  description:
    "Learn basic input/output operations and arithmetic calculations in C programming. Practice using printf, scanf, and perform basic mathematical operations.",
  keywords: ["C programming", "basic I/O", "arithmetic operations", "printf", "scanf", "C lab"],
};

export default function Exp01BasicIOPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Navigation */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link
          href="/labs/c-programming"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors text-sm sm:text-base"
        >
          <span>←</span> Back to Lab Home
        </Link>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
          Lab Exercise – 01
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 1 – Basic I/O and Arithmetic
      </h1>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* Aim */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To understand and implement basic input/output operations in C programming using <code className="bg-gray-100 px-1.5 py-0.5 rounded">printf()</code> and <code className="bg-gray-100 px-1.5 py-0.5 rounded">scanf()</code> functions, and to perform basic arithmetic operations (addition, subtraction, multiplication, division, and modulus) on user-input values.
            </p>
          </div>
        </section>

        {/* Procedure */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include the standard input/output header file <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdio.h</code></li>
              <li>Declare variables to store two numbers and results of arithmetic operations</li>
              <li>Use <code className="bg-gray-100 px-1.5 py-0.5 rounded">printf()</code> to display prompts asking the user to enter two numbers</li>
              <li>Use <code className="bg-gray-100 px-1.5 py-0.5 rounded">scanf()</code> to read the input values from the user</li>
              <li>Perform arithmetic operations: addition (+), subtraction (-), multiplication (*), division (/), and modulus (%)</li>
              <li>Display the results using <code className="bg-gray-100 px-1.5 py-0.5 rounded">printf()</code> with appropriate format specifiers</li>
              <li>Compile and execute the program to verify the output</li>
            </ol>
          </div>
        </section>

        {/* Flowchart */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Flowchart
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap">
{`START
  │
  ├─→ Include stdio.h
  │
  ├─→ Declare variables: a, b, sum, diff, prod, quot, mod
  │
  ├─→ Display "Enter first number: "
  │
  ├─→ Read value of 'a' using scanf()
  │
  ├─→ Display "Enter second number: "
  │
  ├─→ Read value of 'b' using scanf()
  │
  ├─→ Calculate: sum = a + b
  │
  ├─→ Calculate: diff = a - b
  │
  ├─→ Calculate: prod = a * b
  │
  ├─→ Calculate: quot = a / b
  │
  ├─→ Calculate: mod = a % b
  │
  ├─→ Display "Sum = " + sum
  │
  ├─→ Display "Difference = " + diff
  │
  ├─→ Display "Product = " + prod
  │
  ├─→ Display "Quotient = " + quot
  │
  ├─→ Display "Modulus = " + mod
  │
  └─→ END`}
            </pre>
          </div>
        </section>

        {/* Program Code */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Program Code
          </h2>
          <div className="bg-gray-900 text-gray-100 p-4 sm:p-6 rounded-lg overflow-x-auto shadow-lg">
            <pre className="text-sm sm:text-base">
              <code>{`#include <stdio.h>

int main() {
    int a, b;
    int sum, diff, prod, mod;
    float quot;
    
    // Input two numbers
    printf("Enter first number: ");
    scanf("%d", &a);
    
    printf("Enter second number: ");
    scanf("%d", &b);
    
    // Perform arithmetic operations
    sum = a + b;
    diff = a - b;
    prod = a * b;
    quot = (float)a / b;  // Type casting for accurate division
    mod = a % b;
    
    // Display results
    printf("\\n--- Results ---\\n");
    printf("Sum: %d + %d = %d\\n", a, b, sum);
    printf("Difference: %d - %d = %d\\n", a, b, diff);
    printf("Product: %d * %d = %d\\n", a, b, prod);
    printf("Quotient: %d / %d = %.2f\\n", a, b, quot);
    printf("Modulus: %d %% %d = %d\\n", a, b, mod);
    
    return 0;
}`}</code>
            </pre>
          </div>
        </section>

        {/* Sample Input and Output */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Sample Input and Output
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 1:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter first number: 15
Enter second number: 4</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`--- Results ---
Sum: 15 + 4 = 19
Difference: 15 - 4 = 11
Product: 15 * 4 = 60
Quotient: 15 / 4 = 3.75
Modulus: 15 % 4 = 3`}</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter first number: 100
Enter second number: 7</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`--- Results ---
Sum: 100 + 7 = 107
Difference: 100 - 7 = 93
Product: 100 * 7 = 700
Quotient: 100 / 7 = 14.29
Modulus: 100 % 7 = 2`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case / Real-world Relevance */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Use Case / Real-world Relevance
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              Basic I/O and arithmetic operations form the foundation of all programming tasks. Understanding these concepts is essential for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Calculator Applications:</strong> Building simple to complex calculators that perform mathematical operations</li>
              <li><strong>Financial Software:</strong> Calculating totals, differences, percentages, and interest in banking and accounting applications</li>
              <li><strong>Data Processing:</strong> Performing calculations on user inputs in forms, surveys, and data entry systems</li>
              <li><strong>Scientific Computing:</strong> Basic mathematical computations in scientific and engineering applications</li>
              <li><strong>Game Development:</strong> Calculating scores, health points, damage, and other game mechanics</li>
              <li><strong>E-commerce:</strong> Computing prices, discounts, taxes, and totals in shopping applications</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Mastery of input/output operations and arithmetic is crucial as these are used in virtually every program you will write.
            </p>
          </div>
        </section>
      </div>

      {/* Navigation Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Back to Lab Home
        </Link>
        <Link
          href="/labs/c-programming/exp-02-largest-of-three"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 2
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}

