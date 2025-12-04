import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Inheritance in C++ – Complete Guide with Examples | C++ Notes",
  description:
    "Comprehensive guide to inheritance in C++ covering single, multiple, multilevel, hierarchical, and hybrid inheritance. Learn base classes, derived classes, access specifiers, function overriding, and constructor/destructor order.",
  keywords: [
    "C++ inheritance",
    "base class",
    "derived class",
    "multiple inheritance",
    "multilevel inheritance",
    "hierarchical inheritance",
    "function overriding",
    "access specifiers",
    "C++ OOP"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/inheritance",
  },
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

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            Inheritance is one of the four fundamental pillars of object-oriented programming, enabling code reuse and creating hierarchical 
            relationships between classes. It allows you to create new classes based on existing ones, inheriting their attributes and methods 
            while adding new functionality or modifying existing behavior. This powerful mechanism reduces code duplication, improves maintainability, 
            and enables the creation of more organized, scalable software systems.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Introduction to Inheritance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inheritance is a mechanism where a new class (derived class) is created from an existing class (base class). The derived class inherits 
            all the properties and behaviors of the base class, promoting code reusability. This relationship is often described as an "is-a" 
            relationship - for example, a Dog "is-a" Animal, or a Car "is-a" Vehicle.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The base class (also called parent class or superclass) contains common features shared by multiple classes. The derived class (also called 
            child class or subclass) inherits these features and can add its own unique characteristics. This creates a natural hierarchy that models 
            real-world relationships and makes code more intuitive and maintainable.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inheritance enables polymorphism, where objects of different derived classes can be treated uniformly through their common base class. 
            This is essential for building flexible, extensible software systems that can grow and adapt to changing requirements without major 
            restructuring of existing code.
          </p>
        </section>

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
                  <td className="border border-gray-300 px-4 py-3">Single Inheritance</td>
                  <td className="border border-gray-300 px-4 py-3">One base class, one derived class, simplest form</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Multiple Inheritance</td>
                  <td className="border border-gray-300 px-4 py-3">Derived class inherits from multiple base classes, can cause ambiguity</td>
                  <td className="border border-gray-300 px-4 py-3">Advanced</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Multilevel Inheritance</td>
                  <td className="border border-gray-300 px-4 py-3">Chain of inheritance, A→B→C, creates inheritance hierarchy</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Hierarchical Inheritance</td>
                  <td className="border border-gray-300 px-4 py-3">Multiple derived classes from one base, common base shared</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Hybrid Inheritance</td>
                  <td className="border border-gray-300 px-4 py-3">Combination of multiple types, may require virtual inheritance</td>
                  <td className="border border-gray-300 px-4 py-3">Advanced</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Access Specifiers</td>
                  <td className="border border-gray-300 px-4 py-3">public/protected/private inheritance control member visibility</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Constructor/Destructor Order</td>
                  <td className="border border-gray-300 px-4 py-3">Base constructor first, derived last; destructors reverse order</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between public, protected, and private inheritance?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Public inheritance: base class public members become public in derived, protected become protected. Protected inheritance: both public 
                and protected become protected. Private inheritance: both become private. Public inheritance is most common (is-a relationship), 
                private inheritance is rarely used (implementation inheritance).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: What is the diamond problem in multiple inheritance?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Diamond problem occurs when a class inherits from two classes that both inherit from the same base class, creating ambiguity. 
                For example, D inherits from B and C, both of which inherit from A. D would have two copies of A's members. Solution: use virtual 
                inheritance (virtual keyword in inheritance declaration) to ensure only one copy of the base class.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: Can a derived class access private members of the base class?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No, private members of the base class are not accessible in the derived class, regardless of inheritance type. They remain private 
                to the base class. To allow derived classes to access members while keeping them hidden from external code, use protected access 
                specifier instead of private.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: What is function overriding and how is it different from overloading?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Function overriding occurs when a derived class defines a function with the same signature as a base class function, replacing the 
                base implementation. Overloading is having multiple functions with the same name but different signatures in the same scope. 
                Overriding requires inheritance, overloading doesn't. Use virtual keyword for runtime polymorphism with overriding.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: Why are base class constructors called before derived class constructors?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Base class must be fully constructed before derived class can be constructed, because derived class may depend on base class members. 
                This ensures base class is in a valid state before derived class initialization. Destructors are called in reverse order (derived 
                first, then base) to ensure proper cleanup.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: Can I prevent a class from being inherited?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                In C++11+, you can use the <code className="bg-gray-100 px-1 rounded">final</code> keyword: <code className="bg-gray-100 px-1 rounded">class Base final { };</code> 
                prevents any class from inheriting from Base. You can also mark specific functions as final to prevent overriding. This is useful 
                for ensuring certain classes or methods cannot be modified through inheritance.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What is the difference between inheritance and composition?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Inheritance represents "is-a" relationship (Dog is-a Animal), while composition represents "has-a" relationship (Car has-a Engine). 
                Inheritance: derived class is a type of base class. Composition: class contains another class as a member. Prefer composition when 
                you need functionality, inheritance when you need polymorphism. Composition is more flexible and less coupled.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: How do I call a base class function from a derived class?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use scope resolution operator: <code className="bg-gray-100 px-1 rounded">BaseClass::functionName()</code>. For example, if Derived 
                overrides a function but wants to call the base version: <code className="bg-gray-100 px-1 rounded">Base::display()</code>. This 
                is useful when overriding functions but still needing the base class functionality, or when resolving ambiguity in multiple inheritance.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inheritance is a fundamental OOP concept that enables code reuse, hierarchical organization, and polymorphism. Understanding different 
            types of inheritance helps you design better class hierarchies that model real-world relationships accurately. Single and hierarchical 
            inheritance are most common, while multiple inheritance requires careful design to avoid ambiguity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Access specifiers in inheritance control how base class members are accessible in derived classes, providing fine-grained control over 
            encapsulation. Constructor and destructor order ensures proper initialization and cleanup, with base classes always constructed first 
            and destroyed last.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mastery of inheritance is essential for building complex, maintainable C++ applications. Combined with polymorphism, inheritance enables 
            powerful design patterns and flexible software architectures. As you progress, you'll learn to balance inheritance with composition, 
            choosing the right relationship type for each design situation.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/oop" className="text-blue-600 hover:text-blue-700 underline">C++ Object-Oriented Programming</Link></li>
              <li><Link href="/notes/cpp-programming/polymorphism" className="text-blue-600 hover:text-blue-700 underline">C++ Polymorphism</Link></li>
              <li><Link href="/notes/cpp-programming/structures" className="text-blue-600 hover:text-blue-700 underline">C++ Structures</Link></li>
              <li><Link href="/notes/cpp-programming/functions" className="text-blue-600 hover:text-blue-700 underline">C++ Functions</Link></li>
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



