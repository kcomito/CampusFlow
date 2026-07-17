import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* BrowserRouter watches the browser URL and makes routing feats avail to components inside it */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  
  </StrictMode>,
)
