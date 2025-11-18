import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CSM Study Zone",
  description:
    "Privacy Policy for CSM Study Zone explaining how we collect, use and protect information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: January 2025</p>

      <div className="space-y-8 text-slate-800">
        {/* Intro */}
        <section className="space-y-3">
          <p>
            Welcome to <span className="font-semibold">CSM Study Zone</span>
            {" "}(&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). This Privacy Policy explains
            how we collect, use and safeguard information when you visit{" "}
            <span className="font-mono text-sm">https://csmstudyzone.in</span>.
          </p>
          <p>
            By using this website, you agree to the practices described in this
            policy. If you do not agree, please discontinue use of the site.
          </p>
        </section>

        {/* 1. Information We Collect */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            1. Information We Collect
          </h2>
          <p>
            We do not require visitors to create an account to access study
            materials. However, some basic technical information may be
            collected automatically when you use the site, such as:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Date and time of visit</li>
            <li>Basic analytics data (for traffic and performance)</li>
          </ul>
          <p>
            This information is used only for aggregate statistics and to
            improve the reliability and usability of the website.
          </p>
        </section>

        {/* 2. Cookies */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Cookies</h2>
          <p>
            We may use cookies and similar technologies to enhance your
            experience on CSM Study Zone. Cookies are small text files stored on
            your device by your browser.
          </p>
          <p>We may use cookies to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Remember basic preferences</li>
            <li>Understand how visitors use the website</li>
            <li>Display relevant advertisements (e.g., Google AdSense)</li>
          </ul>
          <p>
            You can choose to disable cookies through your browser settings. If
            you disable cookies, some parts of the website may not function as
            intended, but basic access to notes and materials will still be
            possible.
          </p>
        </section>

        {/* 3. Google AdSense & Third-Party Ads */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            3. Google AdSense &amp; Third-Party Advertising
          </h2>
          <p>
            We use <span className="font-semibold">Google AdSense</span> and
            may use other third-party advertising networks to display ads on
            this website.
          </p>
          <p>
            These third parties may use cookies and similar technologies to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Show personalized advertisements based on your interests</li>
            <li>Measure the effectiveness of their campaigns</li>
          </ul>
          <p>
            We do not control the cookies and tracking technologies used by
            third-party advertisers. Their practices are governed by their own
            privacy policies. You can learn more about Google&apos;s ad
            practices and opt out of personalized advertising through Google ad
            settings.
          </p>
        </section>

        {/* 4. How We Use Data */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. How We Use the Collected Data</h2>
          <p>The information we collect is primarily used to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Improve the content and structure of the website</li>
            <li>Monitor performance, traffic and usage patterns</li>
            <li>Diagnose technical problems and prevent abuse</li>
            <li>Display relevant advertisements where applicable</li>
          </ul>
          <p>
            We do not sell, trade or rent your personal information to third
            parties.
          </p>
        </section>

        {/* 5. External Links */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. External Links</h2>
          <p>
            CSM Study Zone may contain links to external websites, tools or
            resources (for example, documentation, datasets or GitHub
            repositories). These sites are not operated by us.
          </p>
          <p>
            We are not responsible for the content, privacy policies or
            practices of any third-party websites. We encourage you to review
            the privacy policy of each site you visit.
          </p>
        </section>

        {/* 6. Data Security */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect
            the information collected on this website. However, no method of
            transmission over the Internet or electronic storage is completely
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* 7. Children's Privacy */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Children&apos;s Privacy</h2>
          <p>
            This website is intended for college and higher-education students.
            We do not knowingly collect personal information from children under
            the age of 13. If you believe a child has provided us with personal
            data, please contact us so that we can remove such information.
          </p>
        </section>

        {/* 8. Changes to This Policy */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            8. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in technology, legal requirements or our services. The
            &quot;Last updated&quot; date at the top of this page indicates the
            latest revision. Changes take effect when they are posted on this
            page.
          </p>
        </section>

        {/* 9. Contact */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Contact Us</h2>
          <p>
            If you have any questions or suggestions regarding this Privacy
            Policy, you can contact us at:
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
