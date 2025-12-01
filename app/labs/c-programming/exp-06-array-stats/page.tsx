import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiment 6 – Array Statistics | C Programming Lab",
  description:
    "Calculate sum, average, maximum, and minimum of array elements in C programming. Learn array operations and iteration.",
  keywords: ["C programming", "arrays", "statistics", "sum", "average", "max", "min", "C lab"],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-06-array-stats",
  },
};

export default function Exp06ArrayStatsPage() {
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
          Lab Exercise – 06
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 6 – Array Statistics
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed">
              To read an array of numbers, calculate and display statistical measures including sum, average, maximum, and minimum values using array operations and loops in C programming.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Procedure
          </h2>
          <div className="prose prose-slate max-w-none">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Include <code className="bg-gray-100 px-1.5 py-0.5 rounded">stdio.h</code> header file</li>
              <li>Declare an array and variables for size, sum, average, max, min</li>
              <li>Read the size of array from user</li>
              <li>Read array elements using a loop</li>
              <li>Calculate sum by iterating through array and adding all elements</li>
              <li>Calculate average: <code className="bg-gray-100 px-1.5 py-0.5 rounded">average = sum / size</code></li>
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
{`START
  │
  ├─→ Declare: arr[], n, sum=0, avg, max, min, i
  │
  ├─→ Read n (size of array)
  │
  ├─→ FOR i = 0 to n-1
  │   │
  │   └─→ Read arr[i]
  │
  ├─→ Initialize: max = arr[0], min = arr[0]
  │
  ├─→ FOR i = 0 to n-1
  │   │
  │   ├─→ sum = sum + arr[i]
  │   │
  │   ├─→ IF (arr[i] > max)
  │   │   │
  │   │   └─→ max = arr[i]
  │   │
  │   └─→ IF (arr[i] < min)
  │       │
  │       └─→ min = arr[i]
  │
  ├─→ avg = sum / n
  │
  ├─→ Display sum, avg, max, min
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
    int arr[100], n, i;
    int sum = 0, max, min;
    float avg;
    
    // Input array size
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    // Input array elements
    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++) {
        printf("Element %d: ", i + 1);
        scanf("%d", &arr[i]);
    }
    
    // Initialize max and min with first element
    max = arr[0];
    min = arr[0];
    
    // Calculate sum, find max and min
    for (i = 0; i < n; i++) {
        sum += arr[i];
        
        if (arr[i] > max) {
            max = arr[i];
        }
        
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    // Calculate average
    avg = (float)sum / n;
    
    // Display results
    printf("\\n=== ARRAY STATISTICS ===\\n");
    printf("Array elements: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n\\n");
    printf("Sum: %d\\n", sum);
    printf("Average: %.2f\\n", avg);
    printf("Maximum: %d\\n", max);
    printf("Minimum: %d\\n", min);
    
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
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter the number of elements: 7
Enter 7 elements:
Element 1: 45
Element 2: 12
Element 3: 78
Element 4: 34
Element 5: 56
Element 6: 23
Element 7: 67`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`=== ARRAY STATISTICS ===
Array elements: 45 12 78 34 56 23 67 

Sum: 315
Average: 45.00
Maximum: 78
Minimum: 12`}</pre>
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
              <li><strong>Academic Systems:</strong> Calculating class averages, finding highest/lowest grades</li>
              <li><strong>Sensor Data:</strong> Processing readings from sensors, finding extremes and averages</li>
              <li><strong>Performance Monitoring:</strong> Analyzing system metrics, finding bottlenecks</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding array operations and statistical calculations is essential for data processing, which is a core skill in programming and software development.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-05-menu-calculator"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 5
        </Link>
        <Link
          href="/labs/c-programming/exp-07-matrix-operations"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 7
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}


