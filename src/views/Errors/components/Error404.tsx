import { FC } from 'react';
import { Link } from 'react-router-dom';

const Error404: FC = () => {
	return (
		<>
			{/* begin::Title */}
			<h1 className='fw-bolder fs-2hx mb-4 text-gray-900'>Oops!</h1>
			{/* end::Title */}

			{/* begin::Text */}
			<div className='fw-semibold fs-6 mb-7 text-gray-500'>
				We can't find that page.
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

export { Error404 };
