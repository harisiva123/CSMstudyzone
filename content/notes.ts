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
reasoning, problem solving, perception and language understanding. AI systems are designed
to simulate human cognitive functions and can adapt, learn from experience, and make
decisions based on data and patterns.
</p>

<p>
The field of AI encompasses a wide range of techniques and approaches, from rule-based
expert systems to modern machine learning and deep learning algorithms. AI systems can
process vast amounts of data, recognize patterns, make predictions, and even create
new content. The ultimate goal of AI is to create machines that can think, learn, and
act intelligently, potentially surpassing human capabilities in specific domains.
</p>

<p>
AI is not just about creating robots or chatbots. It's about developing systems that
can understand context, make informed decisions, and improve their performance over time.
From recommendation systems that suggest movies to autonomous vehicles that navigate
complex traffic, AI is transforming how we interact with technology and solve real-world
problems.
</p>

<h3>Key Definitions</h3>
<ul>
  <li><b>Thinking Humanly:</b> Systems that try to mimic human thought process. This approach
      involves understanding how humans think and replicating that process computationally.
      Cognitive science and psychology play important roles here.</li>
  <li><b>Acting Humanly:</b> Systems that behave like humans (Turing test view). If a machine
      can fool a human into thinking it's human through conversation, it passes the Turing test.
      This focuses on behavior rather than internal processes.</li>
  <li><b>Thinking Rationally:</b> Systems that reason using logic. This approach uses formal
      logic and mathematical reasoning to solve problems. It's about correct reasoning,
      not necessarily human-like reasoning.</li>
  <li><b>Acting Rationally:</b> Systems that choose actions to achieve the best outcome. This
      is the most practical approach, focusing on optimal behavior rather than human-like
      behavior. Rational agents maximize expected utility.</li>
</ul>

<h2>2. Brief History of AI</h2>
<p>
The history of AI is a fascinating journey that spans over seven decades. Understanding
this history helps us appreciate how AI has evolved and where it might be heading.
</p>

<ul>
  <li><b>1950</b> – Alan Turing proposes the Turing test in his paper "Computing Machinery
      and Intelligence," establishing a benchmark for machine intelligence.</li>
  <li><b>1956</b> – The Dartmouth conference marks the birth of AI as a field. John McCarthy
      coins the term "Artificial Intelligence." Early optimism about solving AI problems
      quickly emerges.</li>
  <li><b>1960–70</b> – Early search programs and expert systems are developed. Programs like
      ELIZA (natural language processing) and SHRDLU (natural language understanding) demonstrate
      early AI capabilities. The first AI winter begins due to unmet expectations.</li>
  <li><b>1980</b> – Knowledge-based systems and rule engines become popular. Expert systems
      like MYCIN (medical diagnosis) and DENDRAL (chemical analysis) show practical applications.
      Commercial AI industry emerges.</li>
  <li><b>1990s</b> – Machine learning gains prominence. Support vector machines, neural networks,
      and statistical methods become more sophisticated. IBM's Deep Blue defeats world chess
      champion Garry Kasparov in 1997.</li>
  <li><b>2000+</b> – Machine Learning, Deep Learning, Big Data, and modern AI applications
      revolutionize the field. Breakthroughs in deep learning, availability of large datasets,
      and powerful computing enable unprecedented AI capabilities. Applications in image recognition,
      natural language processing, and autonomous systems become mainstream.</li>
</ul>

<h2>3. Applications of AI</h2>
<p>
AI applications have permeated almost every aspect of modern life. From the moment we wake
up and check our smartphones to the recommendations we receive while shopping online, AI
is working behind the scenes to enhance our experiences and solve complex problems.
</p>

