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
observe differences in edge maps for a given grayscale image.
</p>

<h2>Theory</h2>
<ul>
  <li><b>Sobel operator:</b> Uses two 3×3 kernels (Gx, Gy) to approximate the gradient.</li>
  <li><b>Prewitt operator:</b> Similar to Sobel but with uniform weights.</li>
  <li><b>Canny operator:</b> Multi-stage algorithm including smoothing, gradient calculation,
      non-maximal suppression, double thresholding, and edge tracking by hysteresis.</li>
</ul>

<h2>Algorithm Steps (General)</h2>
<ol>
  <li>Read the input image and convert it to grayscale.</li>
  <li>Apply Gaussian blur to reduce noise.</li>
  <li>Apply Sobel operator in X and Y directions, combine gradients.</li>
  <li>Apply Prewitt operator (or approximate using custom kernels).</li>
  <li>Apply Canny edge detector with suitable thresholds.</li>
  <li>Display input and output edge maps.</li>
</ol>

<h2>Sample Python Code (Outline)</h2>
<pre><code class="language-python">
import cv2
import numpy as np

img = cv2.imread("image.jpg", 0)
blur = cv2.GaussianBlur(img, (5, 5), 0)

sobelx = cv2.Sobel(blur, cv2.CV_64F, 1, 0, ksize=3)
sobely = cv2.Sobel(blur, cv2.CV_64F, 0, 1, ksize=3)
sobel = cv2.magnitude(sobelx, sobely)

edges_canny = cv2.Canny(blur, 100, 200)
</code></pre>

<h2>Result</h2>
<p>
Attach screenshots comparing Sobel, Prewitt, and Canny edge maps. Comment on the
sharpness of edges and noise sensitivity.
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
To implement simple linear regression and predict house prices based on area using Python and scikit-learn.
</p>

<h2>Dataset</h2>
<p>
Use a CSV file with two columns: <code>area</code> (in square feet) and <code>price</code> (in lakhs).
</p>

<h2>Steps</h2>
<ol>
  <li>Load the CSV dataset using pandas.</li>
  <li>Split into feature matrix X (area) and target vector y (price).</li>
  <li>Split into train and test sets.</li>
  <li>Fit <code>LinearRegression()</code> model on training data.</li>
  <li>Predict on test data.</li>
  <li>Compute metrics: MAE, MSE, RMSE, R²-score.</li>
  <li>Plot regression line with scatter plot of data points.</li>
</ol>

<h2>Expected Output</h2>
<ul>
  <li>Regression equation: <code>price = m * area + c</code></li>
  <li>Error metrics.</li>
  <li>Graph showing best-fit line.</li>
</ul>
    `,
  },
  {
    slug: "python-lab-basic-programs-and-control-structures",
    title: "Python Lab – Basic Programs and Control Structures",
    category: "Python Lab",
    summary:
      "Collection of starter-level Python programs using input/output, conditions and loops.",
    content: `
<h2>List of Experiments</h2>
<ol>
  <li>Print "Hello, World" and user name.</li>
  <li>Read two numbers and perform arithmetic operations.</li>
  <li>Check whether a number is even or odd.</li>
  <li>Find largest of three numbers.</li>
  <li>Generate Fibonacci series up to N terms.</li>
  <li>Find factorial of a number using loop.</li>
  <li>Check whether a string is palindrome.</li>
  <li>Sum of digits of a number.</li>
  <li>Display multiplication table of a given number.</li>
  <li>Count vowels and consonants in a string.</li>
</ol>

<p>
For each experiment include: aim, algorithm, program, sample input and output,
and short result/observation.
</p>
    `,
  },
];

export function getLabBySlug(slug: string): LabItem | undefined {
  return labs.find((lab) => lab.slug === slug);
}

