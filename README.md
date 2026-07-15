<div align="center">

![Iqra Fatima Khan Portfolio](public/og-card.png)

# Iqra Fatima Khan | Software Developer Portfolio

Evidence-led case studies across full-stack engineering, backend systems, Java and applied AI/ML.

[![Live Portfolio](https://img.shields.io/badge/View_Live_Portfolio-702F3E?style=for-the-badge&logo=vercel&logoColor=white)](https://iqra-khan-portfolio.iqra58577.chatgpt.site)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-211815?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/iqra-khan-540420265)
[![GitHub](https://img.shields.io/badge/GitHub-C25D32?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Iqraaaakhan)

</div>

## About the portfolio

This portfolio is designed for fast recruiter review while still giving engineering work enough depth. It leads with verified product evidence, explains architecture and trade-offs, and keeps all public internship material non-confidential.

## Featured engineering work

| Project | What it demonstrates | Links |
| --- | --- | --- |
| **Enverse** | React, TypeScript, FastAPI, JWT and OTP authentication, forecasting, anomaly detection, energy analytics and a multilingual data-grounded assistant | [Case study](https://iqra-khan-portfolio.iqra58577.chatgpt.site/projects/enverse) · [Live app](https://enverse-blue.vercel.app/) · [Repository](https://github.com/Iqraaaakhan/Enverse) |
| **DarkSky Observation System** | Java, Spring MVC, JDBC, MySQL, JSP, Maven, session authentication and Controller-Service-DAO separation | [Case study](https://iqra-khan-portfolio.iqra58577.chatgpt.site/projects/darksky) · [Repository](https://github.com/Iqraaaakhan/DarkSky-Observation-System) |
| **KLEver** | PHP, MySQL, AJAX, OTP authentication, search, cart, Razorpay checkout, order tracking and admin workflows | [Case study](https://iqra-khan-portfolio.iqra58577.chatgpt.site/projects/klever) · [Repository](https://github.com/Iqraaaakhan/KLEver) |

## Preview

<p align="center">
  <img src="docs/screenshots/home-desktop.jpg" alt="Warm editorial homepage for Iqra Fatima Khan's software developer portfolio" width="88%" />
</p>

## Stack

- Next.js App Router compatible Vinext runtime
- React 19 and TypeScript
- Tailwind CSS v4 build pipeline with a custom global visual system
- Cloudflare-compatible Sites deployment

No application backend, database, analytics tracker, or contact-form service is required.

## Local setup

Requirements:

- Node.js 22.13 or newer
- npm

```bash
npm install
npm run dev
```

Open the local URL shown by the development server.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The production build also validates the deployable server artifact.

## Project structure

```text
app/
  about/                 About page
  contact/               Contact page
  experience/            Experience page
  projects/              Project index and case studies
  resume/                Browser-viewable resume
  components.tsx         Shared layout and portfolio components
  data.ts                Typed profile, project, and experience content
  globals.css            Responsive visual system
  layout.tsx             Global metadata and layout
  robots.ts              Crawler rules
  sitemap.ts             Search-engine route map
public/
  media/                 Click-to-play product demo media
  profile/               Explicitly approved About portrait
  projects/              Optimized repository and user-supplied screenshots
  resume/                Downloadable resume PDF
```

## Accessibility

- Semantic landmarks and heading order
- Skip link and visible keyboard focus
- Keyboard-usable navigation
- High-contrast text and controls
- Descriptive image alternatives
- Responsive reading widths and touch targets
- Reduced-motion support
- No animation-dependent information
- No autoplaying media
- Full-size image access through keyboard-usable links
- Privacy-safe public resume copy with the personal phone number removed

## SEO

- Route-specific titles and descriptions
- Open Graph and social preview metadata
- Person and SoftwareApplication structured data
- Robots and sitemap metadata routes
- Descriptive URLs and headings
- Optimized WebP screenshots

The default canonical origin is the current deployed portfolio URL. Set `NEXT_PUBLIC_SITE_URL` when moving to a custom domain.

## Deployment and a cleaner URL

The source is currently deployed through ChatGPT Sites. It can also be deployed through another Next.js-compatible host such as Vercel, then connected to a custom domain.

For a custom domain:

1. Add the domain through the hosting provider.
2. Configure the requested DNS records.
3. Set `NEXT_PUBLIC_SITE_URL` to the exact `https://` origin.
4. Redeploy and verify the canonical URLs, sitemap, Open Graph image, resume, and project links.

## Updating the portfolio

To add or revise a project:

1. Update the typed project entry in `app/data.ts`.
2. Add an optimized screenshot under `public/projects/`.
3. Add a case-study route under `app/projects/<slug>/`.
4. Use exact source-backed metrics and state evaluation boundaries.
5. Add the route to `app/sitemap.ts`.
6. Run lint, TypeScript checking, and the production build.

## Continuous integration

GitHub Actions runs linting, TypeScript checking and the production build on pushes and pull requests to `main`.

## License

The source code is available under the MIT License. Personal resume content, written case-study content, and project screenshots remain the property of Iqra Fatima Khan and their respective project owners and are not granted for reuse as identity or portfolio content.
