import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

/* Bootstrap 5 — grid and utilities only (no Bootstrap components, no reboot) */
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

/* Lenis smooth-scroll required styles */
import 'lenis/dist/lenis.css';

/* University of Swat design system */
import './styles/tokens.css';
import './styles/base.css';
import './styles/utilities.css';
import './styles/animations.css';

import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext';
import { CursorProvider } from './context/CursorContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <CursorProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CursorProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
