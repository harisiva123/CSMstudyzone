import type { Metadata } from "next";
import { getLastUpdatedDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy | CSM Study Zone",
  description:
    "Privacy Policy for CSM Study Zone explaining how we collect, use and protect information.",
  alternates: {
    canonical: "https://www.csmstudyzone.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = getLastUpdatedDate();
  
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white/70 rounded-xl shadow-md border border-gray-200 p-6 md:p-8 backdrop-blur">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-gray-900">
          Privacy Policy for CSM Study Zone
        </h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: {lastUpdated}</p>

        <div className="space-y-6 text-gray-800 prose prose-indigo max-w-none">
          {/* Introduction */}
          <section className="space-y-4">
            <p>
              Welcome to CSM Study Zone (accessible at{" "}
              <a
                href="https://csmstudyzone.in"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://csmstudyzone.in
              </a>
              ). Your privacy is important to us. This Privacy Policy explains what
              information we collect, how we use it, and how we keep it safe.
            </p>
            <p>
              By using this website, you agree to the practices described here.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              1. Information We Collect
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  a) Information you choose to send us
                </h3>
                <p>
                  We do not use any registration, login, comment, or subscription forms
                  on this website.
                </p>
                <p>
                  The only way you may share personal information with us is if you
                  contact us by email (for example, for feedback or queries). In that
                  case we may receive:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Your email address</li>
                  <li>Your name (if included in your email)</li>
                  <li>Any other details you write in the message</li>
                </ul>
                <p className="mt-2">
                  We use this information only to reply to you and do not sell or
                  share it with third parties for marketing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  b) Information collected automatically
                </h3>
                <p>
                  When you visit CSM Study Zone, some technical information is
                  collected automatically, such as:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring/exit pages</li>
                </ul>
                <p className="mt-2">
                  This is done mainly through Google Analytics and similar tools to
                  understand how visitors use the website and to improve our content
                  and performance.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Cookies and Tracking Technologies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              2. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar technologies for:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Analytics</strong> – to understand traffic and usage patterns
                (via Google Analytics).
              </li>
              <li>
                <strong>Advertising</strong> – when Google AdSense is enabled, cookies
                may be used to show relevant ads.
              </li>
            </ul>
            <p>
              You can control or disable cookies in your browser settings. Note that
              some features may not work properly if cookies are disabled.
            </p>
          </section>

          {/* 3. Google Analytics */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              3. Google Analytics
            </h2>
            <p>
              We use Google Analytics to measure traffic and usage. Google Analytics
              may collect information such as:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Pages visited</li>
              <li>Time spent on each page</li>
              <li>Type of device and browser</li>
            </ul>
            <p>
              This information is aggregated and does not identify you personally.
            </p>
            <p>
              You can learn more and opt out here:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
            </p>
          </section>

          {/* 4. Google AdSense and Advertising Partners */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              4. Google AdSense and Advertising Partners
            </h2>
            <p>We may use Google AdSense to display advertisements on this site.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Third-party vendors, including Google, use cookies to serve ads based
                on your visits to this and other websites.
              </li>
              <li>
                Google&apos;s use of advertising cookies enables it and its partners to
                serve ads based on your browsing.
              </li>
            </ul>
            <p>
              You can opt out of personalized advertising by visiting:{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://www.google.com/settings/ads
              </a>
            </p>
          </section>

          {/* 5. Third-Party Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              5. Third-Party Links
            </h2>
            <p>
              CSM Study Zone may contain links to external websites (for example,
              official documentation or reference sites). We are not responsible for
              the privacy practices or content of those third-party sites.
            </p>
            <p>Please review their privacy policies separately.</p>
          </section>

          {/* 6. Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              6. Data Security
            </h2>
            <p>
              We use reasonable technical and organizational measures to protect the
              information we collect. However, no method of transmission over the
              internet is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          {/* 7. Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              7. Children&apos;s Privacy
            </h2>
            <p>
              CSM Study Zone is intended for students and learners above school level.
              We do not knowingly collect personal information from children under 13.
              If you believe a child has provided us with personal information, please
              contact us so we can remove it.
            </p>
          </section>

          {/* 8. Changes to This Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page with a new &quot;Last updated&quot; date.
            </p>
          </section>

          {/* 9. Contact Us */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, you can contact us
              at:
            </p>
            <p>
              Email:{" "}
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
