import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import PageNotFound from './pages/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import ComingSoonPage from './pages/ComingSoonPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminManagementPage from './pages/admin/AdminManagementPage';
import BlogEditor from './pages/admin/BlogEditor';
import BlogManagementPage from './pages/admin/BlogManagementPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
// Nyamedua Pages
import ProjectsPage from './pages/ProjectsPage';
import EventsPage from './pages/EventsPage';
import EventRegistrationPage from './pages/EventRegistrationPage';
import VolunteerPage from './pages/VolunteerPage';
import PartnersPage from './pages/PartnersPage';
import DonatePage from './pages/DonatePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import FounderDetailPage from './pages/FounderDetailPage';
import ImpactPage from './pages/ImpactPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import FAQPage from './pages/FAQPage';

// Public routes with MainLayout (Navbar + Footer)
const PublicRoutes = () => {
  const location = useLocation();
  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/founder/:id" element={<FounderDetailPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventId/register" element={<EventRegistrationPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
};

// Admin routes with AdminLayout (No Navbar/Footer)
const AdminRoutes = () => {
  const location = useLocation();
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('adminAuth');
  
  if (!isAuthenticated) {
    // If not authenticated, redirect to login page outside of AdminLayout
    return <Navigate to="/secure-access" replace />;
  }
  
  return (
    <AdminLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/management" element={<AdminManagementPage />} />
          <Route path="/blog/posts" element={<BlogManagementPage />} />
          <Route path="/blog/new" element={<BlogEditor />} />
          <Route path="/blog/edit/:id" element={<BlogEditor />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </AdminLayout>
  );
};

function App() {
  // The Coming Soon page is shown by default everywhere (dev + production)
  // so we can keep iterating on it. To work on the full site locally,
  // set `VITE_SHOW_COMING_SOON=false` in .env.local and restart the dev server.
  // Remove this block once development is complete.
  const showComingSoon = import.meta.env.VITE_SHOW_COMING_SOON !== 'false';
  if (showComingSoon) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<ComingSoonPage />} />
        </Routes>
        <Analytics />
      </Router>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
        <Route path="/secure-access" element={<AdminLoginPage />} />
        <Route path="/panel/*" element={<AdminRoutes />} />
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
