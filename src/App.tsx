import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
     <NavBar/>
     <Home />
    </main>
  )
}

export default App
