import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "File Handling in C++ – C++ Programming Notes",
  description:
    "Learn about file operations, reading and writing files, file streams, file modes, and file handling functions in C++.",
  keywords: ["C++ file handling", "file streams", "fstream", "ifstream", "ofstream", "file operations"],
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

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            File handling allows programs to read from and write to files. C++ provides file stream classes 
            for file operations: <code>ifstream</code> (input), <code>ofstream</code> (output), and <code>fstream</code> (both).
          </p>
        </div>

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
      </div>
    </main>
  );
}

