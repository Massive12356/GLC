import { motion } from 'framer-motion';
import { Award, Users, FileText, CheckCircle } from 'lucide-react';
import { trustIndicators } from '../data/mockData';

const TrustIndicators = () => {
  const stats = [
    { 
      icon: <Award className="w-8 h-8" />, 
      value: `${trustIndicators.yearsExperience}+`, 
      label: 'Years Experience',
      description: 'Combined legal expertise'
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      value: `${trustIndicators.lawyers}`, 
      label: 'Qualified Lawyers', 
      description: 'Specialized legal professionals'
    },
    { 
      icon: <FileText className="w-8 h-8" />, 
      value: `${trustIndicators.casesHandled.toLocaleString()}`, 
      label: 'Cases Handled', 
      description: 'Successful legal outcomes'
    },
    { 
      icon: <CheckCircle className="w-8 h-8" />, 
      value: `${trustIndicators.clientSatisfaction}%`, 
      label: 'Client Satisfaction', 
      description: 'Happy clients served'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Trusted by Clients Worldwide
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Our reputation is built on decades of excellence and unwavering commitment to our clients' success.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {stats.slice(0, 1).map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg border border-primary/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-medium text-secondary mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-accent" />
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {trustIndicators.certifications?.slice().sort((a,b) => a.localeCompare(b)).map((cert, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center">
              <Users className="w-6 h-6 mr-2 text-accent" />
              Professional Associations
            </h3>
            <div className="space-y-4">
              {trustIndicators.barMemberships?.slice().sort((a: string,b: string) => a.localeCompare(b)).map((membership, index) =>(
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary">{membership}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;