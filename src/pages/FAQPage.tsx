import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { faqs } from '../data/mockData';

const FAQPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const categories = Array.from(new Set(faqs.map(f => f.category)));

  return (
    <>
      <Helmet>
        <title>FAQ | Generational Life Changers</title>
        <meta name="description" content="Frequently asked questions about donating, volunteering, and partnering with Nyamedua Foundation." />
        <meta property="og:title" content="FAQ | Nyamedua Foundation" />
        <meta property="og:description" content="Find answers to common questions about our healthcare programs." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              Find answers to common questions about our programs, donations, volunteering, and partnerships.
            </motion.p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-display font-bold text-primary mb-6">{category}</h2>
                <div className="space-y-4">
                  {faqs.filter(f => f.category === category).map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-background rounded-2xl border border-primary/10 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
                      >
                        <span className="text-primary font-semibold pr-4">{faq.question}</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                            openId === faq.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {openId === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-secondary leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border-2 border-accent/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Still Have Questions?</h2>
              <p className="text-secondary text-lg max-w-xl mx-auto mb-8">
                Our team is here to help. Reach out to us and we will get back to you within 24 hours.
              </p>
              <a
                href="mailto:info@nyamedua.org"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default FAQPage;
