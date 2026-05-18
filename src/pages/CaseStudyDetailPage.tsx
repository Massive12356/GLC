import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, DollarSign, Clock, Award, FileText, TrendingUp } from 'lucide-react';
import { caseStudies } from '../data/mockData';

const CaseStudyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find(s => s.id === Number(id));

  if (!study) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Case Study Not Found</h1>
          <p className="text-secondary mb-8">The case study you are looking for does not exist.</p>
          <Link
            to="/case-studies"
            className="inline-flex items-center text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </div>
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
      <section className="relative py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-lg font-serif font-semibold text-primary mb-4">Case Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Practice Area:</span>
                      <span className="font-medium text-primary text-center">{study.practiceArea}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Client:</span>
                      <span className="font-medium text-primary text-center">{study.client}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Duration:</span>
                      <span className="font-medium text-primary">{study.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Value:</span>
                      <span className="font-medium text-primary">{study.value}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-lg font-serif font-semibold text-primary mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Key Outcome
                  </h3>
                  <p className="text-secondary text-sm">{study.outcome}</p>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4 inline-block animate-bounce">
                  {study.practiceArea}
                </span>
                
                <h1 className="text-4xl font-serif font-bold text-primary mb-4">{study.title}</h1>
                
                <p className="text-xl text-secondary mb-6 ">
                  <span className="font-medium">Client:</span> {study.client}
                </p>
                
                <p className="text-secondary leading-relaxed mb-8">
                  {study.description}
                </p>
              </div>

              {/* Challenges */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-semibold text-primary mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-accent" />
                  Key Challenges
                </h2>
                
                <div className="space-y-4">
                  {study.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                      </div>
                      <p className="ml-4 text-secondary">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-semibold text-primary mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-accent" />
                  Results Achieved
                </h2>
                
                <div className="space-y-4">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                      <p className="ml-4 text-secondary">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-primary mb-1">{study.duration}</div>
                  <div className="text-secondary text-sm">Timeline</div>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-full mb-4">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-primary mb-1">{study.value}</div>
                  <div className="text-secondary text-sm">Deal Value</div>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-primary mb-1">Success</div>
                  <div className="text-secondary text-sm">Outcome</div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-lg text-white">
                <h3 className="text-xl font-serif font-semibold mb-4 text-white">Need Expert Legal Representation?</h3>
                <p className="text-gray-300 mb-6">
                  Our proven track record speaks for itself. Discuss your legal matter with our experienced attorneys.
                </p>
                <Link
                  to="/consultation"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors hover:animate-pulse"
                >
                  Schedule a Consultation
                  <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CaseStudyDetailPage;