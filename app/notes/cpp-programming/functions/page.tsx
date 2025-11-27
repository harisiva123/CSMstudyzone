import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Functions in C++ – C++ Programming Notes",
  description:
    "Learn about function declaration, definition, parameters, return types, function overloading, default arguments, and inline functions in C++.",
  keywords: ["C++ functions", "function overloading", "default arguments", "inline functions", "C++ parameters"],
};

export default function FunctionsPage() {
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
          Functions in C++
        </h1>
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A function is a block of code that performs a specific task. Functions help in code reusability, 
            modularity, and make programs easier to understand and maintain.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Function Declaration and Definition</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Function Declaration (Prototype)</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Tells the compiler about the function's name, return type, and parameters:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`return_type function_name(parameter_list);`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Function Definition</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Contains the actual body of the function:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`return_type function_name(parameter_list) {
    // function body
    return value;  // if return_type is not void
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Example</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

// Function declaration
int add(int a, int b);

int main() {
    int result = add(5, 3);
    cout << "Sum: " << result << endl;
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Types of Functions</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Functions with Return Value</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`int multiply(int a, int b) {
    return a * b;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Functions without Return Value (void)</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`void displayMessage() {
    cout << "Hello, World!" << endl;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Functions with Parameters</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Functions without Parameters</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`int getRandomNumber() {
    return rand() % 100;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Parameter Passing Methods</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Pass by Value</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            A copy of the value is passed to the function. Changes inside the function don't affect the original:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

void increment(int x) {
    x++;  // Changes local copy only
    cout << "Inside function: " << x << endl;
}

int main() {
    int num = 5;
    increment(num);
    cout << "In main: " << num << endl;  // Still 5
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Pass by Reference</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            The actual variable is passed. Changes inside the function affect the original:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

void increment(int &x) {
    x++;  // Changes original variable
    cout << "Inside function: " << x << endl;
}

int main() {
    int num = 5;
    increment(num);
    cout << "In main: " << num << endl;  // Now 6
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Pass by Pointer</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Address of the variable is passed. Changes affect the original:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

void increment(int *x) {
    (*x)++;  // Changes original variable
    cout << "Inside function: " << *x << endl;
}

int main() {
    int num = 5;
    increment(&num);
    cout << "In main: " << num << endl;  // Now 6
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Function Overloading</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Multiple functions can have the same name but different parameters (different number or types):
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

// Overloaded functions
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

int main() {
    cout << add(5, 3) << endl;        // Calls int add(int, int)
    cout << add(5.5, 3.2) << endl;    // Calls double add(double, double)
    cout << add(1, 2, 3) << endl;     // Calls int add(int, int, int)
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Default Arguments</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Parameters can have default values. If not provided, default values are used:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int multiply(int a, int b = 1, int c = 1) {
    return a * b * c;
}

int main() {
    cout << multiply(5) << endl;        // 5 * 1 * 1 = 5
    cout << multiply(5, 2) << endl;    // 5 * 2 * 1 = 10
    cout << multiply(5, 2, 3) << endl; // 5 * 2 * 3 = 30
    return 0;
}`}</code></pre>
          <p className="text-gray-700 leading-relaxed mt-3">
            <strong>Note:</strong> Default arguments must be specified from right to left.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Inline Functions</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Suggests the compiler to insert the function code at the call site to reduce function call overhead:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

inline int square(int x) {
    return x * x;
}

int main() {
    int result = square(5);
    cout << "Square: " << result << endl;
    return 0;
}`}</code></pre>
          <p className="text-gray-700 leading-relaxed mt-3">
            <strong>Note:</strong> Inline is a request, not a command. The compiler may ignore it for large functions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Recursive Functions</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            A function that calls itself is called recursive:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

// Factorial using recursion
int factorial(int n) {
    if (n <= 1) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive call
}

int main() {
    int num = 5;
    cout << "Factorial of " << num << " = " << factorial(num) << endl;
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Function Templates</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Generic functions that work with different data types:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << maximum(5, 10) << endl;           // int
    cout << maximum(5.5, 3.2) << endl;        // double
    cout << maximum('a', 'z') << endl;         // char
    return 0;
}`}</code></pre>
        </div>
      </div>
    </main>
  );
}


