import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const APP_URL = 'https://interviewpai.aoneahsan.com';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.aoneahsan.interviewpai';

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Coding practice drills',
    body: 'Card-based, self-contained drills across JavaScript, TypeScript, HTML, Node.js, and Node microservices. Each drill has a question, expected output, starter code, hidden tests, layered hints, a reference solution, and complexity notes — run in your browser.',
  },
  {
    title: 'AI / peer / mentor mock interviews',
    body: 'Timed mock interview sessions led by an AI interviewer (powered by Google Gemini free tier), by a peer, or by a mentor. Optional recording, structured feedback, and per-session scoring.',
  },
  {
    title: 'Peer code reviews',
    body: 'Request reviews on your solutions and review others’. Inline comments, a review queue, reputation, and a thanks system — learn by reading and critiquing real code.',
  },
  {
    title: 'Progress analytics',
    body: 'A personal dashboard with D3 visualisations: streaks, milestones, per-track completion, and a PDF export of your progress you can share with a recruiter or mentor.',
  },
  {
    title: '50+ developer tools',
    body: 'Fully client-side utilities: PDF-to-Word, image compression, hash and UUID generators, QR codes, JSON/CSV/XML converters, JWT decoder, colour tools, and more — nothing is uploaded.',
  },
  {
    title: 'Free, private, and cross-platform',
    body: 'A generous free tier on a zero-cost architecture. Sign in with Google, run it as a Progressive Web App, or install the Android app. Your code runs locally for privacy.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/getting-started/quick-start">
            Quick Start — 5 min
          </Link>
          <Link className="button button--secondary button--lg" to="/intro">
            Read the Docs
          </Link>
          <Link className="button button--outline button--lg" href={APP_URL}>
            Open PrepAI
          </Link>
          <Link className="button button--outline button--lg" href={PLAY_URL}>
            Get it on Google Play
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrap}>
      <div className="container">
        <div className="row">
          {FEATURES.map((f) => (
            <div key={f.title} className="col col--4" style={{ marginBottom: '1.5rem' }}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorStrip(): ReactNode {
  return (
    <section className={styles.authorStrip}>
      <div className="container">
        <p>
          Built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> —{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link> ·{' '}
          <Link href="https://www.npmjs.com/~aoneahsan">npm</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Free Interview Prep, Coding Drills & Mock Interviews`}
      description="Documentation for PrepAI: coding practice drills, AI/peer/mentor mock interviews, peer code reviews, progress analytics, and 50+ developer tools — free, in your browser."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
