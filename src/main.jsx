import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';  
import './assets/css/responsive.css';   
import './assets/css/font-awesome.min.css';
import './assets/css/style.scss'; 
import App from './App.jsx'
import './utils/i18n.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
