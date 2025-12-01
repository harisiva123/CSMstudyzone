import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introduction to C++ – C++ Programming Notes",
  description:
    "Learn about the history, features, and basic structure of C++ programming. Understand the evolution from C to C++ and key characteristics of the language.",
  keywords: ["C++ introduction", "C++ history", "C++ features", "C++ basics", "C++ programming"],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/introduction",
  },
};

export default function IntroductionPage() {
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
          Introduction to C++
        </h1>
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What is C++?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            C++ is a general-purpose, object-oriented programming language developed by Bjarne Stroustrup at Bell Labs in 1979. 
            It is an extension of the C programming language with additional features such as classes, objects, inheritance, 
            polymorphism, and exception handling. C++ combines the efficiency of C with the power of object-oriented programming.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">History of C++</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>1979:</strong> Bjarne Stroustrup started working on "C with Classes"</li>
            <li><strong>1983:</strong> Renamed to C++ (++ is the increment operator in C)</li>
            <li><strong>1985:</strong> First commercial release of C++</li>
            <li><strong>1998:</strong> C++98 standard (ISO/IEC 14882:1998)</li>
            <li><strong>2003:</strong> C++03 standard (minor updates)</li>
            <li><strong>2011:</strong> C++11 standard (major update with modern features)</li>
            <li><strong>2014:</strong> C++14 standard</li>
            <li><strong>2017:</strong> C++17 standard</li>
            <li><strong>2020:</strong> C++20 standard (latest major version)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Key Features of C++</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Object-Oriented:</strong> Supports classes, objects, inheritance, polymorphism, and encapsulation</li>
            <li><strong>Procedural:</strong> Can be used as a procedural language like C</li>
            <li><strong>Portable:</strong> Code can run on different platforms with minimal changes</li>
            <li><strong>Rich Library:</strong> Extensive Standard Template Library (STL)</li>
            <li><strong>Memory Management:</strong> Direct control over memory allocation and deallocation</li>
            <li><strong>Fast Execution:</strong> Compiled language with high performance</li>
            <li><strong>Multi-paradigm:</strong> Supports procedural, object-oriented, and generic programming</li>
            <li><strong>Low-level Access:</strong> Can manipulate hardware directly</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Structure of a C++ Program</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`// Preprocessor directives
#include <iostream>
using namespace std;

// Global declarations
int global_var = 10;

// Function prototypes
void displayMessage();

// Main function
int main() {
    // Local declarations
    int local_var = 20;
    
    // Executable statements
    cout << "Hello, World!" << endl;
    cout << "Global variable: " << global_var << endl;
    cout << "Local variable: " << local_var << endl;
    
    // Function call
    displayMessage();
    
    return 0;  // Return statement
}

// Function definitions
void displayMessage() {
    cout << "Welcome to C++ Programming!" << endl;
}`}</code></pre>
          <p className="text-gray-700 leading-relaxed mt-3">
            A C++ program typically consists of:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mt-2">
            <li><strong>Preprocessor directives:</strong> #include statements for header files</li>
            <li><strong>Namespace:</strong> using namespace std; (optional but commonly used)</li>
            <li><strong>Global declarations:</strong> Variables and functions declared outside main()</li>
            <li><strong>Main function:</strong> Entry point of the program</li>
            <li><strong>Function definitions:</strong> Implementation of user-defined functions</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Basic Input/Output</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            C++ uses streams for input and output operations:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>cout:</strong> Standard output stream (console output)</li>
            <li><strong>cin:</strong> Standard input stream (keyboard input)</li>
            <li><strong>cerr:</strong> Standard error stream</li>
            <li><strong>clog:</strong> Standard log stream</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg mt-3">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int num;
    string name;
    
    cout << "Enter your name: ";
    cin >> name;
    
    cout << "Enter a number: ";
    cin >> num;
    
    cout << "Hello, " << name << "!" << endl;
    cout << "You entered: " << num << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Differences Between C and C++</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">C</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">C++</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Paradigm</td>
                  <td className="border border-gray-300 px-4 py-2">Procedural</td>
                  <td className="border border-gray-300 px-4 py-2">Multi-paradigm (OOP, Procedural, Generic)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Classes & Objects</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                  <td className="border border-gray-300 px-4 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Function Overloading</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                  <td className="border border-gray-300 px-4 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Operator Overloading</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                  <td className="border border-gray-300 px-4 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Exception Handling</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                  <td className="border border-gray-300 px-4 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Namespace</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                  <td className="border border-gray-300 px-4 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">STL</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                  <td className="border border-gray-300 px-4 py-2">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Applications of C++</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>System Software:</strong> Operating systems, device drivers</li>
            <li><strong>Game Development:</strong> Game engines and graphics programming</li>
            <li><strong>Embedded Systems:</strong> Microcontrollers and real-time systems</li>
            <li><strong>GUI Applications:</strong> Desktop applications with graphical interfaces</li>
            <li><strong>Database Systems:</strong> Database management systems</li>
            <li><strong>Compilers:</strong> Language compilers and interpreters</li>
            <li><strong>Web Browsers:</strong> Browser engines (Chrome, Firefox)</li>
            <li><strong>Scientific Computing:</strong> High-performance computing applications</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
