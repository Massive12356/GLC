import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Heart, Users, Activity, MapPin, ChevronLeft, ChevronRight, CheckCircle2, Stethoscope, HandHeart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ngoInfo, projects, impactStats, patientStories } from '../data/mockData';

const HomePage = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const featuredEvents = [
    {
      id: 1,
      title: 'World Health Day Community Screening',
      date: 'April 7, 2026',
      type: 'Health Screening',
      location: 'Nima Market, Accra',
      description: 'Free health screenings, blood pressure checks, diabetes testing, and malaria rapid diagnostics.',
      slug: 'health-day-2026'
    },
    {
      id: 2,
      title: 'Maternal Health Workshop - Kumasi',
      date: 'May 15, 2026',
      type: 'Workshop',
      location: 'Komfo Anokye Teaching Hospital, Kumasi',
      description: 'Educational workshop on prenatal care, safe delivery practices, and postnatal nutrition.',
      slug: 'maternal-health-kumasi'
    },
    {
      id: 3,
      title: 'Pediatric Surgery Screening Camp',
      date: 'June 20, 2026',
      type: 'Medical Camp',
      location: 'Rural Health Center, Northern Region',
      description: 'Screening camp for children requiring surgical interventions.',
      slug: 'pediatric-camp-2026'
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const heroSlides = [
    {
      title: "Making Life-Saving Healthcare Accessible for Everyone",
      highlight: "Accessible",
      description: "Nyamedua ensures equitable access to life-saving medical interventions for financially disadvantaged patients across West Africa.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920",
      video: "https://res.cloudinary.com/dsk62cvbs/video/upload/v1778261307/hero_video_f52lwf.mp4",
      topText: "Donate to changing lives. Be part of the healing campaign...",
    },
    {
      title: "Every Child Deserves a Chance to Live",
      highlight: "Chance",
      description: "Our Pediatric Care & Surgery Program provides life-saving treatments for children who cannot afford them.",
      image: "https://images.pexels.com/photos/7108293/pexels-photo-7108293.jpeg?auto=compress&cs=tinysrgb&w=1920",
      video: "https://res.cloudinary.com/dsk62cvbs/video/upload/v1778261732/aid_qsyndp.mp4",
      topText: "Give every child the gift of health and a bright future...",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Typewriter effect
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const text = heroSlides[currentSlide].topText;
    let i = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i > text.length) {
          timeout = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 2000);
          return;
        }
      } else {
        setDisplayedText(text.slice(0, i - 1));
        i--;
        if (i === 0) {
          isDeleting = false;
          timeout = setTimeout(() => {
            tick();
          }, 500);
          return;
        }
      }
      timeout = setTimeout(tick, isDeleting ? 28 : 48);
    };

    tick();
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(blink);
  }, []);

  // Programmatically play/pause videos on slide change (mobile Safari fix)
  useEffect(() => {
    const timer = setTimeout(() => {
      videoRefs.current.forEach((video, index) => {
        if (!video) return;
        if (index === currentSlide) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, 150);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <>
      <Helmet>
        <title>Generational Life Changers | Ensuring Equitable Access to Life-Saving Healthcare</title>
        <meta name="description" content="Nyamedua supports financially disadvantaged patients who cannot afford life-saving medical procedures and surgeries across West Africa." />
        <meta name="keywords" content="healthcare NGO, medical charity, surgery funding, West Africa, Ghana, patient support, health education" />
        <meta property="og:title" content="Nyamedua Foundation | Life-Saving Healthcare for Everyone" />
        <meta property="og:description" content="Ensuring equitable access to life-saving interventions across West Africa." />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section - Carousel Design */}
        <section className="relative min-h-screen flex flex-col overflow-hidden">
          {/* Background Video / Image Carousel with Dark Overlay */}
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.video ? (
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={slide.image}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={slide.video} type="video/mp4" />
                  </video>
                ) : (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                )}
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-24">
            
            {/* Top Typewriter Text */}
            <motion.div
              key={`typewriter-${currentSlide}`}
              className="pt-4 hidden md:block md:pt-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-[#D4E157] font-medium text-lg md:text-xl italic tracking-wide">
                {displayedText}
                <span 
                  className={`inline-block w-0.5 h-5 md:h-6 bg-[#D4E157] ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transition: 'opacity 0.1s' }}
                />
              </p>
            </motion.div>

            {/* Middle Content */}
            <div className="flex-1 flex items-center">
              <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
                {/* Headline */}
                <motion.h1 
                  key={`headline-${currentSlide}`}
                  className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl font-display font-bold text-white leading-tight mb-6"
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {heroSlides[currentSlide].title.split(heroSlides[currentSlide].highlight)[0]}
                  <span className="relative inline-block text-accent">
                    {heroSlides[currentSlide].highlight}
                    <motion.svg 
                      className="absolute -bottom-2 left-0 w-full" 
                      height="12" 
                      viewBox="0 0 200 12" 
                      preserveAspectRatio="none"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                      style={{ originX: 0 }}
                    >
                      <path d="M0,8 Q50,0 100,8 T200,8" stroke="#74A323" strokeWidth="6" fill="none" />
                    </motion.svg>
                  </span>
                  {heroSlides[currentSlide].title.split(heroSlides[currentSlide].highlight)[1]}
                </motion.h1>

                {/* Description */}
                <motion.p 
                  key={`desc-${currentSlide}`}
                  className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed font-medium mx-auto md:mx-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  key={`cta-${currentSlide}`}
                  className="flex flex-col sm:flex-row items-center gap-6 mb-8"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                  <Link
                    to="/donate"
                    className="inline-flex items-center justify-center px-10 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Link>
                  <Link
                    to="/volunteer"
                    className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Become a Volunteer
                  </Link>
                </motion.div>

                {/* Carousel Dots */}
                <motion.div 
                  key={`dots-${currentSlide}`}
                  className="flex gap-3 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-accent w-8' 
                          : 'bg-white/40 hover:bg-white/60 w-3'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </motion.div>
              </div>
            </div>


          </div>

          {/* Navigation Arrows */}
          <motion.div 
            key={`nav-${currentSlide}`}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <button
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </motion.div>

        </section>

        {/* Floating Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Activity, value: impactStats.surgeriesFunded, label: 'Surgeries Funded', suffix: '+' },
                { icon: Heart, value: impactStats.childrenSupported, label: 'Children Supported', suffix: '+' },
                { icon: Users, value: impactStats.volunteersMobilized, label: 'Volunteers', suffix: '+' },
                { icon: MapPin, value: impactStats.communitiesReached, label: 'Communities Reached', suffix: '+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-2xl mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-secondary text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
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
                Driven by compassion, guided by integrity, and committed to saving lives through accessible healthcare.
              </p>
            </motion.div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card - Clean White with Gradient Border */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 hover:from-primary/40 hover:via-accent/30 hover:to-primary/20 transition-all duration-500"
              >
                <div className="relative bg-white rounded-3xl p-8 md:p-10 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/3" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:shadow-primary/30 transition-all duration-300">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-8xl font-display font-bold text-primary/[0.04] leading-none select-none">01</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">Our Mission</h3>
                    <p className="text-secondary leading-relaxed text-lg mb-8">{ngoInfo.mission}</p>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-primary/10">
                      <div className="group/stat">
                        <div className="text-3xl font-display font-bold text-primary group-hover/stat:text-accent transition-colors">{impactStats.surgeriesFunded}+</div>
                        <div className="text-secondary text-sm mt-1">Surgeries Funded</div>
                      </div>
                      <div className="group/stat">
                        <div className="text-3xl font-display font-bold text-primary group-hover/stat:text-accent transition-colors">${(impactStats.fundsRaised / 1000000).toFixed(1)}M+</div>
                        <div className="text-secondary text-sm mt-1">Funds Raised</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card - Rich Warm Brown */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-[#8B6914]/40 via-[#5C3D2E]/30 to-accent/20 hover:from-[#8B6914]/60 hover:via-[#5C3D2E]/50 hover:to-accent/30 transition-all duration-500"
              >
                <div className="relative bg-[#5C3D2E] rounded-3xl p-8 md:p-10 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl shadow-lg shadow-accent/30 group-hover:scale-110 group-hover:shadow-accent/40 transition-all duration-300">
                        <Activity className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-8xl font-display font-bold text-white/[0.06] leading-none select-none">02</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-white/85 leading-relaxed text-lg mb-8">{ngoInfo.vision}</p>

                    <div className="pt-6 border-t border-white/15">
                      <blockquote className="relative pl-5 border-l-2 border-accent">
                        <p className="text-white/90 font-medium italic text-lg leading-relaxed">
                          "Healthcare is a human right, not a privilege."
                        </p>
                        <cite className="text-accent text-sm not-italic mt-2 block">— Nyamedua Foundation</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Programs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Our Programs & Interventions
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Explore our life-saving healthcare initiatives serving communities across West Africa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Full Image Background */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                    {/* Category Badge */}
                    <div className="absolute top-5 left-5">
                      <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    {/* Content Overlaid */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-white/70">
                          <MapPin className="w-4 h-4 mr-1.5" />
                          {project.location}
                        </div>
                        <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex items-center text-accent font-semibold text-sm hover:text-white transition-colors"
                        >
                          Learn More
                          <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-[#5C3D2E] transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                View All Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Patient Success Stories Preview */}
        <section className="py-20 bg-gradient-to-b from-white via-accent/[0.03] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Real Impact</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Success Stories
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
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image with curved bottom */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    {/* Status Badge */}
                    <div className="absolute top-5 left-5">
                      <span className={`px-4 py-1.5 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm ${
                        story.status === 'Recovered' ? 'bg-accent text-white' : 'bg-amber-500 text-white'
                      }`}>
                        {story.status === 'Recovered' && <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse" />}
                        {story.status}
                      </span>
                    </div>
                    {/* Patient Name Overlay */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="text-xl font-display font-bold text-white">{story.name}, <span className="text-accent font-medium">{story.age}</span></h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pt-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Stethoscope className="w-4 h-4 text-accent" />
                      <p className="text-accent text-sm font-semibold">{story.condition}</p>
                    </div>
                    <p className="text-secondary text-sm mb-5 line-clamp-3 leading-relaxed">{story.story}</p>

                    {/* Progress Bar for Fundraising */}
                    <div className="mb-5">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-secondary font-medium">Funds Raised</span>
                        <span className="text-primary font-bold">${story.fundsRaised.toLocaleString()} <span className="text-secondary font-normal">/ ${story.fundsNeeded.toLocaleString()}</span></span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min((story.fundsRaised / story.fundsNeeded) * 100, 100)}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                        />
                      </div>
                    </div>

                    <Link
                      to="/success-stories"
                      className="inline-flex items-center text-primary font-semibold text-sm hover:text-accent transition-colors group/link"
                    >
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/success-stories"
                className="inline-flex items-center px-8 py-3.5 bg-[#5C3D2E] text-white font-semibold rounded-full hover:bg-[#4A3226] transition-all duration-300 shadow-lg shadow-[#5C3D2E]/20 hover:shadow-[#5C3D2E]/30 hover:-translate-y-0.5"
              >
                View All Stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get Involved</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Upcoming Events
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Join us at our health screenings, workshops, and community outreach events.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-accent/30"
                >
                  {/* Top Accent Bar */}
                  <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-primary via-accent to-primary-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Date Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex flex-col items-center justify-center shadow-md shadow-primary/20">
                        <span className="text-white text-[10px] font-bold uppercase leading-none">{event.date.split(' ')[0]}</span>
                        <span className="text-white text-lg font-bold leading-none">{event.date.split(' ')[1].replace(',', '')}</span>
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{event.title}</h3>
                  <p className="text-secondary text-sm mb-5 line-clamp-2 leading-relaxed">{event.description}</p>

                  <div className="flex items-center text-sm text-secondary mb-5 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm mr-3">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-medium">{event.location}</span>
                  </div>

                  <Link
                    to={`/events/${event.slug}/register`}
                    className="inline-flex items-center w-full justify-center px-5 py-3 bg-primary/5 text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 group/link"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-[#5C3D2E] transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                View All Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Get Involved CTA Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Become a Volunteer',
                  description: 'Join our team and contribute your skills to deliver healthcare to those who need it most.',
                  icon: Users,
                  link: '/volunteer',
                  gradient: 'from-primary to-primary-light',
                  shadow: 'shadow-primary/20',
                  hoverShadow: 'shadow-primary/30'
                },
                {
                  title: 'Partner With Us',
                  description: 'Collaborate with us to expand access to life-saving medical care across West Africa.',
                  icon: HandHeart,
                  link: '/partners',
                  gradient: 'from-accent to-accent-light',
                  shadow: 'shadow-accent/20',
                  hoverShadow: 'shadow-accent/30'
                },
                {
                  title: 'Make a Donation',
                  description: 'Your contribution directly funds surgeries, treatments, and health education programs.',
                  icon: Heart,
                  link: '/donate',
                  gradient: 'from-[#5C3D2E] to-[#7A5A4A]',
                  shadow: 'shadow-[#5C3D2E]/20',
                  hoverShadow: 'shadow-[#5C3D2E]/30'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100 hover:border-transparent"
                >
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl mb-6 shadow-lg ${item.shadow} group-hover:scale-110 group-hover:${item.hoverShadow} transition-all duration-300`}>
                      <item.icon className="w-9 h-9 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-secondary mb-8 leading-relaxed">{item.description}</p>
                    <Link
                      to={item.link}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${item.gradient} text-white font-semibold rounded-xl shadow-md ${item.shadow} hover:shadow-lg hover:${item.hoverShadow} hover:-translate-y-0.5 transition-all duration-300 group/link`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-10 md:p-16 shadow-xl border-2 border-accent/20 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <span className="inline-block px-4 py-2 bg-accent/20 text-primary text-sm font-semibold rounded-full mb-6">
                    Newsletter
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
                    Stay Updated
                  </h2>
                  <p className="text-secondary text-lg leading-relaxed mb-8">
                    Subscribe to our newsletter for patient success stories, health education, event updates, and opportunities to make an impact.
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      'Monthly impact reports and patient stories',
                      'Early access to volunteer opportunities',
                      'Health education resources and tips'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-secondary text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Content - Form Card */}
                <div className="bg-background rounded-2xl p-8 border-2 border-accent/20">
                  <h3 className="text-xl font-display font-bold text-primary mb-2">Join Our Community</h3>
                  <p className="text-secondary text-sm mb-6">
                    Join 5,000+ subscribers who receive our monthly updates.
                  </p>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-primary text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 rounded-xl bg-white border-2 border-primary/10 text-primary placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-primary text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-5 py-4 rounded-xl bg-white border-2 border-primary/10 text-primary placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                    >
                      Subscribe Now
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                  
                  <p className="text-secondary text-xs text-center mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default HomePage;