<ul>
  <li><b>Natural Language Processing</b> – Chatbots, translators, sentiment analysis, text
      summarization, and voice assistants like Siri and Alexa. NLP enables machines to understand,
      interpret, and generate human language in valuable ways.</li>
  <li><b>Computer Vision</b> – Face detection, medical imaging, autonomous vehicles, quality
      control in manufacturing, and augmented reality. Computer vision allows machines to
      interpret and understand visual information from the world.</li>
  <li><b>Robotics</b> – Industrial robots for manufacturing, service robots for healthcare
      and hospitality, autonomous drones, and robotic process automation. Robotics combines
      AI with mechanical engineering to create intelligent machines.</li>
  <li><b>Expert Systems</b> – Medical diagnosis systems, credit scoring, fraud detection,
      and recommendation engines. Expert systems capture and apply knowledge from human
      experts to solve specific problems.</li>
  <li><b>Games</b> – Chess engines, Go programs (AlphaGo), strategy games, and game AI
      for video games. Game AI demonstrates problem-solving capabilities and has led to
      significant advances in search algorithms.</li>
  <li><b>Healthcare</b> – Disease diagnosis, drug discovery, personalized treatment plans,
      and medical image analysis. AI is revolutionizing healthcare by enabling early detection
      and personalized medicine.</li>
  <li><b>Finance</b> – Algorithmic trading, risk assessment, fraud detection, and credit
      approval systems. AI helps financial institutions make better decisions and manage
      risks more effectively.</li>
</ul>

<h2>4. Intelligent Agents</h2>
<p>
An <b>agent</b> is anything that perceives its environment through sensors and acts upon
that environment using actuators. Agents are the fundamental building blocks of AI systems.
They can range from simple programs that respond to specific inputs to complex systems that
learn and adapt over time.
</p>

<p>
The concept of an agent provides a unified framework for understanding AI systems. Every
AI system can be viewed as an agent that receives percepts (inputs) from its environment,
processes this information, and takes actions to achieve its goals. The sophistication of
an agent depends on how it processes information and makes decisions.
</p>

<h3>Types of Agents</h3>
<ul>
  <li><b>Simple reflex agents</b> – React only to current percept. They use condition-action
      rules: if certain conditions are met, take specific actions. These agents don't consider
      history or future consequences. Example: a thermostat that turns on heating when temperature
      drops below a threshold.</li>
  <li><b>Model-based agents</b> – Maintain some internal state of the world. They keep track
      of aspects of the world that aren't directly observable. This allows them to handle
      partially observable environments. Example: a robot that tracks its position even when
      GPS is temporarily unavailable.</li>
  <li><b>Goal-based agents</b> – Use goal information to choose actions. They consider future
      actions and their consequences. They search for sequences of actions that achieve their
      goals. Example: a navigation system that finds the best route to a destination.</li>
  <li><b>Utility-based agents</b> – Maximize an internal utility function. They consider not
      just whether a goal is achieved, but how well it's achieved. They make trade-offs between
      multiple goals. Example: a trading system that balances profit and risk.</li>
  <li><b>Learning agents</b> – Improve performance based on experience. They can adapt to
      new environments and tasks. Learning agents have components for learning, performance,
      and feedback. Example: recommendation systems that improve suggestions based on user
      interactions.</li>
</ul>

<h2>5. Problem-Solving by Search</h2>
<p>
Many AI problems can be modelled as search in a state space. Search is a fundamental
technique in AI for finding solutions to problems. The idea is to explore possible states
and transitions to find a path from an initial state to a goal state.
</p>

<p>
In search problems, we define a state space that represents all possible configurations
of the problem. Each state represents a particular situation, and actions transform one
state into another. The goal is to find a sequence of actions (a path) that leads from
the initial state to a goal state.
</p>

<h3>Components of Search Problems</h3>
<ul>
  <li><b>Initial state</b> – The starting configuration of the problem. This is where the
      search begins.</li>
  <li><b>Actions</b> – The set of possible actions that can be taken in each state. Actions
      define how we can move from one state to another.</li>
  <li><b>Transition model</b> – Describes what each action does. It specifies the resulting
      state when an action is applied to a state.</li>
  <li><b>Goal test</b> – Determines whether a given state is a goal state. This tells us
      when we've solved the problem.</li>
  <li><b>Path cost</b> – A function that assigns a cost to each path. This allows us to
      find optimal solutions (lowest cost paths).</li>
