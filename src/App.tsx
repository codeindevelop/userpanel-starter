import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutProvider from '@/layout/LayoutProvider';
import { I18nProvider } from '@/i18n/I18nProvider';

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<I18nProvider>
				<LayoutProvider>
					<div className='bg-black text-xl text-red-500'>
						<Outlet />
					</div>
				</LayoutProvider>
			</I18nProvider>
		</Suspense>
	);
}

export default App;
