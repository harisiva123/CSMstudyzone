import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Operators and Expressions in C++ – Complete Guide with Examples | C++ Notes",
  description:
    "Comprehensive guide to C++ operators including arithmetic, relational, logical, bitwise, assignment, and special operators. Learn operator precedence, associativity, and expression evaluation with practical examples.",
  keywords: [
    "C++ operators",
    "C++ expressions",
    "arithmetic operators",
    "logical operators",
    "bitwise operators",
    "operator precedence",
    "assignment operators",
    "C++ programming",
    "relational operators",
    "ternary operator"
  ],
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

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            Operators are the fundamental building blocks of C++ expressions. They allow you to perform calculations, make comparisons, 
            manipulate bits, and control program flow. Understanding operators deeply is crucial because they appear in virtually every line 
            of C++ code. From simple arithmetic to complex bit manipulations, operators enable you to express your logic concisely and efficiently.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Types of Operators</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            C++ provides various types of operators to perform different operations on operands. Operators are symbols that tell the compiler 
            to perform specific mathematical or logical operations. C++ has a rich set of operators that can be categorized into several groups, 
            each serving specific purposes in program development.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Understanding operator types helps you choose the right tool for each task. Some operators are used constantly (like arithmetic 
            and assignment), while others are specialized (like bitwise operators for low-level programming). Mastery of operators is essential 
            for writing efficient, readable, and correct C++ code.
          </p>
        </section>

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
            Use parentheses () to override precedence and make expressions clearer. When in doubt, use parentheses to ensure the intended 
            order of evaluation and improve code readability.
          </p>
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
                  <td className="border border-gray-300 px-4 py-3">Arithmetic Operators</td>
                  <td className="border border-gray-300 px-4 py-3">+, -, *, /, %, ++, -- for mathematical operations</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Relational Operators</td>
                  <td className="border border-gray-300 px-4 py-3">==, !=, &gt;, &lt;, &gt;=, &lt;= for comparisons, return bool</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Logical Operators</td>
                  <td className="border border-gray-300 px-4 py-3">&amp;&amp;, ||, ! for combining conditions, short-circuit evaluation</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Assignment Operators</td>
                  <td className="border border-gray-300 px-4 py-3">=, +=, -=, *=, /=, %= for combined assignment and operation</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Bitwise Operators</td>
                  <td className="border border-gray-300 px-4 py-3">&amp;, |, ^, ~, &lt;&lt;, &gt;&gt; for bit-level manipulation</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Operator Precedence</td>
                  <td className="border border-gray-300 px-4 py-3">Order of evaluation, use parentheses to override</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between ++i and i++?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">++i</code> (pre-increment) increments i first, then returns the new value. 
                <code className="bg-gray-100 px-1 rounded">i++</code> (post-increment) returns the current value first, then increments i. 
                For standalone statements, both are equivalent, but in expressions: <code className="bg-gray-100 px-1 rounded">int x = ++i;</code> 
                assigns incremented value, while <code className="bg-gray-100 px-1 rounded">int x = i++;</code> assigns original value.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: What is short-circuit evaluation in logical operators?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Short-circuit evaluation means the second operand is not evaluated if the result can be determined from the first. For 
                <code className="bg-gray-100 px-1 rounded">a &amp;&amp; b</code>, if a is false, b is not evaluated. For 
                <code className="bg-gray-100 px-1 rounded">a || b</code>, if a is true, b is not evaluated. This is useful for avoiding 
                errors (e.g., checking pointer before dereferencing).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What is the difference between = and == operators?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">=</code> is the assignment operator (assigns value), while 
                <code className="bg-gray-100 px-1 rounded">==</code> is the equality operator (compares values). Using = instead of == in 
                conditions is a common error that assigns instead of comparing, often causing bugs. Modern compilers warn about this.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: When should I use bitwise operators?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Bitwise operators are used for low-level programming: setting/clearing flags, efficient multiplication/division by powers of 2 
                (shift), cryptography, graphics programming, embedded systems, and optimizing certain algorithms. They operate on individual 
                bits rather than entire values.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What is operator associativity?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Associativity determines the order of evaluation when operators have the same precedence. Left-associative operators (most) 
                evaluate left to right: <code className="bg-gray-100 px-1 rounded">a - b - c</code> = <code className="bg-gray-100 px-1 rounded">(a - b) - c</code>. 
                Right-associative operators (assignment, ternary) evaluate right to left: <code className="bg-gray-100 px-1 rounded">a = b = c</code> 
                = <code className="bg-gray-100 px-1 rounded">a = (b = c)</code>.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: Can I overload operators in C++?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, C++ allows operator overloading for user-defined types (classes). You can define custom behavior for operators like +, -, 
                *, /, ==, &lt;&lt;, etc. This enables intuitive syntax like <code className="bg-gray-100 px-1 rounded">vector1 + vector2</code>. 
                Some operators cannot be overloaded (::, ., .*, ?:), and you cannot change operator precedence or number of operands.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What happens when I divide by zero in C++?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Division by zero causes undefined behavior for integers (may crash or produce garbage). For floating-point numbers, division 
                by zero may produce infinity (inf) or NaN (Not a Number). Always check for zero before division to prevent errors and ensure 
                program stability.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: What is the ternary operator and when should I use it?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The ternary operator <code className="bg-gray-100 px-1 rounded">? :</code> is a conditional operator: 
                <code className="bg-gray-100 px-1 rounded">condition ? value_if_true : value_if_false</code>. Use it for simple conditional 
                assignments when it improves readability, but avoid nested ternaries as they reduce clarity. It's more concise than if-else 
                for simple cases.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Operators are fundamental to C++ programming, enabling you to perform calculations, make decisions, and manipulate data efficiently. 
            Understanding the different types of operators, their precedence, and associativity is crucial for writing correct and efficient code.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            While most operators are straightforward, some require careful attention: the difference between = and ==, pre-increment vs post-increment, 
            and operator precedence can cause subtle bugs. Always use parentheses when the order of evaluation is unclear, and be mindful of 
            short-circuit evaluation in logical expressions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As you advance, you'll learn to leverage operator overloading to create intuitive interfaces for your classes, and use bitwise operators 
            for performance-critical code. Mastery of operators forms the foundation for understanding more complex C++ features and writing 
            professional-quality code.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/introduction" className="text-blue-600 hover:text-blue-700 underline">C++ Introduction</Link></li>
              <li><Link href="/notes/cpp-programming/control-structures" className="text-blue-600 hover:text-blue-700 underline">C++ Control Structures</Link></li>
              <li><Link href="/notes/cpp-programming/functions" className="text-blue-600 hover:text-blue-700 underline">C++ Functions</Link></li>
              <li><Link href="/notes/cpp-programming/arrays" className="text-blue-600 hover:text-blue-700 underline">C++ Arrays</Link></li>
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
