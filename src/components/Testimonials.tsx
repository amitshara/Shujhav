import { motion } from 'motion/react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { testimonials } from '../data/landingData';
import { Language } from '../data/translations';

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-[#07152B] transition-colors duration-200 border-t border-gray-150 dark:border-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500">
            {lang === 'EN' ? 'SUCCESS STORIES OF OUT-OF-COURT SETTLEMENTS' : 'समाधान की सफलता की कहानियां'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mt-1 font-display">
            {lang === 'EN' ? 'Trusted by Over 25,000+ Indian Citizens' : '२५,००० से अधिक भारतीय नागरिकों का विश्वास'}
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            {lang === 'EN'
              ? 'Read how freelancers, tenants, and small consumer shopkeepers saved lakhs in litigation dues.'
              : 'पढ़ें कि कैसे फ्रीलांसरों, किराएदारों और छोटे दुकानदारों ने अदालती फीस बचाकर कानूनी शिकायतों का त्वरित समाधान पाया।'}
          </p>
        </div>

        {/* Testimonials Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-white dark:bg-[#0A2038] rounded-3xl p-6 sm:p-8 border border-gray-150 dark:border-gray-850 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all flex flex-col justify-between text-left group"
            >
              {/* Card visual elements */}
              <div className="absolute top-6 right-8 text-gray-150 dark:text-gray-800 pointer-events-none group-hover:scale-105 transition-transform">
                <Quote className="h-10 w-10 text-blue-500/10 fill-current" />
              </div>

              <div>
                {/* Rating stars */}
                <div id="testimonial-stars" className="flex space-x-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-current text-amber-400 text-amber-500" />
                  ))}
                </div>

                {/* Content body review */}
                <p className="text-sm text-gray-650 dark:text-gray-300 leading-relaxed font-sans mb-6 italic">
                  "{t.content}"
                </p>
              </div>

              {/* Persona and context details */}
              <div className="flex items-center space-x-4 border-t border-gray-100 dark:border-gray-850 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 object-cover"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-gray-900 dark:text-white flex items-center space-x-1.5">
                    <span>{t.name}</span>
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  </h4>
                  <p className="text-[11px] text-gray-400 font-medium">
                    {t.role} • {t.location}
                  </p>
                  
                  {/* Case Tag indicator */}
                  <span className="inline-flex mt-1.5 text-[10px] px-2 py-0.5 rounded-full font-mono bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-105 dark:border-blue-900/30 font-bold uppercase">
                    {t.caseType}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
