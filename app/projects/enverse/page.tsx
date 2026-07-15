import type { Metadata } from "next";
import Link from "next/link";
import { CaseMediaFigure, CaseSection, CaseStudyHero, ProofPair } from "../../components";
import { projects } from "../../data";

const project = projects[0];

export const metadata: Metadata = {
  title: "Enverse AI Energy Platform Case Study",
  description:
    "How Iqra built Enverse with React, TypeScript, FastAPI, XGBoost, Isolation Forest, OTP and JWT authentication, Groq, and resilient fallbacks.",
};

export default function EnversePage() {
  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Enverse",
    applicationCategory: "Energy analytics",
    operatingSystem: "Web",
    author: { "@type": "Person", name: "Iqra Fatima Khan" },
    codeRepository: project.github,
    url: project.live,
    programmingLanguage: ["TypeScript", "Python"],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork) }}
      />
      <CaseStudyHero project={project} />
      <div className="shell case-body">
        <section className="product-demo" aria-labelledby="enverse-demo-title">
          <div className="product-demo-heading">
            <span>Watch 35-second product demo</span>
            <h2 id="enverse-demo-title">Watch the product move from data to decisions.</h2>
          </div>
          <video
            controls
            playsInline
            preload="none"
            poster="/projects/enverse-dashboard.webp"
            aria-describedby="enverse-demo-caption"
          >
            <source src="/media/enverse-product-demo.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <div className="product-demo-caption" id="enverse-demo-caption">
            <p>Click play to watch the cleaned product walkthrough. The video never autoplays.</p>
            <a href={project.demo} target="_blank" rel="noreferrer">Open the full Google Drive demo ↗</a>
          </div>
        </section>

        <CaseSection number="01" title="Problem and product">
          <p>
            Household energy data is difficult to act on when it appears as one total.
            Enverse turns time-series usage into a decision surface: which appliance is
            driving consumption, what the next period may look like, whether a pattern is
            unusual, and what a change in usage could cost.
          </p>
          <p>
            I designed and implemented the full application path, including the React and
            TypeScript interface, FastAPI services, authentication, data contracts, ML
            workflows, LLM integration, Docker setup, and cloud deployment configuration.
          </p>
          <ProofPair project={project} />
        </CaseSection>

        <CaseSection number="02" title="System architecture">
          <p>
            The dashboard consumes a primary backend contract while specialized endpoints
            expose forecasts, alerts, model health, estimation, and chat. Service modules
            keep analytics, authentication, model inference, and LLM behavior outside the
            route layer.
          </p>
          <div className="architecture-flow" aria-label="Enverse architecture">
            <div><span>01 · Input</span><strong>Energy datasets and user questions</strong></div>
            <div><span>02 · Intelligence</span><strong>Analytics, XGBoost, Isolation Forest</strong></div>
            <div><span>03 · Services</span><strong>FastAPI endpoints and JWT auth</strong></div>
            <div><span>04 · Experience</span><strong>React dashboard and assistant</strong></div>
          </div>
        </CaseSection>

        <CaseSection number="03" title="ML pipeline and evidence">
          <p>
            The repository separates training and inference scripts and writes model metrics
            to an artifact used by the interface. The main forecast experiment and supervised
            appliance-level estimator report strong results on their recorded splits. Separate
            rolling and daily experiments report materially lower R² values, which remain in
            the repository as honest evidence of experimentation rather than being hidden.
          </p>
          <div className="metric-grid">
            <article className="metric-card">
              <span>Energy Forecast XGBoost</span>
              <strong>0.9971</strong>
              <p>R² in the repository metric artifact, labeled as an 80/20 split.</p>
            </article>
            <article className="metric-card">
              <span>NILM-inspired estimator</span>
              <strong>0.9975</strong>
              <p>R² for the supervised appliance-signature experiment.</p>
            </article>
            <article className="metric-card">
              <span>Forecast horizon</span>
              <strong>7 days</strong>
              <p>Recursive short-horizon prediction exposed by the application.</p>
            </article>
          </div>
          <h3>Important model boundary</h3>
          <p>
            The appliance-level feature is a supervised, NILM-inspired estimator using
            labeled appliance context. The portfolio describes that boundary directly and
            does not present it as fully unsupervised disaggregation.
          </p>
        </CaseSection>

        <CaseSection number="04" title="Authentication and security">
          <p>
            Login is passwordless: the backend generates a six-digit OTP, sends it through
            SendGrid, and creates a 24-hour JWT after verification. SMTP exists only as an
            opt-in local fallback, while the Render deployment path keeps it disabled.
          </p>
          <div className="process-list">
            <article><h3>Request</h3><p>User submits an email and receives a time-limited code.</p></article>
            <article><h3>Verify</h3><p>The backend validates the OTP before issuing a signed JWT.</p></article>
            <article><h3>Protect</h3><p>Authenticated requests carry the token to protected application flows.</p></article>
          </div>
        </CaseSection>

        <CaseSection number="05" title="Reliable LLM behavior">
          <p>
            The assistant grounds replies in current dashboard metrics instead of answering
            from a generic prompt. Common bill, saving, appliance, and model questions are
            handled locally first. Broader questions flow to the configured Groq model, then
            a secondary model, then a deterministic summary if both calls fail.
          </p>
          <div className="architecture-flow" aria-label="Enverse assistant fallback path">
            <div><span>01</span><strong>Inject live energy metrics</strong></div>
            <div><span>02</span><strong>Try deterministic local answer</strong></div>
            <div><span>03</span><strong>Primary and fallback Groq models</strong></div>
            <div><span>04</span><strong>Return local summary on failure</strong></div>
          </div>
        </CaseSection>

        <CaseSection number="06" title="Product views">
          <p>
            The media sequence follows the user journey from the dashboard and analytics
            surface into model health, device diagnosis, forecasting and the multilingual
            assistant. Each screen demonstrates a distinct engineering capability.
          </p>
          <ol className="media-storyline" aria-label="Enverse product media sequence">
            <li>Dashboard</li><li>Analytics</li><li>ML pipeline</li><li>Device deep dive</li><li>Forecasting</li><li>Assistant</li>
          </ol>
          <div className="story-gallery enverse-gallery">
            <CaseMediaFigure
              src="/projects/enverse-ml-pipeline.webp"
              alt="Enverse ML Pipeline Health screen showing model status and recorded evaluation metrics"
              caption="ML Pipeline Health: operational visibility across forecasting, appliance estimation and anomaly detection."
            />
            <CaseMediaFigure
              src="/projects/enverse-appliance-deep-dive.webp"
              alt="Enverse appliance deep-dive drawer showing washing-machine efficiency, usage signature and AI analysis"
              caption="Appliance Deep Dive: device-level efficiency, usage signatures, cost impact and interpreted patterns."
            />
            <CaseMediaFigure
              src="/projects/enverse-forecast.webp"
              alt="Enverse AI Forecast screen with a seven-day trajectory and appliance what-if cost simulator"
              caption="AI Forecast and What-If Simulator: projected consumption paired with an adjustable cost scenario."
            />
            <CaseMediaFigure
              src="/projects/enverse-assistant.webp"
              alt="Enverse multilingual LLM assistant answering energy questions using live dashboard context"
              caption="Multilingual LLM Assistant: live-data grounding, voice input and deterministic fallback behavior."
            />
          </div>
        </CaseSection>

        <CaseSection number="07" title="Testing, deployment, and lessons">
          <p>
            The repository includes a Vercel-oriented frontend, Render-oriented FastAPI
            backend, Docker Compose for local development, explicit environment examples,
            health endpoints, and documented deployment checks. Authentication, analytics,
            forecast, alert, and chat paths are exposed as testable API contracts.
          </p>
          <ul>
            <li>Keep experimental metrics scoped to their exact dataset and split.</li>
            <li>Design external AI integrations so the core product still works without them.</li>
            <li>Centralize API configuration to keep local and deployed environments aligned.</li>
            <li>Future work includes durable hosted authentication storage and stronger automated test coverage.</li>
          </ul>
        </CaseSection>

        <div className="case-next">
          <span>Next case study</span>
          <Link href="/projects/darksky">DarkSky Observation System <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </main>
  );
}
