import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Common C Language Errors & Complete Debugging Guide | CSM Study Zone",
  description: "Comprehensive guide to debugging C programs covering missing semicolons, undefined references, segmentation faults, pointer errors, array bounds, logical errors, debugging tools, and systematic debugging approaches with examples.",
  keywords: [
    "C debugging",
    "C errors",
    "C programming errors",
    "segmentation fault",
    "pointer errors",
    "C debugging guide",
    "fix C errors",
    "C memory errors",
    "debugging techniques"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/programming/c-language/debugging",
  },
};

export default function DebuggingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 prose prose-lg prose-slate">
      <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Common C Language Errors & Debugging Guide
      </h1>

      {/* Navigation Links */}
      <div className="not-prose mb-8 flex flex-wrap gap-3">
        <Link href="/programming/c-language" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium">
          ← Back to Basics
        </Link>
        <Link href="/programming/c-language/programming-tips" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
          Programming Tips
        </Link>
        <Link href="/programming/c-language/practice-questions" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium">
          Practice Questions
        </Link>
      </div>

      <h2>1. Missing Semicolon Issues</h2>
      
      <h3>Error Example:</h3>
      <pre><code>{`#include <stdio.h>

int main() {
    int x = 10
    printf("%d", x);  // ERROR: expected ';' before 'printf'
    return 0;
}`}</code></pre>

      <h3>Solution:</h3>
      <pre><code>{`#include <stdio.h>

int main() {
    int x = 10;  // CORRECT: Added semicolon
    printf("%d", x);
    return 0;
}`}</code></pre>

      <h3>Common Places Missing Semicolons Occur:</h3>
      <ul>
        <li>After variable declarations</li>
        <li>After function calls</li>
        <li>After return statements</li>
        <li>After structure member declarations</li>
        <li>After enum declarations</li>
      </ul>

      <h2>2. Undefined Reference Errors</h2>
      
      <h3>Error Example:</h3>
      <pre><code>{`// undefined reference to printf
// undefined reference to main`}</code></pre>

      <h3>Common Causes:</h3>
      <ul>
        <li>Missing header file includes</li>
        <li>Function not defined or declared</li>
        <li>Linking errors (missing library files)</li>
        <li>Spelling mistakes in function names</li>
      </ul>

      <h3>Solutions:</h3>
      <pre><code>{`// Include required headers
#include <stdio.h>   // For printf, scanf
#include <string.h>  // For string functions
#include <stdlib.h>  // For malloc, free
#include <math.h>    // For math functions

// Declare functions before use
int add(int a, int b);  // Function prototype

int main() {
    int result = add(5, 3);  // Now it works
    return 0;
}

int add(int a, int b) {  // Function definition
    return a + b;
}`}</code></pre>

      <h2>3. Segmentation Fault Explanation</h2>
      
      <h3>What is Segmentation Fault?</h3>
      <p>
        Segmentation fault (segfault) occurs when a program tries to access memory that it doesn't have 
        permission to access. It's one of the most common runtime errors in C.
      </p>

      <h3>Common Causes:</h3>
      
      <h4>a) Null Pointer Dereference:</h4>
      <pre><code>{`// ERROR
int *ptr = NULL;
*ptr = 10;  // Segmentation fault!

// CORRECT
int *ptr = NULL;
if (ptr != NULL) {
    *ptr = 10;
} else {
    printf("Pointer is NULL\\n");
}`}</code></pre>

      <h4>b) Accessing Freed Memory:</h4>
      <pre><code>{`// ERROR
int *ptr = malloc(sizeof(int) * 10);
free(ptr);
*ptr = 10;  // Segmentation fault! Memory already freed

// CORRECT
int *ptr = malloc(sizeof(int) * 10);
if (ptr != NULL) {
    *ptr = 10;
}
free(ptr);
ptr = NULL;  // Prevent dangling pointer`}</code></pre>

      <h4>c) Stack Overflow:</h4>
      <pre><code>{`// ERROR - Infinite recursion
int factorial(int n) {
    return n * factorial(n - 1);  // No base case!
}

// CORRECT
int factorial(int n) {
    if (n <= 1) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);
}`}</code></pre>

      <h4>d) Buffer Overflow:</h4>
      <pre><code>{`// ERROR
char str[5];
strcpy(str, "Hello World");  // Too long! Segmentation fault

// CORRECT
char str[50];
strncpy(str, "Hello World", sizeof(str) - 1);
str[sizeof(str) - 1] = '\\0';`}</code></pre>

      <h3>How to Debug Segmentation Faults:</h3>
      <ul>
        <li>Use debugger (GDB) with: <code>gdb ./program</code></li>
        <li>Compile with debugging symbols: <code>gcc -g program.c</code></li>
        <li>Use Valgrind: <code>valgrind ./program</code></li>
        <li>Add printf statements to trace execution</li>
        <li>Check all pointer operations</li>
      </ul>

      <h2>4. Pointer Errors</h2>
      
      <h3>a) Uninitialized Pointer:</h3>
      <pre><code>{`// ERROR
int *ptr;
*ptr = 10;  // Pointer not initialized! Undefined behavior

// CORRECT
int *ptr;
int value = 10;
ptr = &value;  // Initialize pointer
*ptr = 20;     // Now safe`}</code></pre>

      <h3>b) Dangling Pointer:</h3>
      <pre><code>{`// ERROR
int *ptr = malloc(sizeof(int) * 10);
free(ptr);
*ptr = 10;  // Dangling pointer! Using freed memory

// CORRECT
int *ptr = malloc(sizeof(int) * 10);
if (ptr != NULL) {
    *ptr = 10;
}
free(ptr);
ptr = NULL;  // Set to NULL after freeing`}</code></pre>

      <h3>c) Double Free:</h3>
      <pre><code>{`// ERROR
int *ptr = malloc(sizeof(int) * 10);
free(ptr);
free(ptr);  // Double free error!

// CORRECT
int *ptr = malloc(sizeof(int) * 10);
free(ptr);
ptr = NULL;  // Set to NULL
// Now calling free(ptr) again is safe (no error, but unnecessary)`}</code></pre>

      <h3>d) Wrong Pointer Type:</h3>
      <pre><code>{`// ERROR
float f = 3.14;
int *ptr = &f;  // Wrong type! Undefined behavior
printf("%d", *ptr);

// CORRECT
float f = 3.14;
float *ptr = &f;  // Correct type
printf("%f", *ptr);`}</code></pre>

      <h3>e) Pointer Arithmetic Errors:</h3>
      <pre><code>{`// ERROR
int arr[5] = {1, 2, 3, 4, 5};
int *ptr = arr;
ptr += 10;  // Out of bounds!
printf("%d", *ptr);  // Undefined behavior

// CORRECT
int arr[5] = {1, 2, 3, 4, 5};
int *ptr = arr;
if (ptr + 2 < arr + 5) {  // Check bounds
    printf("%d", *(ptr + 2));  // Safe access
}`}</code></pre>

      <h2>5. Array Out of Bounds</h2>
      
      <h3>Error Example:</h3>
      <pre><code>{`// ERROR
int arr[5] = {1, 2, 3, 4, 5};
arr[10] = 100;  // Out of bounds! Undefined behavior
printf("%d", arr[-1]);  // Negative index! Error

// CORRECT
int arr[5] = {1, 2, 3, 4, 5};
int index = 10;
if (index >= 0 && index < 5) {  // Bounds checking
    arr[index] = 100;
} else {
    printf("Index out of bounds!\\n");
}`}</code></pre>

      <h3>String Array Bounds:</h3>
      <pre><code>{`// ERROR
char str[5];
strcpy(str, "Hello World");  // Buffer overflow!

// CORRECT
char str[50];
strncpy(str, "Hello World", sizeof(str) - 1);
str[sizeof(str) - 1] = '\\0';

// Or use safer alternative
char str[50];
snprintf(str, sizeof(str), "Hello World");`}</code></pre>

      <h3>2D Array Bounds:</h3>
      <pre><code>{`// ERROR
int matrix[3][3];
matrix[5][5] = 100;  // Out of bounds!

// CORRECT
int matrix[3][3];
int row = 5, col = 5;
if (row >= 0 && row < 3 && col >= 0 && col < 3) {
    matrix[row][col] = 100;
}`}</code></pre>

      <h2>6. Incorrect scanf Usage</h2>
      
      <h3>a) Missing &amp; (Address Operator):</h3>
      <pre><code>{`// ERROR
int num;
scanf("%d", num);  // Missing &! Undefined behavior

// CORRECT
int num;
scanf("%d", &num);  // Address operator required`}</code></pre>

      <h3>b) Format Specifier Mismatch:</h3>
      <pre><code>{`// ERROR
float f;
scanf("%d", &f);  // Wrong format specifier! Undefined behavior

// CORRECT
float f;
scanf("%f", &f);  // Correct format specifier

// For double
double d;
scanf("%lf", &d);  // Use %lf for double`}</code></pre>

      <h3>c) Buffer Issues with Characters:</h3>
      <pre><code>{`// ERROR - Newline character in buffer
int num;
char ch;
scanf("%d", &num);
scanf("%c", &ch);  // Reads newline from previous input!

// CORRECT - Add space before %c
int num;
char ch;
scanf("%d", &num);
scanf(" %c", &ch);  // Space consumes newline`}</code></pre>

      <h3>d) String Input:</h3>
      <pre><code>{`// ERROR
char str[10];
scanf("%s", &str);  // Don't use & with strings!

// CORRECT
char str[10];
scanf("%s", str);  // String name is already address

// Better - limit input length
scanf("%9s", str);  // Read max 9 characters (leave space for '\\0')`}</code></pre>

      <h3>e) Not Checking Return Value:</h3>
      <pre><code>{`// ERROR - No validation
int num;
scanf("%d", &num);  // What if user enters non-integer?

// CORRECT - Check return value
int num;
if (scanf("%d", &num) == 1) {
    printf("Valid input: %d\\n", num);
} else {
    printf("Invalid input!\\n");
}`}</code></pre>

      <h2>7. Logical Errors</h2>
      
      <h3>a) Using = instead of ==:</h3>
      <pre><code>{`// ERROR - Always true (assignment returns assigned value)
int x = 5;
if (x = 10) {  // Assigns 10 to x, always true!
    printf("x is 10\\n");
}

// CORRECT
int x = 5;
if (x == 10) {  // Comparison operator
    printf("x is 10\\n");
}`}</code></pre>

      <h3>b) Off-by-One Errors:</h3>
      <pre><code>{`// ERROR - Array index starts from 0, not 1
int arr[5] = {1, 2, 3, 4, 5};
for (int i = 1; i <= 5; i++) {  // Accesses arr[5] which is out of bounds
    printf("%d ", arr[i]);
}

// CORRECT
int arr[5] = {1, 2, 3, 4, 5};
for (int i = 0; i < 5; i++) {  // Correct: 0 to 4
    printf("%d ", arr[i]);
}`}</code></pre>

      <h3>c) Infinite Loops:</h3>
      <pre><code>{`// ERROR - Condition never becomes false
int i = 0;
while (i < 10) {
    printf("%d ", i);
    // Missing i++!
}

// CORRECT
int i = 0;
while (i < 10) {
    printf("%d ", i);
    i++;  // Increment counter
}`}</code></pre>

      <h3>d) Operator Precedence Issues:</h3>
      <pre><code>{`// ERROR - Wrong precedence
int result = 2 + 3 * 4;  // You might expect 20, but it's 14
// Because * has higher precedence than +

// CORRECT - Use parentheses for clarity
int result = (2 + 3) * 4;  // Now it's 20`}</code></pre>

      <h2>8. Flowchart/Debugging Tips</h2>
      
      <h3>Systematic Debugging Approach:</h3>
      <ol>
        <li><strong>Understand the Error:</strong>
          <ul>
            <li>Read compiler error messages carefully</li>
            <li>Check line numbers mentioned in errors</li>
            <li>Understand what the error means</li>
          </ul>
        </li>
        
        <li><strong>Isolate the Problem:</strong>
          <ul>
            <li>Comment out code sections to find the problem area</li>
            <li>Test with simple input values</li>
            <li>Check each function separately</li>
          </ul>
        </li>
        
        <li><strong>Add Debug Output:</strong>
          <pre><code>{`// Add printf statements
printf("DEBUG: Entering function\\n");
printf("DEBUG: Value of x = %d\\n", x);
printf("DEBUG: Value of ptr = %p\\n", ptr);`}</code></pre>
        </li>
        
        <li><strong>Use Compiler Warnings:</strong>
          <ul>
            <li>Compile with: <code>gcc -Wall -Wextra program.c</code></li>
            <li>Fix all warnings (they often indicate problems)</li>
          </ul>
        </li>
        
        <li><strong>Use Debugger:</strong>
          <ul>
            <li>GDB for Linux: <code>gdb ./program</code></li>
            <li>Set breakpoints and step through code</li>
            <li>Inspect variable values at runtime</li>
          </ul>
        </li>
      </ol>

      <h3>Common Debugging Tools:</h3>
      <ul>
        <li><strong>Compiler Flags:</strong> -Wall, -Wextra, -Werror, -g</li>
        <li><strong>Valgrind:</strong> Memory leak detector</li>
        <li><strong>GDB:</strong> GNU Debugger</li>
        <li><strong>Static Analyzers:</strong> cppcheck, clang-analyzer</li>
      </ul>

      <h3>Prevention Tips:</h3>
      <ul>
        <li>Always initialize variables</li>
        <li>Check pointers for NULL before use</li>
        <li>Validate array bounds before access</li>
        <li>Free dynamically allocated memory</li>
        <li>Use meaningful variable names</li>
        <li>Add comments for complex logic</li>
        <li>Test with boundary values</li>
      </ul>

      <div className="not-prose mt-8 p-6 bg-red-50 rounded-lg border-l-4 border-red-600">
        <p className="text-red-800 font-semibold mb-2">⚠️ Important</p>
        <p className="text-red-700">
          Always compile with warnings enabled: <code className="bg-red-100 px-2 py-1 rounded">gcc -Wall -Wextra -g program.c</code>. 
          Most errors can be caught at compile time. Fix warnings immediately to prevent runtime errors.
        </p>
      </div>

      {/* Summary Table */}
      <section className="not-prose mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Summary</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Error Type</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Common Causes</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Severity</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">Missing Semicolon</td>
                <td className="border border-gray-300 px-4 py-3">Forgetting semicolon after statements</td>
                <td className="border border-gray-300 px-4 py-3">Compile Error</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Segmentation Fault</td>
                <td className="border border-gray-300 px-4 py-3">Null pointer, buffer overflow, accessing freed memory</td>
                <td className="border border-gray-300 px-4 py-3">Runtime Error</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">Pointer Errors</td>
                <td className="border border-gray-300 px-4 py-3">Uninitialized, dangling, null pointer dereference</td>
                <td className="border border-gray-300 px-4 py-3">Runtime Error</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Array Out of Bounds</td>
                <td className="border border-gray-300 px-4 py-3">Accessing array beyond allocated size</td>
                <td className="border border-gray-300 px-4 py-3">Runtime Error</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">Logical Errors</td>
                <td className="border border-gray-300 px-4 py-3">Using = instead of ==, off-by-one, infinite loops</td>
                <td className="border border-gray-300 px-4 py-3">Logic Error</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="not-prose mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the most common error in C programming?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Missing semicolons are the most common compile-time errors. Segmentation faults from null pointer dereference and array out-of-bounds 
              are the most common runtime errors. Logical errors like using = instead of == are also very common and can be hard to detect.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q2: How do I debug a segmentation fault?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Use GDB debugger: compile with -g flag, run <code className="bg-gray-100 px-1 rounded">gdb ./program</code>, use <code className="bg-gray-100 px-1 rounded">run</code> 
              to execute, <code className="bg-gray-100 px-1 rounded">bt</code> for backtrace. Check for null pointers, array bounds, and freed memory access. 
              Use Valgrind to detect memory errors: <code className="bg-gray-100 px-1 rounded">valgrind ./program</code>.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q3: Why does my program crash with "Segmentation fault (core dumped)"?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              This occurs when accessing invalid memory. Common causes: dereferencing NULL pointer, accessing array out of bounds, using freed memory, 
              stack overflow from infinite recursion, or buffer overflow. The OS terminates the program to prevent memory corruption. Use debugger 
              to find exact line causing the crash.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q4: How can I prevent pointer errors?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Always initialize pointers (set to NULL or valid address), check for NULL before dereferencing, set pointer to NULL after free(), 
              avoid using freed memory, be careful with pointer arithmetic, and use tools like Valgrind to detect pointer misuse. Initialize 
              pointers at declaration: <code className="bg-gray-100 px-1 rounded">int *ptr = NULL;</code>.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q5: What compiler flags should I use for debugging?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Use <code className="bg-gray-100 px-1 rounded">-Wall -Wextra</code> to enable all warnings, <code className="bg-gray-100 px-1 rounded">-g</code> 
              for debug symbols (enables GDB), <code className="bg-gray-100 px-1 rounded">-O0</code> to disable optimization for easier debugging. 
              Full command: <code className="bg-gray-100 px-1 rounded">gcc -Wall -Wextra -g -O0 program.c</code>. Fix all warnings before running.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q6: How do I find memory leaks in my C program?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Use Valgrind: <code className="bg-gray-100 px-1 rounded">valgrind --leak-check=full ./program</code>. It reports memory leaks, 
              invalid memory access, and use of uninitialized values. Ensure every malloc/calloc has a corresponding free(). Set pointers to NULL 
              after freeing. Review Valgrind output carefully to identify leaked memory locations.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q7: What is the difference between compile-time and runtime errors?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Compile-time errors occur during compilation (syntax errors, missing semicolons, undefined variables). Runtime errors occur during 
              program execution (segmentation faults, division by zero, null pointer access). Compile-time errors prevent program from running, 
              while runtime errors cause program to crash or behave incorrectly during execution.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q8: How do I debug an infinite loop?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Add printf statements inside loop to see variable values and verify loop condition. Check if loop variable is being incremented/decremented. 
              Verify loop condition will eventually become false. Use debugger to set breakpoint and step through loop. Look for missing increment 
              statements or conditions that never change. Use Ctrl+C to interrupt infinite loop.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="not-prose mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Debugging is an essential skill for C programmers. Understanding common errors and their causes helps you write better code and fix issues 
          more efficiently. Most errors can be prevented by following best practices: always initialize variables, check pointers for NULL, validate 
          array bounds, and compile with warnings enabled.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Systematic debugging approaches, combined with proper tools like GDB and Valgrind, make the debugging process much more manageable. 
          Remember that debugging is part of the learning process - every error you fix makes you a better programmer. Take time to understand why 
          errors occur, not just how to fix them.
        </p>
      </section>

      {/* Internal Linking */}
      <section className="not-prose mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/programming/c-language/programming-tips" className="text-blue-600 hover:text-blue-700 underline">C Programming Tips & Best Practices</Link></li>
            <li><Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 underline">Important C Programs</Link></li>
            <li><Link href="/programming/c-language/viva-questions" className="text-blue-600 hover:text-blue-700 underline">C Viva Questions</Link></li>
            <li><Link href="/labs/c-programming" className="text-blue-600 hover:text-blue-700 underline">C Programming Lab Manual</Link></li>
            <li><Link href="/programming/c-language/full-notes" className="text-blue-600 hover:text-blue-700 underline">Full C Language Notes</Link></li>
          </ul>
        </div>
      </section>

      {/* Footer Block */}
      <PageFooterBlock />
    </div>
  );
}

