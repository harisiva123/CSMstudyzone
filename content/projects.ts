// content/projects.ts

export type ProjectItem = {
  slug: string;
  title: string;
  domain: string;   // e.g., "AI", "ML", "CVIP", "Web"
  level: string;    // "Mini", "Major", "Beginner", etc.
  summary: string;
  content: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "ai-based-attendance-system-using-face-recognition",
    title: "AI-Based Attendance System using Face Recognition",
    domain: "CVIP / AI",
    level: "Major",
    summary:
      "Automated attendance system that detects and recognizes student faces from a camera feed and marks attendance.",
    content: `
<h2>Problem Statement</h2>
<p>
Manual attendance taking is time-consuming and prone to errors or proxies. The objective is to design an AI-based
system that automatically marks attendance by recognizing student faces in a classroom.
</p>

<h2>Proposed Solution</h2>
<ul>
  <li>Use OpenCV for face detection (Haar cascades or DNN-based).</li>
  <li>Use deep learning-based face recognition (FaceNet, DeepFace, or similar library).</li>
  <li>Maintain a database of enrolled students with face embeddings.</li>
  <li>During class, capture frames from camera, detect faces, recognize ID and store timestamp.</li>
  <li>Generate daily/weekly attendance reports.</li>
</ul>

<h2>Tech Stack</h2>
<ul>
  <li>Python, OpenCV</li>
  <li>Deep learning library (TensorFlow / PyTorch or ready-made face recognition library)</li>
  <li>SQLite / MySQL / PostgreSQL for attendance logs</li>
  <li>Optional: Web dashboard using Flask/Django/React</li>
</ul>

<h2>Expected Outcomes</h2>
<ul>
  <li>Reduced manual effort.</li>
  <li>Accurate, tamper-proof attendance.</li>
  <li>Reports for faculty and administration.</li>
</ul>
    `,
  },
  {
    slug: "ml-based-student-performance-prediction",
    title: "ML-Based Student Performance Prediction",
    domain: "ML",
    level: "Major / Mini",
    summary:
      "Predict student performance or risk of failure using internal marks, attendance and activity features.",
    content: `
<h2>Objective</h2>
<p>
To build a machine learning model that predicts student performance (pass/fail or grade)
based on historical academic and behavioural data.
</p>

<h2>Inputs</h2>
<ul>
  <li>Internal marks, quiz scores, assignment scores.</li>
  <li>Attendance percentage.</li>
  <li>Number of backlogs, lab performance, etc.</li>
</ul>

<h2>Methodology</h2>
<ol>
  <li>Collect anonymized student data.</li>
  <li>Perform feature engineering and normalization.</li>
  <li>Train models: Logistic Regression, Random Forest, XGBoost.</li>
  <li>Compare accuracy, precision, recall, F1-score.</li>
  <li>Deploy as a simple web UI where faculty can enter new data and get prediction.</li>
</ol>

<h2>Outcome</h2>
<p>
The model helps identify at-risk students early so that faculty can provide timely support and remedial classes.
</p>
    `,
  },
  {
    slug: "csm-study-material-portal-full-stack-web-app",
    title: "CSM Study Material Portal – Full Stack Web App",
    domain: "Web / Full Stack",
    level: "Major",
    summary:
      "Full stack web application to manage notes, labs, question banks, and downloads for CSM students (similar to this site).",
    content: `
<h2>Idea</h2>
<p>
Build a centralized portal where faculty can upload notes, lab manuals, question banks and students can browse, search and download materials.
</p>

<h2>Modules</h2>
<ul>
  <li>User roles: admin/faculty, student.</li>
  <li>Upload and manage study materials with categories, semester and subject mapping.</li>
  <li>Search and filter by branch, semester, subject.</li>
  <li>Download tracking and basic analytics.</li>
</ul>

<h2>Tech Stack</h2>
<ul>
  <li>Frontend: React / Next.js</li>
  <li>Backend: Node.js/Express or Next.js API routes</li>
  <li>Database: PostgreSQL / MySQL</li>
  <li>Authentication: JWT or Auth provider (Supabase/Firebase)</li>
</ul>

<h2>Learning Outcomes</h2>
<ul>
  <li>Full stack development skills.</li>
  <li>REST APIs, database modelling.</li>
  <li>Handling file uploads and authentication.</li>
</ul>
    `,
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}

