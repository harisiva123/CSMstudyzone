import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polymorphism in C++ – C++ Programming Notes",
  description:
    "Learn about compile-time and runtime polymorphism, virtual functions, function overriding, abstract classes, and pure virtual functions in C++.",
  keywords: ["C++ polymorphism", "virtual functions", "function overriding", "abstract classes", "runtime polymorphism"],
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

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Polymorphism means "many forms". In C++, it allows objects of different classes to be treated as objects 
            of a common base class. There are two types: compile-time (static) and runtime (dynamic) polymorphism.
          </p>
        </div>

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
      </div>
    </main>
  );
}



