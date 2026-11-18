export function Footer() {
  return (
    <footer className="border-t border-[#E5DFD5] bg-[#F2EEE8] py-10">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-5 sm:px-8">
        <div>
          <span className="font-display text-2xl font-semibold text-[#1C1917]">
            Khadi
          </span>
          <p className="mt-1 text-xs text-[#57534E]">
            Fizagat, Mingora · Swat Valley
          </p>
        </div>

        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#57534E]"
        >
          <a href="#spaces" className="hover:text-[#1C1917]">
            Spaces
          </a>
          <a href="#packages" className="hover:text-[#1C1917]">
            Packages
          </a>
          <a href="#gallery" className="hover:text-[#1C1917]">
            Gallery
          </a>
          <a href="#inquire" className="hover:text-[#1C1917]">
            Inquire
          </a>
        </nav>

        <div className="text-xs text-[#57534E]">
          Private Viewings by Appointment · © 2026 Khadi Estate
        </div>
      </div>
    </footer>
  );
}
