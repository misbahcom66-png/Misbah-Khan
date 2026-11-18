import { WEDDING_PACKAGES } from '../data/khadiEstate';

interface PackagesSectionProps {
  onRequestPackage: (packageName: string) => void;
}

export function PackagesSection({ onRequestPackage }: PackagesSectionProps) {
  return (
    <section
      id="packages"
      className="border-b border-[#E5DFD5] bg-[#F2EEE8] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-medium text-[#57534E]">
            Wedding Packages & Transparent Rates
          </p>
          <h2 className="font-display text-balance mt-2 text-3xl font-medium leading-[1.15] text-[#1C1917] sm:text-4xl">
            Curated hospitality with clear estate hire.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {WEDDING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col justify-between border border-[#E5DFD5] bg-[#FFFFFF] p-6 sm:p-8"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E] tabular-nums">
                  <span>{pkg.seasonNote}</span>
                  <span aria-hidden="true">·</span>
                  <span>{pkg.guestRange}</span>
                </div>

                <div className="mt-3 flex items-baseline justify-between gap-4 border-b border-[#E5DFD5] pb-5">
                  <h3 className="font-display text-2xl font-medium text-[#1C1917] sm:text-3xl">
                    {pkg.name}
                  </h3>
                  <span className="text-xl font-semibold text-[#1C1917] tabular-nums">
                    {pkg.startingRate}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#57534E]">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#7A1C32]" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => onRequestPackage(pkg.name)}
                  className="w-full cursor-pointer rounded border border-[#1C1917] bg-transparent px-5 py-3 text-xs font-semibold tracking-wide text-[#1C1917] transition-colors hover:bg-[#1C1917] hover:text-white"
                >
                  Request Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
