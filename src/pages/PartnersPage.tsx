import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom';
import { Handshake, Globe, Users, Lightbulb, ArrowRight, CheckCircle, Building2, Loader2 } from 'lucide-react';
import { useState } from 'react';
// import { partners } from '../data/mockData';
import { submitFormToGoogleSheets } from '../config/googleSheets';

const PartnersPage = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    organizationType: '',
    website: '',
    partnershipType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const result = await submitFormToGoogleSheets('partnership', formData);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.message || 'Failed to submit form. Please try again.');
    }
    setIsLoading(false);
  };

  const partnershipTypes = [
    'Academic Partnership',
    'Corporate Sponsorship',
    'Research Collaboration',
    'Event Sponsorship',
    'In-Kind Contribution',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Partner With Us | Generational Life Changers</title>
        <meta name="description" content="Partner with Nyamedua Foundation to expand access to life-saving healthcare across West Africa." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-medium rounded-full mb-6"
            >
              <Handshake className="w-4 h-4 inline mr-2" />
              Collaboration
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Partner With Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Join us in creating lasting impact through sustainable development initiatives and capacity building programs.
            </motion.p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Partner</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Partnership Benefits
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Collaborating with Nyamedua offers unique opportunities for organizations committed to healthcare equity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Globe,
                  title: 'Global Network',
                  description: 'Connect with international organizations and experts in sustainable development.'
                },
                {
                  icon: Users,
                  title: 'Talent Access',
                  description: 'Engage with healthcare professionals and volunteers serving communities across West Africa.'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'Collaborate on cutting-edge research and innovative sustainable solutions.'
                },
                {
                  icon: Building2,
                  title: 'Brand Visibility',
                  description: 'Showcase your commitment to healthcare equity through our programs and outreach events.'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-secondary text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners Section */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Network</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Current Partners
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                We are proud to collaborate with these esteemed institutions and organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl p-8 text-center border border-primary/5 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="h-20 flex items-center justify-center mb-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                    {partner.type}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-primary mb-2">{partner.name}</h3>
                  <p className="text-secondary text-sm">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Partnership Form Section - Light Green Theme */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-accent/20">
              {!submitted ? (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl font-display font-bold text-primary mb-2">
                      Become a Partner
                    </h2>
                    <p className="text-secondary">
                      Fill out the form below to express your interest in partnering with us.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Organization Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                          value={formData.organizationName}
                          onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                          placeholder="Your organization"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Contact Person *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                          value={formData.contactName}
                          onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                          placeholder="Full name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="contact@organization.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Organization Type</label>
                        <select
                          className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                          value={formData.organizationType}
                          onChange={(e) => setFormData({...formData, organizationType: e.target.value})}
                        >
                          <option value="">Select type</option>
                          <option value="Academic Institution">Academic Institution</option>
                          <option value="Corporate">Corporate</option>
                          <option value="NGO">NGO</option>
                          <option value="Government">Government</option>
                          <option value="International Organization">International Organization</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Website</label>
                        <input
                          type="url"
                          placeholder="https://"
                          className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                          value={formData.website}
                          onChange={(e) => setFormData({...formData, website: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Partnership Type *</label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        value={formData.partnershipType}
                        onChange={(e) => setFormData({...formData, partnershipType: e.target.value})}
                      >
                        <option value="">Select partnership type</option>
                        {partnershipTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your organization and how you would like to partner with us..."
                        className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Partnership Inquiry
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-primary mb-4">
                    Inquiry Received!
                  </h2>
                  <p className="text-secondary max-w-md mx-auto">
                    Thank you for your interest in partnering with Nyamedua. Our team will review your inquiry and contact you within 5 business days.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default PartnersPage;
