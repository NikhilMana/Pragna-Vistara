import { openDB } from 'idb'

// ─── Constants ───────────────────────────────────────────────────────────────

const DB_NAME    = 'edu-sakhi-db'
const DB_VERSION = 1

/**
 * Object store names used across the application.
 * @enum {string}
 */
export const STORES = {
  QUESTIONS:  'questions',
  RESPONSES:  'responses',
  EXPLANATIONS: 'explanations',
}

// ─── DB Initialisation ────────────────────────────────────────────────────────

/**
 * Opens (and upgrades when needed) the Edu-Sakhi IndexedDB database.
 *
 * Schema
 * ──────
 * questions   { id, subjectId, topicId, text, type, options, correctIndex, difficulty }
 * responses   { id (auto), questionId, topicId, selectedIndex, isCorrect, timestamp }
 * explanations{ id, questionId, content, generatedAt }
 *
 * @returns {Promise<IDBPDatabase>}
 */
async function getDB() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // ── questions store ────────────────────────────
      if (!db.objectStoreNames.contains(STORES.QUESTIONS)) {
        const qs = db.createObjectStore(STORES.QUESTIONS, { keyPath: 'id' })
        qs.createIndex('by-topic',   'topicId',   { unique: false })
        qs.createIndex('by-subject', 'subjectId', { unique: false })
      }

      // ── responses store ────────────────────────────
      if (!db.objectStoreNames.contains(STORES.RESPONSES)) {
        const rs = db.createObjectStore(STORES.RESPONSES, {
          keyPath: 'id', autoIncrement: true,
        })
        rs.createIndex('by-question', 'questionId', { unique: false })
        rs.createIndex('by-topic',    'topicId',    { unique: false })
        rs.createIndex('by-time',     'timestamp',  { unique: false })
      }

      // ── explanations store ─────────────────────────
      if (!db.objectStoreNames.contains(STORES.EXPLANATIONS)) {
        db.createObjectStore(STORES.EXPLANATIONS, { keyPath: 'id' })
      }
    },
  })
}

// ─── Questions ────────────────────────────────────────────────────────────────

/**
 * Saves a batch of questions to the local store (upsert).
 * @param {Object[]} questions
 */
export async function saveQuestions(questions) {
  const db = await getDB()
  const tx = db.transaction(STORES.QUESTIONS, 'readwrite')
  await Promise.all([
    ...questions.map((q) => tx.store.put(q)),
    tx.done,
  ])
}

/**
 * Retrieves all questions for a given topic from local storage.
 * @param {string} topicId
 * @returns {Promise<Object[]>}
 */
export async function getQuestionsByTopic(topicId) {
  const db = await getDB()
  return db.getAllFromIndex(STORES.QUESTIONS, 'by-topic', topicId)
}

/**
 * Retrieves a single question by its ID.
 * @param {string} questionId
 * @returns {Promise<Object|undefined>}
 */
export async function getQuestionById(questionId) {
  const db = await getDB()
  return db.get(STORES.QUESTIONS, questionId)
}

// ─── Responses ────────────────────────────────────────────────────────────────

/**
 * Persists a student's answer to the local store.
 *
 * @param {Object} response
 * @param {string} response.questionId
 * @param {string} response.topicId
 * @param {number} response.selectedIndex
 * @param {boolean} response.isCorrect
 * @returns {Promise<number>} auto-generated ID
 */
export async function saveResponse(response) {
  const db = await getDB()
  return db.add(STORES.RESPONSES, {
    ...response,
    timestamp: Date.now(),
  })
}

/**
 * Retrieves all responses for a specific topic.
 * @param {string} topicId
 * @returns {Promise<Object[]>}
 */
export async function getResponsesByTopic(topicId) {
  const db = await getDB()
  return db.getAllFromIndex(STORES.RESPONSES, 'by-topic', topicId)
}

/**
 * Retrieves all stored student responses (for sync or analytics).
 * @returns {Promise<Object[]>}
 */
export async function getAllResponses() {
  const db = await getDB()
  return db.getAll(STORES.RESPONSES)
}

// ─── Explanations ─────────────────────────────────────────────────────────────

/**
 * Saves an AI-generated explanation keyed by questionId.
 * @param {string} questionId
 * @param {string} content        - Markdown/HTML explanation text
 */
export async function saveExplanation(questionId, content) {
  const db = await getDB()
  return db.put(STORES.EXPLANATIONS, {
    id: questionId,
    content,
    generatedAt: Date.now(),
  })
}

/**
 * Retrieves a cached explanation for a question.
 * @param {string} questionId
 * @returns {Promise<Object|undefined>}
 */
export async function getExplanation(questionId) {
  const db = await getDB()
  return db.get(STORES.EXPLANATIONS, questionId)
}

// ─── Utility ──────────────────────────────────────────────────────────────────

/**
 * Clears all data from every store (use with caution — for dev/reset).
 */
export async function clearAllData() {
  const db = await getDB()
  const tx = db.transaction(Object.values(STORES), 'readwrite')
  await Promise.all([
    ...Object.values(STORES).map((store) => tx.objectStore(store).clear()),
    tx.done,
  ])
}
