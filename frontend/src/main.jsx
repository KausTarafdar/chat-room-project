import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvier } from './context/AuthContext.jsx'
import { SocketContextProivder } from './context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvier>
        <SocketContextProivder>
          <App />
        </SocketContextProivder>
      </AuthContextProvier> 
    </BrowserRouter>
  </React.StrictMode>,
)
