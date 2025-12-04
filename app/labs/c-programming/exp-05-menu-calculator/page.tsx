import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 5 – Menu-Driven Calculator Using Switch-Case | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment to create a menu-driven calculator. Includes algorithm, flowchart, switch-case implementation, error handling, sample I/O, viva questions, and real-world applications.",
  keywords: [
    "C programming lab",
    "menu-driven program",
    "switch case",
    "calculator program",
    "C lab manual",
    "user interface",
    "menu implementation"
  ],
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
            <p className="text-gray-700 leading-relaxed mb-3">
              To create a menu-driven calculator program that performs arithmetic operations (addition, subtraction, multiplication, division, modulus) 
              based on user's choice using <code className="bg-gray-100 px-1.5 py-0.5 rounded">switch-case</code> statement in C programming. This experiment 
              introduces students to menu-driven interfaces, switch-case statements, and interactive program design.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to design user-friendly interfaces, handle multiple options efficiently, implement error 
              checking (division by zero), and create programs that can perform multiple operations in a single session.
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
              <li>Design and implement menu-driven user interfaces</li>
              <li>Use switch-case statements for multi-way branching</li>
              <li>Handle user input validation and error cases</li>
              <li>Implement division by zero error checking</li>
              <li>Use do-while loops for repeated menu display</li>
              <li>Create interactive programs that respond to user choices</li>
              <li>Understand the difference between switch-case and if-else for discrete choices</li>
              <li>Write programs with proper error handling and user feedback</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithm for a menu-driven calculator involves displaying a menu, reading user choice, performing operations, and optionally repeating:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Algorithm Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Start:</strong> Begin program execution</li>
                <li><strong>Declare Variables:</strong> choice, a, b, result, continue_op</li>
                <li><strong>Display Menu:</strong> Show available operations (1-5) with descriptions</li>
                <li><strong>Read Choice:</strong> Get user's selection</li>
                <li><strong>Read Operands:</strong> Get two numbers a and b from user</li>
                <li><strong>Switch on Choice:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Case 1: result = a + b, display result</li>
                    <li>Case 2: result = a - b, display result</li>
                    <li>Case 3: result = a * b, display result</li>
                    <li>Case 4: Check if b == 0, if yes show error, else result = a / b</li>
                    <li>Case 5: Check if b == 0, if yes show error, else result = a % b</li>
                    <li>Default: Display "Invalid choice" message</li>
                  </ul>
                </li>
                <li><strong>Ask to Continue:</strong> Prompt user if they want another operation</li>
                <li><strong>Loop:</strong> If user wants to continue, repeat from step 3</li>
                <li><strong>Stop:</strong> End program execution</li>
              </ol>
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
              The switch-case statement is ideal for handling multiple discrete choices, making code more readable and maintainable than multiple if-else statements. 
              This pattern is fundamental in user interface design. Menu-driven programs provide intuitive interfaces that guide users through available options, 
              making software more accessible and user-friendly.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between switch-case and if-else ladder?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Switch-case works with discrete values (integers, characters, enums) and is more efficient for multiple choices. If-else can handle ranges, 
                complex conditions, and any boolean expression. Switch is cleaner for menu-driven programs with numbered options, while if-else is more 
                flexible for complex conditions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Why is break statement important in switch-case?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Without break, execution "falls through" to the next case, executing all subsequent cases until a break is encountered. This is usually a bug 
                but can be intentional when multiple cases share the same code. Always use break unless you intentionally want fall-through behavior.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: Why do we check for division by zero in case 4 and 5?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Division by zero causes undefined behavior (may crash the program). Modulus by zero also causes undefined behavior. We must validate input 
                before performing these operations to prevent program errors and provide user-friendly error messages instead of crashes.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: Can we use if-else instead of switch-case for this program?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, but switch-case is more appropriate here because we're checking discrete integer values (1-5). Switch is more readable, potentially 
                faster (compiler can optimize with jump tables), and clearly shows we're handling multiple discrete choices. If-else would work but is less 
                elegant for this use case.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: Why do we use do-while loop instead of while loop?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Do-while ensures the menu is displayed at least once, which is what we want for a calculator. With while loop, if the condition is false initially, 
                the menu wouldn't display. Do-while is perfect for menu-driven programs where you want to show the menu first, then check if user wants to continue.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: What happens if user enters a choice outside 1-5?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The default case handles invalid choices, displaying an error message. The program doesn't crash but informs the user of the invalid input. 
                This is good error handling - graceful degradation rather than program termination.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: Can we add more operations to this calculator? How?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, add more cases to the switch statement. For example, case 6 for power, case 7 for square root, etc. Update the menu display to show new 
                options. The switch-case structure makes it easy to extend functionality without modifying existing code.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: Why do we use float for operands instead of int?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Using float allows decimal numbers in calculations, making the calculator more versatile. Division results in decimal values, so float ensures 
                accurate results. If we used int, division would truncate decimal parts. For modulus operation, we cast to int since modulus works only with integers.
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
              <li><Link href="/labs/c-programming/exp-04-prime-check" className="text-blue-600 hover:text-blue-700 underline">Experiment 4: Prime Check</Link></li>
              <li><Link href="/labs/c-programming/exp-06-array-stats" className="text-blue-600 hover:text-blue-700 underline">Experiment 6: Array Statistics</Link></li>
              <li><Link href="/programming/c-language/programming-tips" className="text-blue-600 hover:text-blue-700 underline">C Programming Tips</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
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


