import { motion } from 'motion/react';
import { 
  Sparkles, Scale, FileText, ShoppingCart, ShieldAlert, BookOpen, 
  Smile, ShieldCheck, HeartHandshake, EyeOff, Zap, ZapOff 
} from 'lucide-react';
import { translations, Language } from '../data/translations';

interface FeaturesProps {
  lang: Language;
}

export default function Features({ lang }: FeaturesProps) {
  const t = translations[lang];

  const featuresList = [
    {
      id: 1,
      title: t.feat1,
      desc: t.feat1Desc,
      icon: <Sparkles className="h-6 w-6 text-blue-500" />,
      color: 'from-blue-500/10 to-indigo-500/10',
      tag: 'AI CHAT'
    },
    {
      id: 2,
      title: t.feat2,
      desc: t.feat2Desc,
      icon: <Scale className="h-6 w-6 text-amber-500" />,
      color: 'from-amber-500/10 to-orange-500/10',
      tag: 'STRATEGY'
    },
    {
      id: 3,
      title: t.feat3,
      desc: t.feat3Desc,
      icon: <FileText className="h-6 w-6 text-emerald-500" />,
      color: 'from-emerald-500/10 to-teal-500/10',
      tag: 'PREVIEWS'
    },
    {
      id: 4,
      title: t.feat4,
      desc: t.feat4Desc,
      icon: <ShoppingCart className="h-6 w-6 text-indigo-500" />,
      color: 'from-indigo-500/10 to-purple-500/10',
      tag: 'E-DAAKHIL'
    },
    {
      id: 5,
      title: t.feat5,
      desc: t.feat5Desc,
      icon: <ShieldAlert className="h-6 w-6 text-rose-500 animate-pulse" />,
      color: 'from-rose-500/10 to-red-500/10',
      tag: '1930 HELPLINE'
    },
    {
      id: 6,
      title: t.feat6,
      desc: t.feat6Desc,
      icon: <BookOpen className="h-6 w-6 text-cyan-500" />,
      color: 'from-cyan-500/10 to-blue-500/10',
      tag: 'BARE ACTS'
    }
  ];

  const whyChooseList = [
    {
      title: lang === 'EN' ? 'Simple Language' : 'सरल भाषा',
      desc: lang === 'EN' ? 'No complex "legalese". We explain judicial articles in simplified Hindi, English, or regional summaries.' : 'अदालती पेचीदगियों से मुक्त सरल बोलचाल की भाषा में व्याख्या ताकि प्रत्येक आम नागरिक समझ सके।',
      icon: <Smile className="h-5 w-5 text-emerald-500" />
    },
    {
      title: lang === 'EN' ? 'Fast Responses' : 'त्वरित उत्तर',
      desc: lang === 'EN' ? 'Get legal consultation roadmaps and draft templates in less than 30 seconds instead of days.' : 'वकीलों और परामर्शदाताओं के चक्कर काटे बिना मात्र ३० सेकंड में व्यापक रणनीतिक ड्राफ्ट प्राप्त करें।',
      icon: <Zap className="h-5 w-5 text-amber-500" />
    },
    {
      title: lang === 'EN' ? 'Affordable Access' : 'सरल और किफायती',
      desc: lang === 'EN' ? 'Access fundamental information and draft notices for free, eliminating hefty consultation pre-charges.' : 'मूलभूत अधिकार और मांग पत्र मुफ्त में ऑनलाइन जनरेट करें जिससे प्रारंभिक फीस से मुक्ति मिले।',
      icon: <HeartHandshake className="h-5 w-5 text-indigo-500" />
    },
    {
      title: lang === 'EN' ? 'Privacy First' : 'गोपनीयता सर्वोच्च',
      desc: lang === 'EN' ? 'Completely private, encrypted server architecture. We do not resell case profiles or chat transcripts.' : 'डिजिटल व्यक्तिगत डेटा संरक्षण कानून के अनुरूप पूर्णतः निजी और एन्क्रिप्टेड सुरक्षा ढांचा।',
      icon: <EyeOff className="h-5 w-5 text-rose-500" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-[#07152B] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Features Subsection */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-display">
            {t.featuresTitle}
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            {t.featuresSubtitle}
          </p>
        </div>

        {/* Features Card Complex Grid */}
        <div id="features-bento-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((f, idx) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white dark:bg-[#0A2038] rounded-2xl p-6 sm:p-8 border border-gray-150 dark:border-gray-850 shadow-md hover:shadow-xl dark:hover:border-blue-900/50 hover:scale-[1.01] transition-all flex flex-col text-left group"
            >
              {/* Header block with visual icon */}
              <div className="flex items-center justify-between mb-5">
                <div className={`p-3 rounded-xl bg-gradient-to-tr ${f.color} shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                  {f.icon}
                </div>
                <span className="text-[9px] font-bold font-mono tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/40 px-2.5 py-1 rounded-full border border-blue-100/50 dark:border-blue-900/30">
                  {f.tag}
                </span>
              </div>

              {/* Text content elements */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-grow">
                {f.desc}
              </p>

              {/* Action indicator link */}
              <div
                onClick={() => {
                  const element = document.getElementById('simulator');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="mt-6 flex items-center space-x-1 font-mono text-xs font-bold text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1.5 transition-all cursor-pointer"
              >
                <span>{lang === 'EN' ? 'TRY PORTAL' : 'पोर्टल खोलें'}</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Shujhav - Grid Section */}
        <div id="why-shujhav" className="mt-28 py-12 border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500">
              {lang === 'EN' ? 'DEMOCRATIZING CITIZENS JUSTICE' : 'आम नागरिक के हित में'}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white font-display mt-1">
              {t.whyUsTitle}
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {t.whyUsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseList.map((wc, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#0A2038]/40 border border-gray-150 dark:border-gray-850 p-6 rounded-2xl shadow-sm text-left flex flex-col hover:shadow-lg transition-all border-l-4 border-l-blue-600"
              >
                <div className="p-2.5 rounded-xl bg-blue-100/55 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 w-11 h-11 flex items-center justify-center mb-5">
                  {wc.icon}
                </div>
                <h4 className="text-md font-bold text-gray-950 dark:text-white">
                  {wc.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {wc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
