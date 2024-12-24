import { Route, Routes } from 'react-router-dom';
import { ErrorsLayout } from '@/views/Errors/ErrorsLayout';
import { Error404 } from '@/views/Errors/components/Error404';
import { Error500 } from '@/views/Errors/components/Error500';

const ErrorsPage = () => (
	<Routes>
		<Route element={<ErrorsLayout />}>
			<Route path='404' element={<Error404 />} />
			<Route path='500' element={<Error500 />} />
			<Route index element={<Error404 />} />
		</Route>
	</Routes>
);

export { ErrorsPage };
