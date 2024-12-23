import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import '@/assets/css/tailwind.css';
import '@/assets/scss/style.scss';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
