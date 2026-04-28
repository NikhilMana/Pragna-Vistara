import { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import ProgressBar from '@/components/ui/ProgressBar'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { ClockIcon, LightBulbIcon } from '@/components/ui/Icons'

/**
 * PLACEHOLDER_QUESTIONS — stub data until API / IndexedDB is wired up.
 * Each question has: id, text, type ('mcq' | 'short'), options[], correctIndex.
 */
const PLACEHOLDER_QUESTIONS = [
  {
    id: 'q1',
    text: 'A ball is thrown vertically upward with velocity 20 m/s. What is its velocity at the highest point?',
    type: 'mcq',
    options: ['20 m/s', '10 m/s', '0 m/s', '−20 m/s'],
    correctIndex: 2,
    hint: 'Think about what happens to kinetic energy at the peak.',
  },
  {
    id: 'q2',
    text: 'Which of the following is a vector quantity?',
    type: 'mcq',
    options: ['Speed', 'Mass', 'Displacement', 'Temperature'],
    correctIndex: 2,
    hint: 'Vector quantities have both magnitude and direction.',
  },
  {
    id: 'q3',
    text: "Newton's second law relates force to which two quantities?",
    type: 'mcq',
    options: [
      'Velocity and time',
      'Mass and acceleration',
      'Mass and velocity',
      'Acceleration and time',
    ],
    correctIndex: 1,
    hint: 'F = ma — what does each letter represent?',
  },
]

/**
 * QuestionPage — interactive question interface.
 * Route: /topic/:topicId/question
 *
 * State machine: idle → answered → (next question | navigate to result)
 */
export default function QuestionPage() {
  const { topicId } = useParams()
  const { state: locationState } = useLocation()
  const navigate = useNavigate()

  const questions = PLACEHOLDER_QUESTIONS            // TODO: load from IndexedDB / API
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)  // index or null
  const [isAnswered, setIsAnswered]       = useState(false)
  const [showHint, setShowHint]           = useState(false)
  const [responses, setResponses]         = useState([])      // accumulate for result page
  const [isSubmitting, setIsSubmitting]   = useState(false)

  const question = questions[currentIndex]
  const total    = questions.length

  // ── Handlers ────────────────────────────────────────
  function handleOptionSelect(idx) {
    if (isAnswered) return
    setSelectedOption(idx)
  }

  function handleSubmit() {
    if (selectedOption === null || isAnswered) return
    setIsAnswered(true)

    const response = {
      questionId:    question.id,
      questionText:  question.text,
      selectedIndex: selectedOption,
      correctIndex:  question.correctIndex,
      isCorrect:     selectedOption === question.correctIndex,
      topicId,
    }
    setResponses((prev) => [...prev, response])
    // TODO: persist to IndexedDB via saveResponse()
  }

  function handleNext() {
    if (currentIndex + 1 < total) {
      setCurrentIndex((i) => i + 1)
      setSelectedOption(null)
      setIsAnswered(false)
      setShowHint(false)
    } else {
      // Navigate to result page with accumulated data
      navigate('/result', { state: { responses: [...responses], topicId, topicLabel: locationState?.topicLabel } })
    }
  }

  // ── Option styling ───────────────────────────────────
  function optionClass(idx) {
    const base = `w-full text-left px-5 py-4 rounded-xl border font-medium text-sm
                  transition-all duration-200 `
    if (!isAnswered) {
      return base + (selectedOption === idx
        ? 'border-primary-500 bg-primary-500/15 text-white glow-border'
        : 'border-surface-border bg-surface-card text-surface-muted hover:border-primary-500/40 hover:text-white')
    }
    if (idx === question.correctIndex) return base + 'border-accent-teal bg-accent-teal/10 text-accent-teal'
    if (idx === selectedOption)        return base + 'border-accent-rose bg-accent-rose/10 text-accent-rose'
    return base + 'border-surface-border bg-surface-card text-surface-muted opacity-50'
  }

  // ── Render ────────────────────────────────────────────
  if (isSubmitting) return <LoadingSpinner label="Analysing your response…" size="lg" />

  return (
    <div className="container-page max-w-3xl animate-fade-in">

      {/* ── Progress ── */}
      <div className="mb-8">
        <ProgressBar current={currentIndex + 1} total={total} />
      </div>

      {/* ── Question card ── */}
      <article
        id={`question-card-${question.id}`}
        className="card mb-6"
        aria-label={`Question ${currentIndex + 1}`}
      >
        {/* Meta row */}
        <div className="flex items-center gap-3 mb-5">
          <span className="badge-primary">Q{currentIndex + 1}</span>
          <span className="flex items-center gap-1 text-xs text-surface-muted">
            <ClockIcon className="w-3.5 h-3.5" />
            ~30 sec
          </span>
        </div>

        {/* Question text */}
        <h2 className="text-white font-semibold text-lg leading-relaxed mb-6">
          {question.text}
        </h2>

        {/* MCQ Options */}
        <fieldset>
          <legend className="sr-only">Choose your answer</legend>
          <div className="flex flex-col gap-3">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                id={`option-${question.id}-${idx}`}
                type="button"
                onClick={() => handleOptionSelect(idx)}
                className={optionClass(idx)}
                aria-pressed={selectedOption === idx}
                disabled={isAnswered}
              >
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full border border-current flex items-center
                                   justify-center text-xs shrink-0 font-bold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </span>
              </button>
            ))}
          </div>
        </fieldset>
      </article>

      {/* ── Hint ── */}
      {!isAnswered && (
        <div className="mb-6">
          <button
            id="show-hint-btn"
            type="button"
            onClick={() => setShowHint((v) => !v)}
            className="flex items-center gap-1.5 text-accent-amber text-sm font-medium
                       hover:underline transition-all"
          >
            <LightBulbIcon className="w-4 h-4" />
            {showHint ? 'Hide hint' : 'Need a hint?'}
          </button>
          {showHint && (
            <div className="mt-3 glass p-4 text-sm text-accent-amber/90 animate-slide-up border-accent-amber/20">
              💡 {question.hint}
            </div>
          )}
        </div>
      )}

      {/* ── Inline feedback after answering ── */}
      {isAnswered && (
        <div className={`card mb-6 animate-slide-up border
                         ${selectedOption === question.correctIndex
                           ? 'border-accent-teal/40 bg-accent-teal/5'
                           : 'border-accent-rose/40 bg-accent-rose/5'}`}>
          <p className={`font-semibold mb-1
                         ${selectedOption === question.correctIndex ? 'text-accent-teal' : 'text-accent-rose'}`}>
            {selectedOption === question.correctIndex ? '✅ Correct!' : '❌ Incorrect'}
          </p>
          <p className="text-surface-muted text-sm">
            {selectedOption === question.correctIndex
              ? 'Great job! Moving to the next question.'
              : `The correct answer is: ${question.options[question.correctIndex]}`}
          </p>
        </div>
      )}

      {/* ── Action buttons ── */}
      <div className="flex items-center justify-between gap-4">
        <span className="text-surface-muted text-xs">
          {total - currentIndex - 1} question{total - currentIndex - 1 !== 1 ? 's' : ''} remaining
        </span>
        <div className="flex gap-3">
          {!isAnswered ? (
            <button
              id="submit-answer-btn"
              type="button"
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="btn-primary"
            >
              Submit Answer
            </button>
          ) : (
            <button
              id="next-question-btn"
              type="button"
              onClick={handleNext}
              className="btn-primary"
            >
              {currentIndex + 1 < total ? 'Next Question →' : 'View Results →'}
            </button>
          )}
        </div>
      </div>

    </div>
  )
}
