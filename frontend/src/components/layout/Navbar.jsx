import { Link, useLocation } from 'react-router-dom'
import { BookOpenIcon, HomeIcon, WifiOffIcon } from '../ui/Icons'
import useOnlineStatus from '@/hooks/useOnlineStatus'

/**
 * Navbar — top navigation bar with logo, nav links, and online status indicator.
 */
export default function Navbar() {
  const location = useLocation()
  const isOnline = useOnlineStatus()

  const links = [
    { to: '/', label: 'Home', Icon: HomeIcon },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border glass">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" id="nav-logo">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-teal
                          flex items-center justify-center shadow-glow-primary/30
                          group-hover:scale-110 transition-transform duration-200">
            <BookOpenIcon className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-lg text-gradient">Edu-Sakhi</span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Nav links */}
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

          {/* Online / offline dot */}
          <div
            id="online-status-indicator"
            title={isOnline ? 'Online' : 'Offline — using cached data'}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
                        border transition-all duration-300
                        ${isOnline
                          ? 'bg-accent-teal/10 border-accent-teal/30 text-accent-teal'
                          : 'bg-accent-rose/10 border-accent-rose/30 text-accent-rose'
                        }`}
          >
            {isOnline
              ? <><span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse-slow" />Online</>
              : <><WifiOffIcon className="w-3 h-3" />Offline</>
            }
          </div>
        </div>
      </nav>
    </header>
  )
}
