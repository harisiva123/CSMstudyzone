import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Arrays and Strings in C++ – Complete Guide with Examples | C++ Notes",
  description:
    "Comprehensive guide to arrays and strings in C++ programming. Learn array declaration, initialization, multidimensional arrays, C-style strings, C++ string class, and string manipulation functions with practical examples.",
  keywords: [
    "C++ arrays",
    "C++ strings",
    "multidimensional arrays",
    "string manipulation",
    "string class",
    "array operations",
    "C++ programming",
    "string functions",
    "character arrays",
    "C++ data structures"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/arrays",
  },
};

export default function ArraysPage() {
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
          Arrays & Strings
        </h1>
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            Arrays and strings are fundamental data structures in C++ that allow you to store and manipulate collections of data. 
            Understanding how to work with arrays and strings is essential for any C++ programmer, as they form the foundation for 
            more complex data structures and algorithms. This comprehensive guide covers everything from basic array operations to 
            advanced string manipulation techniques.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        {/* Arrays Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">1. Understanding Arrays</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            An array is a collection of elements of the same data type stored in contiguous memory locations. Arrays provide 
            an efficient way to store multiple values of the same type under a single variable name. Each element in an array 
            can be accessed using an index, which starts from 0 in C++.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Arrays are particularly useful when you need to work with a fixed number of elements of the same type. For example, 
            storing scores of 50 students, temperatures for 7 days of the week, or coordinates for a 3D point. The contiguous 
            memory allocation makes arrays very efficient for iteration and random access operations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            One important characteristic of arrays in C++ is that their size must be known at compile time (for static arrays). 
            This means you cannot resize an array after it's been declared. However, C++ also provides dynamic arrays and the 
            Standard Template Library (STL) containers like <code className="bg-gray-100 px-1.5 py-0.5 rounded">vector</code> for 
            more flexible array-like structures.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Declaration and Initialization</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    // Declaration
    int arr[5];
    
    // Initialization
    int arr1[5] = {1, 2, 3, 4, 5};
    int arr2[] = {10, 20, 30};  // Size determined automatically
    int arr3[5] = {1, 2};  // Remaining elements are 0
    
    // Accessing elements
    cout << arr1[0] << endl;  // First element
    cout << arr1[4] << endl;  // Last element
    
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Array Operations</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    
    // Traversing array
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    // Finding sum
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += arr[i];
    }
    cout << "Sum: " << sum << endl;
    
    // Finding maximum
    int max = arr[0];
    for (int i = 1; i < 5; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    cout << "Maximum: " << max << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Multidimensional Arrays</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2D Arrays</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    // Accessing elements
    cout << matrix[0][0] << endl;  // 1
    cout << matrix[2][2] << endl;  // 9
    
    // Traversing 2D array
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}`}</code></pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3D Arrays</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

int main() {
    int arr[2][3][4];  // 2 pages, 3 rows, 4 columns
    
    // Initialization
    int value = 1;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            for (int k = 0; k < 4; k++) {
                arr[i][j][k] = value++;
            }
        }
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Arrays and Functions</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
using namespace std;

// Passing array to function
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Modifying array in function
void doubleArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;
    }
}

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    printArray(arr, 5);
    doubleArray(arr, 5);
    printArray(arr, 5);
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. C-style Strings</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Character arrays terminated by null character ('\0'):
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <cstring>
using namespace std;

int main() {
    // Declaration
    char str1[20] = "Hello";
    char str2[] = "World";
    char str3[10];
    
    // Input
    cin >> str3;  // Reads until whitespace
    cin.getline(str3, 10);  // Reads entire line
    
    // String functions
    cout << strlen(str1) << endl;  // Length: 5
    strcpy(str3, str1);  // Copy
    strcat(str1, str2);  // Concatenate
    cout << strcmp(str1, str2) << endl;  // Compare
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. C++ String Class</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The <code>string</code> class provides better string handling:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    // Declaration and initialization
    string str1 = "Hello";
    string str2("World");
    string str3;
    
    // Input
    cin >> str3;  // Single word
    getline(cin, str3);  // Entire line
    
    // String operations
    cout << str1.length() << endl;  // Length
    cout << str1.size() << endl;    // Same as length()
    
    // Concatenation
    string result = str1 + " " + str2;
    cout << result << endl;
    
    // Comparison
    if (str1 == str2) {
        cout << "Equal" << endl;
    }
    
    // Accessing characters
    cout << str1[0] << endl;  // 'H'
    cout << str1.at(0) << endl;  // 'H'
    
    // Substring
    string sub = str1.substr(0, 3);  // "Hel"
    
    // Find
    int pos = str1.find("ell");  // Returns position or -1
    
    // Replace
    str1.replace(0, 2, "Hi");  // Replace 2 chars from position 0
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. String Functions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Function</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">length() / size()</td>
                  <td className="border border-gray-300 px-4 py-2">Returns string length</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">empty()</td>
                  <td className="border border-gray-300 px-4 py-2">Checks if string is empty</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">append()</td>
                  <td className="border border-gray-300 px-4 py-2">Appends string</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">insert()</td>
                  <td className="border border-gray-300 px-4 py-2">Inserts string at position</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">erase()</td>
                  <td className="border border-gray-300 px-4 py-2">Removes characters</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">replace()</td>
                  <td className="border border-gray-300 px-4 py-2">Replaces substring</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">find()</td>
                  <td className="border border-gray-300 px-4 py-2">Finds substring</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">substr()</td>
                  <td className="border border-gray-300 px-4 py-2">Extracts substring</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">compare()</td>
                  <td className="border border-gray-300 px-4 py-2">Compares strings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Array of Strings</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    // Array of strings
    string names[3] = {"Alice", "Bob", "Charlie"};
    
    for (int i = 0; i < 3; i++) {
        cout << names[i] << endl;
    }
    
    // 2D array of characters (C-style)
    char words[3][20] = {"Hello", "World", "C++"};
    
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
                  <td className="border border-gray-300 px-4 py-3">Arrays</td>
                  <td className="border border-gray-300 px-4 py-3">Collection of same-type elements in contiguous memory, indexed access</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Multidimensional Arrays</td>
                  <td className="border border-gray-300 px-4 py-3">Arrays of arrays (2D, 3D), useful for matrices and tables</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">C-style Strings</td>
                  <td className="border border-gray-300 px-4 py-3">Character arrays terminated by null character, use cstring functions</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">C++ String Class</td>
                  <td className="border border-gray-300 px-4 py-3">Object-oriented string handling, dynamic sizing, rich member functions</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">String Functions</td>
                  <td className="border border-gray-300 px-4 py-3">length(), substr(), find(), replace(), compare(), etc.</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Arrays and Functions</td>
                  <td className="border border-gray-300 px-4 py-3">Passing arrays to functions, arrays are passed by reference</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between C-style strings and C++ string class?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                C-style strings are character arrays terminated by null character ('\0'), requiring manual memory management and 
                functions from cstring header. C++ string class is an object-oriented approach with automatic memory management, 
                dynamic sizing, and rich member functions. String class is safer and easier to use.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Can I change the size of an array after declaration?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No, static arrays have a fixed size that cannot be changed after declaration. If you need a resizable array, use 
                dynamic arrays with pointers and new/delete, or better yet, use the STL vector class which provides dynamic sizing 
                and automatic memory management.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What happens if I access an array element beyond its bounds?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Accessing array elements beyond bounds leads to undefined behavior. It may read garbage values, corrupt memory, or 
                cause program crashes. C++ doesn't perform bounds checking for arrays, so you must ensure valid indices. Use the 
                string class's at() method which throws exceptions for invalid indices.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: How do I pass a 2D array to a function?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                When passing a 2D array, you must specify at least the column size in the function parameter. For example: 
                <code className="bg-gray-100 px-1 rounded">void func(int arr[][3], int rows)</code>. Alternatively, you can pass 
                it as a pointer to pointer or use STL vector of vectors for more flexibility.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What is the difference between strlen() and string.length()?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">strlen()</code> is a C function that counts characters until null terminator in C-style strings. 
                <code className="bg-gray-100 px-1 rounded">string.length()</code> is a C++ string class method that returns the number of characters stored. 
                Both return the same value, but length() is type-safe and part of the string object.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: Can I use the + operator to concatenate C-style strings?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No, you cannot use + operator with C-style strings (character arrays). You must use <code className="bg-gray-100 px-1 rounded">strcat()</code> 
                function from cstring header. The + operator works only with C++ string class objects, which is one reason why 
                string class is preferred in modern C++.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: How are arrays stored in memory?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Arrays are stored in contiguous memory locations. For a 1D array, elements are stored sequentially. For a 2D array, 
                elements are stored row-wise (row-major order). This contiguous storage makes arrays cache-friendly and efficient for 
                iteration, but requires knowing the size in advance.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: When should I use arrays vs vectors?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use arrays when size is fixed and known at compile time, and you need maximum performance. Use vectors when size 
                may change, you need dynamic allocation, or you want automatic memory management. In modern C++, vectors are generally 
                preferred unless you have specific performance requirements or are working with legacy code.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Arrays and strings are fundamental building blocks in C++ programming that every developer must master. Arrays provide 
            efficient storage and access for collections of data, while strings enable text manipulation and processing. Understanding 
            both C-style strings and the C++ string class gives you flexibility to work with different codebases and choose the right 
            tool for each situation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The concepts covered in this guide—from basic array operations to advanced string manipulation—form the foundation for 
            more complex data structures and algorithms. Whether you're working with simple lists of numbers or processing complex text 
            data, the skills you've learned here will be invaluable throughout your programming career.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As you continue learning C++, remember that while arrays are powerful, the Standard Template Library (STL) provides 
            containers like vector, list, and string that offer more safety and convenience. However, understanding arrays deeply 
            helps you appreciate these higher-level abstractions and use them more effectively.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/introduction" className="text-blue-600 hover:text-blue-700 underline">C++ Introduction</Link></li>
              <li><Link href="/notes/cpp-programming/pointers" className="text-blue-600 hover:text-blue-700 underline">C++ Pointers</Link></li>
              <li><Link href="/notes/cpp-programming/functions" className="text-blue-600 hover:text-blue-700 underline">C++ Functions</Link></li>
              <li><Link href="/notes/cpp-programming/stl" className="text-blue-600 hover:text-blue-700 underline">C++ STL (Standard Template Library)</Link></li>
              <li><Link href="/notes/cpp-programming/control-structures" className="text-blue-600 hover:text-blue-700 underline">C++ Control Structures</Link></li>
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



