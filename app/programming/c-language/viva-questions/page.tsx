import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "C Language Viva & Interview Questions – Complete Guide with Answers | CSM Study Zone",
  description: "Comprehensive collection of 50+ C language viva questions with detailed answers covering memory management, pointers, structures, unions, storage classes, compilation process, arrays, functions, and interview topics for B.Tech CSM students.",
  keywords: [
    "C viva questions",
    "C interview questions",
    "C programming viva",
    "C exam questions",
    "C lab viva",
    "C pointers questions",
    "C interview preparation",
    "C viva answers"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/programming/c-language/viva-questions",
  },
};

export default function VivaQuestionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 prose prose-lg prose-slate">
      <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        C Language Viva & Interview Questions
      </h1>

      {/* Navigation Links */}
      <div className="not-prose mb-8 flex flex-wrap gap-3">
        <Link href="/programming/c-language" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium">
          ← Back to Basics
        </Link>
        <Link href="/programming/c-language/practice-questions" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium">
          Practice Questions
        </Link>
        <Link href="/programming/c-language/full-notes" className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-medium">
          Full Notes
        </Link>
      </div>

      <h2>Basic Concepts (Q1-Q10)</h2>
      
      <div className="space-y-6">
        <div>
          <h3>Q1. What is C programming language? Who developed it?</h3>
          <p><strong>Answer:</strong> C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Laboratories in 1972. It was designed for system programming and is widely used in operating systems, embedded systems, and application development.</p>
        </div>

        <div>
          <h3>Q2. What are the features of C language?</h3>
          <p><strong>Answer:</strong></p>
          <ul>
            <li>Simple and easy to learn</li>
            <li>Portable across different platforms</li>
            <li>Rich library functions</li>
            <li>Fast execution speed</li>
            <li>Low-level memory access</li>
            <li>Modular programming support</li>
            <li>Extensible and flexible</li>
          </ul>
        </div>

        <div>
          <h3>Q3. What is the difference between compiler and interpreter?</h3>
          <p><strong>Answer:</strong> Compiler translates entire program into machine code before execution. Interpreter translates and executes line by line. C uses a compiler.</p>
        </div>

        <div>
          <h3>Q4. What is a token in C?</h3>
          <p><strong>Answer:</strong> Token is the smallest unit of a C program. Types include: keywords, identifiers, constants, strings, operators, and special symbols.</p>
        </div>

        <div>
          <h3>Q5. What are keywords in C?</h3>
          <p><strong>Answer:</strong> Keywords are reserved words with predefined meaning. Examples: int, char, float, if, else, for, while, return, void, struct, etc.</p>
        </div>

        <div>
          <h3>Q6. What is the difference between variable declaration and definition?</h3>
          <p><strong>Answer:</strong> Declaration announces existence and type (e.g., <code>extern int x;</code>). Definition allocates memory and optionally initializes (e.g., <code>int x = 10;</code>).</p>
        </div>

        <div>
          <h3>Q7. What are data types in C? List them.</h3>
          <p><strong>Answer:</strong> Data types specify type of data. Basic types: int, char, float, double, void. Derived types: array, pointer, structure, union, enum.</p>
        </div>

        <div>
          <h3>Q8. What is the difference between signed and unsigned data types?</h3>
          <p><strong>Answer:</strong> Signed types can hold positive and negative values. Unsigned types can hold only non-negative values (zero and positive). Unsigned types have larger positive range.</p>
        </div>

        <div>
          <h3>Q9. What is the size of int in C?</h3>
          <p><strong>Answer:</strong> Size of int depends on compiler and platform. Typically 2 or 4 bytes. Use <code>sizeof(int)</code> to check.</p>
        </div>

        <div>
          <h3>Q10. What are format specifiers? Give examples.</h3>
          <p><strong>Answer:</strong> Format specifiers define data type in I/O operations. Examples: %d (int), %f (float), %c (char), %s (string), %lf (double), %p (pointer).</p>
        </div>
      </div>

      <h2>Operators and Expressions (Q11-Q15)</h2>
      
      <div className="space-y-6">
        <div>
          <h3>Q11. Explain operator precedence in C.</h3>
          <p><strong>Answer:</strong> Operators have priority order. Parentheses () have highest precedence. Then: unary, multiplicative (*, /, %), additive (+, -), relational (&lt;, &gt;, ==, !=), logical (&amp;&amp;, ||), assignment (=).</p>
        </div>

        <div>
          <h3>Q12. What is the difference between = and == operators?</h3>
          <p><strong>Answer:</strong> = is assignment operator (assigns value). == is equality comparison operator (compares values). Using = in if condition assigns value (often bug).</p>
        </div>

        <div>
          <h3>Q13. What are bitwise operators? Give examples.</h3>
          <p><strong>Answer:</strong> Bitwise operators work on bits. &amp; (AND), | (OR), ^ (XOR), ~ (NOT), &lt;&lt; (left shift), &gt;&gt; (right shift). Example: 5 &amp; 3 = 1.</p>
        </div>

        <div>
          <h3>Q14. Explain increment and decrement operators.</h3>
          <p><strong>Answer:</strong> ++ increments by 1, -- decrements by 1. Pre-increment (++x) increments before use. Post-increment (x++) increments after use.</p>
        </div>

        <div>
          <h3>Q15. What is type casting? Give example.</h3>
          <p><strong>Answer:</strong> Converting one data type to another. Explicit: <code>(float)5</code> converts int to float. Implicit: automatic conversion by compiler.</p>
        </div>
      </div>

      <h2>Control Statements and Loops (Q16-Q20)</h2>
      
      <div className="space-y-6">
        <div>
          <h3>Q16. What is the difference between if-else and switch statement?</h3>
          <p><strong>Answer:</strong> if-else checks boolean conditions. switch checks multiple discrete values. switch is faster for many cases, but if-else is more flexible.</p>
        </div>

        <div>
          <h3>Q17. Explain break and continue statements.</h3>
          <p><strong>Answer:</strong> break exits loop/switch immediately. continue skips remaining statements in current iteration and continues next iteration.</p>
        </div>

        <div>
          <h3>Q18. What is the difference between while and do-while loop?</h3>
          <p><strong>Answer:</strong> while checks condition before execution (may not execute). do-while checks condition after execution (executes at least once).</p>
        </div>

        <div>
          <h3>Q19. What is infinite loop? How to create one?</h3>
          <p><strong>Answer:</strong> Loop that never terminates. Created by: <code>while(1)</code>, <code>for(;;)</code>, or condition that never becomes false. Use break to exit.</p>
        </div>

        <div>
          <h3>Q20. Explain nested loops with example.</h3>
          <p><strong>Answer:</strong> Loop inside another loop. Used for 2D arrays, patterns. Example: outer loop for rows, inner loop for columns in matrix.</p>
        </div>
      </div>

      <h2>Arrays and Strings (Q21-Q25)</h2>
      
      <div className="space-y-6">
        <div>
          <h3>Q21. What is an array? How is it declared?</h3>
          <p><strong>Answer:</strong> Array is collection of similar data elements. Declaration: <code>int arr[10];</code> (array of 10 integers). Index starts from 0.</p>
        </div>

        <div>
          <h3>Q22. Why array index starts from 0 in C?</h3>
          <p><strong>Answer:</strong> Array name represents base address. arr[i] is calculated as *(arr + i). So arr[0] is *(arr + 0) = base address. This makes pointer arithmetic simple.</p>
        </div>

        <div>
          <h3>Q23. What is a string in C? How is it stored?</h3>
          <p><strong>Answer:</strong> String is array of characters terminated by null character '\\0'. Stored as character array. Example: <code>char str[] = "Hello";</code></p>
        </div>

        <div>
          <h3>Q24. Explain string functions in C. Give examples.</h3>
          <p><strong>Answer:</strong> strlen() - length, strcpy() - copy, strcat() - concatenate, strcmp() - compare, strstr() - search substring. Include &lt;string.h&gt; header.</p>
        </div>

        <div>
          <h3>Q25. What is 2D array? How to access elements?</h3>
          <p><strong>Answer:</strong> Array of arrays (matrix). Declaration: <code>int matrix[3][3];</code> Access: <code>matrix[row][col]</code> or <code>*(*(matrix + row) + col)</code>.</p>
        </div>
      </div>

      <h2>Functions (Q26-Q30)</h2>
      
      <div className="space-y-6">
        <div>
          <h3>Q26. What is a function? What are its advantages?</h3>
          <p><strong>Answer:</strong> Function is block of code performing specific task. Advantages: reusability, modularity, easier debugging, code organization, abstraction.</p>
        </div>

        <div>
          <h3>Q27. What is function prototype? Why is it needed?</h3>
          <p><strong>Answer:</strong> Function declaration before definition. Tells compiler about function name, return type, parameters. Needed when function is called before definition.</p>
        </div>

        <div>
          <h3>Q28. Explain call by value and call by reference.</h3>
          <p><strong>Answer:</strong> Call by value passes copy of variable (original unchanged). Call by reference passes address using pointers (original can be modified).</p>
        </div>

        <div>
          <h3>Q29. What is recursion? Give example.</h3>
          <p><strong>Answer:</strong> Function calling itself. Must have base case to terminate. Example: factorial, fibonacci. Slower than iteration but simpler for some problems.</p>
        </div>

        <div>
          <h3>Q30. What is the difference between function declaration and definition?</h3>
          <p><strong>Answer:</strong> Declaration (prototype) announces function signature. Definition contains actual implementation/code of function.</p>
        </div>
      </div>

      <h2>Pointers (Q31-Q35)</h2>
      
      <div className="space-y-6">
        <div>
          <h3>Q31. What is a pointer? How is it declared?</h3>
          <p><strong>Answer:</strong> Pointer stores address of variable. Declaration: <code>int *ptr;</code> (pointer to integer). Use &amp; to get address, * to dereference.</p>
        </div>

        <div>
          <h3>Q32. What is NULL pointer? Why is it used?</h3>
          <p><strong>Answer:</strong> NULL pointer points to nothing (address 0). Used to indicate pointer doesn't point to valid memory. Check for NULL before dereferencing to avoid errors.</p>
        </div>

        <div>
          <h3>Q33. What is pointer arithmetic? Explain.</h3>
          <p><strong>Answer:</strong> Arithmetic operations on pointers. ptr + 1 moves to next element (not next byte). Size depends on data type. Example: int* ptr; ptr++ increments by sizeof(int).</p>
        </div>

        <div>
          <h3>Q34. What is void pointer? How is it used?</h3>
          <p><strong>Answer:</strong> void* can point to any data type. Cannot be dereferenced directly. Must cast to specific type before use. Used in generic programming.</p>
        </div>

        <div>
          <h3>Q35. What is pointer to pointer? Give example.</h3>
          <p><strong>Answer:</strong> Pointer storing address of another pointer. Declaration: <code>int **ptr;</code> Used for dynamic 2D arrays, function parameters modifying pointer.</p>
        </div>
      </div>

      <h2>Memory Related Questions (Q36-Q40)</h2>
      
      <div className="space-y-6">
        <div>
          <h3>Q36. Explain dynamic memory allocation in C.</h3>
          <p><strong>Answer:</strong> Allocating memory at runtime. Functions: malloc() - allocates, calloc() - allocates and initializes to 0, realloc() - resizes, free() - deallocates.</p>
        </div>

        <div>
          <h3>Q37. What is the difference between malloc() and calloc()?</h3>
          <p><strong>Answer:</strong> malloc() takes size in bytes, returns uninitialized memory. calloc() takes count and size, returns memory initialized to zero. calloc() is safer.</p>
        </div>

        <div>
          <h3>Q38. What is memory leak? How to prevent it?</h3>
          <p><strong>Answer:</strong> Memory leak occurs when allocated memory is not freed. Prevent by: always free() allocated memory, set pointer to NULL after free, match malloc/calloc with free.</p>
        </div>

        <div>
          <h3>Q39. What is dangling pointer? How to avoid it?</h3>
          <p><strong>Answer:</strong> Pointer pointing to freed memory. Avoid by: set pointer to NULL after free(), don't use pointer after freeing, be careful with function returns.</p>
        </div>

        <div>
          <h3>Q40. What is stack and heap memory?</h3>
          <p><strong>Answer:</strong> Stack: automatic memory for local variables, managed by compiler, faster, limited size. Heap: dynamic memory via malloc(), managed by programmer, slower, larger size.</p>
        </div>
      </div>

      <h2>Structures and Unions (Q41-Q45)</h2>
      
      <div className="space-y-6">
        <div>
          <h3>Q41. What is a structure? How is it defined?</h3>
          <p><strong>Answer:</strong> Structure groups related data of different types. Definition: <code>struct Student {'{'} int roll; char name[50]; float marks; {'};'}</code></p>
        </div>

        <div>
          <h3>Q42. What is the difference between structure and union?</h3>
          <p><strong>Answer:</strong> Structure allocates separate memory for each member (size = sum of members). Union shares memory (size = largest member). Only one union member active at a time.</p>
        </div>

        <div>
          <h3>Q43. How to access structure members?</h3>
          <p><strong>Answer:</strong> Using dot operator: <code>struct_var.member</code>. Using arrow operator with pointer: <code>struct_ptr-&gt;member</code> or <code>(*struct_ptr).member</code>.</p>
        </div>

        <div>
          <h3>Q44. What is typedef? Give example.</h3>
          <p><strong>Answer:</strong> Creates alias for data type. Example: <code>typedef struct Student Student;</code> Now use <code>Student s1;</code> instead of <code>struct Student s1;</code></p>
        </div>

        <div>
          <h3>Q45. Can structure contain functions?</h3>
          <p><strong>Answer:</strong> No, C structures cannot contain functions. They can contain only data members. Use function pointers to achieve similar behavior.</p>
        </div>
      </div>

      <h2>Storage Classes (Q46-Q47)</h2>
      
      <div className="space-y-6">
        <div>
          <h3>Q46. What are storage classes in C? List them.</h3>
          <p><strong>Answer:</strong> Storage classes define scope, lifetime, and location of variables. Types: auto (default local), static (retains value), extern (global), register (fast access).</p>
        </div>

        <div>
          <h3>Q47. What is the difference between static and extern?</h3>
          <p><strong>Answer:</strong> static: internal linkage, retains value between function calls, scope limited to file/block. extern: external linkage, declares global variable defined elsewhere.</p>
        </div>
      </div>

      <h2>Compilation Process (Q48-Q50)</h2>
      
      <div className="space-y-6">
        <div>
          <h3>Q48. Explain the compilation process in C.</h3>
          <p><strong>Answer:</strong> Four stages:</p>
          <ol>
            <li><strong>Preprocessing:</strong> Expands macros, includes headers (#include, #define)</li>
            <li><strong>Compilation:</strong> Converts source code to assembly language</li>
            <li><strong>Assembly:</strong> Converts assembly to object code (.o files)</li>
            <li><strong>Linking:</strong> Links object files and libraries to create executable</li>
          </ol>
        </div>

        <div>
          <h3>Q49. What are preprocessor directives? Give examples.</h3>
          <p><strong>Answer:</strong> Instructions processed before compilation. Examples: #include (includes header), #define (defines macro), #ifdef/#endif (conditional compilation), #pragma.</p>
        </div>

        <div>
          <h3>Q50. What is the difference between #include &lt;stdio.h&gt; and #include "stdio.h"?</h3>
          <p><strong>Answer:</strong> &lt;stdio.h&gt; searches in system directories. "stdio.h" searches in current directory first, then system directories. Use &lt;&gt; for system headers, "" for user headers.</p>
        </div>
      </div>

      <div className="not-prose mt-8 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
        <p className="text-indigo-800 font-semibold mb-2">💡 Viva Preparation Tip</p>
        <p className="text-indigo-700">
          Practice explaining concepts in your own words. Understand not just what, but why and how. 
          Be ready to write small code snippets. Review compiler errors and how to fix them. 
          Practice explaining with real-world examples.
        </p>
      </div>

      {/* Summary Table */}
      <section className="not-prose mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Question Categories Summary</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Category</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Questions</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Importance</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">Basic Concepts</td>
                <td className="border border-gray-300 px-4 py-3">Q1-Q10: C basics, tokens, data types, variables</td>
                <td className="border border-gray-300 px-4 py-3">High</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Operators & Control</td>
                <td className="border border-gray-300 px-4 py-3">Q11-Q20: Operators, control statements, loops</td>
                <td className="border border-gray-300 px-4 py-3">High</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">Arrays & Functions</td>
                <td className="border border-gray-300 px-4 py-3">Q21-Q30: Arrays, strings, functions, recursion</td>
                <td className="border border-gray-300 px-4 py-3">Very High</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Pointers & Memory</td>
                <td className="border border-gray-300 px-4 py-3">Q31-Q40: Pointers, dynamic memory, stack/heap</td>
                <td className="border border-gray-300 px-4 py-3">Very High</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">Structures & Advanced</td>
                <td className="border border-gray-300 px-4 py-3">Q41-Q50: Structures, unions, storage classes, compilation</td>
                <td className="border border-gray-300 px-4 py-3">High</td>
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
            <h3 className="font-semibold text-gray-900 mb-2">Q1: How should I prepare for C programming viva?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Understand concepts deeply, not just memorize answers. Practice explaining in your own words. Be ready to write code snippets. 
              Review your lab programs and understand them thoroughly. Practice explaining algorithms and logic. Understand why things work, not 
              just what they do. Prepare examples for each concept.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q2: What topics are most frequently asked in viva?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Pointers (most common), memory management (malloc/free), arrays and strings, functions (call by value/reference), structures, 
              file handling, and compilation process. Questions about your lab programs are also very common. Be prepared to explain any program 
              you've written, including algorithms and logic.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q3: How do I answer questions about pointers confidently?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Understand that pointers store addresses. Practice with simple examples. Draw memory diagrams. Explain pointer arithmetic clearly. 
              Understand the relationship between arrays and pointers. Practice explaining with examples: <code className="bg-gray-100 px-1 rounded">int *ptr = &amp;x;</code> 
              means ptr stores address of x. Be clear about * (dereference) and &amp; (address of) operators.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q4: What if I don't know the answer to a question?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Be honest - say you're not sure but explain what you do know. Try to reason through the problem. Show your thinking process. 
              It's better to admit uncertainty than to guess incorrectly. If you know a related concept, mention it. Examiners appreciate honesty 
              and logical thinking.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q5: Should I memorize all these answers?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Don't memorize - understand concepts. Once you understand a concept, you can explain it in your own words. Understanding enables 
              you to answer variations and related questions. Focus on understanding why things work, not just what they are. Practice explaining 
              concepts to others.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q6: How important is it to know the compilation process?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Very important - it's frequently asked. Understand the four stages: preprocessing (macros, includes), compilation (source to assembly), 
              assembly (assembly to object code), and linking (object files to executable). Know what happens in each stage. This shows deep 
              understanding of how C programs work.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q7: What's the best way to explain complex concepts?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Start with simple explanation, then add details. Use examples and analogies. Draw diagrams if possible. Break complex concepts into 
              smaller parts. Relate to real-world examples. Show code examples. Explain step-by-step. Practice explaining to friends or family - 
              if you can explain it simply, you understand it well.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Q8: How do I handle questions about my lab programs?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Review all your lab programs before viva. Understand the algorithm, logic, and code. Be able to explain why you used specific 
              approaches. Know alternative solutions. Understand time/space complexity if applicable. Be ready to modify programs or explain 
              how you would improve them. Practice explaining each program clearly.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="not-prose mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Viva examinations test not just your knowledge but your understanding and ability to explain concepts. These questions cover fundamental 
          C programming concepts that every programmer should know. Understanding these concepts deeply will help you not just in viva but in your 
          programming career.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Focus on understanding concepts rather than memorizing answers. Practice explaining concepts in your own words. Be confident but honest 
          - it's okay to say you don't know something. The key is to show your understanding and thinking process. Regular practice and thorough 
          preparation will help you perform well in viva examinations.
        </p>
      </section>

      {/* Internal Linking */}
      <section className="not-prose mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">Related Links</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/programming/c-language/full-notes" className="text-blue-600 hover:text-blue-700 underline">Full C Language Notes</Link></li>
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

