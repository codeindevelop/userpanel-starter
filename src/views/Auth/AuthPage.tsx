import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from './AuthLayout';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

const AuthPage = () => (
	<Routes>
		<Route element={<AuthLayout />}>
			<Route path='login' element={<LoginPage />} />
			<Route path='registration' element={<SignupPage />} />
			<Route index element={<LoginPage />} />
		</Route>
	</Routes>
);

export { AuthPage };
