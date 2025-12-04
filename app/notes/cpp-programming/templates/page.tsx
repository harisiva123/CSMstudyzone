import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Templates in C++ – Complete Guide to Generic Programming | C++ Notes",
  description:
    "Comprehensive guide to C++ templates including function templates, class templates, template specialization, non-type parameters, variadic templates, and generic programming with practical examples.",
  keywords: [
    "C++ templates",
    "function templates",
    "class templates",
    "template specialization",
    "generic programming",
    "variadic templates",
    "template parameters",
    "C++ generic code"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/templates",
  },
};

export default function TemplatesPage() {
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
          Templates
        </h1>
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            Templates are one of C++'s most powerful features, enabling generic programming - writing code that works with any data type without 
            sacrificing type safety. Instead of writing separate functions or classes for each type (int, double, string, etc.), templates allow 
            you to write one implementation that the compiler generates for each type you use. This eliminates code duplication while maintaining 
            compile-time type checking and performance.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Introduction to Templates</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Templates allow you to write generic code that works with different data types. They enable code reusability and type safety. C++ 
            supports function templates and class templates. Templates are the foundation of the Standard Template Library (STL) and enable you 
            to write highly reusable, type-safe code.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you use a template, the compiler generates specific code for each type you instantiate it with. This happens at compile time, 
            so there's no runtime overhead. Templates enable you to write algorithms and data structures once and use them with any type that meets 
            the requirements.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Understanding templates is essential for modern C++ programming. They're used extensively in the STL, enable design patterns, and allow 
            you to write code that's both generic and efficient. Templates are a key feature that sets C++ apart from many other programming languages.
          </p>
        </section>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Function Templates</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Function templates define a family of functions that work with different types:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

// Function template
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

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Multiple Template Parameters</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

template <typename T, typename U>
void printPair(T a, U b) {
    cout << a << " " << b << endl;
}

int main() {
    printPair(5, 3.14);      // int, double
    printPair("Hello", 10);  // string, int
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Class Templates</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Class templates allow you to define classes that work with different data types:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

template <class T>
class Stack {
private:
    T* arr;
    int top;
    int capacity;

public:
    Stack(int size) {
        capacity = size;
        arr = new T[capacity];
        top = -1;
    }
    
    ~Stack() {
        delete[] arr;
    }
    
    void push(T element) {
        if (top >= capacity - 1) {
            cout << "Stack overflow!" << endl;
            return;
        }
        arr[++top] = element;
    }
    
    T pop() {
        if (top < 0) {
            cout << "Stack underflow!" << endl;
            return T();
        }
        return arr[top--];
    }
    
    T peek() {
        if (top < 0) {
            return T();
        }
        return arr[top];
    }
};

int main() {
    Stack<int> intStack(5);
    intStack.push(10);
    intStack.push(20);
    cout << intStack.pop() << endl;
    
    Stack<string> stringStack(5);
    stringStack.push("Hello");
    stringStack.push("World");
    cout << stringStack.pop() << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Template Specialization</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Template specialization allows you to provide a specific implementation for a particular type:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

// General template
template <typename T>
void printType(T value) {
    cout << "Generic: " << value << endl;
}

// Specialization for int
template <>
void printType<int>(int value) {
    cout << "Integer: " << value << endl;
}

// Specialization for double
template <>
void printType<double>(double value) {
    cout << "Double: " << value << endl;
}

int main() {
    printType(10);      // Uses int specialization
    printType(3.14);     // Uses double specialization
    printType("Hello"); // Uses generic template
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Non-type Template Parameters</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

template <typename T, int size>
class Array {
private:
    T arr[size];

public:
    void set(int index, T value) {
        if (index >= 0 && index < size) {
            arr[index] = value;
        }
    }
    
    T get(int index) {
        if (index >= 0 && index < size) {
            return arr[index];
        }
        return T();
    }
    
    int getSize() {
        return size;
    }
};

int main() {
    Array<int, 5> intArr;
    intArr.set(0, 10);
    cout << intArr.get(0) << endl;
    
    Array<double, 10> doubleArr;
    doubleArr.set(0, 3.14);
    cout << doubleArr.get(0) << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Default Template Arguments</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

template <typename T = int, int size = 10>
class Container {
private:
    T arr[size];

public:
    void display() {
        for (int i = 0; i < size; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Container<> c1;        // Uses default: int, 10
    Container<double> c2;   // Uses default size: 10
    Container<int, 5> c3;   // Explicit: int, 5
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Template Functions with Multiple Types</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

template <typename T, typename U>
auto add(T a, U b) -> decltype(a + b) {
    return a + b;
}

int main() {
    cout << add(5, 3.14) << endl;      // int + double
    cout << add(10.5, 20) << endl;     // double + int
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Variadic Templates (C++11)</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Templates that can accept a variable number of arguments:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

// Base case
void print() {
    cout << endl;
}

// Variadic template
template <typename T, typename... Args>
void print(T first, Args... args) {
    cout << first << " ";
    print(args...);  // Recursive call
}

int main() {
    print(1, 2, 3, 4, 5);
    print("Hello", "World", 10, 3.14);
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Complete Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

template <typename T>
class Vector {
private:
    T* data;
    int size;
    int capacity;

public:
    Vector() : size(0), capacity(1) {
        data = new T[capacity];
    }
    
    ~Vector() {
        delete[] data;
    }
    
    void push_back(T value) {
        if (size >= capacity) {
            capacity *= 2;
            T* newData = new T[capacity];
            for (int i = 0; i < size; i++) {
                newData[i] = data[i];
            }
            delete[] data;
            data = newData;
        }
        data[size++] = value;
    }
    
    T at(int index) {
        if (index >= 0 && index < size) {
            return data[index];
        }
        return T();
    }
    
    int getSize() {
        return size;
    }
};

int main() {
    Vector<int> intVec;
    intVec.push_back(10);
    intVec.push_back(20);
    cout << intVec.at(0) << endl;
    
    Vector<string> stringVec;
    stringVec.push_back("Hello");
    stringVec.push_back("World");
    cout << stringVec.at(0) << endl;
    
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
                  <td className="border border-gray-300 px-4 py-3">Function Templates</td>
                  <td className="border border-gray-300 px-4 py-3">Generic functions using template&lt;typename T&gt;, compiler generates for each type</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Class Templates</td>
                  <td className="border border-gray-300 px-4 py-3">Generic classes, specify type when creating objects: Stack&lt;int&gt; s;</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Template Specialization</td>
                  <td className="border border-gray-300 px-4 py-3">Specific implementation for particular type, template&lt;&gt; syntax</td>
                  <td className="border border-gray-300 px-4 py-3">Advanced</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Non-type Parameters</td>
                  <td className="border border-gray-300 px-4 py-3">Template parameters that are values not types: template&lt;int size&gt;</td>
                  <td className="border border-gray-300 px-4 py-3">Advanced</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Default Template Arguments</td>
                  <td className="border border-gray-300 px-4 py-3">Provide default types/values: template&lt;typename T = int&gt;</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Variadic Templates</td>
                  <td className="border border-gray-300 px-4 py-3">Templates accepting variable arguments, typename... Args, C++11 feature</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between typename and class in template declarations?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                In template parameter declarations, <code className="bg-gray-100 px-1 rounded">typename</code> and <code className="bg-gray-100 px-1 rounded">class</code> are 
                equivalent. Both can be used: <code className="bg-gray-100 px-1 rounded">template&lt;typename T&gt;</code> or 
                <code className="bg-gray-100 px-1 rounded">template&lt;class T&gt;</code>. However, <code className="bg-gray-100 px-1 rounded">typename</code> is preferred for clarity 
                (it can be any type, not just classes). In other contexts, typename has different meaning (dependent type names).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: When does template instantiation happen?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Template instantiation happens at compile time. When you use a template with a specific type (e.g., <code className="bg-gray-100 px-1 rounded">max(5, 10)</code>), 
                the compiler generates the specific function for that type. Each unique type combination creates a new instantiation. This is why templates 
                are fast (no runtime overhead) but can increase compile time and code size (code bloat) if many instantiations are created.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What is template specialization and when should I use it?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Template specialization provides a specific implementation for a particular type when the generic template isn't suitable. Use it when a 
                type needs special handling. Syntax: <code className="bg-gray-100 px-1 rounded">template&lt;&gt; void func&lt;int&gt;(int x)</code>. 
                Specialization allows optimization for specific types or handling edge cases. Full specialization provides implementation for one type, 
                partial specialization (for classes) provides for a subset of types.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: Can templates have default arguments?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, templates support default arguments: <code className="bg-gray-100 px-1 rounded">template&lt;typename T = int, int size = 10&gt;</code>. 
                Default template arguments allow you to omit type/value when instantiating: <code className="bg-gray-100 px-1 rounded">Container&lt;&gt; c;</code> 
                uses defaults. Function templates got default arguments in C++11, class templates always had them. Defaults must be specified from right to left.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What are variadic templates and how do they work?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Variadic templates (C++11) accept variable number of template arguments: <code className="bg-gray-100 px-1 rounded">template&lt;typename... Args&gt;</code>. 
                They use parameter pack expansion and recursion. Base case handles empty pack, recursive case processes one argument and recurses with remaining. 
                Used in std::make_tuple, printf-like functions, perfect forwarding. Enable type-safe variable argument functions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: What is SFINAE (Substitution Failure Is Not An Error)?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                SFINAE means if template argument substitution fails, compiler doesn't error but tries next overload/specialization. This enables template 
                metaprogramming, type traits, and conditional compilation. Used to enable/disable template functions based on type properties. Modern C++ 
                (C++20) provides <code className="bg-gray-100 px-1 rounded">concepts</code> which are cleaner than SFINAE for type constraints.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: Can I use templates with inheritance?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, templates work with inheritance. You can have template base classes, derived classes can be templates, and you can inherit from 
                template instantiations. Template inheritance enables CRTP (Curiously Recurring Template Pattern) and mixins. Derived template classes can 
                inherit from template base classes, and you can specialize base class templates.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: What are template constraints and concepts (C++20)?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Concepts (C++20) specify requirements on template parameters: <code className="bg-gray-100 px-1 rounded">template&lt;std::integral T&gt;</code> 
                requires T to be an integral type. They provide better error messages, enable overloading based on concepts, and replace SFINAE in many cases. 
                Concepts make templates more readable and provide compile-time type checking. They're the modern way to constrain templates.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Templates are a cornerstone of modern C++ programming, enabling generic code that works with any type while maintaining type safety and 
            performance. Function templates eliminate code duplication for algorithms, while class templates enable generic data structures. The 
            Standard Template Library is built entirely on templates, demonstrating their power and importance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Template specialization allows you to optimize for specific types, while variadic templates enable functions with variable arguments. 
            Non-type template parameters enable compile-time constants, and default template arguments provide convenience. Understanding these features 
            enables you to write highly reusable, efficient code.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mastery of templates is essential for advanced C++ programming. They enable design patterns, metaprogramming, and the creation of powerful 
            libraries. Modern C++ features like concepts (C++20) make templates even more powerful and easier to use. Templates are what make C++ 
            suitable for both high-level abstractions and low-level performance-critical code.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/stl" className="text-blue-600 hover:text-blue-700 underline">C++ Standard Template Library</Link></li>
              <li><Link href="/notes/cpp-programming/functions" className="text-blue-600 hover:text-blue-700 underline">C++ Functions</Link></li>
              <li><Link href="/notes/cpp-programming/oop" className="text-blue-600 hover:text-blue-700 underline">C++ Object-Oriented Programming</Link></li>
              <li><Link href="/notes/cpp-programming/operators" className="text-blue-600 hover:text-blue-700 underline">C++ Operators</Link></li>
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



