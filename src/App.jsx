import DataQuality from './pages/DataQuality'
import Responses from './pages/Responses'
import Participants from './pages/Participants'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Overview')

  return (
    <div className="app">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />
      
    <main className="main-content">
      {activePage === 'Overview' && <Dashboard />}

      {activePage === 'Participants' && <Participants />}

      {activePage === 'Responses' && <Responses />}

      {activePage === 'Data Quality' && <DataQuality />}
    </main>

    </div>
  )
}

export default App
