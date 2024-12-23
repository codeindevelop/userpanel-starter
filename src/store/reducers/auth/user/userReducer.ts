import { createSlice } from '@reduxjs/toolkit';
import { loadProfileAction } from '@/store/actions/auth/login/loginActions';

const initialState = {
  user: [],
  role: [],
  permission: [],
  isAuthenticated: false,
  isLoginErr: false,
  loginErrMsg: '',
  token: localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null,
};

export const userReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Profile
    builder
      .addCase(loadProfileAction.pending, (state) => {
        state.isLoginErr = false;
      })
      .addCase(loadProfileAction.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.access_token;
      })
      .addCase(loadProfileAction.rejected, (state, action) => {
        state.isAuthenticated = false;

        // Remove Token from localstorage if profile has error
        localStorage.removeItem('authToken');

        if (action.payload) {
          state.loginErrMsg =
            (action.payload as { message: string })?.message || 'Profile Load failed';
        } else {
          state.loginErrMsg = action.error.message || 'Profile Load failed';
        }
      });
  },
});

// export const { loadUser, loginUser } = authSlice.actions;

export default userReducer.reducer;
