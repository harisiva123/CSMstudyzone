import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Polymorphism in C++ – Complete Guide with Examples | C++ Notes",
  description:
    "Comprehensive guide to polymorphism in C++ covering compile-time and runtime polymorphism, virtual functions, function overriding, abstract classes, pure virtual functions, and virtual destructors with practical examples.",
  keywords: [
    "C++ polymorphism",
    "virtual functions",
    "function overriding",
    "abstract classes",
    "runtime polymorphism",
    "compile-time polymorphism",
    "pure virtual functions",
    "virtual destructor",
    "C++ OOP"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/polymorphism",
  },
};

export default function PolymorphismPage() {
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
          Polymorphism
        </h1>
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            Polymorphism, meaning "many forms," is one of the most powerful features of object-oriented programming. It allows objects of different 
            classes to be treated uniformly through a common interface, enabling code to work with objects without knowing their specific types. 
            This flexibility makes programs more extensible and maintainable, as you can add new types without modifying existing code that uses 
            the base interface.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Introduction to Polymorphism</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Polymorphism means "many forms". In C++, it allows objects of different classes to be treated as objects of a common base class. 
            There are two types: compile-time (static) and runtime (dynamic) polymorphism. Compile-time polymorphism is resolved during compilation 
            through function overloading and operator overloading, while runtime polymorphism is resolved during program execution through virtual functions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Runtime polymorphism is particularly powerful because it enables you to write code that works with base class pointers or references, 
            but calls the appropriate derived class functions based on the actual object type. This is essential for building flexible, extensible 
            systems where new types can be added without modifying existing code.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Understanding polymorphism is crucial for mastering C++ and object-oriented design. It enables design patterns, makes code more maintainable, 
            and allows you to build systems that can evolve and adapt to new requirements without major restructuring.
          </p>
        </section>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Types of Polymorphism</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">1. Compile-time Polymorphism</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Also known as static polymorphism. Resolved at compile time through function overloading and operator overloading:
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Function Overloading</h4>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }
    
    double add(double a, double b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
};

int main() {
    Calculator calc;
    cout << calc.add(5, 3) << endl;        // int version
    cout << calc.add(5.5, 3.2) << endl;    // double version
    cout << calc.add(1, 2, 3) << endl;     // three parameters
    return 0;
}`}</code></pre>

          <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Operator Overloading</h4>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Complex {
private:
    int real, imag;

public:
    Complex(int r = 0, int i = 0) {
        real = r;
        imag = i;
    }
    
    Complex operator + (const Complex &obj) {
        Complex res;
        res.real = real + obj.real;
        res.imag = imag + obj.imag;
        return res;
    }
    
    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3, 4);
    Complex c2(1, 2);
    Complex c3 = c1 + c2;  // Operator overloading
    c3.display();
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2. Runtime Polymorphism</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Also known as dynamic polymorphism. Resolved at runtime through virtual functions:
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Virtual Functions</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Virtual functions allow runtime polymorphism. They are declared with the <code>virtual</code> keyword:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Base {
public:
    virtual void display() {  // Virtual function
        cout << "Base class display" << endl;
    }
};

class Derived : public Base {
public:
    void display() {  // Overrides base class function
        cout << "Derived class display" << endl;
    }
};

int main() {
    Base *ptr;
    Derived d;
    ptr = &d;
    
    ptr->display();  // Calls Derived::display() due to virtual
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Pure Virtual Functions</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            A virtual function with no implementation. Makes the class abstract:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() = 0;  // Pure virtual function
    virtual double area() = 0;  // Pure virtual function
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {}
    
    void draw() {
        cout << "Drawing circle" << endl;
    }
    
    double area() {
        return 3.14159 * radius * radius;
    }
};

class Rectangle : public Shape {
private:
    double length, width;

public:
    Rectangle(double l, double w) : length(l), width(w) {}
    
    void draw() {
        cout << "Drawing rectangle" << endl;
    }
    
    double area() {
        return length * width;
    }
};

int main() {
    Shape *s1 = new Circle(5.0);
    Shape *s2 = new Rectangle(4.0, 6.0);
    
    s1->draw();
    cout << "Area: " << s1->area() << endl;
    
    s2->draw();
    cout << "Area: " << s2->area() << endl;
    
    delete s1;
    delete s2;
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Abstract Classes</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            A class with at least one pure virtual function is called an abstract class. 
            Objects of abstract classes cannot be created:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`class AbstractClass {
public:
    virtual void pureFunction() = 0;  // Makes class abstract
    void concreteFunction() {
        cout << "This is a concrete function" << endl;
    }
};

// Cannot create: AbstractClass obj;  // Error!
// Must derive and implement pure virtual function`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Virtual Destructor</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            When deleting objects through base class pointers, use virtual destructor to ensure proper cleanup:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Base {
public:
    virtual ~Base() {  // Virtual destructor
        cout << "Base destructor" << endl;
    }
};

class Derived : public Base {
public:
    ~Derived() {
        cout << "Derived destructor" << endl;
    }
};

