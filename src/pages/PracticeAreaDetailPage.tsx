import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { practiceAreas, lawyers } from '../data/mockData';
import { Building2, Scale, Home, Users, Shield, Globe, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Scale,
  Home,
  Users,
  Shield,
  Globe,
};

const getInitials = (fullName: string) => {
  if (!fullName) return '';
  const parts = fullName.trim().split(' ');
  const first = parts[0]?.charAt(0) || '';
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : '';
  return `${first}${last}`.toUpperCase();
};

const PracticeAreaDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const practiceArea = practiceAreas.find(area => area.slug === id);

  if (!practiceArea) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Practice Area Not Found</h1>
          <p className="text-secondary mb-8">The practice area you are looking for does not exist.</p>
          <Link
            to="/practice-areas"
            className="inline-flex items-center text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Practice Areas
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[practiceArea.icon] || Scale;
  let relatedLawyers = [] as typeof lawyers;
  if ((practiceArea as any).primaryLawyerId) {
    const l = lawyers.find(lw => lw.id === (practiceArea as any).primaryLawyerId);
    relatedLawyers = l ? [l] : [];
  } else {
    relatedLawyers = lawyers.filter(lawyer => 
      (lawyer.specializations || []).some((spec: string) => 
        practiceArea.title.toLowerCase().includes(spec.toLowerCase()) ||
        spec.toLowerCase().includes(practiceArea.title.split(' ')[0].toLowerCase())
      )
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0">
          <img
            src={practiceArea.image}
            alt={practiceArea.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/practice-areas"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Practice Areas
            </Link>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent font-medium animate-bounce">Practice Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              {practiceArea.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Overview</h2>
                <p className="text-secondary leading-relaxed mb-8">
                  {practiceArea.fullDescription}
                </p>

                <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Who We Help</h2>
                <p className="text-secondary leading-relaxed mb-8">
                  {practiceArea.whoItsFor}
                </p>

                <h2 className="text-2xl font-serif font-semibold text-primary mb-4">How We Can Help</h2>
                <ul className="space-y-3 mb-8">
                  {practiceArea.howWeHelp.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-background p-8 rounded-lg mt-12">
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  Need Assistance with {practiceArea.title}?
                </h3>
                <p className="text-secondary mb-6">
                  Contact us today to schedule a consultation with one of our experienced attorneys.
                </p>
                <Link
                  to="/consultation"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors hover:animate-pulse"
                >
                  Request Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Related Lawyers */}
              <div className="bg-background p-6 rounded-lg">
  <h3 className="text-lg font-serif font-semibold text-primary mb-4">
    Related Attorneys
  </h3>

  {relatedLawyers.length > 0 ? (
    <div className="space-y-4">
      {relatedLawyers.map(lawyer => (
        <Link
          key={lawyer.id}
          to={`/lawyers/${lawyer.id}`}
          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white transition-colors"
        >
          {/* Initials Avatar */}
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
            {getInitials(lawyer.name)}
          </div>

          <div>
            <p className="font-medium text-primary">{lawyer.name}</p>
            <p className="text-sm text-secondary-light">{lawyer.title}</p>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <p className="text-secondary-light text-sm">
      Our attorneys handle matters across multiple practice areas.
    </p>
  )}
</div>

              {/* Contact Box */}
              <div className="bg-primary p-6 rounded-lg text-white">
                <h3 className="text-lg font-serif font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Have questions about this practice area? Reach out to our team.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-accent hover:underline"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PracticeAreaDetailPage;
