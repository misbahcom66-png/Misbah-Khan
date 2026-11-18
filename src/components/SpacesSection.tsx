import { useState } from 'react';
import { ESTATE_SPACES, EstateSpace } from '../data/khadiEstate';

interface SpacesSectionProps {
  onSelectSpaceForInquiry: (spaceName: string) => void;
}

export function SpacesSection({ onSelectSpaceForInquiry }: SpacesSectionProps) {
  const [activeId, setActiveId] = useState<string>(ESTATE_SPACES[0].id);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const activeSpace: EstateSpace =
    ESTATE_SPACES.find((s) => s.id === activeId) ?? ESTATE_SPACES[0];

  const markImageFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="spaces"
      className="border-b border-[#E5DFD5] bg-[#FFFFFF] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-medium text-[#57534E]">
              Architectural Floorplans & Capacities
            </p>
            <h2 className="font-display text-balance mt-2 text-3xl font-medium leading-[1.15] text-[#1C1917] sm:text-4xl">
              Three distinct settings designed for seamless ceremony-to-banquet flow.
            </h2>
          </div>

          {/* Interactive segmented tab selector */}
          <div
            role="tablist"
            aria-label="Khadi Event Spaces"
            className="flex flex-wrap items-center gap-1 rounded-md border border-[#E5DFD5] bg-[#FAF8F5] p-1"
          >
            {ESTATE_SPACES.map((space) => {
              const isSelected = space.id === activeSpace.id;
              return (
                <button
                  key={space.id}
                  role="tab"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => setActiveId(space.id)}
                  className={`cursor-pointer rounded px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#7A1C32] text-white'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {space.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active space showcase */}
        <div className="mt-10 grid grid-cols-1 gap-8 border border-[#E5DFD5] bg-[#FAF8F5] lg:grid-cols-12 items-stretch">
          <div className="bg-[#F2EEE8] lg:col-span-7">
            {failedImages[activeSpace.id] ? (
              <div className="flex aspect-[16/9] h-full items-center justify-center p-8 text-center text-sm text-[#57534E]">
                {activeSpace.name} — {activeSpace.dimensions}
              </div>
            ) : (
              <img
                src={activeSpace.image}
                alt={activeSpace.imageAlt}
                referrerPolicy="no-referrer"
                onError={() => markImageFailed(activeSpace.id)}
                className="aspect-[16/9] h-full w-full object-cover"
              />
            )}
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E] tabular-nums">
                <span>{activeSpace.dimensions}</span>
                <span aria-hidden="true">·</span>
                <span>{activeSpace.ceilingNote}</span>
              </div>

              <h3 className="font-display mt-3 text-3xl font-medium text-[#1C1917]">
                {activeSpace.name}
              </h3>

              <p className="mt-4 text-[15px] leading-[1.65] text-[#57534E]">
                {activeSpace.summary}
              </p>

              {/* Capacity Table with tabular numerals */}
              <div className="mt-6 grid grid-cols-2 border-y border-[#E5DFD5] py-4">
                <div>
                  <div className="text-xs text-[#57534E]">Seated Banquet</div>
                  <div className="mt-1 text-xl font-semibold text-[#1C1917] tabular-nums">
                    {activeSpace.seatedCapacity} Guests
                  </div>
                </div>
                <div className="border-l border-[#E5DFD5] pl-5">
                  <div className="text-xs text-[#57534E]">Standing Cocktail</div>
                  <div className="mt-1 text-xl font-semibold text-[#1C1917] tabular-nums">
                    {activeSpace.cocktailCapacity} Guests
                  </div>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 text-sm text-[#57534E]">
                {activeSpace.architecturalDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5">
                    <span className="text-[#7A1C32]" aria-hidden="true">
                      —
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-[#E5DFD5] pt-5">
              <button
                type="button"
                onClick={() => onSelectSpaceForInquiry(activeSpace.name)}
                className="cursor-pointer text-sm font-semibold text-[#7A1C32] underline underline-offset-4 transition-opacity hover:opacity-80"
              >
                Inquire about {activeSpace.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
