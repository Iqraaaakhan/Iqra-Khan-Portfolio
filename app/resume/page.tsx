import type { Metadata } from "next";
import { Eyebrow } from "../components";
import { profile } from "../data";

export const metadata: Metadata = {
  title: "Resume",
  description: "View or download the software developer resume of Iqra Fatima Khan.",
};

export default function ResumePage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="shell">
          <Eyebrow>Resume</Eyebrow>
          <h1>One-page engineering snapshot.</h1>
          <p className="page-deck">
            Education, experience, selected projects, technical skills, and achievements.
          </p>
          <div className="resume-actions">
            <a className="button button-accent" href={profile.resume} download="Iqra-Fatima-Khan-Resume.pdf">
              Download PDF
            </a>
            <a className="button button-light" href={profile.resume} target="_blank" rel="noreferrer">
              Open in browser ↗
            </a>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="shell">
          <object className="resume-frame" data={profile.resume} type="application/pdf" aria-label="Iqra Fatima Khan resume PDF">
            <p>
              Your browser cannot display the PDF here. <a className="text-link" href={profile.resume}>Open the resume</a>.
            </p>
          </object>
        </div>
      </section>
    </main>
  );
}
