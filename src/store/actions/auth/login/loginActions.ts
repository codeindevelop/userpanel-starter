import axios from 'axios';
import {AxiosError} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import crud from '@/store/cruds/auth';

export const loginAction = createAsyncThunk('login', async (data, {rejectWithValue}) => {
  try {
    const response = await axios.post(crud.loginUrl, data);
    const resData = response.data;

    // localStorage.setItem("userInfo", JSON.stringify(resData));

    return resData;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const errorResponse = error.response.data;

      return rejectWithValue(errorResponse);
    }

    throw error;
  }
});

// Get token from localstorage
const token = localStorage.getItem('authToken');

// Headers
const config = {
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

export const loadProfileAction = createAsyncThunk('user', async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get(crud.profileUrl, config);
    const resData = response.data;

    return resData;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const errorResponse = error.response.data;

      return rejectWithValue(errorResponse);
    }

    throw error;
  }
});

// /* ------------------------- Check Token & load user ------------------------ */
// export const loadProfileAction = () => {
//   // Get token from localstorage
//   const token = localStorage.getItem("authToken");

//   // Headers
//   const config = {
//     headers: {
//       "Content-type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   axios
//     .get(crud.adminLoginURL, config)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
