/**
 * catalogRegistry.js
 * Maps (classId, subjectId) → catalog import function.
 * All catalog files export the same schema as physicsClass12Catalog.js.
 */

// Eagerly-loaded Class 12 Physics (already exists, highest traffic)
import { PHYSICS_CLASS_12 } from './physicsClass12Catalog'

/**
 * Static catalog map — eagerly loaded for Class 12 (board exam priority)
 * Pattern: 'class-12:physics' → catalog object
 */
const EAGER_CATALOGS = {
  'class-12:physics': PHYSICS_CLASS_12,
}

/**
 * Lazy catalog loaders — imported on demand to keep initial bundle small.
 * Add new subjects here as catalog files are created.
 */
const LAZY_CATALOG_LOADERS = {
  'class-12:chemistry':    () => import('./catalogs/class-12/chemistry'),
  'class-12:mathematics':  () => import('./catalogs/class-12/mathematics'),
  'class-12:biology':      () => import('./catalogs/class-12/biology'),
  'class-12:english':      () => import('./catalogs/class-12/english'),
  // Uncomment as they are created
  // 'class-11:physics':      () => import('./catalogs/class-11/physics'),
  // 'class-11:chemistry':    () => import('./catalogs/class-11/chemistry'),
  // 'class-11:mathematics':  () => import('./catalogs/class-11/mathematics'),
  // 'class-11:biology':      () => import('./catalogs/class-11/biology'),
  // 'class-11:english':      () => import('./catalogs/class-11/english'),
  // 'class-10:science':      () => import('./catalogs/class-10/science'),
  // 'class-10:mathematics':  () => import('./catalogs/class-10/mathematics'),
  // 'class-10:social-science': () => import('./catalogs/class-10/social-science'),
  // 'class-10:english':      () => import('./catalogs/class-10/english'),
  // 'class-09:science':      () => import('./catalogs/class-09/science'),
  // 'class-09:mathematics':  () => import('./catalogs/class-09/mathematics'),
  // 'class-09:social-science': () => import('./catalogs/class-09/social-science'),
  // 'class-09:english':      () => import('./catalogs/class-09/english'),
}

// In-memory cache for loaded lazy catalogs
const _cache = {}

/**
 * Returns the catalog key for a class+subject pair.
 * @param {string} classId  e.g. 'class-12'
 * @param {string} subjectId  e.g. 'chemistry'
 */
export function getCatalogKey(classId, subjectId) {
  return `${classId}:${subjectId}`
}

/**
 * Synchronously returns an eagerly-loaded catalog, or null if not eager.
 */
export function getEagerCatalog(classId, subjectId) {
  return EAGER_CATALOGS[getCatalogKey(classId, subjectId)] ?? null
}

/**
 * Asynchronously loads and returns a catalog by classId + subjectId.
 * Returns null if no catalog exists for that combination.
 * @param {string} classId
 * @param {string} subjectId
 * @returns {Promise<object|null>}
 */
export async function loadCatalog(classId, subjectId) {
  const key = getCatalogKey(classId, subjectId)

  // 1. Check eager catalog
  if (EAGER_CATALOGS[key]) return EAGER_CATALOGS[key]

  // 2. Return from cache
  if (_cache[key]) return _cache[key]

  // 3. Lazy load
  const loader = LAZY_CATALOG_LOADERS[key]
  if (!loader) return null

  try {
    const module = await loader()
    // Convention: each catalog file has a named export matching the catalog object
    // e.g. chemistry.js exports CHEMISTRY_CLASS_12, or a default export
    const catalog = module.default ?? Object.values(module)[0]
    _cache[key] = catalog
    return catalog
  } catch (err) {
    console.error(`[catalogRegistry] Failed to load catalog for ${key}:`, err)
    return null
  }
}

/**
 * Returns true if a catalog exists for the given classId + subjectId.
 */
export function hasCatalog(classId, subjectId) {
  const key = getCatalogKey(classId, subjectId)
  return key in EAGER_CATALOGS || key in LAZY_CATALOG_LOADERS
}

/**
 * Get a chapter from a loaded catalog by chapterId.
 */
export function getCatalogChapter(catalog, chapterId) {
  return catalog?.chapters?.find(c => c.id === chapterId) ?? null
}

/**
 * Get a topic from a loaded catalog by chapterId + topicId.
 */
export function getCatalogTopic(catalog, chapterId, topicId) {
  return getCatalogChapter(catalog, chapterId)?.topics?.find(t => t.id === topicId) ?? null
}

/**
 * Returns all currently loaded catalogs (eager + cached lazy).
 */
export function getAllLoadedCatalogs() {
  return [ ...Object.values(EAGER_CATALOGS), ...Object.values(_cache) ]
}

