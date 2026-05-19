import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, Heart, Lightbulb, Clock, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { volunteerOpportunities } from '../data/mockData';
import { submitFormToGoogleSheets } from '../config/googleSheets';

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    expertise: '',
    opportunity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const result = await submitFormToGoogleSheets('volunteer', formData);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.message || 'Failed to submit form. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Volunteer With Us | Generational Life Changers</title>
        <meta name="description" content="Join Nyamedua Foundation as a volunteer and help deliver life-saving healthcare to communities across West Africa." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-medium rounded-full mb-6"
            >
              <Users className="w-4 h-4 inline mr-2" />
              Join Our Team
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Become a Volunteer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Contribute your skills and passion to drive sustainable development and capacity building in the built environment sector.
            </motion.p>
          </div>
        </section>

        {/* Why Volunteer Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Volunteer</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Make an Impact
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Volunteering with NYANEX offers unique opportunities to contribute to meaningful projects while developing your skills.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Meaningful Impact',
                  description: 'Contribute to projects that create lasting positive change in communities and the built environment.'
                },
                {
                  icon: Lightbulb,
                  title: 'Skill Development',
                  description: 'Gain hands-on experience and develop new skills in sustainable development and project management.'
                },
                {
                  icon: Users,
                  title: 'Network Building',
                  description: 'Connect with like-minded professionals, experts, and organizations in the sustainability sector.'
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
                  <p className="text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Opportunities</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Volunteer Roles
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Explore the various ways you can contribute to our mission.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {volunteerOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl p-8 border border-primary/5 hover:border-accent/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-display font-semibold text-primary mb-3">{opportunity.title}</h3>
                  <p className="text-secondary mb-4">{opportunity.description}</p>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">Requirements</span>
                    <ul className="mt-2 space-y-1">
                      {opportunity.requirements.map((req, i) => (
                        <li key={i} className="flex items-center text-sm text-secondary">
                          <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center text-sm text-earth">
                    <Clock className="w-4 h-4 mr-2" />
                    {opportunity.timeCommitment}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form Section - Light Green Theme */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-accent/20">
              {!submitted ? (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl font-display font-bold text-primary mb-2">
                      Volunteer Registration
                    </h2>
                    <p className="text-secondary">
                      Fill out the form below to express your interest in volunteering with us.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">First Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Last Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          placeholder="Doe"
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
                          placeholder="john@example.com"
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

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Area of Expertise</label>
                      <input
                        type="text"
                        placeholder="e.g., Architecture, Engineering, Project Management"
                        className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        value={formData.expertise}
                        onChange={(e) => setFormData({...formData, expertise: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Preferred Opportunity</label>
                      <select
                        className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        value={formData.opportunity}
                        onChange={(e) => setFormData({...formData, opportunity: e.target.value})}
                      >
                        <option value="">Select an opportunity</option>
                        {volunteerOpportunities.map((opp) => (
                          <option key={opp.id} value={opp.title}>{opp.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us why you want to volunteer with us..."
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
                          Submit Application
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
                    Application Received!
                  </h2>
                  <p className="text-secondary max-w-md mx-auto">
                    Thank you for your interest in volunteering with NYANEX. We will review your application and get back to you within 5 business days.
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

export default VolunteerPage;
