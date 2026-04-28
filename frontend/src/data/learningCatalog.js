import {
  BookOpenIcon,
  CodeIcon,
  CpuIcon,
  FlaskIcon,
  GlobeIcon,
  LeafIcon,
  SigmaIcon,
  AtomIcon,
} from '@/components/ui/Icons'

export const SUBJECTS = [
  {
    id: 'physics',
    label: 'Physics',
    shortLabel: 'PH',
    Icon: AtomIcon,
    gradient: 'from-sky-500/30 via-blue-500/15 to-primary-500/20',
    accent: 'text-sky-300',
    ring: 'group-hover:border-sky-400/60',
    topics: 6,
  },
  {
    id: 'chemistry',
    label: 'Chemistry',
    shortLabel: 'CH',
    Icon: FlaskIcon,
    gradient: 'from-teal-400/30 via-emerald-500/15 to-cyan-500/20',
    accent: 'text-accent-teal',
    ring: 'group-hover:border-accent-teal/60',
    topics: 6,
  },
  {
    id: 'mathematics',
    label: 'Mathematics',
    shortLabel: 'MA',
    Icon: SigmaIcon,
    gradient: 'from-violet-400/30 via-primary-500/15 to-fuchsia-500/20',
    accent: 'text-accent-violet',
    ring: 'group-hover:border-accent-violet/60',
    topics: 6,
  },
  {
    id: 'biology',
    label: 'Biology',
    shortLabel: 'BI',
    Icon: LeafIcon,
    gradient: 'from-lime-400/25 via-green-500/15 to-teal-500/20',
    accent: 'text-lime-300',
    ring: 'group-hover:border-lime-300/60',
    topics: 6,
  },
  {
    id: 'computer-science',
    label: 'Computer Science',
    shortLabel: 'CS',
    Icon: CodeIcon,
    gradient: 'from-amber-300/25 via-orange-500/15 to-rose-500/20',
    accent: 'text-accent-amber',
    ring: 'group-hover:border-accent-amber/60',
    topics: 6,
  },
  {
    id: 'electronics',
    label: 'Electronics',
    shortLabel: 'EL',
    Icon: CpuIcon,
    gradient: 'from-indigo-400/25 via-cyan-500/15 to-accent-teal/20',
    accent: 'text-cyan-300',
    ring: 'group-hover:border-cyan-300/60',
    topics: 6,
  },
  {
    id: 'languages',
    label: 'Languages',
    shortLabel: 'LA',
    Icon: GlobeIcon,
    gradient: 'from-pink-400/25 via-rose-500/15 to-amber-400/20',
    accent: 'text-pink-300',
    ring: 'group-hover:border-pink-300/60',
    topics: 6,
  },
]

export const TOPICS_BY_SUBJECT = {
  physics: [
    { id: 'kinematics', label: 'Kinematics', level: 'Start', time: '15 min' },
    { id: 'laws-of-motion', label: 'Laws of Motion', level: 'Core', time: '12 min' },
    { id: 'gravitation', label: 'Gravitation', level: 'Core', time: '10 min' },
    { id: 'thermodynamics', label: 'Thermodynamics', level: 'Deep', time: '20 min' },
    { id: 'wave-optics', label: 'Wave Optics', level: 'Deep', time: '18 min' },
    { id: 'electrostatics', label: 'Electrostatics', level: 'Core', time: '20 min' },
  ],
  chemistry: [
    { id: 'atomic-structure', label: 'Atomic Structure', level: 'Start', time: '12 min' },
    { id: 'chemical-bonding', label: 'Chemical Bonding', level: 'Core', time: '15 min' },
    { id: 'equilibrium', label: 'Equilibrium', level: 'Deep', time: '14 min' },
    { id: 'organic-basics', label: 'Organic Basics', level: 'Core', time: '18 min' },
    { id: 'redox-reactions', label: 'Redox Reactions', level: 'Core', time: '16 min' },
    { id: 'periodic-table', label: 'Periodic Table', level: 'Start', time: '10 min' },
  ],
  mathematics: [
    { id: 'limits', label: 'Limits', level: 'Core', time: '15 min' },
    { id: 'derivatives', label: 'Derivatives', level: 'Core', time: '18 min' },
    { id: 'integration', label: 'Integration', level: 'Deep', time: '22 min' },
    { id: 'probability', label: 'Probability', level: 'Start', time: '12 min' },
    { id: 'matrices', label: 'Matrices', level: 'Core', time: '14 min' },
    { id: 'vectors', label: 'Vectors', level: 'Core', time: '16 min' },
  ],
  biology: [
    { id: 'cell-biology', label: 'Cell Biology', level: 'Start', time: '12 min' },
    { id: 'genetics', label: 'Genetics', level: 'Deep', time: '20 min' },
    { id: 'human-physiology', label: 'Human Physiology', level: 'Core', time: '18 min' },
    { id: 'ecology', label: 'Ecology', level: 'Start', time: '10 min' },
    { id: 'evolution', label: 'Evolution', level: 'Core', time: '14 min' },
    { id: 'plant-systems', label: 'Plant Systems', level: 'Core', time: '16 min' },
  ],
  'computer-science': [
    { id: 'programming-basics', label: 'Programming Basics', level: 'Start', time: '12 min' },
    { id: 'data-structures', label: 'Data Structures', level: 'Core', time: '18 min' },
    { id: 'algorithms', label: 'Algorithms', level: 'Deep', time: '20 min' },
    { id: 'databases', label: 'Databases', level: 'Core', time: '14 min' },
    { id: 'networks', label: 'Networks', level: 'Core', time: '15 min' },
    { id: 'oop', label: 'OOP', level: 'Start', time: '12 min' },
  ],
  electronics: [
    { id: 'circuits', label: 'Circuits', level: 'Start', time: '12 min' },
    { id: 'semiconductors', label: 'Semiconductors', level: 'Core', time: '18 min' },
    { id: 'logic-gates', label: 'Logic Gates', level: 'Start', time: '10 min' },
    { id: 'microcontrollers', label: 'Microcontrollers', level: 'Deep', time: '20 min' },
    { id: 'sensors', label: 'Sensors', level: 'Core', time: '14 min' },
    { id: 'communication-systems', label: 'Communication', level: 'Core', time: '16 min' },
  ],
  languages: [
    { id: 'grammar', label: 'Grammar', level: 'Start', time: '10 min' },
    { id: 'reading-comprehension', label: 'Reading', level: 'Core', time: '15 min' },
    { id: 'writing-skills', label: 'Writing', level: 'Core', time: '18 min' },
    { id: 'vocabulary', label: 'Vocabulary', level: 'Start', time: '12 min' },
    { id: 'literature', label: 'Literature', level: 'Deep', time: '20 min' },
    { id: 'speaking-practice', label: 'Speaking', level: 'Core', time: '14 min' },
  ],
}

export function getSubject(subjectId) {
  return SUBJECTS.find((subject) => subject.id === subjectId)
}

export function getTopic(subjectId, topicId) {
  return TOPICS_BY_SUBJECT[subjectId]?.find((topic) => topic.id === topicId)
}
