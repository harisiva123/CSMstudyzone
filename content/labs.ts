// content/labs.ts

export type LabItem = {
  slug: string;
  title: string;
  category: string;  // e.g., "CVIP Lab", "ML Lab", "Python Lab"
  summary: string;
  content: string;   // HTML string
};

export const labs: LabItem[] = [
  {
    slug: "cvip-lab-edge-detection-using-opencv",
    title: "CVIP Lab – Edge Detection using OpenCV",
    category: "CVIP Lab",
    summary:
      "Implement Sobel, Prewitt, and Canny edge detection operators using OpenCV and compare the results.",
    content: `
<h2>Objective</h2>
<p>
To implement edge detection using Sobel, Prewitt, and Canny operators in OpenCV and
observe differences in edge maps for a given grayscale image. Edge detection is a
fundamental operation in computer vision and image processing that identifies boundaries
between different regions in an image.
</p>

<p>
This experiment helps students understand gradient-based edge detection methods, learn
how different operators respond to image features, and compare the performance of
various edge detection algorithms. Edge detection is crucial for object recognition,
image segmentation, and feature extraction in computer vision applications.
</p>

<h2>Theory</h2>
<p>
Edge detection is based on the principle that edges correspond to rapid changes in
image intensity. These changes can be detected by computing the gradient of the image.
Different operators use different methods to approximate the gradient, resulting in
varying edge detection performance.
</p>

<ul>
  <li><b>Sobel operator:</b> Uses two 3×3 kernels (Gx for horizontal edges, Gy for
      vertical edges) to approximate the gradient. The Sobel operator gives more weight
      to pixels closer to the center, making it less sensitive to noise than simple
      gradient operators. The magnitude of the gradient is computed as sqrt(Gx² + Gy²)
      or |Gx| + |Gy| for efficiency.</li>
  <li><b>Prewitt operator:</b> Similar to Sobel but with uniform weights in the kernels.
      It's simpler but more sensitive to noise. Prewitt operators are easier to understand
      and implement, making them good for educational purposes. They use 3×3 kernels with
      values of -1, 0, and 1.</li>
  <li><b>Canny operator:</b> Multi-stage algorithm that provides superior edge detection
      results. The algorithm includes: (1) Gaussian smoothing to reduce noise, (2) gradient
      calculation using Sobel operators, (3) non-maximal suppression to thin edges,
      (4) double thresholding to identify strong and weak edges, and (5) edge tracking
      by hysteresis to connect weak edges to strong edges. Canny produces cleaner,
      more continuous edges compared to simple gradient-based methods.</li>
</ul>

<h2>Algorithm Steps (Detailed)</h2>
<ol>
  <li><b>Read the input image</b> – Load the image using cv2.imread() and convert to
      grayscale if it's a color image. Grayscale conversion simplifies processing and
      reduces computational complexity.</li>
  <li><b>Apply Gaussian blur</b> – Use cv2.GaussianBlur() to reduce noise. Gaussian
      smoothing is essential before edge detection to minimize false edges caused by
      noise. Typical kernel size is 5×5 with standard deviation calculated automatically.</li>
  <li><b>Apply Sobel operator</b> – Compute gradients in X and Y directions using
      cv2.Sobel() with appropriate parameters. Combine the gradients using cv2.magnitude()
      or by taking the absolute sum. Convert the result to 8-bit format for display.</li>
  <li><b>Apply Prewitt operator</b> – Implement Prewitt kernels manually or use
      cv2.filter2D() with custom kernels. Prewitt can also be approximated using
      cv2.Sobel() with different kernel configurations, though true Prewitt uses
      uniform weights.</li>
  <li><b>Apply Canny edge detector</b> – Use cv2.Canny() with two threshold values
      (low and high). The low threshold identifies weak edges, while the high threshold
      identifies strong edges. Typical values are 100 and 200, but they should be
      adjusted based on image characteristics.</li>
  <li><b>Display results</b> – Show the original image, Sobel edges, Prewitt edges,
      and Canny edges side by side for comparison. Use cv2.imshow() or matplotlib
      for visualization.</li>
</ol>

<h2>Sample Python Code (Complete)</h2>
<pre><code class="language-python">
import cv2
import numpy as np
import matplotlib.pyplot as plt

# Read and preprocess image
img = cv2.imread("image.jpg", 0)  # Read as grayscale
if img is None:
    print("Error: Could not read image")
    exit()

# Apply Gaussian blur to reduce noise
blur = cv2.GaussianBlur(img, (5, 5), 0)

# Sobel operator
sobelx = cv2.Sobel(blur, cv2.CV_64F, 1, 0, ksize=3)
sobely = cv2.Sobel(blur, cv2.CV_64F, 0, 1, ksize=3)
sobel = np.sqrt(sobelx**2 + sobely**2)
sobel = np.uint8(np.absolute(sobel))

# Prewitt operator (using custom kernels)
kernelx = np.array([[-1, 0, 1], [-1, 0, 1], [-1, 0, 1]], dtype=np.float32)
kernely = np.array([[-1, -1, -1], [0, 0, 0], [1, 1, 1]], dtype=np.float32)
prewittx = cv2.filter2D(blur, cv2.CV_64F, kernelx)
prewitty = cv2.filter2D(blur, cv2.CV_64F, kernely)
prewitt = np.sqrt(prewittx**2 + prewitty**2)
prewitt = np.uint8(np.absolute(prewitt))

# Canny edge detector
edges_canny = cv2.Canny(blur, 100, 200)

# Display results
plt.figure(figsize=(12, 8))
plt.subplot(2, 2, 1), plt.imshow(img, cmap='gray')
plt.title('Original Image'), plt.axis('off')
plt.subplot(2, 2, 2), plt.imshow(sobel, cmap='gray')
plt.title('Sobel Edges'), plt.axis('off')
plt.subplot(2, 2, 3), plt.imshow(prewitt, cmap='gray')
plt.title('Prewitt Edges'), plt.axis('off')
plt.subplot(2, 2, 4), plt.imshow(edges_canny, cmap='gray')
plt.title('Canny Edges'), plt.axis('off')
plt.tight_layout()
plt.show()
</code></pre>

<h2>Expected Results and Observations</h2>
<p>
After running the code, you should observe:</p>
<ul>
  <li><b>Sobel edges:</b> Generally good edge detection with moderate noise sensitivity.
      Edges are reasonably sharp but may include some noise. Sobel performs well for
      most applications and is computationally efficient.</li>
  <li><b>Prewitt edges:</b> Similar to Sobel but typically more sensitive to noise.
      Edges may be slightly thicker and less precise. Prewitt is simpler but generally
      produces lower quality results than Sobel.</li>
  <li><b>Canny edges:</b> Cleanest and most continuous edges with minimal noise.
      Edges are thin and well-defined. Canny typically produces the best visual results
      but is more computationally expensive than Sobel or Prewitt.</li>
</ul>

<h2>Comparison Table</h2>
<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Operator</th>
    <th>Noise Sensitivity</th>
    <th>Edge Quality</th>
    <th>Computational Cost</th>
    <th>Best Use Case</th>
  </tr>
  <tr>
    <td>Sobel</td>
    <td>Low to Medium</td>
    <td>Good</td>
    <td>Low</td>
    <td>General purpose edge detection</td>
  </tr>
  <tr>
    <td>Prewitt</td>
    <td>Medium</td>
    <td>Fair</td>
    <td>Low</td>
    <td>Educational purposes, simple applications</td>
  </tr>
  <tr>
    <td>Canny</td>
    <td>Very Low</td>
    <td>Excellent</td>
    <td>High</td>
    <td>High-quality edge detection, critical applications</td>
  </tr>
</table>

<h2>Result</h2>
<p>
Attach screenshots comparing Sobel, Prewitt, and Canny edge maps. Comment on the
sharpness of edges, noise sensitivity, edge continuity, and computational requirements.
Discuss which operator would be best for different applications (real-time processing,
high-quality analysis, etc.).
</p>

<h2>Viva Questions</h2>
<ul>
  <li>What is the difference between Sobel and Prewitt operators?</li>
  <li>Why is Gaussian blur applied before edge detection?</li>
  <li>What are the advantages of Canny edge detector over Sobel?</li>
  <li>How do you choose threshold values for Canny edge detection?</li>
  <li>What is non-maximal suppression in Canny algorithm?</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>Q1: Why do we convert images to grayscale for edge detection?</h3>
<p>
Grayscale simplifies processing by reducing the image to a single channel. Edge detection
is based on intensity changes, which are easier to detect in grayscale. Color information
isn't necessary for edge detection and adds computational complexity.
</p>

<h3>Q2: What happens if we don't apply Gaussian blur before edge detection?</h3>
<p>
Without blurring, noise in the image will be detected as edges, resulting in many false
positives. Gaussian blur smooths the image, reducing noise while preserving important
edges, leading to cleaner edge detection results.
</p>

<h3>Q3: How do I choose the right threshold values for Canny edge detection?</h3>
<p>
Threshold values depend on image characteristics. Start with a ratio of 1:2 or 1:3
between low and high thresholds. Adjust based on desired edge sensitivity – lower
thresholds detect more edges (including noise), higher thresholds detect only strong
edges. Experiment with different values and visually inspect results.
</p>
    `,
  },
  {
    slug: "ml-lab-linear-regression-house-prices",
    title: "ML Lab – Linear Regression for House Price Prediction",
    category: "ML Lab",
    summary:
      "Use simple linear regression to model the relationship between house area and price.",
    content: `
<h2>Objective</h2>
<p>
To implement simple linear regression and predict house prices based on area using Python
and scikit-learn. Linear regression is one of the most fundamental machine learning
algorithms and serves as a foundation for understanding more complex models.
</p>

<p>
This experiment introduces supervised learning, regression problems, model training,
evaluation metrics, and data visualization. Students will learn to build, train, and
evaluate a machine learning model from scratch, understanding the complete ML workflow.
</p>

<h2>Theory</h2>
<p>
Linear regression models the relationship between a dependent variable (target) and one
or more independent variables (features) using a linear equation. In simple linear
regression, we have one feature and one target variable.
</p>

<p>
The linear regression model assumes: <code>y = mx + c</code>, where:
<ul>
  <li><b>y</b> is the target variable (house price)</li>
  <li><b>x</b> is the feature variable (area)</li>
  <li><b>m</b> is the slope (coefficient)</li>
  <li><b>c</b> is the y-intercept</li>
</ul>
</p>

<p>
The algorithm finds the best values of m and c that minimize the sum of squared errors
between predicted and actual values. This is done using the least squares method or
gradient descent optimization.
</p>

<h2>Dataset</h2>
<p>
Use a CSV file with two columns: <code>area</code> (in square feet) and <code>price</code>
(in lakhs). The dataset should have sufficient data points (at least 20-30) for meaningful
training and testing. You can create synthetic data or use real estate datasets from
sources like Kaggle.
</p>

<p>
Example dataset structure:</p>
<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Area (sq ft)</th>
    <th>Price (lakhs)</th>
  </tr>
  <tr>
    <td>1200</td>
    <td>45</td>
  </tr>
  <tr>
    <td>1500</td>
    <td>55</td>
  </tr>
  <tr>
    <td>1800</td>
    <td>65</td>
  </tr>
</table>

<h2>Steps (Detailed Algorithm)</h2>
<ol>
  <li><b>Load the CSV dataset</b> – Use <code>pandas.read_csv()</code> to load the data.
      Inspect the data using <code>head()</code>, <code>info()</code>, and <code>describe()</code>
      to understand its structure and check for missing values.</li>
  <li><b>Split into feature and target</b> – Separate the dataset into feature matrix
      X (area) and target vector y (price). Use <code>df[['area']]</code> for features
      and <code>df['price']</code> for target. Reshape if necessary using <code>.values.reshape(-1, 1)</code>.</li>
  <li><b>Split into train and test sets</b> – Use <code>train_test_split()</code> from
      scikit-learn with a typical split of 80% training and 20% testing. Set
      <code>random_state</code> for reproducibility. This ensures the model is evaluated
      on unseen data.</li>
  <li><b>Fit LinearRegression model</b> – Create a <code>LinearRegression()</code> object
      and call <code>fit(X_train, y_train)</code> to train the model. The model learns
      the coefficients (slope and intercept) that best fit the training data.</li>
  <li><b>Predict on test data</b> – Use <code>predict(X_test)</code> to generate predictions
      for the test set. Compare predicted values with actual values to evaluate model
      performance.</li>
  <li><b>Compute evaluation metrics</b> – Calculate Mean Absolute Error (MAE), Mean
      Squared Error (MSE), Root Mean Squared Error (RMSE), and R²-score using functions
      from <code>sklearn.metrics</code>. These metrics help understand how well the model
      performs.</li>
  <li><b>Visualize results</b> – Plot the training data points, test data points, and
      the regression line using matplotlib. This visual representation helps understand
      how well the model fits the data and identifies any patterns or outliers.</li>
</ol>

<h2>Complete Python Code</h2>
<pre><code class="language-python">
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# Step 1: Load dataset
df = pd.read_csv('house_prices.csv')
print("Dataset shape:", df.shape)
print(df.head())
print(df.describe())

# Step 2: Prepare features and target
X = df[['area']].values  # Feature: area
y = df['price'].values   # Target: price

# Step 3: Split into train and test sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Step 4: Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Get model parameters
print(f"Slope (m): {model.coef_[0]:.2f}")
print(f"Intercept (c): {model.intercept_:.2f}")
print(f"Equation: price = {model.coef_[0]:.2f} * area + {model.intercept_:.2f}")

# Step 5: Make predictions
y_train_pred = model.predict(X_train)
y_test_pred = model.predict(X_test)

# Step 6: Evaluate model
mae = mean_absolute_error(y_test, y_test_pred)
mse = mean_squared_error(y_test, y_test_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_test_pred)

print("\\nEvaluation Metrics:")
print(f"MAE: {mae:.2f}")
print(f"MSE: {mse:.2f}")
print(f"RMSE: {rmse:.2f}")
print(f"R² Score: {r2:.4f}")

# Step 7: Visualize results
plt.figure(figsize=(10, 6))
plt.scatter(X_train, y_train, color='blue', alpha=0.5, label='Training Data')
plt.scatter(X_test, y_test, color='green', alpha=0.5, label='Test Data')
plt.plot(X_train, y_train_pred, color='red', linewidth=2, label='Regression Line')
plt.xlabel('Area (sq ft)')
plt.ylabel('Price (lakhs)')
plt.title('House Price Prediction using Linear Regression')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()
</code></pre>

<h2>Expected Output</h2>
<ul>
  <li><b>Regression equation:</b> <code>price = m * area + c</code> with specific
      numerical values for m and c. The equation shows the learned relationship between
      area and price.</li>
  <li><b>Error metrics:</b> MAE, MSE, RMSE, and R²-score values. Lower MAE, MSE, and
      RMSE indicate better performance. R²-score close to 1.0 indicates a good fit.</li>
  <li><b>Visualization:</b> A scatter plot showing data points and the best-fit regression
      line. The line should pass through the center of the data points, indicating a
      good model fit.</li>
</ul>

<h2>Understanding Evaluation Metrics</h2>
<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Metric</th>
    <th>Formula</th>
    <th>Interpretation</th>
  </tr>
  <tr>
    <td>MAE</td>
    <td>Mean of |actual - predicted|</td>
    <td>Average absolute error, easy to interpret</td>
  </tr>
  <tr>
    <td>MSE</td>
    <td>Mean of (actual - predicted)²</td>
    <td>Penalizes large errors more, in squared units</td>
  </tr>
  <tr>
    <td>RMSE</td>
    <td>√MSE</td>
    <td>Same units as target, most commonly used</td>
  </tr>
  <tr>
    <td>R² Score</td>
    <td>1 - (SS_res / SS_tot)</td>
    <td>Proportion of variance explained, 0-1 scale</td>
  </tr>
</table>

<h2>Frequently Asked Questions</h2>
<h3>Q1: What if the relationship between area and price is not linear?</h3>
<p>
If the relationship is non-linear, simple linear regression won't work well. You can
try polynomial regression, transform the features (log, square root), or use non-linear
models. Check the scatter plot first to see if a linear relationship exists.
</p>

<h3>Q2: How do I interpret the R² score?</h3>
<p>
R² score ranges from 0 to 1 (can be negative for very poor models). R² = 1 means perfect
predictions, R² = 0 means the model is no better than predicting the mean. Generally,
R² > 0.7 is considered good, but it depends on the problem domain.
</p>

<h3>Q3: Why do we split data into train and test sets?</h3>
<p>
Training on all data and testing on the same data would give overly optimistic results
(overfitting). Testing on unseen data gives a realistic estimate of how the model will
perform on new data, which is the real goal of machine learning.
</p>
    `,
  },
  {
    slug: "python-lab-basic-programs-and-control-structures",
    title: "Python Lab – Basic Programs and Control Structures",
    category: "Python Lab",
    summary:
      "Collection of starter-level Python programs using input/output, conditions and loops.",
    content: `
<h2>Python Lab – Basic Programs and Control Structures</h2>
<p>
This lab introduces fundamental Python programming concepts through hands-on practice.
These experiments cover essential programming constructs including input/output operations,
conditional statements, loops, string manipulation, and basic algorithms. Mastering
these programs builds a strong foundation for advanced Python programming and data science.
</p>

<p>
Python's simplicity and readability make it an excellent language for beginners. These
experiments demonstrate Python's syntax, data types, control flow, and built-in functions.
Each program teaches specific concepts while building practical programming skills.
</p>

<h2>Complete List of Experiments</h2>
<ol>
  <li><b>Print "Hello, World" and user name</b> – Introduction to Python syntax, print()
      function, input() function, and string formatting. Learn basic I/O operations and
      variable assignment. Understand Python's dynamic typing and simple string operations.</li>
  <li><b>Read two numbers and perform arithmetic operations</b> – Learn type conversion
      (int(), float()), arithmetic operators (+, -, *, /, %, **), and formatted output.
      Practice handling user input and performing calculations. Understand operator
      precedence and type handling.</li>
  <li><b>Check whether a number is even or odd</b> – Introduction to conditional statements
      (if-else), modulus operator (%), and boolean expressions. Learn decision-making
      in programs and understand how conditions control program flow.</li>
  <li><b>Find largest of three numbers</b> – Master nested if-else statements, logical
      operators (and, or, not), and multi-way decision making. Learn to compare multiple
      values and find maximum/minimum. Can also use built-in max() function.</li>
  <li><b>Generate Fibonacci series up to N terms</b> – Learn loops (for, while), sequence
      generation, multiple variable management, and iterative algorithms. Understand how
      to generate mathematical sequences and handle series. Practice loop control and
      variable updates.</li>
  <li><b>Find factorial of a number using loop</b> – Master iterative computation, accumulator
      pattern, and loop-based calculations. Understand how to compute mathematical functions
      iteratively. Can be extended to recursive implementation for learning recursion.</li>
  <li><b>Check whether a string is palindrome</b> – Learn string manipulation, indexing,
      slicing, string reversal, and string comparison. Understand how to work with strings
      in Python, including negative indexing and string methods like reverse() or slicing
      [::-1].</li>
  <li><b>Sum of digits of a number</b> – Practice number manipulation, digit extraction
      using modulus and division, loops with numbers, and accumulator patterns. Learn
      to break down numbers into digits and process them individually.</li>
  <li><b>Display multiplication table of a given number</b> – Master nested loops (if
      needed for formatting), formatted output, and table generation. Learn to create
      structured output and understand loop-based table generation. Practice string
      formatting for aligned output.</li>
  <li><b>Count vowels and consonants in a string</b> – Learn character checking, string
      traversal, conditional logic with characters, and counting patterns. Understand
      how to iterate through strings, check character properties, and maintain counters.
      Practice using membership operators (in, not in) with strings.</li>
</ol>

<h2>Experiment Structure</h2>
<p>
For each experiment, include the following components:</p>
<ul>
  <li><b>Aim</b> – Clear objective stating what the program should accomplish</li>
  <li><b>Algorithm</b> – Step-by-step approach to solve the problem</li>
  <li><b>Program</b> – Complete, well-commented Python code</li>
  <li><b>Sample Input and Output</b> – Example test cases with expected results</li>
  <li><b>Result/Observation</b> – Analysis of program behavior, edge cases, and
      possible improvements</li>
</ul>

<h2>Key Python Concepts Covered</h2>
<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Concept</th>
    <th>Experiments</th>
  </tr>
  <tr>
    <td>Input/Output</td>
    <td>All experiments</td>
  </tr>
  <tr>
    <td>Variables & Data Types</td>
    <td>All experiments</td>
  </tr>
  <tr>
    <td>Conditional Statements</td>
    <td>Even/odd, largest, palindrome</td>
  </tr>
  <tr>
    <td>Loops (for, while)</td>
    <td>Fibonacci, factorial, multiplication table, digit operations</td>
  </tr>
  <tr>
    <td>String Operations</td>
    <td>Hello World, palindrome, vowel counting</td>
  </tr>
  <tr>
    <td>Number Operations</td>
    <td>Arithmetic, digit sum, even/odd</td>
  </tr>
</table>

<h2>Sample Program: Fibonacci Series</h2>
<pre><code class="language-python">
# Aim: Generate Fibonacci series up to N terms
# Algorithm:
# 1. Read number of terms N
# 2. Initialize first two terms (0, 1)
# 3. Print first two terms
# 4. Generate next terms by adding previous two
# 5. Print each term

n = int(input("Enter number of terms: "))
a, b = 0, 1

if n <= 0:
    print("Please enter a positive number")
elif n == 1:
    print(f"Fibonacci series: {a}")
else:
    print(f"Fibonacci series: {a}, {b}", end="")
    for i in range(2, n):
        c = a + b
        print(f", {c}", end="")
        a, b = b, c
    print()  # New line

# Sample Input: 8
# Sample Output: Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13
</code></pre>

<h2>Learning Outcomes</h2>
<p>
After completing these experiments, students should be able to:</p>
<ul>
  <li>Write Python programs using basic syntax and data types</li>
  <li>Handle user input and produce formatted output</li>
  <li>Use conditional statements for decision-making</li>
  <li>Implement loops for repetitive tasks</li>
  <li>Manipulate strings and numbers effectively</li>
  <li>Design algorithms to solve simple problems</li>
  <li>Debug programs and handle edge cases</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>Q1: What is the difference between for and while loops in Python?</h3>
<p>
For loops iterate over a sequence (list, string, range) and execute a fixed number of
times. While loops continue as long as a condition is true and are used when the number
of iterations is unknown. Choose for loops when you know the iteration count, while loops
for conditional repetition.
</p>

<h3>Q2: How do I handle invalid input in Python programs?</h3>
<p>
Use try-except blocks to catch exceptions. For example, wrap int(input()) in try-except
ValueError to handle non-numeric input. Always validate user input before processing to
prevent program crashes.
</p>

<h3>Q3: What is the difference between == and = in Python?</h3>
<p>
= is the assignment operator (assigns value to variable). == is the equality comparison
operator (checks if two values are equal). Using = in conditions is a common error that
assigns instead of comparing.
</p>
    `,
  },
];

export function getLabBySlug(slug: string): LabItem | undefined {
  return labs.find((lab) => lab.slug === slug);
}

