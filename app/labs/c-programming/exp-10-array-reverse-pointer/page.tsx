import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 10 – Array Reverse Using Pointers | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment to reverse array elements using pointers and pointer arithmetic. Includes algorithm, flowchart, pointer manipulation, sample I/O, viva questions, and real-world applications.",
  keywords: [
    "C programming lab",
    "array reverse",
    "pointers",
    "pointer arithmetic",
    "C lab manual",
    "memory manipulation",
    "in-place algorithm"
  ],
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
            <p className="text-gray-700 leading-relaxed mb-3">
              To reverse the elements of an array using pointers and pointer arithmetic in C programming. Learn how to manipulate array elements through 
              pointers and swap values using pointer dereferencing. This experiment helps students understand pointer operations, memory addresses, 
              and efficient in-place array manipulation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to use pointers for array traversal, understand pointer arithmetic, implement efficient 
              in-place algorithms, and gain deeper insight into how arrays and pointers work in C.
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
              <li>Use pointers to access and manipulate array elements</li>
              <li>Understand pointer arithmetic (increment, decrement, addition)</li>
              <li>Implement in-place array reversal using two pointers</li>
              <li>Swap values using pointer dereferencing</li>
              <li>Understand the relationship between arrays and pointers</li>
              <li>Use pointer comparison to control loop termination</li>
              <li>Implement efficient algorithms using pointers</li>
              <li>Understand memory addresses and pointer operations</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithm for reversing an array using pointers uses two pointers moving toward each other:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Algorithm Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Initialize Pointers:</strong> Set <code className="bg-white px-1 rounded">start = arr</code> (points to first element) and 
                <code className="bg-white px-1 rounded">end = arr + n - 1</code> (points to last element)</li>
                <li><strong>Loop Condition:</strong> Continue while <code className="bg-white px-1 rounded">start &lt; end</code> (pointers haven't met)</li>
                <li><strong>Swap Values:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Store value at start: <code className="bg-white px-1 rounded">temp = *start</code></li>
                    <li>Copy end to start: <code className="bg-white px-1 rounded">*start = *end</code></li>
                    <li>Copy temp to end: <code className="bg-white px-1 rounded">*end = temp</code></li>
                  </ul>
                </li>
                <li><strong>Move Pointers:</strong> Increment start (<code className="bg-white px-1 rounded">start++</code>), decrement end 
                (<code className="bg-white px-1 rounded">end--</code>)</li>
                <li><strong>Repeat:</strong> Continue until pointers meet or cross</li>
              </ol>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700 text-sm">
                <strong>Efficiency:</strong> This algorithm is O(n) time complexity and O(1) space complexity (in-place), making it very efficient. 
                It requires n/2 swaps to reverse an array of n elements.
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
              Mastering pointers is crucial for advanced C programming. Pointers provide direct memory access and are essential for understanding how 
              data structures and memory management work in C. The two-pointer technique used in array reversal is a fundamental pattern used in many 
              algorithms including palindrome checking, two-sum problems, and efficient array manipulation.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is pointer arithmetic and how does it work with arrays?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pointer arithmetic allows adding/subtracting integers to pointers. When you increment a pointer, it moves by the size of the pointed 
                type. For int*, incrementing moves by sizeof(int) bytes. Arrays and pointers are closely related: array name is a pointer to first element, 
                so <code className="bg-gray-100 px-1 rounded">arr[i]</code> is equivalent to <code className="bg-gray-100 px-1 rounded">*(arr + i)</code>.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Why do we use two pointers (start and end) instead of one?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Two pointers moving toward each other allow in-place reversal with O(1) extra space. With one pointer, you'd need O(n) extra space to 
                store reversed array. Two-pointer technique swaps elements from both ends simultaneously, meeting in the middle, requiring only n/2 
                iterations instead of n.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What happens if we continue the loop when start &gt;= end?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                If we continue when start &gt;= end, we'd swap elements that have already been swapped, effectively reversing the array back to original. 
                For even-length arrays, pointers meet (start == end) at center, no swap needed. For odd-length, they cross. The condition start &lt; end 
                ensures we stop at the right point.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: Can we reverse an array without using a temporary variable?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, using XOR swap: <code className="bg-gray-100 px-1 rounded">*start ^= *end; *end ^= *start; *start ^= *end;</code>. However, this 
                is less readable and doesn't work if both pointers point to same element. Temporary variable approach is clearer and more reliable. 
                Modern compilers optimize temporary variable swaps efficiently.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What is the difference between *ptr++ and (*ptr)++?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">*ptr++</code> dereferences ptr, returns value, then increments pointer (post-increment pointer). 
                <code className="bg-gray-100 px-1 rounded">(*ptr)++</code> dereferences ptr, increments the value pointed to, pointer unchanged. Operator 
                precedence: * and ++ have same precedence, associate right-to-left, so *ptr++ is *(ptr++), not (*ptr)++.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: How would you reverse only a portion of an array using pointers?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Initialize start to beginning of portion, end to end of portion. Use same algorithm but with modified bounds. For example, to reverse 
                elements from index i to j: <code className="bg-gray-100 px-1 rounded">start = arr + i</code>, <code className="bg-gray-100 px-1 rounded">end = arr + j</code>, 
                then apply same reversal logic. This demonstrates the flexibility of pointer-based approaches.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What is the advantage of using pointers over array indexing for this operation?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pointers can be more efficient (fewer address calculations), more flexible (can pass to functions easily), and enable direct memory 
                manipulation. However, for this specific case, both are similar in performance. Modern compilers optimize array indexing well. Pointers 
                are more idiomatic for this two-pointer pattern and make the algorithm's intent clearer.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: Can we use this technique to reverse a string?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, same technique works for strings (character arrays). Initialize start to first character, end to last character (before null terminator). 
                Swap characters until pointers meet. Important: don't swap the null terminator, so end should point to last character, not the null. 
                This is an efficient way to reverse strings in-place.
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
              <li><Link href="/labs/c-programming/exp-09-fibonacci-recursion" className="text-blue-600 hover:text-blue-700 underline">Experiment 9: Fibonacci Recursion</Link></li>
              <li><Link href="/labs/c-programming/exp-11-structures-student" className="text-blue-600 hover:text-blue-700 underline">Experiment 11: Structures</Link></li>
              <li><Link href="/programming/c-language/viva-questions" className="text-blue-600 hover:text-blue-700 underline">C Viva Questions</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
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


