import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exception Handling in C++ – C++ Programming Notes",
  description:
    "Learn about try-catch blocks, throw statement, exception classes, standard exceptions, and error handling in C++.",
  keywords: ["C++ exceptions", "try catch", "throw", "exception handling", "error handling"],
};

export default function ExceptionsPage() {
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
          Exception Handling
        </h1>
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Exception handling is a mechanism to handle runtime errors gracefully. It allows programs to continue 
            execution or terminate gracefully when errors occur, rather than crashing unexpectedly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Basic Exception Handling</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">try-catch Block</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    try {
        // Code that may throw exception
        int num = 10;
        int den = 0;
        
        if (den == 0) {
            throw "Division by zero!";
        }
        
        int result = num / den;
        cout << result << endl;
    }
    catch (const char* msg) {
        // Handle exception
        cout << "Error: " << msg << endl;
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Multiple catch Blocks</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    try {
        int choice;
        cin >> choice;
        
        if (choice == 1) {
            throw 10;  // Integer exception
        } else if (choice == 2) {
            throw "Error message";  // String exception
        } else {
            throw 3.14;  // Double exception
        }
    }
    catch (int e) {
        cout << "Integer exception: " << e << endl;
    }
    catch (const char* e) {
        cout << "String exception: " << e << endl;
    }
    catch (...) {
        cout << "Unknown exception" << endl;
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Standard Exception Classes</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            C++ provides standard exception classes in <code>&lt;exception&gt;</code> header:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Exception Class</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">exception</td>
                  <td className="border border-gray-300 px-4 py-2">Base class for all exceptions</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">runtime_error</td>
                  <td className="border border-gray-300 px-4 py-2">Runtime errors</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">logic_error</td>
                  <td className="border border-gray-300 px-4 py-2">Logic errors</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">invalid_argument</td>
                  <td className="border border-gray-300 px-4 py-2">Invalid argument</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">out_of_range</td>
                  <td className="border border-gray-300 px-4 py-2">Out of range</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">bad_alloc</td>
                  <td className="border border-gray-300 px-4 py-2">Memory allocation failure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Using Standard Exceptions</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <stdexcept>
using namespace std;

double divide(double a, double b) {
    if (b == 0) {
        throw runtime_error("Division by zero!");
    }
    return a / b;
}

int main() {
    try {
        double result = divide(10, 0);
        cout << result << endl;
    }
    catch (const runtime_error& e) {
        cout << "Error: " << e.what() << endl;
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Custom Exception Classes</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <exception>
#include <string>
using namespace std;

class MyException : public exception {
private:
    string message;

public:
    MyException(const string& msg) : message(msg) {}
    
    const char* what() const throw() {
        return message.c_str();
    }
};

int main() {
    try {
        throw MyException("Custom exception occurred!");
    }
    catch (const MyException& e) {
        cout << "Caught: " << e.what() << endl;
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Nested try-catch</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    try {
        try {
            throw "Inner exception";
        }
        catch (const char* e) {
            cout << "Inner catch: " << e << endl;
            throw;  // Re-throw exception
        }
    }
    catch (const char* e) {
        cout << "Outer catch: " << e << endl;
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Exception Specifications</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Functions can specify which exceptions they might throw (deprecated in C++11, but still used):
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

void func() throw(int, const char*) {
    // Can only throw int or const char*
    throw 10;
}

void noThrow() throw() {
    // Cannot throw any exception
    // If exception occurs, unexpected() is called
}

int main() {
    try {
        func();
    }
    catch (int e) {
        cout << "Caught int: " << e << endl;
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Complete Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <stdexcept>
using namespace std;

class Calculator {
public:
    double divide(double a, double b) {
        if (b == 0) {
            throw runtime_error("Cannot divide by zero!");
        }
        return a / b;
    }
    
    int factorial(int n) {
        if (n < 0) {
            throw invalid_argument("Factorial of negative number!");
        }
        if (n > 20) {
            throw out_of_range("Number too large!");
        }
        
        int result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
};

int main() {
    Calculator calc;
    
    try {
        cout << calc.divide(10, 2) << endl;
        cout << calc.divide(10, 0) << endl;
    }
    catch (const runtime_error& e) {
        cout << "Error: " << e.what() << endl;
    }
    
    try {
        cout << calc.factorial(5) << endl;
        cout << calc.factorial(-1) << endl;
    }
    catch (const invalid_argument& e) {
        cout << "Error: " << e.what() << endl;
    }
    catch (const out_of_range& e) {
        cout << "Error: " << e.what() << endl;
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Best Practices</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li>Use exceptions for exceptional conditions, not for normal control flow</li>
            <li>Catch exceptions by reference (const reference preferred)</li>
            <li>Use specific exception types rather than generic ones</li>
            <li>Always clean up resources (use RAII - Resource Acquisition Is Initialization)</li>
            <li>Don't throw exceptions from destructors</li>
            <li>Document which exceptions functions can throw</li>
            <li>Use standard exception classes when possible</li>
          </ul>
        </div>
      </div>
    </main>
  );
}


