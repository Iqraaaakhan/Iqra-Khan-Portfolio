import type { Metadata } from "next";
import { Eyebrow } from "../components";
import { profile } from "../data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Iqra Fatima Khan about entry-level software development, full-stack, backend, Java, and AI/ML roles.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="shell">
          <Eyebrow>Contact</Eyebrow>
          <h1>Let&apos;s build something useful.</h1>
          <p className="page-deck">
            {profile.availability} I&apos;m also glad to have thoughtful conversations about
            full-stack, backend, Java and applied AI/ML work.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="shell contact-grid">
          <article className="contact-card">
            <Eyebrow>Best way to reach me</Eyebrow>
            <h2>Email works best.</h2>
            <p>
              Share the role, team, or context and I&apos;ll respond as soon as I can.
            </p>
            <div className="contact-options">
              <a href={`mailto:${profile.email}`}>
                Email <span>{profile.emailDisplay}</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <span>Professional profile ↗</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <span>Code and repositories ↗</span>
              </a>
              <a href={profile.resume} target="_blank" rel="noreferrer">
                Resume <span>View PDF ↗</span>
              </a>
            </div>
          </article>
          <div className="contact-notes">
            <article>
              <h3>Roles</h3>
              <p>SDE, full-stack, frontend, backend, Java, and entry-level AI/ML engineering.</p>
            </article>
            <article>
              <h3>Location</h3>
              <p>{profile.location}. Open to suitable remote, Bangalore and relocation opportunities.</p>
            </article>
            <article>
              <h3>Availability</h3>
              <p>{profile.availability}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
