import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Control Structures in C++ – Complete Guide to Decision Making and Loops | C++ Notes",
  description:
    "Comprehensive guide to control structures in C++ including if-else statements, switch cases, loops (for, while, do-while), break, continue, and range-based for loops. Learn decision-making and iteration in C++ programming.",
  keywords: [
    "C++ control structures",
    "if else statements",
    "C++ loops",
    "switch case",
    "break continue",
    "for loop",
    "while loop",
    "do-while loop",
    "decision making C++",
    "C++ programming"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/control-structures",
  },
};

export default function ControlStructuresPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6">
        <Link
          href="/notes/cpp-programming"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base mb-4"
        >
          <span>←</span> Back to C++ Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Control Structures
        </h1>
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            Control structures are the fundamental building blocks that determine how your C++ program executes. They allow you to 
            make decisions, repeat actions, and control the flow of your program based on conditions. Without control structures, 
            programs would execute sequentially from top to bottom with no ability to respond to different situations or repeat 
            operations. Mastering control structures is essential for writing effective, efficient, and maintainable C++ programs.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Introduction to Control Structures</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Control structures allow you to control the flow of execution in a program. They enable decision-making, looping, and 
            branching based on conditions. In C++, there are three main types of control structures: sequential (default execution), 
            selection (decision-making with if-else, switch), and iteration (loops with for, while, do-while).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Understanding control structures is crucial because they form the logic backbone of every program. Whether you're 
            validating user input, processing data in loops, or making decisions based on conditions, control structures are what 
            make your programs intelligent and responsive.
          </p>
        </section>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Decision Making Statements</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">if Statement</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`if (condition) {
    // code to execute if condition is true
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">if-else Statement</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">if-else if-else Ladder</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`if (condition1) {
    // code block 1
} else if (condition2) {
    // code block 2
} else if (condition3) {
    // code block 3
} else {
    // default code block
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Nested if</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`if (condition1) {
    if (condition2) {
        // code block
    }
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Example</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    
    if (num > 0) {
        cout << "Positive number" << endl;
    } else if (num < 0) {
        cout << "Negative number" << endl;
    } else {
        cout << "Zero" << endl;
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Switch Statement</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Used to select one of many code blocks to execute based on the value of a variable:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`switch (expression) {
    case value1:
        // code block 1
        break;
    case value2:
        // code block 2
        break;
    case value3:
        // code block 3
        break;
    default:
        // default code block
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Example</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int choice;
    cout << "Enter choice (1-3): ";
    cin >> choice;
    
    switch (choice) {
        case 1:
            cout << "You chose option 1" << endl;
            break;
        case 2:
            cout << "You chose option 2" << endl;
            break;
        case 3:
            cout << "You chose option 3" << endl;
            break;
        default:
            cout << "Invalid choice" << endl;
    }
    
    return 0;
}`}</code></pre>
          <p className="text-gray-700 leading-relaxed mt-3">
            <strong>Note:</strong> The break statement is crucial. Without it, execution will "fall through" to the next case.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Loops</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Loops allow you to execute a block of code repeatedly:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">for Loop</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`for (initialization; condition; increment/decrement) {
    // code block
}`}</code></pre>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg mt-3">
            <code>{`#include <iostream>
using namespace std;

