import type { Metadata } from "next";
import { getLastUpdatedDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms & Conditions | CSM Study Zone",
  description:
    "Terms and Conditions for using CSM Study Zone - Educational platform for CSM, CSE & AIML students.",
  alternates: {
    canonical: "https://www.csmstudyzone.in/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = getLastUpdatedDate();
  
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white/70 rounded-xl shadow-md border border-gray-200 p-6 md:p-8 backdrop-blur">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-gray-900">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: {lastUpdated}</p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          These Terms & Conditions govern your use of CSM Study Zone (accessible at{" "}
          <a
            href="https://csmstudyzone.in"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            https://csmstudyzone.in
          </a>
          ). By using this website, you agree to these terms.
        </p>

        <div className="space-y-8 text-gray-800">
          {/* 1. Acceptance of Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using CSM Study Zone, you accept and agree to be bound by these Terms & Conditions. 
              If you do not agree with any part of these terms, please do not use this website.
            </p>
          </section>

          {/* 2. Use of the Website */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              2. Use of the Website
            </h2>
            <p className="text-gray-700 leading-relaxed">
              CSM Study Zone is an educational platform designed to provide study materials, notes, lab manuals, 
              and programming resources for B.Tech CSM, CSE, and AIML students.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>You may use the website for personal, non-commercial educational purposes.</li>
              <li>You may not reproduce, distribute, or sell the content without explicit permission.</li>
              <li>You may not use automated systems to scrape or download content in bulk.</li>
              <li>You must not use the website in any way that could damage, disable, or impair the site.</li>
            </ul>
          </section>

          {/* 3. Educational Content Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              3. Educational Content Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The content provided on CSM Study Zone is for educational purposes only. While we strive to provide 
              accurate and up-to-date information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>
                <strong>Content may not always match specific university syllabi.</strong> Different universities 
                may have varying curricula and exam patterns.
              </li>
              <li>
                <strong>You must verify information with your official syllabus and exam pattern.</strong> Always 
                refer to your institution&apos;s official materials for authoritative information.
              </li>
              <li>
                The content is provided &quot;as is&quot; without warranties of any kind, express or implied.
              </li>
              <li>
                We do not guarantee that the content will be error-free or suitable for your specific academic requirements.
              </li>
            </ul>
          </section>

          {/* 4. User Responsibilities */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              4. User Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As a user of CSM Study Zone, you are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>Using the content appropriately and in accordance with these terms.</li>
              <li>Verifying the accuracy and relevance of information for your specific needs.</li>
              <li>Respecting intellectual property rights and not infringing on copyrights.</li>
              <li>Not using the website for any illegal or unauthorized purpose.</li>
              <li>Maintaining the confidentiality of any account credentials (if applicable in the future).</li>
            </ul>
          </section>

          {/* 5. Third-Party Links & Ads */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              5. Third-Party Links & Advertising
            </h2>
            <p className="text-gray-700 leading-relaxed">
              CSM Study Zone may contain links to external websites and may display third-party advertisements 
              (such as Google AdSense).
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>
                We are not responsible for the content, privacy practices, or policies of third-party websites.
              </li>
              <li>
                <strong>CSM Study Zone does not endorse any advertised products or services.</strong> The presence 
                of advertisements does not imply our recommendation or affiliation.
              </li>
              <li>
                Third-party advertisers may use cookies and tracking technologies. Please review their privacy 
                policies separately.
              </li>
              <li>
                You can opt out of personalized advertising through your browser settings or Google&apos;s ad settings.
              </li>
            </ul>
          </section>

          {/* 6. Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content on CSM Study Zone, including but not limited to text, graphics, logos, and software, 
              is the property of CSM Study Zone or its content providers and is protected by copyright and other 
              intellectual property laws.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>
                You may use the content for personal, non-commercial educational purposes only.
              </li>
              <li>
                You may not modify, reproduce, distribute, or create derivative works without explicit written permission.
              </li>
              <li>
                Commercial use of the content requires prior written consent from CSM Study Zone.
              </li>
            </ul>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, CSM Study Zone and its operators shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>
                Any errors or omissions in the content provided on the website.
              </li>
              <li>
                Any loss or damage arising from your use of or reliance on the content.
              </li>
              <li>
                Any interruption or cessation of service.
              </li>
              <li>
                Any indirect, incidental, special, or consequential damages.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              The website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties 
              of any kind, either express or implied.
            </p>
          </section>

          {/* 8. Changes to These Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              8. Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms & Conditions at any time. Any changes will be posted 
              on this page with an updated &quot;Last updated&quot; date. Your continued use of the website after 
              such changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          {/* 9. Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              9. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms & Conditions, you can contact us at:{" "}
              <a
                href="mailto:csmstudyzone@gmail.com"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                csmstudyzone@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

