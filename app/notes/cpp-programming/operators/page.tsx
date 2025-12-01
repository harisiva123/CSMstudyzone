import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operators & Expressions in C++ – C++ Programming Notes",
  description:
    "Learn about arithmetic, relational, logical, bitwise, assignment, and other operators in C++. Understand operator precedence and expressions.",
  keywords: ["C++ operators", "C++ expressions", "arithmetic operators", "logical operators", "bitwise operators"],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/operators",
  },
};

export default function OperatorsPage() {
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
          Operators & Expressions
        </h1>
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Types of Operators</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            C++ provides various types of operators to perform different operations on operands. 
            Operators are symbols that tell the compiler to perform specific mathematical or logical operations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Arithmetic Operators</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Used to perform mathematical operations:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Operator</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">+</td>
                  <td className="border border-gray-300 px-4 py-2">Addition</td>
                  <td className="border border-gray-300 px-4 py-2">a + b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">Subtraction</td>
                  <td className="border border-gray-300 px-4 py-2">a - b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">*</td>
                  <td className="border border-gray-300 px-4 py-2">Multiplication</td>
                  <td className="border border-gray-300 px-4 py-2">a * b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">/</td>
                  <td className="border border-gray-300 px-4 py-2">Division</td>
                  <td className="border border-gray-300 px-4 py-2">a / b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">%</td>
                  <td className="border border-gray-300 px-4 py-2">Modulus (remainder)</td>
                  <td className="border border-gray-300 px-4 py-2">a % b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">++</td>
                  <td className="border border-gray-300 px-4 py-2">Increment</td>
                  <td className="border border-gray-300 px-4 py-2">a++ or ++a</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">--</td>
                  <td className="border border-gray-300 px-4 py-2">Decrement</td>
                  <td className="border border-gray-300 px-4 py-2">a-- or --a</td>
                </tr>
              </tbody>
            </table>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg mt-3">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    
    cout << "a + b = " << (a + b) << endl;  // 13
    cout << "a - b = " << (a - b) << endl;  // 7
    cout << "a * b = " << (a * b) << endl;  // 30
    cout << "a / b = " << (a / b) << endl;  // 3
    cout << "a % b = " << (a % b) << endl;  // 1
    
    int x = 5;
    cout << "x++ = " << x++ << endl;  // 5 (post-increment)
    cout << "x = " << x << endl;      // 6
    
    int y = 5;
    cout << "++y = " << ++y << endl;  // 6 (pre-increment)
    cout << "y = " << y << endl;      // 6
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Relational Operators</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Used to compare two values. Returns true (1) or false (0):
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Operator</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">==</td>
                  <td className="border border-gray-300 px-4 py-2">Equal to</td>
                  <td className="border border-gray-300 px-4 py-2">a == b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">!=</td>
                  <td className="border border-gray-300 px-4 py-2">Not equal to</td>
                  <td className="border border-gray-300 px-4 py-2">a != b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&gt;</td>
                  <td className="border border-gray-300 px-4 py-2">Greater than</td>
                  <td className="border border-gray-300 px-4 py-2">a &gt; b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&lt;</td>
                  <td className="border border-gray-300 px-4 py-2">Less than</td>
                  <td className="border border-gray-300 px-4 py-2">a &lt; b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&gt;=</td>
                  <td className="border border-gray-300 px-4 py-2">Greater than or equal to</td>
                  <td className="border border-gray-300 px-4 py-2">a &gt;= b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&lt;=</td>
                  <td className="border border-gray-300 px-4 py-2">Less than or equal to</td>
                  <td className="border border-gray-300 px-4 py-2">a &lt;= b</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Logical Operators</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Used to combine multiple conditions:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Operator</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&&</td>
                  <td className="border border-gray-300 px-4 py-2">Logical AND</td>
                  <td className="border border-gray-300 px-4 py-2">(a &gt; 5) && (b &lt; 10)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">||</td>
                  <td className="border border-gray-300 px-4 py-2">Logical OR</td>
                  <td className="border border-gray-300 px-4 py-2">(a &gt; 5) || (b &lt; 10)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">!</td>
                  <td className="border border-gray-300 px-4 py-2">Logical NOT</td>
                  <td className="border border-gray-300 px-4 py-2">!(a &gt; 5)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Assignment Operators</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Used to assign values to variables:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Operator</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Equivalent To</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">=</td>
                  <td className="border border-gray-300 px-4 py-2">Assignment</td>
                  <td className="border border-gray-300 px-4 py-2">a = b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">+=</td>
                  <td className="border border-gray-300 px-4 py-2">Add and assign</td>
                  <td className="border border-gray-300 px-4 py-2">a += b (a = a + b)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">-=</td>
                  <td className="border border-gray-300 px-4 py-2">Subtract and assign</td>
                  <td className="border border-gray-300 px-4 py-2">a -= b (a = a - b)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">*=</td>
                  <td className="border border-gray-300 px-4 py-2">Multiply and assign</td>
                  <td className="border border-gray-300 px-4 py-2">a *= b (a = a * b)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">/=</td>
                  <td className="border border-gray-300 px-4 py-2">Divide and assign</td>
                  <td className="border border-gray-300 px-4 py-2">a /= b (a = a / b)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">%=</td>
                  <td className="border border-gray-300 px-4 py-2">Modulus and assign</td>
                  <td className="border border-gray-300 px-4 py-2">a %= b (a = a % b)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Bitwise Operators</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Used to perform operations on individual bits:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Operator</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&</td>
                  <td className="border border-gray-300 px-4 py-2">Bitwise AND</td>
                  <td className="border border-gray-300 px-4 py-2">a & b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">|</td>
                  <td className="border border-gray-300 px-4 py-2">Bitwise OR</td>
                  <td className="border border-gray-300 px-4 py-2">a | b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">^</td>
                  <td className="border border-gray-300 px-4 py-2">Bitwise XOR</td>
                  <td className="border border-gray-300 px-4 py-2">a ^ b</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">~</td>
                  <td className="border border-gray-300 px-4 py-2">Bitwise NOT</td>
                  <td className="border border-gray-300 px-4 py-2">~a</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&lt;&lt;</td>
                  <td className="border border-gray-300 px-4 py-2">Left shift</td>
                  <td className="border border-gray-300 px-4 py-2">a &lt;&lt; 2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&gt;&gt;</td>
                  <td className="border border-gray-300 px-4 py-2">Right shift</td>
                  <td className="border border-gray-300 px-4 py-2">a &gt;&gt; 2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Other Operators</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>sizeof:</strong> Returns the size of a variable or data type</li>
            <li><strong>?: (Ternary):</strong> Conditional operator (condition ? value1 : value2)</li>
            <li><strong>:: (Scope resolution):</strong> Accesses members of a namespace or class</li>
            <li><strong>.* and -&gt;*:</strong> Pointer to member operators</li>
            <li><strong>new:</strong> Dynamic memory allocation</li>
            <li><strong>delete:</strong> Dynamic memory deallocation</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Operator Precedence</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Operators are evaluated in a specific order. Higher precedence operators are evaluated first:
          </p>
          <ol className="list-decimal list-inside space-y-1 ml-4 text-gray-700">
            <li>Postfix operators (++, --)</li>
            <li>Unary operators (+, -, !, ~, sizeof)</li>
            <li>Multiplicative (*, /, %)</li>
            <li>Additive (+, -)</li>
            <li>Shift (&lt;&lt;, &gt;&gt;)</li>
            <li>Relational (&lt;, &lt;=, &gt;, &gt;=)</li>
            <li>Equality (==, !=)</li>
            <li>Bitwise AND (&)</li>
            <li>Bitwise XOR (^)</li>
            <li>Bitwise OR (|)</li>
            <li>Logical AND (&&)</li>
            <li>Logical OR (||)</li>
            <li>Conditional (?:)</li>
            <li>Assignment (=, +=, -=, etc.)</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mt-3">
            Use parentheses () to override precedence and make expressions clearer.
          </p>
        </div>
      </div>
    </main>
  );
}
