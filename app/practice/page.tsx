import type { Metadata } from 'next';
import { Suspense } from 'react';
import PracticeClient from './PracticeClient';

export const metadata: Metadata = {
  title: 'Programming Practice – C, C++, Java, Python | CSM Study Zone',
  description: 'Solve C, C++, Java, and Python practice problems with lab-style questions, sample I/O, hints, and scoring on CSM Study Zone.',
  alternates: {
    canonical: 'https://www.csmstudyzone.in/practice',
  },
};

function PracticeLoading() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      </div>
    </main>
  );
}

export default function PracticePage() {
  return (
    <Suspense fallback={<PracticeLoading />}>
      <PracticeClient />
    </Suspense>
  );
}

