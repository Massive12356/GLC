import { motion } from 'framer-motion';
import { firmInfo } from '../data/mockData';

const LegalDisclaimerPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Legal Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none text-secondary">
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">No Attorney-Client Relationship</h2>
            <p>
              The information provided on this website is for general informational purposes only 
              and does not constitute legal advice. Your use of this website, including the submission 
              of information through contact forms, does not create an attorney-client relationship 
              between you and {firmInfo.name}.
            </p>
            <p className="mt-4">
              An attorney-client relationship is only established after we have expressly agreed to 
              represent you and you have signed an engagement letter with our firm.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">No Legal Advice</h2>
            <p>
              The content on this website is not intended to be a substitute for professional legal 
              advice. Always seek the advice of a qualified attorney regarding any legal questions 
              you may have. Do not disregard professional legal advice or delay seeking it because 
              of something you have read on this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">No Guarantee of Results</h2>
            <p>
              Every legal matter is unique, and past results do not guarantee future outcomes. 
              The information about case results or testimonials on this website does not constitute 
              a guarantee, warranty, or prediction regarding the outcome of your legal matter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Confidentiality Warning</h2>
            <p>
              Information you send to us via email or through website forms may not be secure and 
              may not be confidential. Do not send any confidential or sensitive information through 
              this website until an attorney-client relationship has been established.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Jurisdictional Limitations</h2>
            <p>
              {firmInfo.name} is licensed to practice law in Ghana. The information on this website 
              may not comply with the laws of other jurisdictions. If you are seeking legal advice 
              outside of Ghana, please consult with an attorney licensed in your jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Third-Party Content</h2>
            <p>
              This website may contain links to third-party websites or content. We do not endorse 
              and are not responsible for the accuracy or reliability of any information, opinion, 
              or advice contained in such third-party content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Changes to Website</h2>
            <p>
              We reserve the right to modify, update, or remove content from this website at any 
              time without notice. The information on this website may not reflect the most current 
              legal developments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Contact Us</h2>
            <p>
              If you have any questions about this disclaimer or need legal assistance, please contact us:
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

export default LegalDisclaimerPage;
