import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | CSM Study Zone",
  description:
    "Contact CSM Study Zone for feedback, corrections, suggestions, or collaboration. Reach out via email.",
  alternates: {
    canonical: "https://www.csmstudyzone.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white/70 rounded-xl shadow-md border border-gray-200 p-6 md:p-8 backdrop-blur">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-gray-900">
          Contact Us
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed">
          We welcome feedback, corrections, suggestions, and collaboration from students, educators, and visitors. 
          If you have any questions, concerns, or ideas to share, please don&apos;t hesitate to reach out to us.
        </p>

        <div className="space-y-6">
          {/* Contact Information Card */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Email</p>
                <p className="text-gray-900">
                  <a
                    href="mailto:csmstudyzone@gmail.com"
                    className="text-blue-600 hover:text-blue-800 underline font-medium text-lg"
                  >
                    csmstudyzone@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* What You Can Contact Us About */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">What You Can Reach Out For</h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>
                <strong>Reporting mistakes:</strong> If you find any errors in notes, questions, or code examples, 
                please let us know so we can correct them.
              </li>
              <li>
                <strong>Suggesting new topics:</strong> Have an idea for a new subject, topic, or resource? 
                We&apos;d love to hear from you.
              </li>
              <li>
                <strong>General feedback:</strong> Share your thoughts about the website, its content, or 
                how we can improve the learning experience.
              </li>
              <li>
                <strong>Collaboration:</strong> Interested in contributing content or collaborating? 
                We welcome educational contributions.
              </li>
              <li>
                <strong>Questions:</strong> Have questions about the content or need clarification on any topic? 
                Feel free to ask.
              </li>
            </ul>
          </div>

          {/* Response Time */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> We aim to respond to all emails within a reasonable time frame. 
              Please be patient, especially during busy academic periods.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

