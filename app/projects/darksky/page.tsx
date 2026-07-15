import type { Metadata } from "next";
import Link from "next/link";
import { CaseMediaFigure, CaseSection, CaseStudyHero, ProofPair } from "../../components";
import { projects } from "../../data";

const project = projects[1];

export const metadata: Metadata = {
  title: "DarkSky Java Backend Case Study",
  description:
    "A Spring MVC, Spring JDBC, MySQL, JSP, and Maven case study demonstrating layered architecture, session auth, authorization, CRUD, and AOP logging.",
};

export default function DarkSkyPage() {
  return (
    <main id="main-content">
      <CaseStudyHero project={project} />
      <div className="shell case-body">
        <CaseSection number="01" title="Why I built it">
          <p>
            DarkSky is a Java web application for authenticated users to create and manage
            satellite observation logs. Its purpose is less about visual novelty and more
            about demonstrating the backend structures expected in Java teams.
          </p>
          <ProofPair project={project} />
        </CaseSection>

        <CaseSection number="02" title="CRUD journey in five screens">
          <p>
            The interface sequence makes the backend behavior visible: authenticate, enter a
            user-scoped console, create an observation, read the user&apos;s logs and update or
            delete an owned record.
          </p>
          <div className="story-gallery darksky-gallery">
            <CaseMediaFigure
              src="/projects/darksky-login.webp"
              alt="Dark Sky App login screen with operator ID and security key fields"
              caption="01 · Authentication: session access begins with operator credentials."
            />
            <CaseMediaFigure
              src="/projects/darksky-dashboard.webp"
              alt="Dark Sky Console dashboard with New Entry and Access Database actions"
              caption="02 · Dashboard: authenticated navigation into create and read workflows."
            />
            <CaseMediaFigure
              src="/projects/darksky-new-entry.webp"
              alt="DarkSky New Entry form for satellite name, location, magnitude and notes"
              caption="03 · Create: validated observation data enters the service and DAO layers."
            />
            <CaseMediaFigure
              src="/projects/darksky-observation-logs.webp"
              alt="DarkSky Observation Logs list with user-scoped edit and delete controls"
              caption="04 · Read: user-scoped records expose ownership-aware actions."
            />
            <CaseMediaFigure
              src="/projects/darksky-edit-entry.webp"
              alt="DarkSky Edit Entry form for updating an owned satellite observation"
              caption="05 · Update/Delete: ownership checks protect record mutations."
            />
          </div>
        </CaseSection>

        <CaseSection number="03" title="Layered architecture">
          <p>
            Each layer has a defined responsibility. Controllers receive HTTP requests and
            manage sessions, services coordinate business operations, DAOs isolate SQL and
            persistence, and models represent users and observations.
          </p>
          <div className="architecture-flow" aria-label="DarkSky layered architecture">
            <div><span>01</span><strong>Spring MVC controllers</strong></div>
            <div><span>02</span><strong>Service contracts and implementations</strong></div>
            <div><span>03</span><strong>Spring JDBC DAO layer</strong></div>
            <div><span>04</span><strong>Normalized MySQL data</strong></div>
          </div>
        </CaseSection>

        <CaseSection number="04" title="Authentication and authorization">
          <p>
            Session state identifies the authenticated user across requests. Observation
            operations are scoped by ownership, so a record is not treated as editable or
            deletable merely because its identifier is known.
          </p>
          <ul>
            <li>Session-based login and logout flow.</li>
            <li>User-scoped access checks for observation records.</li>
            <li>Prepared Spring JDBC operations in DAO implementations.</li>
            <li>Externalized database configuration excluded from version control.</li>
          </ul>
        </CaseSection>

        <CaseSection number="05" title="Cross-cutting concerns">
          <p>
            Spring AOP keeps service logging separate from core business methods. This
            demonstrates how logging and similar cross-cutting behavior can be added without
            spreading repeated code through controllers and services.
          </p>
          <div className="decision-card">
            <span>Build and packaging</span>
            <p>
              Maven resolves the application dependencies and packages the project as a WAR
              for deployment to a servlet container such as Tomcat.
            </p>
          </div>
        </CaseSection>

        <CaseSection number="06" title="What it proves">
          <ul>
            <li>Ability to reason about separation of concerns in a Java web application.</li>
            <li>Practical SQL persistence through Spring JDBC instead of in-memory examples.</li>
            <li>Awareness of session security, access control, and environment configuration.</li>
            <li>Readiness to extend the system with BCrypt, validation, tests, and REST endpoints.</li>
          </ul>
        </CaseSection>

        <div className="case-next">
          <span>Next case study</span>
          <Link href="/projects/klever">KLEver <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </main>
  );
}
