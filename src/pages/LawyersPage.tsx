import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import LawyerCard from '../components/LawyerCard';
import { lawyers, firmInfo } from '../data/mockData';

const LawyersPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Legal Team | Generational Life Changers</title>
        <meta name="description" content="Meet our experienced attorneys with diverse expertise in corporate law, real estate, and more. Dedicated to your legal success." />
        <meta name="keywords" content="attorneys, lawyers, legal professionals, law firm team, expert counsel" />
        <meta property="og:title" content="Our Legal Team | Expert Attorneys & Lawyers" />
        <meta property="og:description" content="Meet our experienced attorneys with diverse expertise in corporate law, real estate, and more." />
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
            src="https://images.pexels.com/photos/5668775/pexels-photo-5668775.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Legal professionals"
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
              Our Legal Team
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet our experienced attorneys who bring diverse expertise and unwavering 
              dedication to every client matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-secondary text-lg leading-relaxed">
              At {firmInfo.name}, our team of skilled attorneys combines deep legal knowledge 
              with practical business acumen. Each lawyer brings unique expertise and a shared 
              commitment to delivering exceptional results for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lawyers Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Meet Our Attorneys"
            subtitle="Dedicated professionals committed to your success"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawyers.map((lawyer, index) => (
              <motion.div
                key={lawyer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <LawyerCard lawyer={lawyer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Why Our Team Stands Out
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-primary mb-2">Diverse Expertise</h3>
                  <p className="text-secondary-light">
                    Our attorneys bring specialized knowledge across multiple practice areas, 
                    allowing us to provide comprehensive legal solutions for complex matters.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-primary mb-2">Local & International Experience</h3>
                  <p className="text-secondary-light">
                    With deep roots in Ghana and exposure to international legal frameworks, 
                    we bridge local expertise with global best practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-primary mb-2">Collaborative Approach</h3>
                  <p className="text-secondary-light">
                    Our lawyers work collaboratively, drawing on each other's expertise to 
                    ensure you receive well-rounded, strategic advice.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-primary mb-2">Continuous Learning</h3>
                  <p className="text-secondary-light">
                    We stay at the forefront of legal developments through ongoing education 
                    and active participation in professional associations.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dnwxx9wx5/image/upload/v1771669994/lawyer_hldtd0.jpg"
                  alt="Legal team meeting"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Ready to Work With Our Team?
          </h2>
          <p className="text-primary/80 text-lg mb-8">
            Schedule a consultation to discuss your legal needs with one of our experienced attorneys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors hover:animate-pulse"
            >
              Request Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors hover:animate-pulse"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
    </>
  );
};

export default LawyersPage;
