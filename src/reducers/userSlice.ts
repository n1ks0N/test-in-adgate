import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../types/types';

const initialState: UserType = {
  user: '',
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state) {
      state.user = '';
      state.isLoading = true;
      state.error = '';
    },
    userFetchingSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = '';
    },
    userFetchingError(state) {
      state.user = '';
      state.isLoading = false;
      state.error = 'Имя пользователя или пароль введены неверно';
    },
  },
});

export default userSlice.reducer;
