import { FC } from 'react';
import { Link } from 'react-router-dom';

const Error500: FC = () => {
	return (
		<>
			{/* begin::Title */}
			<h1 className='fw-bolder fs-2qx mb-4 text-gray-900'>System Error</h1>
			{/* end::Title */}

			{/* begin::Text */}
			<div className='fw-semibold fs-6 mb-7 text-gray-500'>
				Something went wrong! Please try again later.
			</div>
			{/* end::Text */}

			{/* begin::Link */}
			<div className='mb-0'>
				<Link to='/dashboard' className='btn btn-sm btn-primary'>
					Return Home
				</Link>
			</div>
			{/* end::Link */}
		</>
	);
};

export { Error500 };
