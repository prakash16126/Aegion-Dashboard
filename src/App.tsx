import React, { useState, useEffect } from 'react'
import BuyList from './components/BuyList'
import Dashboard from './components/Dashboard'
import InventoryList from './components/InventoryList'
import Layout from './components/Layout'
import User from './components/User'
import Settings from './components/Settings'

const VIEWS = ['Dashboard', 'Buy List', 'Inventory List', 'User', 'Setting'] as const;
type View = typeof VIEWS[number];

export default function App() {
  const [search, setSearch] = useState('')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const v = localStorage.getItem('dark')
      return v === '1'
    } catch (e) {
      return false
    }
  })
  const [view, setView] = useState<View>('Dashboard')

  const handleAddComponent = () => {
    setShowAddDialog(true)
  }

  useEffect(() => {
    try {
      if (dark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('dark', '1')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('dark', '0')
      }
    } catch (e) {
      // ignore
    }
  }, [dark])

  const toggleDark = () => setDark(d => !d)

  let content = null;
  if (view === 'Dashboard') content = <Dashboard />;
  else if (view === 'Buy List') content = <BuyList search={search} onAdd={handleAddComponent} />;
  else if (view === 'Inventory List') content = <InventoryList search={search} />;
  else if (view === 'User') content = <User />;
  else if (view === 'Setting') content = <Settings />;

  return (
    <Layout 
      view={view}
      onNavigate={setView}
      search={search}
      onSearchChange={setSearch}
      onAddComponent={handleAddComponent}
      dark={dark}
      onToggleDark={toggleDark}
    >
      {content}
    </Layout>
  )
}
