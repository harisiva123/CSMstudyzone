import { notFound } from 'next/navigation';
import { getContestBySlug } from '@/content/contests';
import ContestDetailClient from './ContestDetailClient';

type Props = {
  params: { slug: string };
};

export default function ContestDetailPage({ params }: Props) {
  const contest = getContestBySlug(params.slug);

  if (!contest) {
    notFound();
  }

  return <ContestDetailClient contest={contest} />;
}

