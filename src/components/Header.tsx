import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onBookTour: () => void;
}

const NAV_LINKS = [
  { href: '#spaces', label: 'Spaces' },
  { href: '#packages', label: 'Packages' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#inquire', label: 'Inquire' },
];

export function Header({ onBookTour }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5DFD5] bg-[#FAF8F5]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-5 py-4 sm:px-8">
        {/* Zone 1: Single-line serif wordmark only */}
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0 sm:text-3xl"
        >
          Khadi
        </a>

        {/* Zone 2: 4 concise single-line text links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57534E]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="border-b border-transparent py-1 transition-colors hover:border-[#7A1C32] hover:text-[#1C1917] whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onBookTour}
            className="cursor-pointer rounded bg-[#7A1C32] px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-[#611527] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1C32] whitespace-nowrap shrink-0"
          >
            Book a Tour
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="inline-flex cursor-pointer items-center justify-center rounded border border-[#E5DFD5] bg-white p-2 text-[#1C1917] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-[#E5DFD5] bg-[#FFFFFF] px-5 py-4 md:hidden"
        >
          <div className="flex flex-col space-y-3 text-sm font-medium text-[#1C1917]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="border-b border-[#F2EEE8] pb-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
