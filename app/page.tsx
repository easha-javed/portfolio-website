'use client';

import { useEffect, useRef, useState } from 'react';

/* ---------------------------------------------------------------------- */
/*  Data                                                                   */
/* ---------------------------------------------------------------------- */

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#coursework', label: 'Coursework' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#connect', label: 'Connect' },
];

const EXPERIENCE = [
  {
    role: 'Software Engineering Intern',
    org: 'Programmers Force',
    place: 'Lahore, Pakistan',
    dates: 'Jun 2026 - Aug 2026',
    bullets: [
      'Contributed to a production retrieval-augmented generation pipeline, supporting its downstream embedding and retrieval workflows.',
      'Shipped two minimum viable products from design through deployment.',
    ],
  },
  {
    role: 'Teaching Assistant - Software Testing (2 sections)',
    org: 'FAST-NUCES',
    place: 'Lahore, Pakistan',
    dates: 'Jan 2026 - Jun 2026',
    bullets: [
      'Realigned course material with ISTQB Foundation Level standards.',
      'Supported two sections totaling 100+ students.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Science in Computer Science',
    org: 'FAST National University of Computer and Emerging Sciences',
    place: 'Lahore, Pakistan',
    dates: '2023 - 2027 (Expected)',
    detail: "CGPA: 3.36 / 4.00 - Dean's List, 2 of 6 completed semesters",
  },
  {
    degree: 'FSc (Pre-Engineering)',
    org: 'Kinnaird College for Women University',
    place: 'Lahore, Pakistan',
    dates: '2021 - 2023',
    detail: 'Mathematics, Physics, Chemistry - 958 / 1100',
  },
];

const COURSE_GROUPS = [
  {
    label: 'Programming & Software Engineering',
    items: [
      'Programming Fundamentals',
      'Object-Oriented Programming',
      'Data Structures',
      'Design and Analysis of Algorithms',
      'Discrete Structures',
      'Theory of Automata',
      'Software Design and Analysis',
      'Software Engineering',
      'Software Testing',
      'Applied Human-Computer Interaction',
    ],
  },
  {
    label: 'Systems & Architecture',
    items: [
      'Digital Logic Design',
      'Computer Organization and Assembly Language',
      'Computer Architecture',
      'Operating Systems',
      'Computer Networks',
      'Database Systems',
    ],
  },
  {
    label: 'Math & Theory',
    items: ['Calculus and Analytical Geometry', 'Multivariable Calculus', 'Linear Algebra', 'Probability and Statistics'],
  },
  {
    label: 'AI & Data',
    items: ['Artificial Intelligence', 'Data Science'],
  },
  {
    label: 'In Progress - Fall 2026',
    items: [
      'Information Security',
      'Parallel and Distributed Computing',
      'Compiler Construction',
      'Natural Language Processing',
      'Final Year Project - I',
    ],
  },
];

type Project = {
  name: string;
  kinds?: string[];
  dates: string;
  tech: string[];
  summary: string;
  bullets: { label: string; content: string }[];
};

const PROJECTS: Project[] = [
  {
    name: 'TRIM - Token Reduction & Intelligent Management',
    kinds: ['Final Year Project', 'Research & Development'],
    dates: 'Aug 2026 - Present',
    tech: ['Python', 'HuggingFace Transformers', 'Groq API', 'OpenAI API', 'tiktoken'],
    summary:
      'LLM applications pay in cost, latency, and context space for every token they process. TRIM is an intelligent token optimization framework, built with teammates Faiqa Waseem and Dania Athar under advisor Usama Hassan Alvi, that compresses prompts and manages multi-turn context adaptively without sacrificing output quality.',
    bullets: [
      {
        label: 'The Problem',
        content:
          'Verbose prompts and long conversation histories drive up LLM API cost, latency, and context-window usage.',
      },
      {
        label: 'Research So Far',
        content:
          'Literature review of prompt compression and long-horizon context management (including SCOPE, LLM-DCP, 500xCompressor, SUPO, ACR, and the LoCoMo benchmark) shaping the system design.',
      },
      {
        label: 'Architecture',
        content:
          'Three-module pipeline: Token Analysis, Prompt Compression, and Adaptive Context Management, evaluated with ROUGE and semantic similarity.',
      },
      {
        label: 'Goals',
        content:
          'Reduce token usage while preserving task accuracy and response quality, benchmarked across Llama 3.3 70B and GPT-4o mini on SQuAD v2, CNN/DailyMail, and LoCoMo.',
      },
      {
        label: 'Status',
        content: 'Development underway following the completed proposal and literature review.',
      },
    ],
  },
  {
    name: 'MediRisk - Cardiovascular Risk Predictor',
    kinds: ['Research & Development'],
    dates: 'Jan 2026 - Jun 2026',
    tech: ['Python', 'XGBoost', 'SHAP', 'Flask', 'Gemini API'],
    summary:
      "An end-to-end AI system for cardiovascular risk prediction that combines machine learning, explainable AI, and natural language generation to turn a model's output into something a patient can actually understand.",
    bullets: [
      {
        label: 'Literature Review',
        content:
          'Surveyed 30+ papers on cardiovascular risk modeling and explainable AI to ground the approach before building.',
      },
      {
        label: 'ML Pipeline',
        content: 'XGBoost model with preprocessing, feature engineering, and evaluation (F1, AUC-ROC).',
      },
      {
        label: 'Explainable AI',
        content: 'SHAP-based global and local feature attribution.',
      },
      {
        label: 'NLP Integration',
        content: 'Gemini API generated, patient-friendly natural language explanations.',
      },
      {
        label: 'Results',
        content: '89% AUC-ROC and 0.84 F1 on the CDC BRFSS dataset, deployed as a REST API.',
      },
    ],
  },
  {
    name: 'RAG-Based AI Chatbot',
    dates: 'May 2026 - Jul 2026',
    tech: ['React', 'FastAPI', 'ChromaDB', 'Groq LLaMA'],
    summary:
      "A chatbot that answers questions grounded in a user's own uploaded documents, retrieving relevant passages before generating a response.",
    bullets: [
      { label: 'Retrieval Pipeline', content: 'ChromaDB vector search over document embeddings.' },
      { label: 'Generation', content: 'Groq-hosted LLaMA generates answers grounded in retrieved passages.' },
      { label: 'Frontend & Backend', content: 'React frontend with a FastAPI backend.' },
    ],
  },
  {
    name: 'Nexus - Student Digital Assistant',
    dates: 'Oct 2025 - Nov 2025',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    summary:
      'A role-based social and academic assistant platform for university students, enabling connections, society exploration, real-time messaging, and campus-wide updates.',
    bullets: [
      { label: 'User Management', content: 'Secure registration and login with role-based dashboards (students, admins).' },
      { label: 'Friends Management', content: 'Search, add, and remove friends; view detailed profiles; real-time messaging.' },
      { label: 'Societies & Announcements', content: 'Search societies; admins create, update, or remove societies and moderate announcements.' },
      { label: 'Real-Time Interaction', content: 'Dynamic friends lists, chat, and live profile updates.' },
      { label: 'Security', content: 'JWT-based authentication, password hashing, and input validation.' },
    ],
  },
  {
    name: 'Library Management System',
    dates: 'Mar 2025 - Apr 2025',
    tech: ['React', 'Node', 'Express', 'SQL'],
    summary:
      'A comprehensive, role-based library management system designed to streamline book borrowing, inventory tracking, and user management for both members and librarians.',
    bullets: [
      { label: 'User Management', content: 'Secure member registration and login, role-based access.' },
      { label: 'Book Management', content: 'Add, edit, delete books with detailed metadata and ISBN scanning.' },
      { label: 'Borrowing & Returns', content: 'Automated inventory updates and due date management.' },
      { label: 'Fines & Payments', content: 'Auto-calculated overdue fines and payment tracking.' },
      { label: 'Advanced Search', content: 'Filter by title, author, genre, ISBN, and availability.' },
      { label: 'Reservation System', content: 'First-come, first-served queue with auto-issue.' },
    ],
  },
  {
    name: 'Maze Runner',
    dates: 'Dec 2024',
    tech: ['Assembly (Intel 8088)'],
    summary:
      'An interactive 2D maze game built in low-level Assembly for the Intel IAPX 8088 architecture, showcasing hardware-near programming.',
    bullets: [
      { label: 'Maze Generation', content: 'Random, dynamic maze structures for unique gameplay.' },
      { label: 'Game Mechanics', content: 'Player navigates to collect gems while avoiding enemies, with a live countdown timer.' },
      { label: 'Collision Detection', content: 'Efficient memory and register-level operations.' },
      { label: 'Graphics', content: 'Text-mode rendering with optimized interrupts.' },
    ],
  },
  {
    name: 'Chess Game',
    dates: 'May 2024',
    tech: ['C++', 'SFML', 'OOP'],
    summary:
      'A fully interactive 2D chess game built with C++ and the SFML graphics library, using object-oriented design throughout.',
    bullets: [
      { label: 'Move Validation', content: 'Rule-based logic for all pieces, including en passant.' },
      { label: 'Checkmate Recognition', content: 'Accurate endgame condition detection.' },
      { label: 'Interactive UI', content: 'SFML rendering with piece movement animations.' },
      { label: 'Architecture', content: 'Clean OOP class structure for maintainability.' },
    ],
  },
  {
    name: 'Bejeweled Blitz',
    dates: 'Nov 2023 - Dec 2023',
    tech: ['C++', 'SFML'],
    summary:
      'A clone of Bejeweled Blitz built with C++ and SFML, emphasizing real-time interaction and score-based progression.',
    bullets: [
      { label: 'Match Detection', content: '+30 for 3 jewels, +40 for 4, +50 for 5 in a line, with cascading elimination.' },
      { label: 'Timer & Scoring', content: 'Real-time countdown with persistent high score tracking.' },
      { label: 'Mechanics', content: 'Grid-based jewel swapping and validation.' },
    ],
  },
];

const SKILL_GROUPS = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++'] },
  { label: 'Frontend', items: ['React.js', 'HTML5', 'CSS3'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'Flask', 'REST API Design'] },
  { label: 'Databases', items: ['MongoDB', 'SQL Server', 'Firebase'] },
  {
    label: 'ML / AI',
    items: ['XGBoost', 'scikit-learn', 'SHAP (Explainable AI)', 'pandas', 'NumPy', 'Gemini API'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Pytest', 'Postman', 'Selenium', 'JMeter', 'SonarQube', 'Mutmut', 'GitHub Actions'],
  },
];

/* ---------------------------------------------------------------------- */
/*  Scroll-reveal wrapper - used across the page                          */
/* ---------------------------------------------------------------------- */

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        'transition-all duration-700 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      ].join(' ')}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Hero demo - the prompt actually gets compressed on load                */
/* ---------------------------------------------------------------------- */

const PROMPT_WORDS = [
  { w: 'Please', keep: false },
  { w: 'carefully', keep: false },
  { w: 'review', keep: true },
  { w: 'the', keep: false },
  { w: 'full', keep: false },
  { w: 'conversation', keep: true },
  { w: 'history', keep: true },
  { w: 'before', keep: false },
  { w: 'you', keep: false },
  { w: 'generate', keep: false },
  { w: 'a', keep: false },
  { w: 'long', keep: false },
  { w: 'and', keep: false },
  { w: 'detailed', keep: false },
  { w: 'summary', keep: true },
  { w: 'of', keep: false },
  { w: 'everything', keep: false },
  { w: 'that', keep: false },
  { w: 'was', keep: false },
  { w: 'discussed', keep: true },
  { w: 'in', keep: false },
  { w: 'the', keep: false },
  { w: 'key', keep: true },
  { w: 'points', keep: true },
];

const TOTAL_TOKENS = PROMPT_WORDS.length;
const KEPT_TOKENS = PROMPT_WORDS.filter((t) => t.keep).length;
const REDUCTION_PCT = Math.round(((TOTAL_TOKENS - KEPT_TOKENS) / TOTAL_TOKENS) * 100);

function PromptCompressor() {
  const [revealed, setRevealed] = useState(0);
  const [compressStep, setCompressStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setRevealed(TOTAL_TOKENS);
      setCompressStep(TOTAL_TOKENS);
      setDone(true);
      return;
    }

    const timers: number[] = [];

    let i = 0;
    const revealTimer = window.setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= TOTAL_TOKENS) {
        window.clearInterval(revealTimer);

        // Pause so the reader can take in the full sentence before
        // anything starts getting cut.
        const pauseTimer = window.setTimeout(() => {
          let step = 0;
          const compressTimer = window.setInterval(() => {
            step += 1;
            setCompressStep(step);
            if (step >= TOTAL_TOKENS) {
              window.clearInterval(compressTimer);
              const doneTimer = window.setTimeout(() => setDone(true), 500);
              timers.push(doneTimer);
            }
          }, 160); // one word processed at a time, left to right
          timers.push(compressTimer);
        }, 900);
        timers.push(pauseTimer);
      }
    }, 100);
    timers.push(revealTimer);

    return () => {
      timers.forEach((t) => {
        window.clearInterval(t);
        window.clearTimeout(t);
      });
    };
  }, []);

  // Tokens up to compressStep have been "processed": cut ones drop out of
  // the count, kept ones stay. Tokens after compressStep are untouched.
  const processedCutCount = PROMPT_WORDS.slice(0, compressStep).filter((t) => !t.keep).length;
  const liveCount = revealed < TOTAL_TOKENS ? revealed : TOTAL_TOKENS - processedCutCount;

  return (
    <div className="overflow-hidden rounded-xl border border-hair bg-surface shadow-sm">
      <div className="h-1 w-full" style={{ background: 'var(--accent)' }} />
      <div className="p-6 sm:p-8">
        <div className="mb-5 flex items-center justify-between font-plex-mono text-xs text-ink-dim">
          <span>input_prompt.txt</span>
          <span aria-live="polite">
            {liveCount} token{liveCount === 1 ? '' : 's'}
            {done && <span className="ml-2 text-accent">-{REDUCTION_PCT}%</span>}
          </span>
        </div>
        <p className="font-plex-mono text-base leading-relaxed sm:text-lg">
          {PROMPT_WORDS.map((token, idx) => {
            const isRevealed = idx < revealed;
            const isProcessed = idx < compressStep;
            const isCut = isProcessed && !token.keep;
            const isKept = isProcessed && token.keep;
            return (
              <span
                key={idx}
                className={[
                  'transition-all duration-500',
                  isRevealed ? 'opacity-100' : 'opacity-0',
                  isCut ? 'rounded bg-cut-soft px-0.5 text-cut line-through opacity-70' : '',
                  isKept ? 'rounded bg-accent-soft px-0.5 text-accent' : !isCut ? 'text-ink' : '',
                ].join(' ')}
              >
                {token.w}{' '}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Layout building blocks                                                 */
/* ---------------------------------------------------------------------- */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-plex-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
      {children}
    </h2>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-app/95 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="font-plex-display text-lg font-semibold text-ink">
          Easha Javed
        </a>
        <div className="flex gap-5 overflow-x-auto whitespace-nowrap text-sm text-ink-dim">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="group relative py-1">
              <span className="nav-link-label transition-colors">{link.label}</span>
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-5xl scroll-mt-20 overflow-hidden px-6 pb-20 pt-16 sm:pt-24"
    >
      <div aria-hidden className="bg-dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 opacity-70" />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <h1 className="font-plex-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Easha Javed
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-md text-lg text-ink-dim">
              Computer science student building systems that make large language models faster,
              cheaper, and easier to trust.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-3 font-plex-mono text-sm text-ink-dim">
              Lahore, Pakistan - FAST-NUCES, Class of 2027
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:opacity-90"
              >
                View projects
              </a>
              <a
                href="mailto:eashajaved896@gmail.com"
                className="hover-accent rounded-full border border-hair px-5 py-2.5 text-sm font-medium text-ink transition-colors"
              >
                Email me
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <PromptCompressor />
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 border-t border-hair px-6 py-16">
      <Reveal>
        <SectionHeading>About</SectionHeading>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-dim sm:text-base">
          I&apos;m a computer science student at FAST-NUCES in Lahore, currently working on TRIM, a
          research project that cuts the cost of running large language models by teaching them to
          say more with fewer tokens. Outside of that, I&apos;ve built full-stack systems - from
          role-based platforms to a cardiovascular risk model that explains its own predictions -
          and spent a semester teaching software testing to over a hundred students. I like problems
          that sit at the boundary of backend logic, model behavior, and the person who has to trust
          the output.
        </p>
      </Reveal>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 border-t border-hair px-6 py-16">
      <Reveal>
        <SectionHeading>Experience</SectionHeading>
      </Reveal>
      <div className="mt-10 space-y-10">
        {EXPERIENCE.map((job, idx) => (
          <Reveal key={job.role} delay={idx * 100}>
            <div className="flex gap-5 sm:gap-8">
              <span className="font-plex-display text-3xl font-semibold text-accent-faint">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 border-l border-hair pl-5 sm:pl-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium text-ink">{job.role}</h3>
                  <span className="font-plex-mono text-xs text-ink-dim">{job.dates}</span>
                </div>
                <p className="text-sm text-ink-dim">
                  {job.org} - {job.place}
                </p>
                <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-ink-dim">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-accent">&rsaquo;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-20 border-t border-hair px-6 py-16">
      <Reveal>
        <SectionHeading>Education</SectionHeading>
      </Reveal>
      <div className="mt-8 space-y-8">
        {EDUCATION.map((ed, idx) => (
          <Reveal key={ed.degree} delay={idx * 100}>
            <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-8">
              <p className="font-plex-mono text-sm text-ink-dim">{ed.dates}</p>
              <div>
                <h3 className="text-lg font-medium text-ink">{ed.degree}</h3>
                <p className="text-sm text-ink-dim">
                  {ed.org} - {ed.place}
                </p>
                <p className="mt-1 text-sm text-ink-dim">{ed.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Coursework() {
  return (
    <section id="coursework" className="mx-auto max-w-5xl scroll-mt-20 border-t border-hair px-6 py-16">
      <Reveal>
        <SectionHeading>Coursework</SectionHeading>
      </Reveal>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {COURSE_GROUPS.map((group, idx) => {
          const borderClass = ['border-accent-soft', 'border-accent-2-soft', 'border-accent-3-soft'][idx % 3];
          const hoverClass = ['hover-accent', 'hover-accent-2', 'hover-accent-3'][idx % 3];
          return (
            <Reveal key={group.label} delay={idx * 60}>
              <div className={`border-l-2 ${borderClass} pl-4`}>
                <h4 className="text-sm font-medium text-ink">{group.label}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border border-hair px-2.5 py-1 text-xs text-ink-dim transition-transform hover:-translate-y-0.5 ${hoverClass}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

const KIND_STYLES: Record<string, string> = {
  'Final Year Project': 'bg-accent-soft text-accent',
  'Research & Development': 'bg-accent-2-soft text-accent-2',
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-hair bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-medium text-ink">{project.name}</h3>
        <span className="font-plex-mono text-xs text-ink-dim">{project.dates}</span>
      </div>
      {project.kinds && project.kinds.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {project.kinds.map((k) => (
            <span
              key={k}
              className={`inline-block rounded-full px-2.5 py-0.5 font-plex-mono text-xs ${
                KIND_STYLES[k] ?? 'bg-accent-soft text-accent'
              }`}
            >
              {k}
            </span>
          ))}
        </div>
      )}
      <p className="mt-3 text-[15px] leading-relaxed text-ink-dim">{project.summary}</p>
      <ul className="mt-4 space-y-2 text-[15px] leading-relaxed">
        {project.bullets.map((b) => (
          <li key={b.label} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-dim" />
            <span className="text-ink-dim">
              <span className="font-medium text-ink">{b.label}:</span> {b.content}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full border border-hair px-2.5 py-1 font-plex-mono text-xs text-ink-dim">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 border-t border-hair px-6 py-16">
      <Reveal>
        <SectionHeading>Projects</SectionHeading>
      </Reveal>
      <div className="mt-8 space-y-6">
        {PROJECTS.map((p) => (
          <Reveal key={p.name}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 border-t border-hair px-6 py-16">
      <Reveal>
        <SectionHeading>Skills</SectionHeading>
      </Reveal>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, idx) => {
          const borderClass = ['border-accent-soft', 'border-accent-2-soft', 'border-accent-3-soft'][idx % 3];
          const hoverClass = ['hover-accent', 'hover-accent-2', 'hover-accent-3'][idx % 3];
          return (
            <Reveal key={group.label} delay={idx * 60}>
              <div className={`border-l-2 ${borderClass} pl-4`}>
                <h4 className="text-sm font-medium text-ink">{group.label}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border border-hair px-2.5 py-1 text-xs text-ink-dim transition-transform hover:-translate-y-0.5 ${hoverClass}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section id="connect" className="mx-auto max-w-5xl scroll-mt-20 border-t border-hair px-6 py-16">
      <Reveal>
        <SectionHeading>Connect</SectionHeading>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-dim">
          Open to software engineering roles, research collaborations, and conversations about
          making LLM applications cheaper to run.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 font-plex-mono text-sm">
          <a
            href="mailto:eashajaved896@gmail.com"
            className="hover-accent rounded-full border border-hair px-4 py-2 text-ink transition-all hover:-translate-y-0.5"
          >
            eashajaved896@gmail.com
          </a>
          <a
            href="https://github.com/easha-javed"
            target="_blank"
            rel="noreferrer"
            className="hover-accent rounded-full border border-hair px-4 py-2 text-ink transition-all hover:-translate-y-0.5"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/easha-javed-a27055263"
            target="_blank"
            rel="noreferrer"
            className="hover-accent rounded-full border border-hair px-4 py-2 text-ink transition-all hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-5xl border-t border-hair px-6 py-8">
      <p className="font-plex-mono text-xs text-ink-dim">
        (c) {new Date().getFullYear()} Easha Javed.
      </p>
    </footer>
  );
}

/* ---------------------------------------------------------------------- */

export default function Portfolio() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Coursework />
        <Projects />
        <Skills />
        <Connect />
      </main>
      <Footer />
    </>
  );
}