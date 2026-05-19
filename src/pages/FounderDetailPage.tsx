import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Mail, 
  Linkedin, 
  Twitter, 
  Globe, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Star,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { founders } from '../data/mockData';

const FounderDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const founder = founders.find(f => f.id === Number(id));

  if (!founder) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Founder Not Found</h1>
          <Link to="/about" className="text-accent hover:underline">
            Back to About Us
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{founder.name} | Generational Life Changers</title>
        <meta name="description" content={`${founder.name} - ${founder.role}. ${founder.bio}`} />
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
                to="/about" 
                className="inline-flex items-center text-white/70 hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to About Us
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                {founder.name}
              </h1>
              <p className="text-xl text-accent font-medium">
                {founder.role}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Sidebar - Profile */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg sticky top-24">
                  <div className="relative h-80">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-display font-bold text-primary mb-1">
                      {founder.name}
                    </h2>
                    <p className="text-accent font-medium mb-4">{founder.title}</p>
                    
                    {/* Social Links */}
                    {founder.socialLinks && (
                      <div className="flex gap-3 mb-6">
                        {founder.socialLinks.linkedin && (
                          <a 
                            href={founder.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {founder.socialLinks.twitter && (
                          <a 
                            href={founder.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                          >
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                        {founder.socialLinks.website && (
                          <a 
                            href={founder.socialLinks.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                          >
                            <Globe className="w-5 h-5" />
                          </a>
                        )}
                        <a 
                          href={`mailto:${founder.email}`}
                          className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    )}

                    {/* Expertise */}
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        Areas of Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {founder.expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-accent/10 text-primary text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Bio Section */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h2 className="text-2xl font-display font-bold text-primary mb-4 flex items-center">
                    <Lightbulb className="w-6 h-6 mr-3 text-accent" />
                    About
                  </h2>
                  <p className="text-secondary leading-relaxed text-lg">
                    {founder.bio}
                  </p>
                </div>

                {/* Achievements Section */}
                {founder.achievements && founder.achievements.length > 0 && (
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <h2 className="text-2xl font-display font-bold text-primary mb-6 flex items-center">
                      <CheckCircle2 className="w-6 h-6 mr-3 text-accent" />
                      Key Achievements
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {founder.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-accent/5 rounded-xl"
                        >
                          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <Star className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-secondary">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Honors & Awards Section */}
                {founder.honors && founder.honors.length > 0 && (
                  <div className="bg-primary rounded-3xl p-8 shadow-lg text-white">
                    <h2 className="text-2xl font-display font-bold mb-6 flex items-center">
                      <Award className="w-6 h-6 mr-3 text-accent" />
                      Honors & Awards
                    </h2>
                    <div className="space-y-4">
                      {founder.honors.map((honor, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-4 p-4 bg-white/10 rounded-xl"
                        >
                          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                            <Award className="w-5 h-5 text-primary-dark" />
                          </div>
                          <p className="text-white/90 font-medium">{honor}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education Section */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h2 className="text-2xl font-display font-bold text-primary mb-6 flex items-center">
                    <GraduationCap className="w-6 h-6 mr-3 text-accent" />
                    Education
                  </h2>
                  <div className="space-y-4">
                    {founder.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-background rounded-xl"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-secondary font-medium">{edu}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Publications Section */}
                {founder.publications && founder.publications.length > 0 && (
                  <div className="bg-accent/10 rounded-3xl p-8 shadow-lg border-2 border-accent/20">
                    <h2 className="text-2xl font-display font-bold text-primary mb-6 flex items-center">
                      <BookOpen className="w-6 h-6 mr-3 text-primary" />
                      Publications
                    </h2>
                    <div className="space-y-4">
                      {founder.publications.map((pub, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-white rounded-xl"
                        >
                          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-5 h-5 text-white" />
                          </div>
                          <p className="text-secondary font-medium">{pub}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default FounderDetailPage;
