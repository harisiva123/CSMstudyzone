import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 2 – Find Largest of Three Numbers | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment to find the largest among three numbers using if-else statements. Includes algorithm, flowchart, code, sample I/O, viva questions, and real-world applications.",
  keywords: [
    "C programming lab",
    "largest of three numbers",
    "if-else statements",
    "conditional statements",
    "C lab manual",
    "decision making in C",
    "comparison operators",
    "C programming experiments"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-02-largest-of-three",
  },
};

export default function Exp02LargestOfThreePage() {
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
          Lab Exercise – 02
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 2 – Largest of Three Numbers
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              To find the largest among three numbers entered by the user using conditional statements (<code className="bg-gray-100 px-1.5 py-0.5 rounded">if-else</code> and nested <code className="bg-gray-100 px-1.5 py-0.5 rounded">if-else</code>) and comparison operators in C programming. This experiment helps students understand decision-making logic, conditional statements, and comparison operations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to implement conditional logic, understand the flow of control in programs, 
              and practice using relational and logical operators to solve real-world problems.
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
              <li>Understand and implement conditional statements (if, if-else, nested if-else) in C programming</li>
              <li>Use relational operators (&gt;, &lt;, &gt;=, &lt;=, ==, !=) for comparison operations</li>
              <li>Apply logical operators (&amp;&amp;, ||, !) to combine multiple conditions</li>
              <li>Design algorithms for finding maximum/minimum values among multiple inputs</li>
              <li>Write clean, readable code using appropriate conditional structures</li>
              <li>Test programs with different input scenarios including edge cases</li>
              <li>Understand the concept of decision-making in programming</li>
              <li>Apply conditional logic to solve real-world problems</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithm to find the largest of three numbers can be implemented using different approaches. Here's a step-by-step algorithm:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Algorithm Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Start:</strong> Begin the program execution</li>
                <li><strong>Input:</strong> Read three numbers from the user and store them in variables <code className="bg-white px-1 rounded">a</code>, <code className="bg-white px-1 rounded">b</code>, and <code className="bg-white px-1 rounded">c</code></li>
                <li><strong>Compare:</strong> Check if <code className="bg-white px-1 rounded">a</code> is greater than or equal to both <code className="bg-white px-1 rounded">b</code> and <code className="bg-white px-1 rounded">c</code>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>If true, then <code className="bg-white px-1 rounded">a</code> is the largest number</li>
                    <li>If false, proceed to next comparison</li>
                  </ul>
                </li>
                <li><strong>Compare:</strong> Check if <code className="bg-white px-1 rounded">b</code> is greater than or equal to both <code className="bg-white px-1 rounded">a</code> and <code className="bg-white px-1 rounded">c</code>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>If true, then <code className="bg-white px-1 rounded">b</code> is the largest number</li>
                    <li>If false, proceed to next step</li>
                  </ul>
                </li>
                <li><strong>Default:</strong> If neither <code className="bg-white px-1 rounded">a</code> nor <code className="bg-white px-1 rounded">b</code> is largest, then <code className="bg-white px-1 rounded">c</code> must be the largest</li>
                <li><strong>Output:</strong> Display the largest number</li>
                <li><strong>Stop:</strong> End the program</li>
              </ol>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700 text-sm">
                <strong>Alternative Approach:</strong> You can also use nested if-else statements. First compare <code className="bg-white px-1 rounded">a</code> and <code className="bg-white px-1 rounded">b</code> to find the larger one, 
                then compare that result with <code className="bg-white px-1 rounded">c</code> to determine the overall largest number.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdio.h</code> header file</li>
              <li>Declare three variables to store the numbers</li>
              <li>Read three numbers from the user using <code className="bg-gray-100 px-1.5 py-0.5 rounded">scanf()</code></li>
              <li>Use nested if-else statements to compare the numbers:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Compare first number with second and third</li>
                  <li>If first is largest, display it</li>
                  <li>Else compare second with third</li>
                  <li>Display the largest number</li>
                </ul>
              </li>
              <li>Alternatively, use logical AND operator (<code className="bg-gray-100 px-1.5 py-0.5 rounded">&&</code>) for cleaner code</li>
              <li>Compile and test with different input combinations</li>
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
  ├─→ Declare variables: a, b, c, largest
  │
  ├─→ Read a, b, c
  │
  ├─→ IF (a >= b && a >= c)
  │   │
  │   └─→ largest = a
  │
  ├─→ ELSE IF (b >= a && b >= c)
  │   │
  │   └─→ largest = b
  │
  ├─→ ELSE
  │   │
  │   └─→ largest = c
  │
  ├─→ Display "Largest number is: " + largest
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

int main() {
    int a, b, c, largest;
    
    // Input three numbers
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    
    // Find the largest using if-else
    if (a >= b && a >= c) {
        largest = a;
    }
    else if (b >= a && b >= c) {
        largest = b;
    }
    else {
        largest = c;
    }
    
    // Display result
    printf("\\nThe largest number among %d, %d, and %d is: %d\\n", 
           a, b, c, largest);
    
    return 0;
}

// Alternative method using nested if-else:
/*
if (a > b) {
    if (a > c) {
        largest = a;
    } else {
        largest = c;
    }
} else {
    if (b > c) {
        largest = b;
    } else {
        largest = c;
    }
}
*/`}</code>
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
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter three numbers: 15 42 8</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">The largest number among 15, 42, and 8 is: 42</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter three numbers: 100 100 50</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">The largest number among 100, 100, and 50 is: 100</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 3:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">Enter three numbers: 7 12 25</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">The largest number among 7, 12, and 25 is: 25</pre>
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
              Finding the maximum or minimum value among multiple inputs is a fundamental operation in programming with numerous real-world applications:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Grading Systems:</strong> Finding the highest score among multiple test results to determine the top performer</li>
              <li><strong>Business Analytics:</strong> Identifying the best performing product, region, or salesperson in business intelligence systems</li>
              <li><strong>Game Development:</strong> Determining the highest score, best time, maximum damage, or top player in leaderboards</li>
              <li><strong>Data Analysis:</strong> Finding peak values, maximum temperatures, highest sales, or peak traffic in datasets</li>
              <li><strong>Resource Management:</strong> Allocating resources based on maximum demand, priority, or capacity requirements</li>
              <li><strong>Sorting Algorithms:</strong> This logic is fundamental to sorting and searching algorithms like selection sort</li>
              <li><strong>Decision Making Systems:</strong> AI systems that need to choose the best option from multiple alternatives</li>
              <li><strong>Financial Applications:</strong> Finding maximum profit, highest stock price, or best investment option</li>
              <li><strong>E-commerce:</strong> Determining the highest-rated product, most popular item, or best deal among multiple options</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding conditional logic and comparison operations is essential for implementing decision-making in programs. 
              This experiment forms the foundation for more complex algorithms and data structures that rely on finding maximum or minimum values.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What is the difference between <code className="bg-gray-100 px-1 rounded">if</code> and <code className="bg-gray-100 px-1 rounded">if-else</code> statements?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The <code className="bg-gray-100 px-1 rounded">if</code> statement executes code only when the condition is true. The <code className="bg-gray-100 px-1 rounded">if-else</code> statement executes one block when true and another block when false, ensuring that exactly one path is taken.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: What are relational operators? List them.</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Relational operators compare two values and return true (1) or false (0). They include: <code className="bg-gray-100 px-1 rounded">&gt;</code> (greater than), 
                <code className="bg-gray-100 px-1 rounded">&lt;</code> (less than), <code className="bg-gray-100 px-1 rounded">&gt;=</code> (greater than or equal), 
                <code className="bg-gray-100 px-1 rounded">&lt;=</code> (less than or equal), <code className="bg-gray-100 px-1 rounded">==</code> (equal to), and 
                <code className="bg-gray-100 px-1 rounded">!=</code> (not equal to).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: What is the logical AND operator? How does it work?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The logical AND operator (<code className="bg-gray-100 px-1 rounded">&amp;&amp;</code>) returns true only when both conditions are true. For example, 
                <code className="bg-gray-100 px-1 rounded">(a &gt;= b &amp;&amp; a &gt;= c)</code> is true only if <code className="bg-gray-100 px-1 rounded">a</code> is greater than or equal to both <code className="bg-gray-100 px-1 rounded">b</code> and <code className="bg-gray-100 px-1 rounded">c</code>.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: Explain nested if-else statements with an example.</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Nested if-else means an if-else statement inside another if-else. For example: <code className="bg-gray-100 px-1 rounded">if (a &gt; b) {'{'} if (a &gt; c) largest = a; else largest = c; {'}'} else {'{'} if (b &gt; c) largest = b; else largest = c; {'}'}</code>. 
                This allows checking multiple conditions in a hierarchical manner.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What happens if all three numbers are equal?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                If all three numbers are equal, the program will still work correctly. Using <code className="bg-gray-100 px-1 rounded">&gt;=</code> (greater than or equal) ensures that 
                the first condition <code className="bg-gray-100 px-1 rounded">(a &gt;= b &amp;&amp; a &gt;= c)</code> will be true, and <code className="bg-gray-100 px-1 rounded">a</code> will be selected as the largest (which is correct since all are equal).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: Can we use <code className="bg-gray-100 px-1 rounded">switch</code> statement for this problem? Why or why not?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No, we cannot use <code className="bg-gray-100 px-1 rounded">switch</code> for this problem because <code className="bg-gray-100 px-1 rounded">switch</code> works with constant values and expressions that evaluate to integers or characters. 
                Here we need to compare variable values using relational operators, which requires conditional statements.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: What is the time complexity of finding the largest of three numbers?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The time complexity is O(1) - constant time, because we perform a fixed number of comparisons (at most 2-3 comparisons) regardless of the input values. 
                The number of operations doesn't grow with input size since we're only comparing three numbers.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: How would you modify this program to find the smallest of three numbers?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                To find the smallest, change all <code className="bg-gray-100 px-1 rounded">&gt;=</code> operators to <code className="bg-gray-100 px-1 rounded">&lt;=</code> operators. 
                For example: <code className="bg-gray-100 px-1 rounded">if (a &lt;= b &amp;&amp; a &lt;= c)</code> would check if <code className="bg-gray-100 px-1 rounded">a</code> is the smallest.
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
              <li><Link href="/labs/c-programming/exp-01-basic-io" className="text-blue-600 hover:text-blue-700 underline">Experiment 1: Basic I/O</Link></li>
              <li><Link href="/labs/c-programming/exp-03-factorial" className="text-blue-600 hover:text-blue-700 underline">Experiment 3: Factorial</Link></li>
              <li><Link href="/programming/c-language/programming-tips" className="text-blue-600 hover:text-blue-700 underline">C Programming Tips</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-01-basic-io"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 1
        </Link>
        <Link
          href="/labs/c-programming/exp-03-factorial"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 3
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}


