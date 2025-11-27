import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 14 – Dynamic Memory Allocation | C Programming Lab",
  description:
    "Use malloc, calloc, realloc, and free for dynamic memory management in C programming. Learn memory allocation, deallocation, and memory leaks prevention.",
  keywords: ["C programming", "dynamic memory", "malloc", "calloc", "realloc", "free", "C lab"],
};

export default function Exp14DynamicMemoryPage() {
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
          Lab Exercise – 14
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 14 – Dynamic Memory Allocation
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To understand and implement dynamic memory allocation using <code className="bg-gray-100 px-1.5 py-0.5 rounded">malloc()</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">calloc()</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">realloc()</code>, and <code className="bg-gray-100 px-1.5 py-0.5 rounded">free()</code> functions in C programming. Learn to allocate memory at runtime and prevent memory leaks.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdio.h</code> and <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdlib.h</code> header files</li>
              <li>For malloc():
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Allocates memory of specified size</li>
                  <li>Returns pointer to allocated memory</li>
                  <li>Memory contains garbage values</li>
                  <li>Syntax: <code className="bg-gray-100 px-1.5 py-0.5 rounded">ptr = (type*)malloc(size)</code></li>
                </ul>
              </li>
              <li>For calloc():
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Allocates memory and initializes to zero</li>
                  <li>Syntax: <code className="bg-gray-100 px-1.5 py-0.5 rounded">ptr = (type*)calloc(n, size)</code></li>
                </ul>
              </li>
              <li>For realloc():
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Resizes previously allocated memory</li>
                  <li>Syntax: <code className="bg-gray-100 px-1.5 py-0.5 rounded">ptr = realloc(ptr, new_size)</code></li>
                </ul>
              </li>
              <li>Always check if allocation was successful (ptr != NULL)</li>
              <li>Use <code className="bg-gray-100 px-1.5 py-0.5 rounded">free(ptr)</code> to deallocate memory</li>
              <li>Set pointer to NULL after freeing to avoid dangling pointers</li>
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
  ├─→ Declare: int *ptr, n
  │
  ├─→ Read n (number of elements)
  │
  ├─→ ptr = (int*)malloc(n * sizeof(int))
  │
  ├─→ IF (ptr == NULL)
  │   │
  │   └─→ Display "Memory allocation failed"
  │   └─→ EXIT
  │
  ├─→ Read elements into dynamically allocated array
  │
  ├─→ Display array elements
  │
  ├─→ ptr = realloc(ptr, (n+2) * sizeof(int))
  │
  ├─→ Add more elements
  │
  ├─→ Display updated array
  │
  ├─→ free(ptr)
  ├─→ ptr = NULL
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
#include <stdlib.h>

int main() {
    int *arr_malloc, *arr_calloc, *arr_realloc;
    int n, i, new_size;
    
    printf("Enter number of elements: ");
    scanf("%d", &n);
    
    // Using malloc() - allocates memory, contains garbage values
    arr_malloc = (int*)malloc(n * sizeof(int));
    
    if (arr_malloc == NULL) {
        printf("Memory allocation failed using malloc!\\n");
        return 1;
    }
    
    printf("\\n--- Using malloc() ---\\n");
    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++) {
        printf("Element %d: ", i + 1);
        scanf("%d", &arr_malloc[i]);
    }
    
    printf("Array elements (malloc): ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr_malloc[i]);
    }
    printf("\\n");
    
    // Using calloc() - allocates memory, initializes to zero
    arr_calloc = (int*)calloc(n, sizeof(int));
    
    if (arr_calloc == NULL) {
        printf("Memory allocation failed using calloc!\\n");
        free(arr_malloc);  // Free previously allocated memory
        return 1;
    }
    
    printf("\\n--- Using calloc() ---\\n");
    printf("Array elements (calloc - initialized to zero): ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr_calloc[i]);
    }
    printf("\\n");
    
    printf("Enter %d elements for calloc array:\\n", n);
    for (i = 0; i < n; i++) {
        printf("Element %d: ", i + 1);
        scanf("%d", &arr_calloc[i]);
    }
    
    printf("Array elements (calloc after input): ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr_calloc[i]);
    }
    printf("\\n");
    
    // Using realloc() - resize previously allocated memory
    printf("\\n--- Using realloc() ---\\n");
    printf("Enter new size (larger than %d): ", n);
    scanf("%d", &new_size);
    
    arr_realloc = (int*)realloc(arr_malloc, new_size * sizeof(int));
    
    if (arr_realloc == NULL) {
        printf("Memory reallocation failed!\\n");
        free(arr_malloc);
        free(arr_calloc);
        return 1;
    }
    
    // If realloc moved the memory, arr_malloc is now invalid
    // Use arr_realloc instead
    printf("Enter %d more elements:\\n", new_size - n);
    for (i = n; i < new_size; i++) {
        printf("Element %d: ", i + 1);
        scanf("%d", &arr_realloc[i]);
    }
    
    printf("Array elements after realloc (size %d): ", new_size);
    for (i = 0; i < new_size; i++) {
        printf("%d ", arr_realloc[i]);
    }
    printf("\\n");
    
    // Free all allocated memory
    printf("\\n--- Freeing Memory ---\\n");
    free(arr_realloc);  // Free reallocated memory (or original malloc)
    arr_realloc = NULL;  // Set to NULL to avoid dangling pointer
    
    free(arr_calloc);
    arr_calloc = NULL;
    
    printf("Memory freed successfully!\\n");
    
    return 0;
}

