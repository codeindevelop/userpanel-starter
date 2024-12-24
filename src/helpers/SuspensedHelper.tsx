import { FC, Suspense } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import { WithChildren } from '@/helpers';

export const SuspensedView: FC<WithChildren> = ({ children }) => {
	TopBarProgress.config({
		barColors: {
			'0': '#0d6efd',
		},
		barThickness: 1,
		shadowBlur: 5,
	});
	return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};
