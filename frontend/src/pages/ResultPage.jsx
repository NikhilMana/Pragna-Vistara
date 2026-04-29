import { useLocation, Link } from 'react-router-dom'
import { CheckCircleIcon, XCircleIcon, SparklesIcon, ArrowLeftIcon } from '@/components/ui/Icons'

/**
 * ResultPage — post-session summary with score, per-question feedback,
 * and placeholder for AI-generated explanation.
 * Route: /result
 * Expects location.state: { responses[], topicId, topicLabel }
 */
export default function ResultPage() {
  const { state } = useLocation()
  const responses  = state?.responses  ?? []
  const topicLabel = state?.topicLabel ?? 'this topic'
  const topicId    = state?.topicId    ?? ''

  const correct   = responses.filter((r) => r.isCorrect).length
  const total     = responses.length
  const scorePct  = total > 0 ? Math.round((correct / total) * 100) : 0

  // ── Score styling ────────────────────────────────────
  const scoreConfig = (() => {
    if (scorePct >= 80) return { label: 'Excellent!',   color: 'text-accent-teal',  ring: 'stroke-accent-teal'  }
    if (scorePct >= 50) return { label: 'Good effort!', color: 'text-accent-amber', ring: 'stroke-accent-amber' }
    return                    { label: 'Keep trying!',  color: 'text-accent-rose',  ring: 'stroke-accent-rose'  }
  })()

  const circumference = 2 * Math.PI * 45  // r=45
  const dashOffset    = circumference - (circumference * scorePct) / 100

  return (
    <div className="container-page max-w-3xl animate-fade-in">

      {/* ── Header ── */}
      <header className="text-center mb-10">
        <div className="inline-flex items-center gap-2 badge-primary mb-4">
          <SparklesIcon className="w-3.5 h-3.5" />
          Session Complete
        </div>
        <h1 className="font-display font-bold text-3xl text-surface-text mb-2">
          Results for <span className="text-gradient">{topicLabel}</span>
        </h1>
        <p className="text-surface-muted text-sm">
          Here's how you performed and where to focus next.
        </p>
      </header>

      {/* ── Score ring ── */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative w-36 h-36">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90" aria-hidden="true">
            {/* Track */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#334155" strokeWidth="8" />
            {/* Fill */}
            <circle
              cx="50" cy="50" r="45" fill="none"
              className={`${scoreConfig.ring} transition-all duration-1000 ease-out`}
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`font-display font-bold text-3xl ${scoreConfig.color}`}>{scorePct}%</span>
            <span className="text-surface-muted text-xs">{correct}/{total}</span>
          </div>
        </div>
        <p className={`font-semibold text-lg mt-3 ${scoreConfig.color}`}>{scoreConfig.label}</p>
      </div>

      {/* ── AI Explanation placeholder ── */}
      <section
        id="ai-explanation-panel"
        aria-label="AI Explanation"
        className="card mb-8 border-primary-500 bg-surface-card"
      >
        <div className="flex items-center gap-2 mb-3">
          <SparklesIcon className="w-5 h-5 text-primary-500" />
          <h2 className="font-semibold text-surface-text">AI-Generated Explanation</h2>
          <span className="badge-primary text-xs ml-auto">Coming Soon</span>
        </div>
        <div className="space-y-2">
          {/* Skeleton placeholder lines */}
          {[80, 65, 90, 55].map((w, i) => (
            <div key={i} className="skeleton h-3 rounded" style={{ width: `${w}%` }} />
          ))}
        </div>
        <p className="text-surface-muted text-xs mt-4">
          The AI misconception analyser will surface detailed explanations and corrective guidance here.
        </p>
      </section>

      {/* ── Per-question breakdown ── */}
      {responses.length > 0 && (
        <section aria-label="Question breakdown" className="mb-10">
          <h2 className="font-semibold text-surface-text mb-4">Question Breakdown</h2>
          <div className="flex flex-col gap-3">
            {responses.map((r, i) => (
              <div
                key={r.questionId}
                id={`result-row-${r.questionId}`}
                className={`card flex items-start gap-4 border
                            ${r.isCorrect ? 'border-accent-teal/20' : 'border-accent-rose/20'}`}
              >
                {r.isCorrect
                  ? <CheckCircleIcon className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" />
                  : <XCircleIcon    className="w-5 h-5 text-accent-rose shrink-0 mt-0.5" />
                }
                <div className="flex-1 min-w-0">
                  <p className="text-surface-text text-sm font-medium leading-snug mb-1 line-clamp-2">
                    Q{i + 1}. {r.questionText}
                  </p>
                  {!r.isCorrect && (
                    <p className="text-surface-muted text-xs">
                      Your answer was incorrect.&nbsp;
                      <span className="text-accent-teal">Review the correct concept.</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Actions ── */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/" id="back-home-result" className="btn-secondary">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Subjects
        </Link>
        {topicId && (
          <Link
            to={`/topic/${topicId}/question`}
            id="retry-topic-btn"
            state={{ topicLabel }}
            className="btn-primary"
          >
            Retry Topic
          </Link>
        )}
      </div>

    </div>
  )
}
