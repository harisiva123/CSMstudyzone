/**
 * usePracticeProgress Hook
 * 
 * Manages practice problem progress and scoring stored in browser localStorage.
 * 
 * What it does:
 * - Tracks which problems have been solved
 * - Stores scores earned for each problem
 * - Provides statistics by language
 * - Calculates total score across all languages
 * 
 * How to add new problems:
 * - Problems are defined in content/practiceProblems.ts
 * - This hook automatically picks them up
 * 
 * How to reset progress:
 * - Call: localStorage.removeItem('csmStudyZonePracticeProgress')
 * - Or use browser DevTools to clear localStorage
 * 
 * Future extension:
 * - Replace localStorage with backend API calls (Supabase/Firebase)
 * - Add user authentication
 * - Sync progress across devices
 * - Add cloud leaderboards
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { PracticeProblem, Language } from '@/content/practiceProblems';

const STORAGE_KEY = 'csmStudyZonePracticeProgress';

export interface ProblemProgress {
  solved: boolean;
  solvedAt?: string; // ISO date
  scoreEarned: number;
}

export interface PracticeProgress {
  [problemId: string]: ProblemProgress;
}

export interface LanguageStats {
  solvedCount: number;
  totalProblems: number;
  score: number;
  maxScore: number;
}

export function usePracticeProgress() {
  const [progress, setProgress] = useState<PracticeProgress>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as PracticeProgress;
        setProgress(parsed);
      }
    } catch (error) {
      console.error('Error loading practice progress:', error);
      setProgress({});
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving practice progress:', error);
    }
  }, [progress]);

  const isSolved = useCallback((problemId: string): boolean => {
    return progress[problemId]?.solved === true;
  }, [progress]);

  const getScore = useCallback((problemId: string): number => {
    return progress[problemId]?.scoreEarned || 0;
  }, [progress]);

  const markSolved = useCallback((problem: PracticeProblem) => {
    setProgress(prev => {
      // If already solved, don't change anything
      if (prev[problem.id]?.solved) {
        return prev;
      }

      // Mark as solved and award points
      return {
        ...prev,
        [problem.id]: {
          solved: true,
          solvedAt: new Date().toISOString(),
          scoreEarned: problem.baseScore,
        },
      };
    });
  }, []);

  const getLanguageStats = useCallback((language: Language, allProblems: PracticeProblem[]): LanguageStats => {
    const languageProblems = allProblems.filter(p => p.language === language);
    const totalProblems = languageProblems.length;
    
    let solvedCount = 0;
    let score = 0;
    let maxScore = 0;

    languageProblems.forEach(problem => {
      maxScore += problem.baseScore;
      if (isSolved(problem.id)) {
        solvedCount++;
        score += getScore(problem.id);
      }
    });

    return {
      solvedCount,
      totalProblems,
      score,
      maxScore,
    };
  }, [isSolved, getScore]);

  const getTotalScore = useCallback((allProblems: PracticeProblem[]): number => {
    return allProblems.reduce((total, problem) => {
      return total + getScore(problem.id);
    }, 0);
  }, [getScore]);

  return {
    progress,
    isSolved,
    getScore,
    markSolved,
    getLanguageStats,
    getTotalScore,
  };
}

