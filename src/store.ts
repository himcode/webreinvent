// store.ts

import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, getUser, setUser, logout } from './auth';

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: getUser(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      setUser(action.payload);
    },
    signupSucess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      setUser(action.payload);
    },
    logoutSuccess(state) {
      state.user = null;
      logout();
    },
  },
});

export const { loginSuccess, logoutSuccess, signupSucess } = authSlice.actions;

export const authReducer = authSlice.reducer;

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
