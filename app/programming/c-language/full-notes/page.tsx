import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Full C Language Notes – Complete Unit-wise Study Guide | CSM Study Zone",
  description: "Comprehensive unit-wise C programming notes covering basics, tokens, data types, operators, control statements, loops, arrays, strings, functions, pointers, structures, unions, file handling, dynamic memory, and command line arguments with examples.",
  keywords: [
    "C language notes",
    "C programming notes",
    "unit-wise C notes",
    "C complete notes",
    "C syllabus notes",
    "B.Tech CSM C notes",
    "C study material",
    "C programming guide"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/programming/c-language/full-notes",
  },
};

export default function FullNotesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 prose prose-lg prose-slate">
      <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Full C Language Notes – Unit-wise
      </h1>

      {/* Navigation Links */}
      <div className="not-prose mb-8 flex flex-wrap gap-3">
        <Link href="/programming/c-language" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium">
          ← Back to Basics
        </Link>
        <Link href="/programming/c-language/viva-questions" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors text-sm font-medium">
          Viva Questions
        </Link>
        <Link href="/programming/c-language/practice-questions" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium">
          Practice Questions
        </Link>
      </div>

      <h2>UNIT 1: Basics of C Programming</h2>
      
      <h3>1.1 Introduction to C</h3>
      <p>
        C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Laboratories in 1972. 
        It is designed for system programming and is widely used in operating systems, embedded systems, and application development.
      </p>

      <h4>History of C:</h4>
      <ul>
        <li>Developed in 1972 by Dennis Ritchie</li>
        <li>Based on BCPL and B languages</li>
        <li>ANSI C standardized in 1989 (C89/C90)</li>
        <li>Updated standards: C99 (1999), C11 (2011), C17 (2017)</li>
      </ul>

      <h3>1.2 Features of C</h3>
      <ul>
        <li><strong>Simple:</strong> Easy to learn and understand</li>
        <li><strong>Portable:</strong> Code runs on different platforms with minimal changes</li>
        <li><strong>Efficient:</strong> Fast execution speed</li>
        <li><strong>Low-level Access:</strong> Direct memory manipulation</li>
        <li><strong>Rich Library:</strong> Large collection of built-in functions</li>
        <li><strong>Modular:</strong> Supports functions and code reusability</li>
        <li><strong>Structured:</strong> Supports structured programming</li>
      </ul>

      <h3>1.3 Structure of a C Program</h3>
      <pre><code>{`// Preprocessor directives
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

      <h3>1.4 Tokens in C</h3>
      <p>Tokens are the smallest units of a C program.</p>
      
      <h4>Types of Tokens:</h4>
      <ol>
        <li><strong>Keywords:</strong> Reserved words (int, char, if, else, for, while, return, etc.)</li>
        <li><strong>Identifiers:</strong> Names given to variables, functions, arrays (e.g., count, sum, calculate)</li>
        <li><strong>Constants:</strong> Fixed values (integer, float, character, string)</li>
        <li><strong>Strings:</strong> Sequence of characters in double quotes ("Hello")</li>
        <li><strong>Operators:</strong> Symbols for operations (+, -, *, /, %, ==, &amp;&amp;, etc.)</li>
        <li><strong>Special Symbols:</strong> Punctuation marks ({}, [], (), ;, ,, etc.)</li>
      </ol>

      <h3>1.5 Data Types in C</h3>
      
      <h4>Basic Data Types:</h4>
      <ul>
        <li><strong>int:</strong> Integer values (-32768 to 32767 or larger)</li>
        <li><strong>char:</strong> Single character ('A', 'z', '5')</li>
        <li><strong>float:</strong> Single precision floating-point (6 decimal places)</li>
        <li><strong>double:</strong> Double precision floating-point (15 decimal places)</li>
        <li><strong>void:</strong> No value (used with functions, pointers)</li>
      </ul>

      <h4>Derived Data Types:</h4>
      <ul>
        <li><strong>Array:</strong> Collection of similar elements</li>
        <li><strong>Pointer:</strong> Stores memory address</li>
        <li><strong>Structure:</strong> Groups different data types</li>
        <li><strong>Union:</strong> Shares memory for members</li>
        <li><strong>Enum:</strong> User-defined data type for constants</li>
      </ul>

      <h4>Type Modifiers:</h4>
      <ul>
        <li>signed / unsigned (for int and char)</li>
        <li>short / long (for int and double)</li>
        <li>const (constant, cannot be modified)</li>
        <li>volatile (may change unexpectedly)</li>
      </ul>

      <h3>1.6 Variables</h3>
      <p>Variable is a named memory location that stores data value.</p>

      <h4>Variable Declaration:</h4>
      <pre><code>{`int age;
float salary;
char grade;
double pi;`}</code></pre>

      <h4>Variable Initialization:</h4>
      <pre><code>{`int age = 25;
float salary = 50000.50;
char grade = 'A';
double pi = 3.14159;`}</code></pre>

      <h4>Rules for Identifiers:</h4>
      <ul>
        <li>Must start with letter or underscore</li>
        <li>Can contain letters, digits, underscore</li>
        <li>Cannot be a keyword</li>
        <li>Case sensitive</li>
        <li>No special characters except underscore</li>
      </ul>

      <h3>1.7 Constants</h3>
      <h4>Types of Constants:</h4>
      <ul>
        <li><strong>Integer:</strong> 10, -5, 0</li>
        <li><strong>Float:</strong> 3.14, -2.5, 0.0</li>
        <li><strong>Character:</strong> 'A', 'z', '5'</li>
        <li><strong>String:</strong> "Hello", "C Programming"</li>
      </ul>

      <h4>Defining Constants:</h4>
      <pre><code>{`// Using #define
#define PI 3.14159
#define MAX_SIZE 100

// Using const keyword
const float PI = 3.14159;
const int MAX_SIZE = 100;`}</code></pre>

      <h3>1.8 Operators</h3>
      
      <h4>Arithmetic Operators:</h4>
      <ul>
        <li>+ (Addition), - (Subtraction), * (Multiplication)</li>
        <li>/ (Division), % (Modulus - remainder)</li>
      </ul>

      <h4>Relational Operators:</h4>
      <ul>
        <li>&lt; (Less than), &gt; (Greater than), &lt;= (Less than or equal)</li>
        <li>&gt;= (Greater than or equal), == (Equal to), != (Not equal)</li>
      </ul>

      <h4>Logical Operators:</h4>
      <ul>
        <li>&amp;&amp; (Logical AND), || (Logical OR), ! (Logical NOT)</li>
      </ul>

      <h4>Assignment Operators:</h4>
      <ul>
        <li>= (Simple assignment), +=, -=, *=, /=, %= (Compound assignment)</li>
      </ul>

      <h4>Increment/Decrement Operators:</h4>
      <ul>
        <li>++ (Increment), -- (Decrement)</li>
        <li>Pre-increment (++x): Increments before use</li>
        <li>Post-increment (x++): Increments after use</li>
      </ul>

      <h4>Bitwise Operators:</h4>
      <ul>
        <li>&amp; (AND), | (OR), ^ (XOR), ~ (NOT)</li>
        <li>&lt;&lt; (Left shift), &gt;&gt; (Right shift)</li>
      </ul>

      <h4>Special Operators:</h4>
      <ul>
        <li>sizeof: Returns size of data type or variable</li>
        <li>&amp;: Address of operator</li>
        <li>*: Pointer/dereference operator</li>
        <li>? : : Ternary/conditional operator</li>
      </ul>

      <h2>UNIT 2: Control Statements & Loops</h2>
      
      <h3>2.1 Conditional Statements</h3>
      
      <h4>if Statement:</h4>
      <pre><code>{`if (condition) {
    // statements executed if condition is true
}`}</code></pre>

      <h4>if-else Statement:</h4>
      <pre><code>{`if (condition) {
    // statements if condition is true
} else {
    // statements if condition is false
}`}</code></pre>

      <h4>if-else if-else Statement:</h4>
      <pre><code>{`if (condition1) {
    // statements
} else if (condition2) {
    // statements
} else if (condition3) {
    // statements
} else {
    // statements
}`}</code></pre>

      <h4>Nested if:</h4>
      <pre><code>{`if (condition1) {
    if (condition2) {
        // statements
    }
}`}</code></pre>

      <h4>Switch Statement:</h4>
      <pre><code>{`switch (expression) {
    case constant1:
        // statements
        break;
    case constant2:
        // statements
        break;
    default:
        // statements
}`}</code></pre>

      <h3>2.2 Loops</h3>
      
      <h4>for Loop:</h4>
      <pre><code>{`for (initialization; condition; increment/decrement) {
    // statements
}

// Example:
for (int i = 0; i < 10; i++) {
    printf("%d ", i);
}`}</code></pre>

      <h4>while Loop:</h4>
      <pre><code>{`while (condition) {
    // statements
}

// Example:
int i = 0;
while (i < 10) {
    printf("%d ", i);
    i++;
}`}</code></pre>

      <h4>do-while Loop:</h4>
      <pre><code>{`do {
    // statements
} while (condition);

// Example:
int i = 0;
do {
    printf("%d ", i);
    i++;
} while (i < 10);`}</code></pre>

      <h4>Nested Loops:</h4>
      <pre><code>{`for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d %d\\n", i, j);
    }
}`}</code></pre>

      <h3>2.3 Loop Control Statements</h3>
      
      <h4>break Statement:</h4>
      <p>Exits the loop immediately when encountered.</p>
      <pre><code>{`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;  // Exits loop at i=5
    }
    printf("%d ", i);
}`}</code></pre>

      <h4>continue Statement:</h4>
      <p>Skips current iteration and continues with next iteration.</p>
      <pre><code>{`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;  // Skips printing 5
    }
    printf("%d ", i);
}`}</code></pre>

      <h4>goto Statement:</h4>
      <p>Jumps to labeled statement (generally avoided).</p>
      <pre><code>{`label:
    // statements
    goto label;`}</code></pre>

      <h2>UNIT 3: Arrays, Strings & Functions</h2>
      
      <h3>3.1 Arrays</h3>
      <p>Array is a collection of similar data elements stored in contiguous memory locations.</p>

      <h4>Array Declaration:</h4>
      <pre><code>{`data_type array_name[size];

