import { useState } from 'react';
import { HERO_ESTATE_IMAGE } from '../data/khadiEstate';

interface HeroSectionProps {
  onScheduleTour: () => void;
}

const KEY_METRICS = [
  { label: 'Max Capacity', value: '320 Guests' },
  { label: 'Event Spaces', value: '3 Distinct Halls' },
  { label: 'Starting Hire', value: '$12,000' },
  { label: 'Exclusivity', value: '1 Event Daily' },
];

export function HeroSection({ onScheduleTour }: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="top" className="border-b border-[#E5DFD5] bg-[#FAF8F5]">
      <div className="mx-auto max-w-[1440px]">
        {/* Asymmetric 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="flex flex-col justify-center px-5 py-12 sm:px-8 lg:col-span-5 lg:py-20 lg:pr-12">
            <p className="text-xs font-medium tracking-wide text-[#57534E]">
              Fizagat, Mingora · Swat Valley
            </p>

            <h1 className="font-display text-balance mt-4 text-[44px] font-medium leading-[1.06] tracking-[-0.02em] text-[#1C1917] sm:text-[56px]">
              Timeless celebrations beneath vaulted limestone arches.
            </h1>

            <p className="mt-5 max-w-lg text-[15px] leading-[1.65] text-[#57534E] sm:text-base">
              Set along the scenic riverside stretch of Fizagat in Mingora, Khadi hosts one bespoke celebration per day with candlelit banquet seating for up to 320 guests.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={onScheduleTour}
                className="cursor-pointer rounded bg-[#7A1C32] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#611527] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1C32] whitespace-nowrap"
              >
                Schedule a Private Tour
              </button>
            </div>
          </div>

          <div className="relative min-h-[300px] bg-[#F2EEE8] lg:col-span-7 lg:min-h-[560px]">
            {imageError ? (
              <div className="flex h-full min-h-[300px] items-center justify-center p-8 text-center">
                <div>
                  <div className="font-display text-2xl font-medium text-[#1C1917]">
                    Khadi — The Great Vaulted Hall
                  </div>
                  <p className="mt-1 text-xs text-[#57534E]">
                    Carved limestone arches, crystal chandeliers, and candlelit banquet tables
                  </p>
                </div>
              </div>
            ) : (
              <img
                src={HERO_ESTATE_IMAGE}
                alt="Khadi wedding hall interior featuring vaulted stone arches, tall windows, crystal chandeliers, and ivory linen banquet tables"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="aspect-[16/9] h-full w-full object-cover lg:aspect-auto"
              />
            )}
          </div>
        </div>

        {/* Full-width 4-column metric strip below the hero split */}
        <div className="grid grid-cols-2 border-t border-[#E5DFD5] bg-[#FFFFFF] sm:grid-cols-4">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className={`px-5 py-5 sm:px-8 ${
                idx % 2 === 1 ? 'border-l border-[#E5DFD5]' : ''
              } ${
                idx >= 2 ? 'border-t border-[#E5DFD5] sm:border-t-0' : ''
              } ${idx > 0 ? 'sm:border-l sm:border-[#E5DFD5]' : ''}`}
            >
              <div className="text-xs font-medium text-[#57534E]">
                {metric.label}
              </div>
              <div className="mt-1 text-lg font-semibold text-[#1C1917] tabular-nums">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
