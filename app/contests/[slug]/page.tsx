import { notFound } from 'next/navigation';
import { getContestBySlug, getAllContests } from '@/content/contests';
import ContestDetailClient from './ContestDetailClient';

type Props = {
  params: { slug: string };
};

// Generate static params for all contests so they're included in sitemap
export function generateStaticParams() {
  const contests = getAllContests();
  return contests.map((contest) => ({
    slug: contest.slug,
  }));
}

export default function ContestDetailPage({ params }: Props) {
  const contest = getContestBySlug(params.slug);

  if (!contest) {
    notFound();
  }

  return <ContestDetailClient contest={contest} />;
}

