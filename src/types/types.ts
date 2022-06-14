// News API

export interface ArticleType {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: object;
  title: string;
  url: string;
  urlToImage: string;
}

export interface NewsResultType {
  status: string;
  totalResult: number;
  articles: ArticleType[];
}

export interface NewsStateType {
  news: ArticleType[];
  isLoading: boolean;
  error: string;
}

// User API

export interface AuthContextType {
  user: string;
  signin: (authData: AuthDataType, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export interface AuthDataType {
  user: string;
  pass: string;
  remember: boolean;
}

export interface UserType {
  user: string;
  isLoading: boolean;
  error: string;
}
