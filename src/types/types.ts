export interface PostType {
  author: string;
  content: string;
  description: string;
  date: Date;
  source: object;
  title: string;
  url: string;
  imageUrl: string;
}

export interface newsType {
  news: PostType[];
  isLoading: boolean;
  error: string;
}

export interface AuthContextType {
  user: any;
  signin: (authData: object, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}