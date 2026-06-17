import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Users, Award, ShieldCheck, CheckSquare, Coins } from 'lucide-react';
import { Language } from '../data/translations';

interface TrustSectionProps {
  lang: Language;
}

export default function TrustSection({ lang }: TrustSectionProps) {
  // Simple state counters simulating dynamic counter triggers
  const [counts, setCounts] = useState({ cases: 35, support: 92, security: 100 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ cases: 51, support: 94, security: 100 });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="trust-section" className="py-16 bg-gray-50 dark:bg-[#07172E] border-y border-gray-100 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Narrative / Challenge Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-3">
            {lang === 'EN' ? 'THE SCALE OF THE INDIAN DISPUTE CHALLENGE' : 'भारतीय विवादों की चुनौती का पैमाना'}
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white font-display">
            {lang === 'EN' ? (
              'Empowering Self-Advocacy in a Slow Legal System'
            ) : (
              'धीमी कानूनी व्यवस्था में खुद को सशक्त बनाएं'
            )}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            {lang === 'EN'
              ? 'Court systems are overburdened. Shujhav helps resolve disputes via pre-litigation documents, official portals, or mediation before spending thousands of rupees.'
              : 'अदालतें मुकदमों के बोझ से दबी हैं। सुझाव आपको हजारों रुपये खर्च करने से पहले प्री-लिटिगेशन दस्तावेजों, सरकारी पोर्टलों और मध्यस्थता के जरिए समाधान खोजने में मदद करता है।'}
          </p>
        </div>

        {/* Stats Grid */}
        <div id="stats-counter-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Stat 1 */}
          <div className="bg-white dark:bg-[#0A223C] p-6 sm:p-8 rounded-2xl border border-gray-150 dark:border-gray-850 shadow-md flex items-center space-x-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 h-1 w-full bg-red-500"></div>
            <div className="p-4 rounded-xl bg-red-100/60 dark:bg-red-500/10 text-red-600 dark:text-red-400">
              <ShieldAlert className="h-8 w-8" />
            </div>
            <div className="text-left">
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white font-mono">
                  {counts.cases}M+
                </span>
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                {lang === 'EN' ? 'Pending Indian Court Cases' : 'भारत में लंबित अदालती मामले'}
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {lang === 'EN' ? 'Over 5.1 crore cases stall justice daily.' : '5.1 करोड़ से अधिक मामलों के समाधान में देरी।'}
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white dark:bg-[#0A223C] p-6 sm:p-8 rounded-2xl border border-gray-150 dark:border-gray-850 shadow-md flex items-center space-x-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 h-1 w-full bg-blue-500"></div>
            <div className="p-4 rounded-xl bg-blue-100/60 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Award className="h-8 w-8" />
            </div>
            <div className="text-left">
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white font-mono">
                  {counts.support}%
                </span>
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                {lang === 'EN' ? 'Notice Resolution Rate' : 'नोटिस समाधान सफलता दर'}
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {lang === 'EN' ? 'Disputes settled successfully without a lawsuit.' : 'मुकदमे के बिना 94% विवाद हल हो जाते हैं।'}
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white dark:bg-[#0A223C] p-6 sm:p-8 rounded-2xl border border-gray-150 dark:border-gray-850 shadow-md flex items-center space-x-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 h-1 w-full bg-emerald-500"></div>
            <div className="p-4 rounded-xl bg-emerald-100/60 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div className="text-left">
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white font-mono">
                  {counts.security}%
                </span>
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                {lang === 'EN' ? 'Encrypted Security Policy' : 'एन्क्रिप्टेड सुरक्षित गोपनीयता'}
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {lang === 'EN' ? 'Strict compliance under DPDP Act 2023.' : 'डिजिटल व्यक्तिगत डेटा संरक्षण के पूर्ण मानक।'}
              </p>
            </div>
          </div>

        </div>

        {/* Security & compliance assurance bar */}
        <div id="compliance-banner" className="bg-blue-50/40 dark:bg-blue-950/10 border border-blue-100/50 dark:border-blue-900/30 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between text-left gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400-500">
              <CheckSquare className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800 dark:text-white">
                {lang === 'EN' ? 'Indian Evidence Act Compliant Documents' : 'भारतीय साक्ष्य अधिनियम के तहत मान्य दस्तावेज़'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {lang === 'EN'
                  ? 'All generated letters and document draft logs support statutory representations before arbitration commissions.'
                  : 'मंच पर तैयार सभी विवरण और नोटिस कमीशन के समक्ष कानूनी प्रतिनिधित्व का आधार बन सकते हैं।'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-950/20 px-4 py-2 rounded-xl border border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400-400 text-xs font-bold font-mono">
            <Coins className="h-4 w-4 text-emerald-500" />
            <span>{lang === 'EN' ? 'Save Lakhs in Court Dues' : 'लक्षित वकालत खर्चों में भारी बचत'}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
