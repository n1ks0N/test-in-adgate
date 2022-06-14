import { AppDispatch } from '../store';
import axios from 'axios';
import { NewsResultType } from '../types/types';
import { newsSlice } from './newsSlice';

export const fetchNews = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(newsSlice.actions.newsFetching());
    const responce = await axios.get<NewsResultType>(
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=' +
        process.env.API_KEY
    );
    dispatch(newsSlice.actions.newsFetchingSuccess(responce.data));
  } catch (e: any) {
    dispatch(newsSlice.actions.newsFetchingError(e.message));
  }
};
