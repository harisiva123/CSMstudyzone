import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Object-Oriented Programming in C++ – Complete OOP Guide | C++ Notes",
  description:
    "Comprehensive guide to object-oriented programming in C++ covering classes, objects, encapsulation, abstraction, access specifiers, constructors, destructors, static members, and OOP principles with examples.",
  keywords: [
    "C++ OOP",
    "classes and objects",
    "encapsulation",
    "abstraction",
    "constructors",
    "destructors",
    "C++ access specifiers",
    "object-oriented programming",
    "C++ classes",
    "OOP principles"
  ],
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

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            Object-Oriented Programming (OOP) is a fundamental programming paradigm that revolutionized software development. Instead of 
            thinking in terms of procedures and functions, OOP organizes code around objects - entities that combine data and the operations 
            that work on that data. This approach makes programs more modular, reusable, and easier to maintain. C++ was one of the first 
            widely-used languages to support OOP, and understanding OOP concepts is essential for mastering modern C++ programming.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Introduction to Object-Oriented Programming</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects, which contain both data (attributes) 
            and functions (methods) that operate on that data. This approach models real-world entities and their interactions, making programs 
            more intuitive and maintainable.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            OOP addresses limitations of procedural programming by bundling related data and functions together, controlling access to data, 
            and enabling code reuse through inheritance. This paradigm is used in virtually all modern software development, from desktop 
            applications to web services to mobile apps.
          </p>
        </section>

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
                  <td className="border border-gray-300 px-4 py-3">Classes & Objects</td>
                  <td className="border border-gray-300 px-4 py-3">Class is blueprint, object is instance, combine data and functions</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Access Specifiers</td>
                  <td className="border border-gray-300 px-4 py-3">private (class only), public (everywhere), protected (class + derived)</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Constructors</td>
                  <td className="border border-gray-300 px-4 py-3">Initialize objects, same name as class, default/parameterized/copy constructors</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Destructors</td>
                  <td className="border border-gray-300 px-4 py-3">Cleanup when object destroyed, ~ClassName(), automatic for stack objects</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Encapsulation</td>
                  <td className="border border-gray-300 px-4 py-3">Bundling data and methods, hiding implementation, data protection</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Abstraction</td>
                  <td className="border border-gray-300 px-4 py-3">Showing essential features, hiding complexity, interface vs implementation</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Static Members</td>
                  <td className="border border-gray-300 px-4 py-3">Shared by all objects, class-level data/functions, defined outside class</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between a class and an object?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A class is a blueprint or template that defines the structure and behavior. An object is an instance of a class - a concrete 
                entity created from the class blueprint. You can create multiple objects from a single class, each with its own data but sharing 
                the same structure and methods. Think of class as a cookie cutter and object as the actual cookie.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Why do we use private members in classes?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Private members enforce encapsulation - they prevent external code from directly accessing or modifying internal data. This 
                protects data integrity, allows you to change implementation without affecting users, and enables validation through public 
                methods. It's a key principle of OOP that data should be accessed only through controlled interfaces.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What happens if I don't define a constructor?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                If you don't define any constructor, the compiler provides a default constructor that does nothing (trivial initialization). 
                If you define any constructor (parameterized, copy), the compiler doesn't provide the default constructor automatically. You 
                must explicitly define it if you need it. Always define constructors when you need initialization logic.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: When is the destructor called?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Destructor is called automatically when an object goes out of scope (for stack objects) or when delete is called (for heap objects). 
                For local objects, destructor is called when the function returns. For member objects, destructors are called in reverse order 
                of construction. Destructors ensure proper cleanup of resources.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What is the difference between encapsulation and abstraction?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Encapsulation is bundling data and methods together and controlling access (hiding implementation). Abstraction is showing only 
                essential features and hiding complexity (focusing on what, not how). Encapsulation is about organization and access control, 
                while abstraction is about simplifying interfaces. They work together: encapsulation enables abstraction.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: Can I access private members from outside the class?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No, private members cannot be accessed directly from outside the class. However, you can access them through public member 
                functions (getters/setters) or friend functions/classes. This is by design - encapsulation requires controlled access. If you 
                need external access, make the member public or provide public accessor methods.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What are static members and when should I use them?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Static members belong to the class, not individual objects. Static variables are shared by all objects, and static functions 
                can be called without an object. Use static members for class-level data (like object counters), utility functions that don't 
                need object state, or constants shared by all instances. They're accessed using ClassName::member syntax.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: What is the difference between a constructor and a regular function?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Constructors have the same name as the class, have no return type (not even void), are called automatically when objects are 
                created, and cannot be called explicitly like regular functions. Regular functions have their own names, return types, and must 
                be called explicitly. Constructors initialize objects, while regular functions perform operations on already-initialized objects.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Object-Oriented Programming is a powerful paradigm that makes C++ code more organized, reusable, and maintainable. Understanding 
            classes, objects, encapsulation, and abstraction provides the foundation for building complex software systems. These concepts 
            enable you to model real-world problems more naturally and create code that is easier to understand and modify.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Constructors and destructors ensure proper object initialization and cleanup, while access specifiers control how data and methods 
            are accessed, enforcing encapsulation. Static members provide class-level functionality that doesn't depend on individual objects.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As you continue learning C++, you'll build on these OOP fundamentals with inheritance, polymorphism, and advanced features. Mastery 
            of basic OOP concepts is essential for understanding modern C++ and writing professional-quality software. The principles you learn 
            here apply to all object-oriented languages and are fundamental to software engineering.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/introduction" className="text-blue-600 hover:text-blue-700 underline">C++ Introduction</Link></li>
              <li><Link href="/notes/cpp-programming/structures" className="text-blue-600 hover:text-blue-700 underline">C++ Structures</Link></li>
              <li><Link href="/notes/cpp-programming/inheritance" className="text-blue-600 hover:text-blue-700 underline">C++ Inheritance</Link></li>
              <li><Link href="/notes/cpp-programming/polymorphism" className="text-blue-600 hover:text-blue-700 underline">C++ Polymorphism</Link></li>
              <li><Link href="/notes/cpp-programming/functions" className="text-blue-600 hover:text-blue-700 underline">C++ Functions</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
      </div>
    </main>
  );
}



