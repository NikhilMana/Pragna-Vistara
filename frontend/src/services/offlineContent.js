import { OFFLINE_QUESTION_BANK, getOfflineQuestionById, getOfflineQuestionByTopicId } from '@/data/offlineQuestionBank'
import { saveQuestions, getQuestionsByTopic, getQuestionById } from '@/utils/indexedDB'

let seedPromise = null

export async function ensureOfflineQuestionBank() {
  if (!seedPromise) {
    seedPromise = (async () => {
      await saveQuestions(OFFLINE_QUESTION_BANK)
      return OFFLINE_QUESTION_BANK
    })()
  }

  return seedPromise
}

export async function getQuestionForTopic(topicId) {
  await ensureOfflineQuestionBank()

  const storedQuestions = await getQuestionsByTopic(topicId)
  if (storedQuestions.length > 0) {
    return storedQuestions[0]
  }

  return getOfflineQuestionByTopicId(topicId)
}

export async function getQuestionForId(questionId) {
  await ensureOfflineQuestionBank()

  const storedQuestion = await getQuestionById(questionId)
  if (storedQuestion) {
    return storedQuestion
  }

  return getOfflineQuestionById(questionId)
}
