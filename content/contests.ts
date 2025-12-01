/**
 * Contests Data
 * 
 * This file contains all weekly coding contests.
 * 
 * How to add a new contest:
 * 1. Add a new Contest object to the contests array
 * 2. Ensure id and slug are unique
 * 3. Set startTime and endTime as ISO strings
 * 4. Add problemIds from practiceProblems.ts (must exist)
 * 5. Calculate maxScore as sum of baseScore of all problems
 * 6. Provide clear rules in markdown format
 * 
 * How to reset contest progress:
 * - localStorage.removeItem('csmStudyZoneContestProgress')
 * 
 * Future extension:
 * - For real leaderboards, integrate with backend (Supabase/Firebase)
 * - Store user progress in cloud database
 * - Add authentication for user accounts
 */

import { PracticeProblem, getAllProblems } from './practiceProblems';

export type Language = 'C' | 'C++' | 'Java' | 'Python';

export type ContestStatus = 'upcoming' | 'active' | 'finished';

export interface Contest {
  id: string;
  slug: string;               // 'weekly-challenge-1'
  title: string;              // 'Weekly Challenge #1 – Loops & Arrays'
  description: string;
  startTime: string;          // ISO string
  endTime: string;            // ISO string
  languageFilter?: Language[]; // optional, else all
  problemIds: string[];       // subset of PracticeProblem ids
  maxScore: number;           // sum of base scores or custom
  rulesMarkdown: string;      // contest rules in markdown
}

/**
 * Get contest status based on current time
 * @param contest - Contest object
 * @param now - Current date (defaults to new Date())
 * @returns ContestStatus
 */
export function getContestStatus(contest: Contest, now = new Date()): ContestStatus {
  const start = new Date(contest.startTime);
  const end = new Date(contest.endTime);
  
  if (now < start) {
    return 'upcoming';
  } else if (now >= start && now <= end) {
    return 'active';
  } else {
    return 'finished';
  }
}

/**
 * Get all contests
 */
export function getAllContests(): Contest[] {
  return contests;
}

/**
 * Get contest by slug
 */
export function getContestBySlug(slug: string): Contest | undefined {
  return contests.find(c => c.slug === slug);
}

/**
 * Get contests by status
 */
export function getContestsByStatus(status: ContestStatus): Contest[] {
  return contests.filter(c => getContestStatus(c) === status);
}

/**
 * Get problems for a contest
 */
export function getContestProblems(contest: Contest): PracticeProblem[] {
  const allProblems = getAllProblems();
  return contest.problemIds
    .map(id => allProblems.find(p => p.id === id))
    .filter((p): p is PracticeProblem => p !== undefined);
}

// Sample contests
const contests: Contest[] = [
  {
    id: 'contest-001',
    slug: 'weekly-challenge-1',
    title: 'Weekly Challenge #1 – Loops & Arrays',
    description: 'Test your skills with fundamental programming problems focusing on loops, arrays, and basic algorithms. Perfect for beginners!',
    startTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),   // 5 days from now
    languageFilter: ['C', 'C++', 'Java', 'Python'],
    problemIds: [
      'c-001',  // Sum of Two Numbers
      'c-002',  // Factorial
      'c-003',  // Fibonacci
      'c-004',  // Array Max/Min
      'cpp-001', // C++ Sum
      'cpp-002', // C++ Factorial
      'java-001', // Java Hello World
      'java-002', // Java Array Sum
      'python-001', // Python Sum
      'python-002', // Python List Operations
    ],
    maxScore: 145, // Sum of base scores
    rulesMarkdown: `
# Contest Rules

1. **Time Limit**: Contest runs for 7 days from start time
2. **Scoring**: Each problem has a base score. You earn points when you mark it as solved
3. **Languages**: You can solve problems in C, C++, Java, or Python
4. **Submission**: Use the "Mark as Solved" button after solving a problem
5. **Scoring Window**: You can only earn points during the active contest period
6. **Multiple Attempts**: You can attempt problems multiple times, but points are awarded only once per problem
7. **Leaderboard**: Currently stored locally in your browser. Cloud leaderboards coming soon!

## Tips

- Read problem statements carefully
- Check sample input/output
- Use hints if you're stuck
- Test your code with the provided sample cases
- Use online compilers to verify your solution before marking as solved
    `.trim(),
  },
  {
    id: 'contest-002',
    slug: 'weekly-challenge-2',
    title: 'Weekly Challenge #2 – OOP & Data Structures',
    description: 'Intermediate level contest focusing on object-oriented programming concepts and data structure operations.',
    startTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
    endTime: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days from now
    languageFilter: ['C++', 'Java', 'Python'],
    problemIds: [
      'cpp-003',  // Complex Number Class
      'cpp-005',  // Shape Inheritance
      'java-004', // Student Class
      'java-005', // Animal Inheritance
      'java-009', // Shape Interface
      'python-005', // Student Class
      'python-006', // List Comprehension
      'python-009', // Dictionary Sorting
    ],
    maxScore: 240,
    rulesMarkdown: `
# Contest Rules

1. **Time Limit**: Contest runs for 7 days
2. **Difficulty**: Intermediate to Challenge level
3. **Focus**: Object-Oriented Programming and Data Structures
4. **Languages**: C++, Java, or Python only
5. **Scoring**: Points awarded based on problem difficulty
6. **Submission**: Mark problems as solved after implementing and testing
7. **Best Practices**: Write clean, well-structured code following OOP principles

## Evaluation Criteria

- Correctness of solution
- Proper use of OOP concepts
- Code structure and organization
- Understanding of data structures
    `.trim(),
  },
  {
    id: 'contest-003',
    slug: 'weekly-challenge-3-finished',
    title: 'Weekly Challenge #3 – File Handling & Advanced Topics',
    description: 'Advanced contest covering file operations, exception handling, and advanced language features. This contest has finished.',
    startTime: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
    endTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),   // 7 days ago
    languageFilter: ['C', 'C++', 'Java', 'Python'],
    problemIds: [
      'c-008',  // File I/O Character Count
      'cpp-007', // C++ File Handling
      'cpp-008', // Template Function
      'cpp-009', // Exception Handling
      'java-007', // Java Exception Handling
      'java-008', // Java File I/O
      'python-007', // Python File Handling
      'python-008', // Python Exception Handling
      'python-010', // Fibonacci Generator
    ],
    maxScore: 250,
    rulesMarkdown: `
# Contest Rules (Finished)

This contest has ended. View your performance below.

## What Was Covered

- File reading and writing operations
- Exception and error handling
- Advanced language features (templates, generators)
- Best practices for robust programming

## Final Results

Check your score and solved problems in the performance section below.
    `.trim(),
  },
];

export { contests };

