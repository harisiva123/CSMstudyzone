import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 8 – String Operations (Length, Copy, Concatenate, Compare) | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment to implement string operations including length, copy, concatenate, and compare without using built-in functions. Includes algorithm, flowchart, code, sample I/O, viva questions, and applications.",
  keywords: [
    "C programming lab",
    "string operations",
    "string length",
    "string copy",
    "string concatenate",
    "string compare",
    "C lab manual",
    "character arrays"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-08-string-operations",
  },
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
            <p className="text-gray-700 leading-relaxed mb-3">
              To implement basic string manipulation operations including finding string length, copying strings, concatenating strings, and comparing 
              strings without using built-in string functions in C programming. This experiment helps students understand how strings work internally 
              as character arrays and how to manipulate them using loops and pointer arithmetic.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to work with null-terminated strings, understand the importance of the null character ('\0'), 
              and implement fundamental string operations that form the basis of more complex text processing tasks.
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
              <li>Understand how strings are stored as character arrays with null termination</li>
              <li>Implement string length calculation by counting characters until null terminator</li>
              <li>Implement string copy operation character by character</li>
              <li>Implement string concatenation by appending one string to another</li>
              <li>Implement string comparison by comparing characters lexicographically</li>
              <li>Work with null-terminated strings and understand their importance</li>
              <li>Use loops and pointer arithmetic for string manipulation</li>
              <li>Handle edge cases in string operations (empty strings, null pointers)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithms for each string operation are as follows:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">String Length Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Initialize counter <code className="bg-white px-1 rounded">len = 0</code></li>
                <li>Loop through string until null character is found</li>
                <li>Increment counter for each character</li>
                <li>Return counter value</li>
              </ol>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">String Copy Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Loop through source string until null character</li>
                <li>Copy each character from source to destination</li>
                <li>Add null character at the end of destination</li>
              </ol>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">String Concatenate Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Find the end of first string (position of null character)</li>
                <li>Starting from that position, copy characters from second string</li>
                <li>Add null character at the end</li>
              </ol>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">String Compare Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Compare characters one by one from both strings</li>
                <li>If characters differ, return their difference (str1[i] - str2[i])</li>
                <li>If one string ends, return difference in lengths</li>
                <li>If both are identical, return 0</li>
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
              Understanding how strings work at a low level (as character arrays) is crucial for efficient text processing and is fundamental to many 
              programming tasks. These operations form the foundation for more advanced string manipulation, parsing, and text processing algorithms 
              used in compilers, interpreters, and text editors.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: Why is the null character ('\0') important in C strings?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The null character marks the end of a string. Without it, functions wouldn't know where the string ends, leading to reading beyond 
                allocated memory (buffer overflow). All string functions rely on finding '\0' to determine string length and boundaries. It's 
                automatically added by string literals and must be manually added when building strings character by character.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: What happens if we forget to add '\0' at the end of a string?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Without the null terminator, string functions will continue reading memory beyond the intended string until they find a null byte 
                (which may be far away) or cause a segmentation fault. This leads to undefined behavior, potential crashes, and security vulnerabilities 
                like buffer overflows. Always ensure strings are properly null-terminated.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: How does string comparison work? What values does it return?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                String comparison compares characters lexicographically (dictionary order). Returns 0 if strings are equal, positive value if first 
                string is greater (comes later alphabetically), negative value if first string is less. Comparison stops at first differing character 
                or when one string ends. Example: "apple" &lt; "banana" (negative), "zebra" &gt; "apple" (positive).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: What is the difference between strcpy and strncpy?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">strcpy</code> copies entire string until null character. <code className="bg-gray-100 px-1 rounded">strncpy</code> 
                copies specified number of characters, padding with nulls if source is shorter. <code className="bg-gray-100 px-1 rounded">strncpy</code> is safer 
                for fixed-size buffers as it prevents overflow, but doesn't automatically null-terminate if source length equals or exceeds the limit.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: Why do we need to check if destination has enough space before concatenation?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Concatenation appends characters to the end of the first string. If the destination array doesn't have enough space, writing beyond 
                its bounds causes buffer overflow - overwriting adjacent memory, potentially corrupting data or causing crashes. Always ensure destination 
                array is large enough to hold both strings plus the null terminator.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: Can we use array indexing instead of pointer arithmetic for string operations?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, both are equivalent. <code className="bg-gray-100 px-1 rounded">str[i]</code> and <code className="bg-gray-100 px-1 rounded">*(str + i)</code> 
                access the same element. Array indexing is more readable, while pointer arithmetic can be more efficient in some cases. Choose based on 
                readability and coding style preferences. The compiler often optimizes both to the same code.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What is the time complexity of these string operations?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                All operations are O(n) where n is the string length: length requires scanning until null, copy requires copying n characters, 
                concatenate requires finding end of first (O(m)) then copying second (O(n)), compare requires comparing up to n characters. These 
                are optimal as we must examine each character at least once.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: How would you reverse a string using these basic operations?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use two pointers (start and end), swap characters, move pointers toward center until they meet. Or copy string to temporary, then 
                copy back in reverse order. The two-pointer approach is more efficient (O(n) time, O(1) extra space) compared to using a temporary array.
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
              <li><Link href="/labs/c-programming/exp-07-matrix-operations" className="text-blue-600 hover:text-blue-700 underline">Experiment 7: Matrix Operations</Link></li>
              <li><Link href="/labs/c-programming/exp-09-fibonacci-recursion" className="text-blue-600 hover:text-blue-700 underline">Experiment 9: Fibonacci Recursion</Link></li>
              <li><Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 underline">Important C Programs</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
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


