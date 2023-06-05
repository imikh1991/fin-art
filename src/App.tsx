import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { lazy } from 'react';
import { NavBar } from './entities/NavBar'
//const WelcomePage = lazy(() => import('./welcome'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='wrapper'>
     <NavBar/>
    </main>
  )
}

export default App
