import type { Metadata } from "next";
import Link from "next/link";
import { McqCard } from "./McqCard";
import { OutputQuestionCard } from "./OutputQuestionCard";
import { mcqQuestions, outputQuestions, shortAnswerQuestions, programmingQuestions, labQuestions, assignmentQuestions } from "./questionsData";

export const metadata: Metadata = {
  title: "C Language Practice Questions & Assignments | CSM Study Zone",
  description: "Practice C programming with 50 MCQs, short answer questions, long answer questions, lab practice questions, and assignment questions for B.Tech CSM students.",
  keywords: ["C practice questions", "C MCQs", "C assignments", "CSM Study Zone", "C programming questions", "C lab questions", "C exam preparation"],
};

export default function PracticeQuestionsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        C Language Practice Questions & Assignments
      </h1>

      {/* Navigation Links */}
      <div className="mb-8 flex flex-wrap gap-3">
        <Link href="/programming/c-language" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium">
          ← Back to Basics
        </Link>
        <Link href="/programming/c-language/important-programs" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
          Important Programs
        </Link>
        <Link href="/programming/c-language/viva-questions" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors text-sm font-medium">
          Viva Questions
        </Link>
      </div>

      {/* Intro Paragraph */}
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        This page contains Multiple Choice Questions (MCQs), short answer questions, programming-based assignment questions, 
        and lab practice exercises commonly asked in university examinations, lab exams, and programming interviews. 
        Practice these questions to strengthen your C programming fundamentals and problem-solving skills.
      </p>

      {/* Exam Tip Box */}
      <div className="mt-4 rounded-lg border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        💡 <span className="font-semibold">Exam Tip:</span> Try to answer each question yourself before clicking "Show Answer" or "Show Output". 
        This will strengthen your problem-solving skills and exam speed.
      </div>

      {/* Multiple Choice Questions */}
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Multiple Choice Questions (MCQs)</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          These MCQs help you revise basic C syntax, operators, data types, arrays, strings, functions, pointers, and fundamental concepts.
        </p>
        <div className="mt-4 space-y-4">
          {mcqQuestions.map(q => <McqCard key={q.id} q={q} />)}
        </div>
      </section>

      {/* Short Answer Questions */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Short Answer Questions</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Answer these questions in 2-3 lines. These questions test your understanding of C programming concepts and terminology.
        </p>
        <div className="mt-4 space-y-4">
          {shortAnswerQuestions.map(q => (
            <section key={q.id} className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 space-y-3">
              <p className="font-medium text-slate-900">
                {q.id}. {q.question}
              </p>
              <div className="text-sm text-slate-700 leading-relaxed">
                {q.answer}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Output-Based Questions */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Output-Based Questions</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Predict the output of the following C programs before revealing the answer. These questions test your understanding of code execution flow.
        </p>
        <div className="mt-4 space-y-4">
          {outputQuestions.map(q => <OutputQuestionCard key={q.id} q={q} />)}
        </div>
      </section>

      {/* Programming / Long Answer Questions */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Programming / Long Answer Questions</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Write complete C programs for these questions. Practice writing code for each question and test it thoroughly.
        </p>
        <div className="mt-4 space-y-3">
          {programmingQuestions.map(q => (
            <section key={q.id} className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5">
              <p className="font-medium text-slate-900">
                {q.id}. {q.question}
              </p>
            </section>
          ))}
        </div>
      </section>

      {/* Lab Practice Questions */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Lab Practice Questions</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Organized by lab sessions, these questions cover basic programs to advanced concepts progressively.
        </p>
        <div className="mt-4 space-y-6">
          {labQuestions.map((lab, labIndex) => (
            <div key={labIndex} className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{lab.title}</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                {lab.questions.map((question, qIndex) => (
                  <li key={qIndex} className="ml-4">{question}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Assignment Questions */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Assignment Questions for Students</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Weekly assignments organized by topics to help you practice systematically throughout the semester.
        </p>
        <div className="mt-4 space-y-6">
          {assignmentQuestions.map((assignment, aIndex) => (
            <div key={aIndex} className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{assignment.title}</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                {assignment.questions.map((question, qIndex) => (
                  <li key={qIndex} className="ml-4">{question}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Study Tip */}
      <div className="not-prose mt-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600">
        <p className="text-orange-800 font-semibold mb-2">📝 Study Tip</p>
        <p className="text-orange-700 leading-relaxed">
          Practice these questions regularly. Start with MCQs and short answers, then move to programming questions. 
          Write code for each programming question and test it thoroughly. Understanding concepts is more important than memorizing.
        </p>
      </div>
    </main>
  );
}
