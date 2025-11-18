// content/notes.ts

export type Note = {
  slug: string;
  title: string;
  category: string;      // e.g. "AI", "ML", "C Programming"
  semester?: number;
  summary: string;
  content: string;       // HTML string for now
};

export const notes: Note[] = [
  {
    slug: "ai-unit-1-introduction-to-ai",
    title: "AI Unit 1 – Introduction to Artificial Intelligence",
    category: "AI",
    semester: 5,
    summary:
      "Definition of AI, history, applications, types of agents, and basic problem-solving approaches.",
    content: `
<h2>1. What is Artificial Intelligence?</h2>
<p>
Artificial Intelligence (AI) is the branch of computer science that aims to build systems
that can perform tasks which normally require human intelligence such as learning,
reasoning, problem solving, perception and language understanding.
</p>

<h3>Key Definitions</h3>
<ul>
  <li><b>Thinking Humanly:</b> systems that try to mimic human thought process.</li>
  <li><b>Acting Humanly:</b> systems that behave like humans (Turing test view).</li>
  <li><b>Thinking Rationally:</b> systems that reason using logic.</li>
  <li><b>Acting Rationally:</b> systems that choose actions to achieve the best outcome.</li>
</ul>

<h2>2. Brief History of AI</h2>
<ul>
  <li>1950 – Turing test proposed by Alan Turing.</li>
  <li>1956 – Dartmouth conference, the birth of AI as a field.</li>
  <li>1960–70 – Early search programs and expert systems.</li>
  <li>1980 – Knowledge-based systems, rule engines.</li>
  <li>2000+ – Machine Learning, Deep Learning, Big Data, modern AI applications.</li>
</ul>

<h2>3. Applications of AI</h2>
<ul>
  <li>Natural Language Processing – chatbots, translators.</li>
  <li>Computer Vision – face detection, medical imaging.</li>
  <li>Robotics – industrial robots, service robots.</li>
  <li>Expert Systems – medical diagnosis, credit scoring.</li>
  <li>Games – chess, Go, strategy games.</li>
</ul>

<h2>4. Intelligent Agents</h2>
<p>An <b>agent</b> is anything that perceives its environment through sensors and acts upon that environment using actuators.</p>

<h3>Types of Agents</h3>
<ul>
  <li><b>Simple reflex agents</b> – react only to current percept.</li>
  <li><b>Model-based agents</b> – maintain some internal state of the world.</li>
  <li><b>Goal-based agents</b> – use goal information to choose actions.</li>
  <li><b>Utility-based agents</b> – maximize an internal utility function.</li>
  <li><b>Learning agents</b> – improve performance based on experience.</li>
</ul>

<h2>5. Problem-Solving by Search</h2>
<p>Many AI problems can be modelled as search in a state space.</p>
<ul>
  <li>Initial state</li>
  <li>Actions</li>
  <li>Transition model</li>
  <li>Goal test</li>
  <li>Path cost</li>
</ul>

<p>Examples: 8-puzzle, route finding, chess search, etc.</p>

<h2>6. Summary</h2>
<p>
In Unit 1, focus on definitions of AI, the four views (thinking/acting humanly and rationally),
timeline of AI history, major applications, and structure & types of intelligent agents.
</p>
    `,
  },
  {
    slug: "top-20-c-programs-for-beginners",
    title: "Top 20 C Programs for B.Tech 1st Year",
    category: "C Programming",
    summary:
      "List of fundamental C programs such as hello world, arithmetic operations, loops, arrays and strings.",
    content: `
<h2>Essential C Programs</h2>
<ol>
  <li>Hello World program.</li>
  <li>Read and print two numbers.</li>
  <li>Swap two numbers (with and without temporary variable).</li>
  <li>Check whether a number is even or odd.</li>
  <li>Find largest of three numbers.</li>
  <li>Sum of first N natural numbers using loop.</li>
  <li>Factorial of a number using loop.</li>
  <li>Generate Fibonacci series.</li>
  <li>Check whether a number is prime.</li>
  <li>Reverse a number.</li>
  <li>Check palindrome number.</li>
  <li>Count digits of a number.</li>
  <li>Sum of digits of a number.</li>
  <li>Array: read and print N elements.</li>
  <li>Find largest element in an array.</li>
  <li>Linear search in an array.</li>
  <li>Matrix addition of two 2D arrays.</li>
  <li>String length without using <code>strlen()</code>.</li>
  <li>Count vowels and consonants in a string.</li>
  <li>Simple calculator using switch case.</li>
</ol>

<p>You can later extend each point into a full program with code and explanation.</p>
    `,
  },
  {
    slug: "ml-lab-experiments-outline",
    title: "Machine Learning Lab – List of Core Experiments",
    category: "ML Lab",
    summary:
      "Outline of major ML lab experiments using Python and scikit-learn for B.Tech CSM/CSE.",
    content: `
<h2>Machine Learning Lab Experiments</h2>
<ol>
  <li>Implement linear regression to predict house prices.</li>
  <li>Logistic regression for binary classification (e.g., diabetes dataset).</li>
  <li>KNN classifier for Iris dataset.</li>
  <li>Naive Bayes classifier for text classification.</li>
  <li>Decision tree and random forest for classification.</li>
  <li>Support Vector Machine for non-linear decision boundaries.</li>
  <li>K-means clustering for customer segmentation.</li>
  <li>Principal Component Analysis (PCA) for dimensionality reduction.</li>
  <li>Evaluation metrics: accuracy, precision, recall, F1-score, confusion matrix.</li>
  <li>Train–test split and cross-validation.</li>
</ol>

<p>
For each experiment add: objective, theory, dataset description, algorithm, code, output, and result/discussion.
</p>
    `,
  },
];

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}

