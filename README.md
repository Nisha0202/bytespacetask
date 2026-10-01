# ByteSpace

Responsive landing page for **ByteSpace**, an online-courses marketplace, with bonus **Login** and **Sign up** pages.

- **Live:** 
- **Github:** <https://github.com/Nisha0202/bytespacetask>

## Features

- Full landing page: hero, partner logos, filterable course grid, learning paths, growth and creator sections, creator CTA, testimonials, footer with newsletter form
- Bonus pages: `/login`, `/register`, with client-side validation and a show/hide password toggle
- Custom 404 page
- Fully responsive (mobile, tablet, desktop) with an animated mobile menu
- Motion animations: entrance, scroll-reveal, hover, floating shapes, count-up stats, animated category tabs
- Honours `prefers-reduced-motion`

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (`motion/react`)
- [lucide-react](https://lucide.dev/) icons
- Self-hosted fonts via `@fontsource` (Poppins, Plus Jakarta Sans)

## Getting Started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project Structure

```
app/
  (site)/             Home page with shared Navbar and Footer
  login/  register/   Auth pages
  not-found.tsx       404 page
components/
  ui/                 Button, Logo, Reveal, Shapes, Avatars, CourseCard, Thumb, HappyStudents
  home/               Hero, LogoStrip, Discover, LearningPaths, Growth, CreatorCta, Testimonials
  auth/               AuthLayout, Field, LoginForm, RegisterForm, useAuthForm
  Navbar.tsx  Footer.tsx
lib/data.ts           Course, category and testimonial content
public/               Static images
```

## Design Tokens

Defined in `tailwind.config.ts`: brand blue `#0038E0`, lime `#D2F81C`, heading and body font families, card shadow.

## Git Workflow

Work happened on a feature branch (`feature/bytespace-ui`) and is merged into `main` through a Pull Request.

## Notes for Reviewers

- Login and Sign up are front-end only: forms validate and show a demo success message. Hook `components/auth/useAuthForm.ts` to a real API.
- The decorative 3D shapes are SVG approximations of the Figma renders.
- The newsletter and search forms are UI only.