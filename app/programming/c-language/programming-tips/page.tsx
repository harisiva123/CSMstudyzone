import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";
import { LightBulbIcon, CheckCircleIcon, XCircleIcon, CodeBracketIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "C Programming Tips & Best Practices – Complete Guide | CSM Study Zone",
  description: "Comprehensive guide to C programming best practices including clean coding habits, indentation style, commenting guidelines, debugging approaches, memory management tips, common mistakes to avoid, and professional coding standards.",
  keywords: [
    "C programming tips",
    "C best practices",
    "C coding standards",
    "programming guidelines",
    "C debugging",
    "memory management",
    "clean code",
    "C programming standards"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/programming/c-language/programming-tips",
  },
};

export default function ProgrammingTipsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        C Programming Tips & Best Practices
      </h1>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Write cleaner, faster, and bug-free C programs with these core principles.
      </p>

      {/* Navigation Links */}
      <div className="mb-8 flex flex-wrap gap-3">
        <Link 
          href="/programming/c-language" 
          className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow transition-colors text-sm font-medium"
        >
          ← Back to Basics
        </Link>
        <Link 
          href="/programming/c-language/important-programs" 
          className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow transition-colors text-sm font-medium"
        >
          Important Programs
        </Link>
        <Link 
          href="/programming/c-language/practice-questions" 
          className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow transition-colors text-sm font-medium"
        >
          Practice Questions
        </Link>
      </div>

      {/* Clean Coding Habits Card */}
      <section className="bg-white/60 rounded-xl p-6 shadow-md border border-gray-200 backdrop-blur mb-6">
        <div className="flex items-center gap-3 mb-4">
          <CodeBracketIcon className="h-7 w-7 text-indigo-600" />
          <h2 className="text-2xl font-bold text-slate-900">Clean Coding Habits</h2>
        </div>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Writing clean, readable code is essential for maintenance and collaboration. Following consistent 
          coding standards makes your programs easier to understand and debug.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <LightBulbIcon className="h-5 w-5 text-yellow-500" />
              Key Principles:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Write self-documenting code with meaningful variable and function names</li>
              <li>Keep functions small and focused on a single task</li>
              <li>Avoid deep nesting (maximum 3-4 levels)</li>
              <li>Use consistent naming conventions throughout your code</li>
              <li>Remove unused variables and dead code</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <span className="font-semibold text-indigo-600">Naming Conventions:</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-700">Good Naming Examples</h4>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`// Good naming
int student_age;
float total_salary;
char student_name[50];
void calculate_average();
int find_maximum();`}</code>
                </pre>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <XCircleIcon className="h-5 w-5 text-red-600" />
                  <h4 className="font-semibold text-red-700">Bad Naming Examples</h4>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`// Bad naming
