import { motion } from 'framer-motion';
import { firmInfo } from '../data/mockData';

const TermsOfUsePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Terms of Use</h1>
        
        <div className="prose prose-lg max-w-none text-secondary">
          <p className="text-secondary-light mb-6">Last Updated: February 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms of Use. 
              If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Infringe the rights of others</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use the website to send unsolicited communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, 
              is the property of {firmInfo.name} or its content suppliers and is protected by 
              copyright and other intellectual property laws. You may not reproduce, distribute, 
              modify, or create derivative works from any content without our express written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only 
              and does not constitute legal advice. While we strive to keep the information accurate 
              and up-to-date, we make no representations or warranties of any kind about the 
              completeness, accuracy, reliability, or availability of the website or information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {firmInfo.name} shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising out of or 
              relating to your use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Links to Third-Party Websites</h2>
            <p>
              This website may contain links to third-party websites. We do not endorse and are not 
              responsible for the content, privacy policies, or practices of any third-party websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Modifications</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Changes will be effective 
              immediately upon posting to the website. Your continued use of the website after any 
              changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of 
              the Republic of Ghana. Any disputes arising under these terms shall be subject to the 
              exclusive jurisdiction of the courts of Ghana.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at:
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

export default TermsOfUsePage;
