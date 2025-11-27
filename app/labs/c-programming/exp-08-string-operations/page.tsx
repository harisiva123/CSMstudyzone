import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 8 – String Operations | C Programming Lab",
  description:
    "Implement string manipulation functions like length, copy, concatenate, and compare in C programming. Learn character arrays and string handling.",
  keywords: ["C programming", "strings", "string operations", "strlen", "strcpy", "strcat", "C lab"],
};

export default function Exp08StringOperationsPage() {
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
          Lab Exercise – 08
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 8 – String Operations
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To implement basic string manipulation operations including finding string length, copying strings, concatenating strings, and comparing strings without using built-in string functions in C programming.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdio.h</code> and optionally <code className="bg-gray-100 px-1.5 py-0.5 rounded">string.h</code></li>
              <li>Declare character arrays (strings) for operations</li>
              <li>For String Length:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Loop until null character ('\0') is found</li>
                  <li>Count characters</li>
                </ul>
              </li>
              <li>For String Copy:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Copy each character from source to destination</li>
                  <li>Add null character at the end</li>
                </ul>
              </li>
              <li>For String Concatenate:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Find end of first string</li>
                  <li>Append characters from second string</li>
                  <li>Add null character</li>
                </ul>
              </li>
              <li>For String Compare:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Compare characters one by one</li>
                  <li>Return 0 if equal, positive/negative if different</li>
                </ul>
              </li>
              <li>Display results of all operations</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Flowchart
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap">
{`String Length:
  START
    ├─→ Declare: str[], len = 0, i = 0
    ├─→ Read str
    ├─→ WHILE (str[i] != '\0')
    │   │
    │   ├─→ len++
    │   └─→ i++
    │
    └─→ Display len

String Copy:
  START
    ├─→ Declare: src[], dest[], i = 0
    ├─→ Read src
    ├─→ WHILE (src[i] != '\0')
    │   │
    │   ├─→ dest[i] = src[i]
    │   └─→ i++
    │
    ├─→ dest[i] = '\0'
    └─→ Display dest

String Concatenate:
  START
    ├─→ Declare: str1[], str2[], i, j = 0
    ├─→ Find length of str1 → i
    ├─→ WHILE (str2[j] != '\0')
    │   │
    │   ├─→ str1[i] = str2[j]
    │   ├─→ i++
    │   └─→ j++
    │
    ├─→ str1[i] = '\0'
    └─→ Display str1`}
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

// Function to calculate string length
int stringLength(char str[]) {
    int len = 0;
    while (str[len] != '\\0') {
        len++;
    }
    return len;
}

// Function to copy string
void stringCopy(char dest[], char src[]) {
    int i = 0;
    while (src[i] != '\\0') {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\\0';
}

// Function to concatenate strings
void stringConcat(char str1[], char str2[]) {
    int i = 0, j = 0;
    
    // Find end of str1
    while (str1[i] != '\\0') {
        i++;
    }
    
    // Append str2 to str1
    while (str2[j] != '\\0') {
        str1[i] = str2[j];
        i++;
        j++;
    }
    str1[i] = '\\0';
}

// Function to compare strings
int stringCompare(char str1[], char str2[]) {
    int i = 0;
    while (str1[i] != '\\0' && str2[i] != '\\0') {
        if (str1[i] != str2[i]) {
            return str1[i] - str2[i];
        }
        i++;
    }
    return str1[i] - str2[i];
}

int main() {
    char str1[100], str2[100], str3[100];
    int len, result;
    
    // String Length
    printf("Enter a string: ");
    scanf("%s", str1);
    len = stringLength(str1);
    printf("Length of '%s' is: %d\\n\\n", str1, len);
    
    // String Copy
    printf("Enter source string: ");
    scanf("%s", str1);
    stringCopy(str2, str1);
    printf("Copied string: %s\\n\\n", str2);
    
    // String Concatenate
    printf("Enter first string: ");
    scanf("%s", str1);
    printf("Enter second string: ");
    scanf("%s", str2);
    stringCopy(str3, str1);  // Copy str1 to preserve original
    stringConcat(str3, str2);
    printf("Concatenated string: %s\\n\\n", str3);
    
    // String Compare
    printf("Enter first string: ");
    scanf("%s", str1);
    printf("Enter second string: ");
    scanf("%s", str2);
    result = stringCompare(str1, str2);
    if (result == 0) {
        printf("Strings are equal.\\n");
    } else if (result > 0) {
        printf("'%s' is greater than '%s'\\n", str1, str2);
    } else {
        printf("'%s' is less than '%s'\\n", str1, str2);
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 1: String Length</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter a string: Programming</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Length of 'Programming' is: 11</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2: String Copy</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter source string: Hello</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Copied string: Hello</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 3: String Concatenate</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter first string: Hello
Enter second string: World`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Concatenated string: HelloWorld</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 4: String Compare</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter first string: Apple
Enter second string: Banana`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">'Apple' is less than 'Banana'</pre>
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
              String operations are fundamental in text processing and are used extensively:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Text Processing:</strong> Word processors, text editors, and document management systems</li>
              <li><strong>Search Engines:</strong> String matching, searching, and indexing operations</li>
              <li><strong>Data Validation:</strong> Checking input formats, email validation, password strength</li>
              <li><strong>Parsing:</strong> Breaking down text into tokens, parsing configuration files, JSON/XML processing</li>
              <li><strong>Database Operations:</strong> SQL queries, string matching in WHERE clauses</li>
              <li><strong>Web Development:</strong> URL processing, form data handling, template engines</li>
              <li><strong>Compiler Design:</strong> Lexical analysis, tokenization, parsing source code</li>
              <li><strong>Natural Language Processing:</strong> Text analysis, sentiment analysis, language translation</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding how strings work at a low level (as character arrays) is crucial for efficient text processing and is fundamental to many programming tasks.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-07-matrix-operations"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 7
        </Link>
        <Link
          href="/labs/c-programming/exp-09-fibonacci-recursion"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 9
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}

