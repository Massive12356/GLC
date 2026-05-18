import { motion } from 'framer-motion';
import { Play, Quote, Star } from 'lucide-react';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Hear from clients who have experienced our commitment to excellence firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10"
            >
              {/* Video Indicator */}
              {testimonial.isVideo && (
                <div className="absolute -top-3 -right-3 bg-accent text-primary px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <Play className="w-3 h-3 mr-1" />
                  Video
                </div>
              )}

              <Quote className="w-8 h-8 text-primary/20 absolute top-4 left-4" />
              
              <blockquote className="text-secondary text-lg italic mb-6 pl-8 relative">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center pl-8">
                <div className="flex-1">
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white"
          >
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-serif font-bold mb-2 text-white">Ready to Experience Excellence?</h3>
              <p className="mb-4">Join hundreds of satisfied clients who trust us with their legal matters.</p>
              <a 
                href="/consultation" 
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors hover:animate-pulse"
              >
                Schedule Your Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;