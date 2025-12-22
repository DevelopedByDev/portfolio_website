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
        className="fixed top-6 right-6 z-50 lg:hidden p-2 rounded-full bg-foreground/5 backdrop-blur-sm border border-foreground/10 hover:bg-foreground/10 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5"
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
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen z-40
          flex flex-col justify-between
          py-12 px-8
          sidebar-bg
          border-r border-foreground/5
          transition-transform duration-300 ease-out
          lg:translate-x-0 lg:w-56
          ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}
        `}
      >
        <div>
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest uppercase opacity-40">portfolio</span>
          </div>
          
          <nav className="space-y-1">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`
                  group flex items-center w-full py-2 text-left
                  transition-all duration-200
                  ${activeSection === id 
                    ? 'text-foreground' 
                    : 'text-foreground/40 hover:text-foreground/70'
                  }
                `}
              >
                <span
                  className={`
                    inline-block w-6 h-px mr-4 transition-all duration-200
                    ${activeSection === id 
                      ? 'bg-foreground w-8' 
                      : 'bg-foreground/20 group-hover:w-6 group-hover:bg-foreground/40'
                    }
                  `}
                />
                <span className="text-sm font-medium tracking-wide">{label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <span className="text-xs opacity-30 font-mono">2025</span>
        </div>
      </aside>
    </>
  )
}

