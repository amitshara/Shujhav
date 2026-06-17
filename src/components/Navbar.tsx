import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, Scale } from 'lucide-react';
import { translations, Language } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export default function Navbar({ lang, setLang, isDark, setIsDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg border-b border-gray-200/30 dark:border-white/10'
          : 'bg-white/40 dark:bg-[#0A2540]/40 border-b border-slate-200/50 dark:border-slate-800/30 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            id="nav-logo"
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="p-2 ml-1 rounded-xl navy-gradient text-white shadow-md shadow-[#0A2540]/20 group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
              <Scale className="h-6 w-6 text-[#C5A059]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-[#0A2540] dark:text-white transition-colors duration-200">
                {t.brandName}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#C5A059] font-bold uppercase">
                {t.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div id="nav-desktop-links" className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-semibold text-slate-650 hover:text-blue-605 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {lang === 'EN' ? 'Features' : 'सुविधाएँ'}
            </button>
            <button
              onClick={() => scrollToSection('simulator')}
              className="text-sm font-semibold text-slate-650 hover:text-blue-605 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {lang === 'EN' ? 'AI Legal Portal' : 'AI क़ानूनी पोर्टल'}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-semibold text-slate-650 hover:text-blue-605 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {lang === 'EN' ? 'How it Works' : 'यह कैसे काम करता है'}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-semibold text-slate-650 hover:text-blue-605 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {lang === 'EN' ? 'Pricing' : 'मूल्य निर्धारण'}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-semibold text-slate-650 hover:text-blue-605 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {lang === 'EN' ? 'FAQ' : 'अक्सर पूछे जाने वाले प्रश्न'}
            </button>
          </div>

          {/* System Control Settings */}
          <div id="nav-controls" className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="relative flex items-center bg-gray-100/80 dark:bg-gray-800/80 rounded-full p-1 border border-gray-200/50 dark:border-gray-700/50">
              <button
                onClick={() => setLang('EN')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === 'EN'
                    ? 'navy-gradient text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-750 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Globe className="h-3 w-3" />
                <span>EN</span>
              </button>
              <button
                onClick={() => setLang('HI')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === 'HI'
                    ? 'navy-gradient text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-750 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Globe className="h-3 w-3" />
                <span>हिंदी</span>
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-full border border-gray-200/60 dark:border-gray-800/60 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun className="h-5 w-5 text-amber-505" /> : <Moon className="h-5 w-5 text-blue-606" />}
            </button>

            {/* Main Action CTA */}
            <button
              onClick={() => scrollToSection('simulator')}
              className="px-5 py-2.5 rounded-full text-sm font-semibold tracking-tight text-white navy-gradient hover:shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              {t.getStarted}
            </button>
          </div>

          {/* Mobile menu button */}
          <div id="nav-mobile-buttons" className="md:hidden flex items-center space-x-3">
            {/* Mobile Light/Dark switch */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400"
            >
              {isDark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-blue-600" />}
            </button>

            {/* Mobile Lang select icon */}
            <button
              onClick={() => setLang(lang === 'EN' ? 'HI' : 'EN')}
              className="p-2 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center space-x-1"
            >
              <Globe className="h-4 w-4 text-blue-500" />
              <span className="text-xs font-bold text-gray-700 dark:text-white">{lang}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0A2540] shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-3 sm:px-3">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-3 rounded-xl text-base font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {lang === 'EN' ? 'Features' : 'सुविधाएँ'}
            </button>
            <button
              onClick={() => scrollToSection('simulator')}
              className="block w-full text-left px-3 py-3 rounded-xl text-base font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {lang === 'EN' ? 'AI Legal Portal' : 'AI क़ानूनी पोर्टल'}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-3 rounded-xl text-base font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {lang === 'EN' ? 'How it Works' : 'यह कैसे काम करता है'}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-3 py-3 rounded-xl text-base font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {lang === 'EN' ? 'Pricing' : 'मूल्य निर्धारण'}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-3 py-3 rounded-xl text-base font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {lang === 'EN' ? 'FAQ' : 'अक्सर पूछे जाने वाले प्रश्न'}
            </button>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-center">
              <button
                onClick={() => {
                  scrollToSection('simulator');
                  setIsOpen(false);
                }}
                className="w-full text-center px-6 py-3 rounded-xl text-md font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md"
              >
                {t.getStarted}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
