import React from 'react'

interface ThemeToggleProps {
  dark: boolean
  onToggle: () => void
}

export default function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
  return (
    <button
      aria-label="Toggle theme"
      onClick={onToggle}
      className="w-10 h-6 rounded-full flex items-center p-1 transition-colors"
      style={{ background: dark ? '#1f2937' : '#e5e7eb' }}
    >
      <span
        className="bg-white w-4 h-4 rounded-full shadow-md transform transition-transform"
        style={{ transform: dark ? 'translateX(16px)' : 'translateX(0)' }}
      />
    </button>
  )
}
