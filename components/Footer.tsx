import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} CSM Study Zone. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/privacy-policy" className="hover:text-indigo-600 transition-colors">
            Privacy Policy
          </Link>
          <span className="h-3 w-px bg-slate-300" />
          <Link href="/terms-and-conditions" className="hover:text-indigo-600 transition-colors">
            Terms &amp; Conditions
          </Link>
          <span className="h-3 w-px bg-slate-300" />
          <Link href="/contact" className="hover:text-indigo-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}

