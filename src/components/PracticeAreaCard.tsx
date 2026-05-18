import { Link } from 'react-router-dom';
import {Scale, LucideIcon } from 'lucide-react';
import { PracticeArea } from '../types';

const iconMap: Record<string, LucideIcon> = {
  Scale
};

interface PracticeAreaCardProps {
  practiceArea: PracticeArea;
  compact?: boolean;
}

const PracticeAreaCard = ({ practiceArea, compact = false }: PracticeAreaCardProps) => {
  const IconComponent = iconMap[practiceArea.icon] || Scale;

  if (compact) {
    return (
      <Link
        to={`/practice-areas/${practiceArea.slug}`}
        className="group block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
            <IconComponent className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-serif font-semibold text-primary group-hover:text-accent transition-colors mb-2">
              {practiceArea.title}
            </h3>
            <p className="text-secondary-light text-sm line-clamp-2">
              {practiceArea.shortDescription}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/practice-areas/${practiceArea.slug}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={practiceArea.image}
          alt={practiceArea.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-2 text-white mb-2">
            <IconComponent className="w-5 h-5" />
            <span className="text-sm font-medium">Practice Area</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-primary group-hover:text-accent transition-colors mb-3">
          {practiceArea.title}
        </h3>
        <p className="text-secondary-light text-sm leading-relaxed mb-4">
          {practiceArea.shortDescription}
        </p>
        <span className="inline-flex items-center text-accent text-sm font-medium group-hover:underline">
          Learn More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default PracticeAreaCard;
