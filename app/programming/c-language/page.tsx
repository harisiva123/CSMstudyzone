import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "C Language – Complete Programming Basics Guide | CSM Study Zone",
  description: "Comprehensive guide to C programming language covering variables, data types, operators, control statements, loops, arrays, strings, functions, pointers, structures, file handling, and dynamic memory allocation with examples.",
  keywords: [
    "C language",
    "C programming",
    "programming basics",
    "C notes",
    "C tutorial",
    "C programming fundamentals",
    "B.Tech CSM",
    "C programming guide"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/programming/c-language",
  },
};

export default function CLanguagePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="prose prose-lg prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">
          C Language – Basics
        </h1>

        {/* Navigation Links */}
        <div className="not-prose mb-8 flex flex-wrap gap-3">
          <Link href="/programming/c-language/programming-tips" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium">
            Programming Tips
          </Link>
          <Link href="/programming/c-language/important-programs" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
            Important Programs
          </Link>
          <Link href="/programming/c-language/practice-questions" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium">
            Practice Questions
          </Link>
          <Link href="/programming/c-language/debugging" className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium">
            Debugging Guide
          </Link>
          <Link href="/programming/c-language/viva-questions" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors text-sm font-medium">
            Viva Questions
          </Link>
          <Link href="/programming/c-language/full-notes" className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-medium">
            Full Notes
          </Link>
        </div>

        {/* Introduction to C */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Introduction to C</h2>
          <p className="leading-relaxed text-slate-700">
            C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in 1972. 
            It is one of the most widely used programming languages and serves as the foundation for many other languages 
            including C++, Java, and Python. C is known for its efficiency, portability, and low-level access to memory.
          </p>
        </section>

        {/* Why C is Used */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Why C is Used</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><span className="font-semibold">System Programming:</span> Used in operating systems, device drivers, and embedded systems</li>
            <li><span className="font-semibold">Performance:</span> Provides direct access to memory and hardware resources</li>
            <li><span className="font-semibold">Portability:</span> Code can run on different platforms with minimal modifications</li>
            <li><span className="font-semibold">Foundation Language:</span> Understanding C helps learn other languages easily</li>
            <li><span className="font-semibold">Industry Standard:</span> Widely used in software development and system programming</li>
          </ul>
        </section>

        {/* Features of C */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Features of C</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Simple and efficient</li>
            <li>Portable across different platforms</li>
            <li>Rich library functions</li>
            <li>Supports modular programming</li>
            <li>Fast execution speed</li>
            <li>Low-level memory manipulation</li>
            <li>Structured programming approach</li>
          </ul>
        </section>

        {/* Structure of a C Program */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Structure of a C Program</h2>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`#include <stdio.h>   // Preprocessor directive

int main() {        // Main function
    printf("Hello, World!\\n");
    return 0;       // Return statement
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Components:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>Preprocessor Directives:</strong> #include, #define</li>
            <li><strong>Main Function:</strong> Entry point of the program</li>
            <li><strong>Statements:</strong> Instructions to be executed</li>
            <li><strong>Comments:</strong> // for single line, /* */ for multiple lines</li>
          </ul>
        </section>

        {/* Variables & Data Types */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Variables & Data Types</h2>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Basic Data Types:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>int:</strong> Integer values (e.g., -10, 0, 100)</li>
            <li><strong>float:</strong> Floating-point numbers (e.g., 3.14, -2.5)</li>
            <li><strong>double:</strong> Double precision floating-point</li>
            <li><strong>char:</strong> Single character (e.g., 'A', 'z', '5')</li>
            <li><strong>void:</strong> No value</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Variable Declaration:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`int age;
float salary;
char grade;
int num1, num2, sum;`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Variable Initialization:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`int age = 25;
float salary = 50000.50;
char grade = 'A';`}</code>
          </pre>
        </section>

        {/* Input/Output */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Input/Output</h2>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Output Function - printf():</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`printf("Hello, World!\\n");
printf("Age: %d\\n", age);
printf("Salary: %.2f\\n", salary);
printf("Grade: %c\\n", grade);`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Format Specifiers:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>%d:</strong> Integer</li>
            <li><strong>%f:</strong> Float</li>
            <li><strong>%c:</strong> Character</li>
            <li><strong>%s:</strong> String</li>
            <li><strong>%lf:</strong> Double</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Input Function - scanf():</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`int num;
scanf("%d", &num);

float value;
scanf("%f", &value);

char ch;
scanf(" %c", &ch);`}</code>
          </pre>
        </section>

        {/* Operators */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Operators</h2>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Arithmetic Operators:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>+ :</strong> Addition</li>
            <li><strong>- :</strong> Subtraction</li>
            <li><strong>* :</strong> Multiplication</li>
            <li><strong>/ :</strong> Division</li>
            <li><strong>% :</strong> Modulus (remainder)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Relational Operators:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>== :</strong> Equal to</li>
            <li><strong>!= :</strong> Not equal to</li>
            <li><strong>&lt; :</strong> Less than</li>
            <li><strong>&gt; :</strong> Greater than</li>
            <li><strong>&lt;= :</strong> Less than or equal to</li>
            <li><strong>&gt;= :</strong> Greater than or equal to</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Logical Operators:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>&& :</strong> Logical AND</li>
            <li><strong>|| :</strong> Logical OR</li>
            <li><strong>! :</strong> Logical NOT</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Assignment Operators:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>= :</strong> Simple assignment</li>
            <li><strong>+= :</strong> Add and assign</li>
            <li><strong>-= :</strong> Subtract and assign</li>
            <li><strong>*= :</strong> Multiply and assign</li>
            <li><strong>/= :</strong> Divide and assign</li>
          </ul>
        </section>

        {/* Conditional Statements */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Conditional Statements</h2>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">if Statement:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`if (condition) {
    // statements
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">if-else Statement:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`if (condition) {
    // statements if true
} else {
    // statements if false
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">if-else if-else Statement:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`if (condition1) {
    // statements
} else if (condition2) {
    // statements
} else {
    // statements
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Switch Statement:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`switch (expression) {
    case value1:
        // statements
        break;
    case value2:
        // statements
        break;
    default:
        // statements
}`}</code>
          </pre>
        </section>

        {/* Loops */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Looping Constructs</h2>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">for Loop:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`for (initialization; condition; increment/decrement) {
    // statements
}

// Example:
for (int i = 0; i < 10; i++) {
    printf("%d ", i);
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">while Loop:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`while (condition) {
    // statements
}

// Example:
int i = 0;
while (i < 10) {
    printf("%d ", i);
    i++;
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">do-while Loop:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`do {
    // statements
} while (condition);

// Example:
int i = 0;
do {
    printf("%d ", i);
    i++;
} while (i < 10);`}</code>
          </pre>
        </section>

        {/* Arrays */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Arrays</h2>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Array Declaration:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`int arr[5];           // Declaration
int arr[5] = {1, 2, 3, 4, 5};  // Initialization`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Array Access:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`arr[0] = 10;        // First element
arr[4] = 50;        // Fifth element
printf("%d", arr[2]);  // Print third element`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Multi-dimensional Arrays:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`int matrix[3][3];    // 3x3 matrix
matrix[0][0] = 1;   // Access element`}</code>
          </pre>
        </section>

        {/* Strings */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Strings</h2>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">String Declaration:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`char str[50];                    // Character array
char str[] = "Hello";           // String literal
char str[10] = {'H', 'e', 'l', 'l', 'o', '\\0'};`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">String Functions:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>strlen():</strong> Calculate string length</li>
            <li><strong>strcpy():</strong> Copy string</li>
            <li><strong>strcat():</strong> Concatenate strings</li>
            <li><strong>strcmp():</strong> Compare strings</li>
          </ul>

          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`#include <string.h>

char str1[20] = "Hello";
char str2[20] = "World";
strcpy(str1, str2);  // Copy
strcat(str1, str2);  // Concatenate
int result = strcmp(str1, str2);  // Compare`}</code>
          </pre>
        </section>

        {/* Functions */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Functions</h2>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Function Syntax:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`return_type function_name(parameters) {
    // function body
    return value;
}

// Example:
int add(int a, int b) {
    return a + b;
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Function Types:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>Built-in Functions:</strong> printf(), scanf(), strlen()</li>
            <li><strong>User-defined Functions:</strong> Created by programmer</li>
            <li><strong>Functions with return value</strong></li>
            <li><strong>Functions without return value (void)</strong></li>
          </ul>
        </section>

        {/* Pointers */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Pointers</h2>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Pointer Declaration:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`int *ptr;        // Pointer to integer
int num = 10;
ptr = &num;      // Store address of num

printf("%d", *ptr);  // Dereference: prints 10
printf("%p", ptr);   // Prints address`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Pointer Operations:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>&amp;:</strong> Address of operator</li>
            <li><strong>*:</strong> Dereference operator</li>
            <li>Pointer arithmetic (+, -)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Pointer to Array:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`int arr[5] = {1, 2, 3, 4, 5};
int *ptr = arr;  // Points to first element
printf("%d", *(ptr + 2));  // Access third element`}</code>
          </pre>
        </section>

        {/* Structures */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">Structures</h2>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Structure Definition:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`struct Student {
    int roll_no;
    char name[50];
    float marks;
};

// Structure variable declaration
struct Student s1;
s1.roll_no = 101;
s1.marks = 85.5;
strcpy(s1.name, "John");`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Structure with Pointers:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`struct Student *ptr;
ptr = &s1;
printf("%d", ptr->roll_no);  // Access using arrow operator
printf("%d", (*ptr).roll_no);  // Alternative method`}</code>
          </pre>
        </section>

        {/* File Handling */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-slate-800">File Handling</h2>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">File Operations:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>fopen():</strong> Open a file</li>
            <li><strong>fclose():</strong> Close a file</li>
            <li><strong>fprintf():</strong> Write formatted data to file</li>
            <li><strong>fscanf():</strong> Read formatted data from file</li>
            <li><strong>fread()/fwrite():</strong> Binary file operations</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">Example:</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
            <code>{`#include <stdio.h>

FILE *fp;
fp = fopen("file.txt", "w");  // Open for writing
if (fp != NULL) {
    fprintf(fp, "Hello, World!");
    fclose(fp);
}

fp = fopen("file.txt", "r");  // Open for reading
char buffer[100];
if (fp != NULL) {
    fscanf(fp, "%s", buffer);
    printf("%s", buffer);
    fclose(fp);
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-700">File Modes:</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>"r":</strong> Read mode</li>
            <li><strong>"w":</strong> Write mode (overwrites existing)</li>
            <li><strong>"a":</strong> Append mode</li>
            <li><strong>"r+":</strong> Read and write</li>
            <li><strong>"rb":</strong> Read binary mode</li>
            <li><strong>"wb":</strong> Write binary mode</li>
          </ul>
        </section>

        {/* Key Takeaways */}
        <section className="mt-10">
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
            <h2 className="text-xl font-semibold mb-2 text-indigo-900">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 text-indigo-950">
              <li>C is a structured, general-purpose programming language with high performance and low-level memory access capabilities.</li>
              <li>Understanding C fundamentals helps in learning many other programming languages like C++, Java, and Python.</li>
              <li>Core building blocks include variables, data types, operators, control flow statements, loops, arrays, and functions.</li>
              <li>Pointers, structures, and file handling make C powerful for system-level programming and memory management.</li>
              <li>Practice with simple programs and gradually move to complex concepts to master C programming effectively.</li>
              <li>C's portability allows code to run across different platforms with minimal modifications, making it ideal for system programming.</li>
            </ul>
          </div>
        </section>

        {/* Practice Tip */}
        <div className="not-prose mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-blue-800 font-semibold mb-2">💡 Practice Tip</p>
          <p className="text-blue-700">
            Start with simple programs and gradually move to complex concepts. Practice regularly by writing code 
            and solving problems. Understanding the fundamentals is crucial before moving to advanced topics.
          </p>
        </div>

        {/* Practice CTA */}
        <div className="not-prose mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <p className="text-gray-800 font-semibold mb-2">🎯 Want to practice these concepts?</p>
          <p className="text-gray-700 mb-4">
            Try our C Programming Practice Problems with lab-style questions, sample I/O, hints, and scoring.
          </p>
          <Link
            href="/practice?language=C"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Practice C Programming
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Summary Table */}
        <section className="not-prose mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">C Programming Topics Summary</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Topic</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Key Concepts</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Difficulty</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Basics & Data Types</td>
                  <td className="border border-gray-300 px-4 py-3">Variables, constants, int, float, char, double, void</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Operators</td>
                  <td className="border border-gray-300 px-4 py-3">Arithmetic, relational, logical, assignment, bitwise</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Control Statements</td>
                  <td className="border border-gray-300 px-4 py-3">if-else, switch, loops (for, while, do-while)</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Arrays & Strings</td>
                  <td className="border border-gray-300 px-4 py-3">1D/2D arrays, string functions, character arrays</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Functions</td>
                  <td className="border border-gray-300 px-4 py-3">Function definition, prototypes, recursion, call by value/reference</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Pointers</td>
                  <td className="border border-gray-300 px-4 py-3">Pointer declaration, arithmetic, arrays and pointers, dynamic memory</td>
                  <td className="border border-gray-300 px-4 py-3">Advanced</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Structures</td>
                  <td className="border border-gray-300 px-4 py-3">Structure definition, members, pointers to structures, unions</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">File Handling</td>
                  <td className="border border-gray-300 px-4 py-3">fopen, fclose, fprintf, fscanf, file modes, binary files</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
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
              <h3 className="font-semibold text-gray-900 mb-2">Q1: Why should I learn C programming?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                C is fundamental to understanding how computers work. It's used in operating systems, embedded systems, and system programming. 
                Learning C provides a strong foundation for other languages like C++, Java, and Python. It teaches memory management, pointers, 
                and low-level concepts that are valuable in computer science.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: What is the best way to learn C programming?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Start with basics (variables, data types, operators), then move to control statements and loops. Practice writing programs for 
                each concept. Understand arrays and strings before moving to functions. Master functions before learning pointers. Practice regularly, 
                write code yourself (don't just read), and solve problems. Build small projects to apply concepts.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What are the most important C concepts to master?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Essential concepts: variables and data types, control statements and loops, arrays and strings, functions, pointers (most important 
                and challenging), structures, and file handling. Pointers are crucial as they enable dynamic memory allocation and are fundamental 
                to understanding how C works. Master these before moving to advanced topics.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: How difficult is C programming for beginners?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                C has a moderate learning curve. Basics (variables, operators, loops) are relatively easy. Arrays and functions require practice. 
                Pointers are the most challenging concept but essential. With regular practice and understanding concepts step-by-step, C is 
                manageable. Start simple, practice regularly, and don't rush. Understanding fundamentals is more important than speed.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What tools do I need to start C programming?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                You need a C compiler (GCC for Linux/Mac, MinGW for Windows, or Visual Studio), a text editor (VS Code, Sublime, or any editor), 
                and a terminal/command prompt. Many IDEs (Integrated Development Environments) like Code::Blocks, Dev-C++, or Visual Studio Code 
                provide everything in one package. Start with simple setup and gradually explore advanced features.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: How is C different from other programming languages?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                C is a procedural language (functions-based), while languages like Java/Python are object-oriented. C provides direct memory access 
                through pointers, manual memory management (malloc/free), and low-level control. It's compiled (not interpreted), fast, and close 
                to hardware. C is more complex but provides more control and efficiency than higher-level languages.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What are common mistakes beginners make in C?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Common mistakes: forgetting semicolons, using = instead of == for comparison, missing & in scanf, array index starting from 1 
                instead of 0, not initializing variables, memory leaks (not freeing malloc), using freed memory, null pointer dereference, and 
                buffer overflow. Always compile with warnings enabled and fix them. Practice defensive programming.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: How long does it take to learn C programming?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Time varies by individual. Basics (2-4 weeks), intermediate concepts (1-2 months), advanced topics like pointers (1-2 months), 
                mastery (6+ months with regular practice). Consistent daily practice is more effective than occasional long sessions. Focus on 
                understanding concepts deeply rather than rushing through topics. Building projects helps solidify learning.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="not-prose mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            C programming is a fundamental skill that opens doors to understanding computer systems, memory management, and low-level programming. 
            While it may seem challenging initially, especially concepts like pointers, mastering C provides a strong foundation for learning other 
            programming languages and understanding how computers work at a deeper level.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The key to learning C is consistent practice, understanding concepts deeply, and building projects. Start with simple programs, gradually 
            increase complexity, and don't hesitate to experiment. Use the resources on this site - notes, lab programs, practice questions, and 
            debugging guides - to support your learning journey. Remember, every expert was once a beginner.
          </p>
        </section>

        {/* Internal Linking */}
        <section className="not-prose mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/programming/c-language/full-notes" className="text-blue-600 hover:text-blue-700 underline">Full C Language Notes</Link></li>
              <li><Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 underline">Important C Programs</Link></li>
              <li><Link href="/programming/c-language/programming-tips" className="text-blue-600 hover:text-blue-700 underline">C Programming Tips</Link></li>
              <li><Link href="/programming/c-language/viva-questions" className="text-blue-600 hover:text-blue-700 underline">C Viva Questions</Link></li>
              <li><Link href="/programming/c-language/debugging" className="text-blue-600 hover:text-blue-700 underline">C Debugging Guide</Link></li>
              <li><Link href="/labs/c-programming" className="text-blue-600 hover:text-blue-700 underline">C Programming Lab Manual</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
      </div>
    </main>
  );
}