</ul>

<p>
Examples of search problems include: 8-puzzle (sliding tile puzzle), route finding
(navigation), chess search (game playing), scheduling problems, and resource allocation.
Search algorithms like breadth-first search, depth-first search, A* search, and heuristic
search are fundamental tools in AI problem-solving.
</p>

<h2>6. Summary</h2>
<p>
In Unit 1, focus on definitions of AI, the four views (thinking/acting humanly and rationally),
timeline of AI history, major applications, and structure & types of intelligent agents.
Understanding these foundational concepts is crucial for advanced AI topics.
</p>

<p>
AI is a rapidly evolving field with applications in virtually every domain. From healthcare
to finance, from entertainment to transportation, AI is transforming how we live and work.
As we continue to develop more sophisticated AI systems, understanding the fundamentals
becomes increasingly important.
</p>

<h2>7. Frequently Asked Questions</h2>
<h3>Q1: What is the difference between AI, Machine Learning, and Deep Learning?</h3>
<p>
AI is the broad field of creating intelligent machines. Machine Learning is a subset of
AI that enables systems to learn from data without explicit programming. Deep Learning
is a subset of Machine Learning that uses neural networks with multiple layers to learn
complex patterns.
</p>

<h3>Q2: Can AI systems think like humans?</h3>
<p>
Current AI systems don't think like humans. They process information differently, using
statistical patterns and mathematical operations. While they can perform specific tasks
very well, they lack general intelligence and human-like understanding.
</p>

<h3>Q3: What are the main challenges in AI?</h3>
<p>
Key challenges include: achieving general intelligence (not just narrow tasks), ensuring
AI systems are safe and reliable, addressing ethical concerns, handling uncertainty and
incomplete information, and creating systems that can learn from limited data.
</p>

<h3>Q4: How do intelligent agents differ from simple programs?</h3>
<p>
Intelligent agents are autonomous, perceive their environment, take actions to achieve
goals, and can adapt or learn. Simple programs follow fixed instructions without autonomy
or adaptation capabilities.
</p>

<h3>Q5: What is the importance of search in AI?</h3>
<p>
Search is fundamental to AI problem-solving. Many AI problems can be formulated as search
problems, and efficient search algorithms enable AI systems to find solutions in complex
state spaces. Search techniques are used in planning, game playing, optimization, and
many other AI applications.
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
<h2>Essential C Programs for B.Tech 1st Year</h2>
<p>
Mastering these fundamental C programs is crucial for building a strong programming foundation.
Each program demonstrates important concepts and prepares you for more complex programming
challenges. Practice writing these programs from scratch, understand the logic, and be
able to explain how they work.
</p>

<p>
These programs cover essential programming concepts including input/output operations,
control structures, loops, arrays, strings, and basic algorithms. Understanding and
mastering these programs will help you in lab exams, university examinations, and
programming interviews.
</p>

