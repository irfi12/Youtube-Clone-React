import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import App_Layout from './App_Layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App_Layout/>
  </StrictMode>,
)
