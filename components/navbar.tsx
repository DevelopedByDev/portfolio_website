"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'

const routes = [
  { path: '/', label: 'home' },
  { path: '/experiences', label: 'experiences' },
  { path: '/projects', label: 'projects' },
  { path: '/writing', label: 'writing' },
  { path: '/misc', label: 'misc' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-foreground/10">
      <div className="max-w-4xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`nav-link ${pathname === route.path ? 'active' : ''}`}
            >
              {route.label}
            </Link>
          ))}
        </div>
        <ModeToggle />
      </div>
    </nav>
  )
}