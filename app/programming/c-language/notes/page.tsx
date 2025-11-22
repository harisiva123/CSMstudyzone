"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";

// Note: Metadata export doesn't work in client components
// We'll handle SEO via layout or parent component if needed

const cNotesSections = [
  {
    id: "intro",
    title: "Introduction & Structure",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Introduction to C</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Laboratories in 1972. 
            It is designed for system programming and is widely used in operating systems, embedded systems, and application development.
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li>Developed in 1972 by Dennis Ritchie</li>
            <li>Based on BCPL and B languages</li>
            <li>ANSI C standardized in 1989 (C89/C90)</li>
            <li>Updated standards: C99 (1999), C11 (2011), C17 (2017)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Features of C</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>Simple:</strong> Easy to learn and understand</li>
            <li><strong>Portable:</strong> Code runs on different platforms with minimal changes</li>
            <li><strong>Efficient:</strong> Fast execution speed</li>
            <li><strong>Low-level Access:</strong> Direct memory manipulation</li>
            <li><strong>Rich Library:</strong> Large collection of built-in functions</li>
            <li><strong>Modular:</strong> Supports functions and code reusability</li>
            <li><strong>Structured:</strong> Supports structured programming</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Structure of a C Program</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Preprocessor directives
#include <stdio.h>
#define MAX 100

// Global declarations
int global_var = 10;

// Function prototypes
void function_name();

// Main function
int main() {
    // Local declarations
    int local_var = 20;
    
    // Executable statements
    printf("Hello, World!\\n");
    
    return 0;  // Return statement
}

// Function definitions
void function_name() {
    // Function body
}`}</code></pre>
          <p className="text-gray-700 leading-relaxed mt-3">
            A C program typically consists of preprocessor directives, global declarations, function prototypes, 
            the main function, and function definitions.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "variables",
    title: "Variables & Data Types",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Basic Data Types</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>int:</strong> Integer values (-32768 to 32767 or larger, typically 4 bytes)</li>
            <li><strong>char:</strong> Single character (1 byte, -128 to 127 or 0 to 255)</li>
            <li><strong>float:</strong> Single precision floating-point (4 bytes, ~6 decimal places)</li>
            <li><strong>double:</strong> Double precision floating-point (8 bytes, ~15 decimal places)</li>
            <li><strong>void:</strong> No value (used with functions, pointers)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Derived Data Types</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>Array:</strong> Collection of similar elements</li>
            <li><strong>Pointer:</strong> Stores memory address</li>
            <li><strong>Structure:</strong> Groups different data types</li>
            <li><strong>Union:</strong> Shares memory for members</li>
            <li><strong>Enum:</strong> User-defined data type for constants</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Type Modifiers</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>signed / unsigned:</strong> For int and char (signed allows negative, unsigned only positive)</li>
            <li><strong>short / long:</strong> For int and double (changes size)</li>
            <li><strong>const:</strong> Constant, cannot be modified after initialization</li>
            <li><strong>volatile:</strong> May change unexpectedly (used for hardware registers)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Variable Declaration & Initialization</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Declaration
int age;
float salary;
char grade;

// Initialization
int age = 25;
float salary = 50000.50;
char grade = 'A';

// Multiple variables
int a, b, c;
int x = 10, y = 20, z = 30;`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Rules for Identifiers</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li>Must start with letter or underscore (_)</li>
            <li>Can contain letters, digits, underscore</li>
            <li>Cannot be a keyword (int, char, if, else, etc.)</li>
            <li>Case sensitive (age and Age are different)</li>
            <li>No special characters except underscore</li>
            <li>No spaces allowed</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "operators",
    title: "Operators & Expressions",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Arithmetic Operators</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>+</strong> Addition: a + b</li>
            <li><strong>-</strong> Subtraction: a - b</li>
            <li><strong>*</strong> Multiplication: a * b</li>
            <li><strong>/</strong> Division: a / b</li>
            <li><strong>%</strong> Modulus (remainder): a % b</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Relational Operators</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>&lt;</strong> Less than: a &lt; b</li>
            <li><strong>&gt;</strong> Greater than: a &gt; b</li>
            <li><strong>&lt;=</strong> Less than or equal: a &lt;= b</li>
            <li><strong>&gt;=</strong> Greater than or equal: a &gt;= b</li>
            <li><strong>==</strong> Equal to: a == b</li>
            <li><strong>!=</strong> Not equal: a != b</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-2">Return 1 (true) or 0 (false)</p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Logical Operators</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>&amp;&amp;</strong> Logical AND: (a &gt; 0) &amp;&amp; (b &gt; 0)</li>
            <li><strong>||</strong> Logical OR: (a &gt; 0) || (b &gt; 0)</li>
            <li><strong>!</strong> Logical NOT: !(a &gt; 0)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Assignment Operators</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`int a = 10;
a += 5;  // a = a + 5  (a becomes 15)
a -= 3;  // a = a - 3  (a becomes 12)
a *= 2;  // a = a * 2  (a becomes 24)
a /= 4;  // a = a / 4  (a becomes 6)
a %= 5;  // a = a % 5  (a becomes 1)`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Increment/Decrement Operators</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`int x = 5;
int y;

y = ++x;  // Pre-increment: x becomes 6, y = 6
y = x++;  // Post-increment: y = 6, then x becomes 7
y = --x;  // Pre-decrement: x becomes 6, y = 6
y = x--;  // Post-decrement: y = 6, then x becomes 5`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Operator Precedence</h3>
          <p className="text-gray-700 leading-relaxed mb-2">From highest to lowest:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4 text-gray-700">
            <li>Parentheses: ()</li>
            <li>Unary: +, -, ++, --, !, sizeof</li>
            <li>Multiplicative: *, /, %</li>
            <li>Additive: +, -</li>
            <li>Relational: &lt;, &gt;, &lt;=, &gt;=</li>
            <li>Equality: ==, !=</li>
            <li>Logical AND: &amp;&amp;</li>
            <li>Logical OR: ||</li>
            <li>Assignment: =, +=, -=, *=, /=, %=</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "io",
    title: "Input & Output",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">printf() - Output Function</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Used to display formatted output to the console. Requires <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">#include &lt;stdio.h&gt;</code>
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`#include <stdio.h>

int main() {
    int age = 25;
    float salary = 50000.50;
    char grade = 'A';
    char name[] = "John";
    
    printf("Age: %d\\n", age);
    printf("Salary: %.2f\\n", salary);
    printf("Grade: %c\\n", grade);
    printf("Name: %s\\n", name);
    printf("Age: %d, Salary: %.2f\\n", age, salary);
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Format Specifiers</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>%d</strong> or <strong>%i</strong>: Integer (int)</li>
            <li><strong>%f</strong>: Float</li>
            <li><strong>%lf</strong>: Double</li>
            <li><strong>%c</strong>: Character (char)</li>
            <li><strong>%s</strong>: String</li>
            <li><strong>%u</strong>: Unsigned integer</li>
            <li><strong>%o</strong>: Octal</li>
            <li><strong>%x</strong> or <strong>%X</strong>: Hexadecimal</li>
            <li><strong>%p</strong>: Pointer address</li>
            <li><strong>%%</strong>: Literal %</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">scanf() - Input Function</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Used to read formatted input from the user. Note: Use <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">&amp;</code> before variable name (address operator).
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`#include <stdio.h>

int main() {
    int age;
    float salary;
    char grade;
    char name[50];
    
    printf("Enter age: ");
    scanf("%d", &age);
    
    printf("Enter salary: ");
    scanf("%f", &salary);
    
    printf("Enter grade: ");
    scanf(" %c", &grade);  // Note space before %c
    
    printf("Enter name: ");
    scanf("%s", name);  // No & for arrays/strings
    
    printf("Age: %d, Salary: %.2f, Grade: %c, Name: %s\\n", 
           age, salary, grade, name);
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Other I/O Functions</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>getchar()</strong>: Reads a single character</li>
            <li><strong>putchar()</strong>: Writes a single character</li>
            <li><strong>gets()</strong>: Reads a string (deprecated, unsafe)</li>
            <li><strong>puts()</strong>: Writes a string</li>
            <li><strong>fgets()</strong>: Safe string input (recommended)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "control",
    title: "Control Statements",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">if Statement</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Simple if
if (condition) {
    // statements
}

// if-else
if (condition) {
    // statements
} else {
    // statements
}

// if-else if-else
if (condition1) {
    // statements
} else if (condition2) {
    // statements
} else {
    // statements
}

// Nested if
if (condition1) {
    if (condition2) {
        // statements
    }
}`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">switch Statement</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`switch (expression) {
    case constant1:
        // statements
        break;
    case constant2:
        // statements
        break;
    default:
        // statements
}

// Example
int choice = 2;
switch (choice) {
    case 1:
        printf("Option 1\\n");
        break;
    case 2:
        printf("Option 2\\n");
        break;
    default:
        printf("Invalid\\n");
}`}</code></pre>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Note:</strong> break is essential to prevent fall-through to next case.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">for Loop</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Syntax
for (initialization; condition; increment) {
    // statements
}

// Example: Print 1 to 10
for (int i = 1; i <= 10; i++) {
    printf("%d ", i);
}

// Nested for loop
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        printf("%d %d\\n", i, j);
    }
}`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">while Loop</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Syntax
while (condition) {
    // statements
}

// Example: Print 1 to 10
int i = 1;
while (i <= 10) {
    printf("%d ", i);
    i++;
}

// Infinite loop (be careful!)
while (1) {
    // statements
    if (condition) break;
}`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">do-while Loop</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Syntax (executes at least once)
do {
    // statements
} while (condition);

// Example
int i = 1;
do {
    printf("%d ", i);
    i++;
} while (i <= 10);`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">break and continue</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>break:</strong> Exits the loop or switch immediately</li>
            <li><strong>continue:</strong> Skips remaining statements in current iteration and continues with next iteration</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow mt-3">
            <code>{`// break example
for (int i = 1; i <= 10; i++) {
    if (i == 5) break;  // Exits loop when i is 5
    printf("%d ", i);   // Prints: 1 2 3 4
}

// continue example
for (int i = 1; i <= 10; i++) {
    if (i == 5) continue;  // Skips printing 5
    printf("%d ", i);      // Prints: 1 2 3 4 6 7 8 9 10
}`}</code></pre>
        </div>
      </div>
    ),
  },
  {
    id: "arrays",
    title: "Arrays & Strings",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Arrays</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            An array is a collection of similar data elements stored in contiguous memory locations.
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Declaration
int arr[10];  // Array of 10 integers

// Initialization
int arr[5] = {1, 2, 3, 4, 5};
int arr[] = {1, 2, 3};  // Size automatically determined

// Accessing elements
arr[0] = 10;  // First element (index starts at 0)
arr[4] = 50;  // Fifth element

// Example: Sum of array elements
int arr[5] = {10, 20, 30, 40, 50};
int sum = 0;
for (int i = 0; i < 5; i++) {
    sum += arr[i];
}
printf("Sum: %d\\n", sum);`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Multi-dimensional Arrays</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// 2D Array (Matrix)
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accessing
matrix[0][0] = 10;  // First row, first column

// Traversing 2D array
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\\n");
}`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Strings</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            In C, strings are arrays of characters terminated by null character ('\0').
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Declaration
char str[50];
char str[] = "Hello";  // Automatically adds '\\0'
char str[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};

// String input/output
char name[50];
printf("Enter name: ");
scanf("%s", name);  // Reads until space
fgets(name, 50, stdin);  // Safe method (includes spaces)

printf("Name: %s\\n", name);

// String length
#include <string.h>
int len = strlen(name);`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">String Functions (string.h)</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>strlen(str):</strong> Returns length of string</li>
            <li><strong>strcpy(dest, src):</strong> Copies string</li>
            <li><strong>strcat(dest, src):</strong> Concatenates strings</li>
            <li><strong>strcmp(str1, str2):</strong> Compares strings (returns 0 if equal)</li>
            <li><strong>strrev(str):</strong> Reverses string (non-standard)</li>
            <li><strong>strlwr(str):</strong> Converts to lowercase (non-standard)</li>
            <li><strong>strupr(str):</strong> Converts to uppercase (non-standard)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "functions",
    title: "Functions & Recursion",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Function Definition</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Function syntax
return_type function_name(parameters) {
    // function body
    return value;  // if return_type is not void
}

// Example: Function to add two numbers
int add(int a, int b) {
    int sum = a + b;
    return sum;
}

// Calling function
int result = add(5, 3);  // result = 8`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Function Prototypes</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Declare function before main() if definition comes after main().
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Prototype
int add(int a, int b);

int main() {
    int result = add(5, 3);
    return 0;
}

// Definition
int add(int a, int b) {
    return a + b;
}`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Types of Functions</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>Functions with arguments and return value:</strong> int add(int a, int b)</li>
            <li><strong>Functions with arguments but no return value:</strong> void print(int n)</li>
            <li><strong>Functions without arguments but with return value:</strong> int getNumber()</li>
            <li><strong>Functions without arguments and no return value:</strong> void display()</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Recursion</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            A function calling itself is called recursion. Must have a base case to stop.
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Factorial using recursion
int factorial(int n) {
    if (n == 0 || n == 1) {  // Base case
        return 1;
    }
    return n * factorial(n - 1);  // Recursive call
}

// Fibonacci using recursion
int fibonacci(int n) {
    if (n <= 1) {  // Base case
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
int fact = factorial(5);  // 120
int fib = fibonacci(6);   // 8`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Pass by Value vs Pass by Reference</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Pass by Value (default)
void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    // Original variables unchanged
}

// Pass by Reference (using pointers)
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
    // Original variables changed
}

