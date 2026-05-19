import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Shield, Users, Lightbulb, ArrowRight, Award, CheckCircle2, Scale, Globe } from 'lucide-react';
import { ngoInfo, founders, impactStats } from '../data/mockData';

const AboutPage = () => {
  const iconMap: { [key: string]: React.ElementType } = {
    Heart,
    Shield,
    Users,
    Target,
    Scale,
    Globe
  };

  return (
    <>
      <Helmet>
        <title>About Us | Generational Life Changers</title>
        <meta name="description" content="Learn about Nyamedua Foundation - ensuring equitable access to life-saving healthcare across West Africa." />
        <meta name="keywords" content="Nyamedua, healthcare NGO, medical charity, Ghana, West Africa, patient support, surgery funding" />
        <meta property="og:title" content="About Us | Nyamedua Foundation" />
        <meta property="og:description" content="Ensuring equitable access to life-saving interventions." />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              {ngoInfo.descriptionLong}
            </motion.p>
          </div>
        </section>

        {/* Organization Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-6">
                  Born from a Doctor's Promise
                </h2>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p>
                    Nyamedua Foundation was established in 2024 in Ghana with a singular mission: to ensure that no one dies from treatable medical conditions simply because they cannot afford care.
                  </p>
                  <p>
                    Co-founded by Dr. Ama Nyarko, a pediatric surgeon who witnessed countless preventable deaths in public hospitals, and Mr. Kwesi Asante, a healthcare administrator who understood the systemic barriers to access.
                  </p>
                  <p>
                    What started as a small fund to cover surgeries for three patients has grown into a comprehensive healthcare NGO operating across Ghana, Nigeria, and Togo - funding surgeries, running mobile clinics, and educating communities on preventive health.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Healthcare team"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-lg">
                  <p className="text-4xl font-display font-bold text-primary-dark">2024</p>
                  <p className="text-primary-dark/80 text-sm">Year Established</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section - Matching Home Page Design */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2 mb-4">
                Mission & Vision
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Driven by compassion, guided by integrity, and committed to saving lives.
              </p>
            </motion.div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-8 md:p-10 overflow-hidden shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-secondary leading-relaxed text-lg">{ngoInfo.mission}</p>

                  {/* Mission Stats */}
                  <div className="flex gap-8 mt-8 pt-8 border-t border-primary/10">
                    <div>
                      <div className="text-3xl font-bold text-primary">{impactStats.surgeriesFunded}+</div>
                      <div className="text-secondary text-sm">Surgeries Funded</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{impactStats.childrenSupported}+</div>
                      <div className="text-secondary text-sm">Children Supported</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-primary rounded-3xl p-8 md:p-10 text-white overflow-hidden shadow-lg"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-primary-dark" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-white/90 leading-relaxed text-lg">{ngoInfo.vision}</p>

                  {/* Vision Quote */}
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <blockquote className="text-accent font-medium italic">
                      "Healthcare is a human right, not a privilege."
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values - Glassmorphism Design */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Believe</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2 mb-4">
                Our Core Values
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Guided by timeless principles that define who we are and how we serve
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ngoInfo.values.map((value, index) => {
                const IconComponent = iconMap[value.icon] || Lightbulb;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 overflow-hidden"
                  >
                    {/* Glassmorphism Glow Effect */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Icon Header */}
                      <div className="flex items-center gap-5 mb-6">
                        <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold text-primary group-hover:text-primary-dark transition-colors">{value.title}</h3>
                          <p className="text-accent font-semibold tracking-wide">{value.adinkra}</p>
                        </div>
                      </div>

                      {/* Adinkra Meaning - Glass Badge */}
                      <div className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-sm rounded-xl p-4 mb-5 border border-accent/30">
                        <p className="text-primary font-semibold text-lg">"{value.adinkraMeaning}"</p>
                      </div>

                      {/* Description */}
                      <p className="text-secondary leading-relaxed text-base">{value.description}</p>
                      
                      {/* Bottom Accent Line */}
                      <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-500" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Leadership</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Our Founders
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Meet the dedicated leaders behind Nyamedua, committed to transforming healthcare access in West Africa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent/30"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-accent text-primary-dark text-xs font-semibold rounded-full mb-2">
                        {founder.title}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white">{founder.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-secondary text-sm mb-4 line-clamp-3">{founder.bio}</p>
                    
                    {/* Achievements Preview */}
                    {founder.achievements && founder.achievements.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-accent" />
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Key Achievements</span>
                        </div>
                        <div className="space-y-1">
                          {founder.achievements.slice(0, 2).map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                              <p className="text-secondary text-xs line-clamp-1">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {founder.expertise.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-accent/10 text-primary text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                      {founder.expertise.length > 3 && (
                        <span className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full">
                          +{founder.expertise.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* View Profile Link */}
                    <Link
                      to={`/about/founder/${founder.id}`}
                      className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group/link"
                    >
                      View Full Profile
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Info - Light Green Theme */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-10 md:p-16 shadow-xl border-2 border-accent/20 overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                    Registered NGO
                  </h2>
                  <p className="text-secondary text-lg leading-relaxed">
                    Nyamedua is a registered non-governmental organization in Ghana, committed to transparency, accountability, and ethical healthcare delivery in all our operations.
                  </p>
                </div>

                {/* Right Content - Registration Card */}
                <div className="bg-background rounded-2xl p-8 border-2 border-accent/20">
                  <div className="text-center">
                    <p className="text-secondary text-sm uppercase tracking-wider mb-2">Official Registration</p>
                    <div className="inline-block bg-accent/20 rounded-xl px-6 py-3 mb-4">
                      <p className="text-primary font-display font-bold text-2xl">{ngoInfo.registrationNumber}</p>
                    </div>
                    <p className="text-secondary text-sm">
                      Registered with the Registrar General's Department, Ghana
                    </p>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-primary/10">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">85%</p>
                      <p className="text-secondary text-xs">To Patient Care</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">2024</p>
                      <p className="text-secondary text-xs">Established</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">3</p>
                      <p className="text-secondary text-xs">Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default AboutPage;
