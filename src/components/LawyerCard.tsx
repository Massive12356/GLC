import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { Lawyer } from "../types";

interface LawyerCardProps {
  lawyer: Lawyer;
}

const LawyerCard = ({ lawyer }: LawyerCardProps) => {
  const initials = lawyer.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full max-w-sm">
      {/* Identity Header */}
      <div className="p-6 pb-4 flex items-center gap-4 border-b border-gray-100">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
        {initials}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary leading-tight">
            {lawyer.subTitle} {lawyer.name}
          </h3>
          <p className="text-sm text-accent font-medium">{lawyer.title}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-secondary-light mb-4">
          <span className="font-medium text-secondary">Experience:</span>{" "}
          {lawyer.experience}
        </p>

        {/* Specializations */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(lawyer.specializations || []).slice(0, 3).map((spec, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full"
            >
              {spec}
            </span>
          ))}
          {(lawyer.specializations || []).length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-secondary-light text-xs rounded-full">
              +{(lawyer.specializations || []).length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Link
            to={`/lawyers/${lawyer.id}`}
            className="inline-flex items-center text-accent text-sm font-medium hover:underline"
          >
            View Profile →
          </Link>

          <div className="flex gap-2">
            <a
              href={`mailto:${lawyer.email}`}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-secondary-light hover:text-accent hover:border-accent transition"
              aria-label={`Email ${lawyer.name}`}
            >
              <Mail size={16} />
            </a>
            <a
              href={`tel:${lawyer.phone}`}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-secondary-light hover:text-accent hover:border-accent transition"
              aria-label={`Call ${lawyer.name}`}
            >
              <Phone size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;