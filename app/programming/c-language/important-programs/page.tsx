import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Important C Programs for Practice | CSM Study Zone",
  description: "Practice essential C programs including Fibonacci series, prime numbers, palindrome, factorial, Armstrong numbers, matrix operations, searching, sorting algorithms, and file handling examples.",
  keywords: ["C programs", "C examples", "CSM Study Zone", "C practice programs", "C algorithms", "C programming examples", "data structures C", "C lab programs"],
  alternates: {
    canonical: "https://www.csmstudyzone.in/programming/c-language/important-programs",
  },
};

export default function ImportantProgramsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Important C Programs for Practice
      </h1>

      {/* Navigation Links */}
      <div className="mb-8 flex flex-wrap gap-3">
        <Link href="/programming/c-language" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium">
          ← Back to Basics
        </Link>
        <Link href="/programming/c-language/programming-tips" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
          Programming Tips
        </Link>
        <Link href="/programming/c-language/practice-questions" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium">
          Practice Questions
        </Link>
      </div>

      {/* Intro Paragraph */}
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        This page contains classic C programs commonly asked in lab exams, university examinations, and programming interviews. 
        Each program demonstrates fundamental concepts and serves as building blocks for more complex applications.
      </p>

      {/* Callout Box */}
      <div className="mt-4 rounded-lg border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        💡 <span className="font-semibold">Tip:</span> Start by dry running each program on paper. Then try to modify it — for example, change Fibonacci to starting from 1, or make the prime number program print primes in a given range.
      </div>

      {/* Number-based Programs */}
      <h2 className="text-2xl font-semibold mt-10 mb-3 text-slate-900">Number-based Programs</h2>
      <div className="mt-8 space-y-6">
        
        {/* Fibonacci Series */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">1. Fibonacci Series</h3>
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              Level: Easy
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Generates Fibonacci sequence where each number is the sum of the two preceding ones. Essential for understanding loops, variables, and sequence generation.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program to generate Fibonacci series */
#include <stdio.h>

int main(void) {
    int n, first = 0, second = 1, next;
    
    printf("Enter number of terms: ");
    scanf("%d", &n);
    
    printf("Fibonacci Series: ");
    for (int i = 0; i < n; i++) {
        if (i <= 1) {
            next = i;
        } else {
            next = first + second;
            first = second;
            second = next;
        }
        printf("%d ", next);
    }
    
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Loops (for)</li>
                <li>Variables and assignment</li>
                <li>Sequence generation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Be able to explain the first two terms (0 and 1).</li>
                <li>Know how to modify the program to print only even terms.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prime Number Check */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">2. Prime Number Check</h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Level: Medium
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Checks if a number is prime using optimized trial division. Demonstrates loops, conditionals, and mathematical logic.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program to check prime number */
#include <stdio.h>
#include <stdbool.h>

bool is_prime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    if (is_prime(num)) {
        printf("%d is a prime number.\\n", num);
    } else {
        printf("%d is not a prime number.\\n", num);
    }
    
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Functions</li>
                <li>Conditional statements</li>
                <li>Mathematical operations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Explain why checking up to sqrt(n) is sufficient.</li>
                <li>Modify to print all primes in a given range.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Palindrome Number */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">3. Palindrome Number</h3>
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              Level: Easy
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Checks if a number reads the same forwards and backwards. Demonstrates digit extraction and number reversal using loops.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program to check palindrome number */
#include <stdio.h>

int main() {
    int num, original, reversed = 0, remainder;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    original = num;
    
    while (num != 0) {
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num /= 10;
    }
    
    if (original == reversed) {
        printf("%d is a palindrome.\\n", original);
    } else {
        printf("%d is not a palindrome.\\n", original);
    }
    
    return 0;
}

// Example: 121, 1331 are palindromes`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>While loop</li>
                <li>Modulus operator (%)</li>
                <li>Integer division</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Explain the digit extraction process.</li>
                <li>Extend to check palindrome strings.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Factorial */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">4. Factorial</h3>
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              Level: Easy
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Calculates factorial of a number using both iterative and recursive approaches. Essential for understanding recursion and loops.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program to calculate factorial */
#include <stdio.h>

// Recursive method
long long factorial_recursive(int n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial_recursive(n - 1);
}

// Iterative method
long long factorial_iterative(int n) {
    long long fact = 1;
    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    if (num < 0) {
        printf("Factorial of negative number doesn't exist.\\n");
    } else {
        printf("Factorial of %d = %lld\\n", num, factorial_iterative(num));
        printf("Factorial (recursive) = %lld\\n", factorial_recursive(num));
    }
    
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Recursion</li>
                <li>Iteration</li>
                <li>Function calls</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Compare iterative vs recursive approach.</li>
                <li>Explain base case in recursion.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Armstrong Number */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">5. Armstrong Number</h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Level: Medium
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Checks if a number is Armstrong (sum of digits raised to power of number of digits equals the number). Demonstrates digit manipulation and power calculations.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program to check Armstrong number */
#include <stdio.h>
#include <math.h>

int main() {
    int num, original, remainder, result = 0, digits = 0;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    original = num;
    
    // Count digits
    int temp = num;
    while (temp != 0) {
        digits++;
        temp /= 10;
    }
    
    // Calculate sum of digits raised to power of digits
    temp = num;
    while (temp != 0) {
        remainder = temp % 10;
        result += pow(remainder, digits);
        temp /= 10;
    }
    
    if (result == original) {
        printf("%d is an Armstrong number.\\n", original);
    } else {
        printf("%d is not an Armstrong number.\\n", original);
    }
    
    return 0;
}

// Example: 153 = 1^3 + 5^3 + 3^3 = 153`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Math library (pow)</li>
                <li>Digit counting</li>
                <li>While loops</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Explain the Armstrong number concept.</li>
                <li>Find all Armstrong numbers in a range.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Array & Matrix Programs */}
      <h2 className="text-2xl font-semibold mt-10 mb-3 text-slate-900">Array & Matrix Programs</h2>
      <div className="mt-8 space-y-6">
        
        {/* Matrix Addition */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">6. Matrix Addition</h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Level: Medium
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Adds two matrices element-wise. Demonstrates 2D arrays, nested loops, and matrix operations.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program for matrix addition */
#include <stdio.h>

int main() {
    int rows, cols;
    printf("Enter rows and columns: ");
    scanf("%d %d", &rows, &cols);
    
    int matrix1[10][10], matrix2[10][10], sum[10][10];
    
    printf("Enter elements of first matrix:\\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            scanf("%d", &matrix1[i][j]);
        }
    }
    
    printf("Enter elements of second matrix:\\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            scanf("%d", &matrix2[i][j]);
        }
    }
    
    // Add matrices
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            sum[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    
    printf("Sum of matrices:\\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d ", sum[i][j]);
        }
        printf("\\n");
    }
    
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>2D arrays</li>
                <li>Nested loops</li>
                <li>Matrix operations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Extend to matrix multiplication.</li>
                <li>Implement matrix transpose.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Matrix Multiplication */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">7. Matrix Multiplication</h3>
            <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
              Level: Hard
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Multiplies two matrices using triple nested loops. Demonstrates complex matrix operations and dimension validation.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program for matrix multiplication */
#include <stdio.h>

int main() {
    int m, n, p, q;
    printf("Enter dimensions of first matrix (m x n): ");
    scanf("%d %d", &m, &n);
    printf("Enter dimensions of second matrix (p x q): ");
    scanf("%d %d", &p, &q);
    
    if (n != p) {
        printf("Matrix multiplication not possible!\\n");
        return 1;
    }
    
    int matrix1[10][10], matrix2[10][10], result[10][10];
    
    // Input matrices
    printf("Enter first matrix:\\n");
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &matrix1[i][j]);
        }
    }
    
    printf("Enter second matrix:\\n");
    for (int i = 0; i < p; i++) {
        for (int j = 0; j < q; j++) {
            scanf("%d", &matrix2[i][j]);
        }
    }
    
    // Multiply matrices
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < q; j++) {
            result[i][j] = 0;
            for (int k = 0; k < n; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    
    // Display result
    printf("Result matrix:\\n");
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < q; j++) {
            printf("%d ", result[i][j]);
        }
        printf("\\n");
    }
    
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Triple nested loops</li>
                <li>Dimension checking</li>
                <li>Matrix operations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Explain the multiplication algorithm.</li>
                <li>Discuss time complexity (O(n³)).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Linear Search */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">8. Linear Search</h3>
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              Level: Easy
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Searches for an element in an array by checking each element sequentially. Simple but useful for understanding array traversal.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program for linear search */
#include <stdio.h>

