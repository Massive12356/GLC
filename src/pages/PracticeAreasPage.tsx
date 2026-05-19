import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import PracticeAreaCard from '../components/PracticeAreaCard';
import { practiceAreas, firmInfo } from '../data/mockData';

const PracticeAreasPage = () => {
  return (
    <>
      <Helmet>
        <title>Practice Areas | Generational Life Changers</title>
        <meta name="description" content="Comprehensive legal services including corporate law, real estate, employment, and more. Expert counsel across multiple practice areas." />
        <meta name="keywords" content="practice areas, legal services, corporate law, real estate law, employment law" />
        <meta property="og:title" content="Practice Areas | Legal Services & Expertise" />
        <meta property="og:description" content="Comprehensive legal services including corporate law, real estate, employment, and more." />
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
            src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Legal library"
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
              Practice Areas
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We offer comprehensive legal services across a diverse range of practice areas, 
              providing expert counsel tailored to meet the unique needs of each client.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Legal Services"
            subtitle="Expert legal representation across multiple disciplines"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 animate-bounce">
            <div className="bg-accent p-6 rounded-lg shadow-lg border border-accent/20 text-white mb-8 flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold mb-1">Notarial & Notary Services</h3>
                <p className="text-sm text-white/90">{firmInfo?.descriptionLong}</p>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PracticeAreaCard practiceArea={area} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Our Clients */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Our Clients"
              subtitle="We offer services to a diverse range of clientele"
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Community Health Centers', 'Rural Clinics', 'Teaching Hospitals', 'Government Health Agencies', 'Local NGOs', 'International Partners', 'Faith-Based Organizations', 'Youth Groups'].map((client, idx) => (
                <div key={idx} className="bg-background p-4 rounded-lg border border-gray-100 flex items-center justify-center  hover:bg-accent transition-colors hover:scale-105">
                  <p className="text-sm text-primary font-medium text-center">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Approach Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Our Approach to Legal Excellence
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  At {firmInfo.name}, we believe that exceptional legal representation requires 
                  more than just knowledge of the law. It demands a deep understanding of our 
                  clients' objectives, creative problem-solving, and unwavering dedication to 
                  achieving the best possible outcomes.
                </p>
                <p>
                  Our attorneys bring diverse backgrounds and specialized expertise to every matter, 
                  ensuring that you receive comprehensive advice informed by multiple perspectives. 
                  We pride ourselves on being accessible, responsive, and committed to clear communication 
                  throughout our engagement.
                </p>
                <p>
                  Whether you are a multinational corporation navigating complex transactions, a 
                  business owner seeking to protect your interests, or an individual facing a 
                  personal legal matter, we approach your case with the same level of dedication 
                  and professionalism.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-serif font-semibold text-primary mb-2">Client-Centered Service</h3>
                <p className="text-secondary-light text-sm">
                  We prioritize understanding your unique needs and objectives, tailoring our approach to deliver solutions that align with your goals.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-serif font-semibold text-primary mb-2">Strategic Thinking</h3>
                <p className="text-secondary-light text-sm">
                  We look beyond the immediate issue to anticipate challenges and opportunities, providing strategic advice that positions you for long-term success.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-serif font-semibold text-primary mb-2">Transparent Communication</h3>
                <p className="text-secondary-light text-sm">
                  We keep you informed at every stage, explaining complex legal matters in clear terms and providing regular updates on your case.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-primary/80 text-lg mb-8">
            Contact us today to discuss how we can help with your legal matter.
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

export default PracticeAreasPage;
