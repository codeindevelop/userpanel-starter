import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/reducers/auth/authReducer';

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	devTools: process.env.NODE_ENV === 'production' ? false : true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