int linear_search(int arr[], int size, int key) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            return i;  // Return index if found
        }
    }
    return -1;  // Return -1 if not found
}

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int size = sizeof(arr) / sizeof(arr[0]);
    int key;
    
    printf("Enter element to search: ");
    scanf("%d", &key);
    
    int result = linear_search(arr, size, key);
    if (result != -1) {
        printf("Element found at index %d\\n", result);
    } else {
        printf("Element not found\\n");
    }
    
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Arrays</li>
                <li>Functions</li>
                <li>Linear traversal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Compare with binary search.</li>
                <li>Discuss time complexity (O(n)).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Binary Search */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">9. Binary Search</h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Level: Medium
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Efficient search algorithm for sorted arrays using divide-and-conquer approach. Demonstrates binary search logic and efficiency.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program for binary search */
#include <stdio.h>

int binary_search(int arr[], int left, int right, int key) {
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == key) {
            return mid;
        }
        
        if (arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;  // Not found
}

int main() {
    int arr[] = {10, 20, 30, 40, 50, 60, 70};
    int size = sizeof(arr) / sizeof(arr[0]);
    int key;
    
    printf("Enter element to search: ");
    scanf("%d", &key);
    
    int result = binary_search(arr, 0, size - 1, key);
    if (result != -1) {
        printf("Element found at index %d\\n", result);
    } else {
        printf("Element not found\\n");
    }
    
    return 0;
}

