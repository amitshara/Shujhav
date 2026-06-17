import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, BookOpen, Clock, Heart, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { clientRights } from '../data/landingData';
import { translations, Language } from '../data/translations';

interface RightsMatrixProps {
  lang: Language;
}

export default function RightsMatrix({ lang }: RightsMatrixProps) {
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedRightId, setExpandedRightId] = useState<string | null>(null);

  const categories = ['All', 'Consumer', 'Tenant', 'Employee', 'Cyber', 'General'];

  const filteredRights = clientRights.filter(right => {
    const matchesCategory = selectedCategory === 'All' || right.category === selectedCategory;
    const matchesSearch = right.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          right.act.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          right.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    if (expandedRightId === id) {
      setExpandedRightId(null);
    } else {
      setExpandedRightId(id);
    }
  };

  return (
    <section id="rights-matrix" className="py-24 bg-gray-50 dark:bg-[#07152B] transition-colors duration-200 border-t border-gray-150 dark:border-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500">
            {lang === 'EN' ? 'KNOWLEDGE IS POWER' : 'ज्ञान ही शक्ति है'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mt-1 font-display">
            {t.rightsTitle}
          </h2>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
            {t.rightsSubtitle}
          </p>
        </div>

        {/* Filter and Search Bar Row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 mb-10">
          
          {/* Categories Tab selector */}
          <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar bg-gray-100 dark:bg-gray-800 rounded-2xl p-1.5 border border-gray-200 dark:border-gray-700">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {cat === 'All' ? (lang === 'EN' ? 'All Rights' : 'सभी अधिकार') : cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative max-w-sm w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'EN' ? 'Search laws, acts, or cases...' : 'अधिनियम, धाराएं खोजें...'}
              className="w-full text-xs sm:text-sm pl-9 pr-4 py-3 rounded-2xl border border-gray-250 dark:border-gray-800 bg-white dark:bg-[#0A2038] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <div className="absolute left-3 top-3.5 text-gray-400">
              <Search className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Grid display cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredRights.map((right) => {
              const isExpanded = expandedRightId === right.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={right.id}
                  className="bg-white dark:bg-[#0A2038] rounded-2xl border border-gray-150 dark:border-gray-850 p-6 shadow-md hover:shadow-lg transition-all text-left flex flex-col justify-between"
                >
                  <div>
                    {/* Category tag & exact reference act */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded bg-blue-100/60 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 text-[10px] font-bold tracking-wider font-mono">
                        {right.category.toUpperCase()} RIGHT
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">
                        {right.act}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-md sm:text-lg font-bold text-gray-900 dark:text-white">
                      {right.title}
                    </h3>
                    
                    {/* Summary short description */}
                    <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {right.summary}
                    </p>

                    {/* Expandable legal provision text block */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-[#071629] p-3 rounded-lg leading-relaxed font-mono whitespace-pre-wrap"
                      >
                        <div className="font-sans font-bold text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-1.5 flex items-center space-x-1">
                          <BookOpen className="h-3.5 w-3.5" />
                          <span>Detailed Provision Summary</span>
                        </div>
                        {right.fullRightText}
                      </motion.div>
                    )}
                  </div>

                  {/* Expand button toggle */}
                  <button
                    onClick={() => toggleExpand(right.id)}
                    className="mt-6 flex items-center justify-between font-mono text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 hover:underline cursor-pointer pt-4 border-t border-gray-100 dark:border-gray-850"
                  >
                    <span>{isExpanded ? (lang === 'EN' ? 'COLLAPSE LAW' : 'कानून समेटें') : (lang === 'EN' ? 'EXPAND ACT DETAILS' : 'धारा विवरण खोलें')}</span>
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredRights.length === 0 && (
            <div className="col-span-full py-16 text-center text-gray-500 dark:text-gray-400">
              {lang === 'EN' ? 'No statutory guides found matching your query.' : 'आपकी खोज के अनुरूप कोई धारा नहीं मिली।'}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
