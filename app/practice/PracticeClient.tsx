'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  getAllProblems, 
  getProblemsByLanguage, 
  Language, 
  Difficulty, 
  PracticeProblem 
} from '@/content/practiceProblems';
import { usePracticeProgress } from '@/lib/hooks/usePracticeProgress';
import { useToast, ToastContainer } from '@/components/Toast';
import ProblemDetails from '@/components/ProblemDetails';

const languages: Language[] = ['C', 'C++', 'Java', 'Python'];
const difficulties: (Difficulty | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Challenge'];

export default function PracticeClient() {
  const searchParams = useSearchParams();
  const { toasts, showToast, removeToast } = useToast();
  
  // Get initial language from URL query or default to 'C'
  const initialLanguage = (searchParams.get('language') as Language) || 'C';
  const initialDifficulty = (searchParams.get('difficulty') as Difficulty | 'All') || 'All';

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(initialLanguage);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>(initialDifficulty);
  const [selectedProblem, setSelectedProblem] = useState<PracticeProblem | null>(null);

  const allProblems = getAllProblems();
  const { isSolved, getScore, markSolved, getLanguageStats, getTotalScore } = usePracticeProgress();

  // Filter problems based on selected language and difficulty
  const filteredProblems = useMemo(() => {
    let problems = getProblemsByLanguage(selectedLanguage);
    
    if (selectedDifficulty !== 'All') {
      problems = problems.filter(p => p.difficulty === selectedDifficulty);
    }
    
    return problems;
  }, [selectedLanguage, selectedDifficulty]);

  // Get stats for selected language
  const languageStats = getLanguageStats(selectedLanguage, allProblems);
  const totalScore = getTotalScore(allProblems);

  const handleMarkSolved = (problem: PracticeProblem) => {
    if (!isSolved(problem.id)) {
      markSolved(problem);
      showToast(`Nice! You earned ${problem.baseScore} points for solving '${problem.title}'.`, 'success');
    }
  };

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 border-green-200',
    Intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Challenge: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Practice Programming – C, C++, Java & Python
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Solve practice problems designed for lab exams, university practicals, and placement preparation. 
          Track your progress, earn points, and improve your programming skills across multiple languages.
        </p>
      </div>

      {/* Stats Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Problems Solved ({selectedLanguage})</p>
            <p className="text-2xl font-bold text-gray-900">
              {languageStats.solvedCount} / {languageStats.totalProblems}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Score ({selectedLanguage})</p>
            <p className="text-2xl font-bold text-gray-900">
              {languageStats.score} / {languageStats.maxScore}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Practice Score</p>
            <p className="text-2xl font-bold text-gray-900">{totalScore}</p>
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">Select Language</h2>
        <div className="flex flex-wrap gap-2">
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedLanguage === lang
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">Filter by Difficulty</h2>
        <div className="flex flex-wrap gap-2">
          {difficulties.map(diff => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedDifficulty === diff
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Problems Grid */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredProblems.length} Problem{filteredProblems.length !== 1 ? 's' : ''} Found
          </h2>
        </div>

        {filteredProblems.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-600">No problems found for the selected filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProblems.map(problem => {
              const solved = isSolved(problem.id);
              const score = getScore(problem.id);

              return (
                <div
                  key={problem.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[problem.difficulty]}`}>
                      {problem.difficulty}
                    </span>
                    {solved && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        Solved ✓
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{problem.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {problem.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600">
                      +{problem.baseScore} pts
                    </span>
                    <button
                      onClick={() => setSelectedProblem(problem)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                    >
                      View Problem
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
          isSolved={isSolved(selectedProblem.id)}
          onMarkSolved={() => handleMarkSolved(selectedProblem)}
          onClose={() => setSelectedProblem(null)}
          isContestActive={true}
        />
      )}

      {/* Toast Container */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </main>
  );
}

