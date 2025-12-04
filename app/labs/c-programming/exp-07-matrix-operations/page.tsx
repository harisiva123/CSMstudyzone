import type { Metadata } from "next";
import Link from "next/link";
import PageFooterBlock from "@/components/PageFooterBlock";

export const metadata: Metadata = {
  title: "Experiment 7 – Matrix Operations (Addition, Subtraction, Multiplication) | C Programming Lab Manual",
  description:
    "Complete C programming lab experiment for matrix operations including addition, subtraction, and multiplication. Includes algorithm, flowchart, code with dimension validation, sample I/O, viva questions, and applications in graphics and ML.",
  keywords: [
    "C programming lab",
    "matrix operations",
    "2D arrays",
    "matrix addition",
    "matrix multiplication",
    "C lab manual",
    "nested loops",
    "matrix programming"
  ],
  alternates: {
    canonical: "https://www.csmstudyzone.in/labs/c-programming/exp-07-matrix-operations",
  },
};

export default function Exp07MatrixOperationsPage() {
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
          Lab Exercise – 07
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Experiment 7 – Matrix Operations
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Aim
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              To perform matrix operations (addition, subtraction, and multiplication) on two matrices using 2D arrays and nested loops in C programming. 
              This experiment helps students understand 2D arrays, nested loop structures, and mathematical operations on matrices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this experiment, students will learn to work with multidimensional arrays, implement matrix algorithms, validate matrix dimensions 
              for operations, and understand the complexity of matrix multiplication.
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
              <li>Declare and initialize 2D arrays (matrices)</li>
              <li>Read and display matrices using nested loops</li>
              <li>Understand matrix dimension requirements for different operations</li>
              <li>Implement matrix addition and subtraction (same dimensions required)</li>
              <li>Implement matrix multiplication (cols1 = rows2)</li>
              <li>Validate matrix dimensions before performing operations</li>
              <li>Use three nested loops for matrix multiplication</li>
              <li>Format matrix output for readability</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Algorithm
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3">
              The algorithm for matrix operations depends on the operation type. Here are the algorithms for each:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Matrix Addition/Subtraction Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Read dimensions (rows, cols) of both matrices</li>
                <li>Validate: rows1 == rows2 AND cols1 == cols2</li>
                <li>Read elements of matrix1 and matrix2</li>
                <li>For each position (i, j):
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Addition: result[i][j] = matrix1[i][j] + matrix2[i][j]</li>
                    <li>Subtraction: result[i][j] = matrix1[i][j] - matrix2[i][j]</li>
                  </ul>
                </li>
                <li>Display result matrix</li>
              </ol>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Matrix Multiplication Algorithm:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Read dimensions: matrix1 (rows1 × cols1), matrix2 (rows2 × cols2)</li>
                <li>Validate: cols1 == rows2 (required for multiplication)</li>
                <li>Read elements of both matrices</li>
                <li>For each row i in matrix1 (0 to rows1-1):
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>For each column j in matrix2 (0 to cols2-1):
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>Initialize result[i][j] = 0</li>
                        <li>For k from 0 to cols1-1:
                          <ul className="list-disc list-inside ml-6 mt-1">
                            <li>result[i][j] += matrix1[i][k] * matrix2[k][j]</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Result matrix dimensions: rows1 × cols2</li>
                <li>Display result matrix</li>
              </ol>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700 text-sm">
                <strong>Key Formula:</strong> For matrix multiplication, element result[i][j] is the dot product of row i of matrix1 and column j of matrix2.
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
              <li>Declare three 2D arrays: <code className="bg-gray-100 px-1.5 py-0.5 rounded">matrix1</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">matrix2</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">result</code></li>
              <li>Read dimensions (rows and columns) of matrices</li>
              <li>Read elements of both matrices using nested loops</li>
              <li>For Addition/Subtraction:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Matrices must have same dimensions</li>
                  <li>Add/subtract corresponding elements</li>
                </ul>
              </li>
              <li>For Multiplication:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Columns of first matrix = Rows of second matrix</li>
                  <li>Use three nested loops: i, j, k</li>
                  <li>result[i][j] = sum of (matrix1[i][k] * matrix2[k][j])</li>
                </ul>
              </li>
              <li>Display result matrix using nested loops</li>
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
  ├─→ Declare: matrix1[][], matrix2[][], result[][]
  ├─→ Read rows, cols
  │
  ├─→ Read matrix1 elements (nested loops)
  ├─→ Read matrix2 elements (nested loops)
  │
  ├─→ FOR i = 0 to rows-1
  │   │
  │   ├─→ FOR j = 0 to cols-1
  │   │   │
  │   │   ├─→ Addition: result[i][j] = matrix1[i][j] + matrix2[i][j]
  │   │   └─→ Subtraction: result[i][j] = matrix1[i][j] - matrix2[i][j]
  │   │
  │   └─→ END FOR j
  │
  └─→ END FOR i
  │
  ├─→ Display result matrix
  │
  └─→ END

For Multiplication:
  FOR i = 0 to rows1-1
    FOR j = 0 to cols2-1
      result[i][j] = 0
      FOR k = 0 to cols1-1
        result[i][j] += matrix1[i][k] * matrix2[k][j]
      END FOR k
    END FOR j
  END FOR i`}
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
    int matrix1[10][10], matrix2[10][10], result[10][10];
    int rows1, cols1, rows2, cols2, i, j, k;
    int choice;
    
    printf("Enter dimensions of first matrix (rows cols): ");
    scanf("%d %d", &rows1, &cols1);
    
    printf("Enter elements of first matrix:\\n");
    for (i = 0; i < rows1; i++) {
        for (j = 0; j < cols1; j++) {
            scanf("%d", &matrix1[i][j]);
        }
    }
    
    printf("Enter dimensions of second matrix (rows cols): ");
    scanf("%d %d", &rows2, &cols2);
    
    printf("Enter elements of second matrix:\\n");
    for (i = 0; i < rows2; i++) {
        for (j = 0; j < cols2; j++) {
            scanf("%d", &matrix2[i][j]);
        }
    }
    
    printf("\\n1. Addition\\n2. Subtraction\\n3. Multiplication\\n");
    printf("Enter choice: ");
    scanf("%d", &choice);
    
    switch(choice) {
        case 1: // Addition
            if (rows1 != rows2 || cols1 != cols2) {
                printf("Error! Matrices must have same dimensions for addition.\\n");
                return 1;
            }
            for (i = 0; i < rows1; i++) {
                for (j = 0; j < cols1; j++) {
                    result[i][j] = matrix1[i][j] + matrix2[i][j];
                }
            }
            printf("\\nResult of Addition:\\n");
            break;
            
        case 2: // Subtraction
            if (rows1 != rows2 || cols1 != cols2) {
                printf("Error! Matrices must have same dimensions for subtraction.\\n");
                return 1;
            }
            for (i = 0; i < rows1; i++) {
                for (j = 0; j < cols1; j++) {
                    result[i][j] = matrix1[i][j] - matrix2[i][j];
                }
            }
            printf("\\nResult of Subtraction:\\n");
            break;
            
        case 3: // Multiplication
            if (cols1 != rows2) {
                printf("Error! Columns of first matrix must equal rows of second matrix.\\n");
                return 1;
            }
            for (i = 0; i < rows1; i++) {
                for (j = 0; j < cols2; j++) {
                    result[i][j] = 0;
                    for (k = 0; k < cols1; k++) {
                        result[i][j] += matrix1[i][k] * matrix2[k][j];
                    }
                }
            }
            printf("\\nResult of Multiplication:\\n");
            break;
            
        default:
            printf("Invalid choice!\\n");
            return 1;
    }
    
    // Display result matrix
    int result_rows = rows1;
    int result_cols = (choice == 3) ? cols2 : cols1;
    
    for (i = 0; i < result_rows; i++) {
        for (j = 0; j < result_cols; j++) {
            printf("%d\\t", result[i][j]);
        }
        printf("\\n");
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 1: Addition</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter dimensions of first matrix (rows cols): 2 2
Enter elements of first matrix:
1 2
3 4
Enter dimensions of second matrix (rows cols): 2 2
Enter elements of second matrix:
5 6
7 8
1. Addition
2. Subtraction
3. Multiplication
Enter choice: 1`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Result of Addition:
6	8
10	12`}</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample 2: Multiplication</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Enter dimensions of first matrix (rows cols): 2 3
Enter elements of first matrix:
1 2 3
4 5 6
Enter dimensions of second matrix (rows cols): 3 2
Enter elements of second matrix:
7 8
9 10
11 12
1. Addition
2. Subtraction
3. Multiplication
Enter choice: 3`}</pre>
                <p className="text-sm font-semibold text-gray-700 mb-2 mt-4">Output:</p>
                <pre className="text-sm text-gray-800 font-mono bg-white p-2 rounded">{`Result of Multiplication:
58	64
139	154`}</pre>
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
              Matrix operations are fundamental in many scientific and engineering applications:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Computer Graphics:</strong> Transformations, rotations, scaling using matrix multiplication</li>
              <li><strong>Machine Learning:</strong> Neural networks use matrix operations for forward and backward propagation</li>
              <li><strong>Image Processing:</strong> Convolution operations, filters, and transformations</li>
              <li><strong>Scientific Computing:</strong> Solving systems of linear equations, eigenvalue problems</li>
              <li><strong>Game Development:</strong> 3D transformations, physics simulations, coordinate systems</li>
              <li><strong>Cryptography:</strong> Encryption and decryption algorithms use matrix operations</li>
              <li><strong>Data Analysis:</strong> Principal Component Analysis (PCA), dimensionality reduction</li>
              <li><strong>Robotics:</strong> Kinematics calculations, coordinate transformations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Understanding 2D arrays and nested loops is crucial for working with matrices, which are essential data structures in advanced programming 
              and computational mathematics. Matrix operations are fundamental in computer graphics, machine learning, scientific computing, and many other 
              fields where mathematical computations are performed on structured data.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Viva Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q1: What are the dimension requirements for matrix addition and subtraction?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Both matrices must have the same dimensions (same number of rows and same number of columns). For example, a 3×4 matrix can only be added 
                or subtracted with another 3×4 matrix. The result will also be 3×4.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q2: What are the dimension requirements for matrix multiplication?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The number of columns in the first matrix must equal the number of rows in the second matrix. If matrix1 is m×n and matrix2 is p×q, 
                then n must equal p. The result will be m×q. For example, 2×3 × 3×4 = 2×4.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q3: Why do we need three nested loops for matrix multiplication?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Three loops are needed: outer loop (i) for rows of result, middle loop (j) for columns of result, inner loop (k) to compute dot product. 
                The inner loop multiplies each element of row i in matrix1 with corresponding element of column j in matrix2 and sums them up.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q4: Is matrix multiplication commutative? (A × B = B × A?)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No, matrix multiplication is not commutative in general. A × B ≠ B × A (unless both are square and commute). Even dimensions may differ: 
                if A is 2×3 and B is 3×4, then A×B is 2×4, but B×A is undefined (3×4 × 2×3 is invalid). Always check dimension compatibility.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q5: What is the time complexity of matrix multiplication?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                For two n×n matrices, naive multiplication is O(n³) because we have three nested loops each running n times. More efficient algorithms 
                like Strassen's algorithm achieve O(n^2.81), but for learning purposes, the O(n³) algorithm is standard and easier to understand.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q6: How do you access elements in a 2D array?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use two indices: <code className="bg-gray-100 px-1 rounded">arr[row][col]</code>. First index is row, second is column. Both start from 0. 
                For a matrix declared as <code className="bg-gray-100 px-1 rounded">int matrix[10][10]</code>, valid indices are 0-9 for both dimensions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q7: Can we perform matrix operations without storing the entire matrix in memory?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                For very large matrices, you might use sparse matrix representations (only store non-zero elements) or process elements on-the-fly without 
                storing full matrices. However, for standard operations, storing matrices in 2D arrays is the most straightforward and efficient approach 
                for matrices that fit in memory.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Q8: What happens if we try to multiply incompatible matrices?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Matrix multiplication is undefined if columns of first matrix ≠ rows of second matrix. The program should validate dimensions and display 
                an error message. Attempting to multiply incompatible matrices would lead to incorrect results or array index out of bounds errors.
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
              <li><Link href="/labs/c-programming/exp-06-array-stats" className="text-blue-600 hover:text-blue-700 underline">Experiment 6: Array Statistics</Link></li>
              <li><Link href="/labs/c-programming/exp-08-string-operations" className="text-blue-600 hover:text-blue-700 underline">Experiment 8: String Operations</Link></li>
              <li><Link href="/programming/c-language/important-programs" className="text-blue-600 hover:text-blue-700 underline">Important C Programs</Link></li>
            </ul>
          </div>
        </section>

        {/* Footer Block */}
        <PageFooterBlock />
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          href="/labs/c-programming/exp-06-array-stats"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <span>←</span> Previous: Experiment 6
        </Link>
        <Link
          href="/labs/c-programming/exp-08-string-operations"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Next: Experiment 8
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}


