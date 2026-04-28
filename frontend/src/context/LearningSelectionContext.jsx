import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getLearningSelection, saveLearningSelection } from '@/utils/indexedDB'

const LearningSelectionContext = createContext(null)

const initialSelection = {
  subjectId: null,
  subjectLabel: null,
  topicId: null,
  topicLabel: null,
}

export function LearningSelectionProvider({ children }) {
  const [selection, setSelection] = useState(initialSelection)
  const [isSelectionLoaded, setIsSelectionLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false

    getLearningSelection()
      .then((storedSelection) => {
        if (!cancelled && storedSelection) {
          setSelection({ ...initialSelection, ...storedSelection })
        }
      })
      .catch(() => {
        if (!cancelled) setSelection(initialSelection)
      })
      .finally(() => {
        if (!cancelled) setIsSelectionLoaded(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const selectSubject = useCallback(async (subject) => {
    const nextSelection = {
      subjectId: subject.id,
      subjectLabel: subject.label,
      topicId: null,
      topicLabel: null,
    }
    setSelection(nextSelection)
    await saveLearningSelection(nextSelection)
  }, [])

  const selectTopic = useCallback(async (subject, topic) => {
    const nextSelection = {
      subjectId: subject.id,
      subjectLabel: subject.label,
      topicId: topic.id,
      topicLabel: topic.label,
    }
    setSelection(nextSelection)
    await saveLearningSelection(nextSelection)
  }, [])

  const value = useMemo(
    () => ({ selection, isSelectionLoaded, selectSubject, selectTopic }),
    [selection, isSelectionLoaded],
  )

  return (
    <LearningSelectionContext.Provider value={value}>
      {children}
    </LearningSelectionContext.Provider>
  )
}

export function useLearningSelection() {
  const context = useContext(LearningSelectionContext)
  if (!context) {
    throw new Error('useLearningSelection must be used inside LearningSelectionProvider')
  }
  return context
}
