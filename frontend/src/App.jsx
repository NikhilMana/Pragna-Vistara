import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import LoginPage from '@/pages/LoginPage'
import SelectionPage from '@/pages/SelectionPage'
import SubjectsPage from '@/pages/SubjectsPage'
import ChaptersPage from '@/pages/ChaptersPage'
import TopicsPage from '@/pages/TopicsPage'
import LearningPage from '@/pages/LearningPage'
import QuestionPage from '@/pages/QuestionPage'
import AnalysisLoadingPage from '@/pages/AnalysisLoadingPage'
import TeacherValidationPage from '@/pages/TeacherValidationPage'
import ResultPage from '@/pages/ResultPage'
import NotFoundPage from '@/pages/NotFoundPage'
import ProgressDashboardPage from '@/pages/ProgressDashboardPage'
import SubjectChaptersPage from '@/pages/SubjectChaptersPage'
import SubjectLearningPage from '@/pages/SubjectLearningPage'
import { LearningSelectionProvider } from '@/context/LearningSelectionContext'
import { OfflineSyncProvider } from '@/context/OfflineSyncContext'

/**
 * App.jsx — Root component
 */
export default function App() {
  return (
    <OfflineSyncProvider>
      <LearningSelectionProvider>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route element={<Layout />}>
              <Route path="selection" element={<SelectionPage />} />
              <Route path="classes/:classSlug/subjects" element={<SubjectsPage />} />
              <Route path="classes/:classSlug/subjects/:subjectSlug" element={<ChaptersPage />} />
              <Route path="classes/:classSlug/subjects/:subjectSlug/documents/:documentId" element={<TopicsPage />} />
              <Route path="subjects" element={<SubjectsPage />} />
              <Route path="subjects/:subjectId/chapters" element={<ChaptersPage />} />
              <Route path="chapters/:chapterId/topics" element={<TopicsPage />} />
              <Route path="topics/:topicId/learn" element={<LearningPage />} />

              {/* Generic Catalog-based interactive curriculum */}
              <Route path="learn/:classId/:subjectId" element={<SubjectChaptersPage />} />
              <Route path="learn/:classId/:subjectId/chapters/:chapterId" element={<SubjectChaptersPage />} />
              <Route path="learn/:classId/:subjectId/chapters/:chapterId/topics/:topicId" element={<SubjectLearningPage />} />

              {/* Existing Routes retained for compatibility */}
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
