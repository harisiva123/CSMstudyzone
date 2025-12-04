import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 12 – File Handling for Student Records | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment for file handling operations including storing and retrieving student records. Learn fopen, fwrite, fread, fclose, file modes, sample I/O, viva questions, and database applications.",
  keywords: [
    "C programming lab",
    "file handling",
    "file operations",
    "fopen fwrite fread",
    "C lab manual",
    "data persistence",
    "file I/O"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-12-file-student-records",
  },
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
            <p className="text-gray-700 leading-relaxed mb-3">
              To implement file handling operations for storing and retrieving student records. Learn to write student data to a file and read it back 
              using file operations in C programming. This experiment helps students understand data persistence, file I/O operations, and how to 
              maintain data beyond program execution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to work with files, understand different file modes, implement error handling for file 
              operations, and create programs that can store and retrieve data persistently.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Learning Outcomes
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              After completing this experiment, students will be able to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Open files using fopen() with different modes (r, w, a, r+, w+, a+)</li>
              <li>Write data to files using fprintf() or fwrite()</li>
              <li>Read data from files using fscanf() or fread()</li>
              <li>Check for file opening errors and handle them appropriately</li>
              <li>Close files using fclose() to free resources</li>
              <li>Understand the difference between text and binary file modes</li>
              <li>Implement append mode to add records without overwriting</li>
              <li>Create persistent data storage solutions</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithm for file handling involves opening, writing/reading, and closing files:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Write to File Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Declare FILE pointer: <code className="bg-white px-1 rounded">FILE *fp</code></li>
                <li>Open file: <code className="bg-white px-1 rounded">fp = fopen("filename.txt", "w" or "a")</code></li>
                <li>Check if <code className="bg-white px-1 rounded">fp == NULL</code> (error opening)</li>
                <li>If error, display message and exit</li>
                <li>Input student data</li>
                <li>Write to file: <code className="bg-white px-1 rounded">fprintf(fp, format, data)</code></li>
                <li>Close file: <code className="bg-white px-1 rounded">fclose(fp)</code></li>
              </ol>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Read from File Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Open file in read mode: <code className="bg-white px-1 rounded">fp = fopen("filename.txt", "r")</code></li>
                <li>Check for errors (fp == NULL)</li>
                <li>Loop while not end of file: <code className="bg-white px-1 rounded">while (!feof(fp))</code> or 
                <code className="bg-white px-1 rounded">while (fscanf(...) != EOF)</code></li>
                <li>Read data: <code className="bg-white px-1 rounded">fscanf(fp, format, &amp;variables)</code></li>
                <li>Display read data</li>
                <li>Close file</li>
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
              Understanding file operations is crucial for building applications that need to store data beyond program execution. File handling enables 
              data persistence, which is fundamental to most real-world applications. This knowledge forms the foundation for database systems, 
              configuration management, logging, and data backup solutions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What are the different file modes in fopen() and when to use each?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                "r" - read mode (file must exist), "w" - write mode (creates/overwrites), "a" - append mode (creates/appends), "r+" - read/write 
                (file must exist), "w+" - read/write (creates/overwrites), "a+" - read/append (creates/appends). Use "r" for reading, "w" for 
                writing new files, "a" for adding to existing files without losing data.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Why is it important to check if fopen() returns NULL?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                fopen() returns NULL if file cannot be opened (file doesn't exist, permission denied, disk full, etc.). Using NULL pointer causes 
                segmentation fault or undefined behavior. Always check: <code className="bg-gray-100 px-1 rounded">if (fp == NULL) { /* handle error */ }</code>. 
                This prevents crashes and allows graceful error handling.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What is the difference between fprintf() and fwrite()?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">fprintf()</code> writes formatted text (human-readable), works with text files, converts 
                data to text. <code className="bg-gray-100 px-1 rounded">fwrite()</code> writes raw binary data, works with binary files, writes 
                data as-is. Use fprintf for text files (readable), fwrite for binary files (efficient, exact representation). fprintf is slower 
                but portable, fwrite is faster but platform-dependent.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: Why should we always close files with fclose()?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                fclose() flushes buffers (ensures all data is written), releases file handle (allows other programs to access), and frees system 
                resources. Not closing files can cause data loss (buffered data not written), resource leaks (file handles not released), and 
                prevent other programs from accessing the file. Operating systems limit number of open files per process.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What happens if we write to a file opened in read mode?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Attempting to write to a file opened in "r" mode causes undefined behavior or error. File opened in read mode is read-only. Use 
                "r+" for read/write, "w" or "w+" for writing, or "a" for appending. Always use appropriate mode for intended operation to prevent 
                errors and data corruption.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: How do we detect end of file when reading?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use <code className="bg-gray-100 px-1 rounded">feof(fp)</code> which returns non-zero at end of file, or check return value of 
                <code className="bg-gray-100 px-1 rounded">fscanf()</code> which returns EOF at end. Better approach: 
                <code className="bg-gray-100 px-1 rounded">while (fscanf(fp, ...) != EOF)</code> because feof() only returns true after attempting 
                to read past end. Check fscanf return value immediately after reading, not before.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What is the difference between "w" and "a" modes?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                "w" (write) mode creates new file or truncates existing file (deletes all content), starts writing from beginning. "a" (append) mode 
                creates new file or opens existing file, writes at end (preserves existing content). Use "w" when you want to overwrite, "a" when 
                you want to add to existing data without losing it.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: Can we read and write to the same file in one program?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, use "r+" (read/write, file must exist), "w+" (read/write, creates/overwrites), or "a+" (read/append, creates/appends). After 
                writing, use <code className="bg-gray-100 px-1 rounded">fseek(fp, 0, SEEK_SET)</code> to move to beginning before reading. Be 
                careful with file position - reading and writing share the same file pointer position.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/programming/c-language" className="text-blue-600 hover:text-blue-700 underline">C Language Basics</Link></li>
              <li><Link href="/programming/c-language/full-notes" className="text-blue-600 hover:text-blue-700 underline">Full C Language Notes</Link></li>
              <li><Link href="/labs/c-programming/exp-11-structures-student" className="text-blue-600 hover:text-blue-700 underline">Experiment 11: Structures</Link></li>
              <li><Link href="/labs/c-programming/exp-13-search-sort" className="text-blue-600 hover:text-blue-700 underline">Experiment 13: Search & Sort</Link></li>
              <li><Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 underline">Important C Programs</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
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


