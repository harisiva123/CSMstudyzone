'use client';

import Link from 'next/link';
import { getAllContests, getContestStatus, ContestStatus } from '@/content/contests';

export default function ContestsClient() {
  const allContests = getAllContests();
  
  const activeContests = allContests.filter(c => getContestStatus(c) === 'active');
  const upcomingContests = allContests.filter(c => getContestStatus(c) === 'upcoming');
  const finishedContests = allContests.filter(c => getContestStatus(c) === 'finished');

  const statusColors = {
    active: 'bg-green-100 text-green-800 border-green-200',
    upcoming: 'bg-blue-100 text-blue-800 border-blue-200',
    finished: 'bg-gray-100 text-gray-800 border-gray-200',
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const renderContestCard = (contest: typeof allContests[0], status: ContestStatus) => {
    const startDate = formatDate(contest.startTime);
    const endDate = formatDate(contest.endTime);

    return (
      <div
        key={contest.id}
        className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow"
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{contest.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>

        <p className="text-gray-600 mb-4">{contest.description}</p>

        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div>
            <span className="font-medium">Start:</span> {startDate}
          </div>
          <div>
            <span className="font-medium">End:</span> {endDate}
          </div>
          <div>
            <span className="font-medium">Problems:</span> {contest.problemIds.length}
          </div>
          <div>
            <span className="font-medium">Max Score:</span> {contest.maxScore} points
          </div>
        </div>

        <Link
          href={`/contests/${contest.slug}`}
          className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
            status === 'active'
              ? 'bg-green-600 text-white hover:bg-green-700'
              : status === 'upcoming'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          {status === 'active' && 'Enter Contest'}
          {status === 'upcoming' && 'View Details'}
          {status === 'finished' && 'View Summary'}
        </Link>
      </div>
    );
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Weekly Coding Contests
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Participate in time-bound coding challenges with curated problems. Solve problems, earn points, 
          and track your performance. Contests run weekly with different themes and difficulty levels.
        </p>
      </div>

      {/* How it works */}
      <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6 mb-8 border border-orange-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Contests run for a limited time (usually 7 days)</li>
          <li>• Solve problems within the contest period to earn points</li>
          <li>• Points are awarded only when you mark problems as solved during active contest</li>
          <li>• Track your progress and see your performance summary</li>
          <li>• Progress is stored locally in your browser (cloud leaderboards coming soon!)</li>
        </ul>
      </div>

      {/* Active Contests */}
      {activeContests.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Contest{activeContests.length !== 1 ? 's' : ''}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeContests.map(contest => renderContestCard(contest, 'active'))}
          </div>
        </section>
      )}

      {/* Upcoming Contests */}
      {upcomingContests.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Contest{upcomingContests.length !== 1 ? 's' : ''}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingContests.map(contest => renderContestCard(contest, 'upcoming'))}
          </div>
        </section>
      )}

      {/* Finished Contests */}
      {finishedContests.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Finished Contest{finishedContests.length !== 1 ? 's' : ''}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {finishedContests.map(contest => renderContestCard(contest, 'finished'))}
          </div>
        </section>
      )}

      {allContests.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-600">No contests available at the moment. Check back soon!</p>
        </div>
      )}
    </main>
  );
}

