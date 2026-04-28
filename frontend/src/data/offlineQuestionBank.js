import { SUBJECTS, TOPICS_BY_SUBJECT } from '@/data/learningCatalog'

const SUBJECT_LABELS = Object.fromEntries(SUBJECTS.map((subject) => [subject.id, subject.label]))

const SUBJECT_CONFIG = {
  physics: {
    buildText: (topic) => `In ${topic.label}, explain the main idea behind the topic and describe what changes when the key condition changes.`,
    hint: 'Name the quantity involved, then explain the cause behind the change.',
    conceptSummary: (topic) => `the physical relationship in ${topic.label.toLowerCase()}, the condition at that instant, and why the effect happens`,
    expectedConcepts: ['because', 'change', 'condition'],
    offTrackKeywords: ['history', 'inventor'],
    formulaSignals: ['=', 'formula', 'equation'],
  },
  chemistry: {
    buildText: (topic) => `Explain the core idea of ${topic.label} and why the particles or substances behave that way.`,
    hint: 'Focus on structure, interaction, and the reason for the result.',
    conceptSummary: (topic) => `how particles behave in ${topic.label.toLowerCase()} and the reason that behaviour occurs`,
    expectedConcepts: ['particle', 'bond', 'because'],
    offTrackKeywords: ['discovery', 'scientist'],
    formulaSignals: ['equation', '=', 'formula'],
  },
  mathematics: {
    buildText: (topic) => `For ${topic.label}, explain the idea behind the method before doing any calculation.`,
    hint: 'State what the method finds, then say why that method fits the problem.',
    conceptSummary: (topic) => `the reasoning method in ${topic.label.toLowerCase()} and why that method solves the problem`,
    expectedConcepts: ['method', 'why', 'result'],
    offTrackKeywords: ['chapter', 'history'],
    formulaSignals: ['=', 'formula', 'differentiate', 'integrate'],
  },
  biology: {
    buildText: (topic) => `Explain one important process or role from ${topic.label} and why it matters to the organism.`,
    hint: 'Talk about the function first, then the effect on the living system.',
    conceptSummary: (topic) => `the role of the biological process in ${topic.label.toLowerCase()} and how it supports life`,
    expectedConcepts: ['function', 'process', 'because'],
    offTrackKeywords: ['inventor', 'machine'],
    formulaSignals: ['equation', '='],
  },
  'computer-science': {
    buildText: (topic) => `In ${topic.label}, explain the concept clearly and describe how it affects a program or system.`,
    hint: 'Use one example and explain what changes when the concept is used correctly.',
    conceptSummary: (topic) => `how the core idea in ${topic.label.toLowerCase()} works and what effect it has inside a program`,
    expectedConcepts: ['example', 'value', 'logic'],
    offTrackKeywords: ['computer brand', 'history'],
    formulaSignals: ['=', 'syntax', 'code'],
  },
  electronics: {
    buildText: (topic) => `Explain the main idea in ${topic.label} and what happens in the circuit when the condition changes.`,
    hint: 'Name the signal or component first, then the effect in the circuit.',
    conceptSummary: (topic) => `how the component or signal behaves in ${topic.label.toLowerCase()} and why the circuit responds that way`,
    expectedConcepts: ['current', 'signal', 'because'],
    offTrackKeywords: ['scientist', 'history'],
    formulaSignals: ['=', 'formula', 'voltage'],
  },
  languages: {
    buildText: (topic) => `For ${topic.label}, explain the idea in your own words and show how you would apply it in a sentence or passage.`,
    hint: 'Say what it means, then show how the language choice changes the meaning.',
    conceptSummary: (topic) => `how ${topic.label.toLowerCase()} works in language and how it changes meaning`,
    expectedConcepts: ['meaning', 'example', 'use'],
    offTrackKeywords: ['physics', 'equation'],
    formulaSignals: ['=', 'formula'],
  },
}

