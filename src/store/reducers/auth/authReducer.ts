import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from '@/store/reducers/auth/login/loginReducer';
import userReducer from '@/store/reducers/auth/user/userReducer';

const authReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
});

export default authReducer;
