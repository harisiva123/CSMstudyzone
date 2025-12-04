import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 14 – Dynamic Memory Allocation (malloc, calloc, realloc, free) | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment for dynamic memory allocation using malloc, calloc, realloc, and free. Includes memory management, error handling, memory leaks prevention, sample I/O, viva questions, and system programming applications.",
  keywords: [
    "C programming lab",
    "dynamic memory allocation",
    "malloc calloc realloc",
    "memory management",
    "C lab manual",
    "memory leaks",
    "heap memory"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-14-dynamic-memory",
  },
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
            <p className="text-gray-700 leading-relaxed mb-3">
              To understand and implement dynamic memory allocation using <code className="bg-gray-100 px-1.5 py-0.5 rounded">malloc()</code>, 
              <code className="bg-gray-100 px-1.5 py-0.5 rounded">calloc()</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">realloc()</code>, 
              and <code className="bg-gray-100 px-1.5 py-0.5 rounded">free()</code> functions in C programming. Learn to allocate memory at runtime and 
              prevent memory leaks. This experiment helps students understand heap memory, dynamic data structures, and proper resource management.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to allocate memory dynamically, understand the difference between stack and heap memory, 
              implement proper memory management, and prevent memory leaks that can cause program failures.
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
              <li>Allocate memory dynamically using malloc() and calloc()</li>
              <li>Resize allocated memory using realloc()</li>
              <li>Deallocate memory using free() to prevent leaks</li>
              <li>Check for allocation failures (NULL pointer)</li>
              <li>Understand the difference between malloc() and calloc()</li>
              <li>Handle memory allocation errors gracefully</li>
              <li>Set pointers to NULL after freeing to avoid dangling pointers</li>
              <li>Create dynamic arrays and data structures</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithm for dynamic memory allocation involves allocation, usage, and deallocation:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dynamic Memory Allocation Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Allocate Memory:</strong> 
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>malloc: <code className="bg-white px-1 rounded">ptr = (type*)malloc(n * sizeof(type))</code></li>
                    <li>calloc: <code className="bg-white px-1 rounded">ptr = (type*)calloc(n, sizeof(type))</code></li>
                  </ul>
                </li>
                <li><strong>Check Allocation:</strong> If <code className="bg-white px-1 rounded">ptr == NULL</code>, allocation failed, handle error</li>
                <li><strong>Use Memory:</strong> Access allocated memory using pointer (ptr[i] or *(ptr + i))</li>
                <li><strong>Resize (Optional):</strong> <code className="bg-white px-1 rounded">ptr = realloc(ptr, new_size)</code>, check for NULL</li>
                <li><strong>Deallocate:</strong> <code className="bg-white px-1 rounded">free(ptr)</code> when done</li>
                <li><strong>Set to NULL:</strong> <code className="bg-white px-1 rounded">ptr = NULL</code> to prevent dangling pointer</li>
              </ol>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-gray-700 text-sm">
                <strong>Critical Rules:</strong> Always check for NULL after allocation, always free allocated memory, never use freed memory, 
                set pointer to NULL after freeing, match malloc with free, calloc with free, realloc with free.
              </p>
            </div>
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
                <strong>Important:</strong> Always free dynamically allocated memory to prevent memory leaks. Memory leaks occur when allocated memory 
                is not freed, causing the program to consume more and more memory over time. In long-running programs, this can exhaust system memory 
                and cause crashes.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between malloc() and calloc()?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">malloc(n * size)</code> allocates n*size bytes, memory contains garbage values. 
                <code className="bg-gray-100 px-1 rounded">calloc(n, size)</code> allocates n*size bytes and initializes all bytes to zero. 
                calloc is slower (initialization overhead) but safer (no garbage values). Use malloc when you'll initialize yourself, calloc when 
                you need zero-initialized memory.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: What happens if we don't free dynamically allocated memory?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Memory leak occurs - allocated memory is never returned to system, program consumes increasing memory. In short programs, OS reclaims 
                memory on exit, but in long-running programs (servers, daemons), leaks cause memory exhaustion and crashes. Always free memory to 
                prevent leaks. Use tools like valgrind to detect leaks.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What is a dangling pointer and how do we prevent it?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dangling pointer points to memory that has been freed. Using it causes undefined behavior. Prevent by setting pointer to NULL after 
                free: <code className="bg-gray-100 px-1 rounded">free(ptr); ptr = NULL;</code>. This makes it safe to check (if (ptr != NULL)) and 
                prevents accidental use. Accessing NULL pointer causes segmentation fault (detectable) vs undefined behavior from dangling pointer.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: How does realloc() work and when might it fail?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                realloc() resizes previously allocated memory. It may extend existing block (if space available) or allocate new block and copy data. 
                Returns new pointer (may be different from old). Fails if insufficient memory, returns NULL. Important: don't lose old pointer until 
                checking if realloc succeeded. If realloc fails, original memory is still valid. Always check return value before using.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What is the difference between stack and heap memory?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Stack: automatic storage for local variables, managed by compiler, fast, limited size, automatically freed when function returns. Heap: 
                dynamic memory allocated with malloc/calloc, managed manually, larger size, slower, must be explicitly freed. Stack is for fixed-size 
                local data, heap is for dynamic/variable-size data that outlives function scope.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: Can we free the same memory twice?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No, double free causes undefined behavior, often crashes. Freeing already-freed memory or freeing memory not allocated with malloc/calloc/realloc 
                is dangerous. Always set pointer to NULL after free, and check before freeing: <code className="bg-gray-100 px-1 rounded">if (ptr != NULL) free(ptr);</code>. 
                Freeing NULL is safe (does nothing), so setting to NULL after free prevents double-free errors.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What happens if malloc() returns NULL?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                NULL means allocation failed (insufficient memory, heap fragmentation, system limits). Using NULL pointer causes segmentation fault. 
                Always check: <code className="bg-gray-100 px-1 rounded">if (ptr == NULL) { /* handle error */ }</code>. Options: exit program, 
                return error code, try smaller allocation, or free other memory and retry. Never dereference NULL pointer.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: Why do we need to cast the return value of malloc()?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                In C, malloc() returns <code className="bg-gray-100 px-1 rounded">void*</code> (generic pointer). Casting to specific type 
                (<code className="bg-gray-100 px-1 rounded">(int*)malloc(...)</code>) makes code clearer and helps catch type errors. In C++, 
                casting is required (C++ doesn't allow implicit void* conversion). However, in modern C, casting is optional but recommended for 
                clarity and compatibility.
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
              <li><Link href="/labs/c-programming/exp-13-search-sort" className="text-blue-600 hover:text-blue-700 underline">Experiment 13: Search & Sort</Link></li>
              <li><Link href="/programming/c-language/viva-questions" className="text-blue-600 hover:text-blue-700 underline">C Viva Questions</Link></li>
              <li><Link href="/programming/c-language/debugging" className="text-blue-600 hover:text-blue-700 underline">C Debugging Guide</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
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


