import { notFound } from "next/navigation";
import Link from "next/link";
import { getLabBySlug, labs } from "@/content/labs";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return labs.map((lab) => ({ slug: lab.slug }));
}

export default function LabDetailPage({ params }: Props) {
  const lab = getLabBySlug(params.slug);

  if (!lab) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <Link
        href="/labs"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 mb-6 transition-colors"
      >
        <span className="text-lg">←</span>
        Back to Labs
      </Link>

      <p className="text-sm text-gray-500 mb-2">{lab.category}</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800">
        {lab.title}
      </h1>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{lab.summary}</p>

      <div className="border-t border-gray-200 pt-8">
        <article
          className="prose prose-slate max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:my-2 prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
          dangerouslySetInnerHTML={{ __html: lab.content }}
        />
      </div>
    </main>
  );
}

