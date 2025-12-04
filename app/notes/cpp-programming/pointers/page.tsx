import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Pointers and Memory Management in C++ – Complete Guide | C++ Notes",
  description:
    "Comprehensive guide to pointers, references, dynamic memory allocation using new/delete, pointer arithmetic, smart pointers, and memory management in C++. Learn memory safety and efficient resource handling.",
  keywords: [
    "C++ pointers",
    "dynamic memory allocation",
    "new delete operators",
    "C++ references",
    "memory management",
    "smart pointers",
    "pointer arithmetic",
    "C++ memory",
    "unique_ptr",
    "shared_ptr"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/pointers",
  },
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

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            Pointers are one of the most powerful and fundamental features of C++. They provide direct access to memory addresses, enabling 
            efficient memory management, dynamic allocation, and low-level programming. Understanding pointers is essential for advanced C++ 
            programming, as they form the basis for dynamic data structures, efficient function parameter passing, and resource management. 
            While pointers can be challenging, mastering them unlocks the full potential of C++.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Introduction to Pointers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A pointer is a variable that stores the memory address of another variable. Pointers provide direct access to memory, enabling 
            efficient memory management and dynamic allocation. Unlike regular variables that store values, pointers store addresses, allowing 
            you to indirectly access and modify data.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pointers are crucial for several reasons: they enable dynamic memory allocation (creating variables at runtime), efficient parameter 
            passing (avoiding copying large objects), implementing data structures (linked lists, trees), and interfacing with hardware or 
            system APIs. However, they require careful management to avoid memory leaks, dangling pointers, and undefined behavior.
          </p>
        </section>

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
                  <td className="border border-gray-300 px-4 py-3">Basic Pointers</td>
                  <td className="border border-gray-300 px-4 py-3">Store memory addresses, use &amp; for address, * for dereference</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Pointer Arithmetic</td>
                  <td className="border border-gray-300 px-4 py-3">Increment/decrement moves by size of pointed type, useful for arrays</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Dynamic Memory</td>
                  <td className="border border-gray-300 px-4 py-3">new allocates, delete deallocates, must match new[] with delete[]</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">References</td>
                  <td className="border border-gray-300 px-4 py-3">Alias for variables, must be initialized, cannot be reassigned</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Smart Pointers</td>
                  <td className="border border-gray-300 px-4 py-3">unique_ptr, shared_ptr, weak_ptr for automatic memory management (C++11)</td>
                  <td className="border border-gray-300 px-4 py-3">Advanced</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Pointers vs References</td>
                  <td className="border border-gray-300 px-4 py-3">Pointers can be null/reassigned, references are aliases, prefer references when possible</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between a pointer and a reference?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pointers can be null, reassigned, and use * for dereferencing. References must be initialized, cannot be reassigned, and 
                are automatically dereferenced. References are safer (cannot be null) but less flexible. Use references for function 
                parameters when you don't need null or reassignment, use pointers when you need these features.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: What is a dangling pointer and how do I avoid it?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A dangling pointer points to memory that has been deallocated. This happens when you delete memory but still have a pointer 
                to it, or when a pointer points to a local variable that goes out of scope. Avoid by setting pointers to nullptr after delete, 
                ensuring pointers don't outlive the memory they point to, and using smart pointers which handle this automatically.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What is the difference between new/delete and malloc/free?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">new</code>/<code className="bg-gray-100 px-1 rounded">delete</code> are C++ operators that call constructors/destructors and are type-safe. 
                <code className="bg-gray-100 px-1 rounded">malloc</code>/<code className="bg-gray-100 px-1 rounded">free</code> are C functions that only allocate raw memory. Always use new/delete in C++ 
                for objects, as they properly initialize and clean up. Mixing them (new with free, malloc with delete) causes undefined behavior.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: When should I use smart pointers instead of raw pointers?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use smart pointers (unique_ptr, shared_ptr) for automatic memory management. They prevent memory leaks, handle exceptions 
                safely, and make ownership clear. Use unique_ptr for exclusive ownership, shared_ptr for shared ownership. Reserve raw 
                pointers for non-owning references, interfacing with C code, or performance-critical code where you manage memory manually.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What is pointer arithmetic and when is it useful?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pointer arithmetic allows adding/subtracting integers to pointers, moving by the size of the pointed type. Useful for 
                iterating through arrays, implementing algorithms, and working with contiguous memory. For example, <code className="bg-gray-100 px-1 rounded">ptr++</code> 
                moves to the next element, not just the next byte. Only valid for pointers to array elements.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: Can I have a pointer to a pointer? Why would I need it?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, you can have pointers to pointers (int **pptr). They're useful for: dynamic 2D arrays, modifying pointer values in 
                functions, arrays of pointers, and implementing data structures. Each level of indirection adds another layer of addressing. 
                Be careful with multiple levels as they can become confusing.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What happens if I forget to delete dynamically allocated memory?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Forgetting to delete causes a memory leak - memory is allocated but never freed, consuming system resources. In long-running 
                programs, this can exhaust available memory. Modern operating systems reclaim memory when programs exit, but it's still bad 
                practice. Use smart pointers or RAII (Resource Acquisition Is Initialization) to prevent leaks automatically.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: What is a null pointer and how do I check for it?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A null pointer doesn't point to any valid memory address. In C++11+, use <code className="bg-gray-100 px-1 rounded">nullptr</code> 
                (preferred) or <code className="bg-gray-100 px-1 rounded">NULL</code> (legacy). Check with <code className="bg-gray-100 px-1 rounded">if (ptr == nullptr)</code> 
                or <code className="bg-gray-100 px-1 rounded">if (!ptr)</code>. Always check pointers before dereferencing to avoid crashes. 
                References cannot be null, which is one advantage they have over pointers.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pointers are fundamental to C++ programming, providing direct memory access and enabling dynamic memory management. Understanding 
            pointers deeply is essential for advanced programming, implementing data structures, and writing efficient code. However, they require 
            careful management to avoid memory leaks, dangling pointers, and undefined behavior.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Modern C++ provides smart pointers (unique_ptr, shared_ptr) that automate memory management and make code safer. While learning raw 
            pointers is important for understanding how memory works, prefer smart pointers in production code for automatic resource management. 
            References provide a safer alternative to pointers when you don't need null values or reassignment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mastery of pointers, references, and memory management is crucial for becoming a proficient C++ programmer. These concepts form the 
            foundation for understanding more advanced topics like move semantics, RAII, and efficient resource management. Practice with pointers 
            helps develop a deep understanding of how programs interact with memory, which is valuable across all programming languages.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/introduction" className="text-blue-600 hover:text-blue-700 underline">C++ Introduction</Link></li>
              <li><Link href="/notes/cpp-programming/arrays" className="text-blue-600 hover:text-blue-700 underline">C++ Arrays</Link></li>
              <li><Link href="/notes/cpp-programming/functions" className="text-blue-600 hover:text-blue-700 underline">C++ Functions</Link></li>
              <li><Link href="/notes/cpp-programming/operators" className="text-blue-600 hover:text-blue-700 underline">C++ Operators</Link></li>
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



