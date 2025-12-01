import type { Metadata } from 'next';
import ContestsClient from './ContestsClient';

export const metadata: Metadata = {
  title: 'Weekly Coding Contests – C, C++, Java, Python | CSM Study Zone',
  description: 'Join weekly coding contests on C, C++, Java, and Python. Solve curated problems and track your score on CSM Study Zone.',
  alternates: {
    canonical: 'https://www.csmstudyzone.in/contests',
  },
};

export default function ContestsPage() {
  return <ContestsClient />;
}

