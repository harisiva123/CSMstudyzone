import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arrays & Strings in C++ – C++ Programming Notes",
  description:
    "Learn about arrays, multidimensional arrays, strings, string manipulation functions, and string operations in C++.",
  keywords: ["C++ arrays", "multidimensional arrays", "C++ strings", "string manipulation", "string functions"],
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

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Arrays</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            An array is a collection of elements of the same data type stored in contiguous memory locations.
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
      </div>
    </main>
  );
}


