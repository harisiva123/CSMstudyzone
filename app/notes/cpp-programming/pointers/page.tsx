import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pointers & Memory in C++ – C++ Programming Notes",
  description:
    "Learn about pointers, references, dynamic memory allocation, new and delete operators, pointer arithmetic, and memory management in C++.",
  keywords: ["C++ pointers", "dynamic memory", "new delete", "references", "memory management", "C++ memory"],
};

export default function PointersPage() {
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
          Pointers & Memory
        </h1>
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A pointer is a variable that stores the memory address of another variable. 
            Pointers provide direct access to memory, enabling efficient memory management and dynamic allocation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Basic Pointer Operations</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Declaration and Initialization</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int num = 10;
    int *ptr;        // Pointer declaration
    ptr = &num;      // Store address of num
    
    cout << "Value of num: " << num << endl;
    cout << "Address of num: " << &num << endl;
    cout << "Value of ptr: " << ptr << endl;
    cout << "Value pointed by ptr: " << *ptr << endl;
    
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Pointer Operators</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>& (Address of):</strong> Returns the address of a variable</li>
            <li><strong>* (Dereference):</strong> Returns the value at the address stored in pointer</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Pointer Arithmetic</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Pointers can be incremented, decremented, and used in arithmetic operations:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;  // Points to first element
    
    cout << *ptr << endl;      // 10
    ptr++;                      // Move to next element
    cout << *ptr << endl;      // 20
    ptr += 2;                   // Move 2 elements ahead
    cout << *ptr << endl;      // 40
    
    // Traverse array using pointer
    ptr = arr;
    for (int i = 0; i < 5; i++) {
        cout << *(ptr + i) << " ";
    }
    cout << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Pointers and Arrays</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = arr;
    
    // Array name is a pointer to first element
    cout << "arr = " << arr << endl;
    cout << "&arr[0] = " << &arr[0] << endl;
    cout << "ptr = " << ptr << endl;
    
    // Accessing elements
    cout << arr[2] << endl;      // 3
    cout << *(arr + 2) << endl;  // 3
    cout << ptr[2] << endl;      // 3
    cout << *(ptr + 2) << endl;  // 3
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Pointers to Pointers</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int num = 10;
    int *ptr = &num;
    int **pptr = &ptr;  // Pointer to pointer
    
    cout << "num = " << num << endl;
    cout << "*ptr = " << *ptr << endl;
    cout << "**pptr = " << **pptr << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Dynamic Memory Allocation</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            C++ provides <code>new</code> and <code>delete</code> operators for dynamic memory management:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Single Variable</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int *ptr = new int;  // Allocate memory
    *ptr = 100;
    
    cout << "Value: " << *ptr << endl;
    
    delete ptr;  // Deallocate memory
    ptr = nullptr;  // Good practice
    
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Array</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter size: ";
    cin >> size;
    
    int *arr = new int[size];  // Dynamic array
    
    for (int i = 0; i < size; i++) {
        arr[i] = i * 10;
    }
    
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    delete[] arr;  // Deallocate array
    arr = nullptr;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. References</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            A reference is an alias for an existing variable. Unlike pointers, references cannot be reassigned:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int num = 10;
    int &ref = num;  // Reference to num
    
    cout << "num = " << num << endl;
    cout << "ref = " << ref << endl;
    
    ref = 20;  // Changes num
    cout << "After ref = 20:" << endl;
    cout << "num = " << num << endl;
    cout << "ref = " << ref << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Pointers vs References</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Pointer</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Declaration</td>
                  <td className="border border-gray-300 px-4 py-2">int *ptr;</td>
                  <td className="border border-gray-300 px-4 py-2">int &ref = var;</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Reassignment</td>
                  <td className="border border-gray-300 px-4 py-2">Yes</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Null value</td>
                  <td className="border border-gray-300 px-4 py-2">Can be null</td>
                  <td className="border border-gray-300 px-4 py-2">Cannot be null</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Arithmetic</td>
                  <td className="border border-gray-300 px-4 py-2">Yes</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Memory</td>
                  <td className="border border-gray-300 px-4 py-2">Takes memory</td>
                  <td className="border border-gray-300 px-4 py-2">No extra memory</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Function Pointers</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}

int main() {
    int (*funcPtr)(int, int);  // Function pointer
    
    funcPtr = add;
    cout << "Add: " << funcPtr(5, 3) << endl;
    
    funcPtr = multiply;
    cout << "Multiply: " << funcPtr(5, 3) << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Smart Pointers (C++11)</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Modern C++ provides smart pointers for automatic memory management:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>unique_ptr:</strong> Exclusive ownership, automatically deleted</li>
            <li><strong>shared_ptr:</strong> Shared ownership, reference counted</li>
            <li><strong>weak_ptr:</strong> Non-owning reference to shared_ptr</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg mt-3">
            <code>{`#include <iostream>
#include <memory>
using namespace std;

int main() {
    // unique_ptr - automatically deleted
    unique_ptr<int> ptr(new int(10));
    cout << *ptr << endl;
    // Memory automatically freed when ptr goes out of scope
    
    // shared_ptr - reference counted
    shared_ptr<int> sptr1 = make_shared<int>(20);
    shared_ptr<int> sptr2 = sptr1;  // Both point to same memory
    cout << *sptr1 << endl;
    // Memory freed when last shared_ptr is destroyed
    
    return 0;
}`}</code></pre>
        </div>
      </div>
    </main>
  );
}