int a, b, c;
float x, y;
char str[50];
void func();
int f1();`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indentation Style Card */}
      <section className="bg-white/60 rounded-xl p-6 shadow-md border border-gray-200 backdrop-blur mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Indentation Style</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Consistent indentation improves code readability. Choose one style and stick to it throughout 
          your project.
        </p>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Recommended Style (K&R):</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`// Functions - opening brace on same line
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
}`}</code>
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Indentation Rules:</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>Use 4 spaces or 1 tab (be consistent)</li>
            <li>Indent after opening brace</li>
            <li>Unindent before closing brace</li>
            <li>Align braces consistently</li>
          </ul>
        </div>
      </section>

      {/* Commenting Guidelines Card */}
      <section className="bg-white/60 rounded-xl p-6 shadow-md border border-gray-200 backdrop-blur mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Commenting Guidelines</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">When to Comment:</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Explain complex logic or algorithms</li>
              <li>Document function purpose, parameters, and return values</li>
              <li>Clarify non-obvious code decisions</li>
              <li>Mark TODO items or future improvements</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Commenting Styles:</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
              <code>{`// Single-line comment

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
int result = (a * b) + (c / d);  // Calculate weighted sum`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <XCircleIcon className="h-5 w-5 text-red-600" />
              What NOT to Comment:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Obvious code that is self-explanatory</li>
              <li>Commented-out code (remove it instead)</li>
              <li>Comments that don't add value</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Debugging Approach Card */}
      <section className="bg-white/60 rounded-xl p-6 shadow-md border border-gray-200 backdrop-blur mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Debugging Approach</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Systematic Debugging Steps:</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 ml-4">
              <li><span className="font-semibold">Understand the Problem:</span> Read error messages carefully</li>
              <li><span className="font-semibold">Reproduce the Error:</span> Identify steps to recreate the issue</li>
              <li><span className="font-semibold">Isolate the Problem:</span> Narrow down to specific function or block</li>
              <li><span className="font-semibold">Use Print Statements:</span> Add debug output to track execution</li>
              <li><span className="font-semibold">Check Logic:</span> Review algorithm and data flow</li>
              <li><span className="font-semibold">Test Incrementally:</span> Test small parts separately</li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Debugging Techniques:</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
              <code>{`// Use printf for debugging
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
}`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Common Debugging Tools:</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Compiler warnings (always enable and fix them)</li>
              <li>Print statements (printf, fprintf)</li>
              <li>Debuggers (GDB for Linux, Visual Studio debugger)</li>
              <li>Static analyzers (Valgrind, cppcheck)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Memory Management Tips Card */}
      <section className="bg-white/60 rounded-xl p-6 shadow-md border border-gray-200 backdrop-blur mb-6">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheckIcon className="h-7 w-7 text-indigo-600" />
          <h2 className="text-2xl font-bold text-slate-900">Memory Management Tips</h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Dynamic Memory Allocation:</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
              <code>{`// Always check return value
int *ptr = (int *)malloc(sizeof(int) * n);
if (ptr == NULL) {
    printf("Memory allocation failed!\\n");
    exit(1);
}

// Initialize allocated memory
memset(ptr, 0, sizeof(int) * n);

// Free memory when done
free(ptr);
ptr = NULL;  // Prevent dangling pointer`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Memory Management Rules:</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Always free dynamically allocated memory</li>
              <li>Set pointer to NULL after freeing</li>
              <li>Check for NULL before dereferencing pointers</li>
              <li>Avoid memory leaks by matching malloc/free calls</li>
              <li>Don't free memory twice (double free error)</li>
              <li>Don't access freed memory</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Common Memory Errors:</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
              <code>{`// Memory leak - memory not freed
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
arr[10] = 100;  // ERROR! Out of bounds`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* How to Avoid Common Mistakes Card */}
      <section className="bg-white/60 rounded-xl p-6 shadow-md border border-gray-200 backdrop-blur mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Avoid Common Mistakes</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">1. Missing Semicolons:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <XCircleIcon className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-red-700">ERROR</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`int x = 10
printf("%d", x);`}</code>
                </pre>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-700">CORRECT</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`int x = 10;
printf("%d", x);`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">2. Undeclared Variables:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <XCircleIcon className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-red-700">ERROR</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`// Variable not declared
x = 10;`}</code>
                </pre>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-700">CORRECT</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`int x = 10;`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">3. Using Uninitialized Variables:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <XCircleIcon className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-red-700">ERROR</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`// Uninitialized variable
int x;
printf("%d", x);`}</code>
                </pre>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-700">CORRECT</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`int x = 0;
printf("%d", x);`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">4. Array Bounds:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <XCircleIcon className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-red-700">ERROR</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`// Array out of bounds
int arr[5];
arr[10] = 100;`}</code>
                </pre>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-700">CORRECT</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`// Check bounds
int arr[5];
if (index >= 0 && index < 5) {
    arr[index] = 100;
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">5. Pointer Errors:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <XCircleIcon className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-red-700">ERROR</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`// Null pointer dereference
int *ptr = NULL;
*ptr = 10;`}</code>
                </pre>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-700">CORRECT</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`// Check before use
int *ptr = NULL;
if (ptr != NULL) {
    *ptr = 10;
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">6. String Operations:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <XCircleIcon className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-red-700">ERROR</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`// String overflow
char str[5];
strcpy(str, "Hello World");`}</code>
                </pre>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-700">CORRECT</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto shadow-lg">
                  <code>{`// Use strncpy or check length
char str[50];
strncpy(str, "Hello World", sizeof(str) - 1);
str[sizeof(str) - 1] = '\\0';`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Modular Code Card */}
      <section className="bg-white/60 rounded-xl p-6 shadow-md border border-gray-200 backdrop-blur mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Writing Modular Code</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Function Design Principles:</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>One function = One responsibility</li>
              <li>Keep functions short (preferably &lt; 50 lines)</li>
              <li>Use meaningful function names</li>
              <li>Minimize function parameters (max 3-4)</li>
              <li>Return values instead of modifying global variables</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Example of Modular Code:</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
              <code>{`// Good modular design
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
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Tips for Beginners Card */}
      <section className="bg-white/60 rounded-xl p-6 shadow-md border border-gray-200 backdrop-blur mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Tips for Beginners</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Getting Started:</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Start with simple programs and gradually increase complexity</li>
              <li>Practice regularly - code daily if possible</li>
              <li>Read code written by experienced programmers</li>
              <li>Don't copy-paste code - type it yourself to learn</li>
              <li>Understand concepts before moving to next topic</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Learning Resources:</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Solve problems on online platforms (HackerRank, LeetCode)</li>
              <li>Build small projects to apply knowledge</li>
              <li>Join programming communities and forums</li>
              <li>Review and refactor your old code</li>
              <li>Don't give up - debugging is part of learning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Common Beginner Mistakes:</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Forgetting semicolons</li>
              <li>Using = instead of == for comparison</li>
              <li>Array indexing starting from 1 instead of 0</li>
              <li>Not including required header files</li>
              <li>Ignoring compiler warnings</li>
              <li>Trying to learn everything at once</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts Table Card */}
      <section className="bg-white/60 rounded-xl p-6 shadow-md border border-gray-200 backdrop-blur mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">General Coding Advice</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-indigo-900">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
                  Do's
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-red-900">
                  <XCircleIcon className="h-5 w-5 text-red-600 inline mr-2" />
                  Don'ts
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="bg-white/50 hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3">Use meaningful variable and function names</td>
                <td className="border border-gray-300 px-4 py-3">Use single-letter or cryptic variable names</td>
              </tr>
              <tr className="bg-white/50 hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3">Write small, focused functions</td>
                <td className="border border-gray-300 px-4 py-3">Create long, monolithic functions</td>
              </tr>
              <tr className="bg-white/50 hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3">Always check return values of functions</td>
                <td className="border border-gray-300 px-4 py-3">Ignore error return values</td>
              </tr>
              <tr className="bg-white/50 hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3">Free dynamically allocated memory</td>
                <td className="border border-gray-300 px-4 py-3">Forget to free memory (memory leaks)</td>
              </tr>
              <tr className="bg-white/50 hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3">Validate input before using it</td>
                <td className="border border-gray-300 px-4 py-3">Assume input is always valid</td>
              </tr>
              <tr className="bg-white/50 hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3">Use consistent indentation style</td>
                <td className="border border-gray-300 px-4 py-3">Mix different indentation styles</td>
              </tr>
              <tr className="bg-white/50 hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3">Compile with warnings enabled (-Wall -Wextra)</td>
                <td className="border border-gray-300 px-4 py-3">Ignore compiler warnings</td>
              </tr>
              <tr className="bg-white/50 hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3">Test your code incrementally</td>
                <td className="border border-gray-300 px-4 py-3">Write entire program before testing</td>
              </tr>
              <tr className="bg-white/50 hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3">Comment complex logic and algorithms</td>
                <td className="border border-gray-300 px-4 py-3">Comment obvious code unnecessarily</td>
              </tr>
              <tr className="bg-white/50 hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3">Initialize variables before use</td>
                <td className="border border-gray-300 px-4 py-3">Use uninitialized variables</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Final Best Practice Card */}
      <div className="bg-green-50 rounded-xl p-6 shadow-md border-l-4 border-green-600">
        <div className="flex items-start gap-3">
          <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-green-800 font-semibold mb-2">✅ Best Practice</p>
            <p className="text-green-700 leading-relaxed">
              Always compile with warnings enabled: <code className="bg-green-100 px-2 py-1 rounded text-sm font-mono">gcc -Wall -Wextra program.c</code>. 
              Fix all warnings before running your program. This helps catch many errors early.
            </p>
          </div>
        </div>
      </div>

      {/* Summary Table */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Best Practices Summary</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Category</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Key Practices</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Priority</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">Code Quality</td>
                <td className="border border-gray-300 px-4 py-3">Meaningful names, small functions, consistent style</td>
                <td className="border border-gray-300 px-4 py-3">High</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Memory Management</td>
                <td className="border border-gray-300 px-4 py-3">Always free memory, check NULL, set to NULL after free</td>
                <td className="border border-gray-300 px-4 py-3">Critical</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">Error Handling</td>
                <td className="border border-gray-300 px-4 py-3">Check return values, validate input, handle errors</td>
                <td className="border border-gray-300 px-4 py-3">High</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Debugging</td>
                <td className="border border-gray-300 px-4 py-3">Use compiler warnings, debugger, systematic approach</td>
                <td className="border border-gray-300 px-4 py-3">High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q1: Why is clean code important in C programming?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Clean code is easier to read, understand, debug, and maintain. It reduces bugs, makes collaboration easier, and saves time in the long 
              run. Well-written code is self-documenting and reduces the need for extensive comments. It's especially important in C where manual 
              memory management and low-level operations can lead to complex code.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q2: How do I choose good variable names?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Use descriptive names that indicate purpose: <code className="bg-gray-100 px-1 rounded">student_age</code> instead of 
              <code className="bg-gray-100 px-1 rounded">a</code>, <code className="bg-gray-100 px-1 rounded">calculate_total</code> instead of 
              <code className="bg-gray-100 px-1 rounded">func()</code>. Use consistent naming style (snake_case or camelCase). Avoid abbreviations 
              unless widely understood. Names should be long enough to be clear but short enough to be readable.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q3: What's the best way to handle memory management?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Always check if malloc/calloc returns NULL. Free every allocated memory block. Set pointer to NULL after freeing to prevent dangling 
              pointers. Match malloc with free, calloc with free. Use tools like Valgrind to detect leaks. Consider using functions that handle 
              memory automatically when possible. Document memory ownership clearly.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q4: Should I comment every line of code?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              No, only comment when necessary. Good code is self-documenting through meaningful names. Comment complex logic, algorithms, non-obvious 
              decisions, and function purposes. Don't comment obvious code. Remove commented-out code - use version control instead. Comments should 
              explain why, not what (code shows what).
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q5: How do I write modular code in C?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Break code into small, focused functions (one responsibility each). Keep functions short (preferably under 50 lines). Use meaningful 
              function names. Minimize function parameters. Return values instead of modifying globals. Group related functions in separate files. 
              Use header files for declarations. This makes code reusable, testable, and maintainable.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q6: What compiler flags should I always use?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Always use <code className="bg-gray-100 px-1 rounded">-Wall -Wextra</code> to enable warnings. Use <code className="bg-gray-100 px-1 rounded">-g</code> 
              for debugging. Use <code className="bg-gray-100 px-1 rounded">-std=c11</code> or <code className="bg-gray-100 px-1 rounded">-std=c99</code> 
              for standard compliance. Fix all warnings before running. For production, use <code className="bg-gray-100 px-1 rounded">-O2</code> 
              for optimization. Example: <code className="bg-gray-100 px-1 rounded">gcc -Wall -Wextra -g -std=c11 program.c</code>.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q7: How can I avoid common C programming mistakes?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Always initialize variables. Check pointers for NULL. Validate array bounds. Use == for comparison, not =. Include required headers. 
              Check return values of functions. Free allocated memory. Compile with warnings and fix them. Test with boundary values. Use const for 
              values that shouldn't change. Review code before submitting.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q8: What's the difference between good and bad code?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Good code: readable, maintainable, efficient, well-documented, follows standards, handles errors, tested. Bad code: cryptic names, 
              long functions, no error handling, memory leaks, hard to understand, inconsistent style. Good code can be understood and modified by 
              others (or yourself months later). Bad code works but is difficult to work with.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Following best practices in C programming leads to better code quality, fewer bugs, and easier maintenance. Good coding habits developed 
          early will serve you throughout your programming career. While it may take more time initially, clean, well-structured code saves time 
          in debugging and maintenance.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Remember that best practices are guidelines, not rigid rules. Adapt them to your project's needs. The most important principle is to 
          write code that is clear, correct, and maintainable. As you gain experience, you'll develop your own style while following these 
          fundamental principles.
        </p>
      </section>

      {/* Internal Linking */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/programming/c-language/debugging" className="text-blue-600 hover:text-blue-700 underline">C Debugging Guide</Link></li>
            <li><Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 underline">Important C Programs</Link></li>
            <li><Link href="/programming/c-language/viva-questions" className="text-blue-600 hover:text-blue-700 underline">C Viva Questions</Link></li>
            <li><Link href="/programming/c-language/full-notes" className="text-blue-600 hover:text-blue-700 underline">Full C Language Notes</Link></li>
            <li><Link href="/labs/c-programming" className="text-blue-600 hover:text-blue-700 underline">C Programming Lab Manual</Link></li>
          </ul>
        </div>
      </section>

      {/* Footer Block */}
      <PageFooterBlock />
    </main>
  );
}
