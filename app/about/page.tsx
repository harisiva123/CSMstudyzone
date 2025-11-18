import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CSM Study Zone",
  description:
    "Learn about the vision and purpose of CSM Study Zone, an educational platform for CSM, CSE and AIML students.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-6">
        About CSM Study Zone
      </h1>

      <div className="space-y-8 text-slate-800">
        <section className="space-y-3">
          <p>
            CSM Study Zone is an independent educational platform created to
            support B.Tech students of CSM, CSE and AIML streams. Our goal is to
            make learning programming, core subjects and lab work simpler, more
            structured and easily accessible from anywhere.
          </p>
          <p>
            The platform is designed as a one-stop resource for students and
            faculty who want quick access to clear explanations, lab support and
            project guidance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What We Provide</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Unit-wise notes for theory subjects</li>
            <li>Lab manuals and experiment outlines</li>
            <li>
              Programming resources in C, Python, Java and Data Structures
            </li>
            <li>Mini and major project ideas with implementation guidance</li>
            <li>Question banks and exam-focused materials</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p>
            Our mission is to bridge the gap between classroom teaching and
            self-learning. We want every student to have:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Clear, concise notes in one place</li>
            <li>Practical examples and lab support</li>
            <li>Guidance on projects and career skills</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Who We Are</h2>
          <p>
            CSM Study Zone is built by faculty and technology enthusiasts who
            are passionate about teaching, modern computing and AI tools. The
            content is continuously improved based on classroom experience and
            student feedback.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            How Students Can Use This Platform
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Revise concepts using unit-wise notes</li>
            <li>Prepare lab records and viva using lab experiment outlines</li>
            <li>Practice coding from the programming section</li>
            <li>
              Explore mini and major project ideas aligned with current trends
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>
            For suggestions, corrections or collaboration, write to us at{" "}
            <span className="font-medium">csmstudyzone@gmail.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
