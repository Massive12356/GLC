import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ngoInfo, projects } from '../data/mockData';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Impact', path: '/impact' },
    { name: 'Programs', path: '/projects' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Partners', path: '/partners' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Donate', path: '/donate' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Use', path: '/terms-of-use' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://res.cloudinary.com/dsk62cvbs/image/upload/v1779126323/GLC_ms1rrt.png"
                alt="Nyamedua Foundation" 
                className="h-20 w-auto object-contain rounded-xl bg-white px-3 py-1"
              />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-sm">
              {ngoInfo.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={ngoInfo.socialMedia.instagram !== '[To be created]' ? ngoInfo.socialMedia.instagram : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary-dark transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={ngoInfo.socialMedia.twitter !== '[To be created]' ? ngoInfo.socialMedia.twitter : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary-dark transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href={ngoInfo.socialMedia.facebook !== '[To be created]' ? ngoInfo.socialMedia.facebook : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary-dark transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={`mailto:${ngoInfo.email}`}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary-dark transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-white">Our Programs</h4>
            <ul className="space-y-3">
              {projects.slice(0, 5).map((project) => (
                <li key={project.id}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">{ngoInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href={`tel:${ngoInfo.phone}`} className="text-white/70 hover:text-accent transition-colors text-sm">
                  {ngoInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href={`mailto:${ngoInfo.email}`} className="text-white/70 hover:text-accent transition-colors text-sm">
                  {ngoInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">{ngoInfo.businessHours}</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/60 text-xs mb-2">Registration</p>
              <p className="text-white text-sm font-medium">{ngoInfo.registrationNumber}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm flex items-center">
              &copy; {new Date().getFullYear()} {ngoInfo.name}. Made with 
              <Heart className="w-4 h-4 mx-1 text-accent" /> 
              for healthcare equity.
            </p>
            <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-white/50 hover:text-accent text-xs transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
