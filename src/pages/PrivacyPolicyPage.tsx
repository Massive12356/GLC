import { motion } from 'framer-motion';
import { firmInfo } from '../data/mockData';

const PrivacyPolicyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-secondary">
          <p className="text-secondary-light mb-6">Last Updated: February 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Introduction</h2>
            <p>
              {firmInfo.name} ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide through our contact forms or consultation requests.</li>
              <li><strong>Usage Information:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Respond to your inquiries and provide legal services</li>
              <li>Schedule and manage consultations</li>
              <li>Send you legal updates and newsletters (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as required by law or to provide our services (e.g., to 
              expert witnesses or co-counsel with your authorization).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              <strong>{firmInfo.name}</strong><br />
              {firmInfo.address}<br />
              Email: {firmInfo.email}<br />
              Phone: {firmInfo.phone}
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
