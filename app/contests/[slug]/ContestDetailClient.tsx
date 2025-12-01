'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Contest, getContestStatus, getContestProblems, ContestStatus } from '@/content/contests';
import { useContestProgress } from '@/lib/hooks/useContestProgress';
import { useToast, ToastContainer } from '@/components/Toast';
import ProblemDetails from '@/components/ProblemDetails';
import { PracticeProblem } from '@/content/practiceProblems';

interface ContestDetailClientProps {
  contest: Contest;
}

export default function ContestDetailClient({ contest }: ContestDetailClientProps) {
  const { toasts, showToast, removeToast } = useToast();
  const [selectedProblem, setSelectedProblem] = useState<PracticeProblem | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [currentStatus, setCurrentStatus] = useState<ContestStatus>(getContestStatus(contest));

  const problems = getContestProblems(contest);
  const { isSolved, getContestScore, markContestProblemSolved, getContestProgress } = useContestProgress();
  const contestScore = getContestScore(contest, problems);
  const contestProgress = getContestProgress(contest.id);

  // Countdown timer
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const status = getContestStatus(contest, now);
      setCurrentStatus(status);

      if (status === 'active') {
        const end = new Date(contest.endTime);
        const diff = end.getTime() - now.getTime();
        
        if (diff > 0) {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setTimeRemaining(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
        } else {
          setTimeRemaining('00:00:00');
        }
      } else if (status === 'upcoming') {
        const start = new Date(contest.startTime);
        const diff = start.getTime() - now.getTime();
        
        if (diff > 0) {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setTimeRemaining(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
        }
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [contest]);

  const handleMarkSolved = (problem: PracticeProblem) => {
    if (!isSolved(contest.id, problem.id)) {
      const success = markContestProblemSolved(contest, problem);
      if (success) {
        showToast(`Great! You earned ${problem.baseScore} points for solving '${problem.title}'.`, 'success');
      } else {
        showToast('Contest is not active. You can only earn points during the active period.', 'error');
      }
    }
  };

  const statusColors = {
    active: 'bg-green-100 text-green-800 border-green-200',
    upcoming: 'bg-blue-100 text-blue-800 border-blue-200',
    finished: 'bg-gray-100 text-gray-800 border-gray-200',
  };

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Challenge: 'bg-red-100 text-red-800',
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Get solved problems with timestamps
  const solvedProblems = problems
    .filter(p => isSolved(contest.id, p.id))
    .map(p => ({
      problem: p,
      solvedAt: contestProgress[p.id]?.solvedAt,
    }))
    .sort((a, b) => {
      if (!a.solvedAt || !b.solvedAt) return 0;
      return new Date(a.solvedAt).getTime() - new Date(b.solvedAt).getTime();
    });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Back Link */}
      <Link
        href="/contests"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
      >
        <span className="text-lg">←</span>
        Back to Contests
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              {contest.title}
            </h1>
            <p className="text-lg text-gray-600">{contest.description}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${statusColors[currentStatus]}`}>
            {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-medium">Start:</span> {formatDate(contest.startTime)}
          </div>
          <div>
            <span className="font-medium">End:</span> {formatDate(contest.endTime)}
          </div>
        </div>

        {/* Countdown Timer */}
        {currentStatus === 'active' && timeRemaining && (
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-green-800">Time remaining:</span>
              <span className="text-2xl font-bold text-green-900 font-mono">{timeRemaining}</span>
            </div>
          </div>
        )}

        {currentStatus === 'upcoming' && timeRemaining && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-blue-800">Contest starts in:</span>
              <span className="text-2xl font-bold text-blue-900 font-mono">{timeRemaining}</span>
            </div>
            <p className="text-sm text-blue-700 mt-2">Contest not started yet. You can view problems but cannot earn points.</p>
          </div>
        )}

        {currentStatus === 'finished' && (
          <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700">
              Contest finished on {formatDate(contest.endTime)}. View your performance below.
            </p>
          </div>
        )}
      </div>

      {/* Performance Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Score</p>
            <p className="text-2xl font-bold text-gray-900">
              {contestScore.score} / {contestScore.maxScore}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Problems Solved</p>
            <p className="text-2xl font-bold text-gray-900">
              {contestScore.solvedCount} / {contestScore.totalProblems}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all"
                style={{ width: `${(contestScore.solvedCount / contestScore.totalProblems) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {currentStatus === 'finished' && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700">
              <strong>Contest finished.</strong> Your final score (locally) was {contestScore.score} / {contestScore.maxScore}. 
              Rankings are stored only on your browser. For real leaderboards, we'll add login + cloud storage later.
            </p>
          </div>
        )}

        {solvedProblems.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Solved Problems:</h3>
            <ul className="space-y-1">
              {solvedProblems.map(({ problem, solvedAt }) => (
                <li key={problem.id} className="text-sm text-gray-600">
                  ✓ {problem.title} 
                  {solvedAt && (
                    <span className="ml-2 text-gray-500">
                      (solved at {new Date(solvedAt).toLocaleString('en-IN')})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Rules */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contest Rules</h2>
        <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line">
          {contest.rulesMarkdown}
        </div>
      </div>

      {/* Problems List */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Problems</h2>
        
        {problems.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-600">No problems available for this contest.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {problems.map((problem, index) => {
              const solved = isSolved(contest.id, problem.id);

              return (
                <div
                  key={problem.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-lg font-semibold text-gray-900">
                          Problem {index + 1}: {problem.title}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[problem.difficulty]}`}>
                          {problem.difficulty}
                        </span>
                        <span className="text-sm text-gray-600">{problem.language}</span>
                        {solved && (
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Solved ✓
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{problem.description}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-blue-600">
                          Score: +{problem.baseScore} pts
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {problem.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProblem(problem)}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Open Problem
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Problem Details Modal */}
      {selectedProblem && (
        <ProblemDetails
          problem={selectedProblem}
          isSolved={isSolved(contest.id, selectedProblem.id)}
          onMarkSolved={() => handleMarkSolved(selectedProblem)}
          onClose={() => setSelectedProblem(null)}
          contestTitle={contest.title}
          isContestActive={currentStatus === 'active'}
        />
      )}

      {/* Toast Container */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </main>
  );
}

