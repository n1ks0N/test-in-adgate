import { AppDispatch } from "../store";
import axios from 'axios'
import { PostType } from "../types/types";
import 'dotenv/config'

export const fetchNews = () => async (dispatch: AppDispatch) => {
  try {
    const responce = await axios.get<PostType[]>('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=' + process.env.API_KEY)
  } catch (e) {

  }
}