/**
 * useContestProgress Hook
 * 
 * Manages contest problem progress and scoring stored in browser localStorage.
 * 
 * What it does:
 * - Tracks which contest problems have been solved
 * - Stores scores earned for each contest problem
 * - Only allows scoring during active contest periods
 * - Provides contest-specific statistics
 * 
 * How to add new contests:
 * - Contests are defined in content/contests.ts
 * - This hook automatically picks them up
 * 
 * How to reset progress:
 * - Call: localStorage.removeItem('csmStudyZoneContestProgress')
 * - Or use browser DevTools to clear localStorage
 * 
 * Future extension:
 * - Replace localStorage with backend API calls (Supabase/Firebase)
 * - Add user authentication
 * - Sync progress across devices
 * - Add real-time leaderboards
 * - Add contest rankings and prizes
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { Contest, getContestStatus } from '@/content/contests';
import { PracticeProblem } from '@/content/practiceProblems';

const STORAGE_KEY = 'csmStudyZoneContestProgress';

export interface ContestProblemProgress {
  solved: boolean;
  solvedAt?: string; // ISO date
  scoreEarned: number;
}

export interface SingleContestProgress {
  [problemId: string]: ContestProblemProgress;
}

export interface ContestProgress {
  [contestId: string]: SingleContestProgress;
}

export interface ContestScore {
  score: number;
  maxScore: number;
  solvedCount: number;
  totalProblems: number;
}

export function useContestProgress() {
  const [progress, setProgress] = useState<ContestProgress>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ContestProgress;
        setProgress(parsed);
      }
    } catch (error) {
      console.error('Error loading contest progress:', error);
      setProgress({});
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving contest progress:', error);
    }
  }, [progress]);

  const getContestProgress = useCallback((contestId: string): SingleContestProgress => {
    return progress[contestId] || {};
  }, [progress]);

  const isSolved = useCallback((contestId: string, problemId: string): boolean => {
    return progress[contestId]?.[problemId]?.solved === true;
  }, [progress]);

  const getContestScore = useCallback((contest: Contest, problems: PracticeProblem[]): ContestScore => {
    const contestProgress = getContestProgress(contest.id);
    const totalProblems = problems.length;
    
    let solvedCount = 0;
    let score = 0;
    let maxScore = 0;

    problems.forEach(problem => {
      maxScore += problem.baseScore;
      if (isSolved(contest.id, problem.id)) {
        solvedCount++;
        score += contestProgress[problem.id]?.scoreEarned || 0;
      }
    });

    return {
      score,
      maxScore,
      solvedCount,
      totalProblems,
    };
  }, [getContestProgress, isSolved]);

  const markContestProblemSolved = useCallback((contest: Contest, problem: PracticeProblem) => {
    // Only allow scoring if contest is currently active
    const status = getContestStatus(contest);
    if (status !== 'active') {
      console.warn(`Contest ${contest.id} is not active. Status: ${status}`);
      return false;
    }

    setProgress(prev => {
      const contestProgress = prev[contest.id] || {};
      
      // If already solved, don't change anything
      if (contestProgress[problem.id]?.solved) {
        return prev;
      }

      // Mark as solved and award points
      return {
        ...prev,
        [contest.id]: {
          ...contestProgress,
          [problem.id]: {
            solved: true,
            solvedAt: new Date().toISOString(),
            scoreEarned: problem.baseScore,
          },
        },
      };
    });

    return true;
  }, []);

  return {
    getContestProgress,
    isSolved,
    getContestScore,
    markContestProblemSolved,
  };
}