int main() {
    int x = 10, y = 20;
    swap(&x, &y);  // Pass addresses
    // Now x = 20, y = 10
    return 0;
}`}</code></pre>
        </div>
      </div>
    ),
  },
  {
    id: "pointers",
    title: "Pointers",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Introduction to Pointers</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            A pointer is a variable that stores the memory address of another variable.
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Declaration
int *ptr;  // Pointer to integer
int num = 10;

// Assigning address
ptr = &num;  // ptr now holds address of num

// Accessing value
printf("Value: %d\\n", *ptr);  // Dereferencing: prints 10
printf("Address: %p\\n", ptr); // Prints address

// Changing value through pointer
*ptr = 20;  // num is now 20`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Pointer Operations</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`int arr[5] = {10, 20, 30, 40, 50};
int *ptr = arr;  // Points to first element

// Accessing array elements using pointer
printf("%d\\n", *ptr);      // 10 (value at address)
printf("%d\\n", *(ptr + 1)); // 20 (next element)
printf("%d\\n", ptr[2]);     // 30 (array notation)

// Pointer arithmetic
ptr++;        // Moves to next element
ptr += 2;     // Moves 2 elements forward
ptr--;        // Moves to previous element`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Pointers and Functions</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Function with pointer parameter
void increment(int *ptr) {
    (*ptr)++;  // Increment value at address
}

