import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'

import Layout from './components/partials/Layout'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route 
            path='/projects'
            element={<Projects />}
          />
          <Route 
            path='/experience'
            element={<Experience />}
          />
          <Route 
            path='/about'
            element={<About />}
          />
          <Route 
            path='/contact'
            element={<Contact />}
          />
          <Route 
            path='/projects'
            element={<Projects />}
          />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
