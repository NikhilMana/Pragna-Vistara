import { openDB } from 'idb'

// ─── Constants ───────────────────────────────────────────────────────────────

const DB_NAME    = 'edu-sakhi-db'
const DB_VERSION = 4

/**
 * Object store names used across the application.
 * @enum {string}
 */
export const STORES = {
  QUESTIONS:  'questions',
  RESPONSES:  'responses',
  EXPLANATIONS: 'explanations',
  SELECTIONS: 'selections',
  SESSIONS:   'sessions',
  EXPLANATION_DRAFTS: 'explanationDrafts',
  APPROVED_CONTENT: 'approvedContent',
  PROGRESS_EVENTS: 'progressEvents',
}

const CURRENT_SELECTION_ID = 'current-learning-selection'

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

      if (!db.objectStoreNames.contains(STORES.SELECTIONS)) {
        db.createObjectStore(STORES.SELECTIONS, { keyPath: 'id' })
      }

      if (!db.objectStoreNames.contains(STORES.SESSIONS)) {
        db.createObjectStore(STORES.SESSIONS, { keyPath: 'id' })
      }

      if (!db.objectStoreNames.contains(STORES.EXPLANATION_DRAFTS)) {
        const drafts = db.createObjectStore(STORES.EXPLANATION_DRAFTS, { keyPath: 'id' })
        drafts.createIndex('by-status', 'status', { unique: false })
        drafts.createIndex('by-topic', 'topic', { unique: false })
        drafts.createIndex('by-time', 'createdAt', { unique: false })
      }

      if (!db.objectStoreNames.contains(STORES.APPROVED_CONTENT)) {
        const approved = db.createObjectStore(STORES.APPROVED_CONTENT, { keyPath: 'id' })
        approved.createIndex('by-topic', 'topic', { unique: false })
        approved.createIndex('by-time', 'approvedAt', { unique: false })
      }

      if (!db.objectStoreNames.contains(STORES.PROGRESS_EVENTS)) {
        const progress = db.createObjectStore(STORES.PROGRESS_EVENTS, {
          keyPath: 'id',
          autoIncrement: true,
        })
        progress.createIndex('by-topic', 'topicId', { unique: false })
        progress.createIndex('by-subject', 'subjectId', { unique: false })
        progress.createIndex('by-time', 'createdAt', { unique: false })
        progress.createIndex('by-misconception', 'misconceptionType', { unique: false })
      }
    },
  })
}

export async function saveLearningSelection(selection) {
  const db = await getDB()
  return db.put(STORES.SELECTIONS, {
    id: CURRENT_SELECTION_ID,
    ...selection,
    updatedAt: Date.now(),
  })
}

export async function getLearningSelection() {
  const db = await getDB()
  const selection = await db.get(STORES.SELECTIONS, CURRENT_SELECTION_ID)
  if (!selection) return null

  const { id, updatedAt, ...learningSelection } = selection
  return learningSelection
}

export async function saveCurrentSession(sessionData) {
  const db = await getDB()
  return db.put(STORES.SESSIONS, {
    id: 'current',
    ...sessionData,
    updatedAt: Date.now(),
  })
}

export async function getCurrentSession() {
  const db = await getDB()
  return db.get(STORES.SESSIONS, 'current')
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

export async function getPendingResponses() {
  const responses = await getAllResponses()
  return responses.filter((response) => response.syncStatus !== 'synced')
}

export async function updateResponse(responseId, updates) {
  const db = await getDB()
  const current = await db.get(STORES.RESPONSES, responseId)

  if (!current) {
    throw new Error('Response not found')
  }

  return db.put(STORES.RESPONSES, {
    ...current,
    ...updates,
    id: responseId,
    updatedAt: Date.now(),
  })
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

export async function saveCachedExplanation(explanation) {
  const db = await getDB()
  return db.put(STORES.EXPLANATIONS, {
    ...explanation,
    cachedAt: explanation.cachedAt ?? Date.now(),
  })
}

export async function getCachedExplanation(explanationId) {
  const db = await getDB()
  return db.get(STORES.EXPLANATIONS, explanationId)
}

export async function saveExplanationDraft(explanation) {
  const db = await getDB()
  const id = explanation.id ?? `${explanation.questionId ?? 'explanation'}-${Date.now()}`
  const now = Date.now()

  return db.put(STORES.EXPLANATION_DRAFTS, {
    status: 'pending',
    createdAt: now,
    updatedAt: now,
    ...explanation,
    id,
  })
}

export async function getExplanationDrafts() {
  const db = await getDB()
  return db.getAll(STORES.EXPLANATION_DRAFTS)
}

export async function updateExplanationDraft(explanation) {
  const db = await getDB()
  return db.put(STORES.EXPLANATION_DRAFTS, {
    ...explanation,
    updatedAt: Date.now(),
  })
}

export async function rejectExplanationDraft(explanation) {
  const db = await getDB()
  return db.put(STORES.EXPLANATION_DRAFTS, {
    ...explanation,
    status: 'rejected',
    rejectedAt: Date.now(),
    updatedAt: Date.now(),
  })
}

export async function approveExplanationDraft(explanation) {
  const db = await getDB()
  const now = Date.now()
  const approvedContent = {
    ...explanation,
    status: 'approved',
    approvedAt: now,
    updatedAt: now,
  }

  const tx = db.transaction([STORES.EXPLANATION_DRAFTS, STORES.APPROVED_CONTENT], 'readwrite')
  await Promise.all([
    tx.objectStore(STORES.EXPLANATION_DRAFTS).put(approvedContent),
    tx.objectStore(STORES.APPROVED_CONTENT).put(approvedContent),
    tx.done,
  ])
  return approvedContent.id
}

export async function getApprovedContent() {
  const db = await getDB()
  return db.getAll(STORES.APPROVED_CONTENT)
}

export async function saveProgressEvent(event) {
  const db = await getDB()
  return db.add(STORES.PROGRESS_EVENTS, {
    ...event,
    createdAt: event.createdAt ?? Date.now(),
  })
}

export async function getAllProgressEvents() {
  const db = await getDB()
  return db.getAll(STORES.PROGRESS_EVENTS)
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
