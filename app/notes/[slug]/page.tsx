import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getNoteBySlug, notes } from "@/content/notes";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const note = getNoteBySlug(params.slug);
  
  if (!note) {
    return {};
  }

  const canonicalUrl = `https://www.csmstudyzone.in/notes/${params.slug}`;

  return {
    title: note.title,
    description: note.summary,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function NoteDetailPage({ params }: Props) {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <Link
        href="/notes"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
      >
        <span className="text-lg">←</span>
        Back to Notes
      </Link>

      <p className="text-sm text-gray-500 mb-2">
        {note.category}
        {note.semester && ` • Semester ${note.semester}`}
      </p>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800">
        {note.title}
      </h1>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{note.summary}</p>

      <div className="border-t border-gray-200 pt-8">
        <article
          className="prose prose-slate max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:my-2 prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: note.content }}
        />
      </div>
    </main>
  );
}

