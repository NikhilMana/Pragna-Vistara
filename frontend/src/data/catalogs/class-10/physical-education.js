/**
 * Generated Catalog: Class X - Physical Education
 */
export const PHYSICAL_EDUCATION_CLASS_10 = {
  classId: 'class-10',
  classLabel: 'Class X',
  subject: 'Physical Education',
  board: 'State Board',
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: 'Introduction to Physical Education',
      topics: [
        {
          id: 'ch1-t1',
          title: 'Basic Concepts',
          duration: '15 min',
          difficulty: 'foundation',
          animationType: 'physical-educationIntro',
          learningObjectives: [
            'Understand the basic concepts of Physical Education',
            'Apply fundamental principles to solve simple problems',
          ],
          mcq: [
            {
              id: 'ch1-t1-mcq1',
              text: 'What is the primary focus of this chapter?',
              options: ['Core principles', 'Advanced theories', 'Historical background', 'Practical applications'],
              correctIndex: 0,
              explanation: 'This introductory chapter focuses on core principles.'
            }
          ],
          numerical: [],
          questions: [
            {
              id: 'ch1-t1-q1',
              text: 'Explain the fundamental importance of Physical Education in everyday life.',
              hint: 'Think about practical examples where you observe these phenomena.',
              expectedConcepts: ['practical application', 'everyday observation'],
              estimatedTime: '3 min',
            }
          ],
          misconceptions: [
            {
              id: 'ch1-t1-m1',
              probe: 'Do you think Physical Education is only theoretical and has no real-world use?',
              options: ['Yes, it is mostly abstract', 'No, it applies directly to reality'],
              correctIndex: 1,
              correction: 'Physical Education provides the foundational rules governing real-world interactions.',
              detectKeywords: ['abstract', 'theoretical', 'not practical'],
            }
          ],
        }
      ]
    }
  ]
}
