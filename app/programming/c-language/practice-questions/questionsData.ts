export type McqQuestion = {
  id: number;
  question: string;
  codeSnippet?: string;
  options: string[];
  answer: string;
  explanation?: string;
};

export type OutputQuestion = {
  id: number;
  question: string;
  codeSnippet: string;
  correctOutput: string;
  explanation?: string;
};

export type ShortAnswerQuestion = {
  id: number;
  question: string;
  answer: string;
};

export type ProgrammingQuestion = {
  id: number;
  question: string;
};

export const mcqQuestions: McqQuestion[] = [
  {
    id: 1,
    question: "What is the output of the following code?",
    codeSnippet: "printf(\"%d\", sizeof(int));",
    options: ["1", "2", "4", "Depends on compiler"],
    answer: "D) Depends on compiler",
    explanation: "The size of int depends on the compiler and platform. Typically it's 2 or 4 bytes. Use sizeof(int) to check."
  },
  {
    id: 2,
    question: "Which operator has the highest precedence?",
    options: ["+", "*", "()", "="],
    answer: "C) ()",
    explanation: "Parentheses have the highest precedence in C. Then come unary operators, followed by multiplicative, additive, relational, logical, and finally assignment operators."
  },
  {
    id: 3,
    question: "What is the default return type of a function in C?",
    options: ["void", "int", "char", "float"],
    answer: "B) int",
    explanation: "If no return type is specified, C assumes the function returns int by default."
  },
  {
    id: 4,
    question: "Which of the following is a valid way to declare a pointer?",
    options: ["int ptr;", "*int ptr;", "int *ptr;", "int ptr*;"],
    answer: "C) int *ptr;",
    explanation: "The correct syntax for pointer declaration is: data_type *pointer_name;"
  },
  {
    id: 5,
    question: "What is the size of a char array needed to store \"Hello\"?",
    options: ["5", "6", "7", "8"],
    answer: "B) 6 (including null terminator)",
    explanation: "String \"Hello\" has 5 characters, but C strings require a null terminator '\\0' at the end, so the array needs 6 elements."
  },
  {
    id: 6,
    question: "Which header file is required for printf() and scanf()?",
    options: ["<string.h>", "<stdlib.h>", "<stdio.h>", "<math.h>"],
    answer: "C) <stdio.h>",
    explanation: "stdio.h (Standard Input Output) contains printf() and scanf() functions."
  },
  {
    id: 7,
    question: "What is the value of 5 % 2?",
    options: ["2", "1", "0", "2.5"],
    answer: "B) 1",
    explanation: "Modulus operator (%) returns the remainder. 5 divided by 2 gives remainder 1."
  },
  {
    id: 8,
    question: "Which loop executes at least once?",
    options: ["for", "while", "do-while", "None of the above"],
    answer: "C) do-while",
    explanation: "do-while loop checks condition after execution, so it always executes at least once."
  },
  {
    id: 9,
    question: "What does & operator return?",
    options: ["Value of variable", "Address of variable", "Size of variable", "Type of variable"],
    answer: "B) Address of variable",
    explanation: "& is the address-of operator. It returns the memory address where the variable is stored."
  },
  {
    id: 10,
    question: "Which function is used to find string length?",
    options: ["strlen()", "strcpy()", "strcat()", "strcmp()"],
    answer: "A) strlen()",
    explanation: "strlen() from <string.h> returns the length of a string (excluding null terminator)."
  },
  {
    id: 11,
    question: "Array index in C starts from:",
    options: ["0", "1", "-1", "Depends on declaration"],
    answer: "A) 0",
    explanation: "C arrays use zero-based indexing. The first element is at index 0."
  },
  {
    id: 12,
    question: "What is arr[0] if arr is declared as int arr[5]?",
    options: ["Last element", "First element", "Invalid", "Second element"],
    answer: "B) First element",
    explanation: "arr[0] refers to the first element of the array."
  },
  {
    id: 13,
    question: "Which function copies one string to another?",
    options: ["strlen()", "strcpy()", "strcat()", "strcmp()"],
    answer: "B) strcpy()",
    explanation: "strcpy(dest, src) copies source string to destination string."
  },
  {
    id: 14,
    question: "String in C is terminated by:",
    options: ["' ' (space)", "'\\n' (newline)", "'\\0' (null)", "'\\t' (tab)"],
    answer: "C) '\\0' (null)",
    explanation: "C strings are terminated by null character '\\0'."
  },
  {
    id: 15,
    question: "What is the maximum size of an array in C?",
    options: ["100", "1000", "Fixed at compile time", "Depends on memory"],
    answer: "D) Depends on memory",
    explanation: "Array size is limited by available memory. Static arrays are limited by stack size, while dynamic arrays can use heap memory."
  }
];

