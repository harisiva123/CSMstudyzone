import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 10 – Array Reverse Using Pointers | C Programming Lab",
  description:
    "Reverse an array using pointer arithmetic in C programming. Learn pointers, address manipulation, and array operations with pointers.",
  keywords: ["C programming", "pointers", "array reverse", "pointer arithmetic", "C lab"],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-10-array-reverse-pointer",
  },
};

export default function Exp10ArrayReversePointerPage() {
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
          Lab Exercise – 10
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 10 – Array Reverse Using Pointers
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To reverse the elements of an array using pointers and pointer arithmetic in C programming. Learn how to manipulate array elements through pointers and swap values using pointer dereferencing.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdio.h</code> header file</li>
              <li>Declare an array and pointer variables</li>
              <li>Read array size and elements</li>
              <li>Initialize two pointers:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li><code className="bg-gray-100 px-1.5 py-0.5 rounded">start</code> pointing to first element (arr or &arr[0])</li>
                  <li><code className="bg-gray-100 px-1.5 py-0.5 rounded">end</code> pointing to last element (&arr[n-1])</li>
                </ul>
              </li>
              <li>Swap elements using pointers:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Use temporary variable to swap *start and *end</li>
                  <li>Increment start pointer</li>
                  <li>Decrement end pointer</li>
                  <li>Continue until start &gt;= end</li>
                </ul>
              </li>
              <li>Display the reversed array</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Flowchart
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap">
{`START
  │
  ├─→ Declare: arr[], n, *start, *end, temp
  │
  ├─→ Read n
  ├─→ Read array elements
  │
  ├─→ start = arr (or &arr[0])
  ├─→ end = arr + n - 1 (or &arr[n-1])
  │
  ├─→ WHILE (start < end)
  │   │
  │   ├─→ temp = *start
  │   ├─→ *start = *end
  │   ├─→ *end = temp
  │   ├─→ start++
  │   └─→ end--
  │
  ├─→ Display reversed array
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

// Function to reverse array using pointers
void reverseArray(int *arr, int n) {
    int *start = arr;           // Pointer to first element
    int *end = arr + n - 1;     // Pointer to last element
    int temp;
    
    // Swap elements until pointers meet
    while (start < end) {
        // Swap values at start and end pointers
        temp = *start;
        *start = *end;
        *end = temp;
        
        // Move pointers towards center
        start++;
        end--;
    }
}

int main() {
    int arr[100], n, i;
    int *ptr;
    
    // Input array size
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    // Input array elements
    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++) {
        printf("Element %d: ", i + 1);
        scanf("%d", &arr[i]);
    }
    
    // Display original array
    printf("\\nOriginal array: ");
    ptr = arr;  // Pointer points to first element
    for (i = 0; i < n; i++) {
        printf("%d ", *(ptr + i));  // Using pointer arithmetic
    }
    printf("\\n");
    
    // Reverse array using pointers
    reverseArray(arr, n);
    
    // Display reversed array
    printf("Reversed array: ");
    ptr = arr;
    for (i = 0; i < n; i++) {
        printf("%d ", *(ptr + i));
    }
    printf("\\n");
    
    return 0;
}

// Alternative: Using array notation with pointers
/*
void reverseArray(int arr[], int n) {
    int *start = &arr[0];
    int *end = &arr[n-1];
    int temp;
    
    while (start < end) {
        temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }
}
*/`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Sample Input and Output
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 1:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter the number of elements: 5
Enter 5 elements:
Element 1: 10
Element 2: 20
Element 3: 30
Element 4: 40
Element 5: 50`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Original array: 10 20 30 40 50 
Reversed array: 50 40 30 20 10`}</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter the number of elements: 7
Enter 7 elements:
Element 1: 1
Element 2: 2
Element 3: 3
Element 4: 4
Element 5: 5
Element 6: 6
Element 7: 7`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Original array: 1 2 3 4 5 6 7 
Reversed array: 7 6 5 4 3 2 1`}</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 3:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter the number of elements: 4
Enter 4 elements:
Element 1: 15
Element 2: 25
Element 3: 35
Element 4: 45`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Original array: 15 25 35 45 
Reversed array: 45 35 25 15`}</pre>
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
              Pointers and array reversal operations are fundamental in programming:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Memory Efficiency:</strong> Pointers allow direct memory access without copying data</li>
              <li><strong>String Processing:</strong> Reversing strings, palindromes, text manipulation</li>
              <li><strong>Data Structures:</strong> Linked lists, stacks, queues use pointer-based operations</li>
              <li><strong>Algorithm Implementation:</strong> Many algorithms require in-place array reversal</li>
              <li><strong>System Programming:</strong> Low-level operations, device drivers, memory management</li>
              <li><strong>Performance Optimization:</strong> Pointer arithmetic is faster than array indexing in some cases</li>
              <li><strong>Function Parameters:</strong> Passing arrays to functions efficiently using pointers</li>
              <li><strong>Dynamic Memory:</strong> Understanding pointers is essential for malloc, calloc, and dynamic allocation</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Mastering pointers is crucial for advanced C programming. Pointers provide direct memory access and are essential for understanding how data structures and memory management work in C.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-09-fibonacci-recursion"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 9
        </Link>
        <Link
          href="/labs/c-programming/exp-11-structures-student"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 11
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}


