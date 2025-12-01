import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Discover mini and major project ideas in AI, ML, CVIP and full-stack development tailored for CSM, CSE and AIML students.",
  alternates: {
    canonical: "https://www.csmstudyzone.in/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
        Projects
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Discover mini and major project ideas in AI, ML, CVIP and full-stack
        development tailored for CSM, CSE and AIML students.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              {project.domain} • {project.level}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.summary}
            </p>
            <div className="mt-4 text-purple-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1">
              View Project
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

