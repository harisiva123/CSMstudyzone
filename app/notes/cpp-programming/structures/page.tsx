import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Structures and Unions in C++ – Complete Guide with Examples | C++ Notes",
  description:
    "Comprehensive guide to structures and unions in C++ programming. Learn structure declaration, initialization, nested structures, structure pointers, typedef, unions, and differences between structures and unions with practical examples.",
  keywords: [
    "C++ structures",
    "C++ unions",
    "nested structures",
    "typedef",
    "structure pointers",
    "C++ data structures",
    "structure initialization",
    "union vs structure",
    "C++ programming"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/structures",
  },
};

export default function StructuresPage() {
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
          Structures & Unions
        </h1>
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            Structures and unions are powerful features in C++ that allow you to create custom data types by grouping related data together. 
            While arrays store multiple values of the same type, structures enable you to combine different data types into a single entity, 
            making it easier to model real-world objects and organize complex data. Understanding structures is essential before moving to 
            classes, as structures form the foundation of object-oriented programming in C++.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">1. Understanding Structures</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A structure is a user-defined data type that groups related data items of different types under a single name. Structures allow 
            you to create complex data types that represent real-world entities. For example, a Student structure can contain roll number 
            (int), name (string), and marks (float) - all related to a single student entity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Structures are particularly useful when you need to pass multiple related values to functions, return multiple values from functions, 
            or organize data in a logical way. They provide better code organization and readability compared to using separate variables for 
            each piece of related data.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Basic Structure</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <string>
using namespace std;

struct Student {
    int rollNo;
    string name;
    float marks;
};

int main() {
    Student s1;
    s1.rollNo = 101;
    s1.name = "John";
    s1.marks = 85.5;
    
    cout << "Roll No: " << s1.rollNo << endl;
    cout << "Name: " << s1.name << endl;
    cout << "Marks: " << s1.marks << endl;
    
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Initialization</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <string>
using namespace std;

struct Student {
    int rollNo;
    string name;
    float marks;
};

int main() {
    // Initialization at declaration
    Student s1 = {101, "John", 85.5};
    
    // Designated initialization (C++20)
    Student s2 = {.rollNo = 102, .name = "Alice", .marks = 90.0};
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Structure with Functions</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <string>
using namespace std;

struct Rectangle {
    int length;
    int width;
    
    // Member function
    int area() {
        return length * width;
    }
    
    void setDimensions(int l, int w) {
        length = l;
        width = w;
    }
};

int main() {
    Rectangle r;
    r.setDimensions(5, 3);
    cout << "Area: " << r.area() << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Array of Structures</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <string>
using namespace std;

struct Student {
    int rollNo;
    string name;
    float marks;
};

int main() {
    Student students[3];
    
    // Input
    for (int i = 0; i < 3; i++) {
        cout << "Enter roll no, name, marks: ";
        cin >> students[i].rollNo;
        cin >> students[i].name;
        cin >> students[i].marks;
    }
    
    // Display
    for (int i = 0; i < 3; i++) {
        cout << students[i].rollNo << " " 
             << students[i].name << " " 
             << students[i].marks << endl;
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Nested Structures</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <string>
using namespace std;

struct Date {
    int day;
    int month;
    int year;
};

struct Employee {
    int id;
    string name;
    Date birthDate;  // Nested structure
    float salary;
};

int main() {
    Employee emp;
    emp.id = 101;
    emp.name = "John";
    emp.birthDate.day = 15;
    emp.birthDate.month = 5;
    emp.birthDate.year = 1990;
    emp.salary = 50000;
    
    cout << "Employee: " << emp.name << endl;
    cout << "DOB: " << emp.birthDate.day << "/" 
         << emp.birthDate.month << "/" 
         << emp.birthDate.year << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Structure Pointers</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <string>
using namespace std;

struct Student {
    int rollNo;
    string name;
    float marks;
};

int main() {
    Student s = {101, "John", 85.5};
    Student *ptr = &s;
    
    // Accessing using pointer
    cout << (*ptr).rollNo << endl;
    cout << ptr->name << endl;  // Arrow operator
    cout << ptr->marks << endl;
    
    // Dynamic allocation
    Student *s2 = new Student;
    s2->rollNo = 102;
    s2->name = "Alice";
    s2->marks = 90.0;
    
    delete s2;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. typedef with Structures</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <string>
using namespace std;

struct Student {
    int rollNo;
    string name;
    float marks;
};

typedef Student Stu;  // Create alias

int main() {
    Stu s1;  // Same as Student s1;
    s1.rollNo = 101;
    s1.name = "John";
    s1.marks = 85.5;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Unions</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            A union is similar to a structure, but all members share the same memory location. 
            Only one member can be accessed at a time:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

union Data {
    int intValue;
    float floatValue;
    char charValue;
};

int main() {
    Data d;
    
    d.intValue = 10;
    cout << "Integer: " << d.intValue << endl;
    
    d.floatValue = 3.14;
    cout << "Float: " << d.floatValue << endl;
    // intValue is now overwritten
    
    d.charValue = 'A';
    cout << "Char: " << d.charValue << endl;
    // Both intValue and floatValue are overwritten
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Structure vs Union</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Structure</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Union</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Memory</td>
                  <td className="border border-gray-300 px-4 py-2">Each member has separate memory</td>
                  <td className="border border-gray-300 px-4 py-2">All members share same memory</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Size</td>
                  <td className="border border-gray-300 px-4 py-2">Sum of all members (with padding)</td>
                  <td className="border border-gray-300 px-4 py-2">Size of largest member</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Access</td>
                  <td className="border border-gray-300 px-4 py-2">All members can be accessed</td>
                  <td className="border border-gray-300 px-4 py-2">Only one member at a time</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Use Case</td>
                  <td className="border border-gray-300 px-4 py-2">Group related data</td>
                  <td className="border border-gray-300 px-4 py-2">Save memory, type conversion</td>
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
                  <td className="border border-gray-300 px-4 py-3">Structures</td>
                  <td className="border border-gray-300 px-4 py-3">User-defined type grouping different data types, each member has separate memory</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Structure Initialization</td>
                  <td className="border border-gray-300 px-4 py-3">Can initialize at declaration, use designated initializers (C++20)</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Nested Structures</td>
                  <td className="border border-gray-300 px-4 py-3">Structure within structure, access using dot operator chain</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Structure Pointers</td>
                  <td className="border border-gray-300 px-4 py-3">Use -&gt; operator or (*ptr).member to access members via pointer</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Unions</td>
                  <td className="border border-gray-300 px-4 py-3">All members share same memory, size = largest member, only one active at a time</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Structure vs Union</td>
                  <td className="border border-gray-300 px-4 py-3">Structures: separate memory, unions: shared memory for memory efficiency</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between a structure and a class in C++?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                In C++, structures and classes are almost identical. The only difference is default access: structure members are public by default, 
                while class members are private by default. Structures can have member functions, constructors, destructors, and all class features. 
                Use structures for simple data grouping, classes for full OOP with encapsulation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: When should I use a union instead of a structure?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use unions when you need to save memory and only one member will be active at a time. Common uses: type conversion, implementing 
                variant types, embedded systems with limited memory, network protocols with different message formats. Structures are preferred 
                when you need all members simultaneously.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: How do I pass a structure to a function?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                You can pass structures by value (copies the entire structure), by reference (no copy, can modify original), or by pointer 
                (efficient, can modify original). For large structures, prefer pass by reference or pointer to avoid copying overhead. 
                Example: <code className="bg-gray-100 px-1 rounded">void func(Student &amp;s)</code> or <code className="bg-gray-100 px-1 rounded">void func(Student *s)</code>.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: Can structures have member functions in C++?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, C++ structures can have member functions, constructors, destructors, and all features that classes have. This is a major 
                difference from C structures. In C++, structures are essentially classes with public default access. You can define methods inside 
                structures just like in classes.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What is structure padding and why does it happen?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Structure padding is when the compiler adds extra bytes between members to align data on memory boundaries for efficient access. 
                For example, a structure with char (1 byte) and int (4 bytes) might be 8 bytes total due to padding. This improves performance but 
                can waste memory. Use <code className="bg-gray-100 px-1 rounded">#pragma pack</code> to control padding, but be careful with portability.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: How do I initialize a structure array?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                You can initialize structure arrays using nested braces: <code className="bg-gray-100 px-1 rounded">Student arr[] = {{101, "John", 85.5}, {102, "Alice", 90.0}}</code>. 
                Each inner brace initializes one structure element. You can also initialize element by element using loops or individual assignment 
                statements after declaration.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What happens if I access the wrong member in a union?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Accessing a union member that wasn't the last one written to results in undefined behavior. The memory contains the bit pattern 
                from the last written member, which may not represent a valid value for the type you're reading. Always track which union member 
                is currently active, or use tagged unions (union with an enum indicating active member).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: Can I return a structure from a function?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, you can return structures by value from functions. Modern compilers optimize this using return value optimization (RVO) 
                or move semantics, avoiding unnecessary copies. For large structures, consider returning by reference or pointer, but be careful 
                about object lifetime. Returning by value is safe and often efficient due to compiler optimizations.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Structures and unions are essential tools in C++ for organizing and managing related data. Structures allow you to group different 
            data types together, creating meaningful abstractions that model real-world entities. Unions provide memory-efficient alternatives 
            when only one member needs to be active at a time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Understanding when to use structures versus unions, how to work with nested structures, and how to efficiently pass structures to 
            functions are important skills. Structures form the foundation for classes in C++, and many concepts you learn with structures directly 
            apply to object-oriented programming.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As you progress in C++, you'll find that structures are used extensively in system programming, data structures, and when interfacing 
            with C code. Mastery of structures and unions enables you to write more organized, maintainable, and efficient C++ programs.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/introduction" className="text-blue-600 hover:text-blue-700 underline">C++ Introduction</Link></li>
              <li><Link href="/notes/cpp-programming/arrays" className="text-blue-600 hover:text-blue-700 underline">C++ Arrays</Link></li>
              <li><Link href="/notes/cpp-programming/pointers" className="text-blue-600 hover:text-blue-700 underline">C++ Pointers</Link></li>
              <li><Link href="/notes/cpp-programming/oop" className="text-blue-600 hover:text-blue-700 underline">C++ Object-Oriented Programming</Link></li>
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



