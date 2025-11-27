import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Templates in C++ – C++ Programming Notes",
  description:
    "Learn about function templates, class templates, template specialization, template parameters, and generic programming in C++.",
  keywords: ["C++ templates", "function templates", "class templates", "template specialization", "generic programming"],
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

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Templates allow you to write generic code that works with different data types. They enable 
            code reusability and type safety. C++ supports function templates and class templates.
          </p>
        </div>

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
      </div>
    </main>
  );
}


