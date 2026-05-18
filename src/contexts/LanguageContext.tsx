import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'es';

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.practiceAreas': 'Practice Areas',
    'nav.lawyers': 'Lawyers',
    'nav.caseStudies': 'Case Studies',
    'nav.blog': 'Legal Insights',
    'nav.contact': 'Contact',
    'nav.consultation': 'Book Consultation',

    // Footer
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.disclaimer': 'Legal Disclaimer',
    'footer.cookie': 'Cookie Policy',
    'footer.contact': 'Contact Info',
    'footer.phone': '+233 30 245 6789',
    'footer.email': 'info@fiadjoelaw.com.gh',
    'footer.copyright': '© {year} {firmName}. All rights reserved.',

    // Contact
    'contact.title': 'Send us a Message',
    'contact.subtitle': 'Get in touch with our legal team. We\'re here to provide expert guidance and support for all your legal needs.',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Enter your email',
    'contact.phone': 'Phone Number',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.consultation': 'Schedule Consultation',
    'contact.disclaimer': 'The information provided on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is created by your use of this website or your submission of information through our contact forms. Please contact us directly to discuss your specific legal needs.',

    // Blog
    'blog.title': 'Legal Insights',
    'blog.subtitle': 'Expert analysis, practical guidance, and updates on Ghanaian law and legal developments.',
    'blog.readMore': 'Read Article',

    // Engagement
    'engagement.helpful': 'Was this article helpful?',
    'engagement.like': 'Like',
    'engagement.dislike': 'Dislike',
    'engagement.likes': 'Likes',
    'engagement.dislikes': 'Dislikes',
    'engagement.thanksLike': "Thanks for your feedback! We're glad you found this helpful.",
    'engagement.thanksDislike': "Thanks for your feedback. We'll work to improve our content.",
    'engagement.default': "Your feedback helps us improve our content.",

    // Language
    'language.english': 'English',
    'language.french': 'Français',
    'language.spanish': 'Español',
    'language.select': 'Select Language',

    // Admin
    'admin.login.title': 'Admin Portal',
    'admin.login.welcome': 'Welcome Back',
    'admin.login.email': 'Email Address',
    'admin.login.password': 'Password',
    'admin.login.signIn': 'Sign In',
    'admin.dashboard': 'Dashboard',
    'admin.blogPosts': 'Blog Posts',
    'admin.users': 'Users',
    'admin.settings': 'Settings',
    'admin.logout': 'Logout',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.practiceAreas': 'Domaines d\'activité',
    'nav.lawyers': 'Avocats',
    'nav.caseStudies': 'Études de cas',
    'nav.blog': 'Actualités Juridiques',
    'nav.contact': 'Contact',
    'nav.consultation': 'Réserver une Consultation',

    // Footer
    'footer.legal': 'Légal',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.disclaimer': 'Avis juridique',
    'footer.cookie': 'Politique des cookies',
    'footer.contact': 'Informations de contact',
    'footer.phone': '+233 30 245 6789',
    'footer.email': 'info@fiadjoelaw.com.gh',
    'footer.copyright': '© {year} {firmName}. Tous droits réservés.',

    // Contact
    'contact.title': 'Envoyez-nous un message',
    'contact.subtitle': 'Contactez notre équipe juridique. Nous sommes là pour vous fournir des conseils et un soutien experts pour tous vos besoins juridiques.',
    'contact.firstName': 'Prénom',
    'contact.lastName': 'Nom de famille',
    'contact.email': 'Entrez votre email',
    'contact.phone': 'Numéro de téléphone',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'contact.consultation': 'Planifier une consultation',
    'contact.disclaimer': 'Les informations fournies sur ce site Web sont destinées uniquement à des fins d\'information générale et ne constituent pas des conseils juridiques. Aucune relation avocat-client n\'est créée par l\'utilisation de ce site Web ou la soumission d\'informations via nos formulaires de contact. Veuillez nous contacter directement pour discuter de vos besoins juridiques spécifiques.',

    // Blog
    'blog.title': 'Actualités Juridiques',
    'blog.subtitle': 'Analyses expertes, conseils pratiques et mises à jour sur le droit ghanéen et les développements juridiques.',
    'blog.readMore': 'Lire l\'article',

    // Engagement
    'engagement.helpful': 'Cet article vous a-t-il été utile ?',
    'engagement.like': 'J\'aime',
    'engagement.dislike': 'Je n\'aime pas',
    'engagement.likes': 'J\'aimes',
    'engagement.dislikes': 'Je n\'aimes pas',
    'engagement.thanksLike': 'Merci pour votre avis ! Nous sommes contents que cela vous ait été utile.',
    'engagement.thanksDislike': 'Merci pour votre avis. Nous allons travailler à améliorer notre contenu.',
    'engagement.default': 'Votre avis nous aide à améliorer notre contenu.',

    // Language
    'language.english': 'English',
    'language.french': 'Français',
    'language.spanish': 'Español',
    'language.select': 'Sélectionner la langue',

    // Admin
    'admin.login.title': 'Portail administrateur',
    'admin.login.welcome': 'Bon retour',
    'admin.login.email': 'Adresse e-mail',
    'admin.login.password': 'Mot de passe',
    'admin.login.signIn': 'Se connecter',
    'admin.dashboard': 'Tableau de bord',
    'admin.blogPosts': 'Articles de blog',
    'admin.users': 'Utilisateurs',
    'admin.settings': 'Paramètres',
    'admin.logout': 'Se déconnecter',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.practiceAreas': 'Áreas de Práctica',
    'nav.lawyers': 'Abogados',
    'nav.caseStudies': 'Casos de Estudio',
    'nav.blog': 'Artículos Legales',
    'nav.contact': 'Contacto',
    'nav.consultation': 'Reservar Consulta',

    // Footer
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Uso',
    'footer.disclaimer': 'Aviso Legal',
    'footer.cookie': 'Política de Cookies',
    'footer.contact': 'Información de Contacto',
    'footer.phone': '+233 30 245 6789',
    'footer.email': 'info@fiadjoelaw.com.gh',
    'footer.copyright': '© {year} {firmName}. Todos los derechos reservados.',

    // Contact
    'contact.title': 'Envíenos un mensaje',
    'contact.subtitle': 'Comuníquese con nuestro equipo legal. Estamos aquí para brindarle orientación experta y apoyo para todas sus necesidades legales.',
    'contact.firstName': 'Nombre',
    'contact.lastName': 'Apellido',
    'contact.email': 'Ingrese su correo electrónico',
    'contact.phone': 'Número de teléfono',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.consultation': 'Agendar consulta',
    'contact.disclaimer': 'La información proporcionada en este sitio web es solo para fines informativos generales y no constituye asesoramiento legal. Ninguna relación abogado-cliente se crea mediante el uso de este sitio web o la presentación de información a través de nuestros formularios de contacto. Por favor, contáctenos directamente para discutir sus necesidades legales específicas.',

    // Blog
    'blog.title': 'Artículos Legales',
    'blog.subtitle': 'Análisis experto, orientación práctica y actualizaciones sobre derecho ghanés y desarrollos legales.',
    'blog.readMore': 'Leer Artículo',

    // Engagement
    'engagement.helpful': '¿Fue útil este artículo?',
    'engagement.like': 'Me gusta',
    'engagement.dislike': 'No me gusta',
    'engagement.likes': 'Me gustas',
    'engagement.dislikes': 'No me gustas',
    'engagement.thanksLike': '¡Gracias por su comentario! Nos alegra que haya encontrado esto útil.',
    'engagement.thanksDislike': 'Gracias por su comentario. Trabajaremos para mejorar nuestro contenido.',
    'engagement.default': 'Su opinión nos ayuda a mejorar nuestro contenido.',

    // Language
    'language.english': 'English',
    'language.french': 'Français',
    'language.spanish': 'Español',
    'language.select': 'Seleccionar Idioma',

    // Admin
    'admin.login.title': 'Portal de Administrador',
    'admin.login.welcome': 'Bienvenido de nuevo',
    'admin.login.email': 'Dirección de Correo Electrónico',
    'admin.login.password': 'Contraseña',
    'admin.login.signIn': 'Iniciar Sesión',
    'admin.dashboard': 'Panel de Control',
    'admin.blogPosts': 'Publicaciones de Blog',
    'admin.users': 'Usuarios',
    'admin.settings': 'Configuración',
    'admin.logout': 'Cerrar Sesión',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
  format: (key: string, params?: Record<string, string>) => ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  React.useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string, params?: Record<string, string>): string => {
    const translation = translations[language][key] || translations.en[key] || key;
    if (params) {
      return Object.keys(params).reduce((result, param) => {
        return result.replace(`{${param}}`, params[param]);
      }, translation);
    }
    return translation;
  };

  const format = (key: string, params?: Record<string, string>): ReactNode => {
    const translation = t(key, params);
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, format }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};