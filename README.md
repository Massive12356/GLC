# NGO Legal Aid Website

A modern, professional website for an NGO providing legal aid services, built with React, TypeScript, and Tailwind CSS. Features a responsive design, multi-language support, and a comprehensive admin management system for lawyers, case studies, blog posts, and practice areas.

## 🌟 Features

### Public Features
- **Hero Section** - Engaging landing page with background imagery and call-to-action
- **Practice Areas** - Showcase different legal practice areas with detailed pages
- **Lawyer Profiles** - Display attorney information with individual profile pages
- **Case Studies** - Highlight successful cases with detailed case study pages
- **Blog System** - Publish and manage blog articles with detail pages
- **Testimonials** - Display beneficiary reviews and trust indicators
- **Consultation Booking** - Allow clients to request consultations
- **Contact Form** - Professional contact form for inquiries
- **Multi-Language Support** - Language selector for internationalization
- **Responsive Design** - Fully responsive on mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion animations for enhanced UX
- **Cookie Consent** - GDPR-compliant cookie consent banner
- **SEO Optimization** - React Helmet for dynamic meta tags, title management, and structured data
  - Unique page titles and meta descriptions for each route
  - Open Graph tags for social media sharing
  - Twitter Card support for enhanced tweets
  - Canonical URLs to prevent duplicate content
  - Dynamic meta tag updates on page navigation

### Legal Pages
- Privacy Policy
- Terms of Use
- Legal Disclaimer
- Cookie Policy

### Admin Features
- **Secure Login** - Admin authentication system
- **Lawyer Management** - Add, edit, and manage lawyer profiles
- **Practice Areas Management** - Manage practice area content
- **Case Studies Management** - Create and manage case studies
- **Blog Management** - Complete blog editor and management system
- **Blog Editor** - Rich text editor for blog content
- **Admin Dashboard** - Central dashboard for content management
- **Admin Profile** - Manage admin account settings

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **React Router 7** - Client-side routing
- **React Helmet Async** - SEO meta tags and document head management
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend & Services
- **Express.js** - Node.js web server framework
- **MongoDB** - NoSQL database for data persistence
- **Supabase** - Authentication service (optional)
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefix handling

### Development Tools
- **ESLint** - Code linting for React and TypeScript
- **TypeScript** - Static type checking
- **Vite** - Build optimization

## 📁 Project Structure