// Key Points:
// 1. Always check if malloc/calloc/realloc returns NULL
// 2. Always free dynamically allocated memory
// 3. Set pointer to NULL after freeing
// 4. malloc() - uninitialized memory
// 5. calloc() - zero-initialized memory
// 6. realloc() - can move memory to new location`}</code>
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
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter number of elements: 3

--- Using malloc() ---
Enter 3 elements:
Element 1: 10
Element 2: 20
Element 3: 30
Array elements (malloc): 10 20 30 

--- Using calloc() ---
Array elements (calloc - initialized to zero): 0 0 0 
Enter 3 elements for calloc array:
Element 1: 40
Element 2: 50
Element 3: 60
Array elements (calloc after input): 40 50 60 

--- Using realloc() ---
Enter new size (larger than 3): 5
Enter 2 more elements:
Element 4: 70
Element 5: 80
Array elements after realloc (size 5): 10 20 30 70 80 

--- Freeing Memory ---
Memory freed successfully!`}</pre>
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
              Dynamic memory allocation is essential for flexible and efficient programs:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Data Structures:</strong> Implementing linked lists, trees, graphs, and dynamic arrays</li>
              <li><strong>Variable-Sized Data:</strong> Handling data whose size is unknown at compile time</li>
              <li><strong>Memory Efficiency:</strong> Allocating only as much memory as needed</li>
              <li><strong>System Programming:</strong> Operating systems, device drivers, and low-level programming</li>
              <li><strong>Application Development:</strong> Building flexible applications that adapt to user needs</li>
              <li><strong>Performance Optimization:</strong> Reducing memory waste and improving efficiency</li>
              <li><strong>Embedded Systems:</strong> Managing limited memory resources efficiently</li>
              <li><strong>Game Development:</strong> Dynamic loading of game assets, level data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding dynamic memory management is crucial for preventing memory leaks, which can cause programs to consume excessive memory and eventually crash. Proper memory management is a hallmark of professional programming.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> Always free dynamically allocated memory to prevent memory leaks. Memory leaks occur when allocated memory is not freed, causing the program to consume more and more memory over time.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-13-search-sort"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 13
        </Link>
        <Link
          href="/labs/c-programming"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Back to Lab Home
        </Link>
      </div>
    </main>
  );
}

