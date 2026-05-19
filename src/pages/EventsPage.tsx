import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { projects } from '../data/mockData';

const EventsPage = () => {
  const upcomingProjects = projects;

  return (
    <>
      <Helmet>
        <title>Events & Programs | Generational Life Changers</title>
        <meta name="description" content="Join Nyamedua Foundation events, health screenings, workshops, and community outreach programs across West Africa." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7172830/pexels-photo-7172830.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-medium rounded-full mb-6"
            >
              Get Involved
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Events & Programs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Join our training sessions, workshops, and symposiums. Be part of the movement for sustainable development.
            </motion.p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-primary-dark text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-secondary text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-earth mb-4">
                      <div className={`flex items-center ${project.startDate === 'N/A' ?  'hidden' : 'block'}`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.startDate}
                      </div>
                      <div className={`flex items-center ${project.endDate === 'N/A' ?  'hidden' : 'block'}`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.endDate}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                    </div>
                    <Link
                      to={`/events/${project.slug}/register`}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-light transition-colors mb-4"
                    >
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Upcoming' 
                          ? 'bg-accent/10 text-accent' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {project.status}
                      </span>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Programs</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Events & Initiatives Overview
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Discover our comprehensive range of programs designed to advance sustainable development and capacity building across Ghana and Africa.
              </p>
            </div>

            <div className="space-y-8">
              {upcomingProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-24 md:w-32">
                    <span className="text-accent font-display font-bold text-lg">{project.category}</span>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-accent/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full" />
                    <h3 className="text-lg font-display font-semibold text-primary mb-2">{project.title}</h3>
                    <p className="text-secondary text-sm mb-3">{project.description}</p>
                    <div className="flex items-center text-sm text-earth">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Subscribe to receive notifications about upcoming events and registration openings.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-primary-dark font-semibold rounded-full hover:bg-accent-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default EventsPage;
