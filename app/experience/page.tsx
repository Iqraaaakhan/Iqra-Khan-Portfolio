import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "../components";
import { experience, profile } from "../data";

export const metadata: Metadata = {
  title: "Software Development Experience",
  description:
    "Internship, full-stack delivery, hackathon leadership, and web development experience by Iqra Fatima Khan.",
};

export default function ExperiencePage() {
  return (
    <main id="main-content" className="experience-page">
      <section className="page-hero">
        <div className="shell">
          <Eyebrow>Experience</Eyebrow>
          <h1>Learning through delivery.</h1>
          <p className="page-deck">
            Experience across full-stack ERP modules, AI product leadership, responsive
            web development, integration, debugging, testing, and deployment.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="shell timeline">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`}>
              <p className="timeline-period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.summary}</p>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-cta section-shell">
        <div className="shell contact-cta-grid">
          <div>
            <Eyebrow>What I&apos;m looking for</Eyebrow>
            <h2>A team where strong fundamentals meet real ownership.</h2>
          </div>
          <div>
            <p>{profile.availability}</p>
            <Link className="button button-accent" href="/contact">Contact me ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