```
NGO_PROJECTS/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ContactForm.tsx
│   │   ├── CookieConsent.tsx
│   │   ├── Footer.tsx
│   │   ├── LawyerCard.tsx
│   │   ├── LawyerProfiles.tsx
│   │   ├── Navbar.tsx
│   │   ├── PracticeAreaCard.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── Testimonials.tsx
│   │   └── TrustIndicators.tsx
│   ├── contexts/             # React Context for state management
│   │   └── LanguageContext.tsx
│   ├── data/                 # Mock data for development
│   │   └── mockData.ts
│   ├── layouts/              # Layout wrapper components
│   │   ├── AdminLayout.tsx
│   │   └── MainLayout.tsx
│   ├── pages/                # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── LawyersPage.tsx
│   │   ├── LawyerDetailPage.tsx
│   │   ├── PracticeAreasPage.tsx
│   │   ├── PracticeAreaDetailPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── BlogDetailPage.tsx
│   │   ├── CaseStudiesPage.tsx
│   │   ├── CaseStudyDetailPage.tsx
│   │   ├── ConsultationPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── PrivacyPolicyPage.tsx
│   │   ├── TermsOfUsePage.tsx
│   │   ├── LegalDisclaimerPage.tsx
│   │   ├── CookiePolicyPage.tsx
│   │   ├── PageNotFound.tsx
│   │   └── admin/            # Admin-specific pages
│   │       ├── AdminLoginPage.tsx
│   │       ├── AdminDashboard.tsx
│   │       ├── AdminManagementPage.tsx
│   │       ├── LawyersManagementPage.tsx
│   │       ├── CaseStudiesManagementPage.tsx
│   │       ├── BlogManagementPage.tsx
│   │       ├── BlogEditor.tsx
│   │       └── AdminProfilePage.tsx
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx               # Main app component with routing
│   ├── main.tsx              # Entry point
│   ├── index.css             # Global styles
│   └── vite-env.d.ts         # Vite environment types
├── public/                   # Static assets
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.js          # ESLint configuration
├── postcss.config.js         # PostCSS configuration
└── vercel.json               # Vercel deployment configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NGO_PROJECTS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up backend**
   - Navigate to your backend directory and set up Express server
   - Configure MongoDB connection string
   - Create `.env` file with:
   ```
   MONGODB_URI=mongodb://localhost:27017/ngo
   PORT=5000
   JWT_SECRET=your_secret_key
   ```

4. **Set up frontend environment variables**
   - Create a `.env.local` file in the root directory
   - Add your backend API URL:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

5. **Start the development servers**

   **Backend (from backend directory):**
   ```bash
   npm run dev
   # or
   npm start
   ```
   Backend will run on `http://localhost:5000`

   **Frontend (from NGO_PROJECTS directory):**
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:5173`

## 💻 Development

### Available Commands

- **Development Server**
  ```bash
  npm run dev
  ```
  Starts the Vite development server with hot module replacement (HMR)

- **Build for Production**
  ```bash
  npm run build
  ```
  Creates an optimized production build in the `dist` folder

- **Preview Production Build**
  ```bash
  npm run preview
  ```
  Serves the production build locally for testing

- **Lint Code**
  ```bash
  npm run lint
  ```
  Runs ESLint to check code quality and style compliance

- **Type Check**
  ```bash
  npm run typecheck
  ```
  Performs TypeScript type checking without emitting files

### Code Quality

The project uses ESLint for code linting with configurations for:
- React best practices
- React Hooks rules
- TypeScript support

Run linting before committing:
```bash
npm run lint
```

### TypeScript

Full TypeScript support for type safety. Check for type errors:
```bash
npm run typecheck
```

## 🔍 SEO Implementation

### React Helmet Async

This project uses **React Helmet Async** for comprehensive SEO optimization. All pages are configured with dynamic meta tags that update on route changes.

### Meta Tags Included

Each page includes:
- **Title Tags** - Unique, keyword-rich titles for each route
- **Meta Descriptions** - Compelling descriptions for search results (under 160 characters)
- **Keywords** - Relevant keywords for each page
- **Open Graph Tags** - Enhanced social media sharing (og:title, og:description, og:type)
- **Twitter Cards** - Optimized Twitter sharing with summary_large_image
- **Canonical URLs** - Prevent duplicate content issues (can be added per page)
- **Viewport Meta Tag** - Mobile responsiveness declaration

### Pages with SEO Configuration

✅ HomePage - NGO Legal Aid Services  
✅ AboutPage - NGO Mission and Vision  
✅ ContactPage - Legal Help Today  
✅ LawyersPage - Expert Legal Aid Attorneys  
✅ PracticeAreasPage - Legal Aid Services  
✅ BlogPage - Legal Insights and Resources  
✅ CaseStudiesPage - Successful Legal Aid Cases  
✅ ConsultationPage - Request Legal Aid  
✅ Detail Pages - BlogDetailPage, LawyerDetailPage, PracticeAreaDetailPage, CaseStudyDetailPage  
✅ Legal Pages - PrivacyPolicyPage, TermsOfUsePage, CookiePolicyPage, LegalDisclaimerPage  
✅ ErrorPage - PageNotFound  

### Adding SEO to New Pages

To add SEO meta tags to a new page:

```tsx
import { Helmet } from 'react-helmet-async';

export default function YourPage() {
  return (
    <>
      <Helmet>
        <title>Your Page Title | NGO</title>
        <meta name="description" content="Your page description under 160 characters." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your page description" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Your page content */}
    </>
  );
}
```

### SEO Best Practices

1. **Title Tags** - Keep under 60 characters for optimal display
2. **Meta Descriptions** - 150-160 characters, include primary keywords
3. **Structured Data** - Consider adding JSON-LD for legal business schema
4. **Image Alt Text** - Add descriptive alt text to all images
5. **Internal Links** - Use semantic anchor text for internal navigation
6. **Site Speed** - Vite ensures fast page loads for better rankings
7. **Mobile Optimization** - Responsive design improves mobile search ranking

## 🎨 Design System

### Color Palette
- **Primary**: `#1a2744` (Dark Blue) - Main brand color
- **Secondary**: `#2d3748` (Slate Blue)
- **Accent**: `#c9a227` (Gold) - Highlights and CTAs
- **Background**: `#fafafa` (Off White)

### Typography
- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body text)

### Styling
- Built with Tailwind CSS utility classes
- Responsive breakpoints: mobile-first approach
- Custom configuration for professional legal aesthetic

## 🌐 Deployment

### Frontend Deployment (Vercel)

The project includes `vercel.json` configuration for easy Vercel deployment:

1. **Connect repository to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Import your GitHub repository

2. **Configure environment variables**
   - Add backend API URL in Vercel project settings
   - Variables: `VITE_API_URL=https://your-backend-api.com/api`

3. **Deploy**
   - Push to main branch to trigger automatic deployment
   - Vercel handles build and hosting automatically

### Backend Deployment

Deploy the Express backend to your preferred platform:

1. **Heroku / Railway / Render**
   - (Heroku recommendations deprecated, use Railway or Render)
   - Configure MongoDB connection string as environment variable
   - Set JWT_SECRET and other sensitive variables

