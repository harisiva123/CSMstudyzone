import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "File Handling in C++ – Complete Guide with Examples | C++ Notes",
  description:
    "Comprehensive guide to file handling in C++ covering file streams (ifstream, ofstream, fstream), file modes, reading/writing text and binary files, file position pointers, error handling, and best practices.",
  keywords: [
    "C++ file handling",
    "file streams",
    "fstream ifstream ofstream",
    "file operations",
    "binary files",
    "text files",
    "file I/O",
    "C++ file management"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/notes/cpp-programming/files",
  },
};

export default function FilesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6">
        <Link
          href="/notes/cpp-programming"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base mb-4"
        >
          <span>←</span> Back to C++ Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          File Handling
        </h1>
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none space-y-6 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-0">
            File handling is essential for creating programs that can persist data beyond program execution. C++ provides a powerful and intuitive 
            file I/O system through stream classes that work similarly to console I/O (cin/cout), making it easy to read from and write to files. 
            Understanding file operations enables you to build applications that can save user data, load configurations, process data files, and 
            create persistent storage solutions.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Introduction to File Handling</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            File handling allows programs to read from and write to files. C++ provides file stream classes for file operations: 
            <code className="bg-gray-100 px-1 rounded">ifstream</code> (input), <code className="bg-gray-100 px-1 rounded">ofstream</code> (output), 
            and <code className="bg-gray-100 px-1 rounded">fstream</code> (both). These classes inherit from stream classes, so you can use familiar 
            operators like &lt;&lt; and &gt;&gt; for file I/O, just like with cin and cout.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            File streams provide a high-level interface that handles many low-level details automatically. They manage file opening, closing, buffering, 
            and error checking. This makes file I/O in C++ straightforward and safe when used correctly. Understanding file modes, error handling, and 
            the difference between text and binary files is crucial for effective file operations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            File handling is fundamental to most real-world applications. Whether you're building a text editor, database system, configuration manager, 
            or data processing tool, you'll need to work with files. C++'s file stream classes make this process efficient and type-safe.
          </p>
        </section>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. File Stream Classes</h2>
          <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
            <li><strong>ofstream:</strong> Output file stream (writing to files)</li>
            <li><strong>ifstream:</strong> Input file stream (reading from files)</li>
            <li><strong>fstream:</strong> File stream (both reading and writing)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. File Modes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 mt-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Mode</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">ios::in</td>
                  <td className="border border-gray-300 px-4 py-2">Open for reading</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">ios::out</td>
                  <td className="border border-gray-300 px-4 py-2">Open for writing (truncates if exists)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">ios::app</td>
                  <td className="border border-gray-300 px-4 py-2">Append mode (write at end)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">ios::ate</td>
                  <td className="border border-gray-300 px-4 py-2">Open and move to end</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">ios::binary</td>
                  <td className="border border-gray-300 px-4 py-2">Binary mode</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">ios::trunc</td>
                  <td className="border border-gray-300 px-4 py-2">Truncate file if exists</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Writing to Files</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // Method 1: Using ofstream
    ofstream outFile;
    outFile.open("data.txt");
    
    if (outFile.is_open()) {
        outFile << "Hello, World!" << endl;
        outFile << "This is a file." << endl;
        outFile.close();
    } else {
        cout << "Error opening file!" << endl;
    }
    
    // Method 2: Direct initialization
    ofstream outFile2("data2.txt");
    outFile2 << "Line 1" << endl;
    outFile2 << "Line 2" << endl;
    outFile2.close();
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Reading from Files</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Method 1: Using ifstream
    ifstream inFile;
    inFile.open("data.txt");
    
    if (inFile.is_open()) {
        string line;
        while (getline(inFile, line)) {
            cout << line << endl;
        }
        inFile.close();
    } else {
        cout << "Error opening file!" << endl;
    }
    
    // Method 2: Reading word by word
    ifstream inFile2("data.txt");
    string word;
    while (inFile2 >> word) {
        cout << word << " ";
    }
    inFile2.close();
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Reading and Writing</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    fstream file;
    file.open("data.txt", ios::in | ios::out);
    
    if (file.is_open()) {
        // Write
        file << "Hello" << endl;
        file << "World" << endl;
        
        // Read
        file.seekg(0);  // Move to beginning
        string line;
        while (getline(file, line)) {
            cout << line << endl;
        }
        
        file.close();
    }
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. File Position Pointers</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    fstream file("data.txt", ios::in | ios::out);
    
    // Get current position
    streampos pos = file.tellg();
    cout << "Current position: " << pos << endl;
    
    // Move to beginning
    file.seekg(0, ios::beg);
    
    // Move to end
    file.seekg(0, ios::end);
    
    // Move relative
    file.seekg(10, ios::cur);  // 10 bytes forward
    
    file.close();
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Binary File Operations</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <fstream>
using namespace std;