int main() {
    int num = 10;
    increment(&num);  // Pass address
    printf("%d\\n", num);  // Prints 11
    return 0;
}

// Returning pointer from function
int* getPointer(int *arr, int index) {
    return &arr[index];
}`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Pointer to Pointer</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`int num = 10;
int *ptr = &num;      // Pointer to int
int **pptr = &ptr;    // Pointer to pointer

printf("%d\\n", num);    // 10
printf("%d\\n", *ptr);   // 10
printf("%d\\n", **pptr); // 10`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Dynamic Memory Allocation</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Use pointers with malloc(), calloc(), realloc(), and free().
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`#include <stdlib.h>

// Allocate memory
int *ptr = (int*)malloc(5 * sizeof(int));

// Use memory
for (int i = 0; i < 5; i++) {
    ptr[i] = i * 10;
}

// Free memory (important!)
free(ptr);
ptr = NULL;  // Good practice`}</code></pre>
        </div>
      </div>
    ),
  },
  {
    id: "structures",
    title: "Structures, Unions & Enums",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Structures</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Structure is a user-defined data type that groups different data types together.
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Definition
struct Student {
    int roll_no;
    char name[50];
    float marks;
};

// Declaration
struct Student s1;
struct Student s2 = {101, "John", 85.5};

// Accessing members
s1.roll_no = 100;
strcpy(s1.name, "Alice");
s1.marks = 90.0;

printf("Roll: %d, Name: %s, Marks: %.2f\\n", 
       s1.roll_no, s1.name, s1.marks);

// Array of structures
struct Student students[10];`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Structure with Pointers</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`struct Student {
    int roll_no;
    char name[50];
    float marks;
};

struct Student s1 = {100, "John", 85.5};
struct Student *ptr = &s1;

// Accessing using pointer
printf("%d\\n", (*ptr).roll_no);  // Method 1
printf("%d\\n", ptr->roll_no);     // Method 2 (arrow operator)

ptr->marks = 90.0;  // Modify using pointer`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Unions</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Union is similar to structure, but all members share the same memory location.
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Definition
union Data {
    int i;
    float f;
    char c;
};

// Declaration
union Data d;

// Only one member can be used at a time
d.i = 10;
printf("%d\\n", d.i);

d.f = 3.14;
printf("%f\\n", d.f);  // d.i is now overwritten

// Size of union = size of largest member`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Enumerations (enum)</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Definition
enum Days {
    MONDAY,    // 0
    TUESDAY,   // 1
    WEDNESDAY, // 2
    THURSDAY,  // 3
    FRIDAY,    // 4
    SATURDAY,  // 5
    SUNDAY     // 6
};

// Declaration
enum Days today = MONDAY;

// Custom values
enum Status {
    ACTIVE = 1,
    INACTIVE = 0,
    PENDING = 2
};

enum Status user_status = ACTIVE;`}</code></pre>
        </div>
      </div>
    ),
  },
  {
    id: "files",
    title: "File Handling",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">File Operations</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            File handling in C uses FILE pointer and functions from stdio.h.
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`#include <stdio.h>

// Opening file
FILE *fp;
fp = fopen("file.txt", "r");  // Read mode
fp = fopen("file.txt", "w");  // Write mode
fp = fopen("file.txt", "a");  // Append mode
fp = fopen("file.txt", "r+"); // Read and write

// Check if file opened successfully
if (fp == NULL) {
    printf("Error opening file\\n");
    return 1;
}

// Always close file
fclose(fp);`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">File Modes</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>"r":</strong> Read mode (file must exist)</li>
            <li><strong>"w":</strong> Write mode (creates new or overwrites existing)</li>
            <li><strong>"a":</strong> Append mode (adds to end of file)</li>
            <li><strong>"r+":</strong> Read and write (file must exist)</li>
            <li><strong>"w+":</strong> Read and write (creates new or overwrites)</li>
            <li><strong>"a+":</strong> Read and append</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Reading from File</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`FILE *fp = fopen("data.txt", "r");
char ch;
char line[100];

// Read character by character
while ((ch = fgetc(fp)) != EOF) {
    printf("%c", ch);
}

// Read line by line
while (fgets(line, sizeof(line), fp) != NULL) {
    printf("%s", line);
}

// Read formatted data
int num;
fscanf(fp, "%d", &num);

fclose(fp);`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Writing to File</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`FILE *fp = fopen("output.txt", "w");

// Write character
fputc('A', fp);

// Write string
fputs("Hello World\\n", fp);

// Write formatted data
int num = 100;
fprintf(fp, "Number: %d\\n", num);

fclose(fp);`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">File Position Functions</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>fseek(fp, offset, position):</strong> Moves file pointer</li>
            <li><strong>ftell(fp):</strong> Returns current position</li>
            <li><strong>rewind(fp):</strong> Moves to beginning of file</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow mt-3">
            <code>{`// SEEK_SET: beginning, SEEK_CUR: current, SEEK_END: end
fseek(fp, 0, SEEK_SET);  // Move to beginning
fseek(fp, 10, SEEK_CUR); // Move 10 bytes forward
long pos = ftell(fp);     // Get current position
rewind(fp);               // Move to beginning`}</code></pre>
        </div>
      </div>
    ),
  },
  {
    id: "memory",
    title: "Dynamic Memory Allocation",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Memory Allocation Functions</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Dynamic memory allocation allows allocating memory at runtime. Requires <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">#include &lt;stdlib.h&gt;</code>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>malloc():</strong> Allocates memory (uninitialized)</li>
            <li><strong>calloc():</strong> Allocates memory (initialized to 0)</li>
            <li><strong>realloc():</strong> Reallocates memory (changes size)</li>
            <li><strong>free():</strong> Deallocates memory (prevents memory leak)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">malloc() - Memory Allocation</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`#include <stdlib.h>

// Allocate memory for 5 integers
int *ptr = (int*)malloc(5 * sizeof(int));

// Check if allocation successful
if (ptr == NULL) {
    printf("Memory allocation failed\\n");
    return 1;
}

// Use memory
for (int i = 0; i < 5; i++) {
    ptr[i] = i * 10;
}

// Free memory
free(ptr);
ptr = NULL;  // Good practice`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">calloc() - Contiguous Allocation</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Allocate and initialize to zero
int *ptr = (int*)calloc(5, sizeof(int));

// All elements are initialized to 0
for (int i = 0; i < 5; i++) {
    printf("%d ", ptr[i]);  // Prints: 0 0 0 0 0
}

free(ptr);`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">realloc() - Reallocation</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Initially allocate for 5 integers
int *ptr = (int*)malloc(5 * sizeof(int));

// Reallocate for 10 integers
ptr = (int*)realloc(ptr, 10 * sizeof(int));

// Old data is preserved, new space is uninitialized
// Now can use ptr[0] to ptr[9]

free(ptr);`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Dynamic Array Example</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`#include <stdlib.h>

int main() {
    int n;
    printf("Enter size: ");
    scanf("%d", &n);
    
    // Allocate memory dynamically
    int *arr = (int*)malloc(n * sizeof(int));
    
    // Input elements
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    // Process array
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    printf("Sum: %d\\n", sum);
    
    // Free memory
    free(arr);
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Memory Leak Prevention</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li>Always free allocated memory using free()</li>
            <li>Set pointer to NULL after freeing</li>
            <li>Check for NULL before using pointer</li>
            <li>Don't free the same memory twice</li>
            <li>Free memory before program exits</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "preprocessor",
    title: "Preprocessor & Macros",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Preprocessor Directives</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Preprocessor directives are processed before compilation. They start with #.
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>#include:</strong> Includes header files</li>
            <li><strong>#define:</strong> Defines macros</li>
            <li><strong>#undef:</strong> Undefines a macro</li>
            <li><strong>#ifdef / #ifndef:</strong> Conditional compilation</li>
            <li><strong>#if / #else / #endif:</strong> Conditional compilation</li>
            <li><strong>#pragma:</strong> Implementation-specific directives</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">#define - Macros</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Simple macro
#define PI 3.14159
#define MAX 100
#define NAME "CSM Study Zone"

// Use in code
float area = PI * radius * radius;
if (count > MAX) { ... }

// Macro with parameters
#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))

int result = SQUARE(5);  // 25
int max_val = MAX(10, 20);  // 20

// Multi-line macro
#define PRINT_SUM(a, b) \\
    printf("Sum: %d\\n", (a) + (b))`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">#include Directive</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// System header files (angle brackets)
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// User header files (quotes)
#include "myheader.h"
#include "utils.h"

// Difference:
// < > searches in system directories
// " " searches in current directory first, then system directories`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Conditional Compilation</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Check if macro is defined
#ifdef DEBUG
    printf("Debug mode\\n");
#endif

// Check if macro is NOT defined
#ifndef MAX_SIZE
    #define MAX_SIZE 100
#endif

// Conditional compilation
#if VERSION == 1
    // Code for version 1
#elif VERSION == 2
    // Code for version 2
#else
    // Default code
#endif`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Predefined Macros</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>__FILE__:</strong> Current source file name</li>
            <li><strong>__LINE__:</strong> Current line number</li>
            <li><strong>__DATE__:</strong> Compilation date</li>
            <li><strong>__TIME__:</strong> Compilation time</li>
            <li><strong>__STDC__:</strong> Defined if compiler follows ANSI C</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow mt-3">
            <code>{`printf("File: %s\\n", __FILE__);
printf("Line: %d\\n", __LINE__);
printf("Date: %s\\n", __DATE__);
printf("Time: %s\\n", __TIME__);`}</code></pre>
        </div>
      </div>
    ),
  },
  {
    id: "tips",
    title: "Tips & Common Errors",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Common Errors</h3>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Missing semicolon:</strong> Every statement must end with ;</li>
            <li><strong>Using = instead of ==:</strong> Use == for comparison, = for assignment</li>
            <li><strong>Missing & in scanf:</strong> Use & before variable name (except arrays/strings)</li>
            <li><strong>Array index out of bounds:</strong> Array indices start at 0, not 1</li>
            <li><strong>Uninitialized variables:</strong> Always initialize variables before use</li>
            <li><strong>Missing return statement:</strong> Functions with return type must return value</li>
            <li><strong>Memory leak:</strong> Always free dynamically allocated memory</li>
            <li><strong>Dangling pointer:</strong> Don't use pointer after freeing memory</li>
            <li><strong>String without null terminator:</strong> C strings must end with '\0'</li>
            <li><strong>Missing break in switch:</strong> Causes fall-through to next case</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Best Practices</h3>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Use meaningful variable names:</strong> age, salary instead of a, b</li>
            <li><strong>Add comments:</strong> Explain complex logic</li>
            <li><strong>Indent code properly:</strong> Improves readability</li>
            <li><strong>Check return values:</strong> Always check if functions succeed</li>
            <li><strong>Initialize pointers:</strong> Set to NULL if not immediately assigned</li>
            <li><strong>Use const:</strong> For values that shouldn't change</li>
            <li><strong>Validate input:</strong> Check user input before using</li>
            <li><strong>Free memory:</strong> Always free what you allocate</li>
            <li><strong>Use sizeof:</strong> Instead of hardcoding sizes</li>
            <li><strong>Test edge cases:</strong> Test with boundary values</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Debugging Tips</h3>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Use printf for debugging:</strong> Print variable values at different points</li>
            <li><strong>Check compiler warnings:</strong> Don't ignore warnings, fix them</li>
            <li><strong>Use debugger:</strong> Step through code line by line</li>
            <li><strong>Test incrementally:</strong> Test small parts before combining</li>
            <li><strong>Read error messages:</strong> They often point to the problem</li>
            <li><strong>Check logic flow:</strong> Trace through code manually</li>
            <li><strong>Use assertions:</strong> assert() to check assumptions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Code Style Tips</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto shadow">
            <code>{`// Good: Clear and readable
int calculateTotal(int price, int quantity) {
    int total = price * quantity;
    return total;
}

// Bad: Unclear
int calc(int p, int q) {
    int t = p * q;
    return t;
}

// Good: Proper spacing
if (age >= 18 && age <= 65) {
    // statements
}

// Bad: No spacing
if(age>=18&&age<=65){
    // statements
}`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Performance Tips</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li>Avoid unnecessary loops and nested loops</li>
            <li>Use appropriate data structures</li>
            <li>Minimize function calls in loops</li>
            <li>Use local variables instead of global when possible</li>
            <li>Prefer ++i over i++ when value is not used</li>
            <li>Use const for values that don't change</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function CNotesPage() {
  const [activeTab, setActiveTab] = useState("intro");

  const activeSection = cNotesSections.find((section) => section.id === activeTab) || cNotesSections[0];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Page Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Programming in C – Notes
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl leading-relaxed">
          Browse topic-wise notes, syntax, and examples for the C language.
        </p>
        <Link
          href="/programming/c-language"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base"
        >
          <span>←</span> Back to C Language
        </Link>
      </div>

      {/* Tab Navigation */}
      <div className="mb-4 sm:mb-6">
        <div className="overflow-x-auto scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="flex space-x-1 sm:space-x-2 min-w-max pb-2 border-b border-gray-200">
            {cNotesSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-t-lg font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${
                  activeTab === section.id
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6 md:p-8">
        <div className="space-y-4 sm:space-y-6">{activeSection.content}</div>
      </div>
    </main>
  );
}

