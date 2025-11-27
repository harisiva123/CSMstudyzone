import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Control Structures in C++ – C++ Programming Notes",
  description:
    "Learn about if-else statements, switch cases, loops (for, while, do-while), break, continue, and nested control structures in C++.",
  keywords: ["C++ control structures", "if else", "loops", "switch case", "break continue"],
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

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Control structures allow you to control the flow of execution in a program. 
            They enable decision-making, looping, and branching based on conditions.
          </p>
        </div>

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
      </div>
    </main>
  );
}

