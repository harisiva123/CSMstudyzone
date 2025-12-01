import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 11 – Structures Student Record | C Programming Lab",
  description:
    "Create and manage student records using structures in C programming. Learn structure definition, initialization, and member access.",
  keywords: ["C programming", "structures", "student records", "struct", "C lab"],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-11-structures-student",
  },
};

export default function Exp11StructuresStudentPage() {
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
          Lab Exercise – 11
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 11 – Structures – Student Record
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To create a student record management system using structures in C programming. Define a structure to store student information (name, roll number, marks) and perform operations like input, display, and search.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdio.h</code> and <code className="bg-gray-100 px-1.5 py-0.5 rounded">string.h</code> header files</li>
              <li>Define a structure <code className="bg-gray-100 px-1.5 py-0.5 rounded">Student</code> with members:
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
{`START
  │
  ├─→ Define structure Student
  │   { rollNumber, name, marks[], total, percentage }
  │
  ├─→ Declare: students[], n, i
  │
  ├─→ Read n (number of students)
  │
  ├─→ FOR i = 0 to n-1
  │   │
  │   ├─→ Read students[i].rollNumber
  │   ├─→ Read students[i].name
  │   ├─→ Read students[i].marks (for each subject)
  │   ├─→ Calculate students[i].total
  │   └─→ Calculate students[i].percentage
  │
  ├─→ Display all student records
  │
  ├─→ Read searchRollNumber
  │
  ├─→ FOR i = 0 to n-1
  │   │
  │   ├─→ IF (students[i].rollNumber == searchRollNumber)
  │   │   │
  │   │   └─→ Display student[i] details
  │   │   └─→ BREAK
  │   │
  │   └─→ END FOR
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
#include <string.h>

#define MAX_SUBJECTS 5

// Structure definition
struct Student {
    int rollNumber;
    char name[50];
    float marks[MAX_SUBJECTS];
    float total;
    float percentage;
};

// Function to input student data
void inputStudent(struct Student *s, int index) {
    int i;
    printf("\\n--- Enter details for Student %d ---\\n", index + 1);
    
    printf("Roll Number: ");
    scanf("%d", &s->rollNumber);
    
    printf("Name: ");
    scanf(" %[^\\n]", s->name);  // Read string with spaces
    
    printf("Enter marks for %d subjects:\\n", MAX_SUBJECTS);
    s->total = 0;
    for (i = 0; i < MAX_SUBJECTS; i++) {
        printf("Subject %d: ", i + 1);
        scanf("%f", &s->marks[i]);
        s->total += s->marks[i];
    }
    
    s->percentage = (s->total / (MAX_SUBJECTS * 100)) * 100;
}

// Function to display student data
void displayStudent(struct Student s) {
    int i;
    printf("\\n--- Student Details ---\\n");
    printf("Roll Number: %d\\n", s.rollNumber);
    printf("Name: %s\\n", s.name);
    printf("Marks: ");
    for (i = 0; i < MAX_SUBJECTS; i++) {
        printf("%.2f ", s.marks[i]);
    }
    printf("\\n");
    printf("Total: %.2f\\n", s.total);
    printf("Percentage: %.2f%%\\n", s.percentage);
}

// Function to search student by roll number
int searchStudent(struct Student students[], int n, int rollNumber) {
    int i;
    for (i = 0; i < n; i++) {
        if (students[i].rollNumber == rollNumber) {
            return i;  // Return index if found
        }
    }
    return -1;  // Return -1 if not found
}

int main() {
    struct Student students[100];
    int n, i, searchRoll, index;
    
    // Input number of students
    printf("Enter number of students: ");
    scanf("%d", &n);
    
    // Input student data
    for (i = 0; i < n; i++) {
        inputStudent(&students[i], i);
    }
    
    // Display all students
    printf("\\n========== ALL STUDENT RECORDS ==========\\n");
    for (i = 0; i < n; i++) {
        displayStudent(students[i]);
    }
    
    // Search student
    printf("\\nEnter roll number to search: ");
    scanf("%d", &searchRoll);
    
    index = searchStudent(students, n, searchRoll);
    if (index != -1) {
        printf("\\nStudent found!\\n");
        displayStudent(students[index]);
    } else {
        printf("\\nStudent with roll number %d not found.\\n", searchRoll);
    }
    
    return 0;
}`}</code>
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
              <li><strong>API Development:</strong> Representing JSON objects, request/response structures</li>
              <li><strong>Embedded Systems:</strong> Configuration structures, sensor data, device states</li>
              <li><strong>Object-Oriented Concepts:</strong> Structures are the foundation for classes in C++</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding structures is crucial for organizing data efficiently. They allow grouping related information together, making code more readable and maintainable. Structures are fundamental to building complex applications.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-10-array-reverse-pointer"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 10
        </Link>
        <Link
          href="/labs/c-programming/exp-12-file-student-records"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 12
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}


