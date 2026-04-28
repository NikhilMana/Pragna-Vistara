/**
 * Icons.jsx — Lightweight inline SVG icon components.
 * All icons accept className and any other SVG props.
 * Using heroicons-style outline paths.
 */

const svg = (paths) =>
  function Icon({ className = 'w-5 h-5', ...props }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
        aria-hidden="true"
        {...props}
      >
        {paths}
      </svg>
    )
  }

export const HomeIcon = svg(
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M2.25 12L11.204 3.045a1.125 1.125 0 011.591 0L21.75 12M4.5 9.75v10.125A.375.375 0 004.875 20.25H9.75v-5.625a.375.375 0 01.375-.375h3.75a.375.375 0 01.375.375v5.625h4.875a.375.375 0 00.375-.375V9.75M8.25 20.25h7.5" />
)

export const BookOpenIcon = svg(
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
)

export const WifiOffIcon = svg(
  <>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3 3l18 18M10.584 10.587a2 2 0 002.828 2.828M6.343 6.346A8 8 0 0118 12M3 12a12 12 0 014.243-8.484" />
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 18h.01" />
  </>
)

export const CheckCircleIcon = svg(
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
)

export const XCircleIcon = svg(
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
)

export const LightBulbIcon = svg(
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a3 3 0 01-3 0M8.25 9a3.75 3.75 0 117.5 0v.075a3.975 3.975 0 01-1.453 3.047l-.093.072-.074.1-.056.056-.038.047a5.25 5.25 0 01-.38.44 3 3 0 01-2.25 1.01 3.011 3.011 0 01-2.25-1.01 5.25 5.25 0 01-.38-.44l-.038-.047-.056-.056-.074-.1-.093-.072A3.975 3.975 0 018.25 9.075V9z" />
)

export const ChevronRightIcon = svg(
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
)

export const ArrowLeftIcon = svg(
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
)

export const SparklesIcon = svg(
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
)

export const ClockIcon = svg(
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
)

export const WarningIcon = svg(
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
)
