"use client"

import { useEffect, useState } from 'react'
import { ModeToggle } from './mode-toggle'

const sections = [
  { id: 'home', label: 'home' },
  { id: 'experiences', label: 'experiences' },
  { id: 'projects', label: 'projects' },
  { id: 'writing', label: 'writing' },
  { id: 'misc', label: 'misc' },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 lg:hidden p-2 rounded-md hover:bg-[rgb(var(--foreground)/0.05)] transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5 opacity-60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[rgb(var(--background)/0.9)] backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen z-40
          flex flex-col justify-between
          py-10 px-6
          sidebar-bg
          border-r border-[rgb(var(--foreground)/0.06)]
          transition-transform duration-300 ease-out
          lg:translate-x-0 lg:w-48
          ${isOpen ? 'translate-x-0 w-56' : '-translate-x-full w-56'}
        `}
      >
        <div>
          <nav className="space-y-0.5">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`
                  group flex items-center w-full py-1.5 text-left
                  transition-all duration-150
                  ${activeSection === id 
                    ? 'text-[rgb(var(--foreground))]' 
                    : 'text-[rgb(var(--foreground)/0.4)] hover:text-[rgb(var(--foreground)/0.7)]'
                  }
                `}
              >
                <span
                  className={`
                    inline-block h-px mr-3 transition-all duration-150
                    ${activeSection === id 
                      ? 'w-5 bg-[rgb(var(--foreground))]' 
                      : 'w-3 bg-[rgb(var(--foreground)/0.2)] group-hover:bg-[rgb(var(--foreground)/0.35)]'
                    }
                  `}
                />
                <span className="text-[13px] font-medium">{label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <span className="text-[11px] opacity-25 font-mono">2025</span>
        </div>
      </aside>
    </>
  )
}
