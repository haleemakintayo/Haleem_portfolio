import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkItem {
  name: string;
  to: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: 'About', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Experience', to: '/#experience' },
  { name: 'Resume', to: '/resume' },
  { name: 'Contact', to: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isLinkActive = (to: string) => {
    if (to === '/') return location.pathname === '/' && !location.hash;
    if (to === '/#experience') return location.pathname === '/experience' || (location.pathname === '/' && location.hash === '#experience');
    if (to === '/#contact') return location.pathname === '/' && location.hash === '#contact';
    if (to === '/projects') return location.pathname.startsWith('/projects');
    return location.pathname === to;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/[0.06] bg-[#050505]/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="font-heading text-xl font-bold tracking-tight text-white hover:text-slate-200 transition-colors"
              aria-label="Home"
            >
              Haleem<span className="text-emerald-400">.dev</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.to);
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    className={`relative py-1.5 text-sm font-medium transition-colors ${
                      active ? 'text-white' : 'text-[#8a94a6] hover:text-white'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-400 after:shadow-[0_0_8px_rgba(52,211,153,0.4)] after:transition-transform after:duration-250 after:ease-out ${
                      active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Quick CV Download Button */}
            <a
              href="/Akintayo_Haleem_Opeyemi_Resume.pdf"
              download="Akintayo_Haleem_Opeyemi_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 text-xs font-mono transition-all active:scale-95 shadow-sm"
              title="Download CV"
            >
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 text-slate-400 hover:text-white focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#080808]/95 backdrop-blur-xl" id="mobile-menu">
          <div className="space-y-1 px-4 py-3">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.to);
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors border-b border-transparent ${
                    active
                      ? 'text-white border-b-emerald-400'
                      : 'text-[#8a94a6] hover:text-white hover:border-b-emerald-400/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}