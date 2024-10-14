import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Router from './Router.jsx';
import '/public/styles/Index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)