import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "../components";
import { profile } from "../data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Iqra Fatima Khan, a full-stack and AI/ML developer from Hubli, India.",
};

const principles = [
  { title: "Make the flow clear", copy: "Good interfaces and good APIs both reduce ambiguity for the person using them." },
  { title: "Keep claims scoped", copy: "Metrics matter only when the dataset, split, and model boundary are stated honestly." },
  { title: "Design for failure", copy: "External services should improve a product without becoming its only path to usefulness." },
  { title: "Own the integration", copy: "The most valuable learning often happens between the frontend, API, database, and deployment." },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="shell">
          <Eyebrow>About</Eyebrow>
          <h1>Curious, careful, and product-minded.</h1>
          <p className="page-deck">
            I build across the stack because I like understanding how a complete system
            works, where it can fail, and how each layer shapes the user experience.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="shell about-grid">
          <aside className="about-aside" aria-label="Professional profile">
            <figure className="about-photo">
              <Image
                src={profile.photo}
                alt="Iqra Fatima Khan wearing a black hijab outdoors"
                width={414}
                height={538}
                priority
                unoptimized
              />
              <figcaption>Iqra Fatima Khan · {profile.role}</figcaption>
            </figure>
            <dl>
              <div><dt>Based in</dt><dd>Hubli, Karnataka, India</dd></div>
              <div><dt>Discipline</dt><dd>Full-stack product engineering</dd></div>
              <div><dt>Education</dt><dd>Master of Computer Applications · 2026</dd></div>
              <div><dt>Focus</dt><dd>Full-stack, backend, Java, and applied AI/ML</dd></div>
            </dl>
          </aside>
          <div className="about-copy">
            <p>
              I&apos;m Iqra Fatima Khan, a full-stack and AI/ML developer who likes understanding
              how a complete system works, where it can fail and how each layer shapes the
              product experience. My work connects React and TypeScript interfaces, FastAPI
              and Java backends, SQL data flows, authentication, testing and deployment.
            </p>
            <p>
              My strongest project, Enverse, pushed me to treat ML and LLM features as parts
              of a reliable product rather than isolated demos. That meant connecting model
              evaluation to user-facing views, grounding answers in live data, and adding
              deterministic fallbacks when an external model is unavailable.
            </p>
            <p>
              Software delivery at IonIdea extends that end-to-end mindset through academic
              attainment modules involving cascading filters, calculation workflows, API
              development, frontend-backend integration, debugging and testing.
            </p>

            <h2>How I work</h2>
            <div className="principles-grid">
              {principles.map((principle, index) => (
                <article key={principle.title}>
                  <Eyebrow>0{index + 1}</Eyebrow>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </article>
              ))}
            </div>

            <h2>Education and recognition</h2>
            <p>
              My education includes a Master of Computer Applications at KLE Technological
              University, 2026, with a CGPA of 8.7/10. I completed my BCA with a 9.24/10 CGPA and earned
              academic, speaking, writing, leadership, and sports recognition, including
              the Best Girl Award and 30+ accolades across school and university levels.
            </p>
            <div className="button-row">
              <Link className="button button-dark" href="/projects">See my work ↗</Link>
              <Link className="button button-light" href="/contact">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
