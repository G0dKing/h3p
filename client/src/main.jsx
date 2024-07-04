// main.jsx

// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages
import Home from '@p/Home'
// Styles
import '@s/main.css'
import '@s/fontawesome-all.min.css'
import '@s/noscript.css'

// Rendering
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    </Router>
  </React.StrictMode>,
)
