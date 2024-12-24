import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { AppRoutes } from './router/AppRoutes.tsx';
import store from '@/store/store.ts';
import { AqupilaI18nProvider } from '@/i18n/AqupilaI18nProvider.tsx';

import '@/assets/css/tailwind.css';
import '@/assets/scss/style.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<AqupilaI18nProvider>
				<AppRoutes />
			</AqupilaI18nProvider>
		</Provider>
	</StrictMode>,
);
