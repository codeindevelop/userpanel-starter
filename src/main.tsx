import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';

import store from './store/reducers/store.ts';

import '@/assets/css/tailwind.css';
import '@/assets/scss/style.scss';
import { AqupilaI18nProvider } from './i18n/AqupilaI18nProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<AqupilaI18nProvider>
				<App />
			</AqupilaI18nProvider>
		</Provider>
	</StrictMode>,
);
