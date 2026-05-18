import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 relative">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
      <blockquote className="text-secondary mb-6 leading-relaxed relative z-10">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">
          {testimonial.author.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="font-serif font-semibold text-primary">{testimonial.author}</p>
          <p className="text-secondary-light text-sm">{testimonial.role}</p>
          {testimonial.company && (
            <p className="text-accent text-xs">{testimonial.company}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
