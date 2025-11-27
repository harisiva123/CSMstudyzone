import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "STL Overview in C++ – C++ Programming Notes",
  description:
    "Learn about Standard Template Library (STL) in C++: containers (vector, list, map, set), iterators, algorithms, and STL functions.",
  keywords: ["C++ STL", "Standard Template Library", "STL containers", "STL algorithms", "iterators", "vector", "map"],
};

export default function STLPage() {
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
          STL Overview
        </h1>
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction to STL</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Standard Template Library (STL) is a powerful set of C++ template classes that provide 
            common data structures and algorithms. STL consists of three main components: containers, iterators, and algorithms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">STL Components</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Containers:</strong> Data structures that store objects</li>
            <li><strong>Iterators:</strong> Objects that point to elements in containers</li>
            <li><strong>Algorithms:</strong> Functions that operate on containers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Containers</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Sequence Containers</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Store elements in a linear sequence:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>vector:</strong> Dynamic array</li>
            <li><strong>list:</strong> Doubly linked list</li>
            <li><strong>deque:</strong> Double-ended queue</li>
            <li><strong>array:</strong> Fixed-size array (C++11)</li>
            <li><strong>forward_list:</strong> Singly linked list (C++11)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Associative Containers</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Store elements in sorted order:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>set:</strong> Unique elements, sorted</li>
            <li><strong>map:</strong> Key-value pairs, sorted by key</li>
            <li><strong>multiset:</strong> Allows duplicate elements</li>
            <li><strong>multimap:</strong> Allows duplicate keys</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Unordered Containers (C++11)</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Hash-based containers:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>unordered_set:</strong> Unique elements, hashed</li>
            <li><strong>unordered_map:</strong> Key-value pairs, hashed</li>
            <li><strong>unordered_multiset:</strong> Allows duplicates</li>
            <li><strong>unordered_multimap:</strong> Allows duplicate keys</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Vector</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Declaration
    vector<int> vec;
    
    // Adding elements
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    
    // Accessing elements
    cout << vec[0] << endl;        // 10
    cout << vec.at(1) << endl;     // 20
    cout << vec.front() << endl;   // 10
    cout << vec.back() << endl;    // 30
    
    // Size
    cout << vec.size() << endl;
    cout << vec.empty() << endl;
    
    // Iterating
    for (int i = 0; i < vec.size(); i++) {
        cout << vec[i] << " ";
    }
    cout << endl;
    
    // Using iterators
    for (auto it = vec.begin(); it != vec.end(); it++) {
        cout << *it << " ";
    }
    cout << endl;
    
    // Range-based for loop
    for (int element : vec) {
        cout << element << " ";
    }
    cout << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. List</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> myList;
    
    // Adding elements
    myList.push_back(10);
    myList.push_front(5);
    myList.push_back(20);
    
    // Iterating
    for (auto it = myList.begin(); it != myList.end(); it++) {
        cout << *it << " ";
    }
    cout << endl;
    
    // Removing elements
    myList.pop_front();
    myList.pop_back();
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Map</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> studentMarks;
    
    // Inserting elements
    studentMarks["Alice"] = 90;
    studentMarks["Bob"] = 85;
    studentMarks["Charlie"] = 95;
    
    // Accessing elements
    cout << studentMarks["Alice"] << endl;
    
    // Checking if key exists
    if (studentMarks.find("Bob") != studentMarks.end()) {
        cout << "Found!" << endl;
    }
    
    // Iterating
    for (auto it = studentMarks.begin(); it != studentMarks.end(); it++) {
        cout << it->first << ": " << it->second << endl;
    }
    
    // Using range-based for loop
    for (auto& pair : studentMarks) {
        cout << pair.first << ": " << pair.second << endl;
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Set</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> mySet;
    
    // Inserting elements
    mySet.insert(30);
    mySet.insert(10);
    mySet.insert(20);
    mySet.insert(10);  // Duplicate, ignored
    
    // Iterating (automatically sorted)
    for (int element : mySet) {
        cout << element << " ";  // 10 20 30
    }
    cout << endl;
    
    // Finding elements
    if (mySet.find(20) != mySet.end()) {
        cout << "Found!" << endl;
    }
    
    // Removing elements
    mySet.erase(20);
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Iterators</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Iterators provide a way to access elements in containers:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> vec = {10, 20, 30, 40, 50};
    
    // Iterator types
    vector<int>::iterator it;
    
    // begin() and end()
    for (it = vec.begin(); it != vec.end(); it++) {
        cout << *it << " ";
    }
    cout << endl;
    
    // Reverse iterators
    for (auto it = vec.rbegin(); it != vec.rend(); it++) {
        cout << *it << " ";
    }
    cout << endl;
    
    // Const iterators
    vector<int>::const_iterator cit;
    for (cit = vec.cbegin(); cit != vec.cend(); cit++) {
        cout << *cit << " ";
    }
    cout << endl;
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Algorithms</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            STL provides many algorithms in <code>&lt;algorithm&gt;</code> header:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> vec = {5, 2, 8, 1, 9, 3};
    
    // Sorting
    sort(vec.begin(), vec.end());
    
    // Reversing
    reverse(vec.begin(), vec.end());
    
    // Finding
    auto it = find(vec.begin(), vec.end(), 5);
    if (it != vec.end()) {
        cout << "Found at position: " << distance(vec.begin(), it) << endl;
    }
    
    // Counting
    int count = count(vec.begin(), vec.end(), 3);
    cout << "Count of 3: " << count << endl;
    
    // Maximum and minimum
    auto maxIt = max_element(vec.begin(), vec.end());
    auto minIt = min_element(vec.begin(), vec.end());
    cout << "Max: " << *maxIt << ", Min: " << *minIt << endl;
    
    // Accumulate (requires &lt;numeric&gt;)
    // int sum = accumulate(vec.begin(), vec.end(), 0);
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Common STL Algorithms</h2>
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
                  <td className="border border-gray-300 px-4 py-2">sort()</td>
                  <td className="border border-gray-300 px-4 py-2">Sorts elements</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">find()</td>
                  <td className="border border-gray-300 px-4 py-2">Finds element</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">count()</td>
                  <td className="border border-gray-300 px-4 py-2">Counts occurrences</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">reverse()</td>
                  <td className="border border-gray-300 px-4 py-2">Reverses sequence</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">max_element()</td>
                  <td className="border border-gray-300 px-4 py-2">Finds maximum</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">min_element()</td>
                  <td className="border border-gray-300 px-4 py-2">Finds minimum</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">binary_search()</td>
                  <td className="border border-gray-300 px-4 py-2">Binary search</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">transform()</td>
                  <td className="border border-gray-300 px-4 py-2">Applies function to elements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

