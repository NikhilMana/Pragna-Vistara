import useOnlineStatus from '@/hooks/useOnlineStatus'
import { WifiOffIcon } from './Icons'

/**
 * OfflineBanner — appears at the top of the viewport when the user loses connectivity.
 * Slides in/out smoothly with CSS transition.
 */
export default function OfflineBanner() {
  const isOnline = useOnlineStatus()

  return (
    <div
      id="offline-banner"
      role="alert"
      aria-live="polite"
      className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${isOnline ? 'max-h-0' : 'max-h-12'}`}
    >
      <div className="bg-accent-rose/90 backdrop-blur-sm text-white text-sm font-medium
                      flex items-center justify-center gap-2 py-2.5">
        <WifiOffIcon className="w-4 h-4 shrink-0" />
        You are offline — questions and progress are saved locally and will sync when you reconnect.
      </div>
    </div>
  )
}
