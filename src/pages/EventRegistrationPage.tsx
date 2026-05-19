import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  User,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  Send,
  Info,
  Loader2
} from 'lucide-react';
import { events } from '../data/mockData';
import { submitFormToGoogleSheets } from '../config/googleSheets';

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  profession: string;
  dietaryRequirements: string;
  additionalInfo: string;
  agreeToTerms: boolean;
}

const EventRegistrationPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  // const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    profession: '',
    dietaryRequirements: '',
    additionalInfo: '',
    agreeToTerms: false
  });

  // Find the event based on URL parameter
  const event = events.find(e => {
    const slug = e.registrationLink?.split('/').slice(-2)[0];
    return slug === eventId;
  }) || events[0]; // Fallback to first event if not found

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const result = await submitFormToGoogleSheets('event', {
      eventName: event.title,
      ...formData
    });

    if (result.success) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setError(result.message || 'Failed to submit registration. Please try again.');
    }
    setIsLoading(false);
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Registration Confirmed | {event.title}</title>
          <meta name="description" content={`Registration confirmed for ${event.title}`} />
        </Helmet>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-accent/10 py-20"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-display font-bold text-primary mb-4">
                Registration Confirmed!
              </h1>
              <p className="text-secondary mb-2">
                Thank you for registering for
              </p>
              <p className="text-xl font-semibold text-primary mb-6">
                {event.title}
              </p>
              <div className="bg-background rounded-2xl p-6 mb-8 text-left">
                <div className="flex items-center text-secondary mb-2">
                  <Calendar className="w-5 h-5 mr-3 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-secondary mb-2">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-secondary">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="text-secondary mb-8">
                A confirmation email has been sent to <strong>{formData.email}</strong> with all the event details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Events
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  Go to Home
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Register for {event.title} | Generational Life Changers</title>
        <meta name="description" content={`Register for ${event.title}. ${event.description}`} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7172830/pexels-photo-7172830.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/events" 
                className="inline-flex items-center text-white/70 hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Events
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Register for Event
              </h1>
              <p className="text-xl text-white/70 max-w-2xl">
                {event.title}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Event Details Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg sticky top-24">
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 bg-accent text-primary-dark text-xs font-semibold rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-display font-bold text-primary mb-4">
                      {event.title}
                    </h2>
                    <p className="text-secondary text-sm mb-6">
                      {event.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className={`flex items-start ${event.date === 'N/A' ? 'hidden' : 'block'}`}>
                        <Calendar className="w-5 h-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className={`font-medium text-primary`}>Date</p>
                          <p className="text-secondary text-sm">{event.date}</p>
                        </div>
                      </div>
                      <div className={`flex items-start ${event.time === 'N/A' ? 'hidden' : 'block'}`}>
                        <Clock className="w-5 h-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-primary">Time</p>
                          <p className="text-secondary text-sm">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-primary">Location</p>
                          <p className="text-secondary text-sm">{event.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-primary/10">
                      <div className="flex items-center text-secondary text-sm">
                        <Info className="w-4 h-4 mr-2 text-accent" />
                        <span>Free registration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Registration Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
                  <div className="mb-8">
                    <h2 className="text-2xl font-display font-bold text-primary mb-2">
                      Event Registration
                    </h2>
                    <p className="text-secondary">
                      Please fill out the form below to register for this event. All fields marked with * are required.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
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
                          placeholder="Enter your first name"
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
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
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
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    {/* Organization & Profession */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          <Building2 className="w-4 h-4 inline mr-2" />
                          Organization / Institution
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                          placeholder="Your organization (optional)"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          <GraduationCap className="w-4 h-4 inline mr-2" />
                          Profession / Role *
                        </label>
                        <select
                          name="profession"
                          required
                          value={formData.profession}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        >
                          <option value="">Select your profession</option>
                          <option value="student">Student</option>
                          <option value="architect">Architect</option>
                          <option value="engineer">Engineer</option>
                          <option value="academic">Academic / Researcher</option>
                          <option value="policymaker">Policymaker</option>
                          <option value="professional">Healthcare Professional</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Dietary Requirements */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Dietary Requirements
                      </label>
                      <input
                        type="text"
                        name="dietaryRequirements"
                        value={formData.dietaryRequirements}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="Any dietary restrictions or allergies? (optional)"
                      />
                    </div>

                    {/* Additional Information */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Additional Information
                      </label>
                      <textarea
                        name="additionalInfo"
                        rows={4}
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background rounded-xl border border-transparent focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                        placeholder="Any additional information or special requests? (optional)"
                      />
                    </div>

                    {/* Terms Checkbox */}
                    <label className="flex items-start space-x-3 p-4 bg-accent/5 rounded-xl cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 text-accent rounded focus:ring-accent mt-0.5"
                      />
                      <span className="text-secondary text-sm">
                        I agree to receive communications about this event and future Nyamedua Foundation events.
                        I understand that my information will be handled in accordance with the{' '}
                        <Link to="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>.
                      </span>
                    </label>

                    {/* Error Message */}
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Submit Button */}
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
                          Complete Registration
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default EventRegistrationPage;
