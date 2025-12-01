'use client';

import { useState } from 'react';
import { PracticeProblem } from '@/content/practiceProblems';
import CopyToClipboardButton from './CopyToClipboardButton';

interface ProblemDetailsProps {
  problem: PracticeProblem;
  isSolved: boolean;
  onMarkSolved: () => void;
  onClose: () => void;
  contestTitle?: string;
  isContestActive?: boolean;
}

export default function ProblemDetails({
  problem,
  isSolved,
  onMarkSolved,
  onClose,
  contestTitle,
  isContestActive = true,
}: ProblemDetailsProps) {
  const [showHint, setShowHint] = useState(false);

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Challenge: 'bg-red-100 text-red-800',
  };

  // Handle escape key to close
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="problem-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {contestTitle && (
                <div className="text-sm font-medium mb-2 opacity-90">
                  Contest: {contestTitle}
                </div>
              )}
              <h2 id="problem-title" className="text-2xl font-bold mb-2">
                {problem.title}
              </h2>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-medium">{problem.language}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${difficultyColors[problem.difficulty]}`}>
                  {problem.difficulty}
                </span>
                <span className="text-sm font-medium">Score: +{problem.baseScore} pts</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="ml-4 text-white hover:text-gray-200 transition-colors"
              aria-label="Close problem details"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {problem.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Problem Statement */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Statement</h3>
            <p className="text-gray-700 leading-relaxed">{problem.description}</p>
          </section>

          {/* Input Format */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Input Format</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{problem.inputFormat}</p>
          </section>

          {/* Output Format */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Output Format</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{problem.outputFormat}</p>
          </section>

          {/* Sample Input */}
          <section>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">Sample Input</h3>
              <CopyToClipboardButton text={problem.sampleInput} label="Copy" />
            </div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{problem.sampleInput}</code>
            </pre>
          </section>

          {/* Sample Output */}
          <section>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">Sample Output</h3>
              <CopyToClipboardButton text={problem.sampleOutput} label="Copy" />
            </div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{problem.sampleOutput}</code>
            </pre>
          </section>

          {/* Constraints */}
          {problem.constraints && (
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Constraints</h3>
              <p className="text-gray-700 leading-relaxed">{problem.constraints}</p>
            </section>
          )}

          {/* Hint */}
          {problem.hint && (
            <section>
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 mb-2"
              >
                <svg
                  className={`w-5 h-5 transition-transform ${showHint ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {showHint ? 'Hide Hint' : 'Show Hint'}
              </button>
              {showHint && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-gray-700 leading-relaxed">{problem.hint}</p>
                </div>
              )}
            </section>
          )}

          {/* Use Case */}
          <section className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Use case:</strong> {problem.useCase}
            </p>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 rounded-b-2xl flex items-center justify-between flex-wrap gap-4">
          <a
            href={problem.externalCompilerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in Online Compiler
          </a>

          {isContestActive ? (
            <button
              onClick={onMarkSolved}
              disabled={isSolved}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                isSolved
                  ? 'bg-green-100 text-green-800 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isSolved ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Solved ✓
                </>
              ) : (
                'Mark as Solved'
              )}
            </button>
          ) : (
            <div className="text-sm text-gray-600">
              Contest not active. You can view the problem but cannot mark it as solved.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

