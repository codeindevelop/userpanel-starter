import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MasterLayout: FC = () => {
	return (
		<div className='py-20'>
			<Outlet />
		</div>
	);
};

export default MasterLayout;
