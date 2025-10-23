import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

type View = 'Dashboard' | 'Buy List' | 'Inventory List' | 'User' | 'Setting';

interface LayoutProps {
  children: React.ReactNode;
  view: View;
  onNavigate: (view: View) => void;
  search: string;
  onSearchChange: (value: string) => void;
  onAddComponent: () => void;
  dark?: boolean;
  onToggleDark?: () => void;
}

export default function Layout({ 
  children, 
  view, 
  onNavigate, 
  search, 
  onSearchChange, 
  onAddComponent 
  , dark, onToggleDark
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#e9e9e9] dark:bg-gray-900 dark:text-gray-100 flex">
      <Sidebar current={view} onNavigate={onNavigate} />
      <div className="flex-1 p-8">
        <Header 
          search={search}
          onSearchChange={onSearchChange}
          onAddComponent={onAddComponent}
          {...(dark !== undefined && { dark })}
          {...(onToggleDark && { onToggleDark })}
        />
        <main className="mt-8">
          {children}
        </main>
      </div>
    </div>
  )
}