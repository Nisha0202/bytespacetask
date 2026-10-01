# ByteSpace

Online-courses marketplace UI built with **Next.js 15 (App Router) + TypeScript**, **Tailwind CSS 3**, and **Motion** (`motion/react`).

Pages: Home (`/`), Sign In (`/login`), Create Account (`/register`), custom 404.

## Setup

Requires Node.js 18.18+ (20+ recommended).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Structure

```
app/
  (site)/        Home page + shared Navbar/Footer layout
  login/ register/  Auth pages
  not-found.tsx  404 page
components/
  ui/            Button, Logo, Reveal, Shapes, Avatars, CourseCard, Thumb, HappyStudents
  home/          Hero, LogoStrip, Discover, LearningPaths, Growth, CreatorCta, Testimonials
  auth/          AuthLayout, Field, LoginForm, RegisterForm, useAuthForm
  Navbar.tsx  Footer.tsx
lib/data.ts      Course, category and testimonial content
```

## Notes

- Brand tokens (blue `#0038E0`, lime `#D2F81C`, fonts) live in `tailwind.config.ts`.
- Fonts are self-hosted via `@fontsource` (Poppins + Plus Jakarta Sans), so builds need no Google Fonts access. Swap in the design's exact typeface if you have it.
- Photos and 3D shapes from the Figma file are approximated with inline SVG/CSS. Drop real assets into `public/` and swap them into `Thumb`, `Hero`, and `Shapes`.
- Auth forms validate on the client only; wire `useAuthForm.ts` to your API.
- Animations respect `prefers-reduced-motion` (`MotionConfig reducedMotion="user"`).
