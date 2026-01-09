import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 11 - Student Record Using Structures | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment to create and manage student records using structures. Includes structure definition, array of structures, input/output, search operations, sample I/O, viva questions, and database applications.",
  keywords: [
    "C programming lab",
    "structures",
    "student records",
    "array of structures",
    "C lab manual",
    "data management",
    "struct programming"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-11-structures-student",
  },
};

const programCode = String.raw`#include <stdio.h>
#include <string.h>

#define MAX_SUBJECTS 5

struct Student {
    int rollNumber;
    char name[50];
    float marks[MAX_SUBJECTS];
    float total;
    float percentage;
};

void inputStudent(struct Student *s, int index) {
    int i;
    printf("\n--- Enter details for Student %d ---\n", index + 1);
    
    printf("Roll Number: ");
    scanf("%d", &s->rollNumber);
    
    printf("Name: ");
    scanf(" %[^\n]", s->name);
    
    printf("Enter marks for %d subjects:\n", MAX_SUBJECTS);
    s->total = 0;
    for (i = 0; i < MAX_SUBJECTS; i++) {
        printf("Subject %d: ", i + 1);
        scanf("%f", &s->marks[i]);
        s->total += s->marks[i];
    }
    
    s->percentage = (s->total / (MAX_SUBJECTS * 100)) * 100;
}

void displayStudent(struct Student s) {
    int i;
    printf("\n--- Student Details ---\n");
    printf("Roll Number: %d\n", s.rollNumber);
    printf("Name: %s\n", s.name);
    printf("Marks: ");
    for (i = 0; i < MAX_SUBJECTS; i++) {
        printf("%.2f ", s.marks[i]);
    }
    printf("\n");
    printf("Total: %.2f\n", s.total);
    printf("Percentage: %.2f%%\n", s.percentage);
}

int searchStudent(struct Student students[], int n, int rollNumber) {
    int i;
    for (i = 0; i < n; i++) {
        if (students[i].rollNumber == rollNumber) {
            return i;
        }
    }
    return -1;
}

int main() {
    struct Student students[100];
    int n, i, searchRoll, index;
    
    printf("Enter number of students: ");
    scanf("%d", &n);
    
    for (i = 0; i < n; i++) {
        inputStudent(&students[i], i);
    }
    
    printf("\n========== ALL STUDENT RECORDS ==========\n");
    for (i = 0; i < n; i++) {
        displayStudent(students[i]);
    }
    
    printf("\nEnter roll number to search: ");
    scanf("%d", &searchRoll);
    
    index = searchStudent(students, n, searchRoll);
    if (index != -1) {
        printf("\nStudent found!\n");
        displayStudent(students[index]);
    } else {
        printf("\nStudent with roll number %d not found.\n", searchRoll);
    }
    
    return 0;
}`;

const flowchartText = String.raw`START
  |
  +-> Define structure Student
  |   { rollNumber, name, marks[], total, percentage }
  |
  +-> Declare: students[], n, i
  |
  +-> Read n (number of students)
  |
  +-> FOR i = 0 to n-1
  |   |
  |   +-> Read students[i].rollNumber
  |   +-> Read students[i].name
  |   +-> Read students[i].marks (for each subject)
  |   +-> Calculate students[i].total
  |   +-> Calculate students[i].percentage
  |
  +-> Display all student records
  |
  +-> Read searchRollNumber
  |
  +-> FOR i = 0 to n-1
  |   |
  |   +-> IF (students[i].rollNumber == searchRollNumber)
  |   |   |
  |   |   +-> Display student[i] details
  |   |   +-> BREAK
  |   |
  |   +-> END FOR
  |
  +-> END`;

