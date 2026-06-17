import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Send, Copy, Check, RotateCcw, FileText, Map, ShieldAlert, 
  ArrowRight, ExternalLink, MessageSquare, Briefcase, Home, ShoppingCart, 
  Smartphone, ShieldCheck, Scale 
} from 'lucide-react';
import { presetCases } from '../data/landingData';
import { translations, Language } from '../data/translations';
import { PresetCase } from '../types';

interface SimulatorProps {
  lang: Language;
}

export default function Simulator({ lang }: SimulatorProps) {
  const t = translations[lang];
  const [selectedPresetId, setSelectedPresetId] = useState<string>('tenancy-deposit');
  const [customInput, setCustomInput] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisPhase, setAnalysisPhase] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<PresetCase | null>(null);
  const [activeTab, setActiveTab] = useState<'roadmap' | 'notice' | 'rights'>('roadmap');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const activePreset = presetCases.find(c => c.id === selectedPresetId) || presetCases[0];

  const handlePresetSelect = (id: string) => {
    setSelectedPresetId(id);
    const item = presetCases.find(c => c.id === id);
    if (item) {
      setCustomInput(item.problemText);
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    const phases = [
      lang === 'EN' ? 'Scanning Bharatiya Nyaya Sanhita (BNS) & specific Bare Acts...' : 'भारतीय नागरिक सुरक्षा संहिता (BNS) और विशिष्ट कानूनों की समीक्षा जारी...',
      lang === 'EN' ? 'Analyzing Supreme Court benchmarks & consumer dispute precedents...' : 'सुप्रीम कोर्ट के निर्णयों और प्रासंगिक मामलों का मिलान जारी...',
      lang === 'EN' ? 'Structuring strategic out-of-court dispute resolution paths...' : 'अदालत के बाहर विवाद सुलझाने की कार्यनीति तैयार की जा रही है...',
      lang === 'EN' ? 'Synthesizing customized digital Legal Notice Draft...' : 'तुरंत प्रेषण योग्य कस्टम कानूनी नोटिस तैयार की जा रही है...'
    ];

    let currentPhaseIdx = 0;
    setAnalysisPhase(phases[currentPhaseIdx]);

    const interval = setInterval(() => {
      currentPhaseIdx++;
      if (currentPhaseIdx < phases.length) {
        setAnalysisPhase(phases[currentPhaseIdx]);
      } else {
        clearInterval(interval);
        
        // Dynamic analysis rule engine matching keywords
        let matchedCase = activePreset;
        const text = customInput.toLowerCase();

        if (text) {
          if (text.includes('landlord') || text.includes('tenant') || text.includes('rent') || text.includes('deposit') || text.includes('owner') || text.includes('makan')) {
            matchedCase = presetCases.find(c => c.id === 'tenancy-deposit') || activePreset;
          } else if (text.includes('freelance') || text.includes('invoice') || text.includes('client') || text.includes('pay') || text.includes('salary') || text.includes('boss') || text.includes('work') || text.includes('unpaid')) {
            matchedCase = presetCases.find(c => c.id === 'freelancer-unpaid') || activePreset;
          } else if (text.includes('phone') || text.includes('mobile') || text.includes('ecommerce') || text.includes('product') || text.includes('amazon') || text.includes('flipkart') || text.includes('defect') || text.includes('refund') || text.includes('damaged') || text.includes('return')) {
            matchedCase = presetCases.find(c => c.id === 'consumer-defective') || activePreset;
          } else if (text.includes('rera') || text.includes('flat') || text.includes('builder') || text.includes('apartment') || text.includes('possession') || text.includes('noida') || text.includes('developer') || text.includes('delay')) {
            matchedCase = presetCases.find(c => c.id === 'rera-delay') || activePreset;
          } else if (text.includes('upi') || text.includes('scam') || text.includes('scammed') || text.includes('fraud') || text.includes('kyc') || text.includes('bank') || text.includes('card') || text.includes('hacked') || text.includes('link') || text.includes('lost')) {
            matchedCase = presetCases.find(c => c.id === 'cyber-fraud') || activePreset;
          } else {
            // Generates a general custom-fit preset case
            matchedCase = {
              ...activePreset,
              title: lang === 'EN' ? 'Custom Consumer dispute Representation' : 'कस्टम उपभोक्ता अधिकार संरक्षण रणनीति',
              problemText: customInput,
              relevantLaw: lang === 'EN' ? 'Indian Contract Act 1872, Sec 73 & Consumer Protection Act 2019' : 'भारतीय अनुबंध अधिनियम १८७२ और उपभोक्ता संरक्षण कानून २०१९',
              legalRights: [
                lang === 'EN' ? 'Right to be Protected against unfair representations and trade practices.' : 'अनुचित व्यापार प्रथाओं और शोषण के खिलाफ सुरक्षा का अधिकार।',
                lang === 'EN' ? 'Right to seek compensation under Section 11 of Contract Indemnities.' : 'संविदात्मक नुकसान के लिए कानूनी रूप से क्षतिपूर्ति और मुआवजे की मांग का अधिकार।'
              ],
              actionSteps: [
                {
                  title: lang === 'EN' ? 'Draft legal warning communication' : 'एक औपचारिक चेतावनी नोटिस भेजें',
                  description: lang === 'EN' ? 'Draft and send a formal 15-day notice detailing the commercial breach of covenant.' : 'अनुबंध के उल्लंघन का ब्योरा देते हुए दूसरा पक्ष को १५ दिनों का कानूनी नोटिस भेजें।',
                  authority: 'Legal Draft'
                },
                {
                  title: lang === 'EN' ? 'File Online Mediation relative dispute' : 'राष्ट्रीय लोक अदालत/मध्यस्थता केंद्र',
                  description: lang === 'EN' ? 'File in the local Consumer Forum via e-Daakhil or look for registered mediators.' : 'ई-दाखिल (e-Daakhil) पोर्टल पर जाकर ऑनलाइन शिकायत दर्ज करें।',
                  authority: 'Mediator Platform'
                }
              ],
              noticeTemplate: {
                subject: lang === 'EN' ? 'DEMAND NOTICE: Notice of commercial settlement and request for resolution' : 'क़ानूनी विवाद नोटिस: अनुबंध के उल्लंघन और समाधान हेतु मांग पत्र',
                body: `To,
[Recipient Name],
[Recipient Address]

Subject: Notice for settlement of outstanding commercial issues concerning [Short Problem Summary].

This is to formally call upon you regarding our business transaction on [Date] regarding the following matter:
"${customInput.slice(0, 150)}..."

Please note that your failure to settle this matter is in violation of the principles of contract and Indian Commercial Dispute parameters. It constitutes a breach of mutual representations under the Indian Contract Act.

I hereby request you to contact me and resolve this matter within 15 days of this letter, failing which I will escalate the dispute to the appropriate District Commission/Arbiter at your cost and risk.

Warm regards,
[My Name]`
              }
            };
          }
        }

        setIsAnalyzing(false);
        setAnalysisResult(matchedCase);
        setActiveTab('roadmap');

        // Scroll to results cleanly
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }, 1000);
  };

  const copyNoticeToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Tenancy & Rent': return <Home className="h-4.5 w-4.5" />;
      case 'Freelancer & Business': return <Briefcase className="h-4.5 w-4.5" />;
      case 'Consumer dispute': return <ShoppingCart className="h-4.5 w-4.5" />;
      case 'Real Estate / Property': return <Scale className="h-4.5 w-4.5 text-amber-500" />;
      case 'Cyber Safety': return <ShieldAlert className="h-4.5 w-4.5" />;
      default: return <MessageSquare className="h-4.5 w-4.5" />;
    }
  };

  return (
    <section id="simulator" className="py-20 bg-[#F8FAFC] dark:bg-[#06152B] relative overflow-hidden transition-colors duration-200">
      
      {/* Dynamic Background Element */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-blue-500/5 dark:bg-blue-400/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 mb-4 scale-95 uppercase font-mono text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-amber-500/20" />
            <span>{t.tryAssistant}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-display">
            {lang === 'EN' ? 'AI-Powered Legal Resolution Sandbox' : 'AI-संचालित कानूनी समाधान पोर्टल'}
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            {lang === 'EN' 
              ? 'Select an active pre-designed Indian dispute below or type your custom problem. Watch Shujhav generate immediate legal analysis, citations, and draft legal documents.' 
              : 'नीचे दिए गए किसी भी सामान्य भारतीय विवाद का चयन करें या अपनी विशिष्ट समस्या लिखें। समाधान पोर्टल तुरंत कानूनी विश्लेषण, धाराएं और कानूनी नोटिस तैयार कर देगा।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Simulator Input Setup Panel - Left (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0A2038] shadow-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>{lang === 'EN' ? 'Configure Legal Scenario' : 'कानूनी समस्या दर्ज करें'}</span>
              </h3>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                {t.selectScenario}
              </p>

              {/* Preset Scenario Tabs Scroll */}
              <div id="scenarios-carousel" className="space-y-2 max-h-[260px] overflow-y-auto pr-1 no-scrollbar mb-6">
                {presetCases.map(c => {
                  const isActive = selectedPresetId === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => handlePresetSelect(c.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-xl border text-left transition-all ${
                        isActive
                          ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 shadow-md ring-1 ring-blue-400/30'
                          : 'border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:bg-gray-100 dark:hover:bg-gray-850'
                      }`}
                    >
                      <div className={`p-2 rounded-lg text-xs flex-shrink-0 ${
                        isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                        {getCategoryIcon(c.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-gray-400 font-mono tracking-wider uppercase">
                          {c.category === 'Consumer dispute' ? (lang === 'EN' ? 'Consumer Protection' : 'उपभोक्ता संरक्षण') : c.category}
                        </div>
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate mt-0.5">
                          {c.title}
                        </h4>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Custom Input Field with icon */}
              <div id="custom-dispute-area" className="relative mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">
                  {lang === 'EN' ? 'Describe Customized Facts' : 'अपनी विशिष्ट समस्या विस्तार से लिखें'}
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    value={customInput}
                    onChange={(e) => {
                      setCustomInput(e.target.value);
                      setSelectedPresetId(''); // clear preset highlight on custom typing
                    }}
                    placeholder={t.enterCustom}
                    className="w-full text-sm p-4 pr-10 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#07162C] text-gray-800 dark:text-gray-200 font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                  <div className="absolute right-3 bottom-4 text-gray-400 pointer-events-none">
                    <Send className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={startAnalysis}
                disabled={isAnalyzing || (!customInput && !selectedPresetId)}
                className="w-full mt-5 py-4 rounded-xl text-sm font-bold text-white navy-gradient hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:active:scale-100 transition-all flex items-center justify-center space-x-2.5 cursor-pointer shadow-lg"
              >
                <Sparkles className="h-4.5 w-4.5 text-amber-300 fill-amber-300/10" />
                <span>{t.analyzeBtn}</span>
              </button>
            </div>
          </div>

          {/* Simulator Processing & Output Screen Area - Right (Col 7) */}
          <div className="lg:col-span-7 min-h-[500px] flex flex-col">
            
            {/* Loading Phase Widget */}
            {isAnalyzing && (
              <div className="flex-1 bg-white dark:bg-[#0A2038] rounded-2xl border border-gray-150 dark:border-gray-850 p-8 flex flex-col items-center justify-center text-center shadow-xl">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-blue-500/25 border-t-blue-600 animate-spin"></div>
                  <Scale className="h-6 w-6 text-indigo-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 animate-pulse">
                  {t.analyzingText}
                </h4>
                <p className="text-xs text-gray-400 font-mono tracking-widest max-w-sm uppercase">
                  {analysisPhase}
                </p>
              </div>
            )}

            {/* Default State - Prompting Analysis */}
            {!isAnalyzing && !analysisResult && (
              <div className="flex-1 bg-gray-50/50 dark:bg-[#0A2038]/30 rounded-2xl border-2 border-dashed border-gray-250 dark:border-gray-800 p-10 flex flex-col items-center justify-center text-center">
                <div className="p-4 rounded-2xl bg-blue-100/50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 mb-4 animate-bounce">
                  <Scale className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                  {lang === 'EN' ? 'Ready for Legal Scrutiny' : 'कृत्रिम बुद्धिमत्ता विश्लेषण के लिए तैयार'}
                </h4>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-md">
                  {lang === 'EN' 
                    ? 'Use the panels on the left to specify your litigation scenario, then click "Analyze" to run the automated guidance generator.'
                    : 'बाईं ओर दी गई विसंगतियों में से किसी एक को चुनें या स्वयं वर्णन करें, फिर ऐक्शन प्लान तैयार करने के लिए सबमिट करें।'}
                </p>
                <button
                  onClick={() => handlePresetSelect('tenancy-deposit')}
                  className="mt-6 inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  <span>{lang === 'EN' ? 'Load Tenancy Case' : 'किराएदारी मामला लोड करें'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            {/* Real Output Screen Display tabs and contents */}
            {!isAnalyzing && analysisResult && (
              <div
                ref={resultRef}
                className="flex-1 bg-white dark:bg-[#0A2038] rounded-2xl border border-gray-250 dark:border-gray-850 shadow-2xl overflow-hidden flex flex-col text-left"
              >
                {/* Header of results */}
                <div className="p-5 bg-gray-50 dark:bg-[#08182E] border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider font-extrabold uppercase text-amber-500">
                      {lang === 'EN' ? 'Automated Judicial Formulation' : 'न्यायिक रिपोर्ट विश्लेषण'}
                    </span>
                    <h3 className="text-md sm:text-lg font-bold text-gray-900 dark:text-white flex items-center space-x-2 mt-0.5 font-display">
                      <ShieldCheck className="h-5 w-5 text-emerald-500" />
                      <span>{analysisResult.title}</span>
                    </h3>
                  </div>
                  
                  {/* Re-run button */}
                  <button
                    onClick={() => {
                      setAnalysisResult(null);
                      setCustomInput('');
                    }}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ml-auto sm:ml-0"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>{lang === 'EN' ? 'Clear' : 'साफ़ करें'}</span>
                  </button>
                </div>

                {/* Analytical Navigation Tabs */}
                <div className="flex border-b border-gray-150 dark:border-gray-800 bg-gray-50/50 dark:bg-[#08182E]/30 px-4">
                  <button
                    onClick={() => setActiveTab('roadmap')}
                    className={`flex items-center space-x-1.5 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                      activeTab === 'roadmap'
                        ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Map className="h-3.5 w-3.5" />
                    <span>{lang === 'EN' ? 'Action Roadmap' : 'ऐक्शन रोडमैप'}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('notice')}
                    className={`flex items-center space-x-1.5 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                      activeTab === 'notice'
                        ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>{lang === 'EN' ? 'Demand Legal Notice' : 'कानूनी मांग पत्र (Notice)'}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('rights')}
                    className={`flex items-center space-x-1.5 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                      activeTab === 'rights'
                        ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Scale className="h-3.5 w-3.5" />
                    <span>{t.rightsLabel}</span>
                  </button>
                </div>

                {/* Tab content area container */}
                <div className="p-6 flex-1 overflow-y-auto max-h-[460px] no-scrollbar">
                  
                  {/* 1. Roadmap Tab */}
                  {activeTab === 'roadmap' && (
                    <div className="space-y-6">
                      <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/10 border border-blue-100 dark:border-blue-900/30">
                        <div className="text-[10px] font-mono tracking-widest font-bold uppercase text-blue-600 dark:text-blue-400 mb-1">
                          {t.relevantActLabel}
                        </div>
                        <p className="text-sm font-bold text-gray-800 dark:text-white leading-relaxed">
                          {analysisResult.relevantLaw}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 font-mono">
                          {t.stepLabel}
                        </h4>
                        <div className="relative border-l border-gray-150 dark:border-gray-800 ml-3 pl-6 space-y-6">
                          {analysisResult.actionSteps.map((step, idx) => (
                            <div key={idx} className="relative">
                              {/* Step circle bullet */}
                              <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-blue-600 text-white border-2 border-white dark:border-[#0A2038] flex items-center justify-center text-[8px] font-bold">
                                {idx + 1}
                              </div>
                              <div className="text-left">
                                <div className="flex items-center space-x-2">
                                  <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                    {step.title}
                                  </h5>
                                  {step.authority && (
                                    <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-900/35 text-[9px] font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-tight">
                                      {step.authority}
                                    </span>
                                  )}
                                </div>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. Notice Draft Tab */}
                  {activeTab === 'notice' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                          {t.noticeHeader}
                        </span>
                        
                        {/* Copy button */}
                        <button
                          onClick={() => copyNoticeToClipboard(analysisResult.noticeTemplate.body)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                            isCopied
                              ? 'bg-emerald-600 text-white'
                              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                          }`}
                        >
                          {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                          <span>{isCopied ? t.noticeCopied : t.copyNotice}</span>
                        </button>
                      </div>

                      {/* Code/Text box */}
                      <div className="relative rounded-xl border border-gray-200 dark:border-gray-850 bg-gray-50 dark:bg-[#071629] p-5 font-mono text-[11px] sm:text-xs text-gray-700 dark:text-gray-300 overflow-x-auto max-h-[320px] whitespace-pre-wrap text-left leading-relaxed">
                        <div className="font-sans font-bold text-xs border-b border-gray-200 dark:border-gray-800 pb-2 mb-3 text-gray-800 dark:text-white">
                          SUBJECT: {analysisResult.noticeTemplate.subject}
                        </div>
                        {analysisResult.noticeTemplate.body}
                      </div>

                      <p className="text-[10px] text-gray-400 text-center flex items-center justify-center space-x-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                        <span>{lang === 'EN' ? 'Fully editable under legal notification guidelines Section 80 CPC.' : 'भारतीय संविदा मानदंडों के तहत मान्य नोटिस संरचना।'}</span>
                      </p>
                    </div>
                  )}

                  {/* 3. Rights Section */}
                  {activeTab === 'rights' && (
                    <div className="space-y-4">
                      <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 font-mono mb-2">
                        {lang === 'EN' ? 'Statutory Code Explanations' : 'संवैधानिक नियम विवरण'}
                      </h4>
                      <div className="space-y-4">
                        {analysisResult.legalRights.map((right, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl border border-gray-150 dark:border-gray-850 bg-gray-50/50 dark:bg-[#08182D]/40 flex items-start space-x-3.5 text-left"
                          >
                            <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 flex-shrink-0">
                              <Scale className="h-4.5 w-4.5 text-blue-500" />
                            </div>
                            <div>
                              <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                {lang === 'EN' ? `Applicable Safeguard #${idx + 1}` : `संवैधानिक सुरक्षा अधिकार #${idx + 1}`}
                              </h5>
                              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                {right}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Interactive Portal Guide Button */}
                <div className="p-4 bg-gray-50 dark:bg-[#08182E] border-t border-gray-150 dark:border-gray-800 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span>{lang === 'EN' ? 'Out-of-court mediation suggested first.' : 'अदालत के बाहर मध्यस्थता को प्राथमिकता।'}</span>
                  </div>
                  <button
                    onClick={() => {
                      const element = document.getElementById('pricing');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center space-x-1 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline cursor-pointer"
                  >
                    <span>{lang === 'EN' ? 'Inquire verified expert listings' : 'सत्यापित वकील सहायता जांचें'}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
