import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Calendar, MapPin, Heart } from 'lucide-react';
import { patientStories } from '../data/mockData';

const SuccessStoriesPage = () => {
  return (
    <>
      <Helmet>
        <title>Success Stories | Generational Life Changers</title>
        <meta name="description" content="Read inspiring patient success stories from Nyamedua Foundation. Real lives transformed through life-saving healthcare." />
        <meta property="og:title" content="Success Stories | Nyamedua Foundation" />
        <meta property="og:description" content="Real patients. Real recoveries. Real impact." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7108293/pexels-photo-7108293.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              Every recovery is a testament to the power of compassion. Meet the patients whose lives were saved by your generosity.
            </motion.p>
          </div>
        </section>

        {/* Featured Documentary Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {patientStories.filter(s => s.featured).slice(0, 1).map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Video/Image Placeholder */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full mb-2">
                      Documentary
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white">{story.name}'s Journey</h3>
                  </div>
                </div>

                {/* Story Content */}
                <div>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">Featured Story</span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                    {story.name}'s Recovery Journey
                  </h2>
                  <p className="text-secondary leading-relaxed mb-4">{story.story}</p>
                  <p className="text-secondary leading-relaxed mb-6">
                    <strong className="text-primary">Outcome:</strong> {story.outcome}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background rounded-xl p-4">
                      <p className="text-secondary text-xs uppercase tracking-wider">Condition</p>
                      <p className="text-primary font-semibold">{story.condition}</p>
                    </div>
                    <div className="bg-background rounded-xl p-4">
                      <p className="text-secondary text-xs uppercase tracking-wider">Treatment</p>
                      <p className="text-primary font-semibold">{story.treatment}</p>
                    </div>
                    <div className="bg-background rounded-xl p-4">
                      <p className="text-secondary text-xs uppercase tracking-wider">Location</p>
                      <p className="text-primary font-semibold">{story.location}</p>
                    </div>
                    <div className="bg-background rounded-xl p-4">
                      <p className="text-secondary text-xs uppercase tracking-wider">Status</p>
                      <p className="text-accent font-semibold">{story.status}</p>
                    </div>
                  </div>

                  {/* Recovery Timeline */}
                  {story.recoveryTimeline && (
                    <div className="mb-6">
                      <h4 className="text-lg font-display font-semibold text-primary mb-3">Recovery Timeline</h4>
                      <div className="space-y-3">
                        {story.recoveryTimeline.map((milestone, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Calendar className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <p className="text-primary text-sm font-medium">{milestone.date}</p>
                              <p className="text-secondary text-sm">{milestone.milestone}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    to="/donate"
                    className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-all duration-300"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Support More Patients
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Patient Stories Grid */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">More Stories</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Patient Stories
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Each story represents hope, resilience, and the life-changing power of accessible healthcare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {patientStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        story.status === 'Recovered' ? 'bg-accent text-white' : 'bg-amber-500 text-white'
                      }`}>
                        {story.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-secondary mb-2">
                      <MapPin className="w-4 h-4" />
                      {story.location}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-1">{story.name}, {story.age}</h3>
                    <p className="text-accent text-sm font-medium mb-3">{story.condition}</p>
                    <p className="text-secondary text-sm mb-4 line-clamp-3">{story.story}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-secondary">Progress</span>
                        <span className="text-primary font-semibold">
                          ${story.fundsRaised.toLocaleString()} / ${story.fundsNeeded.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-accent rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min((story.fundsRaised / story.fundsNeeded) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                    
                    <p className="text-secondary text-xs mb-4">{story.donorImpact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Be Part of the Next Success Story</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                Your donation can fund the next life-saving surgery and give another patient the chance to live a healthy, fulfilling life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/donate"
                  className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Link>
                <Link
                  to="/impact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  View Our Impact
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default SuccessStoriesPage;
