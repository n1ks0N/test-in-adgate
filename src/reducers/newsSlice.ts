import { createSlice } from '@reduxjs/toolkit';
import { PostState } from '../types/types';

interface newsState {
  news: PostState[];
  isLoading: boolean;
  error: string;
}

const initialState: newsState = {
  news: [],
  isLoading: false,
  error: '',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsFetching(state) {},
    newsFetchingSuccess(state) {},
    newsFetchingError(state) {},
  },
});

export default newsSlice.reducer;