const QUESTION_OVERRIDES = {
  kinematics: {
    text: 'A ball is thrown vertically upward with velocity 20 m/s. Explain what happens to its velocity at the highest point.',
    hint: 'Think about the instant when the ball stops rising before falling back down.',
    estimatedTime: '2 min',
    conceptSummary: 'the velocity becomes zero for an instant at the top, while acceleration due to gravity remains downward',
    expectedConcepts: ['zero', 'gravity', 'acceleration'],
    offTrackKeywords: ['height', 'distance', 'time'],
    formulaSignals: ['20 m/s', 'v = u - gt', 'same velocity'],
  },
  'atomic-structure': {
    text: 'Why do electrons stay around the nucleus instead of flying away? Explain the main idea.',
    hint: 'Think about the attraction between charges.',
    conceptSummary: 'opposite charges attract, so electrons stay bound by electrostatic force around the nucleus',
    expectedConcepts: ['attraction', 'charge', 'nucleus'],
    offTrackKeywords: ['molecule', 'compound', 'mixture'],
  },
  derivatives: {
    text: 'What does the derivative of a function tell us? Explain it without only giving a formula.',
    hint: 'Connect the derivative to change in a quantity.',
    conceptSummary: 'a derivative represents the rate at which one quantity changes with respect to another',
    expectedConcepts: ['rate of change', 'slope', 'change'],
    offTrackKeywords: ['area', 'volume', 'probability'],
  },
  'cell-biology': {
    text: 'Why is the cell called the basic unit of life? Explain the idea clearly.',
    hint: 'Think about structure, function, and what every organism is made of.',
    conceptSummary: 'cells are the smallest units that can carry out the basic processes of life',
    expectedConcepts: ['smallest', 'life processes', 'organism'],
    offTrackKeywords: ['planet', 'machine', 'equation'],
  },
  'programming-basics': {
    text: 'Explain the difference between a variable and a constant in a program.',
    hint: 'Think about what can change while a program runs.',
    conceptSummary: 'a variable can store a value that changes, while a constant stays fixed during execution',
    expectedConcepts: ['change', 'fixed', 'value'],
    offTrackKeywords: ['network', 'database', 'internet'],
    formulaSignals: ['=', 'int', 'let'],
  },
  circuits: {
    text: 'What is the difference between an open circuit and a closed circuit?',
    hint: 'Focus on whether current has a complete path.',
    conceptSummary: 'current flows only when the circuit path is complete, so a closed circuit allows flow and an open one does not',
    expectedConcepts: ['complete path', 'current', 'flow'],
    offTrackKeywords: ['software', 'grammar', 'database'],
  },
  grammar: {
    text: 'Why does sentence grammar matter for meaning? Explain with one simple idea.',
    hint: 'Think about how word order or form can change the message.',
    conceptSummary: 'grammar organizes words so the intended meaning is clear and consistent',
    expectedConcepts: ['meaning', 'structure', 'clarity'],
    offTrackKeywords: ['force', 'equation', 'voltage'],
  },
}

function buildDefaultQuestion(subjectId, topic) {
  const config = SUBJECT_CONFIG[subjectId]
  return {
    id: `${subjectId}-${topic.id}-core`,
    subjectId,
    subjectLabel: SUBJECT_LABELS[subjectId],
    topicId: topic.id,
    topicLabel: topic.label,
    text: config.buildText(topic),
    hint: config.hint,
    estimatedTime: topic.time,
    conceptSummary: config.conceptSummary(topic),
    expectedConcepts: config.expectedConcepts,
    offTrackKeywords: config.offTrackKeywords,
    formulaSignals: config.formulaSignals,
  }
}

export const OFFLINE_QUESTION_BANK = Object.entries(TOPICS_BY_SUBJECT).flatMap(([subjectId, topics]) => (
  topics.map((topic) => {
    const baseQuestion = buildDefaultQuestion(subjectId, topic)
    const override = QUESTION_OVERRIDES[topic.id] ?? {}

    return {
      ...baseQuestion,
      ...override,
    }
  })
))

const QUESTION_BY_TOPIC = new Map(OFFLINE_QUESTION_BANK.map((question) => [question.topicId, question]))
const QUESTION_BY_ID = new Map(OFFLINE_QUESTION_BANK.map((question) => [question.id, question]))

export function getOfflineQuestionByTopicId(topicId) {
  return QUESTION_BY_TOPIC.get(topicId) ?? null
}

export function getOfflineQuestionById(questionId) {
  return QUESTION_BY_ID.get(questionId) ?? null
}
