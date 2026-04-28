import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import TopicPage from '@/pages/TopicPage'
import QuestionPage from '@/pages/QuestionPage'
import ResultPage from '@/pages/ResultPage'
import NotFoundPage from '@/pages/NotFoundPage'

/**
 * App.jsx — Root component
 *
 * Route structure:
 *   /                          → HomePage       (subject selection)
 *   /subject/:subjectId        → TopicPage      (topic list for a subject)
 *   /topic/:topicId/question   → QuestionPage   (question interface)
 *   /result                    → ResultPage     (explanation & feedback)
 *   *                          → NotFoundPage
 */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="subject/:subjectId" element={<TopicPage />} />
          <Route path="topic/:topicId/question" element={<QuestionPage />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
