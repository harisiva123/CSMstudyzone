# Programming Practice & Contests System - User Guide

## Overview

The Programming Practice & Contests system allows students to:
- Practice programming problems in C, C++, Java, and Python
- Participate in weekly coding contests
- Track progress and earn points
- View detailed problem statements with hints and sample I/O

## Features

### Practice Page (`/practice`)
- Filter problems by language (C, C++, Java, Python)
- Filter by difficulty (Beginner, Intermediate, Challenge)
- View progress statistics
- Track solved problems and scores
- Access online compilers directly

### Contests Page (`/contests`)
- View active, upcoming, and finished contests
- Real-time countdown timers
- Contest-specific scoring
- Performance summaries

## How to Add a New Practice Problem

1. Open `content/practiceProblems.ts`
2. Add a new problem object to the appropriate language array (cProblems, cppProblems, javaProblems, or pythonProblems)
3. Ensure the `id` is unique (e.g., 'c-011', 'cpp-011')
4. Fill in all required fields:
   - `id`: Unique identifier
   - `slug`: URL-friendly identifier (kebab-case)
   - `language`: 'C', 'C++', 'Java', or 'Python'
   - `title`: Problem title
   - `tags`: Array of relevant tags
   - `difficulty`: 'Beginner', 'Intermediate', or 'Challenge'
   - `description`: 2-4 line problem statement
   - `inputFormat`: Description of input format
   - `outputFormat`: Description of output format
   - `sampleInput`: Sample input (string)
   - `sampleOutput`: Sample output (string)
   - `constraints`: Optional constraints
   - `hint`: Optional hint
   - `useCase`: Use case description
   - `externalCompilerUrl`: Link to online compiler
   - `baseScore`: Points awarded (10, 15, 20, 25, 30, 35, 40)

Example:
```typescript
{
  id: 'c-011',
  slug: 'bubble-sort',
  language: 'C',
  title: 'Bubble Sort Implementation',
  tags: ['Arrays', 'Sorting'],
  difficulty: 'Intermediate',
  description: 'Write a C program to sort an array using bubble sort algorithm.',
  inputFormat: 'First line: n (size). Second line: n integers.',
  outputFormat: 'Print sorted array.',
  sampleInput: '5\n5 2 8 1 9',
  sampleOutput: '1 2 5 8 9',
  constraints: '1 ≤ n ≤ 100',
  hint: 'Compare adjacent elements and swap if needed. Repeat n-1 times.',
  useCase: 'C Programming Lab – Sorting Algorithms. Important for data structures.',
  externalCompilerUrl: 'https://www.programiz.com/c-programming/online-compiler/',
  baseScore: 25,
}
```

## How to Add a New Contest

1. Open `content/contests.ts`
2. Add a new contest object to the `contests` array
3. Set appropriate dates (startTime and endTime as ISO strings)
4. Select problem IDs from practiceProblems.ts
5. Calculate maxScore as sum of base scores
6. Write rules in markdown format

Example:
```typescript
{
  id: 'contest-004',
  slug: 'weekly-challenge-4',
  title: 'Weekly Challenge #4 – Advanced Topics',
  description: 'Advanced programming contest covering file handling and exception handling.',
  startTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
  endTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
  languageFilter: ['C', 'C++', 'Java', 'Python'],
  problemIds: ['c-008', 'cpp-007', 'java-008', 'python-007'],
  maxScore: 115, // Sum of base scores
  rulesMarkdown: `# Contest Rules\n\n1. Time limit: 7 days\n2. Solve problems to earn points...`,
}
```

## How Scoring is Stored

### Practice Progress
- **Storage Key**: `csmStudyZonePracticeProgress`
- **Location**: Browser localStorage
- **Format**: JSON object with problem IDs as keys
- **Structure**:
```typescript
{
  "c-001": {
    "solved": true,
    "solvedAt": "2024-01-15T10:30:00.000Z",
    "scoreEarned": 10
  }
}
```

### Contest Progress
- **Storage Key**: `csmStudyZoneContestProgress`
- **Location**: Browser localStorage
- **Format**: JSON object with contest IDs as keys
- **Structure**:
```typescript
{
  "contest-001": {
    "c-001": {
      "solved": true,
      "solvedAt": "2024-01-15T10:30:00.000Z",
      "scoreEarned": 10
    }
  }
}
```

## How to Clear Progress for Testing

### Clear Practice Progress
Open browser console and run:
```javascript
localStorage.removeItem('csmStudyZonePracticeProgress');
```

### Clear Contest Progress
Open browser console and run:
```javascript
localStorage.removeItem('csmStudyZoneContestProgress');
```

### Clear All Progress
```javascript
localStorage.removeItem('csmStudyZonePracticeProgress');
localStorage.removeItem('csmStudyZoneContestProgress');
```

## URL Query Parameters

The practice page supports URL query parameters for filtering:

- `?language=C` - Filter by language
- `?difficulty=Beginner` - Filter by difficulty
- `?language=C++&difficulty=Intermediate` - Combine filters

Example: `/practice?language=C&difficulty=Beginner`

## Future Extensions

The system is designed to be easily extended with:
- Backend integration (Supabase/Firebase)
- User authentication
- Cloud leaderboards
- Real-time rankings
- Contest prizes and rewards

See comments in `lib/hooks/usePracticeProgress.ts` and `lib/hooks/useContestProgress.ts` for integration points.

## Components

### ProblemDetails
Modal component for displaying problem details with:
- Problem statement
- Input/output formats
- Sample I/O with copy buttons
- Hints (collapsible)
- Online compiler link
- Mark as solved button

### CopyToClipboardButton
Reusable button for copying text to clipboard with visual feedback.

### Toast
Notification system for showing success/error messages.

## Hooks

### usePracticeProgress
Manages practice problem progress and scoring.

**Methods**:
- `isSolved(problemId)`: Check if problem is solved
- `getScore(problemId)`: Get score for a problem
- `markSolved(problem)`: Mark problem as solved
- `getLanguageStats(language, allProblems)`: Get statistics for a language
- `getTotalScore(allProblems)`: Get total score across all languages

### useContestProgress
Manages contest problem progress and scoring.

**Methods**:
- `isSolved(contestId, problemId)`: Check if contest problem is solved
- `getContestScore(contest, problems)`: Get contest score statistics
- `markContestProblemSolved(contest, problem)`: Mark contest problem as solved
- `getContestProgress(contestId)`: Get progress for a contest

## Pages

- `/practice` - Main practice hub
- `/contests` - Contests list
- `/contests/[slug]` - Contest detail page

## Navigation

Practice and Contests links are added to the main navigation header under Programming.

## Internal Linking

CTAs are added to:
- C Programming page (`/programming/c-language`)
- C Programming Lab page (`/labs/c-programming`)

These link to `/practice?language=C` to encourage practice.