struct Student {
    int rollNo;
    char name[50];
    float marks;
};

int main() {
    // Writing binary file
    ofstream outFile("students.dat", ios::binary);
    Student s1 = {101, "John", 85.5};
    outFile.write((char*)&s1, sizeof(Student));
    outFile.close();
    
    // Reading binary file
    ifstream inFile("students.dat", ios::binary);
    Student s2;
    inFile.read((char*)&s2, sizeof(Student));
    cout << s2.rollNo << " " << s2.name << " " << s2.marks << endl;
    inFile.close();
    
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. File Error Handling</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream file("nonexistent.txt");
    
    if (!file) {
        cout << "File not found!" << endl;
        return 1;
    }
    
    if (file.fail()) {
        cout << "File operation failed!" << endl;
    }
    
    if (file.bad()) {
        cout << "Fatal error!" << endl;
    }
    
    if (file.eof()) {
        cout << "End of file reached" << endl;
    }
    
    file.close();
    return 0;
}`}</code></pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Complete Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-lg">
            <code>{`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Write student data
    ofstream outFile("students.txt");
    if (outFile.is_open()) {
        outFile << "101 John 85.5" << endl;
        outFile << "102 Alice 90.0" << endl;
        outFile << "103 Bob 78.5" << endl;
        outFile.close();
    }
    
    // Read and display
    ifstream inFile("students.txt");
    if (inFile.is_open()) {
        int rollNo;
        string name;
        float marks;
        
        while (inFile >> rollNo >> name >> marks) {
            cout << rollNo << " " << name << " " << marks << endl;
        }
        inFile.close();
    }
    
    return 0;
}`}</code></pre>
        </div>

        {/* Summary Table */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Summary</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Topic</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Key Points</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Difficulty</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">File Stream Classes</td>
                  <td className="border border-gray-300 px-4 py-3">ifstream (read), ofstream (write), fstream (read/write), inherit from stream classes</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">File Modes</td>
                  <td className="border border-gray-300 px-4 py-3">ios::in (read), ios::out (write), ios::app (append), ios::binary, can combine with |</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Text File Operations</td>
                  <td className="border border-gray-300 px-4 py-3">Use &lt;&lt; and &gt;&gt; operators, getline() for lines, formatted I/O</td>
                  <td className="border border-gray-300 px-4 py-3">Beginner</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Binary File Operations</td>
                  <td className="border border-gray-300 px-4 py-3">Use read() and write() methods, store data as-is, more efficient for structured data</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">File Position Pointers</td>
                  <td className="border border-gray-300 px-4 py-3">tellg()/tellp() get position, seekg()/seekp() set position, ios::beg/cur/end</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Error Handling</td>
                  <td className="border border-gray-300 px-4 py-3">Check is_open(), fail(), bad(), eof(), handle errors before using file</td>
                  <td className="border border-gray-300 px-4 py-3">Intermediate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between text and binary file modes?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Text mode (default) performs character translation (newline conversion, etc.) and treats data as text. Binary mode (ios::binary) reads/writes 
                raw bytes without translation, preserving exact data representation. Use text mode for human-readable files, binary mode for structured data, 
                images, or when exact byte representation matters. Binary is more efficient and preserves data exactly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: When should I use ifstream, ofstream, or fstream?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use <code className="bg-gray-100 px-1 rounded">ifstream</code> when only reading, <code className="bg-gray-100 px-1 rounded">ofstream</code> 
                when only writing, <code className="bg-gray-100 px-1 rounded">fstream</code> when both reading and writing. Using specific stream types 
                makes intent clear and provides appropriate default modes. fstream requires explicit mode specification, while ifstream/ofstream have 
                implicit modes.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What happens if I try to open a file that doesn't exist?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                For reading (ifstream with ios::in), opening non-existent file sets failbit, is_open() returns false. For writing (ofstream with ios::out), 
                file is created if it doesn't exist. Always check <code className="bg-gray-100 px-1 rounded">is_open()</code> or use 
                <code className="bg-gray-100 px-1 rounded">if (!file)</code> before using file. Never assume file opened successfully without checking.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: How do I check for end of file when reading?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use <code className="bg-gray-100 px-1 rounded">file.eof()</code> to check if end of file reached, or check return value of read operation. 
                Better approach: <code className="bg-gray-100 px-1 rounded">while (getline(file, line))</code> or 
                <code className="bg-gray-100 px-1 rounded">while (file &gt;&gt; data)</code> - these automatically stop at EOF. Don't check eof() before 
                reading, check after - eof() is only true after attempting to read past end.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What is the difference between ios::app and ios::ate?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">ios::app</code> (append) opens file and positions at end for writing, all writes append. 
                <code className="bg-gray-100 px-1 rounded">ios::ate</code> (at end) opens and moves to end, but you can seek to other positions. 
                ios::app is write-only append mode, ios::ate allows seeking. Use app for logging, ate when you need to read from end then seek elsewhere.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: When should I use binary files instead of text files?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use binary files for: structured data (structures, arrays), images/media files, when exact byte representation matters, performance-critical 
                I/O, cross-platform compatibility issues with text. Use text files for: human-readable data, configuration files, logs, when data needs to 
                be edited manually. Binary is faster and more compact, text is more portable and debuggable.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: How do file streams handle errors?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                File streams have state flags: <code className="bg-gray-100 px-1 rounded">good()</code> (all OK), <code className="bg-gray-100 px-1 rounded">fail()</code> 
                (operation failed, recoverable), <code className="bg-gray-100 px-1 rounded">bad()</code> (fatal error), <code className="bg-gray-100 px-1 rounded">eof()</code> 
                (end of file). Check <code className="bg-gray-100 px-1 rounded">is_open()</code> after opening, check stream state before/after operations. 
                Use <code className="bg-gray-100 px-1 rounded">clear()</code> to reset error flags if needed.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: Do I need to explicitly close files?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                File streams automatically close when destructor is called (when object goes out of scope). However, explicitly calling 
                <code className="bg-gray-100 px-1 rounded">close()</code> is good practice: makes intent clear, allows checking for close errors, frees 
                resources immediately, and enables reopening same stream object. Destructor will close if you forget, but explicit is better for clarity 
                and error handling.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            File handling is essential for creating programs that can persist data and interact with the file system. C++'s stream-based file I/O 
            provides a clean, type-safe interface that works similarly to console I/O, making it intuitive to learn and use. Understanding file modes, 
            error handling, and the difference between text and binary operations enables you to build robust file-based applications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            File streams automatically manage many low-level details, but you must still handle errors appropriately and choose the right file mode 
            for your needs. Text files are human-readable and portable, while binary files are efficient and preserve exact data representation. 
            Understanding when to use each enables you to make the right choice for your application.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mastery of file handling enables you to build applications that can save user data, load configurations, process data files, and create 
            persistent storage. Combined with exception handling and proper error checking, file I/O becomes a powerful tool for building real-world 
            applications that can store and retrieve data reliably.
          </p>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/notes/cpp-programming/exceptions" className="text-blue-600 hover:text-blue-700 underline">C++ Exception Handling</Link></li>
              <li><Link href="/notes/cpp-programming/stl" className="text-blue-600 hover:text-blue-700 underline">C++ Standard Template Library</Link></li>
              <li><Link href="/notes/cpp-programming/pointers" className="text-blue-600 hover:text-blue-700 underline">C++ Pointers</Link></li>
              <li><Link href="/notes/cpp-programming/structures" className="text-blue-600 hover:text-blue-700 underline">C++ Structures</Link></li>
              <li><Link href="/labs/c-programming/exp-12-file-student-records" className="text-blue-600 hover:text-blue-700 underline">C File Handling Lab</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
      </div>
    </main>
  );
}



