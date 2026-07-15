import type { Metadata } from "next";
import Link from "next/link";
import { CaseMediaFigure, CaseSection, CaseStudyHero, ProofPair } from "../../components";
import { projects } from "../../data";

const project = projects[2];

export const metadata: Metadata = {
  title: "KLEver Full-Stack Product Case Study",
  description:
    "A PHP, MySQL, JavaScript, AJAX, Razorpay, OTP, ordering, tracking, admin CRUD, and reporting case study.",
};

export default function KleverPage() {
  return (
    <main id="main-content">
      <CaseStudyHero project={project} />
      <div className="shell case-body">
        <section className="klever-proof-section" aria-labelledby="klever-proof-title">
          <div className="klever-proof-heading">
            <span>Genuine product screens</span>
            <div>
              <h2 id="klever-proof-title">From menu discovery to Razorpay checkout.</h2>
              <p>
                The connected repository contains the admin implementation but no genuine
                admin screenshot, so this case study uses only the two supplied product screens.
              </p>
            </div>
          </div>
          <div className="story-gallery klever-gallery">
            <CaseMediaFigure
              src="/projects/klever-home.webp"
              alt="KLEver smart canteen homepage with menu navigation, food search and order call to action"
              caption="01 · Discovery: search-led access to the menu, ordering and order tracking."
              priority
            />
            <CaseMediaFigure
              src="/projects/klever-payment.webp"
              alt="KLEver Razorpay checkout showing payment methods, order total and a privacy-safe UPI payment screen"
              caption="02 · Checkout: Razorpay payment options connected to verified order persistence."
            />
          </div>
        </section>

        <CaseSection number="01" title="Product scope">
          <p>
            KLEver connects the full canteen workflow: passwordless customer access, a dynamic
            searchable menu, persistent cart and checkout, Razorpay payments, personal order
            history, AJAX-based status tracking, kitchen operations, MySQL-backed menu and
            order CRUD, and admin reports and analytics.
          </p>
          <ProofPair project={project} />
        </CaseSection>

        <CaseSection number="02" title="Customer journey">
          <div className="process-list">
            <article><h3>Access</h3><p>Register or log in through an email OTP flow.</p></article>
            <article><h3>Discover</h3><p>Search the menu, inspect available items and keep a persistent cart.</p></article>
            <article><h3>Checkout</h3><p>Confirm the order and complete the Razorpay payment flow.</p></article>
            <article><h3>Track</h3><p>Follow Pending, Preparing, and Completed states from the order page.</p></article>
          </div>
        </CaseSection>

        <CaseSection number="03" title="Payment to persistence">
          <p>
            The backend creates a Razorpay order, verifies the returned payment signature,
            and only then opens a database transaction to create the order and its line items.
            If persistence fails, the transaction is rolled back rather than leaving a partial
            order behind.
          </p>
          <div className="architecture-flow" aria-label="KLEver checkout workflow">
            <div><span>01</span><strong>Create Razorpay order</strong></div>
            <div><span>02</span><strong>Verify payment signature</strong></div>
            <div><span>03</span><strong>Persist order transaction</strong></div>
            <div><span>04</span><strong>Return trackable order code</strong></div>
          </div>
        </CaseSection>

        <CaseSection number="04" title="Operational workflow">
          <p>
            The customer tracking screen polls a status endpoint every 10 seconds and updates
            a three-step progress indicator. Admin and kitchen screens support menu CRUD,
            order status changes, daily statistics, top-selling items, 30-day reporting, and
            customer summaries.
          </p>
          <ul>
            <li>Separate customer, admin, and kitchen-facing workflows.</li>
            <li>Soft deletion for menu availability rather than destructive removal.</li>
            <li>Chart.js reporting and summary cards for operational visibility.</li>
            <li>Prepared statements used across important database operations.</li>
          </ul>
        </CaseSection>

        <CaseSection number="05" title="Hardening plan">
          <p>
            The next iteration would strengthen the path from a functional academic product to a
            production-ready system: centralized configuration, consistent server-side
            authorization, stronger session controls, and broader test coverage.
          </p>
          <div className="decision-card">
            <span>Next engineering improvement</span>
            <p>
              Centralize database and service configuration, add server-side authorization to
              every record lookup, hash admin passwords, add CSRF protection, and create tests
              for payment and status transitions.
            </p>
          </div>
        </CaseSection>

        <div className="case-next">
          <span>Return to</span>
          <Link href="/projects">All projects <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </main>
  );
}
