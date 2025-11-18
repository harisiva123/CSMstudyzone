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
A typical C program contains preprocessor directives, global declarations, <code>main()</code> function and
optional user-defined functions.
</p>

<h2>2. Input and Output</h2>
<ul>
  <li><code>printf()</code> – used for formatted output.</li>
  <li><code>scanf()</code> – used for formatted input.</li>
</ul>

<h2>3. Data Types</h2>
<ul>
  <li>int, float, double, char</li>
  <li>short, long, unsigned variants</li>
</ul>

<h2>4. Operators</h2>
<ul>
  <li>Arithmetic: +, -, *, /, %</li>
  <li>Relational: &lt;, &gt;, &lt;=, &gt;=, ==, !=</li>
  <li>Logical: &&, ||, !</li>
  <li>Assignment: =, +=, -=, etc.</li>
  <li>Increment/Decrement: ++, --</li>
</ul>

<p>
Students should practice small programs using combinations of operators and formatted I/O.
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
Python is dynamically typed. Common types: int, float, bool, str, list, tuple, dict.
</p>

<h2>2. Lists</h2>
<p>
Lists are ordered, mutable collections.
</p>
<pre><code class="language-python">
numbers = [10, 20, 30]
numbers.append(40)
for n in numbers:
    print(n)
</code></pre>

<h2>3. Loops</h2>
<ul>
  <li><b>for</b> loop – iterate over sequence.</li>
  <li><b>while</b> loop – repeat based on condition.</li>
</ul>

<p>
Practice programs: sum of list elements, find max/min, count positive numbers, etc.
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
insertion, deletion and retrieval can be performed efficiently.
</p>

<h2>2. Arrays</h2>
<ul>
  <li>Fixed-size, contiguous memory.</li>
  <li>Random access using index.</li>
  <li>Used for lists, matrices, etc.</li>
</ul>

<h2>3. Linked Lists</h2>
<ul>
  <li>Collection of nodes where each node stores data and address of next node.</li>
  <li>Dynamic size, easy insertion/deletion.</li>
  <li>Types: singly, doubly, circular lists.</li>
</ul>

<p>
Students should know basic operations: traversal, insertion, deletion for both arrays and linked lists.
</p>
    `,
  },
];

export function getProgrammingItemBySlug(slug: string): ProgrammingItem | undefined {
  return programmingItems.find((item) => item.slug === slug);
}