int main() {
    // Print numbers from 1 to 10
    for (int i = 1; i <= 10; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // Nested for loop
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            cout << i << "," << j << " ";
        }
        cout << endl;
    }
    
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">while Loop</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`while (condition) {
    // code block
}`}</code></pre>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg mt-3">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int i = 1;
    while (i <= 10) {
        cout << i << " ";
        i++;
    }
    cout << endl;
    
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">do-while Loop</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Executes the code block at least once, then checks the condition:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`do {
    // code block
} while (condition);`}</code></pre>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg mt-3">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int num;
    do {
        cout << "Enter a positive number: ";
        cin >> num;
    } while (num <= 0);
    
    cout << "You entered: " << num << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Jump Statements</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">break Statement</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Terminates the loop or switch statement immediately:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            break;  // Exit loop when i equals 5
        }
        cout << i << " ";
    }
    // Output: 1 2 3 4
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">continue Statement</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Skips the current iteration and continues with the next iteration:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            continue;  // Skip iteration when i equals 5
        }
        cout << i << " ";
    }
    // Output: 1 2 3 4 6 7 8 9 10
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">goto Statement</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Transfers control to a labeled statement (not recommended in modern C++):
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int i = 1;
    
    loop:
    if (i <= 10) {
        cout << i << " ";
        i++;
        goto loop;
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Range-based for Loop (C++11)</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Modern C++ feature for iterating over containers:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    
    // Range-based for loop
    for (int element : arr) {
        cout << element << " ";
    }
    cout << endl;
    
    // With vector
    vector<int> vec = {10, 20, 30, 40, 50};
    for (int value : vec) {
        cout << value << " ";
    }
    cout << endl;
    
    return 0;
}`}</code></pre>
        </div>

        {/* Summary Table */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Summary</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Topic</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Key Points</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Difficulty</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">if-else Statements</td>
                  <td className="border border-gray-300 px-4 py-3">Decision making based on conditions, supports nesting and chaining</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Switch Statement</td>
                  <td className="border border-gray-300 px-4 py-3">Multi-way branching, requires break to prevent fall-through</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">for Loop</td>
                  <td className="border border-gray-300 px-4 py-3">Definite iteration with initialization, condition, increment</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">while Loop</td>
                  <td className="border border-gray-300 px-4 py-3">Indefinite iteration, condition checked before execution</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">do-while Loop</td>
                  <td className="border border-gray-300 px-4 py-3">Executes at least once, condition checked after execution</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">break & continue</td>
                  <td className="border border-gray-300 px-4 py-3">Control loop execution, break exits loop, continue skips iteration</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Range-based for</td>
                  <td className="border border-gray-300 px-4 py-3">C++11 feature for iterating over containers automatically</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between if-else and switch statements?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                if-else can handle complex conditions with relational and logical operators, while switch works with discrete values 
                (integers, characters, enums). Use if-else for ranges or complex conditions, switch for multiple discrete value checks 
                (more readable and potentially faster).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: When should I use for loop vs while loop?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use for loop when you know the number of iterations in advance (definite iteration). Use while loop when the number of 
                iterations is unknown and depends on a condition (indefinite iteration). For loops are more concise for counter-based iteration.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What happens if I forget break in a switch statement?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Without break, execution "falls through" to the next case, executing all subsequent cases until a break is encountered 
                or the switch ends. This is usually a bug, but can be intentional for multiple cases sharing the same code.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: Can I use continue in a switch statement?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No, continue only works in loops (for, while, do-while). In a switch, use break to exit a case. If you need continue-like 
                behavior in a switch inside a loop, the continue will affect the outer loop, not the switch.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What is an infinite loop and how can I create one intentionally?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                An infinite loop runs forever. Create one with <code className="bg-gray-100 px-1 rounded">for(;;)</code> or 
                <code className="bg-gray-100 px-1 rounded">while(true)</code>. Always include a break condition inside to exit when needed. 
                Useful for event loops, game loops, or server programs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: What is the difference between break and continue?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                break immediately exits the loop or switch, while continue skips the remaining code in the current iteration and continues 
                with the next iteration of the loop. break stops the loop entirely, continue just skips to the next iteration.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: Can I nest loops and if statements?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, you can nest loops inside loops and if statements inside loops or other if statements. This is common for 2D array 
                processing, nested data structures, or complex decision trees. Be careful with indentation and logic to maintain readability.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: What is the advantage of range-based for loop?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Range-based for loops (C++11) are safer (no index out-of-bounds), more readable, and work with any container that provides 
                iterators. They automatically handle iteration without manual index management, reducing errors and making code more concise.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Control structures are fundamental to programming in C++. They enable your programs to make decisions, repeat operations, 
            and respond dynamically to different conditions. Mastering if-else statements, switch cases, and various loop types gives you 
            the tools to solve complex problems efficiently.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Understanding when to use each control structure is as important as knowing how to use them. Choose if-else for complex 
            conditions, switch for multiple discrete values, for loops for definite iteration, and while/do-while for indefinite iteration. 
            Modern C++ features like range-based for loops make iteration safer and more expressive.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As you continue programming, you'll find that most algorithms and programs rely heavily on control structures. Practice writing 
            different types of loops and decision-making code to build your problem-solving skills. Remember that well-structured control 
            flow makes code readable, maintainable, and less prone to errors.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/introduction" className="text-blue-600 hover:text-blue-700 underline">C++ Introduction</Link></li>
              <li><Link href="/notes/cpp-programming/functions" className="text-blue-600 hover:text-blue-700 underline">C++ Functions</Link></li>
              <li><Link href="/notes/cpp-programming/arrays" className="text-blue-600 hover:text-blue-700 underline">C++ Arrays</Link></li>
              <li><Link href="/notes/cpp-programming/operators" className="text-blue-600 hover:text-blue-700 underline">C++ Operators</Link></li>
              <li><Link href="/programming/c-language" className="text-blue-600 hover:text-blue-700 underline">C Language Basics</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
      </div>
    </main>
  );
}



