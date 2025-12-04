// content/programming.ts

export type ProgrammingItem = {
  slug: string;
  title: string;
  category: string;  // e.g., "C", "Python", "Java", "Data Structures"
  summary: string;
  content: string;
};

export const programmingItems: ProgrammingItem[] = [
  {
    slug: "c-language-basics-input-output-and-operators",
    title: "C Language Basics – Input, Output and Operators",
    category: "C",
    summary:
      "Overview of basic structure of a C program, printf/scanf, data types and operators.",
    content: `
<h2>1. Structure of a C Program</h2>
<p>
A typical C program contains preprocessor directives, global declarations, <code>main()</code>
function and optional user-defined functions. Understanding the structure is crucial for
writing correct and maintainable C programs.
</p>

<p>
The structure follows a specific order: preprocessor directives (like #include and #define)
come first, followed by global variable declarations, function prototypes, the main() function
which is the entry point of the program, and finally user-defined function implementations.
This organization makes the code readable and helps the compiler process it correctly.
</p>

<p>
Every C program must have a main() function, which is where program execution begins. The
main() function can take command-line arguments and returns an integer value (typically 0
for success, non-zero for errors). Understanding this structure helps in organizing code
and understanding how C programs are compiled and executed.
</p>

<h3>Example Program Structure</h3>
<pre><code class="language-c">
#include &lt;stdio.h&gt;  // Preprocessor directive
#define MAX 100      // Macro definition

int global_var = 10; // Global variable

void function_name(); // Function prototype

int main() {         // Main function
    int local_var = 20;
    printf("Hello, World!\\n");
    function_name();
    return 0;
}

void function_name() { // Function definition
    // Function body
}
</code></pre>

<h2>2. Input and Output</h2>
<p>
Input and output operations are fundamental to any programming language. C provides
standard library functions for formatted input and output, which are essential for
interactive programs and data processing.
</p>

<ul>
  <li><code>printf()</code> – Used for formatted output to the console. It allows you to
      display text, variables, and formatted data. Format specifiers like %d, %f, %c, %s
      control how data is displayed. printf() is one of the most commonly used functions
      in C programming.</li>
  <li><code>scanf()</code> – Used for formatted input from the user. It reads data according
      to format specifiers and stores values in variables. The address operator (&) must
      be used with variables (except arrays/strings). scanf() is essential for interactive
      programs that require user input.</li>
</ul>

<h3>I/O Examples</h3>
<pre><code class="language-c">
int age;
float salary;
char name[50];

printf("Enter your age: ");
scanf("%d", &age);

printf("Enter salary: ");
scanf("%f", &salary);

printf("Enter name: ");
scanf("%s", name);  // No & for strings

printf("Age: %d, Salary: %.2f, Name: %s\\n", age, salary, name);
</code></pre>

<h2>3. Data Types</h2>
<p>
Data types define the type of data a variable can hold and determine the operations that
can be performed on it. C provides several built-in data types, each with specific
characteristics and memory requirements.
</p>

<p>
Understanding data types is crucial for efficient programming. Choosing the right data
type affects memory usage, program performance, and correctness. C also allows type
modifiers to customize data types for specific needs.
</p>

<h3>Basic Data Types</h3>
<ul>
  <li><b>int</b> – Stores integers (whole numbers). Size typically 2 or 4 bytes depending
      on system. Range: -32,768 to 32,767 (for 2 bytes) or larger for 4 bytes.</li>
  <li><b>float</b> – Stores single-precision floating-point numbers. Size: 4 bytes.
      Precision: approximately 6-7 decimal digits. Used for numbers with decimal points.</li>
  <li><b>double</b> – Stores double-precision floating-point numbers. Size: 8 bytes.
      Precision: approximately 15-17 decimal digits. More precise than float, used when
      higher precision is needed.</li>
  <li><b>char</b> – Stores a single character. Size: 1 byte. Range: -128 to 127 (signed)
      or 0 to 255 (unsigned). Used for characters and small integers.</li>
</ul>

<h3>Type Modifiers</h3>
<ul>
  <li><b>short, long</b> – Modify the size of int and double. short int is typically 2 bytes,
      long int is 4 or 8 bytes depending on system.</li>
  <li><b>signed, unsigned</b> – Control whether negative values are allowed. unsigned types
      can only store non-negative values but have a larger positive range. signed is the
      default for int and char.</li>
</ul>

<h2>4. Operators</h2>
<p>
Operators are symbols that perform operations on operands (variables and values). C provides
a rich set of operators for various operations. Understanding operator precedence and
associativity is crucial for writing correct expressions.
</p>

<p>
Operators are categorized based on their functionality. Some operators can be used in
multiple ways (like + for addition and unary plus), and operator precedence determines
the order of evaluation in complex expressions. Using parentheses can clarify and control
evaluation order.
</p>

<h3>Operator Categories</h3>
<ul>
  <li><b>Arithmetic operators:</b> + (addition), - (subtraction), * (multiplication),
      / (division), % (modulus/remainder). These perform mathematical operations. The
      modulus operator (%) returns the remainder of division and only works with integers.</li>
  <li><b>Relational operators:</b> &lt; (less than), &gt; (greater than), &lt;= (less than
      or equal), &gt;= (greater than or equal), == (equal to), != (not equal). These
      compare values and return 1 (true) or 0 (false). Essential for conditional statements.</li>
  <li><b>Logical operators:</b> && (logical AND), || (logical OR), ! (logical NOT). Used
      to combine multiple conditions. && returns true only if both conditions are true,
      || returns true if at least one condition is true, ! negates a condition.</li>
  <li><b>Assignment operators:</b> = (simple assignment), +=, -=, *=, /=, %= (compound
      assignment). Assignment operators store values in variables. Compound operators
      perform an operation and assignment in one step (e.g., x += 5 is equivalent to x = x + 5).</li>
  <li><b>Increment/Decrement operators:</b> ++ (increment), -- (decrement). Can be used
      as prefix (++x) or postfix (x++). Prefix increments before use, postfix increments
      after use. Very common in loops.</li>
</ul>

<h3>Operator Precedence</h3>
<p>
Operators have different precedence levels. From highest to lowest: parentheses, unary
operators, multiplicative (*, /, %), additive (+, -), relational (&lt;, &gt;, etc.),
equality (==, !=), logical AND (&&), logical OR (||), assignment (=). Use parentheses
to clarify and control evaluation order.
</p>

<h2>5. Practice Recommendations</h2>
<p>
Students should practice small programs using combinations of operators and formatted I/O.
Start with simple programs that use basic I/O and arithmetic operations, then gradually
introduce more complex concepts like conditional statements and loops.
</p>

<p>
Practice programs should include: reading and displaying values, performing calculations,
using different operators, understanding operator precedence, and formatting output
properly. Regular practice with these fundamentals builds a strong programming foundation.
</p>

<h2>Frequently Asked Questions</h2>
<h3>Q1: What is the difference between = and == in C?</h3>
<p>
= is the assignment operator that assigns a value to a variable. == is the equality
comparison operator that checks if two values are equal. Using = in conditions is a
common error that assigns instead of comparing, often leading to bugs.
</p>

<h3>Q2: When should I use float vs double?</h3>
<p>
Use float when memory is limited and 6-7 decimal precision is sufficient. Use double
when you need higher precision (15-17 decimals) or when performing many calculations
where precision errors can accumulate. In modern systems, double is often preferred
unless memory is a constraint.
</p>

<h3>Q3: What happens if I use the wrong format specifier in printf/scanf?</h3>
<p>
Using wrong format specifiers leads to undefined behavior. The program may display
incorrect values, crash, or behave unpredictably. Always match format specifiers with
variable types: %d for int, %f for float, %lf for double, %c for char, %s for strings.
</p>
    `,
  },
  {
    slug: "python-for-beginners-variables-lists-and-loops",
    title: "Python for Beginners – Variables, Lists and Loops",
    category: "Python",
    summary:
      "Quick introduction to variables, basic data types, lists and for/while loops in Python.",
    content: `
<h2>1. Variables and Data Types</h2>
<p>
Python is dynamically typed, meaning you don't need to declare variable types explicitly.
The type is determined automatically based on the value assigned. This makes Python code
more concise and easier to write, though it requires careful attention to ensure correct
types are used.
</p>

<p>
Python's dynamic typing allows variables to change types during execution, which provides
flexibility but can also lead to errors if not managed carefully. Understanding Python's
type system helps write robust code and avoid common type-related bugs.
</p>

<h3>Common Data Types</h3>
<ul>
  <li><b>int</b> – Integers (whole numbers). Can be arbitrarily large in Python 3.
      Examples: 10, -5, 0, 1000000</li>
  <li><b>float</b> – Floating-point numbers (decimals). Examples: 3.14, -2.5, 0.0, 1e10</li>
  <li><b>bool</b> – Boolean values. Only two values: True and False. Used in conditional
      statements and logical operations.</li>
  <li><b>str</b> – Strings (text). Can use single, double, or triple quotes. Examples:
      "Hello", 'World', """Multi-line string"""</li>
  <li><b>list</b> – Ordered, mutable collections. Can contain mixed types. Examples:
      [1, 2, 3], ['a', 'b', 'c'], [1, 'hello', 3.14]</li>
  <li><b>tuple</b> – Ordered, immutable collections. Faster than lists, used for fixed
      data. Examples: (1, 2, 3), ('a', 'b')</li>
  <li><b>dict</b> – Key-value pairs (dictionaries). Unordered, mutable. Examples:
      {'name': 'John', 'age': 25}</li>
</ul>

<h2>2. Lists</h2>
<p>
Lists are ordered, mutable collections that can contain elements of different types.
They are one of Python's most versatile and commonly used data structures. Lists support
indexing, slicing, and various methods for manipulation.
</p>

<p>
Lists are zero-indexed (first element is at index 0) and support negative indexing
(last element is at index -1). They can grow or shrink dynamically, making them ideal
for many programming tasks.
</p>

<h3>List Operations</h3>
<pre><code class="language-python">
# Creating lists
numbers = [10, 20, 30]
mixed = [1, 'hello', 3.14, True]
empty = []

# Accessing elements
print(numbers[0])    # 10 (first element)
print(numbers[-1])   # 30 (last element)

# Modifying lists
numbers.append(40)   # Add to end
numbers.insert(1, 15) # Insert at index
numbers[0] = 5       # Modify element

# List methods
numbers.remove(20)   # Remove first occurrence
numbers.pop()        # Remove and return last element
numbers.sort()       # Sort in place
numbers.reverse()    # Reverse list

# Iterating over lists
for n in numbers:
    print(n)

# List comprehension (advanced)
squares = [x**2 for x in range(10)]
</code></pre>

<h3>Common List Operations</h3>
<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Operation</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>len()</td>
    <td>Get list length</td>
    <td>len([1,2,3]) → 3</td>
  </tr>
  <tr>
    <td>append()</td>
    <td>Add element to end</td>
    <td>lst.append(4)</td>
  </tr>
  <tr>
    <td>extend()</td>
    <td>Add multiple elements</td>
    <td>lst.extend([4,5])</td>
  </tr>
  <tr>
    <td>insert()</td>
    <td>Insert at position</td>
    <td>lst.insert(0, 0)</td>
  </tr>
  <tr>
    <td>remove()</td>
    <td>Remove first occurrence</td>
    <td>lst.remove(2)</td>
  </tr>
  <tr>
    <td>pop()</td>
    <td>Remove and return element</td>
    <td>lst.pop()</td>
  </tr>
  <tr>
    <td>index()</td>
    <td>Find index of element</td>
    <td>lst.index(3)</td>
  </tr>
  <tr>
    <td>count()</td>
    <td>Count occurrences</td>
    <td>lst.count(2)</td>
  </tr>
  <tr>
    <td>sort()</td>
    <td>Sort in place</td>
    <td>lst.sort()</td>
  </tr>
  <tr>
    <td>reverse()</td>
    <td>Reverse list</td>
    <td>lst.reverse()</td>
  </tr>
</table>

<h2>3. Loops</h2>
<p>
Loops allow you to execute code repeatedly, which is essential for processing collections
of data, iterating through sequences, and implementing algorithms. Python provides two
main types of loops: for loops and while loops.
</p>

<p>
For loops are preferred when you know the number of iterations or want to iterate over
a sequence. While loops are used when repetition depends on a condition that may change
during execution. Choosing the right loop type makes code more readable and efficient.
</p>

<h3>For Loop</h3>
<p>
The for loop iterates over a sequence (list, string, tuple, range, etc.). It's the
most common loop in Python and is very readable and Pythonic.
</p>

<pre><code class="language-python">
# Iterate over list
numbers = [10, 20, 30, 40, 50]
for num in numbers:
    print(num)

# Iterate with index
for i in range(len(numbers)):
    print(f"Index {i}: {numbers[i]}")

# Iterate with enumerate (get index and value)
for index, value in enumerate(numbers):
    print(f"Index {index}: {value}")

# Iterate over string
text = "Python"
for char in text:
    print(char)

# Iterate over range
for i in range(5):        # 0 to 4
    print(i)

for i in range(1, 6):     # 1 to 5
    print(i)

for i in range(0, 10, 2): # 0 to 9, step 2
    print(i)
</code></pre>

<h3>While Loop</h3>
<p>
The while loop repeats as long as a condition is true. It's useful when the number of
iterations is unknown or depends on runtime conditions.
</p>

<pre><code class="language-python">
# Basic while loop
count = 0
while count < 5:
    print(count)
    count += 1

# While with user input
number = 0
while number != -1:
    number = int(input("Enter number (-1 to quit): "))
    print(f"You entered: {number}")

# While with break
while True:
    user_input = input("Enter command: ")
    if user_input == "quit":
        break
    print(f"Processing: {user_input}")
</code></pre>

<h3>Loop Control Statements</h3>
<ul>
  <li><b>break</b> – Exits the loop immediately, skipping remaining iterations</li>
  <li><b>continue</b> – Skips the rest of the current iteration and continues with
      the next iteration</li>
  <li><b>else</b> – Executes when loop completes normally (not exited by break)</li>
</ul>

<h2>4. Practice Programs</h2>
<p>
Practice these programs to master variables, lists, and loops:</p>
<ul>
  <li>Sum of list elements – Iterate through a list and calculate the sum</li>
  <li>Find maximum/minimum in a list – Traverse list and find largest/smallest value</li>
  <li>Count positive numbers – Count how many positive numbers are in a list</li>
  <li>Reverse a list – Create a reversed version of a list</li>
  <li>Remove duplicates – Remove duplicate elements from a list</li>
  <li>List statistics – Calculate mean, median, mode of a list</li>
  <li>List filtering – Create a new list with elements that meet certain criteria</li>
  <li>Nested loops – Process 2D lists or create patterns</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>Q1: What is the difference between list and tuple in Python?</h3>
<p>
Lists are mutable (can be modified after creation) and use square brackets []. Tuples
are immutable (cannot be modified) and use parentheses (). Lists are used when you need
to modify the collection, tuples when you need a fixed sequence. Tuples are faster and
can be used as dictionary keys.
</p>

<h3>Q2: When should I use for loop vs while loop?</h3>
<p>
Use for loops when iterating over a known sequence or when you know the number of
iterations. Use while loops when repetition depends on a condition that changes during
execution or when the number of iterations is unknown. For loops are generally preferred
in Python for readability.
</p>

<h3>Q3: What is list comprehension and why is it useful?</h3>
<p>
List comprehension is a concise way to create lists. Syntax: [expression for item in
iterable if condition]. It's more readable and often faster than traditional loops for
creating lists. Example: [x**2 for x in range(10) if x % 2 == 0] creates squares of
even numbers.
</p>
    `,
  },
  {
    slug: "data-structures-introduction-arrays-and-linked-lists",
    title: "Data Structures – Introduction, Arrays and Linked Lists",
    category: "Data Structures",
    summary:
      "Basic concepts of data structures, static vs dynamic structures, arrays and singly linked lists.",
    content: `
<h2>1. What is a Data Structure?</h2>
<p>
A data structure is a way of organizing and storing data so that operations such as
insertion, deletion and retrieval can be performed efficiently. Data structures provide
a means to manage large amounts of data efficiently, enabling efficient algorithms
and better program performance.
</p>

<p>
Choosing the right data structure is crucial for solving problems efficiently. Different
data structures have different strengths and weaknesses in terms of time complexity for
various operations. Understanding these trade-offs helps in designing efficient algorithms
and systems.
</p>

<p>
Data structures can be classified as linear (arrays, linked lists, stacks, queues) or
non-linear (trees, graphs). They can also be static (fixed size like arrays) or dynamic
(size can change like linked lists). The choice depends on the operations you need to
perform and the constraints of your problem.
</p>

<h3>Why Data Structures Matter</h3>
<ul>
  <li><b>Efficiency:</b> Proper data structures enable faster algorithms and better
      performance. Operations that take O(n) time with one structure might take O(1)
      or O(log n) with another.</li>
  <li><b>Organization:</b> Data structures help organize data logically, making programs
      easier to understand and maintain.</li>
  <li><b>Problem Solving:</b> Many problems have natural data structure solutions.
      Understanding data structures helps recognize these patterns.</li>
  <li><b>Memory Management:</b> Different structures use memory differently. Some are
      more memory-efficient for specific use cases.</li>
</ul>

<h2>2. Arrays</h2>
<p>
Arrays are the simplest and most fundamental data structure. They store elements in
contiguous memory locations, allowing direct access to any element using its index.
Arrays form the foundation for many other data structures and are used extensively
in programming.
</p>

<p>
Arrays are particularly efficient for random access and iteration. However, their fixed
size can be a limitation in some applications. Understanding arrays is essential before
learning more complex data structures.
</p>

<h3>Array Characteristics</h3>
<ul>
  <li><b>Fixed-size:</b> Size is determined at declaration and cannot change. This
      provides predictability but limits flexibility. Dynamic arrays (like Python lists
      or C++ vectors) overcome this limitation.</li>
  <li><b>Contiguous memory:</b> Elements are stored in adjacent memory locations. This
      enables efficient memory access and cache utilization, leading to fast iteration
      and random access.</li>
  <li><b>Random access:</b> Any element can be accessed directly using its index in
      O(1) time. This is a major advantage over structures that require traversal.</li>
  <li><b>Zero-indexed:</b> First element is at index 0, last at index (size-1). This
      is standard in most programming languages.</li>
  <li><b>Used for:</b> Lists, matrices, strings (character arrays), implementing other
      data structures like stacks and queues, and storing homogeneous data.</li>
</ul>

<h3>Array Operations</h3>
<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Operation</th>
    <th>Time Complexity</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Access by index</td>
    <td>O(1)</td>
    <td>Get element at specific position</td>
  </tr>
  <tr>
    <td>Search</td>
    <td>O(n)</td>
    <td>Find element (linear search)</td>
  </tr>
  <tr>
    <td>Insertion at end</td>
    <td>O(1)</td>
    <td>Add element at the end (if space available)</td>
  </tr>
  <tr>
    <td>Insertion at position</td>
    <td>O(n)</td>
    <td>Shift elements to make space</td>
  </tr>
  <tr>
    <td>Deletion</td>
    <td>O(n)</td>
    <td>Remove element and shift remaining</td>
  </tr>
</table>

<h2>3. Linked Lists</h2>
<p>
Linked lists are dynamic data structures that overcome the size limitation of arrays.
They consist of nodes, where each node contains data and a reference (pointer) to the
next node. This structure allows efficient insertion and deletion at any position.
</p>

<p>
Unlike arrays, linked lists don't require contiguous memory, making them more flexible
for memory allocation. However, they don't support random access and require sequential
traversal to reach a specific element.
</p>

<h3>Linked List Characteristics</h3>
<ul>
  <li><b>Dynamic size:</b> Can grow or shrink as needed. Memory is allocated dynamically
      as nodes are added, providing flexibility that arrays lack.</li>
  <li><b>Non-contiguous memory:</b> Nodes can be stored anywhere in memory, connected
      through pointers. This allows efficient memory utilization but can lead to cache
      misses.</li>
  <li><b>Easy insertion/deletion:</b> Adding or removing nodes requires only updating
      pointers, no shifting of elements. This makes linked lists ideal for frequent
      insertions and deletions.</li>
  <li><b>Sequential access:</b> Must traverse from head to reach a specific node. Access
      time is O(n) compared to O(1) for arrays.</li>
  <li><b>Extra memory:</b> Each node requires additional memory for the pointer/reference,
      increasing memory overhead compared to arrays.</li>
</ul>

<h3>Types of Linked Lists</h3>
<ul>
  <li><b>Singly Linked List:</b> Each node points to the next node. Traversal is
      unidirectional (forward only). Simple structure, less memory overhead. Used when
      you only need forward traversal.</li>
  <li><b>Doubly Linked List:</b> Each node has pointers to both next and previous nodes.
      Allows bidirectional traversal. More memory overhead but more flexible. Useful
      when you need to traverse backwards or delete nodes efficiently.</li>
  <li><b>Circular Linked List:</b> Last node points back to the first node, forming
      a circle. Can be singly or doubly linked. Useful for round-robin scheduling and
      circular buffers.</li>
</ul>

<h3>Basic Operations</h3>
<p>
Students should know basic operations for both arrays and linked lists:</p>
<ul>
  <li><b>Traversal:</b> Visit each element sequentially. For arrays, use index-based
      loops. For linked lists, follow pointers from head to tail.</li>
  <li><b>Insertion:</b> Add new elements. Arrays require shifting; linked lists require
      pointer updates. Insertion at beginning is O(1) for linked lists, O(n) for arrays.</li>
  <li><b>Deletion:</b> Remove elements. Arrays require shifting remaining elements;
      linked lists require pointer updates. Deletion at beginning is O(1) for linked
      lists, O(n) for arrays.</li>
  <li><b>Search:</b> Find an element. Both require O(n) time in worst case, but arrays
      can use binary search if sorted (O(log n)).</li>
</ul>

<h3>Comparison: Arrays vs Linked Lists</h3>
<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Feature</th>
    <th>Arrays</th>
    <th>Linked Lists</th>
  </tr>
  <tr>
    <td>Size</td>
    <td>Fixed</td>
    <td>Dynamic</td>
  </tr>
  <tr>
    <td>Memory</td>
    <td>Contiguous</td>
    <td>Non-contiguous</td>
  </tr>
  <tr>
    <td>Access</td>
    <td>Random (O(1))</td>
    <td>Sequential (O(n))</td>
  </tr>
  <tr>
    <td>Insertion (beginning)</td>
    <td>O(n)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Deletion (beginning)</td>
    <td>O(n)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Memory overhead</td>
    <td>Low</td>
    <td>Higher (pointers)</td>
  </tr>
  <tr>
    <td>Cache performance</td>
    <td>Better</td>
    <td>Worse</td>
  </tr>
</table>

<h2>4. When to Use Which</h2>
<p>
Use arrays when you need random access, know the size in advance, and don't need frequent
insertions/deletions. Use linked lists when size is unknown, you need frequent insertions/deletions,
and random access isn't required. Understanding these trade-offs helps choose the right
structure for your problem.
</p>

<h2>Frequently Asked Questions</h2>
<h3>Q1: What is the main advantage of arrays over linked lists?</h3>
<p>
Arrays provide O(1) random access to any element using its index, while linked lists
require O(n) traversal. Arrays also have better cache performance due to contiguous
memory and lower memory overhead (no pointers).
</p>

<h3>Q2: When should I use a linked list instead of an array?</h3>
<p>
Use linked lists when you need frequent insertions/deletions (especially at the beginning),
when the size is unknown or changes frequently, or when you don't need random access.
Linked lists are ideal for implementing stacks, queues, and when memory allocation is
uncertain.
</p>

<h3>Q3: Can arrays and linked lists be used together?</h3>
<p>
Yes! Many advanced data structures combine them. For example, hash tables use arrays
of linked lists (chaining), and some tree structures use arrays to store child pointers.
Understanding both helps in designing efficient hybrid structures.
</p>
    `,
  },
];

export function getProgrammingItemBySlug(slug: string): ProgrammingItem | undefined {
  return programmingItems.find((item) => item.slug === slug);
}

