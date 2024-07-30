import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import InvisibleProvider from './context/InvisibleBoxProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <InvisibleProvider>
    <App />
  </InvisibleProvider>,
)
