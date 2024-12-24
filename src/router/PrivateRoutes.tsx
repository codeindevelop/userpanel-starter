import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import MasterLayout from '@/layout/MasterLayout';
import { SuspensedView } from '@/helpers/SuspensedHelper';

const PrivateRoutes = () => {
	const DashboardPage = lazy(() => import('@/views/Dashboard/DashboardPage'));

	return (
		<Routes>
			<Route element={<MasterLayout />}>
				{/* Redirect to Dashboard after success login/registartion */}
				<Route path='auth/*' element={<Navigate to='/dashboard' />} />
				{/* Pages */}

				{/* Lazy Modules */}
				<Route
					path='dashboard'
					element={
						<SuspensedView>
							<DashboardPage />
						</SuspensedView>
					}
				/>

				{/* Page Not Found */}
				<Route path='*' element={<Navigate to='/error/404' />} />
			</Route>
		</Routes>
	);
};

export { PrivateRoutes };
