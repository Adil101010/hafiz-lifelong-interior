# Hafiz Lifelong Interior — Premium Frontend

Frontend-only React + TypeScript + Vite website for Hafiz Lifelong Interior.

## Stack
- React + TypeScript + Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React
- React Hook Form
- EmailJS

## Supplied asset review
All 12 supplied JPEG images and all 5 supplied MP4 videos were inspected before implementation.

### Selected video roles
- **Hero:** `hero-turf-installation.mp4` — 848×478 landscape, ~5.4s; best fit for a looping hero background.
- **Project / work:** `box-cricket-installation.mp4` — 478×850 vertical, ~19.7s; shows a facility being built.
- **Gallery showcase:** `box-cricket-night-play.mp4` — 478×850 vertical, ~8s; shows the completed illuminated playing environment.
- `school-furniture-reel.mp4` and `cricket-net-reel.mp4` were reviewed as vertical promotional reels and retained in `src/assets/videos/`, but intentionally not used as core website hero/work media because their composition is primarily social-poster oriented.

### Business information read from the supplied references
- Business: Hafiz Lifelong Interior
- Phone / WhatsApp: +91 6397163814
- Location: Pabla, Incholi, Meerut, Uttar Pradesh, India
- Udyam registration shown in the supplied reference: UDYAM-UP-56-0182372
- The email text in the supplied school-furniture poster is visually ambiguous, so the implementation does **not** guess it. Set `VITE_BUSINESS_EMAIL` after verifying the email.
- A GeM-related screenshot was supplied, but it does not itself establish a current GeM seller status, so the website does not make a GeM registration claim.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

For production:

```bash
npm run build
npm run preview
```

## EmailJS setup
Create an EmailJS service/template and set:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_BUSINESS_EMAIL=
VITE_SITE_URL=https://your-domain.example
```

The form sends:
- subject
- name
- phone
- email
- company
- city
- requirement
- quantity
- message
- source

## Deployment
This is a static frontend. It can be deployed to Vercel, Netlify, Hostinger static hosting, or any server capable of serving the Vite `dist` directory.

Update `public/robots.txt` and `public/sitemap.xml` from `example.com` to the final production domain before launch.
