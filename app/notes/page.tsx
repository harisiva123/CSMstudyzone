import Link from "next/link";
import { notes } from "@/content/notes";

export default function NotesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Notes
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Browse unit-wise notes and helpful summaries for AI, ML, C programming
        and more. Click on a topic to view full content.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className="group block rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
              {note.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              {note.category}
              {note.semester && ` • Semester ${note.semester}`}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{note.summary}</p>
            <div className="mt-4 text-blue-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1">
              Read more
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

