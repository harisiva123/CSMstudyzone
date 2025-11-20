"use client";

import { useState } from "react";
import type { McqQuestion } from "./questionsData";

export function McqCard({ q }: { q: McqQuestion }) {
  const [show, setShow] = useState(false);

  return (
    <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
      <p className="font-medium text-slate-900">{q.id}. {q.question}</p>

      {q.codeSnippet && (
        <pre className="bg-slate-900 text-slate-50 rounded-lg p-3 text-sm overflow-x-auto">
          <code>{q.codeSnippet}</code>
        </pre>
      )}

      <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
        {q.options.map((opt, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="font-semibold">
              {String.fromCharCode(65 + index)}.
            </span>
            <span>{opt}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setShow(!show)}
        className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
      >
        {show ? "Hide Answer" : "Show Answer"}
      </button>

      {show && (
        <div className="mt-2 text-sm text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2 space-y-1">
          <p><span className="font-semibold">Correct Answer:</span> {q.answer}</p>
          {q.explanation && (
            <p className="text-xs text-emerald-900 leading-relaxed">{q.explanation}</p>
          )}
        </div>
      )}
    </section>
  );
}

