import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {LanguageContextProvider} from './context/LanguageContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LanguageContextProvider>
        <App />
    </LanguageContextProvider>
  </React.StrictMode>,
)
