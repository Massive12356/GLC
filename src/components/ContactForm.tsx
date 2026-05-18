import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, User, Mail, Phone, MessageSquare, Building2, Tag } from 'lucide-react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  category: string;
  message: string;
  interestArea: string[];
  howDidYouHear: string;
  newsletter: boolean;
}

const interestOptions = [
  'Volunteering',
  'Partnership',
  'Donations',
  'Events & Training',
  'General Inquiry',
  'Media & Press'
];

const referralOptions = [
  'Social Media',
  'Friend/Colleague',
  'Search Engine',
  'Event',
  'University',
  'Other'
];

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    category: 'general',
    message: '',
    interestArea: [],
    howDidYouHear: '',
    newsletter: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => {
      const list = prev.interestArea;
      return {
        ...prev,
        interestArea: list.includes(interest)
          ? list.filter(i => i !== interest)
          : [...list, interest]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 md:p-12 text-center"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
          <CheckCircle className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-2xl font-display font-bold text-primary mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-secondary max-w-md mx-auto">
          Thank you for reaching out to NYANEX. We've received your message and will get back to you within 24-48 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold text-primary mb-2">Send us a Message</h3>
        <p className="text-secondary text-sm">We'd love to hear from you. Fill out the form below and we'll respond as soon as possible.</p>
      </div>

      <div className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              <User className="w-4 h-4 inline mr-2" />
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              placeholder="+233 XX XXX XXXX"
            />
          </div>
        </div>

        {/* Organization */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            <Building2 className="w-4 h-4 inline mr-2" />
            Organization (Optional)
          </label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            placeholder="Your organization or institution"
          />
        </div>

        {/* Category & Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              <Tag className="w-4 h-4 inline mr-2" />
              Category *
            </label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            >
              <option value="general">General Inquiry</option>
              <option value="volunteer">Volunteering</option>
              <option value="partnership">Partnership</option>
              <option value="donation">Donation</option>
              <option value="events">Events & Training</option>
              <option value="media">Media & Press</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              placeholder="What is this about?"
            />
          </div>
        </div>

        {/* Areas of Interest */}
        <div>
          <label className="block text-sm font-medium text-primary mb-3">
            Areas of Interest (Select all that apply)
          </label>
          <div className="flex flex-wrap gap-2">
            {interestOptions.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => toggleInterest(option)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  formData.interestArea.includes(option)
                    ? 'bg-primary text-white'
                    : 'bg-background text-secondary hover:bg-primary/10'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Your Message *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
            placeholder="Tell us more about how we can help you..."
          />
        </div>

        {/* How did you hear about us */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            How did you hear about us?
          </label>
          <select
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          >
            <option value="">Select an option</option>
            {referralOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Newsletter */}
        <label className="flex items-center space-x-3 p-4 bg-accent/5 rounded-xl cursor-pointer">
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            className="w-5 h-5 text-accent rounded focus:ring-accent"
          />
          <span className="text-secondary text-sm">
            Subscribe to our newsletter for updates on events, projects, and opportunities
          </span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center group"
        >
          Send Message
          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
