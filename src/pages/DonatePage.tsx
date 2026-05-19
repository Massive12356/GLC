import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, Copy, CheckCircle, Wallet, Building2, Smartphone, CreditCard, Shield, Zap, Gift, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ngoInfo } from '../data/mockData';

const DonatePage = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const predefinedAmounts = [50, 100, 250, 500, 1000];

  const handlePaystackPayment = async () => {
    const amount = selectedAmount || Number(customAmount);
    if (!amount || amount < 1) {
      alert('Please select or enter a valid amount');
      return;
    }
    if (!donorEmail) {
      alert('Please enter your email address');
      return;
    }

    setIsProcessing(true);
    // Simulate Paystack payment flow
    // In production, this would call your backend API to initialize Paystack
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Redirecting to Paystack for GHS ${amount} payment...`);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Donate | Generational Life Changers</title>
        <meta name="description" content="Support Nyamedua Foundation in funding life-saving surgeries and healthcare for disadvantaged patients across West Africa." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-medium rounded-full mb-6"
            >
              <Heart className="w-4 h-4 inline mr-2" />
              Support Our Mission
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Make a Donation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Your contribution directly funds life-saving surgeries, medical treatments, and health education for patients who cannot afford them.
            </motion.p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Your Impact</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                How Your Donation Helps
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Every contribution directly supports life-saving medical interventions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: '$10 - Medication Support',
                  description: 'Provides essential medications, pain relief, and antibiotics for post-surgical recovery.',
                  icon: Heart
                },
                {
                  title: '$50 - Diagnostic Support',
                  description: 'Covers blood tests, imaging scans, and pre-surgical screenings to ensure safe procedures.',
                  icon: Wallet
                },
                {
                  title: '$100+ - Surgery Fund',
                  description: 'Contributes directly to life-saving surgeries including cardiac, tumor removal, and emergency procedures.',
                  icon: Building2
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Paystack Payment Section */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-accent/20"
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                  Donate Online
                </h2>
                <p className="text-secondary max-w-lg mx-auto">
                  Quick, secure, and seamless payment with Paystack. Choose an amount or enter a custom donation.
                </p>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-primary mb-4">Select Amount (GHS)</label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'bg-primary text-white'
                          : 'bg-background text-primary hover:bg-primary/10 border border-primary/20'
                      }`}
                    >
                      GHS {amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary font-medium">GHS</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-14 pr-4 py-4 bg-background border border-primary/20 rounded-xl text-primary placeholder-secondary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Donor Information */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-4 py-4 bg-background border border-primary/20 rounded-xl text-primary placeholder-secondary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Email Address *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-4 py-4 bg-background border border-primary/20 rounded-xl text-primary placeholder-secondary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Paystack Button */}
              <button
                onClick={handlePaystackPayment}
                disabled={isProcessing}
                className="w-full py-4 bg-accent text-primary-dark font-bold text-lg rounded-xl hover:bg-accent-light transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-dark/30 border-t-primary-dark rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Pay with Paystack
                  </>
                )}
              </button>

              {/* Security Badges */}
              <div className="flex items-center justify-center gap-6 mt-6 text-secondary text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  <span>Tax Deductible</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Other Payment Options</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Alternative Ways to Donate
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Prefer traditional methods? Use bank transfer or mobile money.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Bank Transfer */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-primary/5 shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-primary">Bank Transfer</h3>
                    <p className="text-secondary text-sm">Direct bank deposit or transfer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-4">
                    <label className="text-xs font-semibold text-secondary uppercase tracking-wider">Account Name</label>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-primary font-medium">{ngoInfo.bankDetails.accountName}</span>
                      <button
                        onClick={() => copyToClipboard(ngoInfo.bankDetails.accountName, 'accountName')}
                        className="text-accent hover:text-primary transition-colors"
                      >
                        {copied === 'accountName' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-4">
                    <label className="text-xs font-semibold text-secondary uppercase tracking-wider">Bank Name</label>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-primary font-medium">{ngoInfo.bankDetails.bankName}</span>
                      <button
                        onClick={() => copyToClipboard(ngoInfo.bankDetails.bankName, 'bankName')}
                        className="text-accent hover:text-primary transition-colors"
                      >
                        {copied === 'bankName' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-4">
                    <label className="text-xs font-semibold text-secondary uppercase tracking-wider">Account Number</label>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-primary font-medium">{ngoInfo.bankDetails.accountNumber}</span>
                      <button
                        onClick={() => copyToClipboard(ngoInfo.bankDetails.accountNumber, 'accountNumber')}
                        className="text-accent hover:text-primary transition-colors"
                      >
                        {copied === 'accountNumber' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-4">
                    <label className="text-xs font-semibold text-secondary uppercase tracking-wider">Branch</label>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-primary font-medium">{ngoInfo.bankDetails.branch}</span>
                      <button
                        onClick={() => copyToClipboard(ngoInfo.bankDetails.branch, 'branch')}
                        className="text-accent hover:text-primary transition-colors"
                      >
                        {copied === 'branch' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Money */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-primary/5 shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Smartphone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-primary">Mobile Money</h3>
                    <p className="text-secondary text-sm">Quick and convenient mobile payment</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-4">
                    <label className="text-xs font-semibold text-secondary uppercase tracking-wider">MoMo Number</label>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-primary font-medium">{ngoInfo.momoDetails.number}</span>
                      <button
                        onClick={() => copyToClipboard(ngoInfo.momoDetails.number, 'momoNumber')}
                        className="text-accent hover:text-primary transition-colors"
                      >
                        {copied === 'momoNumber' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-4">
                    <label className="text-xs font-semibold text-secondary uppercase tracking-wider">Account Name</label>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-primary font-medium">{ngoInfo.momoDetails.name}</span>
                      <button
                        onClick={() => copyToClipboard(ngoInfo.momoDetails.name, 'momoName')}
                        className="text-accent hover:text-primary transition-colors"
                      >
                        {copied === 'momoName' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-accent/10 rounded-xl p-6 mt-6">
                    <p className="text-primary text-sm text-center">
                      <strong>Note:</strong> All donations are processed securely. You will receive a receipt via email for your records.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section - Light Green Theme */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-10 md:p-16 shadow-xl border-2 border-accent/20 overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                    Questions About Donating?
                  </h2>
                  <p className="text-secondary text-lg leading-relaxed">
                    Contact us for more information about donation options or to discuss corporate sponsorship opportunities.
                  </p>
                </div>

                {/* Right Content - CTA Card */}
                <div className="bg-background rounded-2xl p-8 border-2 border-accent/20 text-center">
                  <p className="text-secondary mb-6">
                    Ready to make a difference? Get in touch with our team.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 group"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default DonatePage;