export const outputQuestions: OutputQuestion[] = [
  {
    id: 1,
    question: "What is the output of the following program?",
    codeSnippet: `#include <stdio.h>

int main() {
    int x = 5;
    int y = ++x + x++;
    printf("%d %d", x, y);
    return 0;
}`,
    correctOutput: "7 12",
    explanation: "++x pre-increments x to 6, then x++ post-increments (uses 6 then increments to 7). So y = 6 + 6 = 12, and x = 7."
  },
  {
    id: 2,
    question: "What is the output of the following program?",
    codeSnippet: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    printf("%d", arr[5]);
    return 0;
}`,
    correctOutput: "Undefined behavior (garbage value or segmentation fault)",
    explanation: "arr[5] is out of bounds. Valid indices are 0-4. Accessing arr[5] causes undefined behavior."
  },
  {
    id: 3,
    question: "What is the output of the following program?",
    codeSnippet: `#include <stdio.h>

int main() {
    int a = 10;
    int *ptr = &a;
    printf("%d %d", *ptr, a);
    return 0;
}`,
    correctOutput: "10 10",
    explanation: "*ptr dereferences the pointer, giving the value stored at the address of a, which is 10."
  },
  {
    id: 4,
    question: "What is the output of the following program?",
    codeSnippet: `#include <stdio.h>

int main() {
    int i;
    for (i = 0; i < 5; i++);
    printf("%d", i);
    return 0;
}`,
    correctOutput: "5",
    explanation: "Notice the semicolon after the for loop. The loop executes 5 times (i = 0 to 4), then increments to 5 and exits. So i = 5."
  },
  {
    id: 5,
    question: "What is the output of the following program?",
    codeSnippet: `#include <stdio.h>

int main() {
    int x = 10, y = 20;
    if (x = 20) {
        printf("True");
    } else {
        printf("False");
    }
    return 0;
}`,
    correctOutput: "True",
    explanation: "x = 20 is assignment (not comparison). It assigns 20 to x and returns 20 (non-zero = true), so condition is always true. This is a common bug."
  }
];

export const shortAnswerQuestions: ShortAnswerQuestion[] = [
  {
    id: 1,
    question: "What is C programming language?",
    answer: "C is a general-purpose, procedural programming language developed by Dennis Ritchie. It is used for system programming, application development, and embedded systems."
  },
  {
    id: 2,
    question: "Explain the difference between = and == operators.",
    answer: "= is assignment operator (assigns value to variable), == is equality comparison operator (compares two values and returns true/false)."
  },
  {
    id: 3,
    question: "What is a variable? Give examples.",
    answer: "A variable is a named memory location that stores data value. Examples: int age; float salary; char grade;"
  },
  {
    id: 4,
    question: "Explain printf() and scanf() functions.",
    answer: "printf() displays formatted output to console. scanf() reads formatted input from user and stores it in variables."
  },
  {
    id: 5,
    question: "What are format specifiers? Give examples.",
    answer: "Format specifiers define data type for I/O operations. Examples: %d (int), %f (float), %c (char), %s (string), %lf (double)."
  },
  {
    id: 6,
    question: "Differentiate between if and switch statement.",
    answer: "if checks boolean conditions (true/false). switch checks multiple discrete values and executes matching case. switch is faster for many cases, if is more flexible."
  },
  {
    id: 7,
    question: "Explain break and continue statements.",
    answer: "break exits loop/switch immediately. continue skips remaining statements in current iteration and continues with next iteration of the loop."
  },
  {
    id: 8,
    question: "What is an array? How is it declared?",
    answer: "Array is collection of similar data elements stored in contiguous memory. Declaration: int arr[10]; (array of 10 integers)."
  },
  {
    id: 9,
    question: "Explain string in C.",
    answer: "String is array of characters terminated by null character '\\0'. Stored as character array. Example: char str[] = \"Hello\";"
  },
  {
    id: 10,
    question: "What is a function? List its advantages.",
    answer: "Function is block of code performing specific task. Advantages: Reusability, modularity, easier debugging, code organization, abstraction."
  },
  {
    id: 11,
    question: "Explain call by value and call by reference.",
    answer: "Call by value passes copy of variable (original unchanged). Call by reference passes address using pointers (original can be modified)."
  },
  {
    id: 12,
    question: "What is a pointer? Why is it used?",
    answer: "Pointer stores address of variable. Used for dynamic memory allocation, arrays, functions, efficient parameter passing, and low-level memory access."
  },
  {
    id: 13,
    question: "Explain NULL pointer and void pointer.",
    answer: "NULL pointer points to nothing (address 0). Void pointer can point to any data type but cannot be dereferenced directly without type casting."
  },
  {
    id: 14,
    question: "What is structure? Give example.",
    answer: "Structure groups related data of different types. Example: struct Student { int roll; char name[50]; float marks; };"
  },
  {
    id: 15,
    question: "Differentiate between structure and union.",
    answer: "Structure allocates separate memory for each member (size = sum of members). Union shares memory (size = largest member). Only one union member active at a time."
  },
  {
    id: 16,
    question: "Explain dynamic memory allocation.",
    answer: "Allocating memory at runtime using malloc(), calloc(), realloc(). Memory allocated on heap. Must be freed using free() to avoid memory leaks."
  },
  {
    id: 17,
    question: "What is file handling? List file operations.",
    answer: "File handling is reading/writing data to files. Operations: fopen() (open), fclose() (close), fprintf() (write), fscanf() (read), fread()/fwrite() (binary operations)."
  },
  {
    id: 18,
    question: "Explain command line arguments.",
    answer: "Arguments passed to main function: int main(int argc, char *argv[]). argc = count of arguments, argv = array of strings (arguments)."
  },
  {
    id: 19,
    question: "What are preprocessor directives?",
    answer: "Instructions processed before compilation. Examples: #include (includes header), #define (defines macro), #ifdef/#endif (conditional compilation)."
  },
  {
    id: 20,
    question: "Explain scope and lifetime of variables.",
    answer: "Scope: where variable is accessible (local, global, block). Lifetime: how long variable exists in memory (automatic, static, dynamic)."
  }
];

export const programmingQuestions: ProgrammingQuestion[] = [
  { id: 1, question: "Write a program to find factorial of a number using recursion and iteration." },
  { id: 2, question: "Write a program to check if a number is prime or not. Optimize it." },
  { id: 3, question: "Write a program to find GCD and LCM of two numbers." },
  { id: 4, question: "Write a program to print Fibonacci series up to n terms." },
  { id: 5, question: "Write a program to check if a string is palindrome or not." },
  { id: 6, question: "Write a program to sort an array using bubble sort algorithm." },
  { id: 7, question: "Write a program to perform matrix addition and multiplication." },
  { id: 8, question: "Write a program to implement linear search and binary search." },
  { id: 9, question: "Write a program to count vowels, consonants, digits in a string." },
  { id: 10, question: "Write a program to reverse a string without using library function." },
  { id: 11, question: "Write a program to swap two numbers using pointers." },
  { id: 12, question: "Write a program to demonstrate use of structures (Student database)." },
  { id: 13, question: "Write a program to dynamically allocate memory for array and perform operations." },
  { id: 14, question: "Write a program to read from file and write to another file." },
  { id: 15, question: "Write a program to count words, lines, characters in a text file." },
  { id: 16, question: "Write a program to implement stack using array." },
  { id: 17, question: "Write a program to find second largest element in array." },
  { id: 18, question: "Write a program to remove duplicates from array." },
  { id: 19, question: "Write a program to merge two sorted arrays." },
  { id: 20, question: "Write a program using command line arguments to perform calculator operations." }
];

export const labQuestions = [
  {
    title: "Lab 1: Basic Programs",
    questions: [
      "Program to display \"Hello World\"",
      "Program to add two numbers",
      "Program to find area of circle",
      "Program to swap two numbers",
      "Program to calculate simple interest"
    ]
  },
  {
    title: "Lab 2: Control Statements",
    questions: [
      "Program to find largest of three numbers",
      "Program to check even or odd",
      "Program to check leap year",
      "Program to print day name using switch",
      "Program to check alphabet, digit or special character"
    ]
  },
  {
    title: "Lab 3: Loops",
    questions: [
      "Program to print multiplication table",
      "Program to find sum of digits",
      "Program to reverse a number",
      "Program to check Armstrong number",
      "Program to print patterns (star, number patterns)"
    ]
  },
  {
    title: "Lab 4: Arrays",
    questions: [
      "Program to find largest and smallest in array",
      "Program to reverse an array",
      "Program to merge two arrays",
      "Program to find frequency of elements",
      "Program for matrix transpose"
    ]
  },
  {
    title: "Lab 5: Functions",
    questions: [
      "Program with functions for mathematical operations",
      "Program to check prime using function",
      "Program to find factorial using recursion",
      "Program with function overloading concepts",
      "Program using static variables"
    ]
  },
  {
    title: "Lab 6: Pointers and Strings",
    questions: [
      "Program to swap using pointers",
      "Program to access array using pointers",
      "Program for string operations (copy, compare, concatenate)",
      "Program to count words in string",
      "Program to remove spaces from string"
    ]
  },
  {
    title: "Lab 7: Structures",
    questions: [
      "Program for student record management",
      "Program for employee database",
      "Program using nested structures",
      "Program with array of structures",
      "Program using structure pointers"
    ]
  },
  {
    title: "Lab 8: File Handling",
    questions: [
      "Program to create and write to file",
      "Program to read from file",
      "Program to copy file contents",
      "Program to append data to file",
      "Program for student data file operations"
    ]
  }
];

export const assignmentQuestions = [
  {
    title: "Assignment 1: Basic Concepts (Week 1-2)",
    questions: [
      "Write programs demonstrating all operators in C",
      "Create a simple calculator program",
      "Write programs for all control structures",
      "Document all programs with comments"
    ]
  },
  {
    title: "Assignment 2: Arrays and Strings (Week 3-4)",
    questions: [
      "Implement sorting algorithms (bubble, selection, insertion)",
      "Implement searching algorithms (linear, binary)",
      "Create string manipulation programs",
      "Programs on 2D arrays and matrices"
    ]
  },
  {
    title: "Assignment 3: Functions and Pointers (Week 5-6)",
    questions: [
      "Create a library of utility functions",
      "Programs demonstrating pointer arithmetic",
      "Programs on call by value vs call by reference",
      "Recursive problem solving"
    ]
  },
  {
    title: "Assignment 4: Advanced Concepts (Week 7-8)",
    questions: [
      "Student management system using structures",
      "File handling application",
      "Dynamic memory allocation programs",
      "Mini project combining all concepts"
    ]
  }
];

