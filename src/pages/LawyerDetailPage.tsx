import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { lawyers, practiceAreas } from '../data/mockData';

const LawyerDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const lawyer = lawyers.find(l => l.id === Number(id));

  if (!lawyer) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Lawyer Not Found</h1>
          <p className="text-secondary mb-8">The attorney you are looking for does not exist.</p>
          <Link
            to="/lawyers"
            className="inline-flex items-center text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Our Team
          </Link>
        </div>
      </div>
    );
  }

  const relatedPracticeAreas = practiceAreas.filter(area =>
    (lawyer.specializations || []).some(spec =>
      area.title.toLowerCase().includes(spec.toLowerCase()) ||
      spec.toLowerCase().includes(area.title.split(' ')[0].toLowerCase())
    )
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/lawyers"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Image & Contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden shadow-xl mb-6">
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-lg font-serif font-semibold text-primary mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${lawyer.email}`}
                      className="flex items-center space-x-3 text-secondary hover:text-accent transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>{lawyer.email}</span>
                    </a>
                    <a
                      href={`tel:${lawyer.phone}`}
                      className="flex items-center space-x-3 text-secondary hover:text-accent transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>{lawyer.phone}</span>
                    </a>
                    <div className="flex items-center space-x-3 text-secondary">
                      <MapPin className="w-5 h-5" />
                      <span>Accra, Ghana</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <h1 className="text-4xl font-serif font-bold text-primary mb-2">{lawyer.name}</h1>
                <p className="text-accent text-xl font-medium">{lawyer.title}</p>
                <p className="text-secondary-light mt-2">{lawyer.experience} of Experience</p>
              </div>

              {/* Specializations */}
              <div className="mb-8">
                <h2 className="text-xl font-serif font-semibold text-primary mb-4">Areas of Specialization</h2>
                <div className="flex flex-wrap gap-2">
                  {(lawyer.specializations || []).map((spec, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Biography */}
              <div className="mb-8">
  <h2 className="text-xl font-serif font-semibold text-primary mb-4">Biography</h2>
  {(lawyer.bio || '').split('\n').map((para: string, index: number) => (
    <p key={index} className="text-secondary leading-relaxed mb-4 text-justify">
      {para.trim()}
    </p>
  ))}
</div>

              {/* Education */}
              <div className="mb-8">
                <h2 className="text-xl font-serif font-semibold text-primary mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </h2>
                <ul className="space-y-3">
                  {lawyer.education.map((edu, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-secondary">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bar Memberships */}
              <div className="mb-8">
                <h2 className="text-xl font-serif font-semibold text-primary mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Bar Memberships & Affiliations
                </h2>
                <ul className="space-y-3">
                  {(lawyer.barMemberships || []).map((membership, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-secondary">{membership}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              {lawyer.certifications && (
                <div className="mb-8">
                  <h2 className="text-xl font-serif font-semibold text-primary mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Professional Certifications
                  </h2>
                  <ul className="space-y-3">
                    {lawyer.certifications.map((cert, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-secondary">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notable Cases */}
              {lawyer.notableCases && (
                <div className="mb-8">
                  <h2 className="text-xl font-serif font-semibold text-primary mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Notable Cases & Achievements
                  </h2>
                  <ul className="space-y-3">
                    {lawyer.notableCases.map((caseDesc, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-secondary">{caseDesc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Practice Areas */}
              {relatedPracticeAreas.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-serif font-semibold text-primary mb-4">Related Practice Areas</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedPracticeAreas.map(area => (
                      <Link
                        key={area.id}
                        to={`/practice-areas/${area.slug}`}
                        className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <span className="text-secondary font-medium">{area.title}</span>
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-primary p-8 rounded-lg text-white">
                <h3 className="text-xl font-serif font-semibold mb-4">Work with {lawyer.name.split(' ')[0]}</h3>
                <p className="text-gray-300 mb-6">
                  Schedule a consultation to discuss your legal matter with {lawyer.name.split(' ')[0]}.
                </p>
                <Link
                  to="/consultation"
                  className="inline-flex items-center px-6 py-3 bg-accent text-primary font-medium rounded-lg hover:bg-accent-light transition-colors hover:animate-pulse"
                >
                  Request Consultation
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

export default LawyerDetailPage;
