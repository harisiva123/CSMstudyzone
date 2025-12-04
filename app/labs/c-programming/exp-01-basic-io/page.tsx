import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 1 – Basic I/O and Arithmetic Operations | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment covering basic input/output operations using printf and scanf, and arithmetic calculations. Includes algorithm, flowchart, code, sample I/O, viva questions, and real-world applications.",
  keywords: [
    "C programming lab",
    "basic I/O",
    "printf scanf",
    "arithmetic operations",
    "C lab manual",
    "input output in C",
    "C programming basics"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-01-basic-io",
  },
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
            <p className="text-gray-700 leading-relaxed mb-3">
              To understand and implement basic input/output operations in C programming using <code className="bg-gray-100 px-1.5 py-0.5 rounded">printf()</code> and <code className="bg-gray-100 px-1.5 py-0.5 rounded">scanf()</code> functions, and to perform basic arithmetic operations (addition, subtraction, multiplication, division, and modulus) on user-input values. This experiment introduces fundamental programming concepts that form the foundation for all C programming.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to interact with users through console I/O, understand format specifiers, and perform basic mathematical computations using C operators.
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
              <li>Use <code className="bg-gray-100 px-1 rounded">printf()</code> for formatted output with various format specifiers</li>
              <li>Use <code className="bg-gray-100 px-1 rounded">scanf()</code> for reading user input with proper format specifiers</li>
              <li>Understand and use arithmetic operators (+, -, *, /, %)</li>
              <li>Handle different data types (int, float, double) in I/O operations</li>
              <li>Write programs that interact with users through console</li>
              <li>Perform basic mathematical calculations in C programs</li>
              <li>Understand the importance of format specifiers in I/O operations</li>
              <li>Debug common I/O errors like missing &amp; in scanf or wrong format specifiers</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithm for basic I/O and arithmetic operations involves reading input, performing calculations, and displaying results:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Algorithm Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Start:</strong> Begin program execution</li>
                <li><strong>Include Header:</strong> Include <code className="bg-white px-1 rounded">stdio.h</code> for I/O functions</li>
                <li><strong>Declare Variables:</strong> Declare variables for two numbers and results (sum, diff, prod, quot, mod)</li>
                <li><strong>Display Prompt:</strong> Use <code className="bg-white px-1 rounded">printf()</code> to ask user for first number</li>
                <li><strong>Read Input:</strong> Use <code className="bg-white px-1 rounded">scanf()</code> to read first number into variable</li>
                <li><strong>Display Prompt:</strong> Use <code className="bg-white px-1 rounded">printf()</code> to ask user for second number</li>
                <li><strong>Read Input:</strong> Use <code className="bg-white px-1 rounded">scanf()</code> to read second number</li>
                <li><strong>Calculate Sum:</strong> sum = a + b</li>
                <li><strong>Calculate Difference:</strong> diff = a - b</li>
                <li><strong>Calculate Product:</strong> prod = a * b</li>
                <li><strong>Calculate Quotient:</strong> quot = a / b (use type casting for float division)</li>
                <li><strong>Calculate Modulus:</strong> mod = a % b</li>
                <li><strong>Display Results:</strong> Use <code className="bg-white px-1 rounded">printf()</code> to display all results with appropriate format specifiers</li>
                <li><strong>Stop:</strong> End program execution</li>
              </ol>
            </div>
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
              Understanding format specifiers and proper I/O handling prevents common errors and makes your programs more robust and user-friendly.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between printf() and scanf()?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">printf()</code> is used for formatted output (displaying data), while 
                <code className="bg-gray-100 px-1 rounded">scanf()</code> is used for formatted input (reading data). printf() doesn't require 
                &amp; before variables, but scanf() requires &amp; (address operator) before variables (except arrays/strings) to store input values.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Why do we use &amp; in scanf() but not in printf()?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">scanf()</code> needs the memory address of variables to store input values, so we use 
                &amp; (address operator). <code className="bg-gray-100 px-1 rounded">printf()</code> only needs the value to display, so no &amp; is needed. 
                Arrays and strings are exceptions because their name represents the address.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What are format specifiers? List common ones.</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Format specifiers tell printf/scanf how to interpret data. Common ones: <code className="bg-gray-100 px-1 rounded">%d</code> (int), 
                <code className="bg-gray-100 px-1 rounded">%f</code> (float), <code className="bg-gray-100 px-1 rounded">%lf</code> (double), 
                <code className="bg-gray-100 px-1 rounded">%c</code> (char), <code className="bg-gray-100 px-1 rounded">%s</code> (string), 
                <code className="bg-gray-100 px-1 rounded">%u</code> (unsigned int). Using wrong specifiers causes undefined behavior.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: What is the difference between / and % operators?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">/</code> (division) returns the quotient (result of division), while 
                <code className="bg-gray-100 px-1 rounded">%</code> (modulus) returns the remainder. For example: 15 / 4 = 3, 15 % 4 = 3. 
                Modulus only works with integer operands.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: Why do we use type casting in division (float)a / b?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                When dividing two integers, C performs integer division (truncates decimal part). Type casting one operand to float ensures 
                floating-point division, giving accurate decimal results. Without casting, 15 / 4 = 3, but (float)15 / 4 = 3.75.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: What happens if we divide by zero in C?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Division by zero causes undefined behavior. For integers, it may crash or produce garbage. For floats, it may produce 
                infinity (inf) or NaN (Not a Number). Always check for zero before division to prevent errors.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: Can we use scanf() to read multiple values in one statement?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, scanf() can read multiple values: <code className="bg-gray-100 px-1 rounded">scanf("%d %d", &amp;a, &amp;b);</code>. 
                Values can be separated by spaces, tabs, or newlines. The format string should match the input format for reliable reading.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: What is the return value of printf() and scanf()?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">printf()</code> returns the number of characters printed (or negative on error). 
                <code className="bg-gray-100 px-1 rounded">scanf()</code> returns the number of successfully read items (or EOF on end of file). 
                These return values can be used for error checking.
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
              <li><Link href="/labs/c-programming/exp-02-largest-of-three" className="text-blue-600 hover:text-blue-700 underline">Experiment 2: Largest of Three Numbers</Link></li>
              <li><Link href="/labs/c-programming/exp-03-factorial" className="text-blue-600 hover:text-blue-700 underline">Experiment 3: Factorial</Link></li>
              <li><Link href="/programming/c-language/debugging" className="text-blue-600 hover:text-blue-700 underline">C Debugging Guide</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
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


