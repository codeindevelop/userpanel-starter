import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
	return (
		<>
			{/*begin::Body*/}
			<div className='justify-content-center flex-column flex-center p-md-10 w-full px-5 py-10'>
				<Outlet />
			</div>
			{/*end::Body*/}
		</>
	);
};

export { AuthLayout };
