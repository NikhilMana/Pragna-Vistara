import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, ChevronDown, ChevronRight, Search } from 'lucide-react'
import { getAllChapters, getChapter } from '@/data/physicsClass12Catalog'

/**
 * PhysicsChaptersPage — Lists all Class 12 NCERT Physics chapters
 * and topics within each chapter.
 */
export default function PhysicsChaptersPage() {
  const navigate = useNavigate()
  const { chapterId } = useParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedChapters, setExpandedChapters] = useState([])

  const chapters = useMemo(() => getAllChapters(), [])
  const singleChapter = useMemo(() => chapterId ? getChapter(chapterId) : null, [chapterId])

  // If a specific chapter is selected, show its topics
  if (singleChapter) {
    return (
      <div className="container-page max-w-4xl animate-fade-in">
        <button onClick={() => navigate('/physics/class-12')} className="btn-ghost mb-6 pl-0">
          <ArrowLeft size={18} className="mr-1" /> All Chapters
        </button>

        <div className="mb-6">
          <div className="mb-3 flex gap-2 text-xs">
            <span className="badge-primary">Class XII Physics</span>
            <span className="badge-amber">Chapter {singleChapter.number}</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-surface-text">{singleChapter.title}</h1>
          <p className="mt-2 text-sm text-surface-muted">{singleChapter.topics.length} topics</p>
        </div>

        <div className="space-y-3">
          {singleChapter.topics.map((topic, i) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => navigate(`/physics/class-12/chapters/${chapterId}/topics/${topic.id}`)}
              className="group w-full rounded-2xl border border-surface-border bg-surface-card/70 p-5 text-left transition-all hover:border-primary-500 hover:bg-surface-card"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-border bg-surface-card text-sm font-bold text-primary-500">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-surface-text group-hover:text-primary-500">
                      {topic.title}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-surface-muted">
                      <span className="rounded-full border border-surface-border bg-surface px-2 py-0.5">
                        {topic.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <ArrowRight size={18} className="text-surface-muted group-hover:text-primary-500 transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Show all chapters
  const filtered = searchQuery.trim()
    ? chapters.filter(ch =>
        ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.topics.some(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : chapters

  const toggleChapter = (id) => {
    setExpandedChapters(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  return (
    <div className="container-page max-w-4xl animate-fade-in">
      <button onClick={() => navigate('/selection')} className="btn-ghost mb-6 pl-0">
        <ArrowLeft size={18} className="mr-1" /> Back to Selection
      </button>

      <div className="mb-8">
        <div className="mb-3 flex gap-2 text-xs">
          <span className="badge-primary">CBSE / NCERT</span>
          <span className="badge-teal">Class XII</span>
        </div>
        <h1 className="text-4xl font-display font-bold text-surface-text">Physics</h1>
        <p className="mt-2 text-surface-muted">
          {chapters.length} chapters • {chapters.reduce((s, c) => s + c.topics.length, 0)} topics •
          Interactive animations, questions, and misconception probes
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-surface-muted">
          <Search size={16} />
        </div>
        <input
          type="text"
          className="input pl-10"
          placeholder="Search chapters and topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>



      {/* Chapter list */}
      <div className="space-y-3">
        {filtered.map((ch) => {
          const isExpanded = expandedChapters.includes(ch.id) || !!searchQuery.trim()
          return (
            <div key={ch.id} className="rounded-2xl border border-surface-border bg-surface-card/70 overflow-hidden">
              <button
                type="button"
                onClick={() => searchQuery.trim() ? navigate(`/physics/class-12/chapters/${ch.id}`) : toggleChapter(ch.id)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-surface/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-500 bg-surface-card text-lg font-bold text-primary-500">
                    {ch.number}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-surface-text">{ch.title}</p>
                    <p className="text-xs text-surface-muted mt-1">{ch.topics.length} topics</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); navigate(`/physics/class-12/chapters/${ch.id}`) }}
                    className="btn-secondary px-3 py-1.5 text-xs"
                  >
                    Open <ArrowRight size={12} />
                  </button>
                  {isExpanded ? <ChevronDown size={18} className="text-surface-muted" /> : <ChevronRight size={18} className="text-surface-muted" />}
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-surface-border bg-surface/30 px-5 py-3">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {ch.topics.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => navigate(`/physics/class-12/chapters/${ch.id}/topics/${t.id}`)}
                        className="flex items-center gap-3 rounded-lg border border-surface-border bg-surface-card px-3 py-2.5 text-left text-xs transition-colors hover:border-primary-500"
                      >
                        <BookOpen size={14} className="text-primary-500 shrink-0" />
                        <span className="text-surface-text">{t.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-surface-border bg-surface-card px-4 py-3">
      <p className="text-[11px] uppercase tracking-wider text-surface-muted">{label}</p>
      <p className="mt-1 text-2xl font-display font-bold text-surface-text">{value}</p>
    </div>
  )
}
