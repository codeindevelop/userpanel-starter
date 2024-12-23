import {configureStore} from '@reduxjs/toolkit';
import authReducer from '@/store/reducers/auth/authReducer';

const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'production' ? false : true,
});

export default rootReducer;