<h2>Complete List of Essential Programs</h2>
<ol>
  <li><b>Hello World program</b> – Your first C program demonstrating basic structure,
      printf function, and compilation process. This introduces you to the C programming
      environment and basic syntax.</li>
  <li><b>Read and print two numbers</b> – Demonstrates scanf for input, printf for output,
      and basic variable handling. Essential for understanding I/O operations in C.</li>
  <li><b>Swap two numbers</b> – Learn both methods: with temporary variable (standard approach)
      and without temporary variable (using arithmetic operations). Important for understanding
      variable manipulation and memory operations.</li>
  <li><b>Check whether a number is even or odd</b> – Introduces conditional statements (if-else)
      and modulus operator. Fundamental for decision-making in programs.</li>
  <li><b>Find largest of three numbers</b> – Demonstrates nested if-else statements and
      logical operators. Teaches comparison logic and multi-way decision making.</li>
  <li><b>Sum of first N natural numbers using loop</b> – Introduces loops (for/while),
      accumulator pattern, and iterative problem-solving. Essential for understanding
      repetition in programming.</li>
  <li><b>Factorial of a number using loop</b> – Demonstrates iterative computation, loop
      control, and mathematical operations. Can be extended to recursive implementation
      for learning recursion.</li>
  <li><b>Generate Fibonacci series</b> – Introduces sequence generation, multiple variable
      management, and pattern-based programming. Important for understanding series and
      sequences.</li>
  <li><b>Check whether a number is prime</b> – Demonstrates nested loops, conditional logic,
      and mathematical algorithms. Teaches optimization techniques (checking up to sqrt(n)).</li>
  <li><b>Reverse a number</b> – Introduces digit extraction using modulus and division
      operations. Important for understanding number manipulation and algorithm design.</li>
  <li><b>Check palindrome number</b> – Combines number reversal with comparison logic.
      Demonstrates algorithm design and problem-solving approach.</li>
  <li><b>Count digits of a number</b> – Teaches digit counting algorithm using loops and
      division. Useful for understanding number properties and iterative algorithms.</li>
  <li><b>Sum of digits of a number</b> – Demonstrates digit extraction and accumulation.
      Important for understanding number manipulation and accumulator patterns.</li>
  <li><b>Array: read and print N elements</b> – Introduces arrays, indexing, loops with
      arrays, and array traversal. Fundamental for understanding data structures.</li>
  <li><b>Find largest element in an array</b> – Demonstrates array traversal, comparison
      logic, and finding maximum/minimum. Essential algorithm for array operations.</li>
  <li><b>Linear search in an array</b> – Introduces searching algorithms, array traversal
      with conditions, and algorithm efficiency. Foundation for understanding search
      algorithms.</li>
  <li><b>Matrix addition of two 2D arrays</b> – Introduces multi-dimensional arrays,
      nested loops, and matrix operations. Important for understanding 2D data structures.</li>
  <li><b>String length without using strlen()</b> – Teaches manual string manipulation,
      null character handling, and character array traversal. Important for understanding
      how string functions work internally.</li>
  <li><b>Count vowels and consonants in a string</b> – Demonstrates character checking,
      conditional logic with characters, and string traversal. Useful for text processing.</li>
  <li><b>Simple calculator using switch case</b> – Introduces switch statement, menu-driven
      programs, and user interaction. Important for building interactive applications.</li>
</ol>

<h2>Learning Approach</h2>
<p>
For each program, follow this approach:</p>
<ol>
  <li>Understand the problem statement and requirements</li>
  <li>Design the algorithm (step-by-step approach)</li>
  <li>Write the code with proper formatting and comments</li>
  <li>Test with different inputs including edge cases</li>
  <li>Trace through the code manually to verify logic</li>
  <li>Modify the program to add features or variations</li>
</ol>

<h2>Practice Tips</h2>
<ul>
  <li>Write code yourself rather than copying – typing helps with learning</li>
  <li>Understand the logic before moving to the next program</li>
  <li>Practice variations – modify programs to solve related problems</li>
  <li>Test with boundary values – zero, negative numbers, large numbers</li>
  <li>Add error checking and input validation</li>
  <li>Time yourself to improve coding speed for exams</li>
</ol>

<h2>Common Concepts Covered</h2>
<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Concept</th>
    <th>Programs Using It</th>
  </tr>
  <tr>
    <td>Input/Output</td>
    <td>All programs</td>
  </tr>
  <tr>
    <td>Conditional Statements</td>
    <td>Even/odd, largest, prime, palindrome</td>
  </tr>
  <tr>
    <td>Loops</td>
    <td>Sum, factorial, Fibonacci, array operations</td>
  </tr>
  <tr>
    <td>Arrays</td>
    <td>Array read/print, search, matrix operations</td>
  </tr>
  <tr>
    <td>Strings</td>
    <td>String length, vowel/consonant counting</td>
  </tr>
  <tr>
    <td>Switch Statement</td>
    <td>Calculator program</td>
  </tr>
