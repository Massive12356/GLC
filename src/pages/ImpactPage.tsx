import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Activity, Heart, Users, MapPin, TrendingUp, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { impactStats, patientStories } from '../data/mockData';
import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const ImpactPage = () => {
  const stats = [
    { icon: Activity, value: impactStats.surgeriesFunded, label: 'Surgeries Funded', suffix: '+' },
    { icon: Heart, value: impactStats.childrenSupported, label: 'Children Supported', suffix: '+' },
    { icon: Users, value: impactStats.volunteersMobilized, label: 'Volunteers Mobilized', suffix: '+' },
    { icon: MapPin, value: impactStats.communitiesReached, label: 'Communities Reached', suffix: '+' },
    { icon: TrendingUp, value: Math.round(impactStats.fundsRaised / 1000), label: 'Funds Raised (USD)', suffix: 'k+' },
    { icon: Activity, value: impactStats.patientsScreened, label: 'Patients Screened', suffix: '+' },
  ];

  return (
    <>
      <Helmet>
        <title>Our Impact | Generational Life Changers</title>
        <meta name="description" content="See how Nyamedua Foundation is transforming lives through funded surgeries, health outreach, and community education across West Africa." />
        <meta property="og:title" content="Our Impact | Nyamedua Foundation" />
        <meta property="og:description" content="147+ surgeries funded, 8,500+ patients screened, 60 communities reached." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Our Impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              Every number represents a life changed, a family saved, and a community healed. Here is the measurable difference your support makes.
            </motion.p>
          </div>
        </section>

        {/* Animated Statistics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">By The Numbers</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2 mb-4">
                Impact Statistics
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Real numbers that reflect real lives transformed.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-background rounded-2xl"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-2xl mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <div className="text-secondary text-sm mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Stories */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Real Stories</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Featured Patient Stories
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Meet the patients whose lives have been transformed by your generosity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {patientStories.filter(s => s.featured).map((story, index) => (
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
                    <h3 className="text-xl font-display font-semibold text-primary mb-1">{story.name}, {story.age}</h3>
                    <p className="text-accent text-sm font-medium mb-3">{story.condition}</p>
                    <p className="text-secondary text-sm mb-4 line-clamp-3">{story.story}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-secondary">Funds Raised</span>
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
                    
                    <Link
                      to="/success-stories"
                      className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
                    >
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Transparency */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Accountability</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Trust & Transparency
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                We believe in complete transparency. Here is how we ensure your donations make the maximum impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Registered NGO',
                  description: 'Registered with the Registrar General\'s Department, Ghana. Fully compliant with nonprofit regulations.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Financial Transparency',
                  description: '85% of donations go directly to patient care. Annual financial reports are publicly available.'
                },
                {
                  icon: Activity,
                  title: 'Medical Board Review',
                  description: 'Every patient case is reviewed by licensed medical professionals to ensure funds are used appropriately.'
                },
                {
                  icon: TrendingUp,
                  title: 'Impact Tracking',
                  description: 'We track and report on every surgery, screening, and health education session we conduct.'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-2xl mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-secondary text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Trust Nyamedua?</h2>
              <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8">
                We understand that donating to a cause requires trust. That is why we have built our organization on the pillars of transparency, accountability, and measurable impact.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Direct Impact</h3>
                  <p className="text-white/70 text-sm">85% of every donation goes directly to patient care. We keep administrative costs minimal so your money saves lives.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Verified Partners</h3>
                  <p className="text-white/70 text-sm">We partner with accredited hospitals and licensed medical professionals across West Africa.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Donor Updates</h3>
                  <p className="text-white/70 text-sm">Receive regular updates on funded cases, surgery outcomes, and how your contribution made a difference.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ImpactPage;
