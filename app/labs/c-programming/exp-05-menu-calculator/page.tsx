import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 5 – Menu-Driven Calculator | C Programming Lab",
  description:
    "Create a menu-driven calculator using switch-case statements in C programming. Learn menu implementation and user interaction.",
  keywords: ["C programming", "menu-driven", "calculator", "switch-case", "C lab"],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-05-menu-calculator",
  },
};

export default function Exp05MenuCalculatorPage() {
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
          Lab Exercise – 05
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 5 – Menu-Driven Calculator
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To create a menu-driven calculator program that performs arithmetic operations (addition, subtraction, multiplication, division, modulus) based on user's choice using <code className="bg-gray-100 px-1.5 py-0.5 rounded">switch-case</code> statement in C programming.
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
              <li>Declare variables: <code className="bg-gray-100 px-1.5 py-0.5 rounded">choice</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">a</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">b</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">result</code></li>
              <li>Display a menu with operation options (1-5 or +, -, *, /, %)</li>
              <li>Read user's choice</li>
              <li>Read two numbers from user</li>
              <li>Use <code className="bg-gray-100 px-1.5 py-0.5 rounded">switch-case</code> to perform selected operation:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Case 1: Addition</li>
                  <li>Case 2: Subtraction</li>
                  <li>Case 3: Multiplication</li>
                  <li>Case 4: Division (check for division by zero)</li>
                  <li>Case 5: Modulus</li>
                  <li>Default: Invalid choice</li>
                </ul>
              </li>
              <li>Display the result</li>
              <li>Optionally, add a loop to continue operations</li>
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
  ├─→ Display Menu:
  │   "1. Addition"
  │   "2. Subtraction"
  │   "3. Multiplication"
  │   "4. Division"
  │   "5. Modulus"
  │
  ├─→ Read choice
  │
  ├─→ Read a, b
  │
  ├─→ SWITCH (choice)
  │   │
  │   ├─→ CASE 1: result = a + b
  │   │
  │   ├─→ CASE 2: result = a - b
  │   │
  │   ├─→ CASE 3: result = a * b
  │   │
  │   ├─→ CASE 4: 
  │   │   IF (b == 0)
  │   │       Display "Division by zero error"
  │   │   ELSE
  │   │       result = a / b
  │   │
  │   ├─→ CASE 5: result = a % b
  │   │
  │   └─→ DEFAULT: Display "Invalid choice"
  │
  ├─→ Display result
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
    int choice;
    float a, b, result;
    char continue_op;
    
    do {
        // Display menu
        printf("\\n=== MENU-DRIVEN CALCULATOR ===\\n");
        printf("1. Addition\\n");
        printf("2. Subtraction\\n");
        printf("3. Multiplication\\n");
        printf("4. Division\\n");
        printf("5. Modulus\\n");
        printf("Enter your choice (1-5): ");
        scanf("%d", &choice);
        
        // Input two numbers
        printf("Enter first number: ");
        scanf("%f", &a);
        printf("Enter second number: ");
        scanf("%f", &b);
        
        // Perform operation based on choice
        switch(choice) {
            case 1:
                result = a + b;
                printf("Result: %.2f + %.2f = %.2f\\n", a, b, result);
                break;
                
            case 2:
                result = a - b;
                printf("Result: %.2f - %.2f = %.2f\\n", a, b, result);
                break;
                
            case 3:
                result = a * b;
                printf("Result: %.2f * %.2f = %.2f\\n", a, b, result);
                break;
                
            case 4:
                if (b == 0) {
                    printf("Error! Division by zero is not allowed.\\n");
                } else {
                    result = a / b;
                    printf("Result: %.2f / %.2f = %.2f\\n", a, b, result);
                }
                break;
                
            case 5:
                if (b == 0) {
                    printf("Error! Modulus by zero is not allowed.\\n");
                } else {
                    result = (int)a % (int)b;  // Modulus works with integers
                    printf("Result: %.0f %% %.0f = %.0f\\n", a, b, result);
                }
                break;
                
            default:
                printf("Invalid choice! Please select 1-5.\\n");
        }
        
        // Ask to continue
        printf("\\nDo you want to continue? (y/n): ");
        scanf(" %c", &continue_op);
        
    } while (continue_op == 'y' || continue_op == 'Y');
    
    printf("\\nThank you for using the calculator!\\n");
    return 0;
}`}</code>
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
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`=== MENU-DRIVEN CALCULATOR ===
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Modulus
Enter your choice (1-5): 1
Enter first number: 15.5
Enter second number: 8.3`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Result: 15.50 + 8.30 = 23.80</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`=== MENU-DRIVEN CALCULATOR ===
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Modulus
Enter your choice (1-5): 4
Enter first number: 20
Enter second number: 0`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Error! Division by zero is not allowed.</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 3:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`=== MENU-DRIVEN CALCULATOR ===
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Modulus
Enter your choice (1-5): 3
Enter first number: 7
Enter second number: 6`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Result: 7.00 * 6.00 = 42.00</pre>
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
              Menu-driven programs are widely used in real-world applications:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>ATM Machines:</strong> Menu-driven interface for banking operations</li>
              <li><strong>Restaurant Ordering Systems:</strong> Menu selection for food items and customization</li>
              <li><strong>Library Management:</strong> Menu options for book operations (add, search, issue, return)</li>
              <li><strong>Student Information Systems:</strong> Menu for different administrative functions</li>
              <li><strong>E-commerce Applications:</strong> Product categories and filtering options</li>
              <li><strong>Settings Menus:</strong> Configuration options in software applications</li>
              <li><strong>Game Menus:</strong> Start, settings, load game, exit options</li>
              <li><strong>Database Management:</strong> CRUD operations (Create, Read, Update, Delete) presented as menu</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              The switch-case statement is ideal for handling multiple discrete choices, making code more readable and maintainable than multiple if-else statements. This pattern is fundamental in user interface design.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-04-prime-check"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 4
        </Link>
        <Link
          href="/labs/c-programming/exp-06-array-stats"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 6
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}


