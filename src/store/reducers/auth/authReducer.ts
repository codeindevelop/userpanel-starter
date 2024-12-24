import { combineReducers } from '@reduxjs/toolkit';

import { loginReducer } from './login/LoginReducer';
import userReducer from './user/userReducer';

const authReducer = combineReducers({
	user: userReducer,
	login: loginReducer,
});

export default authReducer;