</table>

<h2>Frequently Asked Questions</h2>
<h3>Q1: In what order should I practice these programs?</h3>
<p>
Start with simple programs (Hello World, read/print) and gradually move to complex ones.
Follow this order: basic I/O → conditionals → loops → arrays → strings → advanced algorithms.
Master each concept before moving forward.
</p>

<h3>Q2: How important are these programs for exams?</h3>
<p>
These programs are fundamental and frequently appear in lab exams, theory exams, and
viva questions. Understanding these programs thoroughly is essential for scoring well
and building programming confidence.
</p>

<h3>Q3: Should I memorize these programs?</h3>
<p>
Don't memorize – understand the logic and algorithm. Once you understand how a program
works, you can write it from scratch. Focus on understanding patterns and algorithms
rather than memorizing code.
</p>

<h3>Q4: How can I improve my programming skills with these programs?</h3>
<p>
Practice regularly, write code yourself, modify programs to add features, combine
multiple concepts, add error checking, and solve variations of each problem. Regular
practice and understanding concepts deeply will improve your skills.
</p>

<h3>Q5: What if I get errors while writing these programs?</h3>
<p>
Errors are part of learning. Read error messages carefully, check syntax, verify logic,
use printf for debugging, and trace through code manually. Learning to debug is an
important programming skill.
</p>
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
<p>
Machine Learning Lab provides hands-on experience with fundamental ML algorithms and
techniques. These experiments cover supervised learning (classification and regression),
unsupervised learning (clustering), and essential ML concepts like evaluation metrics
and model validation.
</p>

<p>
Each experiment is designed to teach specific ML concepts while building practical
skills in using Python libraries like scikit-learn, pandas, and matplotlib. Understanding
these experiments thoroughly prepares you for real-world ML applications and advanced
ML courses.
</p>

<h2>Complete List of ML Lab Experiments</h2>
<ol>
  <li><b>Implement linear regression to predict house prices</b> – Learn supervised learning,
      regression problems, cost function, gradient descent, and model evaluation. Understand
      the relationship between features and continuous target variables. Practice with real
      estate datasets and interpret regression coefficients.</li>
  <li><b>Logistic regression for binary classification</b> – Master classification problems,
      sigmoid function, decision boundaries, and probability estimation. Use datasets like
      diabetes prediction, spam detection, or medical diagnosis. Understand how logistic
      regression differs from linear regression.</li>
  <li><b>KNN classifier for Iris dataset</b> – Learn instance-based learning, distance
      metrics (Euclidean, Manhattan), k-value selection, and lazy learning algorithms.
      The Iris dataset is perfect for understanding multi-class classification and
      feature visualization.</li>
  <li><b>Naive Bayes classifier for text classification</b> – Understand probabilistic
      classification, Bayes theorem, feature independence assumption, and text processing.
      Apply to spam detection, sentiment analysis, or document classification. Learn
      about bag-of-words and TF-IDF representations.</li>
  <li><b>Decision tree and random forest for classification</b> – Master tree-based algorithms,
      information gain, entropy, Gini impurity, and ensemble methods. Understand how
      decision trees split data and how random forests reduce overfitting. Visualize
      decision boundaries and feature importance.</li>
  <li><b>Support Vector Machine for non-linear decision boundaries</b> – Learn about
      maximum margin classifiers, kernel functions (RBF, polynomial), hyperparameter
      tuning, and handling non-linearly separable data. Understand the concept of support
      vectors and how kernels transform feature space.</li>
  <li><b>K-means clustering for customer segmentation</b> – Master unsupervised learning,
      centroid-based clustering, distance metrics, and cluster evaluation. Apply to
      customer segmentation, image compression, or anomaly detection. Understand the
      difference between supervised and unsupervised learning.</li>
  <li><b>Principal Component Analysis (PCA) for dimensionality reduction</b> – Learn
      about feature reduction, variance preservation, eigen decomposition, and visualization
      of high-dimensional data. Understand when and why to use dimensionality reduction.
      Apply PCA before classification to improve performance.</li>
  <li><b>Evaluation metrics: accuracy, precision, recall, F1-score, confusion matrix</b> –
      Master model evaluation techniques. Understand when to use which metric, how to
      interpret confusion matrices, and handle imbalanced datasets. Learn about ROC
      curves, AUC, and precision-recall curves.</li>
  <li><b>Train–test split and cross-validation</b> – Learn about model validation,
      overfitting prevention, k-fold cross-validation, stratified sampling, and hyperparameter
      tuning. Understand the importance of proper train-test splits and how cross-validation
      provides more reliable performance estimates.</li>
