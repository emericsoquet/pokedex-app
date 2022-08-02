import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'
/* import store from './Store' */
import { Provider } from 'react-redux'

import './Styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
