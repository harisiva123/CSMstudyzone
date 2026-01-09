import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 6 - Array Statistics (Sum, Average, Min, Max) | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment to calculate sum, average, maximum, and minimum of array elements. Includes algorithm, flowchart, code, sample I/O, viva questions, and real-world applications in data analysis.",
  keywords: [
    "C programming lab",
    "array statistics",
    "sum average max min",
    "array operations",
    "C lab manual",
    "data analysis",
    "array iteration"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-06-array-stats",
  },
};

const programCode = String.raw`#include <stdio.h>

int main() {
    int arr[100], n, i;
    int sum = 0, max, min;
    float avg;
    
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++) {
        printf("Element %d: ", i + 1);
        scanf("%d", &arr[i]);
    }
    
    max = arr[0];
    min = arr[0];
    
    for (i = 0; i < n; i++) {
        sum += arr[i];
        
        if (arr[i] > max) {
            max = arr[i];
        }
        
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    avg = (float)sum / n;
    
    printf("\n=== ARRAY STATISTICS ===\n");
    printf("Array elements: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n\n");
    printf("Sum: %d\n", sum);
    printf("Average: %.2f\n", avg);
    printf("Maximum: %d\n", max);
    printf("Minimum: %d\n", min);
    
    return 0;
}`;

const flowchartText = String.raw`START
  |
  +-> Declare: arr[], n, sum=0, avg, max, min, i
  |
  +-> Read n (size of array)
  |
  +-> FOR i = 0 to n-1
  |   |
  |   +-> Read arr[i]
  |
  +-> Initialize: max = arr[0], min = arr[0]
  |
  +-> FOR i = 0 to n-1
  |   |
  |   +-> sum = sum + arr[i]
  |   |
  |   +-> IF (arr[i] > max)
  |   |   |
  |   |   +-> max = arr[i]
  |   |
  |   +-> IF (arr[i] < min)
  |       |
  |       +-> min = arr[i]
  |
  +-> avg = sum / n
  |
  +-> Display sum, avg, max, min
  |
  +-> END`;

export default function Exp06ArrayStatsPage() {
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
          Lab Exercise - 06
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 6 - Array Statistics (Sum, Average, Min, Max)
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              To read an array of numbers, calculate and display statistical measures including sum, average, maximum, and minimum values using 
              array operations and loops in C programming. This experiment helps students understand array traversal, accumulation operations, 
              and finding extreme values in datasets.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to process arrays efficiently, implement common statistical calculations, and understand 
              how to find maximum and minimum values through iteration.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithm for calculating array statistics involves reading elements, accumulating sum, and finding extremes:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Algorithm Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Start:</strong> Begin program execution</li>
                <li><strong>Declare:</strong> Array, size variable, sum, max, min, average, loop counter</li>
                <li><strong>Input Size:</strong> Read number of elements n</li>
                <li><strong>Read Array:</strong> Use loop to read n elements into array</li>
                <li><strong>Initialize:</strong> Set sum = 0, max = arr[0], min = arr[0]</li>
                <li><strong>Process Array:</strong> For each element from index 0 to n-1
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Add element to sum: sum = sum + arr[i]</li>
                    <li>If arr[i] &gt; max, update max = arr[i]</li>
                    <li>If arr[i] &lt; min, update min = arr[i]</li>
                  </ul>
                </li>
                <li><strong>Calculate Average:</strong> average = (float)sum / n (type cast for decimal result)</li>
                <li><strong>Display Results:</strong> Print sum, average, maximum, and minimum</li>
                <li><strong>Stop:</strong> End program execution</li>
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
              <li>Include stdio.h header file</li>
              <li>Declare an array and variables for size, sum, average, max, min</li>
              <li>Read the size of array from user</li>
              <li>Read array elements using a loop</li>
              <li>Calculate sum by iterating through array and adding all elements</li>
              <li>Calculate average: average = sum / size</li>
              <li>Find maximum:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Initialize max = arr[0]</li>
                  <li>Compare each element with max, update if larger</li>
                </ul>
              </li>
              <li>Find minimum:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Initialize min = arr[0]</li>
                  <li>Compare each element with min, update if smaller</li>
                </ul>
              </li>
              <li>Display all calculated statistics</li>
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
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter the number of elements: 5
Enter 5 elements:
Element 1: 10
Element 2: 25
Element 3: 15
Element 4: 30
Element 5: 20`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`=== ARRAY STATISTICS ===
Array elements: 10 25 15 30 20 

Sum: 100
Average: 20.00
Maximum: 30
Minimum: 10`}</pre>
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
              Array statistics are fundamental operations used extensively in real-world applications:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Data Analysis:</strong> Calculating averages, finding peaks and valleys in datasets</li>
              <li><strong>Business Intelligence:</strong> Analyzing sales data, finding best/worst performing products</li>
              <li><strong>Gaming:</strong> Tracking scores, finding highest/lowest scores, calculating average performance</li>
              <li><strong>Weather Applications:</strong> Finding maximum/minimum temperatures, average rainfall</li>
              <li><strong>Financial Software:</strong> Analyzing stock prices, calculating average returns, finding peaks</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: Why do we initialize max and min with arr[0] instead of 0?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Initializing with arr[0] ensures the algorithm works correctly even if all array elements are negative. If we initialized max with 0 
                and all elements were negative, max would remain 0 (incorrect). Using arr[0] guarantees that max and min will be actual array values.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: Why do we use (float)sum instead of just sum when calculating average?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Type casting to float ensures floating-point division instead of integer division. Without casting, sum/n performs integer division 
                (truncates decimal part). For example, 7/3 = 2, but (float)7/3 = 2.33. This gives accurate average with decimal precision.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: Can we find max and min in a single loop? How?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, we can find both in one loop by checking both conditions in each iteration: if (arr[i] &gt; max) max = arr[i]; if (arr[i] &lt; min) min = arr[i];. 
                This is more efficient than using separate loops. The provided code already does this efficiently.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: What is the time complexity of finding sum, average, max, and min?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                All operations have O(n) time complexity where n is the array size, because we need to examine each element once. We can calculate 
                all statistics in a single pass through the array, making it O(n) overall. Space complexity is O(1) as we only use a few extra variables.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What happens if the array is empty (size = 0)?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                If size is 0, accessing arr[0] for initialization would be invalid, and division by zero would occur when calculating average. 
                Always check if size &gt; 0 before processing. Add validation: if (n &lt;= 0) {'{'} printf("Invalid size"); return 1; {'}'}.
              </p>
            </div>
          </div>
        </section>

        <PageFooterBlock />
      </div>
    </main>
  );
}
