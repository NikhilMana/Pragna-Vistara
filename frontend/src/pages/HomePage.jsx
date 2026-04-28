import { Link } from 'react-router-dom'
import { SparklesIcon, ChevronRightIcon } from '@/components/ui/Icons'
import { saveUserState } from '@/utils/indexedDB'

/**
 * SUBJECTS — static catalogue for 11th & 12th grade.
 * Each entry maps to a route: /subject/:subjectId
 */
const SUBJECTS = [
  {
    id: 'physics',
    label: 'Physics',
    emoji: '⚛️',
    description: 'Mechanics, thermodynamics, waves, electromagnetism & modern physics',
    color: 'from-blue-500/20 to-primary-500/10',
    border: 'hover:border-blue-500/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)]',
    badge: '32 Topics',
  },
  {
    id: 'chemistry',
    label: 'Chemistry',
    emoji: '🧪',
    description: 'Atomic structure, bonding, reactions, organic & physical chemistry',
    color: 'from-accent-teal/20 to-blue-500/10',
    border: 'hover:border-accent-teal/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(45,212,191,0.15)]',
    badge: '28 Topics',
  },
  {
    id: 'mathematics',
    label: 'Mathematics',
    emoji: '📐',
    description: 'Calculus, algebra, trigonometry, probability & statistics',
    color: 'from-primary-500/20 to-accent-violet/10',
    border: 'hover:border-primary-400/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(108,99,255,0.20)]',
    badge: '40 Topics',
  },
  {
    id: 'biology',
    label: 'Biology',
    emoji: '🧬',
    description: 'Cell biology, genetics, ecology, human physiology & evolution',
    color: 'from-green-500/20 to-accent-teal/10',
    border: 'hover:border-green-500/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(34,197,94,0.15)]',
    badge: '35 Topics',
  },
  {
    id: 'computer-science',
    label: 'Computer Science',
    emoji: '💻',
    description: 'Data structures, algorithms, databases & programming paradigms',
    color: 'from-accent-amber/20 to-accent-rose/10',
    border: 'hover:border-accent-amber/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(251,191,36,0.15)]',
    badge: '25 Topics',
  },
  {
    id: 'electronics',
    label: 'Electronics',
    emoji: '🔌',
    description: 'Semiconductors, digital logic, circuit analysis & microcontrollers',
    color: 'from-accent-rose/20 to-orange-500/10',
    border: 'hover:border-accent-rose/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(244,63,94,0.15)]',
    badge: '20 Topics',
  },
  {
    id: 'languages',
    label: 'Languages',
    emoji: '🗣️',
    description: 'Grammar, literature, comprehension & communication skills',
    color: 'from-purple-500/20 to-accent-violet/10',
    border: 'hover:border-purple-500/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(168,85,247,0.15)]',
    badge: '15 Topics',
  },
]

/**
 * HomePage — subject selection dashboard.
 * Entry point for the student learning journey.
 */
export default function HomePage() {
  return (
    <div className="container-page">

      {/* ── Hero ── */}
      <section className="text-center py-12 animate-slide-up" aria-labelledby="hero-heading">
        <div className="inline-flex items-center gap-2 badge-primary mb-6">
          <SparklesIcon className="w-3.5 h-3.5" />
          AI-Powered Learning for Class 11 &amp; 12
        </div>

        <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
          Master Concepts with{' '}
          <span className="text-gradient">Edu-Sakhi</span>
        </h1>

        <p className="text-surface-muted text-lg max-w-2xl mx-auto leading-relaxed">
          Detect misconceptions, learn visually, and study even without the internet.
          Pick a subject to begin your personalised learning session.
        </p>
      </section>

      {/* ── Subject Grid ── */}
      <section aria-labelledby="subject-grid-heading" className="mt-4">
        <h2 id="subject-grid-heading" className="sr-only">Choose a Subject</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SUBJECTS.map((subject, i) => (
            <Link
              key={subject.id}
              to={`/subject/${subject.id}`}
              id={`subject-card-${subject.id}`}
              onClick={() => saveUserState('selected_subject', subject.id)}
              className={`card-hover bg-gradient-to-br ${subject.color} ${subject.border} ${subject.glow}
                          animate-slide-up group`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl" role="img" aria-label={subject.label}>
                  {subject.emoji}
                </span>
                <span className="badge-primary text-xs">{subject.badge}</span>
              </div>

              {/* Body */}
              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-gradient transition-all">
                {subject.label}
              </h3>
              <p className="text-surface-muted text-sm leading-relaxed mb-4">
                {subject.description}
              </p>

              {/* Footer CTA */}
              <div className="flex items-center gap-1 text-primary-400 text-sm font-medium
                              group-hover:gap-2 transition-all duration-200">
                Start Learning
                <ChevronRightIcon className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Feature highlights ── */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4" aria-label="Platform features">
        {[
          { emoji: '🧠', title: 'Misconception Detection', desc: 'AI identifies where your understanding breaks down and corrects it.' },
          { emoji: '🖼️', title: 'Visual Learning',        desc: 'Diagrams and step-by-step visual explanations for complex concepts.' },
          { emoji: '📴', title: 'Offline-First',           desc: 'All questions and explanations cached locally — study anywhere.' },
        ].map(({ emoji, title, desc }) => (
          <div key={title} className="glass p-5 flex gap-4 items-start">
            <span className="text-2xl mt-0.5">{emoji}</span>
            <div>
              <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
              <p className="text-surface-muted text-xs leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  )
}
