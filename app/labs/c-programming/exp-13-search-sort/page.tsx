import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 13 – Search and Sort Algorithms (Linear, Binary, Bubble, Selection) | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment implementing search algorithms (linear, binary) and sorting algorithms (bubble, selection). Includes algorithms, flowcharts, code, complexity analysis, sample I/O, viva questions, and real-world applications.",
  keywords: [
    "C programming lab",
    "search algorithms",
    "sorting algorithms",
    "linear search",
    "binary search",
    "bubble sort",
    "selection sort",
    "C lab manual",
    "algorithm complexity"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-13-search-sort",
  },
};

export default function Exp13SearchSortPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link
          href="/labs/c-programming"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors text-sm sm:text-base"
        >
          <span>←</span> Back to Lab Home
        </Link>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
          Lab Exercise – 13
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 13 – Search and Sort Algorithms
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              To implement searching algorithms (linear search and binary search) and sorting algorithms (bubble sort and selection sort) in C programming. 
              Understand algorithm efficiency and time complexity. This experiment helps students learn fundamental algorithms, understand their 
              implementations, and analyze their performance characteristics.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to implement basic search and sort algorithms, understand when to use each algorithm, 
              analyze time and space complexity, and recognize the importance of algorithm efficiency in programming.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Learning Outcomes
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              After completing this experiment, students will be able to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Implement linear search algorithm for unsorted arrays</li>
              <li>Implement binary search algorithm for sorted arrays</li>
              <li>Implement bubble sort algorithm for array sorting</li>
              <li>Implement selection sort algorithm for array sorting</li>
              <li>Understand time complexity: O(n) for linear search, O(log n) for binary search, O(n²) for bubble/selection sort</li>
              <li>Compare algorithm efficiency and choose appropriate algorithm</li>
              <li>Understand the relationship between sorting and searching efficiency</li>
              <li>Analyze algorithm performance and optimization opportunities</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              Detailed algorithms for each operation:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Linear Search Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Start from first element (index 0)</li>
                <li>Compare each element with search key</li>
                <li>If match found, return index</li>
                <li>If end of array reached, return -1 (not found)</li>
                <li>Time Complexity: O(n), Space: O(1)</li>
              </ol>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Binary Search Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Requires sorted array</li>
                <li>Set left = 0, right = n-1</li>
                <li>While left &lt;= right: calculate mid = (left + right) / 2</li>
                <li>If arr[mid] == key, return mid</li>
                <li>If key &lt; arr[mid], search left half (right = mid - 1)</li>
                <li>If key &gt; arr[mid], search right half (left = mid + 1)</li>
                <li>If not found, return -1</li>
                <li>Time Complexity: O(log n), Space: O(1)</li>
              </ol>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bubble Sort Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>For each pass i from 0 to n-2</li>
                <li>Compare adjacent elements from 0 to n-i-2</li>
                <li>If arr[j] &gt; arr[j+1], swap them</li>
                <li>Largest element "bubbles" to end after each pass</li>
                <li>Repeat until no swaps in a pass</li>
                <li>Time Complexity: O(n²), Space: O(1)</li>
              </ol>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Selection Sort Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>For each position i from 0 to n-2</li>
                <li>Find minimum element in unsorted portion (from i to n-1)</li>
                <li>Swap minimum with element at position i</li>
                <li>Move boundary of sorted portion</li>
                <li>Time Complexity: O(n²), Space: O(1)</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdio.h</code> header file</li>
              <li>For Linear Search:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Traverse array from start to end</li>
                  <li>Compare each element with search key</li>
                  <li>Return index if found, -1 if not found</li>
                </ul>
              </li>
              <li>For Binary Search (requires sorted array):
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Compare key with middle element</li>
                  <li>If equal, return index</li>
                  <li>If key &lt; middle, search left half</li>
                  <li>If key &gt; middle, search right half</li>
                  <li>Repeat until found or search space exhausted</li>
                </ul>
              </li>
              <li>For Bubble Sort:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Compare adjacent elements</li>
                  <li>Swap if they are in wrong order</li>
                  <li>Repeat for all elements</li>
                  <li>Continue until no swaps needed</li>
                </ul>
              </li>
              <li>For Selection Sort:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Find minimum element in unsorted portion</li>
                  <li>Swap with first element of unsorted portion</li>
                  <li>Move boundary of sorted portion</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Flowchart
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap">
{`Linear Search:
  START
    ├─→ FOR i = 0 to n-1
    │   │
    │   ├─→ IF (arr[i] == key)
    │   │   │
    │   │   └─→ RETURN i
    │   │
    │   └─→ END FOR
    │
    └─→ RETURN -1

Binary Search:
  START
    ├─→ left = 0, right = n-1
    ├─→ WHILE (left <= right)
    │   │
    │   ├─→ mid = (left + right) / 2
    │   ├─→ IF (arr[mid] == key)
    │   │   │
    │   │   └─→ RETURN mid
    │   │
    │   ├─→ IF (key < arr[mid])
    │   │   │
    │   │   └─→ right = mid - 1
    │   │
    │   └─→ ELSE
    │       │
    │       └─→ left = mid + 1
    │
    └─→ RETURN -1

Bubble Sort:
  START
    ├─→ FOR i = 0 to n-2
    │   │
    │   ├─→ FOR j = 0 to n-i-2
    │   │   │
    │   │   ├─→ IF (arr[j] > arr[j+1])
    │   │   │   │
    │   │   │   └─→ SWAP arr[j] and arr[j+1]
    │   │   │
    │   │   └─→ END FOR j
    │   │
    │   └─→ END FOR i
    │
    └─→ END`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Program Code
          </h2>
          <div className="bg-gray-900 text-gray-100 p-4 sm:p-6 rounded-lg overflow-x-auto shadow-lg">
            <pre className="text-sm sm:text-base">
              <code>{`#include <stdio.h>

// Linear Search
int linearSearch(int arr[], int n, int key) {
    int i;
    for (i = 0; i < n; i++) {
        if (arr[i] == key) {
            return i;  // Return index if found
        }
    }
    return -1;  // Return -1 if not found
}

// Binary Search (requires sorted array)
int binarySearch(int arr[], int n, int key) {
    int left = 0, right = n - 1, mid;
    
    while (left <= right) {
        mid = (left + right) / 2;
        
        if (arr[mid] == key) {
            return mid;  // Found at index mid
        }
        
        if (key < arr[mid]) {
            right = mid - 1;  // Search left half
        } else {
            left = mid + 1;   // Search right half
        }
    }
    
    return -1;  // Not found
}

// Bubble Sort
void bubbleSort(int arr[], int n) {
    int i, j, temp;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Selection Sort
void selectionSort(int arr[], int n) {
    int i, j, min_idx, temp;
    
    for (i = 0; i < n - 1; i++) {
        min_idx = i;  // Assume first element is minimum
        
        // Find minimum element in unsorted portion
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        
        // Swap minimum with first element of unsorted portion
        if (min_idx != i) {
            temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
        }
    }
}

// Function to display array
void displayArray(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[100], n, i, key, choice, index;
    
    printf("Enter number of elements: ");
    scanf("%d", &n);
    
    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    printf("\\n1. Linear Search\\n");
    printf("2. Binary Search (array must be sorted)\\n");
    printf("3. Bubble Sort\\n");
    printf("4. Selection Sort\\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);
    
    switch(choice) {
        case 1:
            printf("Enter element to search: ");
            scanf("%d", &key);
            index = linearSearch(arr, n, key);
            if (index != -1) {
                printf("Element %d found at index %d\\n", key, index);
            } else {
                printf("Element %d not found in array.\\n", key);
            }
            break;
            
        case 2:
            // Sort array first for binary search
            bubbleSort(arr, n);
            printf("Array sorted for binary search: ");
            displayArray(arr, n);
            
            printf("Enter element to search: ");
            scanf("%d", &key);
            index = binarySearch(arr, n, key);
            if (index != -1) {
                printf("Element %d found at index %d\\n", key, index);
            } else {
                printf("Element %d not found in array.\\n", key);
            }
            break;
            
        case 3:
            printf("Original array: ");
            displayArray(arr, n);
            bubbleSort(arr, n);
            printf("Sorted array (Bubble Sort): ");
            displayArray(arr, n);
            break;
            
        case 4:
            printf("Original array: ");
            displayArray(arr, n);
            selectionSort(arr, n);
            printf("Sorted array (Selection Sort): ");
            displayArray(arr, n);
            break;
            
        default:
            printf("Invalid choice!\\n");
    }
    
    return 0;
}`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Sample Input and Output
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 1: Linear Search</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter number of elements: 5
Enter 5 elements:
10 20 30 40 50
1. Linear Search
2. Binary Search (array must be sorted)
3. Bubble Sort
4. Selection Sort
Enter your choice: 1
Enter element to search: 30`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Element 30 found at index 2</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2: Bubble Sort</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter number of elements: 6
Enter 6 elements:
64 34 25 12 22 11
1. Linear Search
2. Binary Search (array must be sorted)
3. Bubble Sort
4. Selection Sort
Enter your choice: 3`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Original array: 64 34 25 12 22 11 
Sorted array (Bubble Sort): 11 12 22 25 34 64`}</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 3: Binary Search</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter number of elements: 7
Enter 7 elements:
45 12 78 34 56 23 67
1. Linear Search
2. Binary Search (array must be sorted)
3. Bubble Sort
4. Selection Sort
Enter your choice: 2
Enter element to search: 56`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Array sorted for binary search: 12 23 34 45 56 67 78 
Element 56 found at index 4`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Use Case / Real-world Relevance
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              Search and sort algorithms are fundamental to computer science and are used everywhere:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Database Systems:</strong> Indexing, querying, and sorting records efficiently</li>
              <li><strong>Search Engines:</strong> Finding and ranking search results</li>
              <li><strong>E-commerce:</strong> Sorting products by price, rating, popularity</li>
              <li><strong>Operating Systems:</strong> Process scheduling, file system organization</li>
              <li><strong>Data Analysis:</strong> Organizing and searching through large datasets</li>
              <li><strong>Gaming:</strong> Leaderboards, inventory sorting, search functionality</li>
              <li><strong>Social Media:</strong> Sorting posts by date, relevance, popularity</li>
              <li><strong>Financial Systems:</strong> Transaction sorting, account lookups</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding algorithm complexity (time and space) is crucial for writing efficient code. Linear search is O(n), binary search is O(log n), 
              while bubble and selection sorts are O(n²). Choosing the right algorithm for the right situation is a key programming skill. These fundamental 
              algorithms form the basis for understanding more advanced algorithms and data structures used in professional software development.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the time complexity of linear search and when should we use it?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Linear search has O(n) time complexity in worst case (must check all elements). Use it for unsorted arrays or when array is small. 
                Advantages: simple, works on unsorted data, no preprocessing needed. Disadvantages: slow for large arrays. For sorted arrays, binary 
                search is much faster (O(log n)).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Why does binary search require a sorted array?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Binary search uses the sorted property to eliminate half of the search space at each step. By comparing with middle element, we 
                know which half contains the key (if key &lt; middle, it's in left half; if key &gt; middle, it's in right half). This wouldn't work 
                with unsorted data. Sorting takes O(n log n) time, so binary search is only beneficial if you search multiple times.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What is the difference between bubble sort and selection sort?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Bubble sort compares adjacent elements and swaps if out of order, "bubbling" largest to end. Selection sort finds minimum in unsorted 
                portion and swaps with first unsorted element. Both are O(n²), but selection sort typically makes fewer swaps (O(n) swaps vs O(n²) 
                swaps). Bubble sort can be optimized to detect if array is already sorted and stop early.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: Can we improve bubble sort efficiency?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, add a flag to detect if any swaps occurred in a pass. If no swaps, array is sorted, stop early. This gives O(n) best case 
                (already sorted) instead of always O(n²). However, worst and average cases remain O(n²). For better performance, use quicksort 
                (O(n log n) average) or mergesort (O(n log n) worst case).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What is stable sorting and are bubble/selection sorts stable?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Stable sort maintains relative order of equal elements. Bubble sort is stable (only swaps adjacent elements when out of order). 
                Selection sort is not stable (swapping minimum with first unsorted can change order of equal elements). Stability matters when sorting 
                by multiple criteria (e.g., sort by name, then by age - stable sort preserves name order for same ages).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: When would you choose linear search over binary search?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Choose linear search when: array is unsorted and sorting isn't worth it (small array, single search), array is small (overhead of 
                binary search not worth it), data structure doesn't support random access (linked list). For large sorted arrays with multiple searches, 
                binary search is much better. Rule of thumb: if searching once on unsorted data, use linear; if searching multiple times, sort first 
                then use binary.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What is the space complexity of these algorithms?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                All algorithms have O(1) space complexity (constant extra space): linear search uses few variables, binary search uses left/right/mid 
                variables, bubble and selection sorts use temp variable for swapping. They sort in-place without requiring additional arrays. This is 
                efficient memory-wise, though time complexity varies significantly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: How would you modify binary search to find first/last occurrence of duplicate elements?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                For first occurrence: when arr[mid] == key, don't return immediately. Check if mid-1 also equals key. If yes, search left half 
                (right = mid - 1). For last occurrence: when arr[mid] == key, check if mid+1 equals key. If yes, search right half (left = mid + 1). 
                Continue until you find the boundary where key starts/ends.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/programming/c-language" className="text-blue-600 hover:text-blue-700 underline">C Language Basics</Link></li>
              <li><Link href="/programming/c-language/full-notes" className="text-blue-600 hover:text-blue-700 underline">Full C Language Notes</Link></li>
              <li><Link href="/labs/c-programming/exp-12-file-student-records" className="text-blue-600 hover:text-blue-700 underline">Experiment 12: File Operations</Link></li>
              <li><Link href="/labs/c-programming/exp-14-dynamic-memory" className="text-blue-600 hover:text-blue-700 underline">Experiment 14: Dynamic Memory</Link></li>
              <li><Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 underline">Important C Programs</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-12-file-student-records"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 12
        </Link>
        <Link
          href="/labs/c-programming/exp-14-dynamic-memory"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 14
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}


