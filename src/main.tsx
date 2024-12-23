import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import '@/assets/css/tailwind.css';
import '@/assets/scss/style.scss';

import App from './App.tsx';
import rootReducer from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={rootReducer}>
      <App />
    </Provider>
  </StrictMode>
);
