import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 12 – File Handling Student Records | C Programming Lab",
  description:
    "Store and retrieve student records from files in C programming. Learn file operations: fopen, fwrite, fread, fclose, and file modes.",
  keywords: ["C programming", "file handling", "file operations", "fopen", "fwrite", "fread", "C lab"],
};

export default function Exp12FileStudentRecordsPage() {
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
          Lab Exercise – 12
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 12 – File Handling – Student Records
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To implement file handling operations for storing and retrieving student records. Learn to write student data to a file and read it back using file operations in C programming.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdio.h</code> and <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdlib.h</code> header files</li>
              <li>Define a structure <code className="bg-gray-100 px-1.5 py-0.5 rounded">Student</code> with required fields</li>
              <li>For Writing to File:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Open file in write mode using <code className="bg-gray-100 px-1.5 py-0.5 rounded">fopen("filename.txt", "w")</code></li>
                  <li>Check if file opened successfully</li>
                  <li>Input student data</li>
                  <li>Write to file using <code className="bg-gray-100 px-1.5 py-0.5 rounded">fprintf()</code> or <code className="bg-gray-100 px-1.5 py-0.5 rounded">fwrite()</code></li>
                  <li>Close file using <code className="bg-gray-100 px-1.5 py-0.5 rounded">fclose()</code></li>
                </ul>
              </li>
              <li>For Reading from File:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Open file in read mode using <code className="bg-gray-100 px-1.5 py-0.5 rounded">fopen("filename.txt", "r")</code></li>
                  <li>Read data using <code className="bg-gray-100 px-1.5 py-0.5 rounded">fscanf()</code> or <code className="bg-gray-100 px-1.5 py-0.5 rounded">fread()</code></li>
                  <li>Display the read data</li>
                  <li>Close file</li>
                </ul>
              </li>
              <li>Handle file errors appropriately</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Flowchart
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap">
{`Write to File:
  START
    ├─→ Declare: FILE *fp, struct Student s
    ├─→ fp = fopen("students.txt", "w")
    ├─→ IF (fp == NULL)
    │   │
    │   └─→ Display "Error opening file"
    │   └─→ EXIT
    │
    ├─→ Read student data
    ├─→ Write to file: fprintf(fp, ...)
    ├─→ fclose(fp)
    └─→ END

Read from File:
  START
    ├─→ Declare: FILE *fp, struct Student s
    ├─→ fp = fopen("students.txt", "r")
    ├─→ IF (fp == NULL)
    │   │
    │   └─→ Display "Error opening file"
    │   └─→ EXIT
    │
    ├─→ WHILE (!feof(fp))
    │   │
    │   ├─→ Read from file: fscanf(fp, ...)
    │   └─→ Display student data
    │
    ├─→ fclose(fp)
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
#include <stdlib.h>
#include <string.h>

// Structure definition
struct Student {
    int rollNumber;
    char name[50];
    float marks[3];
    float total;
    float percentage;
};

// Function to write student record to file
void writeToFile(struct Student s) {
    FILE *fp;
    fp = fopen("students.txt", "a");  // "a" for append mode
    
    if (fp == NULL) {
        printf("Error opening file for writing!\\n");
        return;
    }
    
    // Write student data to file
    fprintf(fp, "%d %s %.2f %.2f %.2f %.2f %.2f\\n",
            s.rollNumber, s.name, s.marks[0], s.marks[1], 
            s.marks[2], s.total, s.percentage);
    
    fclose(fp);
    printf("Student record saved to file successfully!\\n");
}

// Function to read all student records from file
void readFromFile() {
    FILE *fp;
    struct Student s;
    
    fp = fopen("students.txt", "r");  // "r" for read mode
    
    if (fp == NULL) {
        printf("Error opening file for reading!\\n");
        printf("File may not exist. Please add some records first.\\n");
        return;
    }
    
    printf("\\n========== STUDENT RECORDS FROM FILE ==========\\n");
    printf("%-10s %-20s %-8s %-8s %-8s %-8s %-10s\\n",
           "Roll No", "Name", "Mark1", "Mark2", "Mark3", "Total", "Percentage");
    printf("-----------------------------------------------------------\\n");
    
    // Read until end of file
    while (fscanf(fp, "%d %s %f %f %f %f %f",
                  &s.rollNumber, s.name, &s.marks[0], &s.marks[1],
                  &s.marks[2], &s.total, &s.percentage) != EOF) {
        
        printf("%-10d %-20s %-8.2f %-8.2f %-8.2f %-8.2f %-10.2f\\n",
               s.rollNumber, s.name, s.marks[0], s.marks[1],
               s.marks[2], s.total, s.percentage);
    }
    
    fclose(fp);
}

int main() {
    struct Student s;
    int choice, n, i;
    
    do {
        printf("\\n========== FILE HANDLING MENU ==========\\n");
        printf("1. Add Student Record to File\\n");
        printf("2. Display All Records from File\\n");
        printf("3. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("\\nEnter number of students to add: ");
                scanf("%d", &n);
                
                for (i = 0; i < n; i++) {
                    printf("\\n--- Student %d ---\\n", i + 1);
                    printf("Roll Number: ");
                    scanf("%d", &s.rollNumber);
                    
                    printf("Name: ");
                    scanf(" %[^\\n]", s.name);
                    
                    printf("Enter marks for 3 subjects:\\n");
                    printf("Subject 1: ");
                    scanf("%f", &s.marks[0]);
                    printf("Subject 2: ");
                    scanf("%f", &s.marks[1]);
                    printf("Subject 3: ");
                    scanf("%f", &s.marks[2]);
                    
                    s.total = s.marks[0] + s.marks[1] + s.marks[2];
                    s.percentage = (s.total / 300) * 100;
                    
                    writeToFile(s);
                }
                break;
                
            case 2:
                readFromFile();
                break;
                
            case 3:
                printf("Exiting program.\\n");
                break;
                
            default:
                printf("Invalid choice!\\n");
        }
    } while (choice != 3);
    
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 1: Adding Records</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`========== FILE HANDLING MENU ==========
1. Add Student Record to File
2. Display All Records from File
3. Exit
Enter your choice: 1

Enter number of students to add: 2

--- Student 1 ---
Roll Number: 101
Name: Alice Johnson
Enter marks for 3 subjects:
Subject 1: 85
Subject 2: 90
Subject 3: 88
Student record saved to file successfully!

--- Student 2 ---
Roll Number: 102
Name: Bob Williams
Enter marks for 3 subjects:
Subject 1: 92
Subject 2: 87
Subject 3: 95
Student record saved to file successfully!`}</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2: Reading Records</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`========== FILE HANDLING MENU ==========
1. Add Student Record to File
2. Display All Records from File
3. Exit
Enter your choice: 2`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`========== STUDENT RECORDS FROM FILE ==========
Roll No    Name                 Mark1    Mark2    Mark3    Total    Percentage
-----------------------------------------------------------
101        Alice Johnson        85.00    90.00    88.00    263.00   87.67
102        Bob Williams         92.00    87.00    95.00    274.00   91.33`}</pre>
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
              File handling is essential for data persistence in applications:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Database Systems:</strong> Storing and retrieving data persistently</li>
              <li><strong>Configuration Files:</strong> Reading settings, preferences, and configuration data</li>
              <li><strong>Log Files:</strong> Recording application events, errors, and activities</li>
              <li><strong>Data Backup:</strong> Creating backups of important data</li>
              <li><strong>Report Generation:</strong> Writing reports, invoices, and documents to files</li>
              <li><strong>Data Import/Export:</strong> Transferring data between applications</li>
              <li><strong>System Administration:</strong> Managing system files, logs, and configurations</li>
              <li><strong>Application State:</strong> Saving game progress, user preferences, session data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding file operations is crucial for building applications that need to store data beyond program execution. File handling enables data persistence, which is fundamental to most real-world applications.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-11-structures-student"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 11
        </Link>
        <Link
          href="/labs/c-programming/exp-13-search-sort"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 13
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}