export default function Exp11StructuresStudentPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link
          href="/labs/c-programming"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors text-sm sm:text-base"
        >
          <span>←</span> Back to C Programming Lab
        </Link>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
          Lab Exercise - 11
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 11 - Student Record Using Structures
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              To create a student record management system using structures in C programming. Define a structure to store student information (name, 
              roll number, marks) and perform operations like input, display, and search. This experiment helps students understand how to organize 
              related data using structures and work with arrays of structures.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to define structures, create arrays of structures, access structure members, pass structures 
              to functions, and implement basic database-like operations for data management.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithm for student record management involves structure operations:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Algorithm Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Define Structure:</strong> Create Student structure with members (rollNumber, name, marks[], total, percentage)</li>
                <li><strong>Declare Array:</strong> Create array of Student structures to store multiple records</li>
                <li><strong>Input Records:</strong> For each student
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Read rollNumber, name</li>
                    <li>Read marks for each subject</li>
                    <li>Calculate total = sum of all marks</li>
                    <li>Calculate percentage = (total / (subjects × 100)) × 100</li>
                  </ul>
                </li>
                <li><strong>Display Records:</strong> Loop through array, display each student's information</li>
                <li><strong>Search Operation:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Read search roll number</li>
                    <li>Loop through array comparing rollNumber</li>
                    <li>If found, display student details; if not, show "not found"</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include stdio.h and string.h header files</li>
              <li>Define a structure Student with members:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>rollNumber (int)</li>
                  <li>name (char array)</li>
                  <li>marks (float array for multiple subjects or single float)</li>
                  <li>total (float)</li>
                  <li>percentage (float)</li>
                </ul>
              </li>
              <li>Declare an array of structures to store multiple students</li>
              <li>Create functions for:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Input student data</li>
                  <li>Display student information</li>
                  <li>Calculate total and percentage</li>
                  <li>Search student by roll number</li>
                </ul>
              </li>
              <li>Use dot operator (.) to access structure members</li>
              <li>Use arrow operator (-&gt;) when working with structure pointers</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Flowchart
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap">
              {flowchartText}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Program Code
          </h2>
          <div className="bg-gray-900 text-gray-100 p-4 sm:p-6 rounded-lg overflow-x-auto shadow-lg">
            <pre className="text-sm sm:text-base">
              <code>{programCode}</code>
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
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter number of students: 2

--- Enter details for Student 1 ---
Roll Number: 101
Name: John Doe
Enter marks for 5 subjects:
Subject 1: 85
Subject 2: 90
Subject 3: 78
Subject 4: 92
Subject 5: 88

--- Enter details for Student 2 ---
Roll Number: 102
Name: Jane Smith
Enter marks for 5 subjects:
Subject 1: 95
Subject 2: 87
Subject 3: 91
Subject 4: 89
Subject 5: 93

Enter roll number to search: 101`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`========== ALL STUDENT RECORDS ==========

--- Student Details ---
Roll Number: 101
Name: John Doe
Marks: 85.00 90.00 78.00 92.00 88.00 
Total: 433.00
Percentage: 86.60%

--- Student Details ---
Roll Number: 102
Name: Jane Smith
Marks: 95.00 87.00 91.00 89.00 93.00 
Total: 455.00
Percentage: 91.00%

Student found!

--- Student Details ---
Roll Number: 101
Name: John Doe
Marks: 85.00 90.00 78.00 92.00 88.00 
Total: 433.00
Percentage: 86.60%`}</pre>
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
              Structures are essential for organizing related data and are used extensively:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Database Systems:</strong> Representing records in databases, employee records, customer data</li>
              <li><strong>Information Systems:</strong> Student management, library systems, inventory management</li>
              <li><strong>Game Development:</strong> Player profiles, game objects, character attributes</li>
              <li><strong>System Programming:</strong> File metadata, process information, system structures</li>
              <li><strong>Data Structures:</strong> Building complex data structures like linked lists, trees, graphs</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between dot (.) and arrow (-&gt;) operators?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dot operator (.) is used to access structure members when you have a structure variable: student.name. 
                Arrow operator (-&gt;) is used when you have a pointer to structure: ptr-&gt;name is equivalent to 
                (*ptr).name. Arrow is shorthand for dereference then access member.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Why do we use an array of structures instead of separate arrays?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Array of structures keeps related data together, ensuring data integrity (all fields for one student stay together), easier to pass to 
                functions, and more intuitive organization. Separate arrays (names[], rollNos[], marks[][]) require maintaining parallel indices and are 
                error-prone. Structures model real-world entities better.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: Should we pass structures to functions by value or by reference?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pass by reference (pointer) for large structures to avoid copying overhead. Pass by value creates a copy of entire structure, which is 
                inefficient for large structures. Use pointers when you need to modify the structure or for efficiency. Pass by value only for small 
                structures or when you need a copy.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: How do we initialize a structure array?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Can initialize at declaration: struct Student s = {'{'}101, "John", {'{'}85, 90, 78{'}'}, 253, 84.33{'}'};. 
                For arrays: struct Student arr[] = {'{'}{'{'}101, "John", ...{'}'}, {'{'}102, "Jane", ...{'}'}{'}'};. 
                Or initialize element by element using loops and input functions. Designated initializers (C99) allow: 
                {'{'}.rollNumber = 101, .name = "John"{'}'}.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: Can we have nested structures (structure within structure)?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, structures can contain other structures as members. For example, Student structure could contain Date structure for date of birth. 
                Access nested members using multiple dots: student.dob.day, student.dob.month, student.dob.year. 
                This allows modeling complex hierarchical data.
              </p>
            </div>
          </div>
        </section>

        <PageFooterBlock />
      </div>
    </main>
  );
}
