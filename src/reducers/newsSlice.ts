import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsStateType, NewsResultType } from '../types/types';

const initialState: NewsStateType = {
  news: [],
  isLoading: false,
  error: '',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsFetching(state) {
      state.news = []
      state.isLoading = true
      state.error = ''
    },
    newsFetchingSuccess(state, action: PayloadAction<NewsResultType>) {
      state.news = action.payload.articles
      state.isLoading = false
      state.error = ''
    },
    newsFetchingError(state, action: PayloadAction<string>) {
      state.news = []
      state.isLoading = false
      state.error = action.payload
    },
  },
});

export default newsSlice.reducer;
