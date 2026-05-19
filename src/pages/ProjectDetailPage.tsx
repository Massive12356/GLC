import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Target, CheckCircle, Users } from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.slug === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Generational Life Changers</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          </div>
          
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
              <Link
                to="/projects"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Projects
              </Link>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-4 py-1 bg-accent text-primary-dark text-sm font-semibold rounded-full">
                  {project.category}
                </span>
                <span className="px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                  {project.type}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white max-w-4xl">
                {project.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-display font-bold text-primary mb-6">About This Project</h2>
                  <p className="text-secondary text-lg leading-relaxed mb-8">
                    {project.fullDescription}
                  </p>

                  <h3 className="text-2xl font-display font-bold text-primary mb-4 flex items-center">
                    <Target className="w-6 h-6 mr-3 text-accent" />
                    Objectives
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-secondary">{objective}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Gallery */}
                  {project.gallery.length > 0 && (
                    <>
                      <h3 className="text-2xl font-display font-bold text-primary mb-4">Gallery</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {project.gallery.map((image, index) => (
                          <div key={index} className="rounded-xl overflow-hidden">
                            <img
                              src={image}
                              alt={`${project.title} - Image ${index + 1}`}
                              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-sm sticky top-24"
                >
                  <h3 className="text-xl font-display font-semibold text-primary mb-6">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className={`flex items-center ${project.startDate === 'N/A' ?  'hidden' : 'block'}`}>
                      <Calendar className="w-5 h-5 text-accent mr-3" />
                      <div>
                        <p className="text-xs text-secondary uppercase tracking-wider">Date</p>
                        <p className="text-primary font-medium">{project.startDate}</p>
                      </div>
                    </div>

                    {project.endDate && (
                      <div className={`flex items-center ${project.endDate === 'N/A' ? 'hidden' : 'block'}`}>
                        <Calendar className="w-5 h-5 text-accent mr-3" />
                        <div>
                          <p className="text-xs text-secondary uppercase tracking-wider">End Date</p>
                          <p className="text-primary font-medium">{project.endDate}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-accent mr-3" />
                      <div>
                        <p className="text-xs text-secondary uppercase tracking-wider">Location</p>
                        <p className="text-primary font-medium">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-accent mr-3" />
                      <div>
                        <p className="text-xs text-secondary uppercase tracking-wider">Status</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Upcoming' 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs text-secondary uppercase tracking-wider mb-2">Impact</p>
                      <div className="grid grid-cols-2 gap-4">
                        {project.impact.participants !== undefined && (
                          <div className="text-center p-3 bg-background rounded-xl">
                            <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                            <p className="text-2xl font-display font-bold text-primary">{project.impact.participants}+</p>
                            <p className="text-xs text-secondary">Participants</p>
                          </div>
                        )}
                        {project.impact.institutions !== undefined && (
                          <div className="text-center p-3 bg-background rounded-xl">
                            <Target className="w-5 h-5 text-primary mx-auto mb-1" />
                            <p className="text-2xl font-display font-bold text-primary">{project.impact.institutions}</p>
                            <p className="text-xs text-secondary">Institutions</p>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-secondary text-center mt-3">
                        Reach: {project.impact.reach}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link
                      to="/contact"
                      className="block w-full py-3 bg-primary text-white text-center font-medium rounded-xl hover:bg-primary-light transition-colors"
                    >
                      Get Involved
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ProjectDetailPage;
