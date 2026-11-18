import { COUPLE_STORIES } from '../data/khadiEstate';

export function TestimonialsSection() {
  return (
    <section className="border-b border-[#E5DFD5] bg-[#FFFFFF] py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-medium text-[#57534E]">Couple Stories</p>
          <h2 className="font-display text-balance mt-2 text-3xl font-medium leading-[1.15] text-[#1C1917] sm:text-4xl">
            Celebrations remembered for their calm and pacing.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {COUPLE_STORIES.map((story) => (
            <blockquote
              key={story.couple}
              className="flex flex-col justify-between border border-[#E5DFD5] bg-[#FAF8F5] p-6 sm:p-8"
            >
              <p className="font-display text-xl leading-[1.45] text-[#1C1917] sm:text-2xl">
                "{story.quote}"
              </p>

              <footer className="mt-6 border-t border-[#E5DFD5] pt-4 text-xs text-[#57534E] tabular-nums">
                <span className="font-semibold text-[#1C1917]">
                  {story.couple}
                </span>
                <span className="mx-2" aria-hidden="true">
                  ·
                </span>
                <span>{story.eventDate}</span>
                <span className="mx-2" aria-hidden="true">
                  ·
                </span>
                <span>{story.guestCount} Guests</span>
                <span className="mx-2" aria-hidden="true">
                  ·
                </span>
                <span>{story.spaceUsed}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
