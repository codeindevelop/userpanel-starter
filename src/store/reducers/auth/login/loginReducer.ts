import {createSlice} from '@reduxjs/toolkit';
import {loginAction} from '@/store/actions/auth/login/loginActions';
import {PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  role: [],
  permissions: [],
  can_admin: false,
  isLoginErr: false,
  isAuthenticated: false,
  loginErrMsg: '',
};

export const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login Slice
    interface User {
      id: string;
      name: string;
      roles: string[];
    }

    interface LoginPayload {
      data: {
        accessToken: string;
        user: User;
        can_admin: boolean;
        permissions: string[];
        access_token: string;
      };
    }

    interface LoginState {
      user: User | null;
      role: string[];
      permissions: string[];
      can_admin: boolean;
      isLoginErr: boolean;
      isAuthenticated: boolean;
      loginErrMsg: string;
      token?: string;
    }

    builder
      .addCase(loginAction.pending, (state: LoginState) => {
        state.isLoginErr = false;
      })
      .addCase(loginAction.fulfilled, (state: LoginState, action: PayloadAction<LoginPayload>) => {
        localStorage.setItem('authToken', action.payload.data.accessToken);
        state.isAuthenticated = true;
        state.user = action.payload.data.user;
        state.can_admin = action.payload.data.can_admin;
        state.role = action.payload.data.user.roles;
        state.permissions = action.payload.data.permissions;
        state.token = action.payload.data.access_token;
      })
      .addCase(loginAction.rejected, (state: LoginState, action) => {
        state.isLoginErr = true;

        if (action.payload) {
          state.loginErrMsg = (action.payload as {message: string})?.message || 'Login failed';
        } else {
          state.loginErrMsg = action.error.message || 'Login failed';
        }
      });
  },
});

// export const { loadUser, loginUser } = authSlice.actions;

export default loginReducer.reducer;
