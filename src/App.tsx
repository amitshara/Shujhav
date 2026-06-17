import { useState, useEffect } from 'react';
import { Language } from './data/translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Simulator from './components/Simulator';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import RightsMatrix from './components/RightsMatrix';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [isDark, setIsDark] = useState<boolean>(false);

  // Sync dark mode state with document element class for full tailwind dark: support
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-200 bg-white dark:bg-[#061223] text-gray-900 dark:text-gray-100`}>
      {/* 1. Glassmorphic Navigation Bar */}
      <Navbar lang={lang} setLang={setLang} isDark={isDark} setIsDark={setIsDark} />

      {/* 2. Apple/Stripe-inspired Hero Section with floating gradients */}
      <Hero lang={lang} />

      {/* 3. Stat counters and India Legal Scale Challenge Highlights */}
      <TrustSection lang={lang} />

      {/* 4. Core Interactive Tool: The Indian Legal Dispute Simulator Panel */}
      <Simulator lang={lang} />

      {/* 5. Bento box grid of the 6 core AI features requested */}
      <Features lang={lang} />

      {/* 6. Creative process flow (Steps 1 to 4 timeline) */}
      <HowItWorks lang={lang} />

      {/* 7. Categorized interactive Citizens Rights Library Matrix */}
      <RightsMatrix lang={lang} />

      {/* 8. Verified Out-of-court dispute Success Stories */}
      <Testimonials lang={lang} />

      {/* 9. Glowing Pricing Plan Cards (Monthly vs Annual toggle) */}
      <Pricing lang={lang} />

      {/* 10. Expandable FAQ list accordions */}
      <FAQ lang={lang} />

      {/* 11. Compliant footer with Bar Council legal disclaimer and address details */}
      <Footer lang={lang} />
    </div>
  );
}