// Note: Array must be sorted for binary search`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Divide and conquer</li>
                <li>Sorted arrays</li>
                <li>While loop</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Explain why array must be sorted.</li>
                <li>Compare time complexity with linear search.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bubble Sort */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">10. Bubble Sort</h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Level: Medium
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them. Easy to understand.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program for bubble sort */
#include <stdio.h>

void bubble_sort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int size = sizeof(arr) / sizeof(arr[0]);
    
    printf("Original array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    bubble_sort(arr, size);
    
    printf("Sorted array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Nested loops</li>
                <li>Swapping elements</li>
                <li>Array manipulation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Explain the sorting process step by step.</li>
                <li>Discuss time complexity (O(n²)).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Selection Sort */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">11. Selection Sort</h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Level: Medium
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Sorts array by repeatedly finding the minimum element from unsorted part and placing it at the beginning. Simpler than other algorithms.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program for selection sort */
#include <stdio.h>

void selection_sort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < size; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        // Swap
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int size = sizeof(arr) / sizeof(arr[0]);
    
    selection_sort(arr, size);
    
    printf("Sorted array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Finding minimum</li>
                <li>Swapping</li>
                <li>Nested loops</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Compare with bubble sort.</li>
                <li>Explain the selection process.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* File Handling Programs */}
      <h2 className="text-2xl font-semibold mt-10 mb-3 text-slate-900">File Handling Programs</h2>
      <div className="mt-8 space-y-6">
        
        {/* Writing to File */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">12. Writing to File</h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Level: Medium
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Demonstrates how to create and write data to a file using fprintf(). Essential for data persistence in C programs.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program to write to file */
#include <stdio.h>

int main() {
    FILE *fp;
    fp = fopen("data.txt", "w");
    
    if (fp == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    fprintf(fp, "Hello, World!\\n");
    fprintf(fp, "This is a file handling example.\\n");
    fprintf(fp, "Number: %d\\n", 42);
    
    fclose(fp);
    printf("Data written to file successfully.\\n");
    
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>FILE pointer</li>
                <li>fopen() and fclose()</li>
                <li>fprintf()</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Always check if file opened successfully.</li>
                <li>Explain different file modes ("w", "a", "r+").</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reading from File */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">13. Reading from File</h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Level: Medium
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Reads data from a file using fgets() and displays it. Demonstrates file reading operations and error handling.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program to read from file */
#include <stdio.h>

int main() {
    FILE *fp;
    char buffer[100];
    
    fp = fopen("data.txt", "r");
    
    if (fp == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    printf("File contents:\\n");
    while (fgets(buffer, sizeof(buffer), fp) != NULL) {
        printf("%s", buffer);
    }
    
    fclose(fp);
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>File reading</li>
                <li>fgets() function</li>
                <li>Buffer handling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Explain why we use fgets() vs fscanf().</li>
                <li>Demonstrate reading line by line.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Pointer / Structure Programs */}
      <h2 className="text-2xl font-semibold mt-10 mb-3 text-slate-900">Pointer / Structure Programs</h2>
      <div className="mt-8 space-y-6">
        
        {/* Swapping using Pointers */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">14. Swapping using Pointers</h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Level: Medium
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Swaps two numbers using pointers to demonstrate call by reference. Fundamental concept for understanding pointer operations.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program to swap using pointers */
#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    
    printf("Before swap: x = %d, y = %d\\n", x, y);
    swap(&x, &y);
    printf("After swap: x = %d, y = %d\\n", x, y);
    
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Pointers</li>
                <li>Call by reference</li>
                <li>Dereferencing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Explain call by value vs call by reference.</li>
                <li>Show how pointers modify original variables.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Array using Pointers */}
        <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900">15. Array using Pointers</h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Level: Medium
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Accesses array elements using pointer arithmetic. Demonstrates the relationship between arrays and pointers in C.
          </p>
          <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
            <code>{`/* C program to access array using pointers */
#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *ptr = arr;  // Points to first element
    
    printf("Array elements using pointer:\\n");
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d\\n", i, *(ptr + i));
    }
    
    printf("\\nArray elements using pointer arithmetic:\\n");
    for (int i = 0; i < 5; i++) {
        printf("Value at address %p: %d\\n", (ptr + i), *(ptr + i));
    }
    
    return 0;
}`}</code>
          </pre>
          <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Concepts Used</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Pointer arithmetic</li>
                <li>Array-pointer relationship</li>
                <li>Address printing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Exam / Viva Tips</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Explain how arr[i] relates to *(arr + i).</li>
                <li>Demonstrate pointer increment operations.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* What to Practice Next */}
      <section className="mt-10">
        <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
          <h2 className="text-xl font-semibold mb-3 text-indigo-900">What to Practice Next</h2>
          <ul className="list-disc list-inside space-y-2 text-indigo-950">
            <li>Modify programs to handle invalid input and add error checking.</li>
            <li>Convert iterative solutions to recursive versions and vice versa.</li>
            <li>Combine multiple concepts (e.g., use arrays with functions, pointers with structures).</li>
            <li>Add input validation and boundary checks to all programs.</li>
            <li>Create menu-driven programs that combine multiple operations.</li>
            <li>Practice string manipulation programs (palindrome strings, string reversal).</li>
            <li>Implement more complex sorting algorithms (Insertion Sort, Quick Sort).</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
