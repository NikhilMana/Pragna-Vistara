import axios from 'axios'
import { analyzeResponseOffline, generateExplanationOffline } from '@/utils/offlineEngine'

/**
 * api.js — Axios client pre-configured for the Pragna Vistara FastAPI backend.

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

const syllabusRequestCache = new Map()

async function getCachedSyllabusRequest(cacheKey, request) {
  if (syllabusRequestCache.has(cacheKey)) {
    return syllabusRequestCache.get(cacheKey)
  }

  const promise = request()
    .catch((error) => {
      syllabusRequestCache.delete(cacheKey)
      throw error
    })

  syllabusRequestCache.set(cacheKey, promise)
  return promise
}

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
export async function analyzeResponseOnline(payload) {
  const { data } = await client.post('/analyze-response', payload)
  return data
}

export async function analyzeResponse(payload) {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return analyzeResponseOffline(payload)
  }

  try {
    return await analyzeResponseOnline(payload)
  } catch {
    return analyzeResponseOffline(payload)
  }
}

/**
 * Requests an offline stored explanation for a misconception.
 *
 * @param {Object} payload
 * @param {string} payload.misconception_type
 * @param {string} payload.topic
 * @param {string} [payload.subject]
 * @param {string} [payload.question_text]
 * @param {string} [payload.student_answer]
 * @returns {Promise<Object>} ExplanationResult
 */
export async function generateExplanationOnline(payload) {
  const { data } = await client.post('/generate-explanation', payload)
  return data
}

export async function generateExplanation(payload) {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return generateExplanationOffline(payload)
  }

  try {
    return await generateExplanationOnline(payload)
  } catch {
    return generateExplanationOffline(payload)
  }
}

/**
 * Requests optional local Ollama/Mistral enhancement.
 *
 * @param {Object} payload
 * @param {string} payload.topic
 * @param {string} payload.content
 * @param {string} [payload.story]
 * @param {'rephrase'|'analogy'|'hybrid'} [payload.use_case]
 * @returns {Promise<Object>} LocalExplanationResult
 */
export async function localExplanation(payload) {
  const { data } = await client.post('/local-explanation', payload)
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

export async function getSyllabusCatalog() {
  return getCachedSyllabusRequest('catalog', async () => {
    const { data } = await client.get('/v1/syllabus')
    return data
  })
}

export async function getSyllabusClass(classSlug) {
  return getCachedSyllabusRequest(`class:${classSlug}`, async () => {
    const { data } = await client.get(`/v1/syllabus/classes/${classSlug}`)
    return data
  })
}

export async function getSyllabusSubject(classSlug, subjectSlug) {
  return getCachedSyllabusRequest(`subject:${classSlug}:${subjectSlug}`, async () => {
    const { data } = await client.get(`/v1/syllabus/classes/${classSlug}/subjects/${subjectSlug}`)
    return data
  })
}

export async function getSyllabusDocument(documentId) {
  return getCachedSyllabusRequest(`document:${documentId}`, async () => {
    const { data } = await client.get(`/v1/syllabus/documents/${documentId}`)
    return data
  })
}

export async function searchSyllabus(query, limit = 20) {
  const { data } = await client.get('/v1/syllabus/search', {
    params: { q: query, limit },
  })
  return data
}

export default client
