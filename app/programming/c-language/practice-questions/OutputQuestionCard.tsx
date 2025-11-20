"use client";

import { useState } from "react";
import type { OutputQuestion } from "./questionsData";

export function OutputQuestionCard({ q }: { q: OutputQuestion }) {
  const [show, setShow] = useState(false);

  return (
    <section className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
      <p className="font-medium text-slate-900">{q.id}. {q.question}</p>

      <pre className="bg-slate-900 text-slate-50 rounded-lg p-3 text-sm overflow-x-auto leading-relaxed">
        <code>{q.codeSnippet}</code>
      </pre>

      <button
        onClick={() => setShow(!show)}
        className="inline-flex items-center rounded-full bg-fuchsia-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-fuchsia-700 transition-colors"
      >
        {show ? "Hide Output" : "Show Output"}
      </button>

      {show && (
        <div className="mt-2 text-sm text-sky-900 bg-sky-50 border border-sky-100 rounded-lg px-3 py-2 space-y-1">
          <p><span className="font-semibold">Program Output:</span></p>
          <pre className="bg-sky-900 text-sky-50 rounded-md px-3 py-2 text-xs overflow-x-auto">
            <code>{q.correctOutput}</code>
          </pre>
          {q.explanation && (
            <p className="text-xs text-sky-900 mt-1 leading-relaxed">{q.explanation}</p>
          )}
        </div>
      )}
    </section>
  );
}

