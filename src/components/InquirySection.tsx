import { Check } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { ESTATE_SPACES, WEDDING_PACKAGES } from '../data/khadiEstate';

interface InquirySectionProps {
  preselectedInterest: string;
}

const SPACE_AND_PACKAGE_OPTIONS = [
  ...ESTATE_SPACES.map((s) => s.name),
  ...WEDDING_PACKAGES.map((p) => p.name),
];

export function InquirySection({ preselectedInterest }: InquirySectionProps) {
  const [coupleNames, setCoupleNames] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [estimatedGuests, setEstimatedGuests] = useState('220');
  const [spacePreference, setSpacePreference] = useState(
    SPACE_AND_PACKAGE_OPTIONS[0]
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedInterest) {
      setSpacePreference(preselectedInterest);
      setSubmitted(false);
    }
  }, [preselectedInterest]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!coupleNames.trim()) {
      setErrorMessage('Please enter the couple or host names.');
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!preferredDate.trim()) {
      setErrorMessage('Please provide your preferred wedding date or month.');
      return;
    }
    const guestsNum = Number(estimatedGuests);
    if (!guestsNum || guestsNum < 20 || guestsNum > 500) {
      setErrorMessage('Please enter an estimated guest count between 20 and 500.');
      return;
    }

    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <section id="inquire" className="bg-[#FAF8F5] py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left column: Concierge info */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-[#57534E]">
              Private Tour & Date Availability
            </p>
            <h2 className="font-display text-balance mt-2 text-3xl font-medium leading-[1.15] text-[#1C1917] sm:text-4xl">
              Walk the estate in Fizagat before you choose your date.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-[#57534E]">
              Private tours are arranged one family at a time so you can experience the acoustics, courtyard light, and dining layout undisturbed.
            </p>

            <dl className="mt-8 space-y-4 border-t border-[#E5DFD5] pt-6 text-sm">
              <div>
                <dt className="text-xs font-semibold text-[#1C1917]">Location</dt>
                <dd className="mt-0.5 text-[#57534E]">
                  Fizagat Riverside Road, Mingora, Swat Valley
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-[#1C1917]">
                  Concierge Viewing Hours
                </dt>
                <dd className="mt-0.5 text-[#57534E]">
                  Tuesday – Sunday · 10:00 AM – 6:00 PM (By Appointment)
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-[#1C1917]">
                  Direct Concierge
                </dt>
                <dd className="mt-0.5 text-[#57534E]">
                  concierge@khadiestate.com · +92 946 555 0148
                </dd>
              </div>
            </dl>
          </div>

          {/* Right column: Validated Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-[#E5DFD5] bg-[#FFFFFF] p-8">
                <div className="flex items-center gap-2.5 text-base font-semibold text-[#1C1917]">
                  <Check className="h-4 w-4 text-[#7A1C32]" aria-hidden="true" />
                  <span>Availability Request Received</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                  Thank you, <strong className="text-[#1C1917]">{coupleNames}</strong>. Our Fizagat estate concierge has logged your inquiry for{' '}
                  <strong className="text-[#1C1917]">{preferredDate}</strong> ({estimatedGuests} guests · {spacePreference}) and will send open dates and a private tour invitation to{' '}
                  <strong className="text-[#1C1917]">{email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 cursor-pointer text-xs font-semibold text-[#7A1C32] underline underline-offset-4"
                >
                  Check another wedding date
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 border border-[#E5DFD5] bg-[#FFFFFF] p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="couple-names"
                      className="block text-xs font-medium text-[#1C1917]"
                    >
                      Couple Names
                    </label>
                    <input
                      id="couple-names"
                      type="text"
                      value={coupleNames}
                      onChange={(e) => setCoupleNames(e.target.value)}
                      placeholder="e.g. Ayesha & Omar"
                      className="mt-1.5 h-11 w-full rounded border border-[#E5DFD5] bg-[#FAF8F5] px-3.5 text-sm text-[#1C1917] focus:border-[#7A1C32] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="couple-email"
                      className="block text-xs font-medium text-[#1C1917]"
                    >
                      Email Address
                    </label>
                    <input
                      id="couple-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="mt-1.5 h-11 w-full rounded border border-[#E5DFD5] bg-[#FAF8F5] px-3.5 text-sm text-[#1C1917] focus:border-[#7A1C32] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="preferred-date"
                      className="block text-xs font-medium text-[#1C1917]"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="preferred-date"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="mt-1.5 h-11 w-full rounded border border-[#E5DFD5] bg-[#FAF8F5] px-3.5 text-sm text-[#1C1917] focus:border-[#7A1C32] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="estimated-guests"
                      className="block text-xs font-medium text-[#1C1917]"
                    >
                      Estimated Guest Count
                    </label>
                    <input
                      id="estimated-guests"
                      type="number"
                      min={20}
                      max={500}
                      value={estimatedGuests}
                      onChange={(e) => setEstimatedGuests(e.target.value)}
                      className="mt-1.5 h-11 w-full rounded border border-[#E5DFD5] bg-[#FAF8F5] px-3.5 text-sm text-[#1C1917] tabular-nums focus:border-[#7A1C32] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="space-preference"
                      className="block text-xs font-medium text-[#1C1917]"
                    >
                      Space Preference
                    </label>
                    <select
                      id="space-preference"
                      value={spacePreference}
                      onChange={(e) => setSpacePreference(e.target.value)}
                      className="mt-1.5 h-11 w-full rounded border border-[#E5DFD5] bg-[#FAF8F5] px-3 text-sm text-[#1C1917] focus:border-[#7A1C32] focus:outline-none"
                    >
                      {SPACE_AND_PACKAGE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {errorMessage && (
                  <p className="text-xs font-medium text-[#7A1C32]" role="alert">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full cursor-pointer rounded bg-[#7A1C32] px-6 py-3.5 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-[#611527] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1C32]"
                >
                  Check Date Availability
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
