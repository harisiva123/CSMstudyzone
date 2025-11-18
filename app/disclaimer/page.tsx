import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | CSM Study Zone",
  description:
    "Disclaimer for CSM Study Zone describing academic use, external links, advertisements and limitation of liability.",
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-6">
        Disclaimer
      </h1>

      <div className="space-y-8 text-slate-800">
        {/* Intro */}
        <section className="space-y-3">
          <p>
            The information provided on{" "}
            <span className="font-semibold">CSM Study Zone</span> is for{" "}
            <span className="font-semibold">educational purposes only</span>. We
            make no guarantees regarding:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Accuracy</li>
            <li>Completeness</li>
            <li>Suitability for any syllabus or examination</li>
          </ul>
          <p>
            Any reliance you place on the content available on this website is{" "}
            <span className="font-semibold">strictly at your own risk</span>.
          </p>
        </section>

        {/* Academic Use */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Academic Use</h2>
          <p>
            Notes, lab materials, programming examples and project ideas on this
            site are intended to support learning and revision. They:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="font-semibold">do not</span> replace faculty
              instructions, textbooks or official university materials
            </li>
            <li>
              may not exactly match the syllabus of every university or
              regulation
            </li>
          </ul>
          <p>
            Students are responsible for verifying all content with their own
            syllabus and for avoiding plagiarism when using project ideas or
            code snippets.
          </p>
        </section>

        {/* External Links */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">External Links</h2>
          <p>
            CSM Study Zone may contain links to external websites, tools or
            resources such as documentation, dataset repositories or YouTube
            videos.
          </p>
          <p>
            We do not have control over the content or availability of these
            external sites and we are not responsible for their policies or
            practices. Inclusion of any link does not imply a recommendation or
            endorsement of the views expressed within them.
          </p>
        </section>

        {/* Advertisements */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Advertisements</h2>
          <p>
            We may display advertisements or sponsored content on this website
            (for example through Google AdSense or similar services).
          </p>
          <p>
            The appearance of adverts does not constitute an endorsement or
            recommendation by CSM Study Zone of the advertised products,
            services or websites. Any dealings you have with advertisers are
            solely between you and the advertiser.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          <p>
            In no event shall CSM Study Zone, its owners or contributors be
            liable for any loss or damage including without limitation:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Loss of marks or academic performance</li>
            <li>Loss of data or interruption of study</li>
            <li>
              Any indirect or consequential loss or damage arising out of, or in
              connection with, the use of this website
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>
            If you have any questions about this Disclaimer, you can contact us
            at:
          </p>
          <p>
            Email:{" "}
            <span className="font-medium">csmstudyzone@gmail.com</span>
          </p>
        </section>
      </div>
    </main>
  );
}
