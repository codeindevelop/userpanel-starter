/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

type Props = {
	children: React.ReactNode;
};

const enableLoadingScreen = () => {
	const loadingScreen = document.getElementById('loading-screen');
	if (loadingScreen) {
		loadingScreen.style.setProperty('display', 'flex');
	}
};

const disableLoadingScreen = () => {
	const loadingScreen = document.getElementById('loading-screen');
	if (loadingScreen) {
		loadingScreen.style.setProperty('display', 'none');
	}
};

function LayoutProvider({ children }: Props) {
	useEffect(() => {
		disableLoadingScreen();
	}, []);

	return <div>{children}</div>;
}

export default LayoutProvider;
