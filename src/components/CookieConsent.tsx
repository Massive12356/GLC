import { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart3, Megaphone, Check } from 'lucide-react';

// Cookie consent categories
interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

// Default preferences - necessary is always true
const defaultPreferences: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

// Cookie utility functions
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(defaultPreferences);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check for existing consent on mount
  useEffect(() => {
    const savedConsent = getCookie('cookieConsent');
    if (!savedConsent) {
      setTimeout(() => {
        setIsAnimating(true);
        setIsVisible(true);
      }, 1000);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        setPreferences(parsed);
        applyConsent(parsed);
      } catch (e) {
        console.error('Error parsing cookie consent:', e);
      }
    }
  }, []);

  // Apply consent settings
  const applyConsent = (prefs: ConsentPreferences) => {
    if (prefs.analytics) {
      console.log('Analytics cookies enabled');
    } else {
      console.log('Analytics cookies disabled');
    }

    if (prefs.marketing) {
      console.log('Marketing cookies enabled');
    } else {
      console.log('Marketing cookies disabled');
    }
  };

  // Save consent to cookie
  const saveConsent = (prefs: ConsentPreferences) => {
    setCookie('cookieConsent', JSON.stringify(prefs), 365);
    setPreferences(prefs);
    applyConsent(prefs);
    hideBanner();
  };

  // Hide banner with animation
  const hideBanner = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      setShowPreferences(false);
    }, 300);
  };

  // Handle accept all
  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allAccepted);
  };

  // Handle reject all
  const handleRejectAll = () => {
    saveConsent(defaultPreferences);
  };

  // Handle save preferences
  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  // Toggle preference
  const togglePreference = (key: keyof ConsentPreferences) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible && !isAnimating) return null;

  return (
    <div>
      {/* Main Cookie Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="mx-4 mb-4">
          <div className="max-w-6xl mx-auto bg-[#fefdf9] rounded-xl shadow-2xl border-2 border-accent/30 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-accent/20 bg-gradient-to-r from-[#fefdf9] to-[#f9f6ed]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-md">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-primary">
                    Cookie Preferences
                  </h3>
                  <p className="text-xs text-secondary-light">Your privacy matters to us</p>
                </div>
              </div>
              <button
                onClick={handleRejectAll}
                className="text-secondary-light hover:text-primary transition-colors p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-5">
              <p className="text-secondary text-sm leading-relaxed mb-5">
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                You can customize your preferences or read our{' '}
                <a href="/cookie-policy" className="text-accent-dark hover:underline font-medium">
                  Cookie Policy
                </a>{' '}
                for more information.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Accept All
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 border-2 border-primary/30 text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Manage Preferences
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 text-secondary-light font-medium rounded-lg hover:text-primary hover:bg-gray-100 transition-all duration-200"
                >
                  Reject All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={() => setShowPreferences(false)}
          />

          {/* Modal */}
          <div className="relative bg-[#fefdf9] rounded-xl shadow-2xl border-2 border-accent/30 w-full max-w-md overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-accent/20 bg-gradient-to-r from-[#fefdf9] to-[#f9f6ed]">
              <h3 className="text-xl font-serif font-semibold text-primary">
                Cookie Preferences
              </h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-secondary-light hover:text-primary transition-colors p-1"
                aria-label="Close preferences"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Preferences List */}
            <div className="px-6 py-4 space-y-4">
              {/* Necessary - Always enabled */}
              <div className="flex items-start space-x-4 p-4 bg-[#f5f2e8] rounded-lg border border-accent/10">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-primary">Necessary</h4>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="sr-only"
                      />
                      <div className="w-11 h-6 bg-accent rounded-full">
                        <div className="w-5 h-5 bg-white rounded-full shadow-md transform translate-x-5 translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-light">
                    Essential cookies required for the website to function properly. 
                    These cannot be disabled.
                  </p>
                </div>
              </div>

              {/* Analytics */}
              <div 
                className="flex items-start space-x-4 p-4 bg-[#f5f2e8] rounded-lg border border-accent/10 cursor-pointer hover:bg-[#ebe7d9] transition-colors"
                onClick={() => togglePreference('analytics')}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-primary">Analytics</h4>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => {}}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${preferences.analytics ? 'bg-accent' : 'bg-gray-300'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${preferences.analytics ? 'translate-x-5' : 'translate-x-1'} translate-y-0.5`} />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-light">
                    Help us understand how visitors interact with our website 
                    by collecting anonymous data.
                  </p>
                </div>
              </div>

              {/* Marketing */}
              <div 
                className="flex items-start space-x-4 p-4 bg-[#f5f2e8] rounded-lg border border-accent/10 cursor-pointer hover:bg-[#ebe7d9] transition-colors"
                onClick={() => togglePreference('marketing')}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Megaphone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-primary">Marketing</h4>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => {}}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${preferences.marketing ? 'bg-accent' : 'bg-gray-300'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${preferences.marketing ? 'translate-x-5' : 'translate-x-1'} translate-y-0.5`} />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-light">
                    Used to deliver personalized advertisements and measure 
                    their effectiveness.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-accent/20 flex space-x-3 bg-gradient-to-r from-[#f9f6ed] to-[#fefdf9]">
              <button
                onClick={() => setShowPreferences(false)}
                className="flex-1 px-4 py-2 border-2 border-primary/30 text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-all duration-200 shadow-md"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
