import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { createSelector } from 'reselect';
import App from '@/App';
import { AuthPage } from '@/views/Auth/AuthPage';
import { useAppSelector } from '@/store/hooks';
import { PrivateRoutes } from './PrivateRoutes';

const AppRoutes = () => {
	const reduxStateProps = createSelector(
		(state) => state.auth,
		(auth: {
			user: { isAuthenticated: boolean };
			userLoadError: string | null;
			isLogout: boolean;
		}) => {
			return {
				isAuthenticated: auth.user.isAuthenticated,
				userLoadError: auth.userLoadError,
				isLogout: auth.isLogout,
			};
		},
	);
	const { isAuthenticated } = useAppSelector(reduxStateProps);
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					{isAuthenticated ? (
						<>
							<Route path='/*' element={<PrivateRoutes />} />
							<Route index element={<Navigate to='/dashboard' />} />
						</>
					) : (
						<>
							<Route path='auth/*' element={<AuthPage />} />
							<Route path='*' element={<Navigate to='/auth' />} />
						</>
					)}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export { AppRoutes };
