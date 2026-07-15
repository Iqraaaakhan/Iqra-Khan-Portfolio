import Link from "next/link";
import { AdditionalWorkCard, Eyebrow, ProjectCard, SectionHeading, TagList } from "./components";
import { additionalWork, education, experience, profile, projects } from "./data";

const strengths = [
  {
    index: "01",
    title: "Full-stack delivery",
    copy: "Responsive React interfaces, typed integration layers, FastAPI services, REST contracts, and SQL-backed workflows.",
  },
  {
    index: "02",
    title: "Backend foundations",
    copy: "Layered Java and Spring MVC design, authorization, JDBC persistence, API development, and configuration discipline.",
  },
  {
    index: "03",
    title: "Applied intelligence",
    copy: "Forecasting, anomaly detection, NLP and LLM integration, context grounding, evaluation, and deterministic fallbacks.",
  },
  {
    index: "04",
    title: "Production thinking",
    copy: "Authentication, error handling, debugging, manual and API testing, Docker, deployment, and Git-based delivery.",
  },
];

export default function Home() {
  const [enverse, darksky, klever] = projects;
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: "https://github.com/Iqraaaakhan",
    sameAs: [profile.github, profile.linkedin],
    jobTitle: profile.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hubli",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "Karnatak University" }],
    knowsAbout: ["Full-stack development", "Backend systems", "Machine learning", "LLM integration"],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <section className="hero section-shell">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>{profile.name} · {profile.role}</Eyebrow>
            <h1>
              Full-stack systems.
              <br />
              <span>Intelligent products.</span>
              <br />
              Built end to end.
            </h1>
            <p className="hero-deck">
              {profile.intro} <span>{profile.supportingLine}</span>
            </p>
            <div className="button-row hero-actions">
              <Link className="button button-accent" href="/projects/enverse">
                View Enverse <span aria-hidden="true">↗</span>
              </Link>
              <a className="button button-light" href={profile.resume} download="Iqra-Fatima-Khan-Resume.pdf">
                Download resume
              </a>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
            <p className="availability">
              <span aria-hidden="true" /> {profile.availability}
            </p>
          </div>
          <div className="hero-proof" aria-label="Engineering profile snapshot">
            <div className="proof-topline">
              <span>Engineering profile</span>
              <span>End to end</span>
            </div>
            <div className="proof-identity">
              <span className="proof-monogram" aria-hidden="true">IK</span>
              <div>
                <strong>Iqra Fatima Khan</strong>
                <span>Hubli · India</span>
              </div>
            </div>
            <div className="system-map" aria-label="Frontend to backend to intelligence flow">
              <div><span>Interface</span><strong>React + TS</strong></div>
              <i aria-hidden="true">→</i>
              <div><span>Services</span><strong>FastAPI</strong></div>
              <i aria-hidden="true">→</i>
              <div><span>Models</span><strong>ML + LLM</strong></div>
            </div>
            <div className="proof-facts">
              <div><span>Delivery</span><strong>Full-stack product engineering</strong></div>
              <div><span>Intelligence</span><strong>ML and LLM integrations</strong></div>
              <div><span>Foundation</span><strong>Java + Spring MVC</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Selected proof">
        <div className="shell proof-strip-grid">
          <p><span>01</span> React and TypeScript interface work</p>
          <p><span>02</span> FastAPI and REST integration</p>
          <p><span>03</span> ML evaluation and deployment</p>
          <p><span>04</span> Java layered architecture</p>
        </div>
      </section>

      <section className="page-section featured-work">
        <div className="shell">
          <SectionHeading
            eyebrow="Selected work"
            title="Proof over promises."
            copy="Three projects chosen for depth, role relevance, and clear engineering ownership."
          />
          <ProjectCard project={enverse} featured />
          <div className="project-grid">
            <ProjectCard project={darksky} />
            <ProjectCard project={klever} />
          </div>
          <div className="section-link-row">
            <Link className="text-link text-link-large" href="/projects">
              View all case studies ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section additional-work-section">
        <div className="shell">
          <SectionHeading
            eyebrow="More work"
            title="Range, without the noise."
            copy="Two earlier builds that add product leadership, localization and marketplace experience without competing with the primary case studies."
          />
          <div className="additional-grid">
            {additionalWork.map((work) => <AdditionalWorkCard key={work.name} work={work} />)}
          </div>
        </div>
      </section>

      <section className="page-section strengths-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Engineering strengths"
            title="From interface to inference."
            copy="A connected skill set built around shipping complete, understandable systems."
          />
          <div className="strength-grid">
            {strengths.map((strength) => (
              <article key={strength.index}>
                <span>{strength.index}</span>
                <h3>{strength.title}</h3>
                <p>{strength.copy}</p>
              </article>
            ))}
          </div>
          <div className="stack-board">
            <div>
              <Eyebrow>Working stack</Eyebrow>
              <h3>Tools chosen for the problem, not the logo wall.</h3>
            </div>
            <TagList
              items={[
                "Java",
                "Python",
                "TypeScript",
                "React",
                "FastAPI",
                "Spring MVC",
                "SQL",
                "Docker",
                "Git",
                "XGBoost",
                "LLM integration",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="page-section experience-preview">
        <div className="shell experience-preview-grid">
          <SectionHeading
            eyebrow="Experience"
            title="Learning by owning real delivery."
            copy="Experience spanning interface implementation, API development, integration, debugging and testing."
          />
          <div className="timeline compact-timeline">
            {experience.slice(0, 2).map((item) => (
              <article key={`${item.company}-${item.role}`}>
                <p className="timeline-period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
            <Link className="text-link text-link-large" href="/experience">
              Full experience ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section education-section">
        <div className="shell education-grid">
          <div>
            <Eyebrow>Education</Eyebrow>
            <h2>Strong academic foundations.</h2>
          </div>
          <div className="education-card">
            {education.map((item) => (
              <div key={item.degree}>
                <span>{item.year}</span>
                <strong>{item.degree}</strong>
                <p>{item.institution} · {item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta section-shell">
        <div className="shell contact-cta-grid">
          <div>
            <Eyebrow>Role fit</Eyebrow>
            <h2>Entry-level engineering roles where product depth matters.</h2>
          </div>
          <div>
            <p>{profile.availability}</p>
            <Link className="button button-accent" href="/contact">
              Start a conversation ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
