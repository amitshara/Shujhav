import { useState, FormEvent } from 'react';
import { Scale, Mail, ShieldCheck, Twitter, Linkedin, CheckCircle } from 'lucide-react';
import { translations, Language } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="footer-section" className="bg-[#040E1B] text-gray-400 border-t border-gray-900 transition-colors duration-200">
      
      {/* Upper newsletter bar and links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-gray-900 pb-12 mb-12">
          
          {/* Brand Col (Col 4) */}
          <div className="lg:col-span-4 text-left space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="p-2 rounded-xl bg-blue-600 text-white">
                <Scale className="h-5 w-5 text-yellow-300" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                {t.brandName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed">
              {lang === 'EN' 
                ? 'Empowering Indian citizens, MSMEs, tenants, and creators with immediate, plain-language legal clarity and actionable notice templates.'
                : 'भारतीय नागरिकों, स्टार्टअप्स, किराएदारों और रचनाकारों को त्वरित, सरल भाषा में कानूनी स्पष्टता और नोटिस ड्राफ्ट के साथ सशक्त बनाना।'}
            </p>
            
            {/* Social icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                title="Twitter Link Representation"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                title="Linkedin Link Representation"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Nav Links Col (Col 4) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider font-extrabold text-white mb-4">
                {lang === 'EN' ? 'RESOURCES' : 'संसाधन'}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors cursor-pointer text-left">
                    {lang === 'EN' ? 'Features Catalog' : 'सुविधाएँ Catalog'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('simulator')} className="hover:text-white transition-colors cursor-pointer text-left">
                    {lang === 'EN' ? 'AI Legal Portal' : 'AI क़ानूनी पोर्टल'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('rights-matrix')} className="hover:text-white transition-colors cursor-pointer text-left">
                    {lang === 'EN' ? 'Citizens Rights Matrix' : 'नागरिक अधिकार मैट्रिक्स'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors cursor-pointer text-left">
                    {lang === 'EN' ? 'Pricing Options' : 'मूल्य निर्धारण विकल्प'}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider font-extrabold text-white mb-4">
                {lang === 'EN' ? 'COMPLIANCE' : 'अनुपालन'}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#privacy" className="hover:text-white transition-colors">
                    {lang === 'EN' ? 'Privacy Policy' : 'गोपनीयता नीति'}
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-white transition-colors">
                    {lang === 'EN' ? 'Terms & Services' : 'नियम और शर्तें'}
                  </a>
                </li>
                <li>
                  <a href="#disclaimer" className="hover:text-white transition-colors">
                    {lang === 'EN' ? 'Bar Council Clause' : 'बार काउंसिल नियम'}
                  </a>
                </li>
                <li className="text-[11px] text-emerald-500 font-mono font-bold uppercase tracking-tight flex items-center space-x-1">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>DPDP 2023 Compliant</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Box (Col 4) */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider font-extrabold text-white mb-1">
              {lang === 'EN' ? 'NEWSLETTER CITIZENS REPORT' : 'नागरिक अधिकार बुलेटिन'}
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              {lang === 'EN' 
                ? 'Receive a monthly summary of shifts in Indian judicial acts, consumer helpline advice, and BNS provisions directly in simple language.'
                : 'भारतीय कानूनों में होने वाले बदलावों, उपभोक्ता सलाहों और सुरक्षा मानकों की समीक्षा सीधे सरल भाषा में प्राप्त करें।'}
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === 'EN' ? 'sharma@gmail.com' : 'अपना ईमेल ईमेल लिखें...'}
                  className="w-full text-xs sm:text-sm pl-4 pr-24 py-3 rounded-xl border border-gray-900 bg-gray-950 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                  disabled={isSubscribed}
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="absolute right-1 top-1 bottom-1 px-4 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
                >
                  {isSubscribed ? 'Subscribed' : (lang === 'EN' ? 'Join Bill' : 'शामिल हों')}
                </button>
              </div>
            </form>

            {isSubscribed && (
              <div className="flex items-center space-x-1.5 text-xs text-emerald-500 bg-emerald-950/20 border border-emerald-900/30 p-2 rounded-lg animate-pulse">
                <CheckCircle className="h-4 w-4" />
                <span>{lang === 'EN' ? 'Successfully added to newsletter registry.' : 'सफलतापूर्वक ईमेल जोड लिया गया है।'}</span>
              </div>
            )}
          </div>

        </div>

        {/* Lower disclaimer - Critical Indian Law compliance */}
        <div id="disclaimer" className="text-[10px] sm:text-[11px] text-gray-650 text-left border-b border-gray-900 pb-10 mb-10 leading-relaxed space-y-2.5">
          <p className="font-bold text-gray-500 uppercase tracking-widest font-mono">
            {lang === 'EN' ? 'COMPLIANCE NOTICE & RESPONSIBILITY DISCLAIMER' : 'अनुपालन सूचना और दायित्व सीमा अस्वीकरण'}
          </p>
          <p className="font-sans">
            {t.disclaimer}
          </p>
        </div>

        {/* Brand Copyright and credentials */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-left text-[11px] text-gray-600 gap-4">
          <div>
            {t.footerCopyright}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-gray-500 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{lang === 'EN' ? 'Designed for Bharat | HQ: Bengaluru, India' : 'HQ: बेंगलुरु, भारत'}</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