int main() {
    Base *ptr = new Derived();
    delete ptr;  // Calls both destructors due to virtual
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Function Overriding vs Overloading</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Overloading</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Overriding</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Scope</td>
                  <td className="border border-gray-300 px-4 py-2">Same class</td>
                  <td className="border border-gray-300 px-4 py-2">Different classes (inheritance)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Signature</td>
                  <td className="border border-gray-300 px-4 py-2">Must differ</td>
                  <td className="border border-gray-300 px-4 py-2">Must be same</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Resolution</td>
                  <td className="border border-gray-300 px-4 py-2">Compile time</td>
                  <td className="border border-gray-300 px-4 py-2">Runtime (with virtual)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Keyword</td>
                  <td className="border border-gray-300 px-4 py-2">Not required</td>
                  <td className="border border-gray-300 px-4 py-2">virtual (for runtime)</td>
                </tr>
              </tbody>
            </table>
          </div>
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
                  <td className="border border-gray-300 px-4 py-3">Compile-time Polymorphism</td>
                  <td className="border border-gray-300 px-4 py-3">Function/operator overloading, resolved at compile time, no runtime overhead</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Runtime Polymorphism</td>
                  <td className="border border-gray-300 px-4 py-3">Virtual functions, resolved at runtime, enables dynamic dispatch</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Virtual Functions</td>
                  <td className="border border-gray-300 px-4 py-3">Enable runtime polymorphism, use virtual keyword, can be overridden</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Pure Virtual Functions</td>
                  <td className="border border-gray-300 px-4 py-3">No implementation (= 0), makes class abstract, must be implemented in derived</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Abstract Classes</td>
                  <td className="border border-gray-300 px-4 py-3">Cannot be instantiated, contains pure virtual functions, defines interface</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Virtual Destructor</td>
                  <td className="border border-gray-300 px-4 py-3">Ensures proper cleanup when deleting through base pointer, prevents memory leaks</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Overriding vs Overloading</td>
                  <td className="border border-gray-300 px-4 py-3">Overriding: same signature, different classes. Overloading: different signatures, same class</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between compile-time and runtime polymorphism?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Compile-time polymorphism (function/operator overloading) is resolved by the compiler based on function signatures. Runtime polymorphism 
                (virtual functions) is resolved at runtime based on the actual object type. Compile-time has no runtime overhead, while runtime 
                polymorphism uses virtual function tables (vtables) for dynamic dispatch.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: When should I use virtual functions?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use virtual functions when you need runtime polymorphism - when you have base class pointers/references pointing to derived objects 
                and want to call the derived class version. Virtual functions enable dynamic dispatch, allowing the correct function to be called 
                based on the actual object type, not the pointer type.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What happens if I don't use virtual keyword?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Without virtual, function calls are resolved based on the pointer/reference type, not the actual object type. This means a base 
                class pointer to a derived object will call the base class function, not the derived one. This is called static binding. Virtual 
                enables dynamic binding.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: What is a pure virtual function and why use it?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A pure virtual function has no implementation and is declared with = 0. It makes the class abstract (cannot be instantiated) and 
                forces derived classes to provide implementations. Use pure virtual functions to define interfaces - contracts that derived classes 
                must fulfill. This enforces a consistent interface across different implementations.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: Why do I need a virtual destructor?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                When deleting an object through a base class pointer, without a virtual destructor, only the base destructor is called, leading to 
                incomplete cleanup and potential memory leaks. Virtual destructor ensures the derived destructor is called first, then the base 
                destructor, ensuring proper cleanup of all resources.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: Can I have a virtual constructor in C++?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No, constructors cannot be virtual in C++. Constructors are called to create objects, and at construction time, the object type is 
                already known. However, you can use virtual clone() or factory methods to achieve similar functionality. Destructors can and should 
                be virtual when using inheritance with polymorphism.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What is the performance cost of virtual functions?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Virtual functions have a small performance overhead: one extra indirection through the vtable (virtual function table) and inability 
                to inline in some cases. However, this overhead is usually negligible compared to the flexibility gained. Modern compilers optimize 
                virtual function calls, and the benefits of polymorphism typically outweigh the small performance cost.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: Can I override a non-virtual function?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                You can define a function with the same name in a derived class, but it's hiding, not overriding. Without virtual, the function 
                called depends on the pointer/reference type, not the object type. Use the <code className="bg-gray-100 px-1 rounded">override</code> 
                keyword (C++11+) to ensure you're actually overriding a virtual function and catch errors at compile time.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Polymorphism is a cornerstone of object-oriented programming that enables flexible, extensible code. Compile-time polymorphism through 
            overloading provides convenience and type safety, while runtime polymorphism through virtual functions enables powerful dynamic behavior 
            that adapts to the actual object types.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Virtual functions and abstract classes enable you to define interfaces and create systems where new types can be added without modifying 
            existing code. This is essential for building maintainable, scalable software. The virtual destructor ensures proper cleanup in polymorphic 
            hierarchies, preventing resource leaks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mastery of polymorphism, combined with inheritance and encapsulation, enables you to build sophisticated software systems using design 
            patterns and best practices. Understanding when to use compile-time vs runtime polymorphism, and how to design effective class hierarchies, 
            is crucial for becoming a proficient C++ programmer.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/inheritance" className="text-blue-600 hover:text-blue-700 underline">C++ Inheritance</Link></li>
              <li><Link href="/notes/cpp-programming/oop" className="text-blue-600 hover:text-blue-700 underline">C++ Object-Oriented Programming</Link></li>
              <li><Link href="/notes/cpp-programming/functions" className="text-blue-600 hover:text-blue-700 underline">C++ Functions</Link></li>
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



