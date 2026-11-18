import { useState } from 'react';
import { TABLETOP_DETAIL_IMAGE } from '../data/khadiEstate';

const CULINARY_DETAILS = [
  {
    label: 'Tableware',
    detail: 'Handmade stoneware plates, crystal stemware, and Belgian ivory linen runners',
  },
  {
    label: 'Culinary Kitchen',
    detail: 'On-site banquet brigades preparing seasonal multi-course menus plated to order',
  },
  {
    label: 'Lighting Rhythm',
    detail: 'Beeswax taper candles in solid brass holders paired with warm architectural dimming',
  },
];

export function CulinarySection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="gallery"
      className="border-b border-[#E5DFD5] bg-[#FAF8F5] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="overflow-hidden border border-[#E5DFD5] bg-[#F2EEE8]">
              {imageError ? (
                <div className="flex aspect-[4/3] items-center justify-center p-8 text-center text-sm text-[#57534E]">
                  Khadi Banquet Tabletop — Stoneware, Crystal & Beeswax Candlelight
                </div>
              ) : (
                <img
                  src={TABLETOP_DETAIL_IMAGE}
                  alt="Wedding reception banquet table setting at Khadi with handmade ceramic plates, crystal glassware, and beeswax taper candles"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="aspect-[4/3] w-full object-cover"
                />
              )}
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <p className="text-xs font-medium text-[#57534E]">
              Tabletop & Culinary Atmosphere
            </p>
            <h2 className="font-display text-balance mt-2 text-3xl font-medium leading-[1.15] text-[#1C1917] sm:text-4xl">
              Crafted to the last beeswax taper and linen fold.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-[#57534E]">
              A memorable wedding dinner is shaped by temperature, acoustic calm, and visual warmth. At Khadi in Fizagat, our in-house hospitality stewards coordinate every course from welcome refreshments in the cloister to late-evening tea service beneath the arches.
            </p>

            <dl className="mt-8 divide-y divide-[#E5DFD5] border-y border-[#E5DFD5]">
              {CULINARY_DETAILS.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-12 sm:gap-4"
                >
                  <dt className="text-xs font-semibold text-[#1C1917] sm:col-span-4">
                    {item.label}
                  </dt>
                  <dd className="text-xs leading-relaxed text-[#57534E] sm:col-span-8">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
