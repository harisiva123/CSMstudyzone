import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Exception Handling in C++ – Complete Guide with Examples | C++ Notes",
  description:
    "Comprehensive guide to exception handling in C++ covering try-catch blocks, throw statement, standard exception classes, custom exceptions, exception specifications, and best practices for error handling.",
  keywords: [
    "C++ exceptions",
    "try catch",
    "throw statement",
    "exception handling",
    "error handling",
    "standard exceptions",
    "custom exceptions",
    "RAII"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/exceptions",
  },
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

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            Exception handling is a robust error-handling mechanism that allows programs to deal with unexpected situations gracefully. Instead of 
            programs crashing or returning error codes that might be ignored, exceptions provide a structured way to handle errors, propagate them 
            up the call stack, and ensure proper cleanup. This makes programs more reliable, maintainable, and user-friendly.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Introduction to Exception Handling</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Exception handling is a mechanism to handle runtime errors gracefully. It allows programs to continue execution or terminate gracefully 
            when errors occur, rather than crashing unexpectedly. Exceptions separate error-handling code from normal program flow, making code more 
            readable and maintainable.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            When an exceptional condition occurs, a function can throw an exception. The exception propagates up the call stack until it's caught by 
            an appropriate catch block. If no catch block handles it, the program terminates. This ensures errors are not silently ignored and provides 
            a way to handle them at the appropriate level.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Exception handling works together with RAII (Resource Acquisition Is Initialization) to ensure resources are properly cleaned up even 
            when exceptions occur. Destructors are automatically called during stack unwinding, ensuring memory and other resources are freed.
          </p>
        </section>

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
                  <td className="border border-gray-300 px-4 py-3">try-catch Blocks</td>
                  <td className="border border-gray-300 px-4 py-3">try contains code that may throw, catch handles exceptions, multiple catch blocks for different types</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">throw Statement</td>
                  <td className="border border-gray-300 px-4 py-3">Throws exception object, can throw any type, propagates up call stack</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Standard Exceptions</td>
                  <td className="border border-gray-300 px-4 py-3">exception, runtime_error, logic_error, invalid_argument, out_of_range, bad_alloc</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Custom Exceptions</td>
                  <td className="border border-gray-300 px-4 py-3">Derive from exception class, override what() method, provide meaningful error messages</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Exception Propagation</td>
                  <td className="border border-gray-300 px-4 py-3">Exceptions propagate up call stack until caught, stack unwinding calls destructors</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">RAII and Exceptions</td>
                  <td className="border border-gray-300 px-4 py-3">Destructors called during stack unwinding, ensures resource cleanup even with exceptions</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What happens if an exception is thrown but not caught?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                If an exception propagates to main() without being caught, <code className="bg-gray-100 px-1 rounded">std::terminate()</code> is called, 
                which by default calls <code className="bg-gray-100 px-1 rounded">abort()</code>, terminating the program. This is usually undesirable. 
                Always catch exceptions at appropriate levels. You can set a terminate handler, but it's better to catch exceptions properly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Should I catch exceptions by value or by reference?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Always catch by const reference: <code className="bg-gray-100 px-1 rounded">catch (const std::exception&amp; e)</code>. Catching by value 
                causes slicing (loses derived class information) and unnecessary copying. Catching by reference avoids copying, preserves polymorphism, 
                and allows accessing derived class members. Const reference is preferred to prevent modification.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What is stack unwinding and how does it work?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Stack unwinding occurs when an exception is thrown. The runtime destroys all automatic objects (local variables) in reverse order of 
                construction as it searches for a catch block. Destructors are called automatically, ensuring proper cleanup. This is why RAII works 
                so well with exceptions - resources are automatically freed during unwinding.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: Can I throw exceptions from constructors?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, throwing from constructors is acceptable and often the best way to handle construction failures. If constructor throws, object 
                is not created, destructor is not called (object was never fully constructed). However, destructors of already-constructed member 
                objects and base classes are called. This is safe and recommended for handling construction errors.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: Why shouldn't I throw exceptions from destructors?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Throwing from destructors is dangerous because destructors are called during stack unwinding. If an exception is thrown during unwinding, 
                <code className="bg-gray-100 px-1 rounded">std::terminate()</code> is called, terminating the program. This prevents proper cleanup. 
                Destructors should handle errors internally (log, set flags) but not throw. If you must throw, mark destructor <code className="bg-gray-100 px-1 rounded">noexcept(false)</code> 
                (not recommended).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: What is the catch-all handler (catch (...))?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">catch (...)</code> catches any exception type. Use it as last catch block to handle unexpected 
                exceptions. However, you can't access the exception object, so use it for logging or cleanup, then re-throw or terminate. It's useful 
                for ensuring cleanup happens even for unknown exceptions, but prefer specific catch blocks when possible.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What is exception safety and what are the guarantee levels?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Exception safety guarantees: basic (no leaks, valid state), strong (rollback on exception, all-or-nothing), nothrow (never throws). 
                Strong guarantee means operation either completes or has no effect (transactional). Basic guarantee means program remains in valid state 
                but may be modified. Strive for strong guarantee when possible, at minimum basic guarantee.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: Are exceptions expensive in terms of performance?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Exception handling has minimal overhead when no exceptions occur (zero-cost in normal path). Throwing exceptions has overhead (stack 
                unwinding, finding catch block), but this is acceptable since exceptions should be exceptional. Don't use exceptions for normal control 
                flow. For error handling, exceptions are often more efficient than checking return codes everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Exception handling is essential for writing robust, reliable C++ programs. It provides a structured way to handle errors, separate error 
            handling from normal code flow, and ensure proper resource cleanup through RAII. Understanding exceptions enables you to write code that 
            gracefully handles unexpected situations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standard exception classes provide a hierarchy of error types, while custom exceptions allow you to create domain-specific error handling. 
            The combination of exceptions and RAII ensures that resources are properly managed even when errors occur, preventing memory leaks and 
            resource exhaustion.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mastery of exception handling is crucial for professional C++ programming. It enables you to write code that's both safe and maintainable, 
            with clear error handling that doesn't clutter the main program logic. Used correctly, exceptions make programs more reliable and easier to 
            debug and maintain.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/files" className="text-blue-600 hover:text-blue-700 underline">C++ File Handling</Link></li>
              <li><Link href="/notes/cpp-programming/oop" className="text-blue-600 hover:text-blue-700 underline">C++ Object-Oriented Programming</Link></li>
              <li><Link href="/notes/cpp-programming/functions" className="text-blue-600 hover:text-blue-700 underline">C++ Functions</Link></li>
              <li><Link href="/notes/cpp-programming/pointers" className="text-blue-600 hover:text-blue-700 underline">C++ Pointers</Link></li>
              <li><Link href="/notes/cpp-programming/introduction" className="text-blue-600 hover:text-blue-700 underline">C++ Introduction</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
      </div>
    </main>
  );
}



