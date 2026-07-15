import type { Metadata } from "next";
import { AdditionalWorkCard, Eyebrow, ProjectCard, SectionHeading } from "../components";
import { additionalWork, projects } from "../data";

export const metadata: Metadata = {
  title: "Software Projects",
  description:
    "Full-stack, Java backend, and AI/ML project case studies by Iqra Fatima Khan.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="shell">
          <Eyebrow>Selected engineering work</Eyebrow>
          <h1>Projects with depth.</h1>
          <p className="page-deck">
            Three focused case studies showing end-to-end product ownership, backend
            structure, applied machine learning, and the decisions behind the code.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="shell projects-page-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index === 0} />
          ))}
        </div>
      </section>
      <section className="page-section additional-work-section projects-more-work">
        <div className="shell">
          <SectionHeading
            eyebrow="More work"
            title="Additional product range."
            copy="Compact evidence from hackathon leadership and an earlier responsive marketplace build."
          />
          <div className="additional-grid">
            {additionalWork.map((work) => (
              <AdditionalWorkCard key={work.name} work={work} showGallery />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
