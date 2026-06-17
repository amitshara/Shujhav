import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Flame, ShieldAlert, BadgeInfo } from 'lucide-react';
import { pricingPlans } from '../data/landingData';
import { translations, Language } from '../data/translations';

interface PricingProps {
  lang: Language;
}

export default function Pricing({ lang }: PricingProps) {
  const t = translations[lang];
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-[#061223] transition-colors duration-200 border-t border-gray-150 dark:border-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header descriptives */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            {lang === 'EN' ? 'TRANSPARENT VALUE' : 'पारदर्शी और सुलभ'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mt-1 font-display">
            {t.pricingTitle}
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            {t.pricingSubtitle}
          </p>
        </div>

        {/* Dual Monthly/Yearly toggle */}
        <div className="flex justify-center items-center mb-16 space-x-4">
          <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-gray-950 dark:text-white font-bold' : 'text-gray-400'}`}>
            {t.monthly}
          </span>
          
          {/* Slider input element */}
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 rounded-full bg-blue-100 dark:bg-blue-950 p-1 flex items-center relative transition-all border border-blue-200 dark:border-blue-900 cursor-pointer"
            title="Toggle pricing intervals"
          >
            <div
              className={`w-6 h-6 rounded-full bg-blue-600 transition-all shadow-md transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>

          <span className={`text-sm font-semibold transition-colors flex items-center space-x-1.5 ${isAnnual ? 'text-gray-950 dark:text-white font-bold' : 'text-gray-400'}`}>
            <span>{t.yearly}</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-[10px] font-bold text-amber-600 dark:text-amber-400 font-mono scale-90">
              -20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => {
            const currentPrice = isAnnual ? plan.price.annual : plan.price.monthly;
            const billedAnnuallyStr = isAnnual ? `Billed ₹${plan.price.annual * 12} annually` : 'Billed monthly';
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl p-8 border flex flex-col justify-between text-left relative transition-all ${
                  plan.popular
                    ? 'border-blue-500 bg-blue-50/5 dark:bg-[#09223D] shadow-2xl scale-[1.03] z-10'
                    : 'border-gray-200 dark:border-gray-850 bg-white dark:bg-[#0A2038]'
                }`}
              >
                {/* Popular Highlight Tag */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-extrabold tracking-widest px-4 py-1.5 rounded-full shadow-md uppercase font-mono flex items-center space-x-1">
                    <Flame className="h-3.5 w-3.5 text-white animate-pulse" />
                    <span>{t.popular}</span>
                  </div>
                )}

                {/* Content section */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display">
                      {plan.name === 'Citizens Free' && (lang === 'HI' ? 'मुफ्त नागरिक' : plan.name)}
                      {plan.name === 'Pro Shield' && (lang === 'HI' ? 'प्रो सुरक्षा' : plan.name)}
                      {plan.name === 'Business Shield' && (lang === 'HI' ? 'व्यापार कवच' : plan.name)}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 min-h-[44px]">
                    {plan.desc}
                  </p>

                  {/* Pricing segment */}
                  <div className="my-6">
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono">
                        ₹{currentPrice}
                      </span>
                      <span className="ml-1 text-sm text-gray-500 dark:text-gray-400 font-mono">
                        /{plan.period === 'per month' && (lang === 'HI' ? 'माह' : 'mo')}
                        {plan.period === 'Forever' && (lang === 'HI' ? 'हमेशा के लिए' : 'lifetime')}
                      </span>
                    </div>
                    <div id="billed-annually-desc" className="text-[10px] text-gray-400 font-mono mt-1 uppercase">
                      {billedAnnuallyStr}
                    </div>
                  </div>

                  {/* Feature lists */}
                  <div className="border-t border-gray-100 dark:border-gray-850 pt-6 space-y-3.5">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start space-x-3 text-sm">
                        <div className="p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-650 dark:text-gray-300">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lower Action bar button */}
                <button
                  onClick={() => {
                    const element = document.getElementById('simulator');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full py-4 rounded-xl text-xs sm:text-sm font-bold tracking-tight mt-8 transition-all cursor-pointer active:scale-95 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300/40 dark:border-gray-800'
                  }`}
                >
                  {plan.name === 'Citizens Free' ? (lang === 'HI' ? 'मुफ्त सहायक खोलें' : plan.cta) : plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer about compliance at bottom */}
        <div id="pricing-guarantee-note" className="mt-12 flex items-center justify-center space-x-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 p-4 rounded-2xl max-w-2xl mx-auto text-left text-xs text-amber-800 dark:text-amber-400">
          <BadgeInfo className="h-5 w-5 flex-shrink-0" />
          <p>
            {lang === 'EN'
              ? 'Are you an MSME or Startup? Under MSME Development Act, invoice payment delays attract 3x bank compound interest.'
              : 'क्या आप एक पंजीकृत MSME हैं? एमएसएमई डेवलपमेंट एक्ट के सख्त नियमों के तहत, अनधिकृत भुगतान देरी पर ३ गुना कपाउंड ब्याज अर्जित होता है।'}
          </p>
        </div>

      </div>
    </section>
  );
}
