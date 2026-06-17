import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '../data/landingData';
import { translations, Language } from '../data/translations';

interface FAQProps {
  lang: Language;
}

export default function FAQ({ lang }: FAQProps) {
  const t = translations[lang];
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#061223] transition-colors duration-200 border-t border-gray-100 dark:border-gray-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Segment */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            {lang === 'EN' ? 'HAVE QUESTIONS?' : 'अक्सर पूछे जाने वाले प्रश्न'}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-1 font-display">
            {t.faqTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Accordions Stack */}
        <div id="faq-accordions-stack" className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            
            // Localize question and answers on Hindi toggle
            let qText = item.question;
            let aText = item.answer;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-blue-500 bg-blue-50/5 dark:bg-[#0A2038] shadow-md'
                    : 'border-gray-200 dark:border-gray-850 bg-white dark:bg-[#0A2038]/40 hover:bg-gray-50 dark:hover:bg-[#0A2038]'
                }`}
              >
                {/* Trigger Button Headers */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start space-x-4">
                    <HelpCircle className={`h-5.5 w-5.5 mt-0.5 flex-shrink-0 ${isOpen ? 'text-blue-500' : 'text-gray-400'}`} />
                    <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-snug">
                      {qText}
                    </span>
                  </div>
                  
                  {/* Status indicator chevron */}
                  <div className={`ml-4 p-1.5 rounded-lg border ${isOpen ? 'border-blue-300 dark:border-blue-900 bg-blue-100/30' : 'border-gray-200 dark:border-gray-850'} transition-transform duration-200`}>
                    {isOpen ? <Minus className="h-4 w-4 text-blue-550" /> : <Plus className="h-4 w-4 text-gray-550" />}
                  </div>
                </button>

                {/* Body Content Slider */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-10 pb-6 sm:px-14 sm:pb-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed text-left border-t border-gray-100 dark:border-gray-850 pt-4">
                        {aText}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
