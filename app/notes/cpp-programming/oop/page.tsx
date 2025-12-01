import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OOP Concepts in C++ – C++ Programming Notes",
  description:
    "Learn about classes, objects, encapsulation, abstraction, access specifiers, constructors, destructors, and object-oriented programming principles in C++.",
  keywords: ["C++ OOP", "classes objects", "encapsulation", "abstraction", "constructors", "C++ access specifiers"],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/oop",
  },
};

export default function OOPPage() {
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
          OOP Concepts
        </h1>
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction to OOP</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects, 
            which contain both data (attributes) and functions (methods) that operate on that data.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Core OOP Principles</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Encapsulation:</strong> Bundling data and methods together, hiding internal details</li>
            <li><strong>Abstraction:</strong> Showing only essential features, hiding implementation details</li>
            <li><strong>Inheritance:</strong> Creating new classes based on existing classes</li>
            <li><strong>Polymorphism:</strong> Ability to take multiple forms</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Classes and Objects</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Class Definition</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            A class is a blueprint for creating objects:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`class ClassName {
    // Access specifiers
    private:
        // Private members
    public:
        // Public members
    protected:
        // Protected members
};`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Object Creation</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            An object is an instance of a class:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`ClassName objectName;  // Static object
ClassName *ptr = new ClassName();  // Dynamic object`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Complete Example</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int rollNo;
    float marks;

public:
    // Member functions
    void setData(string n, int r, float m) {
        name = n;
        rollNo = r;
        marks = m;
    }
    
    void displayData() {
        cout << "Name: " << name << endl;
        cout << "Roll No: " << rollNo << endl;
        cout << "Marks: " << marks << endl;
    }
    
    float getMarks() {
        return marks;
    }
};

int main() {
    Student s1;  // Object creation
    s1.setData("John", 101, 85.5);
    s1.displayData();
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Access Specifiers</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>private:</strong> Members are accessible only within the class</li>
            <li><strong>public:</strong> Members are accessible from anywhere</li>
            <li><strong>protected:</strong> Members are accessible within the class and derived classes</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg mt-3">
            <code>{`class Example {
private:
    int privateVar;  // Only accessible within class
    
public:
    int publicVar;   // Accessible everywhere
    
protected:
    int protectedVar;  // Accessible in class and derived classes
};`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Constructors</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Special member functions that initialize objects. They have the same name as the class:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Default Constructor</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`class MyClass {
public:
    MyClass() {
        // Default constructor
        cout << "Default constructor called" << endl;
    }
};`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Parameterized Constructor</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`class MyClass {
    int value;
public:
    MyClass(int v) {
        value = v;
        cout << "Parameterized constructor called" << endl;
    }
};`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Copy Constructor</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`class MyClass {
    int value;
public:
    MyClass(const MyClass &obj) {
        value = obj.value;
        cout << "Copy constructor called" << endl;
    }
};`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Complete Example</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Rectangle {
private:
    int length, width;

public:
    // Default constructor
    Rectangle() {
        length = 0;
        width = 0;
    }
    
    // Parameterized constructor
    Rectangle(int l, int w) {
        length = l;
        width = w;
    }
    
    // Copy constructor
    Rectangle(const Rectangle &r) {
        length = r.length;
        width = r.width;
    }
    
    int area() {
        return length * width;
    }
};

int main() {
    Rectangle r1;           // Default constructor
    Rectangle r2(5, 3);     // Parameterized constructor
    Rectangle r3(r2);       // Copy constructor
    
    cout << "Area: " << r2.area() << endl;
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Destructors</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Special member function that is called when an object is destroyed. Used for cleanup:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class MyClass {
public:
    MyClass() {
        cout << "Constructor called" << endl;
    }
    
    ~MyClass() {
        cout << "Destructor called" << endl;
    }
};

int main() {
    MyClass obj;
    // Destructor called automatically when obj goes out of scope
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Encapsulation</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Binding data and methods together, hiding internal implementation:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`class BankAccount {
private:
    double balance;  // Hidden data
    
public:
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
    
    double getBalance() {
        return balance;
    }
};`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Abstraction</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Showing only essential features, hiding implementation details:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`class Calculator {
public:
    // Public interface - what user sees
    double add(double a, double b) {
        return performAddition(a, b);
    }
    
private:
    // Hidden implementation - how it works
    double performAddition(double a, double b) {
        return a + b;
    }
};`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Static Members</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Shared by all objects of the class:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

class Counter {
private:
    static int count;  // Static member variable

public:
    Counter() {
        count++;
    }
    
    static int getCount() {  // Static member function
        return count;
    }
};

int Counter::count = 0;  // Definition outside class

int main() {
    Counter c1, c2, c3;
    cout << "Total objects: " << Counter::getCount() << endl;
    return 0;
}`}</code></pre>
        </div>
      </div>
    </main>
  );
}



