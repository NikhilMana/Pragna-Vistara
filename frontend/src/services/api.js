import axios from 'axios'

/**
 * api.js — Axios client pre-configured for the Edu-Sakhi FastAPI backend.
 *
 * Base URL: /api  →  proxied to http://localhost:8000 in dev (see vite.config.js)
 *
 * All functions are async and return the response `data` field directly.
 * Errors are re-thrown as-is for the caller to handle.
 */

const client = axios.create({
  baseURL: '/api',
  timeout: 15_000,
  headers: { 'Content-Type': 'application/json' },
})

// ─── Request interceptor (attach auth token when available) ──────────────────
client.interceptors.request.use((config) => {
  // TODO: attach JWT / session token from localStorage if auth is added
  return config
})

// ─── Response interceptor (normalise errors) ─────────────────────────────────
client.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.detail ??
      error.response?.data?.message ??
      error.message ??
      'An unexpected error occurred.'
    return Promise.reject(new Error(message))
  },
)

// ─── API methods ──────────────────────────────────────────────────────────────

/**
 * Sends a student response to the backend for misconception analysis.
 *
 * @param {Object} payload
 * @param {string} payload.questionId
 * @param {string} payload.questionText
 * @param {number} payload.selectedIndex
 * @param {number} payload.correctIndex
 * @param {string} payload.topicId
 * @returns {Promise<Object>} AnalysisResult
 */
export async function analyzeResponse(payload) {
  const { data } = await client.post('/analyze-response', payload)
  return data
}

/**
 * Requests an AI-generated explanation for a question.
 *
 * @param {Object} payload
 * @param {string} payload.questionId
 * @param {string} payload.questionText
 * @param {string} payload.topicId
 * @param {string} [payload.studentAnswer]
 * @returns {Promise<Object>} ExplanationResult
 */
export async function generateExplanation(payload) {
  const { data } = await client.post('/generate-explanation', payload)
  return data
}

/**
 * Validates newly generated content (questions / explanations) before storing.
 *
 * @param {Object} payload
 * @param {string} payload.contentType   - 'question' | 'explanation'
 * @param {Object} payload.content       - The content object to validate
 * @returns {Promise<Object>} ValidationResult
 */
export async function validateContent(payload) {
  const { data } = await client.post('/validate-content', payload)
  return data
}

export default client