// Examples:
int arr[10];           // Array of 10 integers
float marks[5];        // Array of 5 floats
char name[20];         // Array of 20 characters`}</code></pre>

      <h4>Array Initialization:</h4>
      <pre><code>{`int arr[5] = {1, 2, 3, 4, 5};
int arr[] = {1, 2, 3};  // Size automatically determined
int arr[5] = {1, 2};    // Remaining elements initialized to 0`}</code></pre>

      <h4>Accessing Array Elements:</h4>
      <pre><code>{`arr[0] = 10;        // First element
arr[4] = 50;        // Fifth element
printf("%d", arr[2]);  // Print third element`}</code></pre>

      <h4>Multi-dimensional Arrays:</h4>
      <pre><code>{`// 2D Array (Matrix)
int matrix[3][3];  // 3x3 matrix
matrix[0][0] = 1;  // First row, first column

// Initialization
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};`}</code></pre>

      <h3>3.2 Strings</h3>
      <p>String is an array of characters terminated by null character '\\0'.</p>

      <h4>String Declaration:</h4>
      <pre><code>{`char str[50];                    // Character array
char str[] = "Hello";           // String literal
char str[10] = {'H', 'e', 'l', 'l', 'o', '\\0'};`}</code></pre>

      <h4>String Functions:</h4>
      <ul>
        <li><strong>strlen():</strong> Returns length of string</li>
        <li><strong>strcpy():</strong> Copies one string to another</li>
        <li><strong>strcat():</strong> Concatenates two strings</li>
        <li><strong>strcmp():</strong> Compares two strings</li>
        <li><strong>strstr():</strong> Finds substring in string</li>
        <li><strong>strrev():</strong> Reverses string (non-standard)</li>
      </ul>

      <pre><code>{`#include <string.h>

char str1[20] = "Hello";
char str2[20] = "World";
int len = strlen(str1);
strcpy(str1, str2);      // Copy
strcat(str1, str2);      // Concatenate
int result = strcmp(str1, str2);  // Compare`}</code></pre>

      <h3>3.3 Functions</h3>
      <p>Function is a block of code performing specific task. Promotes code reusability and modularity.</p>

      <h4>Function Syntax:</h4>
      <pre><code>{`return_type function_name(parameters) {
    // function body
    return value;
}`}</code></pre>

      <h4>Types of Functions:</h4>
      <ul>
        <li><strong>Built-in Functions:</strong> printf(), scanf(), strlen(), etc.</li>
        <li><strong>User-defined Functions:</strong> Created by programmer</li>
        <li><strong>Functions with return value</strong></li>
        <li><strong>Functions without return value (void)</strong></li>
      </ul>

      <h4>Function Prototype:</h4>
      <pre><code>{`// Function declaration (prototype)
int add(int a, int b);

int main() {
    int result = add(5, 3);  // Function call
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`}</code></pre>

      <h4>Function Categories:</h4>
      <ul>
        <li><strong>Functions with arguments and return value</strong></li>
        <li><strong>Functions with arguments but no return value</strong></li>
        <li><strong>Functions without arguments but with return value</strong></li>
        <li><strong>Functions without arguments and return value</strong></li>
      </ul>

      <h4>Recursion:</h4>
      <p>Function calling itself. Must have base case to terminate.</p>
      <pre><code>{`// Factorial using recursion
long long factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive call
}`}</code></pre>

      <h2>UNIT 4: Pointers, Structures & Unions</h2>
      
      <h3>4.1 Pointers</h3>
      <p>Pointer is a variable that stores memory address of another variable.</p>

      <h4>Pointer Declaration:</h4>
      <pre><code>{`data_type *pointer_name;

// Examples:
int *ptr;        // Pointer to integer
float *fptr;     // Pointer to float
char *cptr;      // Pointer to character`}</code></pre>

      <h4>Pointer Operations:</h4>
      <pre><code>{`int num = 10;
int *ptr = &num;  // Store address of num

printf("%d", *ptr);  // Dereference: prints 10
printf("%p", ptr);   // Prints address of num
printf("%d", num);   // Prints 10`}</code></pre>

      <h4>Pointer Arithmetic:</h4>
      <pre><code>{`int arr[5] = {1, 2, 3, 4, 5};
int *ptr = arr;  // Points to first element

ptr++;           // Points to second element
printf("%d", *ptr);  // Prints 2
printf("%d", *(ptr + 2));  // Prints 4`}</code></pre>

      <h4>Pointers and Arrays:</h4>
      <pre><code>{`int arr[5] = {1, 2, 3, 4, 5};
int *ptr = arr;

// arr[i] is equivalent to *(arr + i)
printf("%d", arr[2]);     // Method 1
printf("%d", *(arr + 2)); // Method 2
printf("%d", ptr[2]);     // Method 3
printf("%d", *(ptr + 2)); // Method 4`}</code></pre>

      <h4>Pointers to Pointers:</h4>
      <pre><code>{`int num = 10;
int *ptr = &num;
int **pptr = &ptr;  // Pointer to pointer

printf("%d", **pptr);  // Prints 10`}</code></pre>

      <h4>NULL Pointer:</h4>
      <pre><code>{`int *ptr = NULL;  // Pointer pointing to nothing

if (ptr != NULL) {
    *ptr = 10;  // Safe to use
}`}</code></pre>

      <h3>4.2 Structures</h3>
      <p>Structure groups related data of different types together.</p>

      <h4>Structure Definition:</h4>
      <pre><code>{`struct structure_name {
    data_type member1;
    data_type member2;
    // ...
};

// Example:
struct Student {
    int roll_no;
    char name[50];
    float marks;
};`}</code></pre>

      <h4>Structure Variable Declaration:</h4>
      <pre><code>{`struct Student s1;  // Variable declaration
s1.roll_no = 101;
s1.marks = 85.5;
strcpy(s1.name, "John");

// Initialization
struct Student s2 = {102, "Jane", 90.0};`}</code></pre>

      <h4>Accessing Structure Members:</h4>
      <pre><code>{`// Using dot operator
s1.roll_no = 101;
printf("%d", s1.roll_no);

// Using pointer (arrow operator)
struct Student *ptr = &s1;
ptr->roll_no = 101;
printf("%d", ptr->roll_no);  // Arrow operator
printf("%d", (*ptr).roll_no);  // Alternative method`}</code></pre>

      <h4>Array of Structures:</h4>
      <pre><code>{`struct Student students[10];

for (int i = 0; i < 10; i++) {
    students[i].roll_no = i + 1;
    scanf("%s", students[i].name);
    scanf("%f", &students[i].marks);
}`}</code></pre>

      <h4>Nested Structures:</h4>
      <pre><code>{`struct Date {
    int day;
    int month;
    int year;
};

struct Employee {
    int id;
    char name[50];
    struct Date dob;  // Nested structure
};`}</code></pre>

      <h4>typedef:</h4>
      <pre><code>{`typedef struct Student Student;

Student s1;  // Now use Student instead of struct Student`}</code></pre>

      <h3>4.3 Unions</h3>
      <p>Union is similar to structure but shares memory for all members. Only one member active at a time.</p>

      <h4>Union Definition:</h4>
      <pre><code>{`union union_name {
    data_type member1;
    data_type member2;
    // ...
};

// Example:
union Data {
    int i;
    float f;
    char c;
};`}</code></pre>

      <h4>Difference between Structure and Union:</h4>
      <ul>
        <li><strong>Memory:</strong> Structure allocates separate memory for each member. Union shares memory (size = largest member).</li>
        <li><strong>Access:</strong> All structure members can be accessed. Only one union member active at a time.</li>
        <li><strong>Size:</strong> Structure size = sum of member sizes (with padding). Union size = size of largest member.</li>
      </ul>

      <h2>UNIT 5: File Handling & Advanced Topics</h2>
      
      <h3>5.1 File Handling</h3>
      <p>File handling allows programs to read from and write to files.</p>

      <h4>File Operations:</h4>
      <ul>
        <li><strong>fopen():</strong> Opens a file</li>
        <li><strong>fclose():</strong> Closes a file</li>
        <li><strong>fprintf():</strong> Writes formatted data to file</li>
        <li><strong>fscanf():</strong> Reads formatted data from file</li>
        <li><strong>fgets():</strong> Reads string from file</li>
        <li><strong>fputs():</strong> Writes string to file</li>
        <li><strong>fread():</strong> Reads binary data</li>
        <li><strong>fwrite():</strong> Writes binary data</li>
      </ul>

      <h4>File Modes:</h4>
      <ul>
        <li><strong>"r":</strong> Read mode (file must exist)</li>
        <li><strong>"w":</strong> Write mode (creates new file or overwrites existing)</li>
        <li><strong>"a":</strong> Append mode (appends to end of file)</li>
        <li><strong>"r+":</strong> Read and write</li>
        <li><strong>"rb":</strong> Read binary mode</li>
        <li><strong>"wb":</strong> Write binary mode</li>
        <li><strong>"ab":</strong> Append binary mode</li>
      </ul>

      <h4>Writing to File:</h4>
      <pre><code>{`FILE *fp;
fp = fopen("data.txt", "w");

if (fp == NULL) {
    printf("Error opening file!\\n");
    return 1;
}

fprintf(fp, "Hello, World!\\n");
fprintf(fp, "Number: %d\\n", 42);
fclose(fp);`}</code></pre>

      <h4>Reading from File:</h4>
      <pre><code>{`FILE *fp;
char buffer[100];

fp = fopen("data.txt", "r");
if (fp == NULL) {
    printf("Error opening file!\\n");
    return 1;
}

while (fgets(buffer, sizeof(buffer), fp) != NULL) {
    printf("%s", buffer);
}
fclose(fp);`}</code></pre>

      <h3>5.2 Dynamic Memory Allocation</h3>
      <p>Allocating memory at runtime using malloc(), calloc(), realloc(), and freeing with free().</p>

      <h4>malloc():</h4>
      <pre><code>{`int *ptr = (int *)malloc(sizeof(int) * 10);
if (ptr == NULL) {
    printf("Memory allocation failed!\\n");
    exit(1);
}
// Use ptr
free(ptr);  // Free memory when done
ptr = NULL;  // Set to NULL`}</code></pre>

      <h4>calloc():</h4>
      <pre><code>{`int *ptr = (int *)calloc(10, sizeof(int));  // Initialized to 0
// Use ptr
free(ptr);
ptr = NULL;`}</code></pre>

      <h4>realloc():</h4>
      <pre><code>{`ptr = realloc(ptr, sizeof(int) * 20);  // Resize to 20 elements
// Use ptr
free(ptr);
ptr = NULL;`}</code></pre>

      <h3>5.3 Command Line Arguments</h3>
      <p>Arguments passed to main function from command line.</p>

      <h4>Syntax:</h4>
      <pre><code>{`int main(int argc, char *argv[]) {
    // argc: argument count (number of arguments)
    // argv: argument vector (array of strings)
    
    printf("Number of arguments: %d\\n", argc);
    
    for (int i = 0; i < argc; i++) {
        printf("Argument %d: %s\\n", i, argv[i]);
    }
    
    return 0;
}

// Execution: ./program arg1 arg2 arg3`}</code></pre>

      <h3>5.4 Preprocessor Directives</h3>
      <p>Instructions processed before compilation.</p>

      <h4>Common Directives:</h4>
      <ul>
        <li><strong>#include:</strong> Includes header files</li>
        <li><strong>#define:</strong> Defines macros</li>
        <li><strong>#ifdef / #ifndef:</strong> Conditional compilation</li>
        <li><strong>#endif:</strong> Ends conditional block</li>
        <li><strong>#pragma:</strong> Implementation-specific directive</li>
      </ul>

      <h4>Macros:</h4>
      <pre><code>{`#define MAX 100
#define SQUARE(x) ((x) * (x))
#define MIN(a, b) ((a) < (b) ? (a) : (b))`}</code></pre>

      <div className="not-prose mt-8 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
        <p className="text-indigo-800 font-semibold mb-2">📚 Study Guide</p>
        <p className="text-indigo-700">
          Review each unit thoroughly. Practice programs for each topic. Understand concepts before moving to next unit. 
          Use these notes along with practice questions and lab exercises. Regular practice is key to mastering C programming.
        </p>
      </div>

      {/* Summary Table */}
      <section className="not-prose mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Unit Summary</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Unit</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Topics Covered</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Difficulty</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">Unit 1</td>
                <td className="border border-gray-300 px-4 py-3">Basics, Tokens, Data Types, Variables, Constants, Operators</td>
                <td className="border border-gray-300 px-4 py-3">Beginner</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Unit 2</td>
                <td className="border border-gray-300 px-4 py-3">Control Statements, Loops, Loop Control</td>
                <td className="border border-gray-300 px-4 py-3">Beginner</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">Unit 3</td>
                <td className="border border-gray-300 px-4 py-3">Arrays, Strings, Functions, Recursion</td>
                <td className="border border-gray-300 px-4 py-3">Intermediate</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Unit 4</td>
                <td className="border border-gray-300 px-4 py-3">Pointers, Structures, Unions</td>
                <td className="border border-gray-300 px-4 py-3">Intermediate</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">Unit 5</td>
                <td className="border border-gray-300 px-4 py-3">File Handling, Dynamic Memory, Command Line Arguments</td>
                <td className="border border-gray-300 px-4 py-3">Advanced</td>
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
            <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the best way to study C programming?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Start with basics (Unit 1), understand each concept thoroughly before moving forward. Practice coding for each topic. Write programs 
              yourself rather than copying. Review regularly, solve practice questions, and work through lab exercises. Build small projects to apply 
              concepts. Regular practice and hands-on coding are essential.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q2: Which unit is most important for exams?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              All units are important, but Unit 3 (Arrays, Strings, Functions) and Unit 4 (Pointers, Structures) are typically heavily weighted 
              in exams. Pointers and structures are fundamental concepts that appear in many questions. However, don't skip any unit as concepts 
              build upon each other.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q3: How do I remember all the syntax and functions?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Practice regularly - write code daily. Don't try to memorize everything at once. Focus on understanding concepts first. Syntax 
              becomes natural with practice. Keep a reference handy while learning. Create cheat sheets for commonly used functions. Most importantly, 
              write code yourself rather than just reading.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q4: What is the difference between structure and union?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Structure allocates separate memory for each member (size = sum of all members). Union shares memory among members (size = largest 
              member). All structure members can be accessed simultaneously, but only one union member is active at a time. Use structures for 
              grouping related data, unions for memory-efficient storage when only one member is needed.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q5: Why are pointers considered difficult?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Pointers involve indirect memory access, which can be abstract. Understanding address vs value, pointer arithmetic, and memory 
              management requires practice. Start with simple examples, draw memory diagrams, and practice with small programs. Once you understand 
              that pointers store addresses, concepts become clearer. Practice is key to mastering pointers.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q6: How important is file handling in C?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              File handling is essential for real-world applications. It enables data persistence, reading configurations, logging, and data 
              processing. While basic programs may not need files, most practical applications require file I/O. Understanding file operations is 
              crucial for building complete applications. Practice reading and writing both text and binary files.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q7: What should I focus on for lab exams?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Focus on writing complete, working programs. Practice common programs: array operations, string manipulation, matrix operations, 
              searching/sorting, file handling, and structure programs. Understand algorithms, be able to explain your code, and practice debugging. 
              Time management is important - practice writing code quickly and correctly.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q8: How do I prepare for viva questions?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Understand concepts deeply, not just syntax. Be able to explain why things work, not just how. Practice explaining with examples. 
              Review common viva questions, understand memory management, pointers, and compilation process. Be ready to write small code snippets 
              and explain your lab programs. Practice explaining concepts in your own words.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="not-prose mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          C programming is a fundamental language that forms the basis for many other programming languages and systems programming. Mastering C 
          provides a strong foundation for understanding computer systems, memory management, and low-level programming concepts. The concepts covered 
          in these units are essential for any computer science student.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Regular practice, understanding concepts deeply, and building projects are key to mastering C programming. Don't rush through topics - 
          take time to understand each concept thoroughly. Use these notes as a reference, but always practice coding yourself. Combine theoretical 
          knowledge with hands-on practice for the best learning experience.
        </p>
      </section>

      {/* Internal Linking */}
      <section className="not-prose mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/programming/c-language/viva-questions" className="text-blue-600 hover:text-blue-700 underline">C Viva Questions</Link></li>
            <li><Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 underline">Important C Programs</Link></li>
            <li><Link href="/programming/c-language/programming-tips" className="text-blue-600 hover:text-blue-700 underline">C Programming Tips</Link></li>
            <li><Link href="/labs/c-programming" className="text-blue-600 hover:text-blue-700 underline">C Programming Lab Manual</Link></li>
            <li><Link href="/programming/c-language/debugging" className="text-blue-600 hover:text-blue-700 underline">C Debugging Guide</Link></li>
          </ul>
        </div>
      </section>

      {/* Footer Block */}
      <PageFooterBlock />
    </div>
  );
}

