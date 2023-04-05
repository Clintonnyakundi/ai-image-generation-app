import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// create root to which the page is constructed
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
