import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "C Programming Tips & Best Practices | CSM Study Zone",
  description: "Learn C programming best practices including clean coding habits, indentation style, commenting guidelines, debugging approaches, memory management tips, and common mistakes to avoid.",
  keywords: ["C programming tips", "C best practices", "CSM Study Zone", "C coding standards", "programming guidelines", "C debugging", "memory management", "clean code"],
};

export default function ProgrammingTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 prose prose-lg prose-slate">
      <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        C Programming Tips & Best Practices
      </h1>

      {/* Navigation Links */}
      <div className="not-prose mb-8 flex flex-wrap gap-3">
        <Link href="/programming/c-language" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium">
          ← Back to Basics
        </Link>
        <Link href="/programming/c-language/important-programs" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
          Important Programs
        </Link>
        <Link href="/programming/c-language/practice-questions" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium">
          Practice Questions
        </Link>
      </div>

      <h2>Clean Coding Habits</h2>
      <p>
        Writing clean, readable code is essential for maintenance and collaboration. Following consistent 
        coding standards makes your programs easier to understand and debug.
      </p>

      <h3>Key Principles:</h3>
      <ul>
        <li>Write self-documenting code with meaningful variable and function names</li>
        <li>Keep functions small and focused on a single task</li>
        <li>Avoid deep nesting (maximum 3-4 levels)</li>
        <li>Use consistent naming conventions throughout your code</li>
        <li>Remove unused variables and dead code</li>
      </ul>

      <h3>Naming Conventions:</h3>
      <pre><code>{`// Good naming
int student_age;
float total_salary;
char student_name[50];
void calculate_average();
int find_maximum();

// Bad naming
int a, b, c;
float x, y;
char str[50];
void func();
int f1();`}</code></pre>

      <h2>Indentation Style</h2>
      <p>
        Consistent indentation improves code readability. Choose one style and stick to it throughout 
        your project.
      </p>

      <h3>Recommended Style (K&R):</h3>
      <pre><code>{`// Functions - opening brace on same line
int add(int a, int b) {
    return a + b;
}

// Control structures
if (condition) {
    // statements
} else {
    // statements
}

// Loops
for (int i = 0; i < n; i++) {
    // statements
}

// Switch statement
switch (value) {
    case 1:
        // statements
        break;
    default:
        // statements
}`}</code></pre>

      <h3>Indentation Rules:</h3>
      <ul>
        <li>Use 4 spaces or 1 tab (be consistent)</li>
        <li>Indent after opening brace</li>
        <li>Unindent before closing brace</li>
        <li>Align braces consistently</li>
      </ul>

      <h2>Commenting Guidelines</h2>
      
      <h3>When to Comment:</h3>
      <ul>
        <li>Explain complex logic or algorithms</li>
        <li>Document function purpose, parameters, and return values</li>
        <li>Clarify non-obvious code decisions</li>
        <li>Mark TODO items or future improvements</li>
      </ul>

      <h3>Commenting Styles:</h3>
      <pre><code>{`// Single-line comment

/*
 * Multi-line comment
 * Use for function headers and detailed explanations
 */

// Function documentation
/**
 * Calculates the average of an array
 * @param arr: Input array
 * @param size: Size of array
 * @return: Average value
 */
float calculate_average(int arr[], int size) {
    // Implementation
}

// Inline comments for complex logic
int result = (a * b) + (c / d);  // Calculate weighted sum`}</code></pre>

      <h3>What NOT to Comment:</h3>
      <ul>
        <li>Obvious code that is self-explanatory</li>
        <li>Commented-out code (remove it instead)</li>
        <li>Comments that don't add value</li>
      </ul>

      <h2>Debugging Approach</h2>
      
      <h3>Systematic Debugging Steps:</h3>
      <ol>
        <li><strong>Understand the Problem:</strong> Read error messages carefully</li>
        <li><strong>Reproduce the Error:</strong> Identify steps to recreate the issue</li>
        <li><strong>Isolate the Problem:</strong> Narrow down to specific function or block</li>
        <li><strong>Use Print Statements:</strong> Add debug output to track execution</li>
        <li><strong>Check Logic:</strong> Review algorithm and data flow</li>
        <li><strong>Test Incrementally:</strong> Test small parts separately</li>
      </ol>

      <h3>Debugging Techniques:</h3>
      <pre><code>{`// Use printf for debugging
printf("DEBUG: Value of x = %d\\n", x);
printf("DEBUG: Entering function calculate()\\n");

// Check boundary conditions
if (index < 0 || index >= size) {
    printf("ERROR: Invalid index %d\\n", index);
    return -1;
}

// Validate input
if (ptr == NULL) {
    printf("ERROR: Null pointer detected\\n");
    return;
}`}</code></pre>

      <h3>Common Debugging Tools:</h3>
      <ul>
        <li>Compiler warnings (always enable and fix them)</li>
        <li>Print statements (printf, fprintf)</li>
        <li>Debuggers (GDB for Linux, Visual Studio debugger)</li>
        <li>Static analyzers (Valgrind, cppcheck)</li>
      </ul>

      <h2>Memory Management Tips</h2>
      
      <h3>Dynamic Memory Allocation:</h3>
      <pre><code>{`// Always check return value
int *ptr = (int *)malloc(sizeof(int) * n);
if (ptr == NULL) {
    printf("Memory allocation failed!\\n");
    exit(1);
}

// Initialize allocated memory
memset(ptr, 0, sizeof(int) * n);

// Free memory when done
free(ptr);
ptr = NULL;  // Prevent dangling pointer`}</code></pre>

      <h3>Memory Management Rules:</h3>
      <ul>
        <li>Always free dynamically allocated memory</li>
        <li>Set pointer to NULL after freeing</li>
        <li>Check for NULL before dereferencing pointers</li>
        <li>Avoid memory leaks by matching malloc/free calls</li>
        <li>Don't free memory twice (double free error)</li>
        <li>Don't access freed memory</li>
      </ul>

      <h3>Common Memory Errors:</h3>
      <pre><code>{`// Memory leak - memory not freed
int *ptr = malloc(sizeof(int) * 10);
// ... code ...
// Missing: free(ptr);

// Double free
free(ptr);
free(ptr);  // ERROR!

// Dangling pointer
free(ptr);
*ptr = 10;  // ERROR! Accessing freed memory

// Buffer overflow
int arr[5];
arr[10] = 100;  // ERROR! Out of bounds`}</code></pre>

      <h2>How to Avoid Common Mistakes</h2>
      
      <h3>1. Missing Semicolons:</h3>
      <pre><code>{`// ERROR
int x = 10
printf("%d", x);

// CORRECT
int x = 10;
printf("%d", x);`}</code></pre>

      <h3>2. Undeclared Variables:</h3>
      <pre><code>{`// ERROR - variable not declared
x = 10;

// CORRECT
int x = 10;`}</code></pre>

      <h3>3. Using Uninitialized Variables:</h3>
      <pre><code>{`// ERROR - uninitialized variable
int x;
printf("%d", x);

// CORRECT
int x = 0;
printf("%d", x);`}</code></pre>

      <h3>4. Array Bounds:</h3>
      <pre><code>{`// ERROR - array out of bounds
int arr[5];
arr[10] = 100;

// CORRECT - check bounds
int arr[5];
if (index >= 0 && index < 5) {
    arr[index] = 100;
}`}</code></pre>

      <h3>5. Pointer Errors:</h3>
      <pre><code>{`// ERROR - null pointer dereference
int *ptr = NULL;
*ptr = 10;

// CORRECT - check before use
int *ptr = NULL;
if (ptr != NULL) {
    *ptr = 10;
}`}</code></pre>

      <h3>6. String Operations:</h3>
      <pre><code>{`// ERROR - string overflow
char str[5];
strcpy(str, "Hello World");  // Too long!

// CORRECT - use strncpy or check length
char str[50];
strncpy(str, "Hello World", sizeof(str) - 1);
str[sizeof(str) - 1] = '\\0';`}</code></pre>

      <h2>Writing Modular Code</h2>
      
      <h3>Function Design Principles:</h3>
      <ul>
        <li>One function = One responsibility</li>
        <li>Keep functions short (preferably &lt; 50 lines)</li>
        <li>Use meaningful function names</li>
        <li>Minimize function parameters (max 3-4)</li>
        <li>Return values instead of modifying global variables</li>
      </ul>

      <h3>Example of Modular Code:</h3>
      <pre><code>{`// Good modular design
int find_maximum(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

float calculate_average(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return (float)sum / size;
}

void print_array(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

// Usage
int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int max = find_maximum(arr, 5);
    float avg = calculate_average(arr, 5);
    print_array(arr, 5);
    return 0;
}`}</code></pre>

      <h2>Tips for Beginners</h2>
      
      <h3>Getting Started:</h3>
      <ul>
        <li>Start with simple programs and gradually increase complexity</li>
        <li>Practice regularly - code daily if possible</li>
        <li>Read code written by experienced programmers</li>
        <li>Don't copy-paste code - type it yourself to learn</li>
        <li>Understand concepts before moving to next topic</li>
      </ul>

      <h3>Learning Resources:</h3>
      <ul>
        <li>Solve problems on online platforms (HackerRank, LeetCode)</li>
        <li>Build small projects to apply knowledge</li>
        <li>Join programming communities and forums</li>
        <li>Review and refactor your old code</li>
        <li>Don't give up - debugging is part of learning</li>
      </ul>

      <h3>Common Beginner Mistakes:</h3>
      <ul>
        <li>Forgetting semicolons</li>
        <li>Using = instead of == for comparison</li>
        <li>Array indexing starting from 1 instead of 0</li>
        <li>Not including required header files</li>
        <li>Ignoring compiler warnings</li>
        <li>Trying to learn everything at once</li>
      </ul>

      <div className="not-prose mt-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
        <p className="text-green-800 font-semibold mb-2">✅ Best Practice</p>
        <p className="text-green-700">
          Always compile with warnings enabled: <code className="bg-green-100 px-2 py-1 rounded">gcc -Wall -Wextra program.c</code>. 
          Fix all warnings before running your program. This helps catch many errors early.
        </p>
      </div>
    </div>
  );
}