</ol>

<h2>Experiment Structure</h2>
<p>
For each experiment, include the following components:</p>
<ul>
  <li><b>Objective</b> – Clear statement of what the experiment aims to achieve</li>
  <li><b>Theory</b> – Mathematical foundation, algorithm explanation, and key concepts</li>
  <li><b>Dataset Description</b> – Source, features, target variable, data preprocessing steps</li>
  <li><b>Algorithm</b> – Step-by-step algorithm or methodology</li>
  <li><b>Code</b> – Complete, well-commented Python code with explanations</li>
  <li><b>Output</b> – Screenshots, graphs, tables, and results</li>
  <li><b>Result/Discussion</b> – Analysis of results, observations, limitations, and
      improvements</li>
</ul>

<h2>Essential Python Libraries</h2>
<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Library</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>NumPy</td>
    <td>Numerical computations, arrays, mathematical operations</td>
  </tr>
  <tr>
    <td>Pandas</td>
    <td>Data manipulation, reading CSV files, dataframes</td>
  </tr>
  <tr>
    <td>Scikit-learn</td>
    <td>ML algorithms, preprocessing, model evaluation</td>
  </tr>
  <tr>
    <td>Matplotlib</td>
    <td>Data visualization, plotting graphs</td>
  </tr>
  <tr>
    <td>Seaborn</td>
    <td>Statistical visualizations, heatmaps</td>
  </tr>
</table>

<h2>Learning Outcomes</h2>
<p>
After completing these experiments, you should be able to:</p>
<ul>
  <li>Implement and apply various ML algorithms to real-world problems</li>
  <li>Preprocess data and handle missing values, outliers, and categorical variables</li>
  <li>Evaluate model performance using appropriate metrics</li>
  <li>Visualize data and model results effectively</li>
  <li>Understand when to use which algorithm for different problem types</li>
  <li>Apply cross-validation and hyperparameter tuning</li>
  <li>Interpret model results and make informed decisions</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>Q1: What programming language should I use for ML lab?</h3>
<p>
Python is the standard language for ML due to its extensive libraries (scikit-learn,
pandas, numpy) and ease of use. R is also used but Python is more common in industry
and academia.
</p>

<h3>Q2: Where can I find datasets for these experiments?</h3>
<p>
Use datasets from UCI Machine Learning Repository, Kaggle, scikit-learn's built-in
datasets (load_iris, load_diabetes), or create synthetic datasets. Always cite your
data sources.
</p>

<h3>Q3: How do I choose the right algorithm for a problem?</h3>
<p>
Consider: problem type (classification vs regression), data size, interpretability
requirements, and performance needs. Start with simple algorithms (linear/logistic
regression) and move to complex ones if needed.
</p>

<h3>Q4: What is the difference between supervised and unsupervised learning?</h3>
<p>
Supervised learning uses labeled data (input-output pairs) to learn a mapping function.
Unsupervised learning finds patterns in unlabeled data. Classification and regression
are supervised; clustering is unsupervised.
</p>

<h3>Q5: How important is data preprocessing in ML?</h3>
<p>
Very important! Poor data quality leads to poor models. Preprocessing includes handling
missing values, encoding categorical variables, scaling features, and removing outliers.
Often, 80% of ML work is data preparation.
</p>
    `,
  },
];

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}

