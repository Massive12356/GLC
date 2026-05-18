import { motion } from 'framer-motion';
import { firmInfo } from '../data/mockData';

const CookiePolicyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none text-secondary">
          <p className="text-secondary-light mb-6">Last Updated: February 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you 
              visit a website. They are widely used to make websites work more efficiently and provide 
              information to the website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">How We Use Cookies</h2>
            <p>{firmInfo.name} uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> We use these cookies to understand how visitors interact with our website, helping us improve our services.</li>
              <li><strong>Preference Cookies:</strong> These cookies remember your preferences and settings to enhance your browsing experience.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary">Session Cookies</h3>
                <p>These temporary cookies expire when you close your browser. They help us track your browsing session.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Persistent Cookies</h3>
                <p>These cookies remain on your device for a set period or until you manually delete them. They help us recognize you on subsequent visits.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Third-Party Cookies</h3>
                <p>Some cookies may be placed by third-party services we use, such as analytics providers.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can usually 
              find these settings in the "Options" or "Preferences" menu of your browser. You can 
              choose to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Accept all cookies</li>
              <li>Reject all cookies</li>
              <li>Be notified when a cookie is being sent</li>
              <li>Delete cookies that have already been set</li>
            </ul>
            <p className="mt-4">
              Please note that disabling cookies may affect the functionality of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this 
              page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicyPage;
