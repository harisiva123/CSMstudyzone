import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Functions in C++ – Complete Guide to Function Declaration, Overloading, and Templates | C++ Notes",
  description:
    "Comprehensive guide to functions in C++ covering declaration, definition, parameter passing (value, reference, pointer), function overloading, default arguments, inline functions, recursion, and function templates with examples.",
  keywords: [
    "C++ functions",
    "function overloading",
    "default arguments",
    "inline functions",
    "C++ parameters",
    "pass by reference",
    "pass by value",
    "recursive functions",
    "function templates",
    "C++ programming"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/functions",
  },
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

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            Functions are one of the most important concepts in C++ programming. They allow you to break down complex problems into 
            smaller, manageable pieces, promote code reusability, and make programs easier to understand, test, and maintain. A well-designed 
            function performs a single, well-defined task and can be called from multiple places in your program. Understanding functions 
            deeply is essential for writing professional, maintainable C++ code.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Introduction to Functions</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A function is a block of code that performs a specific task. Functions help in code reusability, modularity, and make programs 
            easier to understand and maintain. Instead of writing the same code multiple times, you can define it once in a function and 
            call it whenever needed. This principle is called DRY (Don't Repeat Yourself) and is fundamental to good programming practice.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Functions in C++ provide several advantages: they enable code organization, make debugging easier by isolating problems, allow 
            parallel development (different programmers can work on different functions), and facilitate testing. Well-designed functions 
            are the building blocks of large software systems.
          </p>
        </section>

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
                  <td className="border border-gray-300 px-4 py-3">Function Declaration</td>
                  <td className="border border-gray-300 px-4 py-3">Prototype tells compiler about function signature before definition</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Parameter Passing</td>
                  <td className="border border-gray-300 px-4 py-3">Pass by value (copy), reference (&amp;), or pointer (*)</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Function Overloading</td>
                  <td className="border border-gray-300 px-4 py-3">Multiple functions with same name, different parameters</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Default Arguments</td>
                  <td className="border border-gray-300 px-4 py-3">Parameters with default values, specified right to left</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Inline Functions</td>
                  <td className="border border-gray-300 px-4 py-3">Suggests compiler to expand function code at call site</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Recursive Functions</td>
                  <td className="border border-gray-300 px-4 py-3">Function calls itself, requires base case to terminate</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Function Templates</td>
                  <td className="border border-gray-300 px-4 py-3">Generic functions working with multiple data types</td>
                  <td className="border border-gray-300 px-4 py-3">Advanced</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between pass by value and pass by reference?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pass by value creates a copy of the argument, so changes inside the function don't affect the original. Pass by reference 
                passes the actual variable, so changes affect the original. Use pass by value for simple types when you don't need to modify 
                the original, use pass by reference when you need to modify or want to avoid copying large objects.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Can I overload functions based on return type only?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No, function overloading requires different parameter lists (number or types of parameters). Return type alone cannot 
                distinguish overloaded functions because the compiler can't determine which function to call without knowing the parameters.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: When should I use inline functions?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use inline for small, frequently called functions (1-3 lines) to reduce function call overhead. The compiler may ignore 
                the inline request for large functions. Modern compilers often inline automatically, so explicit inline is less necessary 
                but can be a hint for optimization.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: What is the difference between recursion and iteration?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Recursion is when a function calls itself, creating a call stack. Iteration uses loops to repeat code. Recursion is 
                more elegant for problems with recursive structure (trees, divide-and-conquer) but uses more memory. Iteration is usually 
                more memory-efficient and faster, but can be less intuitive for some problems.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: Can default arguments be specified in both declaration and definition?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Default arguments should be specified only in the function declaration, not in the definition. If you specify defaults in 
                both, it can cause compilation errors. The declaration is what the compiler uses to determine default values.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: What happens if a function doesn't return a value but has a non-void return type?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                This leads to undefined behavior. The compiler may issue a warning, but the program may compile. The function might return 
                garbage values. Always ensure functions with non-void return types return appropriate values on all code paths.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: Can I use function templates with different return types?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, function templates can have template parameters for return types. For example: <code className="bg-gray-100 px-1 rounded">template &lt;typename T, typename U&gt; T convert(U value)</code>. 
                This allows flexible type conversions and generic programming patterns.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: What is function overloading vs function overriding?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Overloading is having multiple functions with the same name but different parameters in the same scope. Overriding is 
                redefining a base class function in a derived class with the same signature. Overloading is compile-time polymorphism, 
                overriding is runtime polymorphism (with virtual functions).
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Functions are the cornerstone of modular programming in C++. They enable code reuse, improve readability, and make programs 
            easier to maintain and test. Understanding different parameter passing methods, function overloading, and advanced features like 
            templates gives you powerful tools for writing efficient, flexible code.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The choice between pass by value, reference, or pointer depends on your specific needs: use value for simple types when you 
            don't need modification, reference for efficiency and modification, and pointers when you need null values or dynamic memory. 
            Function overloading and templates provide flexibility, while inline functions can improve performance for small, frequently called functions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As you advance in C++, you'll see that functions are the building blocks for object-oriented programming (member functions), 
            generic programming (templates), and functional programming (function objects, lambdas). Mastery of functions is essential for 
            becoming a proficient C++ programmer.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/introduction" className="text-blue-600 hover:text-blue-700 underline">C++ Introduction</Link></li>
              <li><Link href="/notes/cpp-programming/control-structures" className="text-blue-600 hover:text-blue-700 underline">C++ Control Structures</Link></li>
              <li><Link href="/notes/cpp-programming/templates" className="text-blue-600 hover:text-blue-700 underline">C++ Templates</Link></li>
              <li><Link href="/notes/cpp-programming/oop" className="text-blue-600 hover:text-blue-700 underline">C++ Object-Oriented Programming</Link></li>
              <li><Link href="/notes/cpp-programming/pointers" className="text-blue-600 hover:text-blue-700 underline">C++ Pointers</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
      </div>
    </main>
  );
}



