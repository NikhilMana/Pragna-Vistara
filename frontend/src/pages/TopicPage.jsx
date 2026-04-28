import { useParams, Link } from 'react-router-dom'
import { ArrowLeftIcon, ChevronRightIcon, ClockIcon, SparklesIcon } from '@/components/ui/Icons'
import { saveUserState } from '@/utils/indexedDB'

/**
 * TOPICS_BY_SUBJECT — placeholder catalogue.
 * In production this will be fetched from the API / IndexedDB.
 */
const TOPICS_BY_SUBJECT = {
  physics: [
    { id: 'kinematics',       label: 'Kinematics',              questions: 12, difficulty: 'Medium',   time: '15 min' },
    { id: 'laws-of-motion',   label: 'Laws of Motion',          questions: 10, difficulty: 'Easy',     time: '12 min' },
    { id: 'gravitation',      label: 'Gravitation',             questions: 8,  difficulty: 'Medium',   time: '10 min' },
    { id: 'thermodynamics',   label: 'Thermodynamics',          questions: 14, difficulty: 'Hard',     time: '20 min' },
    { id: 'wave-optics',      label: 'Wave Optics',             questions: 10, difficulty: 'Hard',     time: '18 min' },
    { id: 'electrostatics',   label: 'Electrostatics',          questions: 15, difficulty: 'Medium',   time: '20 min' },
  ],
  chemistry: [
    { id: 'atomic-structure', label: 'Atomic Structure',        questions: 10, difficulty: 'Easy',     time: '12 min' },
    { id: 'chemical-bonding', label: 'Chemical Bonding',        questions: 12, difficulty: 'Medium',   time: '15 min' },
    { id: 'equilibrium',      label: 'Chemical Equilibrium',    questions: 9,  difficulty: 'Hard',     time: '14 min' },
    { id: 'organic-basics',   label: 'Organic Chemistry Basics',questions: 14, difficulty: 'Medium',   time: '18 min' },
  ],
  mathematics: [
    { id: 'limits',           label: 'Limits & Continuity',     questions: 10, difficulty: 'Medium',   time: '15 min' },
    { id: 'derivatives',      label: 'Derivatives',             questions: 12, difficulty: 'Medium',   time: '18 min' },
    { id: 'integration',      label: 'Integration',             questions: 15, difficulty: 'Hard',     time: '22 min' },
    { id: 'probability',      label: 'Probability',             questions: 10, difficulty: 'Easy',     time: '12 min' },
  ],
  biology: [
    { id: 'cell-cycle',       label: 'Cell Cycle & Division',   questions: 10, difficulty: 'Easy',     time: '10 min' },
    { id: 'genetics',         label: 'Principles of Inheritance',questions: 15, difficulty: 'Hard',     time: '20 min' },
    { id: 'photosynthesis',   label: 'Photosynthesis',          questions: 12, difficulty: 'Medium',   time: '15 min' },
  ],
  'computer-science': [
    { id: 'oops',             label: 'OOP Concepts',            questions: 12, difficulty: 'Medium',   time: '15 min' },
    { id: 'data-structures',  label: 'Data Structures',         questions: 15, difficulty: 'Hard',     time: '25 min' },
    { id: 'sql',              label: 'SQL Queries',             questions: 10, difficulty: 'Easy',     time: '12 min' },
  ],
  electronics: [
    { id: 'diodes',           label: 'Diodes & Applications',   questions: 10, difficulty: 'Medium',   time: '12 min' },
    { id: 'logic-gates',      label: 'Logic Gates',             questions: 12, difficulty: 'Easy',     time: '10 min' },
    { id: 'transistors',      label: 'Transistors',             questions: 15, difficulty: 'Hard',     time: '20 min' },
  ],
  languages: [
    { id: 'grammar',          label: 'Advanced Grammar',        questions: 15, difficulty: 'Easy',     time: '15 min' },
    { id: 'comprehension',    label: 'Reading Comprehension',   questions: 8,  difficulty: 'Medium',   time: '20 min' },
    { id: 'writing-skills',   label: 'Creative Writing',        questions: 5,  difficulty: 'Hard',     time: '25 min' },
  ],
}

const DIFFICULTY_STYLE = {
  Easy:   'badge-teal',
  Medium: 'badge-amber',
  Hard:   'badge-rose',
}

const SUBJECT_META = {
  physics:          { label: 'Physics',          emoji: '⚛️' },
  chemistry:        { label: 'Chemistry',         emoji: '🧪' },
  mathematics:      { label: 'Mathematics',       emoji: '📐' },
  biology:          { label: 'Biology',           emoji: '🧬' },
  'computer-science':{ label: 'Computer Science', emoji: '💻' },
  electronics:      { label: 'Electronics',       emoji: '🔌' },
  languages:        { label: 'Languages',         emoji: '🗣️' },
}

/**
 * TopicPage — lists topics for a selected subject.
 * Route: /subject/:subjectId
 */
export default function TopicPage() {
  const { subjectId } = useParams()
  const meta   = SUBJECT_META[subjectId]
  const topics = TOPICS_BY_SUBJECT[subjectId] ?? []

  if (!meta) {
    return (
      <div className="container-page text-center py-20">
        <p className="text-surface-muted text-lg">Subject not found.</p>
        <Link to="/" className="btn-secondary mt-4">Go Home</Link>
      </div>
    )
  }

  return (
    <div className="container-page animate-fade-in">

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-surface-muted mb-8">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRightIcon className="w-3.5 h-3.5" />
        <span className="text-white font-medium">{meta.label}</span>
      </nav>

      {/* ── Header ── */}
      <header className="flex items-center gap-4 mb-10">
        <Link to="/" id="back-to-home" className="btn-ghost p-2 rounded-xl" aria-label="Back to home">
          <ArrowLeftIcon className="w-5 h-5" />
        </Link>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-3xl" role="img" aria-label={meta.label}>{meta.emoji}</span>
            <h1 className="font-display font-bold text-3xl text-white">{meta.label}</h1>
          </div>
          <p className="text-surface-muted text-sm">{topics.length} topics available · Select one to begin</p>
        </div>
      </header>

      {/* ── Topic list ── */}
      {topics.length === 0 ? (
        <div className="card text-center py-16 text-surface-muted">
          <SparklesIcon className="w-8 h-8 mx-auto mb-3 opacity-50" />
          Topics for this subject are coming soon!
        </div>
      ) : (
        <section aria-label="Topic list">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((topic, i) => (
              <Link
                key={topic.id}
                to={`/topic/${topic.id}/question`}
                id={`topic-card-${topic.id}`}
                onClick={() => saveUserState('selected_topic', topic.id)}
                state={{ subjectId, topicLabel: topic.label }}
                className="card-hover group animate-slide-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-semibold text-white group-hover:text-gradient transition-all">
                    {topic.label}
                  </h2>
                  <span className={DIFFICULTY_STYLE[topic.difficulty] ?? 'badge-primary'}>
                    {topic.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-surface-muted">
                  <span className="flex items-center gap-1">
                    <SparklesIcon className="w-3.5 h-3.5" />
                    {topic.questions} questions
                  </span>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="w-3.5 h-3.5" />
                    {topic.time}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-1 text-primary-400 text-xs font-medium
                                group-hover:gap-2 transition-all duration-200">
                  Start Topic <ChevronRightIcon className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}
