# SolutionsTech — Agence Web & Digital

A modern website for a web and digital agency, built with Next.js and React.

## Description

SolutionsTech is a professional agency website showcasing web development services, portfolio projects, and client testimonials. It features a smooth scrolling navigation, animated hero section, service showcases, and a contact form.

## Tech Stack

- **Framework:** Next.js 16.2.3
- **UI Library:** React 19.2.4
- **Styling:** CSS with Tailwind CSS 4
- **Fonts:** Syne (display) & DM Sans (body) from Google Fonts
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Home page
└── components/
    ├── Header.tsx           # Navigation bar
    ├── HeroSection.tsx       # Hero with animations
    ├── ClientsBand.tsx       # Scrolling clients
    ├── ServicesSection.tsx   # Service offerings
    ├── ProcessSection.tsx    # Work process steps
    ├── ProjectsSection.tsx   # Portfolio projects
    ├── WhyUsSection.tsx      # Value propositions
    ├── TestimonialsSection.tsx # Client reviews
    ├── ContactSection.tsx    # Contact form
    └── Footer.tsx            # Footer
```

## Features

- 🎨 Modern dark theme with custom color palette
- ⚡ Smooth animations and transitions
- 📱 Fully responsive design
- ♿ Semantic HTML structure
- 🚀 Next.js optimization
- 📧 Contact form with state management

## License

All rights reserved © 2025 SolutionsTech
