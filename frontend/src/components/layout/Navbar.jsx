import { Link, useLocation } from 'react-router-dom'
import { useOfflineSync } from '@/context/OfflineSyncContext'
import useOnlineStatus from '@/hooks/useOnlineStatus'
import {
  ArrowPathIcon,
  BookOpenIcon,
  ChartBarIcon,
  ClipboardCheckIcon,
  HomeIcon,
  WifiOffIcon,
} from '../ui/Icons'

/**
 * Navbar - top navigation bar with logo, nav links, and sync-aware status indicator.
 */
export default function Navbar() {
  const location = useLocation()
  const isOnline = useOnlineStatus()
  const { isSyncing, pendingSyncCount } = useOfflineSync()

  const links = [
    { to: '/', label: 'Home', Icon: HomeIcon },
    { to: '/progress', label: 'Progress', Icon: ChartBarIcon },
    { to: '/teacher-validation', label: 'Review', Icon: ClipboardCheckIcon },
  ]

  const statusTitle = !isOnline
    ? 'Offline - using cached content'
    : isSyncing
      ? 'Syncing offline work'
      : pendingSyncCount > 0
        ? `${pendingSyncCount} item${pendingSyncCount === 1 ? '' : 's'} waiting to sync`
        : 'Online'

  const statusClass = !isOnline
    ? 'bg-accent-rose/10 border-accent-rose/30 text-accent-rose'
    : isSyncing
      ? 'bg-primary-500/10 border-primary-500/30 text-primary-300'
      : pendingSyncCount > 0
        ? 'bg-accent-amber/10 border-accent-amber/30 text-accent-amber'
        : 'bg-accent-teal/10 border-accent-teal/30 text-accent-teal'

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border glass">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" id="nav-logo">
          <div
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-teal
                       flex items-center justify-center shadow-glow-primary/30
                       group-hover:scale-110 transition-transform duration-200"
          >
            <BookOpenIcon className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-lg text-gradient">Edu-Sakhi</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1">
            {links.map(({ to, label, Icon }) => {
              const active = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  id={`nav-link-${label.toLowerCase()}`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
                              transition-all duration-200
                              ${active
                                ? 'bg-primary-500/20 text-primary-300'
                                : 'text-surface-muted hover:text-white hover:bg-surface-card'
                              }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              )
            })}
          </div>

          <div
            id="online-status-indicator"
            title={statusTitle}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
                        border transition-all duration-300 ${statusClass}`}
          >
            {!isOnline && <><WifiOffIcon className="w-3 h-3" />Offline</>}
            {isOnline && isSyncing && <><ArrowPathIcon className="w-3 h-3 animate-spin" />Syncing</>}
            {isOnline && !isSyncing && pendingSyncCount > 0 && (
              <><span className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-pulse-slow" />{pendingSyncCount} pending</>
            )}
            {isOnline && !isSyncing && pendingSyncCount === 0 && (
              <><span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse-slow" />Online</>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
