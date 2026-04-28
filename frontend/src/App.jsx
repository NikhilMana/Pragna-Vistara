import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import TopicPage from '@/pages/TopicPage'
import QuestionPage from '@/pages/QuestionPage'
import AnalysisLoadingPage from '@/pages/AnalysisLoadingPage'
import TeacherValidationPage from '@/pages/TeacherValidationPage'
import ResultPage from '@/pages/ResultPage'
import NotFoundPage from '@/pages/NotFoundPage'
import ProgressDashboardPage from '@/pages/ProgressDashboardPage'
import { LearningSelectionProvider } from '@/context/LearningSelectionContext'
import { OfflineSyncProvider } from '@/context/OfflineSyncContext'

/**
 * App.jsx — Root component
 *
 * Route structure:
 *   /                          → HomePage       (subject selection)
 *   /subject/:subjectId        → TopicPage      (topic list for a subject)
 *   /topic/:topicId/question   → QuestionPage   (question interface)
 *   /analysis                  → AnalysisLoadingPage
 *   /teacher-validation        → TeacherValidationPage
 *   /result                    → ResultPage     (explanation & feedback)
 *   *                          → NotFoundPage
 */
export default function App() {
  return (
    <OfflineSyncProvider>
      <LearningSelectionProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="subject/:subjectId" element={<TopicPage />} />
              <Route path="topic/:topicId/question" element={<QuestionPage />} />
              <Route path="analysis" element={<AnalysisLoadingPage />} />
              <Route path="progress" element={<ProgressDashboardPage />} />
              <Route path="teacher-validation" element={<TeacherValidationPage />} />
              <Route path="result" element={<ResultPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </LearningSelectionProvider>
    </OfflineSyncProvider>
  )
}
