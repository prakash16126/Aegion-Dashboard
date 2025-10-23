import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import ThemeToggle from './ui/theme-toggle'

interface HeaderProps {
  search: string
  onSearchChange: (value: string) => void
  onAddComponent: () => void
  dark?: boolean
  onToggleDark?: () => void
}

export default function Header({ search, onSearchChange, onAddComponent, dark = false, onToggleDark }: HeaderProps) {
  return (
    <header className="flex items-center justify-end mb-8">
      <div className="flex items-center space-x-4">
        {onToggleDark && <ThemeToggle dark={!!dark} onToggle={onToggleDark} />}
        <Input
          type="search"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Search ..."
          className="w-96"
          icon={
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
      
      </div>
    </header>
  )
}
