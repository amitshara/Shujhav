import { motion } from 'motion/react';
import { HelpCircle, Cpu, FileText, CheckCircle2 } from 'lucide-react';
import { translations, Language } from '../data/translations';

interface HowItWorksProps {
  lang: Language;
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  const t = translations[lang];

  const steps = [
    {
      id: 'step-1',
      num: '01',
      title: t.step1Title,
      desc: t.step1Desc,
      icon: <HelpCircle className="h-6 w-6 text-blue-500" />
    },
    {
      id: 'step-2',
      num: '02',
      title: t.step2Title,
      desc: t.step2Desc,
      icon: <Cpu className="h-6 w-6 text-indigo-500" />
    },
    {
      id: 'step-3',
      num: '03',
      title: t.step3Title,
      desc: t.step3Desc,
      icon: <FileText className="h-6 w-6 text-amber-500" />
    },
    {
      id: 'step-4',
      num: '04',
      title: t.step4Title,
      desc: t.step4Desc,
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-500" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-[#061223] relative transition-colors duration-200 border-t border-gray-100 dark:border-gray-850">
      
      {/* Background Decorative element */}
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] rounded-full bg-indigo-500/5 dark:bg-indigo-400/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            {lang === 'EN' ? 'THE SIMPLIFIED PROCESS' : 'सरल न्यायिक प्रक्रिया'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mt-1 font-display">
            {t.howItWorksTitle}
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            {t.howItWorksSubtitle}
          </p>
        </div>

        {/* Process Steps Horizonal/Vertical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Graphic Line (Visible only on desktop screens) */}
          <div className="hidden lg:block absolute top-[62px] left-[15%] right-[15%] h-0.5 bg-gray-100 dark:bg-gray-800 z-0"></div>

          {steps.map((st, idx) => (
            <motion.div
              key={st.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 dark:bg-[#0A2038]/60 p-6 sm:p-8 rounded-2xl border border-gray-150 dark:border-gray-850 shadow-sm hover:shadow-lg transition-all text-left relative z-10 flex flex-col group justify-between"
            >
              <div>
                {/* Upper row: icon & incremental number */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-200/50 dark:border-gray-800/50 mb-6">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#071629] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-white shadow-sm group-hover:scale-105 transition-transform">
                    {st.icon}
                  </div>
                  <span className="text-3xl font-extrabold tracking-tight text-gray-200 dark:text-gray-800 group-hover:text-blue-600/20 dark:group-hover:text-blue-400/20 transition-colors font-mono">
                    {st.num}
                  </span>
                </div>

                {/* Step Description */}
                <h3 className="text-md sm:text-lg font-bold text-gray-900 dark:text-white">
                  {st.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>

              {/* Mini action tag */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-850 text-[10px] font-bold text-gray-400 tracking-wider font-mono">
                {lang === 'EN' ? `STAGE ${idx + 1}` : `चरण ${idx + 1}`}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner bottom */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const element = document.getElementById('simulator');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/10 cursor-pointer active:scale-95 transition-transform"
          >
            <span>{lang === 'EN' ? 'Solve a Dispute Now' : 'आज ही अपना विवाद हल करें'}</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
