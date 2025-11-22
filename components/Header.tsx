import Link from "next/link";
import Image from "next/image";

const NavbarBrand = () => {
  // Use SVG as fallback if PNG doesn't exist
  // Replace with /csm-logo.png when you have the actual logo file
  const logoSrc = "/csm-logo.svg"; // Change to "/csm-logo.png" when PNG is available
  
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label="CSM Study Zone - Home"
    >
      <div className="relative h-10 w-28 sm:h-12 sm:w-32 md:h-14 md:w-36">
        <Image
          src={logoSrc}
          alt="CSM Study Zone logo"
          fill
          className="object-contain drop-shadow-sm"
          priority
          sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
        />
      </div>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <NavbarBrand />
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/notes" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Notes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/labs" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Labs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/programming" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Programming
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          <button className="md:hidden text-gray-700 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

