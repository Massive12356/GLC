import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Clock, Trophy, Award, FileText } from 'lucide-react';
import { caseStudies } from '../data/mockData';

const CaseStudiesPage = () => {
  
  // Get featured case studies
  const featuredStudies = caseStudies.filter(study => study.featured);
  const otherStudies = caseStudies.filter(study => !study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies | Successful Legal Outcomes</title>
        <meta name="description" content="Real-world examples of our legal expertise and successful outcomes. See how we've helped clients across various industries and legal matters." />
        <meta name="keywords" content="case studies, success stories, legal outcomes, client results, legal expertise" />
        <meta property="og:title" content="Case Studies | Successful Legal Outcomes" />
        <meta property="og:description" content="Real-world examples of our legal expertise and successful outcomes for clients." />
      </Helmet>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
            >
              Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Explore real-world examples of our legal expertise and successful outcomes for clients across various industries and legal matters.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Featured Success Stories</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Highlighted cases demonstrating our expertise and exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-primary/10 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="mr-1 text-center px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {study.practiceArea}
                    </span>
                    <div className="flex items-center text-secondary text-sm">
                      <Trophy className="w-4 h-4 mr-1" />
                      Featured
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-secondary mb-4">
                    <span className="font-medium">Client:</span> {study.client}
                  </p>

                  <p className="text-secondary mb-6 line-clamp-3">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-secondary">
                      <Clock className="w-4 h-4 mr-2 text-accent" />
                      <span className="text-sm">Duration: {study.duration}</span>
                    </div>
                    <div className="flex items-center text-secondary">
                      <DollarSign className="w-4 h-4 mr-2 text-accent" />
                      <span className="text-sm">Value: {study.value}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-primary mb-2">Outcome:</p>
                    <p className="text-secondary text-sm">{study.outcome}</p>
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-accent font-medium group-hover:underline"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      {otherStudies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Additional Case Studies</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                More examples of our successful legal representation and client outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background rounded-lg p-6 border border-primary/10 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {study.practiceArea}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-secondary text-sm mb-3">
                    <span className="font-medium">Client:</span> {study.client}
                  </p>

                  <p className="text-secondary text-sm mb-4 line-clamp-2">
                    {study.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-secondary mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span>{study.value}</span>
                    </div>
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-accent text-sm font-medium group-hover:underline"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Track Record</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Proven results and successful outcomes across thousands of cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">2,500+</div>
              <div className="text-secondary">Cases Handled</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">98%</div>
              <div className="text-secondary">Client Satisfaction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">25+</div>
              <div className="text-secondary">Years of Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">$1B+</div>
              <div className="text-secondary">Value of Deals</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Need Expert Legal Representation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Learn from our proven track record of success. Discuss your legal matter with our experienced attorneys.
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors hover:animate-pulse"
          >
            Request Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </motion.div>
    </>
  );
};

export default CaseStudiesPage;