import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/Router';
import '@fontsource-variable/inter';
import '@fontsource-variable/playfair-display';
import './styles/tokens.css';
import './styles/type.css';
import './styles/page.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
