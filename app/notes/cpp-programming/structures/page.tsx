import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Structures & Unions in C++ – C++ Programming Notes",
  description:
    "Learn about structures, unions, nested structures, typedef, and how to use them in C++ programming.",
  keywords: ["C++ structures", "unions", "nested structures", "typedef", "C++ data structures"],
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

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Structures</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A structure is a user-defined data type that groups related data items of different types under a single name.
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
      </div>
    </main>
  );
}

