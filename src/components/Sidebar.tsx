import React from 'react'
import { Button } from './ui/button'

const links = [
  'Dashboard',
  'Buy List',
  'Inventory List',
  'User',
  'Setting',
] as const;
type Link = typeof links[number];

interface SidebarProps {
  current: Link;
  onNavigate: (view: Link) => void;
}

export default function Sidebar({ current, onNavigate }: SidebarProps) {
  return (
    <aside className="w-56 bg-white dark:bg-gray-800 dark:text-gray-100 min-h-screen p-6 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold mb-8">LOGO</div>
        <nav className="space-y-3">
          {links.map((l) => (
            <Button
              key={l}
              variant={l === current ? 'default' : 'ghost'}
              className={`w-full justify-start px-3 py-2 rounded-full ${l === current ? 'font-semibold bg-blue-500 text-white dark:bg-blue-500' : 'text-gray-700 dark:text-gray-200'}`}
              onClick={() => onNavigate(l)}
            >
              {l}
            </Button>
          ))}
        </nav>
      </div>

      <div className="flex items-center justify-center">
        <Button 
          variant="default"
          className="w-full justify-center gap-2 text-sm font-medium bg-red-600 hover:bg-red-700 text-white dark:bg-red-600"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </Button>
      </div>
    </aside>
  )
}
