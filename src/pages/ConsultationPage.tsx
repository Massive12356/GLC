import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Calendar, Clock, FileText } from 'lucide-react';
import { practiceAreas, firmInfo } from '../data/mockData';
import { ConsultationFormData } from '../types';

const ConsultationPage = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceArea: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Consultation Scheduled | Generational Life Changers</title>
          <meta name="description" content="Your consultation has been scheduled. Our legal team will be in touch soon." />
        </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen pt-24 pb-20"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Consultation Request Received</h2>
            <p className="text-secondary mb-6">
              Thank you for requesting a consultation with {firmInfo.name}. 
              We have received your request and will contact you within 24-48 hours to confirm your appointment.
            </p>
            <p className="text-secondary-light text-sm mb-8">
              Please note that submitting this form does not create an attorney-client relationship.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  practiceArea: '',
                  preferredDate: '',
                  preferredTime: '',
                  message: '',
                });
              }}
              className="text-accent hover:underline font-medium"
            >
              Submit another request
            </button>
          </div>
        </div>
      </motion.div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Book a Legal Consultation | Generational Life Changers</title>
        <meta name="description" content="Schedule a consultation with our experienced legal team. Discuss your legal needs with our attorneys." />
        <meta name="keywords" content="legal consultation, book appointment, attorney meeting, consultation form" />
        <meta property="og:title" content="Book a Legal Consultation | Schedule an Appointment" />
        <meta property="og:description" content="Schedule a consultation with our experienced legal team." />
      </Helmet>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Legal consultation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Book a Consultation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Schedule a consultation with one of our experienced attorneys to discuss your legal needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consultation Info */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">Flexible Scheduling</h3>
              <p className="text-secondary-light text-sm">Choose a date and time that works for you. We offer both in-person and virtual consultations.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">Prompt Response</h3>
              <p className="text-secondary-light text-sm">We will confirm your appointment within 24-48 hours of receiving your request.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">What to Expect</h3>
              <p className="text-secondary-light text-sm">Initial consultations typically last 30-60 minutes. Please bring relevant documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary mb-2">Request a Consultation</h2>
              <p className="text-secondary">Fill out the form below and we will get back to you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="practiceArea" className="block text-sm font-medium text-primary mb-2">
                  Area of Interest *
                </label>
                <select
                  id="practiceArea"
                  name="practiceArea"
                  value={formData.practiceArea}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                >
                  <option value="">Select an area</option>
                  {practiceAreas.map(area => (
                    <option key={area.id} value={area.slug}>{area.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-primary mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-primary mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                    <option value="evening">Evening (3:00 PM - 5:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  placeholder="Please provide a brief overview of your needs..."
                />
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                <p className="text-sm text-primary">
                  <strong>Note:</strong> Submitting this form does not create any formal relationship. 
                  We will discuss your matter in detail during your consultation.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Request Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
    </>
  );
};

export default ConsultationPage;
