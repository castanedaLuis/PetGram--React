import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Context from './Context'

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <Context.Provider>
      <App />
    </Context.Provider>
  </React.StrictMode>
)