2. **AWS / DigitalOcean / VPS**
   - Deploy Node.js application
   - Set up MongoDB (MongoDB Atlas recommended for cloud hosting)
   - Configure environment variables

3. **Docker**
   - Containerize Express app and MongoDB
   - Push to Docker Hub or container registry
   - Deploy to any container hosting platform

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

## 🛣️ Routing Structure

### Public Routes
- `/` - Home page
- `/about` - About the firm
- `/practice-areas` - All practice areas
- `/practice-areas/:id` - Practice area detail
- `/lawyers` - All lawyer profiles
- `/lawyers/:id` - Individual lawyer profile
- `/blog` - Blog listing
- `/blog/:id` - Blog post detail
- `/case-studies` - Case studies listing
- `/case-studies/:id` - Case study detail
- `/consultation` - Consultation request form
- `/contact` - Contact form
- `/privacy-policy` - Privacy policy
- `/terms-of-use` - Terms of use
- `/legal-disclaimer` - Legal disclaimer
- `/cookie-policy` - Cookie policy

### Admin Routes
- `/admin` - Admin dashboard redirect
- `/admin/login` - Admin login page
- `/admin/dashboard` - Main admin dashboard
- `/admin/management` - Content management hub
- `/admin/lawyers` - Lawyer management
- `/admin/practice-areas` - Practice area management (if implemented)
- `/admin/case-studies` - Case studies management
- `/admin/blog` - Blog management
- `/admin/blog/editor/:id` - Blog post editor
- `/admin/profile` - Admin profile settings

## � API Integration

The frontend communicates with the Express backend via RESTful API endpoints:

### Common Endpoints

**Authentication**
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Create new admin account
- `POST /api/auth/logout` - Admin logout

**Lawyers**
- `GET /api/lawyers` - Get all lawyers
- `GET /api/lawyers/:id` - Get specific lawyer
- `POST /api/lawyers` - Create lawyer (admin)
- `PUT /api/lawyers/:id` - Update lawyer (admin)
- `DELETE /api/lawyers/:id` - Delete lawyer (admin)

**Practice Areas**
- `GET /api/practice-areas` - Get all practice areas
- `GET /api/practice-areas/:id` - Get specific practice area
- `POST /api/practice-areas` - Create area (admin)
- `PUT /api/practice-areas/:id` - Update area (admin)
- `DELETE /api/practice-areas/:id` - Delete area (admin)

**Case Studies**
- `GET /api/case-studies` - Get all case studies
- `GET /api/case-studies/:id` - Get specific case study
- `POST /api/case-studies` - Create case study (admin)
- `PUT /api/case-studies/:id` - Update case study (admin)
- `DELETE /api/case-studies/:id` - Delete case study (admin)

**Blog**
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get specific blog post
- `POST /api/blog` - Create blog post (admin)
- `PUT /api/blog/:id` - Update blog post (admin)
- `DELETE /api/blog/:id` - Delete blog post (admin)

**Contact & Consultation**
- `POST /api/contact` - Submit contact form
- `POST /api/consultation` - Request consultation

### Request/Response Format

All API endpoints use JSON format:

```
Request:
{
  "header": "Content-Type: application/json",
  "authentication": "Bearer JWT_TOKEN"
}

Response:
{
  "success": true,
  "data": {...},
  "message": "Success message"
}
```

## �📱 Features in Detail

### Multi-Language Support
- Language selector in navbar
- Context API for language state management
- Easy to add new languages

### Animations
- Page transitions with Framer Motion
- Scroll-triggered animations on components
- Smooth hover effects and micro-interactions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast color scheme

## 📖 Mock Data

The project uses mock data for development and demonstration. Located in `src/data/mockData.ts`:
- Lawyer profiles
- Practice areas
- Case studies
- Client testimonials
- Firm information

Replace with real data by connecting to your Express API endpoints that query MongoDB.

## 🔐 Security Considerations

- Admin routes require authentication via JWT tokens
- Express middleware validates request authentication
- Password hashing (bcrypt) for user credentials
- MongoDB connection string never exposed to frontend
- Environment variables for all sensitive data
- HTTPS required for production
- CORS configured for frontend domain
- Rate limiting on API endpoints
- GDPR-compliant cookie consent

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will use the next available port automatically.

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Fails
```bash
# Clear Vite cache
rm -rf dist .vite
npm run build
```

### Type Errors
```bash
# Run type checking to identify issues
npm run typecheck
```

## 📄 License

[Specify your license here - e.g., MIT, Apache 2.0, etc.]

## 🤝 Contributing

Contributions are welcome! Please:
1. Create a new branch for your feature
2. Follow the existing code style
3. Run lint and type checking before committing
4. Submit a pull request with clear description

## 📞 Support

For questions or issues, please contact the development team or open an issue in the repository.

---

**Last Updated**: February 2026  
**Version**: 1.0.0
