import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { lawyers } from '../data/mockData';

const LawyerProfiles = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Meet Our Legal Experts
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Our team of distinguished legal professionals brings decades of experience and expertise to every case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyers.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${lawyer.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-accent transition-colors"
                      aria-label={`Email ${lawyer.name}`}
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href={`tel:${lawyer.phone}`}
                      className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-accent transition-colors"
                      aria-label={`Call ${lawyer.name}`}
                    >
                      <Phone size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-1">
                  {lawyer.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-3">{lawyer.title}</p>
                <p className="text-secondary-light text-sm mb-4">
                  <span className="font-medium">Experience:</span> {lawyer.experience}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(lawyer.specializations || []).slice(0, 2).map((spec, index) =>(
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                  {(lawyer.specializations || []).length > 2 && (
                    <span className="px-3 py-1 bg-gray-100 text-secondary-light text-xs rounded-full">
                      +{(lawyer.specializations || []).length - 2} more
                    </span>
                  )}
                </div>
                <Link
                  to={`/lawyers/${lawyer.id}`}
                  className="inline-flex items-center text-accent text-sm font-medium hover:underline"
                >
                  View Profile
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Firm Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-serif font-bold">25+</div>
              <div className="text-sm opacity-90">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold">5</div>
              <div className="text-sm opacity-90">Partners & Associates</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold">2,500+</div>
              <div className="text-sm opacity-90">Cases Handled</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LawyerProfiles;