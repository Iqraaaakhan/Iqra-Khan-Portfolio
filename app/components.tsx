import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { navItems, profile, type AdditionalWork, type Project } from "./data";

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Iqra Fatima Khan, home">
          <span className="brand-mark" aria-hidden="true">
            IK
          </span>
          <span className="brand-copy">
            <strong>Iqra Khan</strong>
            <span>{profile.role}</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-contact" href="/contact">
            Let&apos;s talk
          </Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <span className="brand-mark footer-mark" aria-hidden="true">
            IK
          </span>
          <p>{profile.intro}</p>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            Resume ↗
          </a>
        </div>
        <p className="footer-meta">© 2026 Iqra Fatima Khan</p>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="tag-list" aria-label="Technologies used">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="button-row project-actions">
      <Link className="button button-dark" href={`/projects/${project.slug}`}>
        Read case study <span aria-hidden="true">↗</span>
      </Link>
      {project.live ? (
        <a className="text-link" href={project.live} target="_blank" rel="noreferrer">
          Live app ↗
        </a>
      ) : null}
      {project.demo ? (
        <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
          Demo ↗
        </a>
      ) : null}
      <a className="text-link" href={project.github} target="_blank" rel="noreferrer">
        GitHub ↗
      </a>
    </div>
  );
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={featured ? "project-card project-card-featured" : "project-card"}>
      <figure className="project-media">
        <Link className="project-image" href={`/projects/${project.slug}`}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1600}
            height={1040}
            sizes={featured ? "(max-width: 900px) 100vw, 58vw" : "(max-width: 900px) 100vw, 45vw"}
            priority={featured}
            unoptimized
          />
        </Link>
        <figcaption>{project.imageCaption}</figcaption>
      </figure>
      <div className="project-card-copy">
        <Eyebrow>{project.eyebrow}</Eyebrow>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p>{project.summary}</p>
        <p className="project-contribution">
          <span>My contribution</span>
          {project.contribution}
        </p>
        <TagList items={project.stack} />
        <ProjectActions project={project} />
      </div>
    </article>
  );
}

export function AdditionalWorkCard({
  work,
  showGallery = false,
}: {
  work: AdditionalWork;
  showGallery?: boolean;
}) {
  return (
    <article className="additional-card">
      <figure className="additional-media">
        <Image
          src={work.image}
          alt={work.imageAlt}
          width={1600}
          height={1040}
          sizes="(max-width: 900px) 100vw, 48vw"
          unoptimized
        />
        <figcaption>{work.imageCaption}</figcaption>
      </figure>
      <div className="additional-copy">
        <Eyebrow>{work.eyebrow}</Eyebrow>
        <h3>{work.name}</h3>
        <p>{work.summary}</p>
        <TagList items={work.stack} />
        {showGallery && work.gallery ? (
          <div className="additional-gallery" aria-label={`${work.name} supporting screens`}>
            {work.gallery.map((item) => (
              <figure key={item.src}>
                <a href={item.src} target="_blank" rel="noreferrer" aria-label={`Open full-size ${item.alt}`}>
                  <Image src={item.src} alt={item.alt} width={1600} height={1040} unoptimized />
                </a>
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
        <div className="button-row additional-actions">
          {work.live ? (
            <a className="text-link" href={work.live} target="_blank" rel="noreferrer">
              Live site ↗
            </a>
          ) : null}
          {work.github ? (
            <a className="text-link" href={work.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function CaseMediaFigure({
  src,
  alt,
  caption,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`case-media-figure ${className}`.trim()}>
      <a href={src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${alt}`}>
        <Image
          src={src}
          alt={alt}
          width={1800}
          height={1170}
          priority={priority}
          unoptimized
        />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="case-hero section-shell">
      <div className="shell">
        <Link className="back-link" href="/projects">
          ← All projects
        </Link>
        <Eyebrow>{project.eyebrow}</Eyebrow>
        <h1>{project.name}</h1>
        <p className="case-deck">{project.summary}</p>
        <p className="case-contribution"><span>My contribution</span>{project.contribution}</p>
        <TagList items={project.stack} />
        <div className="button-row">
          {project.live ? (
            <a className="button button-accent" href={project.live} target="_blank" rel="noreferrer">
              Open live app ↗
            </a>
          ) : null}
          {project.demo ? (
            <a className="button button-light" href={project.demo} target="_blank" rel="noreferrer">
              Watch demo ↗
            </a>
          ) : null}
          <a className="button button-light" href={project.github} target="_blank" rel="noreferrer">
            View repository ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export function CaseSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="case-section">
      <div className="case-section-label">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      <div className="case-section-content">{children}</div>
    </section>
  );
}

export function ProofPair({ project }: { project: Project }) {
  return (
    <div className="proof-pair">
      <article>
        <span>Hard problem</span>
        <p>{project.challenge}</p>
      </article>
      <article>
        <span>Engineering decision</span>
        <p>{project.decision}</p>
      </article>
    </div>
  );
}
