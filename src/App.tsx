import { useState } from 'react';
import { CulinarySection } from './components/CulinarySection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InquirySection } from './components/InquirySection';
import { PackagesSection } from './components/PackagesSection';
import { SpacesSection } from './components/SpacesSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  const [preselectedInterest, setPreselectedInterest] = useState('');

  const scrollToInquiry = (interest?: string) => {
    if (interest) {
      setPreselectedInterest(interest);
    }
    const target = document.getElementById('inquire');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917]">
      <Header onBookTour={() => scrollToInquiry()} />

      <main>
        <HeroSection onScheduleTour={() => scrollToInquiry()} />
        <SpacesSection onSelectSpaceForInquiry={(space) => scrollToInquiry(space)} />
        <PackagesSection onRequestPackage={(pkg) => scrollToInquiry(pkg)} />
        <CulinarySection />
        <TestimonialsSection />
        <InquirySection preselectedInterest={preselectedInterest} />
      </main>

      <Footer />
    </div>
  );
}
