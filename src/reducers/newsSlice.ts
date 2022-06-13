import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { newsType } from '../types/types';

const initialState: newsType = {
  news: [],
  isLoading: false,
  error: '',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsFetching(state) {
      state.isLoading = true
    },
    newsFetchingSuccess(state) {
      state.isLoading = false
    },
    newsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
});

export default newsSlice.reducer;
