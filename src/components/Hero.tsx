import { motion } from 'motion/react';
import { ArrowRight, Play, Sparkles, Shield, CheckCircle } from 'lucide-react';
import { translations, Language } from '../data/translations';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang];

  const handleStartFree = () => {
    const element = document.getElementById('simulator');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8FAFC] dark:bg-[#06152B] transition-colors duration-200">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 max-w-7xl mx-auto opacity-50 pointer-events-none">
        <div className="orb w-[420px] h-[420px] bg-blue-105 top-[-100px] right-[-100px] opacity-60"></div>
        <div className="orb w-[320px] h-[320px] bg-indigo-105 bottom-[-50px] left-[-50px] opacity-40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1 text-[#2563EB] dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-900/40 bg-blue-50/70 dark:bg-blue-950/20 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide uppercase font-mono">
                {lang === 'EN' ? "India's First AI Legal Ally" : "भारत का पहला एआई कानूनी साथी"}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A2540] dark:text-white leading-[1.1] font-display"
            >
              {lang === 'EN' ? (
                <>
                  Understand Your <span className="text-[#2563EB] drop-shadow-sm font-bold">Rights.</span>
                  <br />
                  Resolve Problems <span className="text-[#2563EB] font-bold">Faster.</span>
                </>
              ) : (
                <>
                  अपने <span className="text-[#2563EB]">अधिकारों</span> को समझें।
                  <br />
                  विवादों को <span className="text-[#2563EB]">तेज़ी से सुलझाएं।</span>
                </>
              )}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed"
            >
              Get AI-powered legal guidance, dispute resolution support, and professional information in simple language. Designed for every Indian citizen.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-1"
            >
              <button
                onClick={handleStartFree}
                className="px-8 py-4 rounded-xl text-md font-bold text-white navy-gradient hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer group"
              >
                <span>{lang === 'EN' ? "Start My Inquiry — It's Free" : t.getStarted}</span>
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={handleStartFree}
                className="px-7 py-4 rounded-xl text-md font-bold text-slate-800 dark:text-gray-200 bg-white dark:bg-gray-800/80 hover:bg-slate-50 dark:hover:bg-gray-700/80 hover:scale-[1.02] active:scale-100 transition-all flex items-center justify-center space-x-2 cursor-pointer border border-slate-200 dark:border-gray-750"
              >
                <Play className="h-4 w-4 fill-current text-[#2563EB]" />
                <span>{t.watchDemo}</span>
              </button>
            </motion.div>

            {/* Trust Badges & Counters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/30"
            >
              <div>
                <div className="text-3xl font-bold text-[#0A2540] dark:text-white">150k+</div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1 font-mono">
                  {lang === 'EN' ? 'Resolved Cases' : 'सुलझाए गए मामले'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0A2540] dark:text-white">98.4%</div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1 font-mono">
                  {lang === 'EN' ? 'Accuracy Rate' : 'सटीकता दर'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0A2540] dark:text-white">24/7</div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1 font-mono">
                  {lang === 'EN' ? 'AI Assistance' : 'एआई सहायता'}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Interactive Illustration Mockups with Sleek rotates */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Floating absolute badge of Privacy Guard */}
            <div className="absolute -top-6 -left-6 z-20 glass p-4 rounded-2xl flex items-center gap-3 -rotate-3 hero-shadow hidden sm:flex">
              <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-955 flex items-center justify-center text-amber-600 dark:text-amber-400 animate-pulse">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 dark:text-gray-100">Privacy Secure</p>
                <p className="text-[10px] text-slate-500 dark:text-gray-400 font-mono">256-bit AES Encryption</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-[420px] lg:max-w-none glass rounded-[40px] p-1.5 hero-shadow rotate-2"
            >
              <div className="bg-[#0A2540] rounded-[38px] p-5 sm:p-6 text-white flex flex-col relative overflow-hidden h-[460px]">
                {/* Top Banner Control Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
                  <div id="hero-decor-circles" className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-[9px] font-bold font-mono text-blue-200">
                      {lang === 'EN' ? 'SHUJHAV AI LIVE' : 'सुझाव AI लाइव'}
                    </span>
                  </div>
                </div>

                {/* Chat Simulation Area */}
                <div className="flex-1 space-y-4 overflow-y-auto no-scrollbar font-mono text-[11px] sm:text-xs">
                  {/* User Bubble */}
                  <div className="flex items-start space-x-2.5">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-slate-300">
                      U
                    </div>
                    <div className="bg-white/10 text-white p-3 rounded-2xl rounded-tl-none max-w-[85%] text-left">
                      {lang === 'EN' ? (
                        "My landlord refuses to return my deposit. How can I resolve it?"
                      ) : (
                        "मकान-मालिक सिक्योरिटी डिपॉजिट वापस नहीं कर रहा है। मैं क्या करूँ?"
                      )}
                    </div>
                  </div>

                  {/* AI Loading Phase */}
                  <div className="flex items-start space-x-2.5">
                    <div className="w-6 h-6 rounded-full navy-gradient text-white flex items-center justify-center font-bold text-[10px] border border-blue-400/20">
                      S
                    </div>
                    <div className="bg-blue-600/20 border border-blue-500/20 text-blue-200 p-3.5 rounded-2xl rounded-tl-none max-w-[85%] text-left space-y-2">
                      <div className="flex items-center space-x-2 text-blue-400">
                        <Sparkles className="h-4 w-4 animate-spin" />
                        <span className="font-bold">
                          {lang === 'EN' ? 'Analyzing Rental Act...' : 'किराएदारी कानूनों की समीक्षा...'}
                        </span>
                      </div>
                      <div id="sim-bullet-lines" className="space-y-1">
                        <div className="w-full h-1 rounded bg-blue-600/30"></div>
                        <div className="w-4/5 h-1 rounded bg-blue-600/30"></div>
                      </div>
                    </div>
                  </div>

                  {/* AI Output preview */}
                  <div className="flex items-start space-x-2.5">
                    <div className="w-6 h-6 rounded-full navy-gradient text-white flex items-center justify-center font-bold text-[10px] border border-blue-400/20">
                      S
                    </div>
                    <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-left space-y-2.5">
                      <h4 className="font-bold text-white flex items-center space-x-1.5 border-b border-white/5 pb-1.5">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        <span>{lang === 'EN' ? 'Action Plan Formulated' : 'ऐक्शन प्लान तैयार है!'}</span>
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-[11px]">
                        {lang === 'EN' ? (
                          "Under Bangalore Tenancy parameters, normal wear-and-tear cannot be deducted."
                        ) : (
                          "बेंगलुरु किराएदारी नियमों के तहत सामान्य घिसावट का चार्ज काटा नहीं जा सकता।"
                        )}
                      </p>
                      <div className="space-y-1 border-t border-white/5 pt-2 font-sans">
                        <div className="text-[10px] uppercase font-bold text-amber-400 font-mono">
                          {lang === 'EN' ? 'Actionable steps:' : 'कार्रवाई रणनीति:'}
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-gray-400 text-[11px]">
                          <li>{lang === 'EN' ? 'Send a 15-day Demand Legal Notice' : '15-दिन की अवधि का कानूनी नोटिस भेजें'}</li>
                          <li>{lang === 'EN' ? 'File Online Consumer Grievance' : 'राष्ट्रीय उपभोक्ता हेल्पलाइन में शिकायत दर्ज करें'}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom floating absolute card with sleek style */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-tr from-indigo-600 to-blue-600 text-white p-3 rounded-2xl shadow-xl flex items-center space-x-2.5 max-w-[200px] hover:scale-105 transition-transform duration-200">
                  <div className="p-1.5 rounded-xl bg-white/10">
                    <Shield className="h-4 w-4 text-amber-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-[9px] font-bold tracking-widest text-[#C5A059] uppercase">
                      {lang === 'EN' ? 'TRUSTED BY' : 'विश्वासपात्र'}
                    </div>
                    <div className="text-xs font-bold leading-tight font-sans">
                      {lang === 'EN' ? '25k+ Citizens' : '25k+ भारतीय'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
