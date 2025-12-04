import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Standard Template Library (STL) in C++ – Complete Guide | C++ Notes",
  description:
    "Comprehensive guide to C++ STL covering containers (vector, list, map, set, deque), iterators, algorithms (sort, find, transform), container adapters, and practical examples for efficient programming.",
  keywords: [
    "C++ STL",
    "Standard Template Library",
    "STL containers",
    "STL algorithms",
    "iterators",
    "vector map set",
    "C++ containers",
    "STL programming"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/stl",
  },
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

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            The Standard Template Library (STL) is one of C++'s greatest strengths, providing a comprehensive collection of efficient, well-tested 
            data structures and algorithms. Instead of implementing common data structures from scratch, STL provides ready-to-use containers like 
            vectors, lists, maps, and sets, along with powerful algorithms that work with them. This library is used in virtually every C++ program 
            and is essential for productive C++ development.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Introduction to Standard Template Library</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Standard Template Library (STL) is a powerful set of C++ template classes that provide common data structures and algorithms. STL 
            consists of three main components: containers, iterators, and algorithms. Containers store data, iterators provide access to container 
            elements, and algorithms operate on data through iterators.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            STL containers are template classes that can store any type of data. They handle memory management automatically, provide efficient 
            operations, and are thoroughly tested and optimized. Algorithms are template functions that work with iterators, making them work with 
            any container that provides appropriate iterators.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Understanding STL is crucial for modern C++ programming. It eliminates the need to implement common data structures and algorithms, 
            reduces bugs, and provides highly optimized code. Most C++ programs use STL extensively, making it essential knowledge for any C++ 
            programmer.
          </p>
        </section>

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
                  <td className="border border-gray-300 px-4 py-3">Sequence Containers</td>
                  <td className="border border-gray-300 px-4 py-3">vector (dynamic array), list (doubly linked), deque (double-ended queue), array (fixed-size)</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Associative Containers</td>
                  <td className="border border-gray-300 px-4 py-3">set/map (sorted, unique), multiset/multimap (sorted, allows duplicates), O(log n) operations</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Unordered Containers</td>
                  <td className="border border-gray-300 px-4 py-3">unordered_set/map (hashed), O(1) average, O(n) worst case, C++11 feature</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Iterators</td>
                  <td className="border border-gray-300 px-4 py-3">Pointers to container elements, begin()/end(), forward/reverse/const iterators, enable algorithms</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">STL Algorithms</td>
                  <td className="border border-gray-300 px-4 py-3">sort, find, count, reverse, transform, etc., work with iterators, highly optimized</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Container Adapters</td>
                  <td className="border border-gray-300 px-4 py-3">stack, queue, priority_queue, provide specific interface using underlying container</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: When should I use vector vs list vs deque?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use <code className="bg-gray-100 px-1 rounded">vector</code> for random access, frequent access by index, when size changes moderately. 
                Use <code className="bg-gray-100 px-1 rounded">list</code> for frequent insertions/deletions in middle, when you don't need random access. 
                Use <code className="bg-gray-100 px-1 rounded">deque</code> for frequent insertions/deletions at both ends. Vector is most commonly used 
                (best general-purpose container), list for specific needs (splicing, stable iterators), deque for double-ended operations.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: What is the difference between map and unordered_map?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">map</code> is sorted by key (red-black tree), O(log n) operations, maintains order, requires 
                comparable keys. <code className="bg-gray-100 px-1 rounded">unordered_map</code> is hashed, O(1) average operations, no order, requires 
                hashable keys. Use map when you need sorted order or range queries, unordered_map when you need fast lookups and don't care about order. 
                unordered_map is generally faster for lookups.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: How do iterators work and why are they important?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Iterators are objects that point to container elements, providing a uniform interface to access different containers. They enable algorithms 
                to work with any container without knowing its internal structure. Iterators support operations like ++, --, *, ==, !=. begin() points to 
                first element, end() points past last element. Algorithms use iterators to work generically with containers.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: Can I use STL algorithms with arrays?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, STL algorithms work with any iterator range, including pointers. For C-style arrays: <code className="bg-gray-100 px-1 rounded">sort(arr, arr + n)</code> 
                where arr is array and n is size. Pointers are valid iterators. For std::array: <code className="bg-gray-100 px-1 rounded">sort(arr.begin(), arr.end())</code>. 
                Algorithms are container-agnostic - they work with any iterator range, making them very flexible.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What happens when vector needs to grow beyond its capacity?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                When vector size exceeds capacity, it allocates new larger memory (typically doubles capacity), copies/moves all elements to new memory, 
                deletes old memory. This is expensive (O(n)) but amortized O(1) per insertion. Iterators/pointers to elements become invalid after reallocation. 
                Use <code className="bg-gray-100 px-1 rounded">reserve()</code> to pre-allocate if you know approximate size to avoid reallocations.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: What is the difference between set and multiset?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">set</code> stores unique elements only (duplicates ignored), sorted order. 
                <code className="bg-gray-100 px-1 rounded">multiset</code> allows duplicate elements, also sorted. Both are O(log n) for insert/find/erase. 
                Use set when uniqueness is required, multiset when you need to count occurrences or allow duplicates. Both maintain sorted order automatically.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: How do I choose the right container for my needs?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Consider: need for random access? (vector/deque) Frequent insertions in middle? (list) Need sorted order? (set/map) Fast lookups? 
                (unordered_set/map) Key-value pairs? (map/unordered_map) Unique elements? (set vs multiset). Default choice: vector for sequences, 
                map for key-value, set for unique sorted elements. Profile if performance is critical - theoretical complexity doesn't always match 
                real-world performance.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: What are container adapters and how do they differ from containers?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Container adapters (stack, queue, priority_queue) provide specific interfaces using underlying containers. They're not containers themselves 
                but adapt containers to provide stack/queue behavior. stack uses deque by default, queue uses deque, priority_queue uses vector. You can 
                specify underlying container. They provide restricted interfaces (LIFO for stack, FIFO for queue) for specific use cases.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Standard Template Library is an essential part of modern C++ programming, providing efficient, well-tested data structures and algorithms 
            that eliminate the need to implement common functionality from scratch. Understanding STL containers, iterators, and algorithms enables you to 
            write code that's both efficient and maintainable.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Choosing the right container for your needs is crucial for performance. Sequence containers (vector, list, deque) provide different trade-offs for 
            access patterns, while associative containers (set, map) provide sorted storage, and unordered containers provide fast hash-based access. 
            Understanding their characteristics helps you make informed decisions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            STL algorithms work seamlessly with containers through iterators, providing powerful operations like sorting, searching, and transforming data. 
            Mastery of STL is essential for productive C++ programming - it's used in virtually every C++ program and is a key reason why C++ is so powerful 
            and efficient for a wide range of applications.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/templates" className="text-blue-600 hover:text-blue-700 underline">C++ Templates</Link></li>
              <li><Link href="/notes/cpp-programming/arrays" className="text-blue-600 hover:text-blue-700 underline">C++ Arrays</Link></li>
              <li><Link href="/notes/cpp-programming/pointers" className="text-blue-600 hover:text-blue-700 underline">C++ Pointers</Link></li>
              <li><Link href="/notes/cpp-programming/functions" className="text-blue-600 hover:text-blue-700 underline">C++ Functions</Link></li>
              <li><Link href="/notes/cpp-programming/introduction" className="text-blue-600 hover:text-blue-700 underline">C++ Introduction</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
      </div>
    </main>
  );
}



