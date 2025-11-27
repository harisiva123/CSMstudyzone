import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inheritance in C++ – C++ Programming Notes",
  description:
    "Learn about single, multiple, multilevel, hierarchical, and hybrid inheritance in C++. Understand base classes, derived classes, and access specifiers.",
  keywords: ["C++ inheritance", "base class", "derived class", "multiple inheritance", "C++ polymorphism"],
};

export default function InheritancePage() {
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
          Inheritance
        </h1>
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inheritance is a mechanism where a new class (derived class) is created from an existing class (base class). 
            The derived class inherits all the properties and behaviors of the base class, promoting code reusability.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Syntax</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`class BaseClass {
    // base class members
};

class DerivedClass : access_specifier BaseClass {
    // derived class members
};`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Types of Inheritance</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">1. Single Inheritance</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            A derived class inherits from only one base class:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
    }
};

int main() {
    Dog d;
    d.eat();   // Inherited from Animal
    d.bark();  // Own method
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2. Multiple Inheritance</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            A derived class inherits from multiple base classes:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class A {
public:
    void displayA() {
        cout << "Class A" << endl;
    }
};

class B {
public:
    void displayB() {
        cout << "Class B" << endl;
    }
};

class C : public A, public B {
public:
    void displayC() {
        cout << "Class C" << endl;
    }
};

int main() {
    C obj;
    obj.displayA();
    obj.displayB();
    obj.displayC();
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3. Multilevel Inheritance</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            A class is derived from a derived class, creating a chain:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

class Mammal : public Animal {
public:
    void breathe() {
        cout << "Breathing..." << endl;
    }
};

class Dog : public Mammal {
public:
    void bark() {
        cout << "Barking..." << endl;
    }
};

int main() {
    Dog d;
    d.eat();     // From Animal
    d.breathe(); // From Mammal
    d.bark();    // Own method
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4. Hierarchical Inheritance</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Multiple derived classes inherit from a single base class:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Shape {
public:
    void display() {
        cout << "This is a shape" << endl;
    }
};

class Circle : public Shape {
public:
    void drawCircle() {
        cout << "Drawing circle" << endl;
    }
};

class Rectangle : public Shape {
public:
    void drawRectangle() {
        cout << "Drawing rectangle" << endl;
    }
};

int main() {
    Circle c;
    Rectangle r;
    c.display();
    c.drawCircle();
    r.display();
    r.drawRectangle();
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5. Hybrid Inheritance</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Combination of multiple types of inheritance:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class A {
public:
    void displayA() {
        cout << "Class A" << endl;
    }
};

class B : public A {
public:
    void displayB() {
        cout << "Class B" << endl;
    }
};

class C : public A {
public:
    void displayC() {
        cout << "Class C" << endl;
    }
};

class D : public B, public C {
public:
    void displayD() {
        cout << "Class D" << endl;
    }
};

int main() {
    D obj;
    // obj.displayA();  // Ambiguous - which A?
    obj.B::displayA();  // Specify which A
    obj.displayB();
    obj.displayC();
    obj.displayD();
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Access Specifiers in Inheritance</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Base Class Access</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">public</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">protected</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">private</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">public inheritance</td>
                  <td className="border border-gray-300 px-4 py-2">public</td>
                  <td className="border border-gray-300 px-4 py-2">protected</td>
                  <td className="border border-gray-300 px-4 py-2">Not accessible</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">protected inheritance</td>
                  <td className="border border-gray-300 px-4 py-2">protected</td>
                  <td className="border border-gray-300 px-4 py-2">protected</td>
                  <td className="border border-gray-300 px-4 py-2">Not accessible</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">private inheritance</td>
                  <td className="border border-gray-300 px-4 py-2">private</td>
                  <td className="border border-gray-300 px-4 py-2">private</td>
                  <td className="border border-gray-300 px-4 py-2">Not accessible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Function Overriding</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Derived class can override base class functions:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Base {
public:
    void display() {
        cout << "Base class display" << endl;
    }
};

class Derived : public Base {
public:
    void display() {  // Overriding
        cout << "Derived class display" << endl;
    }
};

int main() {
    Derived d;
    d.display();  // Calls Derived::display()
    d.Base::display();  // Calls Base::display()
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Constructor and Destructor in Inheritance</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Base class constructor is called before derived class constructor. Destructors are called in reverse order:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Base {
public:
    Base() {
        cout << "Base constructor" << endl;
    }
    ~Base() {
        cout << "Base destructor" << endl;
    }
};

class Derived : public Base {
public:
    Derived() {
        cout << "Derived constructor" << endl;
    }
    ~Derived() {
        cout << "Derived destructor" << endl;
    }
};

int main() {
    Derived d;
    // Output:
    // Base constructor
    // Derived constructor
    // Derived destructor
    // Base destructor
    return 0;
}`}</code></pre>
        </div>
      </div>
    </main>
  );
}

