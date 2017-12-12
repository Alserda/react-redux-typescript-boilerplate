import API from 'services/api/api';
import { AxiosPromise } from 'axios';

interface IRoutes {
  [index: string]: string;
}

export default class PostsAPI extends API {
  public static readonly routes: IRoutes = {
    posts: '/posts',
  };

  public static fetch(): AxiosPromise {
    return API.fetch(PostsAPI.routes.posts);
  }
}