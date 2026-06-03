# CodeCatalyst Solutions

A modern, dual-mode business website built with React + Vite, showcasing both **Tech Solutions** (software development, web apps) and **Business Services** (company registration, compliance support) for South African businesses.

## 🎯 Features

- **Dual Service Modes**: Toggle between Tech Solutions and Business Services with completely different content, services, pricing, and portfolio
- **Landing Mode Selector**: First-time visitors choose their path (stored in session)
- **Fully Responsive**: Mobile-first design with hamburger menu and adaptive layouts
- **Brand Color System**: Navy blue (#001c56) and amber gold (#ffb600) throughout
- **Smooth Animations**: Framer Motion transitions and interactions
- **Dark Mode Only**: Professional dark theme optimized for readability
- **Modern UI**: Glass-morphism cards, backdrop blur effects, gradient accents

## 🛠️ Tech Stack

- **React 18** with Hooks
- **Vite** for fast development and optimized builds
- **React Router** for SPA navigation
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Context API** for global state (theme, service mode)

## 📂 Project Structure

```
codecatalyst-solutions/
├── public/
│   ├── CC_logo.png          # Brand logo
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── cards/           # ServiceCard, PricingCard, PortfolioCard, etc.
│   │   ├── common/          # Button, SectionHeading, ScrollProgress, etc.
│   │   ├── layout/          # Navbar, Footer, MobileMenu
│   │   ├── mode/            # ModeSwitcher (Tech/Business toggle)
│   │   └── sections/        # Hero, CTASection, Testimonials, etc.
│   ├── context/
│   │   ├── ServiceModeContext.jsx  # Tech vs Business mode
│   │   └── ThemeContext.jsx        # Dark mode (locked)
│   ├── data/
│   │   ├── businessServices.js
│   │   ├── techServices.js
│   │   ├── portfolio.js
│   │   └── pricing.js
│   ├── hooks/
│   │   ├── useServiceMode.js
│   │   └── useTheme.js
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   ├── constants.js
│   │   └── motion.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/codecatalyst-solutions.git
cd codecatalyst-solutions
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

## 🎨 Brand Colors

The site uses two primary brand colors extracted from the logo:

- **Navy Blue**: `#001c56` (professional, trustworthy)
- **Amber Gold**: `#ffb600` (energetic, premium)

These are defined in `tailwind.config.js` as `brand-navy` and `brand-gold`.

## 🔀 Service Modes

The site has two distinct modes controlled by `ServiceModeContext`:

### Tech Solutions Mode
- Software development services
- Web applications and websites
- Cloud and DevOps
- Portfolio of technical projects
- Website development pricing

### Business Services Mode
- Company registration (CIPC)
- Compliance services (Tax, CSD, COIDA, B-BBEE)
- Tender and supplier services
- Administrative and branding services
- Bundle pricing (Startup, Compliance, Tender Ready, Business Launch)

Users select their mode on first visit via a full-screen landing selector. The choice is stored in `sessionStorage` and persists for the session. Users can switch modes anytime using the toggle in the navbar.

## 📱 Responsive Behavior

- **Desktop (≥768px)**: Full navbar with links and mode switcher
- **Mobile (<768px)**: Hamburger menu with dropdown navigation
- All pages scroll to top on navigation
- Touch-optimized cards and buttons

## 🧭 Routes

- `/` - Home (with mode selector overlay on first visit)
- `/services` - Service listings (mode-aware)
- `/about` - About page (mode-aware content)
- `/portfolio` - Portfolio / Success Stories (mode-aware)
- `/pricing` - Pricing (Tech: websites + add-ons, Business: bundles + services)
- `/contact` - Contact page
- `*` - 404 Not Found

## 🔧 Configuration

### Tailwind Config (`tailwind.config.js`)
Brand colors, gradients, and custom utilities are defined here.

### Vite Config (`vite.config.js`)
React plugin with Oxc transformer for fast builds.

### ESLint Config (`eslint.config.js`)
Code quality and React best practices enforced.

## 📄 License

This project is proprietary and confidential. All rights reserved by CodeCatalyst Solutions.

## 📞 Contact

**CodeCatalyst Solutions**  
Email: [info@codecatalystsolutions.com](mailto:info@codecatalystsolutions.com)  
Phone: [+27 63 814 9146](tel:+27638149146)  
Location: Gauteng, South Africa

---

Built with ⚡ by CodeCatalyst Solutions
