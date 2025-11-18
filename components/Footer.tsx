import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-auto border-t border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CSM Study Zone
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your one-stop destination for CSM, CSE & AIML study materials,
              notes, labs, and programming resources.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/notes" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Lab Manuals
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/programming" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Programming
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <p className="text-gray-300 leading-relaxed">
              For queries and suggestions, please visit our website.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-700/50 mt-10 pt-6 text-center">
          <p className="text-gray-400 mb-2">
            &copy; 2025 CSM Study Zone. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed and developed by{" "}
            <span className="text-blue-400 font-semibold">JYOSRIK</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

